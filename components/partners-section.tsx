"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/language-context";
import AnimatedOnScroll from "./AnimatedOnScroll";

export default function PartnersSection() {
  const { t, isRTL } = useLanguage();

  return (
    <AnimatedOnScroll>
      <div className="xl:max-w-6xl mx-auto mt-28" dir={isRTL ? "rtl" : "ltr"}>
        <h1
          className={`lg:text-4xl text-xl mb-6 text-center font-bold text-[#2b1f51] ${
            isRTL ? "text-center" : "text-left"
          }`}
        >
          {t("partners.title")}
        </h1>
        <p
          className={`text-center md:w-5/6 mx-auto text-black ${
            isRTL ? "text-center" : "text-left"
          }`}
        >
          {t("partners.description")}
        </p>

        {/* Main Partners Section */}
        <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8 max-w-xs xl:max-w-6xl lg:max-w-3xl md:max-w-[46rem] mx-auto">
          {/* Linode */}
          <PartnerCard
            img="/Lindo.svg"
            name="Linode"
            desc={t("partners.linode.desc")}
            isRTL={isRTL}
          />

          {/* Cpanel */}
          <PartnerCard
            img="/Cpanel.svg"
            name="Cpanel"
            desc={t("partners.cpanel.desc")}
            isRTL={isRTL}
          />

          {/* Cloudlinux */}
          <PartnerCard
            img="/Cloudlinux.svg"
            name="Cloudlinux"
            desc={t("partners.cloudlinux.desc")}
            isRTL={isRTL}
          />
        </div>

        {/* Partners Grid */}
        <div className="grid mx-8 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-12 mt-12 mb-32">
          <MiniCard img="/AMD Epyc.svg" name="AMD Epyc" />
          <MiniCard img="/cloudflare.svg" name="Cloudflare" />
          <MiniCard img="/MemCached.svg" name="MemCached" />
          <MiniCard img="/Imunify36.svg" name="Imunify36" />
          <MiniCard img="/MailChannel.svg" name="MailChannel" />
          <MiniCard img="/softaculous.svg" name="Softaculous" />
          <MiniCard img="/JetBackup.svg" name="JetBackup" />
          <MiniCard img="/MariaDB.svg" name="MariaDB" />
          <MiniCard img="/QUIC.cloud.svg" name="QUIC.cloud" />
          <MiniCard img="/LiteSpeed.svg" name="LiteSpeed" />
        </div>
      </div>
    </AnimatedOnScroll>
  );
}

function PartnerCard({
  img,
  name,
  desc,
  isRTL,
}: {
  img: string;
  name: string;
  desc: string;
  isRTL: boolean;
}) {
  return (
    <div className="bg-white rounded-lg px-6 py-6 flex items-start shadow-[0_0_20px_0_rgba(0,0,0,0.08)] flex-col gap-4 justify-between border border-gray-300 transition hover:scale-105">
      <Image
        className="mx-auto w-24 h-52 object-contain"
        src={img}
        alt={`${name} Logo`}
        width={96}
        height={96}
      />
      <div>
        <h1
          className={`mb-6 text-3xl text-center font-bold text-black ${
            isRTL ? "text-center" : "text-left"
          }`}
        >
          {name}
        </h1>
        <p
          className={`text-sm text-black text-center ${
            isRTL ? "text-center" : "text-left"
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

function MiniCard({ img, name }: { img: string; name: string }) {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center gap-4 flex-col shadow-[0_0_20px_0_rgba(0,0,0,0.08)] transition hover:scale-105 justify-around font-bold text-black text-3xl border border-gray-300">
      <Image
        src={img}
        alt={`${name} Logo`}
        className="w-24 h-32 object-contain"
        width={96}
        height={96}
      />
      <h1 className="text-center text-[20px]">{name}</h1>
    </div>
  );
}
