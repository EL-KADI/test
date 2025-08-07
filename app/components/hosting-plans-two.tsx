import Image from "next/image";
import RightImg from "../../public/rightImg.svg";
import LeftImg from "../../public/leftImg.svg";
import { useLanguage } from "../../contexts/language-context";

export default function HostingPlansTwo() {
  const { t , isRTL } = useLanguage();
  const plans = [
    { borderColor: "border-[#FBE06B]", name: t("hostingPlans.planName") },
    { borderColor: "border-[#E5E7EB]", name: t("hostingPlans.planName") },
    { borderColor: "border-[#7F6FCB]", name: t("hostingPlans.planName") },
    { borderColor: "border-[#FBE06B]", name: t("hostingPlans.planName") },
    { borderColor: "border-[#E5E7EB]", name: t("hostingPlans.planName") },
    { borderColor: "border-[#7F6FCB]", name: t("hostingPlans.planName") },
  ];

  return (
    <div className="bg-[#ffffff] p-8 relative overflow-hidden mx-auto mt-28" dir="rtl">
      <Image
        alt="rightImg"
        width={393}
        height={636}
        className="absolute right-0"
        style={{ color: "transparent" }}
        src={RightImg}
      />
      <Image
        alt="leftImg"
        width={393}
        height={636}
        className="absolute left-0"
        style={{ color: "transparent" }}
        src={LeftImg}
      />
      <div className="container mx-auto relative  max-w-6xl">
        <h1 className="text-4xl  font-bold text-[#2b1f51] text-center mb-16">
          {t("hostingPlans.choosePlan")}
        </h1>
        <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-md bg-white border-t-8 text-center p-8 shadow-lg ${plan.borderColor} transition hover:scale-105`}
            >
              <h1 className="text-3xl ms-4">{plan.name}</h1>
              <h1 className="mt-4 lg:text-6xl md:text-4xl text-2xl font-light">91.30</h1>
              <p className="opacity-40 mb-4">{t("hostingPlans.pricePeriod")}</p>
              <div className="flex items-start justify-between mt-8 px-4 flex-row-reverse">
                <div className="flex items-center justify-center flex-col">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.5 12C4.5 8.229 4.5 6.343 5.672 5.172C6.844 4.001 8.729 4 12.5 4C16.271 4 18.157 4 19.328 5.172C20.499 6.344 20.5 8.229 20.5 12C20.5 15.771 20.5 17.657 19.328 18.828C18.156 19.999 16.271 20 12.5 20C8.729 20 6.843 20 5.672 18.828C4.501 17.656 4.5 15.771 4.5 12Z"
                      stroke="#1B69FF"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M4.5 12H2.5M22.5 12H20.5M4.5 9H2.5M22.5 9H20.5M4.5 15H2.5M22.5 15H20.5M12.5 20V22M12.5 2V4M9.5 20V22M9.5 2V4M15.5 20V22M15.5 2V4"
                      stroke="#1B69FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <h1 className="font-bold opacity-70">1</h1>
                  <h1 className="opacity-40 text-xs">{t("hostingPlans.vCPU")}</h1>
                </div>
                <div className="flex items-center justify-center flex-col">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.5 10C7.5 8.586 7.5 7.879 7.94 7.44C8.378 7 9.085 7 10.5 7H14.5C15.914 7 16.621 7 17.06 7.44C17.5 7.879 17.5 8.586 17.5 10V14C17.5 15.414 17.5 16.121 17.06 16.56C16.621 17 15.914 17 14.5 17H10.5C9.086 17 8.379 17 7.94 16.56C7.5 16.122 7.5 15.415 7.5 14V10Z"
                      stroke="#1B69FF"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M4.5 12C4.5 8.229 4.5 6.343 5.672 5.172C6.844 4.001 8.729 4 12.5 4C16.271 4 18.157 4 19.328 5.172C20.499 6.344 20.5 8.229 20.5 12C20.5 15.771 20.5 17.657 19.328 18.828C18.156 19.999 16.271 20 12.5 20C8.729 20 6.843 20 5.672 18.828C4.501 17.656 4.5 15.771 4.5 12Z"
                      stroke="#1B69FF"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M4.5 12H2.5M22.5 12H20.5M4.5 9H2.5M22.5 9H20.5M4.5 15H2.5M22.5 15H20.5M12.5 20V22M12.5 2V4M9.5 20V22M9.5 2V4M15.5 20V22M15.5 2V4"
                      stroke="#1B69FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <h1 className="font-bold opacity-70">2</h1>
                  <h1 className="opacity-40 text-xs">{t("hostingPlans.memory")}</h1>
                </div>
                <div className="flex items-center justify-center flex-col">
             <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.4877 22C9.85004 22.0045 7.31833 20.9613 5.44845 19.0993C5.37936 19.0394 5.32329 18.966 5.2837 18.8835C5.24411 18.801 5.22185 18.7113 5.21828 18.6199C5.21472 18.5285 5.22993 18.4373 5.26297 18.352C5.29602 18.2667 5.34619 18.1891 5.4104 18.124C5.47461 18.0589 5.55148 18.0076 5.63627 17.9734C5.72105 17.9392 5.81194 17.9228 5.90332 17.9251C5.9947 17.9275 6.08463 17.9486 6.16754 17.9871C6.25045 18.0257 6.32458 18.0808 6.38535 18.1491C7.87111 19.6593 9.85838 20.5721 11.9712 20.7147C14.084 20.8574 16.1757 20.2201 17.8507 18.9233C19.5256 17.6265 20.6676 15.7603 21.0606 13.6777C21.4535 11.5951 21.0701 9.44063 19.983 7.62184C19.9093 7.47042 19.8954 7.29676 19.9441 7.13555C19.9928 6.97434 20.1005 6.83744 20.2456 6.75219C20.3907 6.66694 20.5626 6.63961 20.727 6.67567C20.8913 6.71173 21.0361 6.80851 21.1323 6.9467C22.0214 8.46773 22.4933 10.1969 22.5001 11.9591C22.5069 13.7214 22.0484 15.4541 21.171 16.982C20.2936 18.5099 19.0285 19.7786 17.5037 20.6598C15.9788 21.541 14.2485 22.0033 12.4877 22Z"
                      fill="#1B69FF"
                    />
                    <path
                      d="M4.43639 17.3677C4.32068 17.368 4.2069 17.3381 4.10617 17.2811C4.00545 17.2242 3.92123 17.142 3.86175 17.0427C2.64001 14.9468 2.22115 12.4779 2.68319 10.096C3.14524 7.71396 4.45669 5.5813 6.37323 4.09525C8.28977 2.6092 10.6807 1.87111 13.1006 2.01847C15.5205 2.16584 17.8044 3.18861 19.5268 4.89626C19.5959 4.95617 19.652 5.02963 19.6916 5.11209C19.7311 5.19455 19.7534 5.28427 19.757 5.37569C19.7605 5.46711 19.7453 5.55829 19.7123 5.64359C19.6792 5.72889 19.6291 5.8065 19.5649 5.87162C19.5007 5.93674 19.4238 5.98798 19.339 6.02218C19.2542 6.05638 19.1633 6.07281 19.0719 6.07046C18.9806 6.0681 18.8906 6.047 18.8077 6.00848C18.7248 5.96995 18.6507 5.91481 18.5899 5.84646C17.1042 4.33629 15.1169 3.42352 13.0041 3.28086C10.8913 3.1382 8.79954 3.77555 7.12458 5.0723C5.44962 6.36906 4.30764 8.23528 3.91471 10.3179C3.52178 12.4005 3.90515 14.555 4.99229 16.3738C5.05155 16.4752 5.08305 16.5905 5.08363 16.708C5.08421 16.8256 5.05384 16.9412 4.99558 17.0432C4.93733 17.1452 4.85323 17.2301 4.75177 17.2893C4.65032 17.3484 4.53507 17.3798 4.41765 17.3802L4.43639 17.3677Z"
                      fill="#1B69FF"
                    />
                    <path
                      d="M12.4874 14.6668C11.9599 14.6668 11.4442 14.5102 11.0056 14.2169C10.567 13.9236 10.2252 13.5067 10.0233 13.019C9.82147 12.5312 9.76865 11.9945 9.87156 11.4767C9.97447 10.9589 10.2285 10.4833 10.6015 10.11C10.9745 9.73664 11.4497 9.48241 11.9671 9.37942C12.4844 9.27642 13.0207 9.32928 13.508 9.53132C13.9954 9.73335 14.4119 10.0755 14.7049 10.5145C14.998 10.9534 15.1544 11.4695 15.1544 11.9975C15.1544 12.7054 14.8734 13.3844 14.3733 13.885C13.8731 14.3856 13.1947 14.6668 12.4874 14.6668ZM12.4874 10.6659C12.2242 10.6659 11.967 10.744 11.7482 10.8903C11.5295 11.0366 11.3589 11.2446 11.2582 11.4879C11.1575 11.7312 11.1312 11.9989 11.1825 12.2572C11.2339 12.5155 11.3606 12.7528 11.5466 12.939C11.7327 13.1252 11.9697 13.252 12.2278 13.3034C12.4859 13.3548 12.7534 13.3284 12.9965 13.2276C13.2396 13.1269 13.4474 12.9562 13.5936 12.7372C13.7398 12.5183 13.8178 12.2608 13.8178 11.9975C13.8178 11.6443 13.6776 11.3056 13.4281 11.0559C13.1786 10.8062 12.8402 10.6659 12.4874 10.6659Z"
                      fill="#1B69FF"
                    />
                  </svg>
                  <h1 className="font-bold opacity-70">20</h1>
                  <h1 className="opacity-40 text-xs">{t("hostingPlans.ssdStorage")}</h1>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-8">
                <div className="h-[4px] w-[20px] bg-gray-400"></div>
                <div className="h-[4px] w-[20px] bg-[#2b1f51]"></div>
              </div>
              <div className="mt-8 mx-auto">
                <div className="bg-[#2b1f51] hover:bg-transparent transition hover:text-[#2b1f51] hover:border-2 hover:border-[#2b1f51] text-white rounded-md px-12 py-2 w-fit mx-auto cursor-pointer">
                  <p>{t("hostingPlans.orderNow")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}