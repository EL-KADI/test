"use client";
import Navigation from "../../components/navigation-menu";
import Header from "../../components/header";
import Questions from "../components/questions";
import Footer from "../../components/footer";
import FeaturesSectionFour from "../components/featuresSectionFour";
import { useLanguage } from "../../contexts/language-context";
import SvgEg from "../components/svg/svg-eg";
import Sa from "../components/svg/svg-sa";
import SvgIq from "../components/svg/svg-iq";
import SvgTr from "../components/svg/svg-tr";
import SvgSd from "../components/svg/svg-sd";
import SvgAe from "../components/svg/svg-ae";
import DomainRegistrationAE from "../components/ae/domain-registration-ae";
import DomainRegistrationTR from "../components/tr/domain-registration-tr";
import DomainRegistrationSD from "../components/sd/domain-registration-sd";
import DomainRegistrationEG from "../components/eg/domain-registration-eg";
import DomainRegistrationSA from "../components/sa/domain-registration-sa";
import DomainRegistrationIQ from "../components/iq/domain-registration-iq";
import DomainStatsSA from "../components/sa/domain-stats-sa";
import DomainStatsIQ from "../components/iq/domain-stats-iq";
import DomainStatsSD from "../components/sd/domain-stats-sd";
import DomainStatsEG from "../components/eg/domain-stats-eg";
import DomainStatsAE from "../components/ae/domain-stats-ae";
import DomainStatsTR from "../components/tr/domain-stats-tr";

export default function LocalDomains() {
  const { t, selectedCountry } = useLanguage();
  const renderCountrySpecificRects = () => {
    switch (selectedCountry) {
      case "egypt":
        return (
          <>
            <SvgEg />
            <DomainRegistrationEG />
            <DomainStatsEG />
          </>
        );
      case "sudan":
        return (
          <>
            <SvgSd />
            <DomainRegistrationSD />
            <DomainStatsSD />
          </>
        );
      case "uae":
        return (
          <>
            <SvgAe />
            <DomainRegistrationAE />
            <DomainStatsAE />
          </>
        );
      case "turkey":
        return (
          <>
            <SvgTr />
            <DomainRegistrationTR />
            <DomainStatsTR />
          </>
        );
      case "iraq":
        return (
          <>
            <SvgIq />
            <DomainRegistrationIQ />
            <DomainStatsIQ />
          </>
        );
      case "saudi":
        return (
          <>
            <Sa />
            <DomainRegistrationSA />
            <DomainStatsSA />
          </>
        );
      default:
        return (
          <>
            <Sa />
            <DomainRegistrationSA />
            <DomainStatsSA />
          </>
        );
    }
  };
  const styles = `


  .draw-line-delay-1 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw 3s ease-in-out 0.5s forwards;
    fill: none;
    stroke-width: 1;
    stroke: #1B69FF; /* Corrected to user's specified blue */
  }

  .draw-line-delay-2 {
    stroke-dasharray: 1500;
    stroke-dashoffset: 1500;
    animation: draw 4s ease-in-out 2s forwards;
    fill: none;
    stroke-width: 1;
    stroke: #1B69FF; /* Corrected to user's specified blue */
  }

  .draw-line-delay-3 {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: draw 4s ease-in-out 3s forwards;
    fill: none;
    stroke-width: 1;
    stroke: #1B69FF; /* Corrected to user's specified blue */
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
  }
`;

  return (
    <>
      <Header />
      <div className="relative text-white w-full hero">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="block">
          <div className="bg-[#092346]">
            <Navigation />
          </div>
          <div className="w-full h-auto mx-auto">
            {renderCountrySpecificRects()}
          </div>
        </div>
        <div className="absolute top-16 left-1/2 text-center transform -translate-x-1/2 mt-10 w-full px-6">
          <h1 className="lg:text-4xl text-xl mb-6 text-white">
            {t("nav.domains")}
          </h1>
          <p className="text-white">   {t("domainStatsSA.chooseDomain")} </p>
          <div className="bg-white hover:bg-transparent transition duration-200 hover:text-white hover:border-2 hover:border-white text-[#092346] rounded-md px-12 py-2 w-fit mx-auto cursor-pointer font-bold mt-4">
            <p> {t("ecommerceSection.launchNow")}</p>
          </div>
        </div>
      </div>
   <div className="mt-32">
    <FeaturesSectionFour/>
    <Questions />
      <Footer /></div>   
    </>
  );
}
