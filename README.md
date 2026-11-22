# ernestotages.com

Static, pre-rendered site (Vite + React) in English, Spanish (`/es/`) and
Portuguese (`/pt/`), deployed on Netlify. The newsletter and contact forms are
handled by Netlify Functions in `netlify/functions/` that talk to Brevo.

## Environment variables

Set these in the Netlify project settings (never in the code). They are read
only by the functions on the server and never reach the browser.

| Name | Required | What it is |
| --- | --- | --- |
| `BREVO_API_KEY` | yes | Brevo API v3 key, used by both forms. |
| `BREVO_LIST_ID` | yes | Numeric ID of the Brevo list newsletter subscribers are added to. |
| `BREVO_DOI_TEMPLATE_ID` | no | Numeric ID of the Brevo double opt-in confirmation template. |
| `BREVO_DOI_REDIRECT_URL` | no | Page visitors land on after confirming their subscription. |
| `CONTACT_TO_EMAIL` | yes | Address that receives contact form messages. |
| `CONTACT_FROM_EMAIL` | yes | Sender address for contact form messages; must be a verified sender in Brevo. |

If both `BREVO_DOI_TEMPLATE_ID` and `BREVO_DOI_REDIRECT_URL` are set, new
subscribers get Brevo's double opt-in e-mail and are added to the list after
confirming; otherwise they are added to the list directly.

Tests for the functions (Brevo mocked, no key needed): `pnpm test`.
