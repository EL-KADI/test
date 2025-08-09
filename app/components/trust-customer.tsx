import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useLanguage } from "../../contexts/language-context";

export default function TrustCustomer() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl text-center font-bold text-purple-900 mb-6">
              {t("trustCustomer.trustedBy")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 lg:px-28" dir="ltr">
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                loading="lazy"
                  src="/img_dic1_1.webp"
                  alt={t("trustCustomer.docCenterAlt")}
                  width={147}
                  height={158}
                  className="mx-auto w-full h-40 object-contain"
                />
              </div>
              <h3 className="lg:text-lg text-xs font-semibold">{t("trustCustomer.docCenter")}</h3>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                loading="lazy"
                  src="/img_governmentofnationalaccord01_1.svg"
                  alt={t("trustCustomer.financialCommitteeAlt")}
                  width={142}
                  height={142}
                  className="mx-auto w-full object-contain h-40"
                />
              </div>
              <h3 className="lg:text-lg text-xs font-semibold">{t("trustCustomer.financialCommittee")}</h3>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                loading="lazy"
                  src="/img_socialsecurityfund_1.svg"
                  alt={t("trustCustomer.socialSecurityAlt")}
                  width={164}
                  height={164}
                  className="mx-auto w-full object-contain h-40"
                />
              </div>
              <h3 className="lg:text-lg text-xs font-semibold">{t("trustCustomer.socialSecurity")}</h3>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                loading="lazy"
                  src="/img_socialsecurityfund_1.svg"
                  alt={t("trustCustomer.socialSecurityAlt")}
                  width={164}
                  height={164}
                  className="mx-auto w-full object-contain h-40"
                />
              </div>
              <h3 className="lg:text-lg text-xs font-semibold">{t("trustCustomer.socialSecurity")}</h3>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:px-28" dir="ltr">
            <div className="w-[50%]"></div>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                loading="lazy"
                  src="/img_governmentofnationalaccord01_1.svg"
                  alt={t("trustCustomer.commercialRegistryAlt")}
                  width={142}
                  height={142}
                  className="mx-auto w-full object-contain h-40"
                />
              </div>
              <h3 className="lg:text-lg text-xs font-semibold">{t("trustCustomer.commercialRegistry")}</h3>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <Image
                loading="lazy"
                  src="/img_logods1trans350px_1.webp"
                  alt={t("trustCustomer.zatAlSawariAlt")}
                  width={152}
                  height={188}
                  className="mx-auto w-full h-40 object-contain"
                />
              </div>
              <h3 className="lg:text-lg text-xs font-semibold">{t("trustCustomer.zatAlSawari")}</h3>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}