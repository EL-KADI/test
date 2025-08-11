"use client";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/services-section";
import Payments from "../components/payments";
import ServerLocations from "../components/server-locations";
import HostingServices from "../components/hosting-services";
import Dashboard from "../components/dashboard-section";
import PartnersSection from "../components/partners-section";
import CustomerReviews from "../components/customer-reviews";
import Footer from "../components/footer";
import { useLanguage } from "../contexts/language-context";
import HomeSEO from "@/components/seo/HomeSEO";

export default function NomoarHosting() {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen text-white" dir={isRTL ? "rtl" : "ltr"}>
      <HomeSEO /> 
      <div className="lg:block hidden">
        <Header />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Payment Section */}
      <Payments />

      {/* Server Locations Section */}
      <ServerLocations />

      {/* Hosting Services Section */}
      <HostingServices />

      {/* Dashboard Section */}
      <Dashboard />

      {/* Partners Section */}
      <PartnersSection />

      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
}
