import Image from "next/image";
import { useLanguage } from "../../contexts/language-context";

export function SystemSucuri() {
  const { t } = useLanguage();

  const platforms = [
    { name: t("systemSucuri.platform.phpbb"), image: "/Phpbb.svg", alt: t("systemSucuri.platform.phpbbAlt") },
    { name: t("systemSucuri.platform.joomla"), image: "/Joomla.svg", alt: t("systemSucuri.platform.joomlaAlt") },
    { name: t("systemSucuri.platform.drupal"), image: "/Drupal.svg", alt: t("systemSucuri.platform.drupalAlt") },
    { name: t("systemSucuri.platform.magento"), image: "/Magento.svg", alt: t("systemSucuri.platform.magentoAlt") },
    { name: t("systemSucuri.platform.wordpress"), image: "/Wordpress.svg", alt: t("systemSucuri.platform.wordpressAlt") },
  ];

  return (
    <section className="mt-32 container max-w-6xl mx-auto">
      <h1 className="lg:text-4xl text-xl mb-6 text-center font-semibold">{t("systemSucuri.title")}</h1>
      <p className="mt-8 text-center mb-8 lg:w-1/2 mx-auto">{t("systemSucuri.description")}</p>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-8">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="bg-white rounded-lg p-4 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105"
          >
            <Image
              src={platform.image || "/placeholder.svg"}
              alt={platform.alt}
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
            <h1 className="text-center text-xs">{platform.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}