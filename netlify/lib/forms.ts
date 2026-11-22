/**
 * Shared helpers for the form functions (netlify/functions/subscribe.mts and
 * netlify/functions/contact.mts). Server-side only: configuration comes from
 * environment variables and never reaches the browser bundle.
 */

export const BREVO_API = "https://api.brevo.com/v3";

/** Error codes returned to the browser, which maps them to translated messages. */
export type FormErrorCode =
  | "method_not_allowed"
  | "invalid_request"
  | "missing_fields"
  | "invalid_email"
  | "too_long"
  | "too_fast"
  | "server_error";

const STATUS: Record<FormErrorCode, number> = {
  method_not_allowed: 405,
  invalid_request: 400,
  missing_fields: 400,
  invalid_email: 400,
  too_long: 400,
  too_fast: 400,
  server_error: 500,
};

/** Largest request body accepted (bytes). */
const MAX_BODY_BYTES = 20_000;

export const EMAIL_MAX = 254;
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;

export function isValidEmail(email: string): boolean {
  return email.length <= EMAIL_MAX && EMAIL_RE.test(email);
}

export function ok(body: Record<string, unknown> = {}): Response {
  return Response.json({ ok: true, ...body }, { headers: { "Cache-Control": "no-store" } });
}

export function fail(error: FormErrorCode): Response {
  return Response.json(
    { ok: false, error },
    {
      status: STATUS[error],
      headers: {
        "Cache-Control": "no-store",
        ...(error === "method_not_allowed" ? { Allow: "POST" } : {}),
      },
    }
  );
}

/** Reads a JSON object body, or returns null if it is missing, too big or not an object. */
export async function readJson(req: Request): Promise<Record<string, unknown> | null> {
  try {
    const text = await req.text();
    if (!text || text.length > MAX_BODY_BYTES) return null;
    const data = JSON.parse(text);
    return data && typeof data === "object" && !Array.isArray(data) ? data : null;
  } catch {
    return null;
  }
}

/** Trimmed string value of a field ("" if absent or not a string). */
export function field(data: Record<string, unknown>, name: string): string {
  const value = data[name];
  return typeof value === "string" ? value.trim() : "";
}

/** A honeypot counts as filled for any truthy value (text or checkbox). */
export function honeypotFilled(data: Record<string, unknown>): boolean {
  const value = data.botcheck;
  return value === true || (typeof value === "string" && value.trim() !== "");
}

/**
 * Time-based bot check. The browser sends `elapsedMs`: how long the form was
 * on screen before it was submitted. Bots usually post instantly (or not
 * through the page at all, so the value is missing).
 */
export const MIN_FILL_MS = 3_000;
export function submittedTooFast(data: Record<string, unknown>, minMs = MIN_FILL_MS): boolean {
  const elapsed = data.elapsedMs;
  return typeof elapsed !== "number" || !Number.isFinite(elapsed) || elapsed < minMs;
}

/** POST a JSON body to the Brevo API v3. */
export function brevoPost(path: string, apiKey: string, body: unknown): Promise<Response> {
  return fetch(`${BREVO_API}${path}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(body),
  });
}

/** Brevo error code from a failed response ("" if the body is not JSON). */
export async function brevoErrorCode(res: Response): Promise<string> {
  try {
    const data = await res.json();
    return typeof data?.code === "string" ? data.code : "";
  } catch {
    return "";
  }
}
