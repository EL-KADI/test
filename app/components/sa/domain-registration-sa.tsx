"use client";
import Image from "next/image";
import { useLanguage } from "../../../contexts/language-context";

export default function DomainRegistrationSA() {
  const { t,isRTL } = useLanguage();

  return (
    <div  dir={isRTL ? "rtl" : "ltr"} className="relative mt-32 text-black">
      <Image
        className="absolute -top-20 left-0 w-full -z-10"
        src="/two-layers-sa.svg"
        alt={t("domainRegistrationSA.backgroundAlt")}
        width={1200}
        height={400}
      />
      <div className="container max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <Image
          className="mx-auto"
          src="/number-1.svg"
          alt={t("domainRegistrationSA.numberOneAlt")}
          width={200}
          height={200}
        />
        <h1 className="lg:text-4xl text-xl mb-6 text-center mt-8">
          {t("domainRegistrationSA.title")}
        </h1>
        <p className="text-center lg:w-1/2 mx-auto opacity-50">
          {t("domainRegistrationSA.description")}
        </p>
        <div className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start gap-4 shadow-light lg:w-1/4 md:w-1/2 w-full mx-auto mt-12 transition hover:scale-105">
          <Image
            src="/sa-circle.svg"
            alt={t("domainRegistrationSA.saCircleAlt")}
            width={50}
            height={50}
          />
          <div>
            <h1 className="mb-6 text-xl font-semibold">{t("domainRegistrationSA.saTitle")}</h1>
            <p className="text-sm opacity-50">{t("domainRegistrationSA.saPrice")}</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
          <div className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start gap-4 shadow-light transition hover:scale-105">
            <Image
              src="/world.svg"
              alt={t("domainRegistrationSA.worldIconAlt")}
              width={50}
              height={50}
            />
            <div>
              <h1 className="mb-6 text-xl font-semibold">{t("domainRegistrationSA.eduSa")}</h1>
              <p className="text-sm opacity-50">{t("domainRegistrationSA.price")}</p>
            </div>
          </div>
          <div className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start gap-4 shadow-light transition hover:scale-105">
            <Image
              src="/world.svg"
              alt={t("domainRegistrationSA.worldIconAlt")}
              width={50}
              height={50}
            />
            <div>
              <h1 className="mb-6 text-xl font-semibold">{t("domainRegistrationSA.comSa")}</h1>
              <p className="text-sm opacity-50">{t("domainRegistrationSA.price")}</p>
            </div>
          </div>
          <div className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start gap-4 shadow-light transition hover:scale-105">
            <Image
              src="/world.svg"
              alt={t("domainRegistrationSA.worldIconAlt")}
              width={50}
              height={50}
            />
            <div>
              <h1 className="mb-6 text-xl font-semibold">{t("domainRegistrationSA.netSa")}</h1>
              <p className="text-sm opacity-50">{t("domainRegistrationSA.price")}</p>
            </div>
          </div>
          <div className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start gap-4 shadow-light transition hover:scale-105">
            <Image
              src="/world.svg"
              alt={t("domainRegistrationSA.worldIconAlt")}
              width={50}
              height={50}
            />
            <div>
              <h1 className="mb-6 text-xl font-semibold">{t("domainRegistrationSA.orgSa")}</h1>
              <p className="text-sm opacity-50">{t("domainRegistrationSA.price")}</p>
            </div>
          </div>
          <div className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start gap-4 shadow-light transition hover:scale-105">
            <Image
              src="/world.svg"
              alt={t("domainRegistrationSA.worldIconAlt")}
              width={50}
              height={50}
            />
            <div>
              <h1 className="mb-6 text-xl font-semibold">{t("domainRegistrationSA.medSa")}</h1>
              <p className="text-sm opacity-50">{t("domainRegistrationSA.price")}</p>
            </div>
          </div>
          <div className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start gap-4 shadow-light transition hover:scale-105">
            <Image
              src="/world.svg"
              alt={t("domainRegistrationSA.worldIconAlt")}
              width={50}
              height={50}
            />
            <div>
              <h1 className="mb-6 text-xl font-semibold">{t("domainRegistrationSA.idSa")}</h1>
              <p className="text-sm opacity-50">{t("domainRegistrationSA.price")}</p>
            </div>
          </div>
          <div className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start gap-4 shadow-light transition hover:scale-105">
            <Image
              src="/world.svg"
              alt={t("domainRegistrationSA.worldIconAlt")}
              width={50}
              height={50}
            />
            <div>
              <h1 className="mb-6 text-xl font-semibold">{t("domainRegistrationSA.schSa")}</h1>
              <p className="text-sm opacity-50">{t("domainRegistrationSA.price")}</p>
            </div>
          </div>
          <div className="bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-lg px-6 py-6 flex items-start gap-4 shadow-light transition hover:scale-105">
            <Image
              src="/world.svg"
              alt={t("domainRegistrationSA.worldIconAlt")}
              width={50}
              height={50}
            />
            <div>
              <h1 className="mb-6 text-xl font-semibold">{t("domainRegistrationSA.plcSa")}</h1>
              <p className="text-sm opacity-50">{t("domainRegistrationSA.price")}</p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="lg:text-4xl text-xl mb-6 text-center font-bold">
            {t("domainRegistrationSA.approvalTitle")}
          </h1>
          <div className="lg:w-3/4 mx-auto mt-12">
            <div className="mt-4">
              <h1 className="flex items-center gap-8 lg:text-xl font-bold">
                <span className="w-[6px] h-[6px] bg-black"></span>
                {t("domainRegistrationSA.schSaApproval")}
              </h1>
              <p className="ms-10 mt-4 text-md">{t("domainRegistrationSA.schSaApprovalDesc")}</p>
            </div>
            <div className="mt-4">
              <h1 className="flex items-center gap-8 lg:text-xl font-bold">
                <span className="w-[6px] h-[6px] bg-black"></span>
                {t("domainRegistrationSA.medSaApproval")}
              </h1>
              <p className="ms-10 mt-4 text-md">{t("domainRegistrationSA.medSaApprovalDesc")}</p>
            </div>
            <div className="mt-4">
              <h1 className="flex items-center gap-8 lg:text-xl font-bold">
                <span className="w-[6px] h-[6px] bg-black"></span>
                {t("domainRegistrationSA.govSaApproval")}
              </h1>
              <p className="ms-10 mt-4 text-md">{t("domainRegistrationSA.govSaApprovalDesc")}</p>
            </div>
            <div className="mt-4">
              <h1 className="flex items-center gap-8 lg:text-xl font-bold">
                <span className="w-[6px] h-[6px] bg-black"></span>
                {t("domainRegistrationSA.govSaAltApproval")}
              </h1>
              <p className="ms-10 mt-4 text-md">{t("domainRegistrationSA.govSaAltApprovalDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}