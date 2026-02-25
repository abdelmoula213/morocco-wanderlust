import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SaharaDesertTour from "./pages/SaharaDesertTour";
import AgafayDesert from "./pages/AgafayDesert";
import AtlasMountains from "./pages/AtlasMountains";
import OuzoudWaterfalls from "./pages/OuzoudWaterfalls";
import OurikaValley from "./pages/OurikaValley";
import Essaouira from "./pages/Essaouira";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
