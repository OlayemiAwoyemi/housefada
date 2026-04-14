import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import CleaningPage from "./pages/CleaningPage.tsx";
import CulinaryPage from "./pages/CulinaryPage.tsx";
import MobilityPage from "./pages/MobilityPage.tsx";
import AgroFreshPage from "./pages/AgroFreshPage.tsx";
import AutoHubPage from "./pages/AutoHubPage.tsx";
import TechPage from "./pages/TechPage.tsx";
import RealEstatePage from "./pages/RealEstatePage.tsx";
import PublishingPage from "./pages/PublishingPage.tsx";
import TravelPage from "./pages/TravelPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cleaning" element={<CleaningPage />} />
          <Route path="/culinary" element={<CulinaryPage />} />
          <Route path="/mobility" element={<MobilityPage />} />
          <Route path="/agrofresh" element={<AgroFreshPage />} />
          <Route path="/autohub" element={<AutoHubPage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/realestate" element={<RealEstatePage />} />
          <Route path="/publishing" element={<PublishingPage />} />
          <Route path="/travel" element={<TravelPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
