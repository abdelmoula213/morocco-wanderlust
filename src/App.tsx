import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import SaharaDesertTour from "./pages/SaharaDesertTour";
import AgafayDesert from "./pages/AgafayDesert";
import AtlasMountains from "./pages/AtlasMountains";
import OuzoudWaterfalls from "./pages/OuzoudWaterfalls";
import OurikaValley from "./pages/OurikaValley";
import Essaouira from "./pages/Essaouira";
import NotFound from "./pages/NotFound";
import BestSaharaTour from "./pages/guides/BestSaharaTour";
import SaharaDesertGuide from "./pages/guides/SaharaDesertGuide";
import TopThingsMarrakech from "./pages/guides/TopThingsMarrakech";
import AtlasMountainsGuide from "./pages/guides/AtlasMountainsGuide";
import IsMoroccoSafe from "./pages/guides/IsMoroccoSafe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sahara-desert-tour" element={<SaharaDesertTour />} />
            <Route path="/agafay-desert" element={<AgafayDesert />} />
            <Route path="/atlas-mountains" element={<AtlasMountains />} />
            <Route path="/ouzoud-waterfalls" element={<OuzoudWaterfalls />} />
            <Route path="/ourika-valley" element={<OurikaValley />} />
            <Route path="/essaouira" element={<Essaouira />} />
            <Route path="/guides/best-sahara-desert-tour-marrakech" element={<BestSaharaTour />} />
            <Route path="/guides/3-days-sahara-desert-tour-guide" element={<SaharaDesertGuide />} />
            <Route path="/guides/top-10-things-to-do-marrakech" element={<TopThingsMarrakech />} />
            <Route path="/guides/atlas-mountains-day-trip-guide" element={<AtlasMountainsGuide />} />
            <Route path="/guides/is-morocco-safe-for-tourists" element={<IsMoroccoSafe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
