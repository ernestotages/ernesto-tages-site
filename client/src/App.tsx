import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { HelmetProvider } from "react-helmet-async";
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
import ScrollToTop from "./components/ScrollToTop";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/resources" component={Resources} />
        <Route path="/contact" component={Contact} />
        <Route path="/cost-of-clarity" component={CostOfClarity} />
        <Route path="/emotional-excellence" component={EmotionalExcellence} />
        <Route path="/iberoamerican-ethical-leadership" component={IberoamericanEthicalLeadership} />
        <Route path="/clarity-matrix" component={ClarityMatrix} />
        <Route path="/resources/case-studies" component={CaseStudies} />
        <Route path="/resources/case-studies/case-a" component={CaseStudyA} />
        <Route path="/resources/case-studies/case-b" component={CaseStudyB} />
        <Route path="/resources/case-studies/case-c" component={CaseStudyC} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <LanguageProvider>
          <ThemeProvider
            defaultTheme="light"
            // switchable
          >
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </ThemeProvider>
        </LanguageProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
