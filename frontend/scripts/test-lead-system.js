/* eslint-disable */
// Standalone smoke test for the chat widget + lead-capture backend.
// Invokes the Vercel serverless function handlers directly (mock req/res —
// no HTTP server needed) so it can run with plain `node`, matching the
// repo's existing api/*.js self-contained style.
//
// Run with: node scripts/test-lead-system.js

const assert = require('assert');

let passed = 0;
let failed = 0;

async function test(name, fn) {
  const start = Date.now();
  try {
    await fn();
    const ms = Date.now() - start;
    console.log(`PASS  ${name} (${ms}ms)`);
    passed += 1;
  } catch (err) {
    const ms = Date.now() - start;
    console.error(`FAIL  ${name} (${ms}ms)`);
    console.error(`      ${err && err.stack ? err.stack : err}`);
    failed += 1;
  }
}

// Minimal mock of the (req, res) shape Vercel passes to a Node function.
function mockReqRes({ method = 'POST', body = {} } = {}) {
  const req = { method, body };
  const res = {
    statusCode: 200,
    headers: {},
    jsonBody: undefined,
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.jsonBody = payload;
      return this;
    },
  };
  return { req, res };
}

async function main() {
  // ---------------------------------------------------------------------
  // api/chat.js — graceful fallback with no ANTHROPIC_API_KEY (no crash)
  // ---------------------------------------------------------------------
  await test('api/chat.js: 200 + friendly fallback when ANTHROPIC_API_KEY is unset', async () => {
    delete process.env.ANTHROPIC_API_KEY;
    delete require.cache[require.resolve('../api/chat.js')];
    const chat = require('../api/chat.js');

    const { req, res } = mockReqRes({
      body: { messages: [{ role: 'user', content: 'How much to IAD?' }] },
    });
    await chat(req, res);

    assert.strictEqual(res.statusCode, 200, 'expected HTTP 200');
    assert.strictEqual(typeof res.jsonBody.reply, 'string', 'expected a reply string');
    assert.ok(res.jsonBody.reply.includes('877'), 'expected the real phone number in the fallback');
    assert.ok(!res.jsonBody.leadCaptured, 'should not claim a lead was captured');
  });

  await test('api/chat.js: 200 + greeting when messages array is empty', async () => {
    delete require.cache[require.resolve('../api/chat.js')];
    const chat = require('../api/chat.js');
    const { req, res } = mockReqRes({ body: { messages: [] } });
    await chat(req, res);
    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(typeof res.jsonBody.reply, 'string');
  });

  await test('api/chat.js: 405 on non-POST', async () => {
    delete require.cache[require.resolve('../api/chat.js')];
    const chat = require('../api/chat.js');
    const { req, res } = mockReqRes({ method: 'GET' });
    await chat(req, res);
    assert.strictEqual(res.statusCode, 405);
  });

  await test('api/chat.js: never throws even with a garbage ANTHROPIC_API_KEY (network/API error path)', async () => {
    process.env.ANTHROPIC_API_KEY = 'sk-ant-test-invalid-key-does-not-exist';
    delete require.cache[require.resolve('../api/chat.js')];
    const chat = require('../api/chat.js');
    const { req, res } = mockReqRes({
      body: { messages: [{ role: 'user', content: 'Hi' }] },
    });
    await chat(req, res); // must not reject / throw
    assert.strictEqual(res.statusCode, 200, 'chat endpoint must always return 200, never crash');
    assert.strictEqual(typeof res.jsonBody.reply, 'string');
    delete process.env.ANTHROPIC_API_KEY;
  });

  // ---------------------------------------------------------------------
  // api/lead-capture.js — validation
  // ---------------------------------------------------------------------
  await test('api/lead-capture.js: 400 when name is missing', async () => {
    delete require.cache[require.resolve('../api/lead-capture.js')];
    const leadCapture = require('../api/lead-capture.js');
    const { req, res } = mockReqRes({ body: { phone: '8776091919' } });
    await leadCapture(req, res);
    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.jsonBody.success, false);
  });

  await test('api/lead-capture.js: 400 when phone is missing', async () => {
    delete require.cache[require.resolve('../api/lead-capture.js')];
    const leadCapture = require('../api/lead-capture.js');
    const { req, res } = mockReqRes({ body: { name: 'Jane Doe' } });
    await leadCapture(req, res);
    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.jsonBody.success, false);
  });

  await test('api/lead-capture.js: 400 when phone is invalid (too short)', async () => {
    delete require.cache[require.resolve('../api/lead-capture.js')];
    const leadCapture = require('../api/lead-capture.js');
    const { req, res } = mockReqRes({ body: { name: 'Jane Doe', phone: '123' } });
    await leadCapture(req, res);
    assert.strictEqual(res.statusCode, 400);
  });

  await test('api/lead-capture.js: 400 when email is present but invalid', async () => {
    delete require.cache[require.resolve('../api/lead-capture.js')];
    const leadCapture = require('../api/lead-capture.js');
    const { req, res } = mockReqRes({
      body: { name: 'Jane Doe', phone: '877-609-1919', email: 'not-an-email' },
    });
    await leadCapture(req, res);
    assert.strictEqual(res.statusCode, 400);
  });

  await test('api/lead-capture.js: 405 on non-POST', async () => {
    delete require.cache[require.resolve('../api/lead-capture.js')];
    const leadCapture = require('../api/lead-capture.js');
    const { req, res } = mockReqRes({ method: 'GET' });
    await leadCapture(req, res);
    assert.strictEqual(res.statusCode, 405);
  });

  // ---------------------------------------------------------------------
  // api/lead-capture.js — 201 + doesn't hang when Twilio/webhook env is
  // unset, and when LEAD_WEBHOOK_URL points at an unreachable host.
  // ---------------------------------------------------------------------
  await test('api/lead-capture.js: 201 and fast when Twilio + webhook env vars are all unset', async () => {
    delete process.env.TWILIO_ACCOUNT_SID;
    delete process.env.TWILIO_AUTH_TOKEN;
    delete process.env.TWILIO_FROM_NUMBER;
    delete process.env.ALERT_PHONE_NUMBER;
    delete process.env.LEAD_WEBHOOK_URL;
    delete require.cache[require.resolve('../api/lead-capture.js')];
    delete require.cache[require.resolve('../lib/sms.js')];
    delete require.cache[require.resolve('../lib/leadWebhook.js')];
    const leadCapture = require('../api/lead-capture.js');

    const { req, res } = mockReqRes({
      body: { name: 'Jane Doe', phone: '877-609-1919', email: 'jane@example.com', source: 'lead_popup' },
    });

    const start = Date.now();
    await leadCapture(req, res);
    const elapsedMs = Date.now() - start;

    assert.strictEqual(res.statusCode, 201);
    assert.strictEqual(res.jsonBody.success, true);
    assert.ok(elapsedMs < 2000, `expected a near-instant no-op skip, took ${elapsedMs}ms`);
  });

  await test(
    'api/lead-capture.js: 201 and bounded by the 6s timeout when LEAD_WEBHOOK_URL is an unreachable host',
    async () => {
      // 10.255.255.1 is a non-routable private address most networks silently
      // drop — a real test of whether the AbortController timeout actually
      // bounds the request, rather than a fast ECONNREFUSED on a closed port.
      process.env.LEAD_WEBHOOK_URL = 'http://10.255.255.1:65535/webhook';
      delete process.env.TWILIO_ACCOUNT_SID;
      delete process.env.TWILIO_AUTH_TOKEN;
      delete process.env.TWILIO_FROM_NUMBER;
      delete process.env.ALERT_PHONE_NUMBER;
      delete require.cache[require.resolve('../api/lead-capture.js')];
      delete require.cache[require.resolve('../lib/sms.js')];
      delete require.cache[require.resolve('../lib/leadWebhook.js')];
      const leadCapture = require('../api/lead-capture.js');

      const { req, res } = mockReqRes({
        body: { name: 'Jane Doe', phone: '877-609-1919' },
      });

      const start = Date.now();
      await leadCapture(req, res);
      const elapsedMs = Date.now() - start;

      assert.strictEqual(res.statusCode, 201, 'must still succeed even if the webhook is unreachable');
      assert.strictEqual(res.jsonBody.success, true);
      // The helper's own AbortController timeout is 6s; allow generous slack
      // for CI/test overhead but prove it did NOT hang on the OS-level TCP
      // timeout (which would be 20s+ for a blackholed address).
      assert.ok(
        elapsedMs < 10000,
        `expected the 6s internal timeout to bound the request, took ${elapsedMs}ms`
      );
      delete process.env.LEAD_WEBHOOK_URL;
    }
  );

  // ---------------------------------------------------------------------
  // lib/sms.js / lib/leadWebhook.js — never throw, no-op when unconfigured
  // ---------------------------------------------------------------------
  await test('lib/sms.js: sendSms no-ops (does not throw) with no Twilio env vars', async () => {
    delete process.env.TWILIO_ACCOUNT_SID;
    delete process.env.TWILIO_AUTH_TOKEN;
    delete process.env.TWILIO_FROM_NUMBER;
    delete process.env.ALERT_PHONE_NUMBER;
    delete require.cache[require.resolve('../lib/sms.js')];
    const { sendSms } = require('../lib/sms.js');
    const result = await sendSms('test message');
    assert.strictEqual(result.skipped, true);
  });

  await test('lib/leadWebhook.js: notifyLeadWebhook no-ops (does not throw) with no LEAD_WEBHOOK_URL', async () => {
    delete process.env.LEAD_WEBHOOK_URL;
    delete require.cache[require.resolve('../lib/leadWebhook.js')];
    const { notifyLeadWebhook } = require('../lib/leadWebhook.js');
    const result = await notifyLeadWebhook({ hello: 'world' });
    assert.strictEqual(result.skipped, true);
  });

  console.log(`\n${passed} passed, ${failed} failed`);
  if (failed > 0) process.exitCode = 1;
}

main();
