/**
 * Contact form: POST /.netlify/functions/contact
 *
 * Body: { name, email, subject, message, botcheck?, elapsedMs }
 * Sends the message through Brevo's transactional e-mail API to
 * CONTACT_TO_EMAIL, from CONTACT_FROM_EMAIL (a Brevo-verified sender), with
 * the visitor's address as reply-to.
 *
 * Responses: 200 { ok: true } or 4xx/5xx { ok: false, error: <code> }.
 */
import {
  brevoPost,
  EMAIL_MAX,
  fail,
  field,
  honeypotFilled,
  isValidEmail,
  ok,
  readJson,
  submittedTooFast,
} from "../lib/forms";

/** Maximum length of each field (characters). Mirrored by maxLength in Contact.tsx. */
const LIMITS = { name: 100, email: EMAIL_MAX, subject: 200, message: 5000 } as const;

const SUBJECT_PREFIX = "[ernestotages.com]";

/** Header values must stay on one line. */
const oneLine = (value: string) => value.replace(/[\r\n\t]+/g, " ").trim();

export default async (req: Request) => {
  if (req.method !== "POST") return fail("method_not_allowed");

  const data = await readJson(req);
  if (!data) return fail("invalid_request");

  // Honeypot filled: a bot. Answer as if it worked, but send nothing.
  if (honeypotFilled(data)) return ok();
  // Submitted too fast: almost certainly a bot, but answer with a (retryable)
  // error so a very quick human never believes an unsent message went out.
  if (submittedTooFast(data)) return fail("too_fast");

  const name = oneLine(field(data, "name"));
  const email = field(data, "email");
  const subject = oneLine(field(data, "subject"));
  const message = field(data, "message");

  if (!name || !email || !subject || !message) return fail("missing_fields");
  if (
    name.length > LIMITS.name ||
    subject.length > LIMITS.subject ||
    message.length > LIMITS.message
  ) {
    return fail("too_long");
  }
  if (!isValidEmail(email)) return fail("invalid_email");

  const apiKey = process.env.BREVO_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("[contact] BREVO_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not configured");
    return fail("server_error");
  }

  try {
    const res = await brevoPost("/smtp/email", apiKey, {
      sender: { name: "Ernesto Tages Website", email: from },
      to: [{ email: to }],
      replyTo: { email, name },
      subject: `${SUBJECT_PREFIX} ${subject}`,
      // Plain text only: visitor input is never interpreted as HTML.
      textContent: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}\n`,
    });
    if (res.ok) return ok();

    console.error(`[contact] Brevo responded ${res.status}`);
    return fail("server_error");
  } catch (error) {
    console.error("[contact] Brevo request failed:", error);
    return fail("server_error");
  }
};
