/**
 * Newsletter sign-up (footer form): POST /.netlify/functions/subscribe
 *
 * Body: { email, botcheck?, elapsedMs }
 * Adds the address to the Brevo list BREVO_LIST_ID. If BREVO_DOI_TEMPLATE_ID
 * and BREVO_DOI_REDIRECT_URL are both set, Brevo's double opt-in flow is used
 * (the contact is added to the list only after confirming by e-mail).
 *
 * Responses: 200 { ok: true } or 4xx/5xx { ok: false, error: <code> }.
 */
import {
  brevoErrorCode,
  brevoPost,
  fail,
  field,
  honeypotFilled,
  isValidEmail,
  ok,
  readJson,
  submittedTooFast,
} from "../lib/forms";

/** The footer field is a single input, so a shorter delay than the contact form. */
const MIN_FILL_MS = 1_500;

export default async (req: Request) => {
  if (req.method !== "POST") return fail("method_not_allowed");

  const data = await readJson(req);
  if (!data) return fail("invalid_request");

  // Honeypot filled: a bot. Answer as if it worked, but do nothing.
  if (honeypotFilled(data)) return ok();
  // Submitted too fast: almost certainly a bot; a (retryable) error, not a fake success.
  if (submittedTooFast(data, MIN_FILL_MS)) return fail("too_fast");

  const email = field(data, "email").toLowerCase();
  if (!email) return fail("missing_fields");
  if (!isValidEmail(email)) return fail("invalid_email");

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);
  if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
    console.error("[subscribe] BREVO_API_KEY or BREVO_LIST_ID is not configured");
    return fail("server_error");
  }

  const templateId = Number(process.env.BREVO_DOI_TEMPLATE_ID);
  const redirectionUrl = process.env.BREVO_DOI_REDIRECT_URL;
  const doubleOptIn = Number.isInteger(templateId) && templateId > 0 && !!redirectionUrl;

  try {
    const res = doubleOptIn
      ? await brevoPost("/contacts/doubleConfirmation", apiKey, {
          email,
          includeListIds: [listId],
          templateId,
          redirectionUrl,
        })
      : await brevoPost("/contacts", apiKey, {
          email,
          listIds: [listId],
          updateEnabled: true,
        });

    if (res.ok) return ok();

    // Already a contact: nothing more to do, report success.
    const code = await brevoErrorCode(res);
    if (code === "duplicate_parameter") return ok();

    console.error(`[subscribe] Brevo responded ${res.status} ${code}`);
    return fail("server_error");
  } catch (error) {
    console.error("[subscribe] Brevo request failed:", error);
    return fail("server_error");
  }
};
