import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy-load non-landing routes to shrink initial JS bundle and improve TTI
const SaharaDesertTour = lazy(() => import("./pages/SaharaDesertTour"));
const AgafayDesert = lazy(() => import("./pages/AgafayDesert"));
const AtlasMountains = lazy(() => import("./pages/AtlasMountains"));
const OuzoudWaterfalls = lazy(() => import("./pages/OuzoudWaterfalls"));
const OurikaValley = lazy(() => import("./pages/OurikaValley"));
const Essaouira = lazy(() => import("./pages/Essaouira"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BestSaharaTour = lazy(() => import("./pages/guides/BestSaharaTour"));
const SaharaDesertGuide = lazy(() => import("./pages/guides/SaharaDesertGuide"));
const TopThingsMarrakech = lazy(() => import("./pages/guides/TopThingsMarrakech"));
const AtlasMountainsGuide = lazy(() => import("./pages/guides/AtlasMountainsGuide"));
const IsMoroccoSafe = lazy(() => import("./pages/guides/IsMoroccoSafe"));
const GuidesIndex = lazy(() => import("./pages/guides/GuidesIndex"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <main>
          <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sahara-desert-tour" element={<SaharaDesertTour />} />
              <Route path="/agafay-desert" element={<AgafayDesert />} />
              <Route path="/atlas-mountains" element={<AtlasMountains />} />
              <Route path="/ouzoud-waterfalls" element={<OuzoudWaterfalls />} />
              <Route path="/ourika-valley" element={<OurikaValley />} />
              <Route path="/essaouira" element={<Essaouira />} />
              <Route path="/guides" element={<GuidesIndex />} />
              <Route path="/guides/best-sahara-desert-tour-marrakech" element={<BestSaharaTour />} />
              <Route path="/guides/3-days-sahara-desert-tour-guide" element={<SaharaDesertGuide />} />
              <Route path="/guides/top-10-things-to-do-marrakech" element={<TopThingsMarrakech />} />
              <Route path="/guides/atlas-mountains-day-trip-guide" element={<AtlasMountainsGuide />} />
              <Route path="/guides/is-morocco-safe-for-tourists" element={<IsMoroccoSafe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
