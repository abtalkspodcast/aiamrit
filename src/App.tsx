import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import CommunityEnergyNetworks from "./pages/CommunityEnergyNetworks";
import SolarBatteries from "./pages/SolarBatteries";
import About from "./pages/About";
import NewDevelopments from "./pages/NewDevelopments";
import ExistingBuildings from "./pages/ExistingBuildings";

import CaseStudies from "./pages/CaseStudies";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Layout from "./components/Layout";

import EnergyReviews from "./pages/EnergyReviews";
import ElectricVehicleCharging from "./pages/ElectricVehicleCharging";
import CentralisedHotWater from "./pages/CentralisedHotWater";
import Broadband from "./pages/Broadband";
import MeterReading from "./pages/MeterReading";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Auth />} />
            <Route
              path="/community-energy-networks"
              element={<CommunityEnergyNetworks />}
            />
            <Route path="/solar-batteries" element={<SolarBatteries />} />
            <Route path="/about" element={<About />} />
            <Route path="/new-developments" element={<NewDevelopments />} />
            <Route path="/existing-buildings" element={<ExistingBuildings />} />

            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/energy-reviews" element={<EnergyReviews />} />
            <Route path="/ev-charging" element={<ElectricVehicleCharging />} />
            <Route path="/hot-water" element={<CentralisedHotWater />} />
            <Route path="/broadband" element={<Broadband />} />
            <Route path="/meter-reading" element={<MeterReading />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
