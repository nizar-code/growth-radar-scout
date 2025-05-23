
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LeadDashboard from "./pages/LeadDashboard";
import Leads from "./pages/Leads";
import PitchGenerator from "./pages/PitchGenerator";
import GeneratePitchEmail from "./pages/GeneratePitchEmail";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LeadDashboard />} />
          <Route path="/dashboard" element={<LeadDashboard />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/pitch-generator" element={<PitchGenerator />} />
          <Route path="/generate-pitch-email" element={<GeneratePitchEmail />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
