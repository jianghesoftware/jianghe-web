import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import SoftwareDevelopment from "@/pages/SoftwareDevelopment";
import OverseasMarket from "@/pages/OverseasMarket";
import SocialMediaAutomation from "@/pages/SocialMediaAutomation";
import LeadGeneration from "@/pages/LeadGeneration";
import SmartHardware from "@/pages/SmartHardware";
import Consultation from "@/pages/Consultation";
import Recruitment from "@/pages/Recruitment";
import FinancialTechnology from "@/pages/FinancialTechnology";
import SmartHealthcare from "@/pages/SmartHealthcare";
import RetailManagement from "@/pages/RetailManagement";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/overseas-market" element={<OverseasMarket />} />
          <Route path="/services/social-media-automation" element={<SocialMediaAutomation />} />
          <Route path="/services/lead-generation" element={<LeadGeneration />} />
        <Route path="/services/smart-hardware" element={<SmartHardware />} />
            <Route path="/services/consultation" element={<Consultation />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/cases/financial-technology" element={<FinancialTechnology />} />
            <Route path="/cases/smart-healthcare" element={<SmartHealthcare />} />
            <Route path="/cases/retail-management" element={<RetailManagement />} />
        </Routes>
    </AuthContext.Provider>
  );
}
