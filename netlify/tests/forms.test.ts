/**
 * Form functions with the Brevo API mocked (no real key needed).
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import subscribe from "../functions/subscribe.mts";
import contact from "../functions/contact.mts";

const ENV_KEYS = [
  "BREVO_API_KEY",
  "BREVO_LIST_ID",
  "BREVO_DOI_TEMPLATE_ID",
  "BREVO_DOI_REDIRECT_URL",
  "CONTACT_TO_EMAIL",
  "CONTACT_FROM_EMAIL",
];

const post = (body: unknown, method = "POST") =>
  new Request("https://example.test/.netlify/functions/x", {
    method,
    headers: { "content-type": "application/json" },
    body: method === "GET" ? undefined : JSON.stringify(body),
  });

let fetchMock: ReturnType<typeof vi.fn>;
const brevoReplies = (...responses: Response[]) => {
  for (const r of responses) fetchMock.mockResolvedValueOnce(r);
};
const sentTo = (i = 0) => fetchMock.mock.calls[i][0] as string;
const sentBody = (i = 0) => JSON.parse((fetchMock.mock.calls[i][1] as RequestInit).body as string);
const sentHeaders = (i = 0) => (fetchMock.mock.calls[i][1] as RequestInit).headers as Record<string, string>;

beforeEach(() => {
  for (const k of ENV_KEYS) delete process.env[k];
  process.env.BREVO_API_KEY = "test-key";
  process.env.BREVO_LIST_ID = "7";
  process.env.CONTACT_TO_EMAIL = "owner@example.com";
  process.env.CONTACT_FROM_EMAIL = "website@example.com";
  fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
  vi.spyOn(console, "error").mockImplementation(() => {});
});
afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("subscribe", () => {
  const valid = { email: "Reader@Example.com", elapsedMs: 5000 };

  it("adds the contact to the list directly without double opt-in settings", async () => {
    brevoReplies(new Response(JSON.stringify({ id: 1 }), { status: 201 }));
    const res = await subscribe(post(valid));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
    expect(sentTo()).toBe("https://api.brevo.com/v3/contacts");
    expect(sentHeaders()["api-key"]).toBe("test-key");
    expect(sentBody()).toEqual({ email: "reader@example.com", listIds: [7], updateEnabled: true });
  });

  it("uses the double opt-in endpoint when template and redirect URL are both set", async () => {
    process.env.BREVO_DOI_TEMPLATE_ID = "12";
    process.env.BREVO_DOI_REDIRECT_URL = "https://ernestotages.com/";
    brevoReplies(new Response(null, { status: 204 }));
    const res = await subscribe(post(valid));
    expect(res.status).toBe(200);
    expect(sentTo()).toBe("https://api.brevo.com/v3/contacts/doubleConfirmation");
    expect(sentBody()).toEqual({
      email: "reader@example.com",
      includeListIds: [7],
      templateId: 12,
      redirectionUrl: "https://ernestotages.com/",
    });
  });

  it("adds directly when only one of the double opt-in variables is set", async () => {
    process.env.BREVO_DOI_TEMPLATE_ID = "12";
    brevoReplies(new Response(null, { status: 204 }));
    await subscribe(post(valid));
    expect(sentTo()).toBe("https://api.brevo.com/v3/contacts");
  });

  it("treats an existing contact as success", async () => {
    brevoReplies(
      new Response(JSON.stringify({ code: "duplicate_parameter", message: "Contact already exist" }), { status: 400 })
    );
    const res = await subscribe(post(valid));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
  });

  it("rejects an invalid e-mail without calling Brevo", async () => {
    const res = await subscribe(post({ email: "not-an-email", elapsedMs: 5000 }));
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ ok: false, error: "invalid_email" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects a missing e-mail", async () => {
    const res = await subscribe(post({ elapsedMs: 5000 }));
    expect(await res.json()).toEqual({ ok: false, error: "missing_fields" });
  });

  it("reports a server error when Brevo fails", async () => {
    brevoReplies(new Response(JSON.stringify({ code: "unauthorized" }), { status: 401 }));
    const res = await subscribe(post(valid));
    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ ok: false, error: "server_error" });
  });

  it("reports a server error when Brevo is unreachable", async () => {
    fetchMock.mockRejectedValueOnce(new Error("network"));
    const res = await subscribe(post(valid));
    expect(await res.json()).toEqual({ ok: false, error: "server_error" });
  });

  it("reports a server error when not configured", async () => {
    delete process.env.BREVO_LIST_ID;
    const res = await subscribe(post(valid));
    expect(res.status).toBe(500);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("silently ignores a filled honeypot", async () => {
    const res = await subscribe(post({ ...valid, botcheck: "x" }));
    expect(await res.json()).toEqual({ ok: true });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects instant or untimed submissions", async () => {
    for (const body of [{ email: valid.email, elapsedMs: 100 }, { email: valid.email }]) {
      const res = await subscribe(post(body));
      expect(res.status).toBe(400);
      expect(await res.json()).toEqual({ ok: false, error: "too_fast" });
    }
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("only accepts POST with a JSON body", async () => {
    expect((await subscribe(post(null, "GET"))).status).toBe(405);
    const bad = new Request("https://example.test/", { method: "POST", body: "nope" });
    expect(await (await subscribe(bad)).json()).toEqual({ ok: false, error: "invalid_request" });
  });

  it("never returns the API key", async () => {
    brevoReplies(new Response(JSON.stringify({ code: "unauthorized" }), { status: 401 }));
    const text = await (await subscribe(post(valid))).text();
    expect(text).not.toContain("test-key");
  });
});

describe("contact", () => {
  const valid = {
    name: "Ana Pérez",
    email: "ana@example.org",
    subject: "Consultancy",
    message: "Hello,\nI would like to talk.",
    elapsedMs: 10_000,
  };

  it("sends the message through Brevo transactional e-mail", async () => {
    brevoReplies(new Response(JSON.stringify({ messageId: "<1@x>" }), { status: 201 }));
    const res = await contact(post(valid));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
    expect(sentTo()).toBe("https://api.brevo.com/v3/smtp/email");
    const body = sentBody();
    expect(body.sender.email).toBe("website@example.com");
    expect(body.to).toEqual([{ email: "owner@example.com" }]);
    expect(body.replyTo).toEqual({ email: "ana@example.org", name: "Ana Pérez" });
    expect(body.subject).toBe("[ernestotages.com] Consultancy");
    expect(body.textContent).toContain("I would like to talk.");
    expect(body.htmlContent).toBeUndefined();
  });

  it("keeps the subject on one line", async () => {
    brevoReplies(new Response("{}", { status: 201 }));
    await contact(post({ ...valid, subject: "Hi\r\nBcc: x@y.z" }));
    expect(sentBody().subject).toBe("[ernestotages.com] Hi Bcc: x@y.z");
  });

  it("requires every field", async () => {
    for (const f of ["name", "email", "subject", "message"]) {
      const res = await contact(post({ ...valid, [f]: "   " }));
      expect(res.status).toBe(400);
      expect(await res.json()).toEqual({ ok: false, error: "missing_fields" });
    }
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("validates the e-mail format", async () => {
    const res = await contact(post({ ...valid, email: "ana@" }));
    expect(await res.json()).toEqual({ ok: false, error: "invalid_email" });
  });

  it("enforces length limits", async () => {
    for (const [f, n] of [["name", 101], ["subject", 201], ["message", 5001]] as const) {
      const res = await contact(post({ ...valid, [f]: "a".repeat(n) }));
      expect(await res.json()).toEqual({ ok: false, error: "too_long" });
    }
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("silently ignores a filled honeypot", async () => {
    for (const body of [{ ...valid, botcheck: true }, { ...valid, botcheck: "on" }]) {
      expect(await (await contact(post(body))).json()).toEqual({ ok: true });
    }
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects a form submitted too fast", async () => {
    const res = await contact(post({ ...valid, elapsedMs: 800 }));
    expect(await res.json()).toEqual({ ok: false, error: "too_fast" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("reports a server error when Brevo fails or is not configured", async () => {
    brevoReplies(new Response("{}", { status: 400 }));
    expect(await (await contact(post(valid))).json()).toEqual({ ok: false, error: "server_error" });
    delete process.env.CONTACT_FROM_EMAIL;
    const res = await contact(post(valid));
    expect(res.status).toBe(500);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
