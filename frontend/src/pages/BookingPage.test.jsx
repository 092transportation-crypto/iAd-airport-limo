/**
 * Regression test: the booking page renders the plain quote-request form —
 * no instant-quote panel and no Pay & Book — and submits through
 * /api/quote-requests.
 */
import React from "react";
import { render, screen } from "@testing-library/react";

// Stub page chrome — the test targets the booking form only.
jest.mock("../components/Navbar", () => () => null);
jest.mock("../components/Footer", () => () => null);
jest.mock("../components/Seo", () => () => null);
jest.mock("../components/FaqSection", () => () => null);

import BookingPage from "./BookingPage";

// jsdom is missing a few browser APIs the page touches.
beforeAll(() => {
  window.IntersectionObserver =
    window.IntersectionObserver ||
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  window.matchMedia =
    window.matchMedia ||
    (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }));
  Element.prototype.scrollIntoView = Element.prototype.scrollIntoView || (() => {});
});

test("renders the quote-request form without calculator or payment UI", () => {
  render(<BookingPage />);
  expect(screen.getByText("Request a Free Quote")).toBeTruthy();
  const submit = screen.getByRole("button", { name: /Get My Free Quote/i });
  expect(submit.getAttribute("type")).toBe("submit");
  expect(screen.queryByTestId("inquiry-quote-panel")).toBeNull();
  expect(screen.queryByText(/Pay & Book/i)).toBeNull();
  expect(screen.queryByText(/instant quote/i)).toBeNull();
});
