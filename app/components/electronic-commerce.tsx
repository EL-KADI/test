import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from '../../contexts/language-context';

export default function ElectronicCommerce() {
  const { t, isRTL } = useLanguage();

  const platforms = [
    {
      name: t('ecommerceSection.cyclosName'),
      description: t('ecommerceSection.cyclosDescription'),
      logoQuery: "/Cyclos 4 Pro.webp",
      link: "/platforms/cyclos",
      alt: t('ecommerceSection.cyclosLogoAlt'),
    },
    {
      name: t('ecommerceSection.magentoName'),
      description: t('ecommerceSection.magentoDescription'),
      logoQuery: "/MagentoTwo.svg",
      link: "/platforms/magento",
      alt: t('ecommerceSection.magentoLogoAlt'),
    },
    {
      name: t('ecommerceSection.magentoClusterName'),
      description: t('ecommerceSection.magentoClusterDescription'),
      logoQuery: "/MagentoTwo.svg",
      link: "/platforms/magento-cluster",
      alt: t('ecommerceSection.magentoLogoAlt'),
    },
    {
      name: t('ecommerceSection.maianCartName'),
      description: t('ecommerceSection.maianCartDescription'),
      logoQuery: "/Maian Cart.svg",
      link: "/platforms/maian-cart",
      alt: t('ecommerceSection.maianCartLogoAlt'),
    },
    {
      name: t('ecommerceSection.openCartName'),
      description: t('ecommerceSection.openCartDescription'),
      logoQuery: "/OpenCart.svg",
      link: "/platforms/opencart",
      alt: t('ecommerceSection.openCartLogoAlt'),
    },
    {
      name: t('ecommerceSection.prestaShopName'),
      description: t('ecommerceSection.prestaShopDescription'),
      logoQuery: "/PrestShop.svg",
      link: "/platforms/prestashop",
      alt: t('ecommerceSection.prestaShopLogoAlt'),
    },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl font-bold text-[#2b1f51] ${isRTL ? 'md:text-right' : 'md:text-left'} text-center mb-12`}>
          {t('ecommerceSection.title')}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#e2dddb] shadow-md p-8 flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <Image
                  src={platform.logoQuery}
                  loading="lazy"
                  alt={platform.alt}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl  font-semibold text-[#000000] mb-2">{platform.name}</h2>
              <p className="text-sm text-[#535353] mb-8 flex-grow">{platform.description}</p>
              <Link href={platform.link} className="flex items-center text-[#1b69ff] mt-20 hover:underline ms-auto">
                {isRTL ? <ArrowRight className="w-4 h-4 ml-2" /> : <ArrowLeft className="w-4 h-4 mr-2" />}
                {t('ecommerceSection.launchNow')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}