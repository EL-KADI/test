"use client";
import Navigation from "../../components/navigation-menu";
import Header from "../../components/header";
import Questions from "../components/questions";
import Footer from "../../components/footer";
import PriceDomains from "../components/price-domains";
import DomainInfographic from "../components/domain-infographic";
import { useLanguage } from "@/contexts/language-context";
import { Search, Star, Globe, Monitor, Shield, Briefcase, Film, ShoppingCart, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image";
import DomainPricingTable from "../components/domain-pricing-table";
import DomainFeatures from "../components/domain-features";
import SEODomains from "@/components/seo/SEODomains";
export default function Domains() {
  const { t, isRTL } = useLanguage();
  const categories = [
    { icon: Star, label: t("domainSearchSection.popular") },
    { icon: Globe, label: t("domainSearchSection.geographic") },
    { icon: Monitor, label: t("domainSearchSection.technology") },
    { icon: Shield, label: t("domainSearchSection.service") },
    { icon: Briefcase, label: t("domainSearchSection.business") },
    { icon: Film, label: t("domainSearchSection.media") },
    { icon: ShoppingCart, label: t("domainSearchSection.shopping") },
    { icon: MoreHorizontal, label: t("domainSearchSection.more") },
  ];
 

  return (
    <>
    <SEODomains/>
      <Header />
  <div className=" bg-[#092346] relative z-50"><Navigation /></div>    
   <div className="min-h-screen bg-[#092346] relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
                {t("domainSearchSection.title")}
              </h1>
              <p className="text-lg text-slate-300">{t("domainSearchSection.description")}</p>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-lg p-2 flex items-center gap-2 shadow-xl">
              <div className="flex-1 flex items-center gap-2 px-3">
                <Search className="w-5 h-5 text-slate-400" />
                <Input
                  placeholder={t("domainSearchSection.searchPlaceholder")}
                  className="border-0 bg-transparent text-slate-700 placeholder:text-slate-400 focus-visible:ring-0 text-base"
                />
              </div>
              <Button className="bg-[#2B1F51] hover:bg-slate-700 text-white px-6 py-2 rounded-xl">
                {t("domainSearchSection.searchButton")}
              </Button>
            </div>

            {/* Category Icons */}
            <div className="bg-white rounded-lg p-4 shadow-xl">
              <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
                {categories.map((category, index) => (
                  <div
                    key={`category-${index}`}
                    className="flex flex-col items-center gap-2 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors"
                  >
                    <category.icon className="w-6 h-6 text-slate-600" />
                    <span className="text-xs text-slate-600 font-medium">{category.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image للشاشات الكبيرة */}
          <div className="hidden lg:flex justify-end">
            <div className="w-full max-w-md h-96">
              <Image
                width={600}
                height={600}
                loading="lazy"
                src="/bg-domain.avif"
                alt={t("domainSearchSection.domainImageAlt")}
                className="w-full mt-20 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Image للشاشات الصغيرة */}
      <div
        className="lg:hidden absolute inset-0 translate-y-[27.5rem] bg-bottom bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url('/bg-domain.avif')",
        }}
      ></div>
    </div>
  <PriceDomains/>
  <DomainInfographic/>
  <DomainPricingTable/>
  <DomainFeatures/>
      <Questions />

      <Footer />
    </>
  );
}
