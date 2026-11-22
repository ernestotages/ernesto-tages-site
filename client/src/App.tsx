import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useBrowserLocation } from "wouter/use-browser-location";
import { useCallback, type ComponentType } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import {
  LanguageProvider,
  useLanguage,
  type Language,
} from "./contexts/LanguageContext";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { siteGraph } from "./lib/structuredData";
import { localizedHref, pageLocales, parseLocalePath } from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import CostOfClarity from "./pages/CostOfClarity";
import EmotionalExcellence from "./pages/EmotionalExcellence";
import IberoamericanEthicalLeadership from "./pages/IberoamericanEthicalLeadership";
import ClarityMatrix from "./pages/ClarityMatrix";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyA from "./pages/CaseStudyA";
import CaseStudyB from "./pages/CaseStudyB";
import CaseStudyC from "./pages/CaseStudyC";
import Talks from "./pages/Talks";
import InsightsEssays from "./pages/InsightsEssays";
import FrameworksTools from "./pages/FrameworksTools";
import IndividualConsultancy from "./pages/IndividualConsultancy";
import ConferencesSeminars from "./pages/ConferencesSeminars";
import ScrollToTop from "./components/ScrollToTop";

/** Unprefixed page path -> page component. Must match PAGE_PATHS in routes.ts. */
const PAGES: [string, ComponentType<any>][] = [
  ["/", Home],
  ["/about", About],
  ["/services", Services],
  ["/services/individual-consultancy", IndividualConsultancy],
  ["/services/conferences-seminars", ConferencesSeminars],
  ["/resources", Resources],
  ["/contact", Contact],
  ["/cost-of-clarity", CostOfClarity],
  ["/emotional-excellence", EmotionalExcellence],
  ["/iberoamerican-ethical-leadership", IberoamericanEthicalLeadership],
  ["/clarity-matrix", ClarityMatrix],
  ["/resources/insights-essays", InsightsEssays],
  ["/resources/frameworks-tools", FrameworksTools],
  ["/resources/talks", Talks],
  ["/resources/case-studies", CaseStudies],
  ["/resources/case-studies/case-a", CaseStudyA],
  ["/resources/case-studies/case-b", CaseStudyB],
  ["/resources/case-studies/case-c", CaseStudyC],
];

function Router() {
  const { urlLocale } = useLanguage();
  // Only the language versions that exist are routed: /es/clarity-matrix,
  // for instance, falls through to the (Spanish) not-found page.
  const pages = PAGES.filter(([path]) => pageLocales(path).includes(urlLocale));

  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <ScrollToTop />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(siteGraph)}</script>
      </Helmet>
      <Header />
      <Switch>
        {pages.map(([path, component]) => (
          <Route key={path} path={path} component={component} />
        ))}
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

/**
 * Location hook for the router: pages see the path without its locale
 * prefix ("/es/about" -> "/about"), and every navigation goes through the
 * router's `hrefs` so it lands on the visitor's language version.
 */
type RouterLike = { ssrPath?: string; hrefs: (href: string, router?: any) => string };
const useLocaleLocation = (router: RouterLike) => {
  const [pathname, navigate] = useBrowserLocation(router);
  return [
    parseLocalePath(pathname).path,
    (to: string, options?: any) => navigate(router.hrefs(to), options),
  ] as [string, (to: string, options?: any) => void];
};

/** Toast area, with its screen-reader label in the visitor's language. */
function LocalizedToaster() {
  const { t } = useLanguage();
  return <Toaster containerAriaLabel={t("nav.notifications")} />;
}

function LocalizedRouter({ ssrPath }: { ssrPath?: string }) {
  const { language } = useLanguage();
  const hrefs = useCallback((href: string) => localizedHref(href, language), [language]);
  return (
    <WouterRouter
      hook={useLocaleLocation as any}
      hrefs={hrefs}
      ssrPath={ssrPath}
    >
      <Router />
    </WouterRouter>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

interface AppProps {
  /** Set only during build-time pre-rendering: the URL being rendered. */
  ssrPath?: string;
  /** Collects <Helmet> tags during pre-rendering. */
  helmetContext?: Record<string, unknown>;
  initialLanguage?: Language;
}

function App({ ssrPath, helmetContext, initialLanguage }: AppProps = {}) {
  // Full URL path, including the locale prefix. During pre-rendering it is
  // the page being rendered; in the browser it follows client navigation.
  const [pathname] = useBrowserLocation({ ssrPath });
  const { locale, path } = parseLocalePath(pathname);

  return (
    <ErrorBoundary>
      <HelmetProvider context={helmetContext}>
        <LanguageProvider
          initialLanguage={initialLanguage}
          urlLocale={locale}
          pagePath={path}
        >
          <ThemeProvider
            defaultTheme="light"
            // switchable
          >
            <TooltipProvider>
              <LocalizedToaster />
              <LocalizedRouter ssrPath={ssrPath} />
            </TooltipProvider>
          </ThemeProvider>
        </LanguageProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
