"use client";

import Image from "next/image";
import { useLanguage } from "../../../contexts/language-context";
import CountrySelector from "./country-selector";

// SVG Icons
const CPUIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_9_109914)">
      <path
        d="M15.9844 24.6742C15.9844 25.4056 16.5778 25.9991 17.3092 25.9991C18.0406 25.9991 18.6341 25.4056 18.6341 24.6742V22.5352H15.9871V24.6742H15.9844Z"
        fill="#171717"
      />
      <path
        d="M15.9844 1.32484V3.46391H18.6313V1.32484C18.6313 0.593418 18.0379 0 17.3065 0C16.575 0 15.9844 0.593418 15.9844 1.32484Z"
        fill="#171717"
      />
      <path
        d="M11.6719 1.32484V3.46391H14.3216V1.32484C14.3216 0.593418 13.7281 0 12.9967 0C12.2653 0 11.6719 0.593418 11.6719 1.32484Z"
        fill="#171717"
      />
      <path
        d="M11.6719 24.6742C11.6719 25.4056 12.2653 25.9991 12.9967 25.9991C13.7281 25.9991 14.3216 25.4056 14.3216 24.6742V22.5352H11.6719V24.6742Z"
        fill="#171717"
      />
      <path
        d="M7.36719 1.32484V3.46391H10.0141V1.32484C10.0141 0.593418 9.42069 0 8.68927 0C7.95785 0 7.36719 0.593418 7.36719 1.32484Z"
        fill="#171717"
      />
      <path
        d="M7.36719 24.6742C7.36719 25.4056 7.96061 25.9991 8.69203 25.9991C9.42345 25.9991 10.0169 25.4056 10.0169 24.6742V22.5352H7.36719V24.6742Z"
        fill="#171717"
      />
      <path
        d="M0 17.3065C0 18.0379 0.593418 18.6313 1.32484 18.6313H3.46391V15.9844H1.32484C0.593418 15.9844 0 16.575 0 17.3065Z"
        fill="#171717"
      />
      <path
        d="M24.6781 15.9844H22.5391V18.6313H24.6781C25.4096 18.6313 26.003 18.0379 26.003 17.3065C26.003 16.575 25.4096 15.9844 24.6781 15.9844Z"
        fill="#171717"
      />
      <path
        d="M0 13.0006C0 13.732 0.593418 14.3255 1.32484 14.3255H3.46391V11.6758H1.32484C0.593418 11.6758 0 12.2692 0 13.0006Z"
        fill="#171717"
      />
      <path
        d="M24.6781 11.6758H22.5391V14.3255H24.6781C25.4096 14.3255 26.003 13.732 26.003 13.0006C26.003 12.2692 25.4096 11.6758 24.6781 11.6758Z"
        fill="#171717"
      />
      <path
        d="M0 8.69593C0 9.42736 0.593418 10.0208 1.32484 10.0208H3.46391V7.37109H1.32484C0.593418 7.37109 0 7.96451 0 8.69593Z"
        fill="#171717"
      />
      <path
        d="M24.6781 7.37109H22.5391V10.018H24.6781C25.4096 10.018 26.003 9.4246 26.003 8.69317C26.003 7.96175 25.4096 7.37109 24.6781 7.37109Z"
        fill="#171717"
      />
      <path
        d="M4.73438 19.8817C4.73438 20.6435 5.35263 21.2618 6.11442 21.2618H19.8817C20.6435 21.2618 21.2618 20.6435 21.2618 19.8817V6.11442C21.2618 5.35263 20.6435 4.73438 19.8817 4.73438H6.11442C5.35263 4.73438 4.73438 5.35263 4.73438 6.11442V19.8817Z"
        fill="#171717"
      />
    </g>
    <defs>
      <clipPath id="clip0_9_109914">
        <rect width="26" height="26" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const StorageIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.7852 15.3259C25.7811 15.3159 25.7829 15.3052 25.7784 15.2952L21.1092 4.85281C20.6738 3.87893 19.7031 3.25 18.6372 3.25H7.36328C6.29688 3.25 5.32619 3.87893 4.89034 4.85281L0.22166 15.2952C0.217141 15.3052 0.218969 15.3159 0.214805 15.3259C0.0809961 15.6073 0 15.9182 0 16.25V20.5833C0 21.7783 0.971699 22.75 2.16668 22.75H23.8334C25.0283 22.75 26 21.7783 26 20.5833V16.25C26 15.9182 25.919 15.6073 25.7852 15.3259ZM21.6667 19.5C21.0695 19.5 20.5834 19.0139 20.5834 18.4167C20.5834 17.8195 21.0695 17.3334 21.6667 17.3334C22.2639 17.3334 22.75 17.8194 22.75 18.4167C22.75 19.0139 22.2639 19.5 21.6667 19.5ZM3.13711 14.0833L6.86816 5.73721C6.95546 5.54257 7.14959 5.41663 7.36328 5.41663H18.6372C18.8504 5.41663 19.0445 5.54252 19.1313 5.73721L22.8627 14.0833H3.13711Z"
      fill="#171717"
    />
  </svg>
);

const DatabaseIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_9_109896)">
      <path
        d="M9.75 1.625V7.04167H6.5V1.625C6.5 0.725833 7.22583 0 8.125 0C9.02417 0 9.75 0.725833 9.75 1.625Z"
        fill="#171717"
      />
      <path
        d="M19.5 1.625V7.04167H16.25V1.625C16.25 0.725833 16.9758 0 17.875 0C18.7742 0 19.5 0.725833 19.5 1.625Z"
        fill="#171717"
      />
      <path
        d="M13.2708 20.5846H12.7292C7.50208 20.5846 3.25 16.3326 3.25 11.1055V10.5638C3.25 9.51839 4.10042 8.66797 5.14583 8.66797H20.8542C21.8996 8.66797 22.75 9.51839 22.75 10.5638V11.1055C22.75 16.3326 18.4979 20.5846 13.2708 20.5846Z"
        fill="#171717"
      />
      <path
        d="M16.2474 26.0013C15.6483 26.0013 15.1641 25.516 15.1641 24.918C15.1641 24.619 14.9203 24.3763 14.6224 24.3763C13.1285 24.3763 11.9141 23.1608 11.9141 21.668V19.5013C11.9141 18.9033 12.3983 18.418 12.9974 18.418C13.5965 18.418 14.0807 18.9033 14.0807 19.5013V21.668C14.0807 21.967 14.3245 22.2096 14.6224 22.2096C16.1163 22.2096 17.3307 23.4251 17.3307 24.918C17.3307 25.516 16.8465 26.0013 16.2474 26.0013Z"
        fill="#171717"
      />
    </g>
    <defs>
      <clipPath id="clip0_9_109896">
        <rect width="26" height="26" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const RAMIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.4133 19.5V22.75H23.8316C24.8574 22.75 26 21.9527 26 20.8051V16.25C26 15.6508 25.5125 15.1684 24.9184 15.1633C24.9082 15.1633 23.8367 15.1379 23.8367 14.0816C23.8367 13.3809 24.0093 13 24.9184 13C25.5125 13 26 12.5176 26 11.9184V9.75H0V11.9234C0 12.5227 0.482422 13.0051 1.08164 13.0051C1.99062 13.0051 2.16328 13.3859 2.16328 14.0867C2.16328 15.1378 1.0918 15.1684 1.08164 15.1684C0.4875 15.1684 0 15.6508 0 16.25V20.8051C0 21.9527 1.14258 22.75 2.16836 22.75H7.58672V19.5C7.58672 18.9008 8.06914 18.4184 8.66836 18.4184C9.2625 18.4184 9.75 18.9008 9.75 19.5V22.75H11.9184V17.3316C11.9184 16.7324 12.4059 16.25 13 16.25C13.5941 16.25 14.0816 16.7324 14.0816 17.3316V22.75H16.25V19.5C16.25 18.9008 16.7324 18.4184 17.3316 18.4184C17.9309 18.4184 18.4184 18.9008 18.4133 19.5ZM7.58164 14.0816V11.9133H9.75V14.0816H7.58164ZM11.9133 14.0816V11.9133H14.0816V14.0816H11.9133ZM16.25 14.0816V11.9133H18.4184V14.0816H16.25Z"
      fill="#171717"
    />
    <path
      d="M26 4.33164C26 3.73242 25.5125 3.25 24.9184 3.25H1.08164C0.4875 3.25 0 3.73242 0 4.33164V7.58164H26V4.33164Z"
      fill="#171717"
    />
  </svg>
);

const BandwidthIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_9_109883)">
      <path
        d="M19.0322 4.71708C18.7897 4.56622 18.4921 4.57872 18.2675 4.72407L11.9651 8.60914C10.4176 8.7286 8.99219 9.9597 8.99219 11.7773C8.99219 13.5401 10.4226 14.9548 12.1795 14.9548C14.0035 14.9548 15.2362 13.5374 15.3572 11.9967L19.2622 5.70136C19.4703 5.36588 19.3673 4.92536 19.0322 4.71708Z"
        fill="#171717"
      />
      <path
        d="M11.4715 -0.09375C8.79591 0.0606768 6.25576 1.08126 4.21875 2.82533L9.34995 7.9479C9.98461 7.51571 10.7106 7.23483 11.4715 7.12622V-0.09375Z"
        fill="#171717"
      />
      <path
        d="M3.19056 3.81641C1.37775 5.77501 0.257488 8.26503 0.00740031 10.9308C-0.0372317 11.4061 0.12151 11.8816 0.443306 12.2353C0.766442 12.5905 1.22734 12.7943 1.70803 12.7943H5.52838C6.36776 12.7943 7.09378 12.1685 7.21726 11.3387C7.35011 10.4457 7.72591 9.6083 8.29631 8.91353L3.19056 3.81641Z"
        fill="#171717"
      />
      <path
        d="M19.6195 17.7852H4.75317C4.35878 17.7852 4.03906 17.4652 4.03906 17.0703C4.03906 16.6755 4.35878 16.3555 4.75317 16.3555H19.6195C20.0138 16.3555 20.3336 16.6755 20.3336 17.0703C20.3336 17.4652 20.0138 17.7852 19.6195 17.7852Z"
        fill="#171717"
      />
      <path
        d="M15.9031 20.6172H8.46411C8.06986 20.6172 7.75 20.2971 7.75 19.9024C7.75 19.5075 8.06986 19.1875 8.46411 19.1875H15.9031C16.2975 19.1875 16.6172 19.5075 16.6172 19.9024C16.6172 20.2971 16.2975 20.6172 15.9031 20.6172Z"
        fill="#171717"
      />
      <path
        d="M12.8984 -0.09375V6.69776L19.7111 2.4656C17.7538 0.941267 15.3846 0.0498163 12.8984 -0.09375Z"
        fill="#171717"
      />
      <path
        d="M24.3657 10.9293C24.1263 8.37652 23.0887 5.98469 21.4089 4.06641L17.1562 11.339C17.2803 12.1679 18.0057 12.7927 18.8447 12.7927H22.6652C23.1459 12.7927 23.6066 12.5887 23.9301 12.2338C24.2514 11.8801 24.4104 11.4045 24.3657 10.9293Z"
        fill="#171717"
      />
    </g>
    <defs>
      <clipPath id="clip0_9_109883">
        <rect width="26" height="26" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ControlPanelIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_9_109906)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0128 0.800838C12.9852 0.801024 12.9576 0.802615 12.9302 0.805606C12.7291 0.828522 12.5437 0.925569 12.4103 1.0778C12.2768 1.23003 12.2049 1.42653 12.2086 1.62892V9.034C10.3563 9.41343 8.95189 11.0649 8.95188 13.025C8.95189 14.9851 10.3563 16.6314 12.2086 17.0097V24.4147C12.2062 24.5231 12.2255 24.6309 12.2653 24.7317C12.3051 24.8326 12.3646 24.9244 12.4405 25.002C12.5163 25.0795 12.6068 25.141 12.7067 25.1831C12.8066 25.2251 12.914 25.2468 13.0224 25.2468C13.1308 25.2468 13.2381 25.2251 13.338 25.1831C13.438 25.141 13.5285 25.0795 13.6043 25.002C13.6801 24.9244 13.7397 24.8326 13.7795 24.7317C13.8193 24.6309 13.8386 24.5231 13.8362 24.4147V17.0081H13.8377C15.688 16.6273 17.0929 14.9829 17.0929 13.025C17.0929 11.0672 15.6864 9.41748 13.8362 9.03559V1.62892C13.8381 1.52005 13.8181 1.41191 13.7775 1.31089C13.7368 1.20987 13.6763 1.11804 13.5996 1.04082C13.5228 0.963604 13.4313 0.902578 13.3305 0.861357C13.2297 0.820135 13.1217 0.799556 13.0128 0.800838ZM21.1538 0.800838C21.1257 0.800969 21.0975 0.802561 21.0696 0.805606C20.8684 0.828522 20.6831 0.925569 20.5497 1.0778C20.4162 1.23003 20.3443 1.42653 20.348 1.62892V17.1734C18.4957 17.5517 17.0929 19.198 17.0929 21.158C17.0929 23.3956 18.921 25.2317 21.1586 25.2317C23.3961 25.2317 25.2259 23.3956 25.2259 21.158C25.2259 19.2002 23.8263 17.5557 21.9771 17.175V1.62892C21.979 1.52005 21.9591 1.41191 21.9184 1.31089C21.8778 1.20987 21.8173 1.11804 21.7405 1.04082C21.6638 0.963604 21.5723 0.902578 21.4715 0.861357C21.3707 0.820135 21.2627 0.799556 21.1538 0.800838ZM4.88617 0.818321C2.64862 0.818321 0.812507 2.64809 0.8125 4.88563C0.812506 6.84402 2.21818 8.48855 4.06921 8.8687V24.4147C4.0668 24.5231 4.08607 24.6309 4.12589 24.7317C4.16571 24.8326 4.22526 24.9244 4.30107 25.002C4.37687 25.0795 4.4674 25.141 4.56732 25.1831C4.66725 25.2251 4.77457 25.2468 4.88299 25.2468C4.9914 25.2468 5.09872 25.2251 5.19865 25.1831C5.29858 25.141 5.3891 25.0795 5.46491 25.002C5.54071 24.9244 5.60027 24.8326 5.64008 24.7317C5.6799 24.6309 5.69917 24.5231 5.69677 24.4147V8.87029C7.54903 8.492 8.95188 6.84571 8.95188 4.88563C8.95188 2.64809 7.12371 0.818321 4.88617 0.818321Z"
        fill="#171717"
      />
    </g>
    <defs>
      <clipPath id="clip0_9_109906">
        <rect width="26" height="26" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// Flag components
