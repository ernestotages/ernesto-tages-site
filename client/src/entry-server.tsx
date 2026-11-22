/**
 * Build-time renderer used by scripts/prerender.mjs. Runs in Node, never in
 * the browser. Browser-only code (window, localStorage, reCAPTCHA, analytics,
 * the newsletter submit handler) lives in effects / event handlers, which
 * React does not run during renderToString.
 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { renderToString } from "react-dom/server";
import superjson from "superjson";
import App from "./App";
import { trpc } from "./lib/trpc";
import type { Locale } from "./routes";

export {
  getPrerenderRoutes,
  PAGE_PATHS,
  LOCALES,
  DEFAULT_LOCALE,
  localizedPath,
} from "./routes";

export function render(url: string, locale: Locale = "en") {
  const queryClient = new QueryClient();
  // Never called during rendering (the only tRPC use is a mutation that fires
  // on form submit); it just satisfies the provider.
  const trpcClient = trpc.createClient({
    links: [httpBatchLink({ url: "/api/trpc", transformer: superjson })],
  });
  const helmetContext: { helmet?: any } = {};

  const html = renderToString(
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <App ssrPath={url} helmetContext={helmetContext} initialLanguage={locale} />
      </QueryClientProvider>
    </trpc.Provider>
  );

  const h = helmetContext.helmet;
  const head = h
    ? [h.title, h.meta, h.link, h.script].map(t => t.toString()).join("\n    ")
    : "";
  const htmlAttributes = h ? h.htmlAttributes.toString() : "";

  return { html, head, htmlAttributes };
}
