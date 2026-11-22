import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { removeLegacyBrowserData } from "./lib/legacyCleanup";
import "./index.css";

// Delete storage and cookies left by the former reCAPTCHA and Google
// Analytics integrations (see lib/legacyCleanup.ts).
removeLegacyBrowserData();

const app = <App />;

const container = document.getElementById("root")!;

// Pages are pre-rendered at build time: attach React to the existing markup.
// Fall back to a fresh render if the HTML shell is empty (e.g. `vite dev`).
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
