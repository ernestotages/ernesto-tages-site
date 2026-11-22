/**
 * Browser side of the form functions in netlify/functions/ (subscribe,
 * contact). Returns the function's error code so the form can show the
 * matching translated message; network failures count as "server_error".
 */
export type FormResult =
  | { ok: true }
  | { ok: false; error: "missing_fields" | "invalid_email" | "too_long" | "too_fast" | "server_error" | string };

export async function postForm(fn: "subscribe" | "contact", body: Record<string, unknown>): Promise<FormResult> {
  try {
    const res = await fetch(`/.netlify/functions/${fn}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => null);
    if (res.ok && data?.ok) return { ok: true };
    return { ok: false, error: typeof data?.error === "string" ? data.error : "server_error" };
  } catch {
    return { ok: false, error: "server_error" };
  }
}