const GermanyFlag = () => {
  const { t } = useLanguage();
  return (
    <Image
      alt={t("hostingTiers.germanyFlagAlt")}
      src="/de-circle.svg"
      width={42}
      height={42}
      className="w-[42px] h-[42px]"
    />
  );
};
const FinlandFlag = () => {
  const { t } = useLanguage();
  return (
    <Image
      alt={t("hostingTiers.finlandFlagAlt")}
      src="/fi-circle.svg"
      width={42}
      height={42}
      className="w-[42px] h-[42px]"
    />
  );
};

const UKFlag = () => {
  const { t } = useLanguage();
  return (
    <Image
      alt={t("hostingTiers.ukFlagAlt")}
      src="/uk-circle.svg"
      width={42}
      height={42}
      className="w-[42px] h-[42px]"
    />
  );
};

export default function HostingPlansThree() {
  const { t, isRTL } = useLanguage();

  const serverSpecs = [
    {
      icon: <CPUIcon />,
      title: t("hostingTiers.cpuSpecTitle"),
      subtitle: t("hostingTiers.cpuSpecSubtitle"),
    },
    {
      icon: <StorageIcon />,
      title: t("hostingTiers.storageSpecTitle"),
      subtitle: t("hostingTiers.storageSpecSubtitle"),
    },
    {
      icon: <DatabaseIcon />,
      title: t("hostingTiers.databaseSpecTitle"),
      subtitle: t("hostingTiers.databaseSpecSubtitle"),
    },
    {
      icon: <RAMIcon />,
      title: t("hostingTiers.ramSpecTitle"),
      subtitle: t("hostingTiers.ramSpecSubtitle"),
    },
    {
      icon: <BandwidthIcon />,
      title: t("hostingTiers.bandwidthSpecTitle"),
      subtitle: t("hostingTiers.bandwidthSpecSubtitle"),
    },
    {
      icon: <ControlPanelIcon />,
      title: t("hostingTiers.controlPanelSpecTitle"),
      subtitle: t("hostingTiers.controlPanelSpecSubtitle"),
    },
  ];

  const PricingCard = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-[0_0_20px_0_rgba(0,0,0,0.08)] max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 border-b-2 border-opacity-15 shadow-[0_0_20px_0_rgba(0,0,0,0.08)]">
        {/* Server Info Section */}
        <div
          className={`lg:pt-16 pt-8 lg:pb-16 pb-8 ${
            isRTL ? "border-l-2" : "border-r-2"
          } border-opacity-10`}
        >
          <div className="lg:ms-12 ms-6">
            <h1 className="font-semibold text-2xl">
              {t("hostingTiers.serverInfoTitle")}
            </h1>
            <p className="font-light">{t("hostingTiers.serverInfoSubtitle")}</p>
            <div className="flex items-center gap-4 mt-6">
              <GermanyFlag />
              <FinlandFlag />
              <UKFlag />
            </div>
          </div>
        </div>
        {/* Pricing Section */}
        <div className="lg:pt-16 pt-8 lg:pb-16 pb-8">
          <div className="lg:ms-12 ms-6">
            <h1 className="font-semibold lg:text-6xl text-xl">
              {t("hostingTiers.priceMain")}
              <span className="text-sm xl:text-lg font-bold lg:-translate-y-16 -translate-y-7 translate-x-7 inline-block">
                {isRTL ? "ر.س" : "SAR"}
              </span>
            </h1>
            <p className="font-light">{t("hostingTiers.priceRenewal")}</p>
            <div className="flex items-center gap-4 mt-6">
              <div className="bg-[#2B1F51] hover:bg-transparent transition hover:text-[#2B1F51] hover:border-2 hover:border-[#2B1F51] text-white px-6 py-2 w-fit cursor-pointer rounded-[10px]">
                <p>{t("hostingTiers.buyNowButton")}</p>
              </div>
              <div className="bg-transparent p-3 text-[#2B1F51] border-2 border-[#2B1F51] hover:bg-[#2B1F51] hover:text-white transition px-6 py-2 w-fit cursor-pointer rounded-[10px]">
                <p>{t("hostingTiers.featuresButton")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Specifications Section */}
      <div className="relative shadow-[0_0_20px_0_rgba(0,0,0,0.08)]">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-8">
          {serverSpecs.map((spec, index) => (
            <div key={index} className="w-full relative">
              <div
                className={`flex items-center py-8 ms-8 gap-4 ${
                  isRTL ? "border-l-2" : "border-r-2"
                } border-opacity-10 relative`}
              >
                {spec.icon}
                <div>
                  <h1 className="font-semibold">{spec.title}</h1>
                  <p className="font-light">{spec.subtitle}</p>
                </div>
              </div>
              <div className="w-[calc(100%+2rem)] absolute bottom-0 border-b-2 -z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="mt-16">
      <h1
        className={`lg:text-3xl text-[#002f6c] text-xl mb-6 text-center font-bold`}
      >
        {t("hostingTiers.mainTitle")}
      </h1>
      <CountrySelector />
      <div className="container mx-auto px-4">
        <div className="mt-16 space-y-16">
          <PricingCard />
          <PricingCard />
        </div>
      </div>
    </div>
  );
}
