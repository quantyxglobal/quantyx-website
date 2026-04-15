import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load pages for better performance
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Quote = lazy(() => import("./pages/Quote"));

// Lazy load service pages
const MedicalChronology = lazy(() => import("./pages/services/MedicalChronology"));
const MedicalOpinions = lazy(() => import("./pages/services/MedicalOpinions"));
const NarrativeSummary = lazy(() => import("./pages/services/NarrativeSummary"));
const MedicalExpenses = lazy(() => import("./pages/services/MedicalExpenses"));
const DemandLetter = lazy(() => import("./pages/services/DemandLetter"));
const HyperlinksBookmarks = lazy(() => import("./pages/services/HyperlinksBookmarks"));

// Lazy load policy pages
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const ProfessionalEthics = lazy(() => import("./pages/ProfessionalEthics"));
const Licensing = lazy(() => import("./pages/Licensing"));
const AIBestPractices = lazy(() => import("./pages/AIBestPractices"));
const HipaaPipedaCompliance = lazy(() => import("./pages/HipaaPipedaCompliance"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-upload" element={<Contact />} />
            <Route path="/contact" element={<Contact />} /> {/* Redirect old URL */}
            <Route path="/quote" element={<Quote />} />
            <Route path="/services/medical-chronology" element={<MedicalChronology />} />
            <Route path="/services/medical-opinions" element={<MedicalOpinions />} />
            <Route path="/services/narrative-summary" element={<NarrativeSummary />} />
            <Route path="/services/medical-expenses" element={<MedicalExpenses />} />
            <Route path="/services/demand-letter" element={<DemandLetter />} />
            <Route path="/services/hyperlinks-bookmarks" element={<HyperlinksBookmarks />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/professional-ethics" element={<ProfessionalEthics />} />
            <Route path="/licensing" element={<Licensing />} />
            <Route path="/ai-best-practices" element={<AIBestPractices />} />
            <Route path="/hipaa-pipeda-compliance" element={<HipaaPipedaCompliance />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
