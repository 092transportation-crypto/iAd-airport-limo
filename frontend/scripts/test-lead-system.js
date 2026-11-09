/* eslint-disable */
// Standalone smoke test for the chat widget backend + shared lead helpers.
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

  await test('api/chat.js: GET status probe reports disabled with no ANTHROPIC_API_KEY', async () => {
    delete process.env.ANTHROPIC_API_KEY;
    delete require.cache[require.resolve('../api/chat.js')];
    const chat = require('../api/chat.js');
    const { req, res } = mockReqRes({ method: 'GET' });
    await chat(req, res);
    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(res.jsonBody.enabled, false);
  });

  await test('api/chat.js: 405 on other non-POST methods', async () => {
    delete require.cache[require.resolve('../api/chat.js')];
    const chat = require('../api/chat.js');
    const { req, res } = mockReqRes({ method: 'PUT' });
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
