"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Language = "arabic" | "english" | "french" | "german" | "turkish";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

type TranslationKeys =
  | "serverManagement.title"
  | "serverManagement.description"
  | "sharedHosting.title"
| "sharedHosting.description"
| "sharedHosting.startNow"
| "smallContent.feature.backupRecovery"
| "smallContent.feature.malwareProtection"
| "smallContent.feature.deviceProtection"
| "smallContent.feature.threatDetection"
| "smallContent.feature.emailProtection"
| "smallContent.feature.disasterRecovery"
| "smallContent.feature.centralManagement"
| "smallContent.checkIconAlt"
  | "serverManagement.signUpNow"
  | "pricingSection.choosePlan"
  | "pricingSection.planName"
  | "pricingSection.pricePeriod"
  | "pricingSection.orderNow"
  | "pricingSection.comparePackages"
  | "pricingSection.feature.nvmeStorage"
  | "pricingSection.feature.websites"
  | "pricingSection.feature.ram"
  | "pricingSection.feature.cpu"
  | "pricingSection.feature.cpanel"
  | "pricingSection.feature.subdomains"
  | "pricingSection.feature.databases"
  | "pricingSection.feature.email"
  | "pricingSection.feature.ftp"
  | "pricingSection.feature.oneClickInstaller"
  | "pricingSection.rightBlocksAlt"
  | "pricingSection.leftBlocksAlt"
  | "goFast.title"
  | "goFast.cdnPerformance"
  | "goFast.cdnPerformanceDesc"
  | "goFast.ddosMitigation"
  | "goFast.ddosMitigationDesc"
  | "goFast.securityProtection"
  | "goFast.securityProtectionDesc"
  | "goFast.cdnIconAlt"
  | "goFast.ddosIconAlt"
  | "goFast.malwareIconAlt"
  | "systemSucuri.title"
  | "systemSucuri.description"
  | "systemSucuri.platform.phpbb"
  | "systemSucuri.platform.joomla"
  | "systemSucuri.platform.drupal"
  | "systemSucuri.platform.magento"
  | "systemSucuri.platform.wordpress"
  | "systemSucuri.platform.phpbbAlt"
  | "systemSucuri.platform.joomlaAlt"
  | "systemSucuri.platform.drupalAlt"
  | "systemSucuri.platform.magentoAlt"
  | "systemSucuri.platform.wordpressAlt"
  | "featuresSectionFour.title"
  | "featuresSectionFour.description"
  | "featuresSectionFour.feature.crossPlatform"
  | "featuresSectionFour.feature.ddosMitigation"
  | "featuresSectionFour.feature.malwareRemoval"
  | "featuresSectionFour.feature.sslCertificate"
  | "featuresSectionFour.feature.securityMonitoring"
  | "featuresSectionFour.feature.performanceOptimization"
  | "featuresSectionFour.feature.crossPlatformAlt"
  | "featuresSectionFour.feature.ddosMitigationAlt"
  | "featuresSectionFour.feature.malwareRemovalAlt"
  | "featuresSectionFour.feature.sslCertificateAlt"
  | "featuresSectionFour.feature.securityMonitoringAlt"
  | "featuresSectionFour.feature.performanceOptimizationAlt"
  | "header.phone"
  | "header.email"
  | "header.login"
  | "header.register"
  | "header.language"
  | "nav.home"
  | "nav.hosting"
  | "nav.reseller"
  | "nav.servers"
  | "nav.domains"
  | "nav.company"
  | "nav.technology"
  | "hero.title"
  | "hero.subtitle"
  | "hero.description"
  | "hero.search"
  | "hero.searchPlaceholder"
  | "hosting.shared"
  | "hosting.shared.desc"
  | "hosting.cloud"
  | "hosting.cloud.desc"
  | "hosting.wordpress"
  | "hosting.wordpress.desc"
  | "hosting.softaculous"
  | "hosting.softaculous.desc"
  | "hosting.email"
  | "hosting.email.desc"
  | "hosting.business"
  | "hosting.business.desc"
  | "hosting.developer"
  | "hosting.developer.desc"
  | "hosting.tamoor"
  | "hosting.tamoor.desc"
  | "reseller.basic"
  | "reseller.basic.desc"
  | "reseller.plus"
  | "reseller.plus.desc"
  | "reseller.ultra"
  | "reseller.ultra.desc"
  | "reseller.program"
  | "reseller.program.desc"
  | "servers.vps"
  | "servers.vps.desc"
  | "servers.cloud"
  | "servers.cloud.desc"
  | "servers.dedicated"
  | "servers.dedicated.desc"
  | "servers.licenses"
  | "servers.licenses.desc"
  | "servers.support"
  | "servers.support.desc"
  | "servers.backup"
  | "servers.backup.desc"
  | "domains.register"
  | "domains.register.desc"
  | "domains.local"
  | "domains.local.desc"
  | "domains.transfer"
  | "domains.transfer.desc"
  | "domains.cloudflare"
  | "domains.cloudflare.desc"
  | "domains.ssl"
  | "domains.ssl.desc"
  | "domains.whois"
  | "domains.whois.desc"
  | "company.about"
  | "company.about.desc"
  | "company.contact"
  | "company.contact.desc"
  | "company.jobs"
  | "company.jobs.desc"
  | "company.news"
  | "company.news.desc"
  | "company.reseller"
  | "company.reseller.desc"
  | "company.payment"
  | "company.payment.desc"
  | "tech.security"
  | "tech.security.desc"
  | "tech.speed"
  | "tech.speed.desc"
  | "tech.control"
  | "tech.control.desc"
  | "tech.datacenter"
  | "tech.datacenter.desc"
  | "tech.status"
  | "tech.status.desc"
  | "tech.backup"
  | "tech.backup.desc"
  | "services.title"
  | "services.description"
  | "services.cloudHosting"
  | "services.lsSuite"
  | "services.jpaas"
  | "services.learnMore"
  | "payment.title"
  | "payment.description"
  | "servers.title"
  | "partners.title"
  | "partners.description"
  | "dashboard.title"
  | "dashboard.subtitle"
  | "dashboard.description"
  | "footer.rights"
  | "footer.services"
  | "footer.contact"
  | "footer.domain"
  | "footer.transfer"
  | "footer.affiliate"
  | "footer.terms"
  | "customer.helpCenter"
  | "customer.jobs"
  | "customer.subscriberServices"
  | "customer.dataCenters"
  | "customer.testimonial"
  | "customer.customerName"
  | "customer.customerTitle"
  | "dashboard.easyManagement"
  | "dashboard.easyManagement.desc"
  | "dashboard.oneClick"
  | "dashboard.oneClick.desc"
  | "dashboard.multiplePayment"
  | "dashboard.multiplePayment.desc"
  | "dashboard.mainDashboard"
  | "dashboard.servicesManagement"
  | "dashboard.checkoutProcess"
  | "footer.socialMedia"
  | "partners.linode.desc"
  | "partners.cpanel.desc"
  | "partners.cloudlinux.desc"
  | "serverLocations.title"
  | "serverLocations.uae"
  | "serverLocations.germany"
  | "serverLocations.finland"
  | "serverLocations.korea"
  | "serverLocations.italy"
  | "serverLocations.saudi"
  | "serverLocations.sudan"
  | "serverLocations.turkey"
  | "serverLocations.britain"
  | "serverLocations.america"
  | "servicesSection.title"
  | "servicesSection.subtitle"
  | "servicesSection.dedicatedServers"
  | "servicesSection.sharedCloudHosting"
  | "servicesSection.webHosting"
  | "servicesSection.controlPanelLicense"
  | "servicesSection.domains"
  | "servicesSection.vps"
  | "servicesSection.description"
  | "servicesSection.startingFrom"
  | "cloudServices.title"
  | "cloudServices.description"
  | "cloudServices.designDevelopment"
  | "cloudServices.domains"
  | "cloudServices.cloudServices"
  | "cloudServices.sharedCloudHosting"
  | "cloudServices.sharedCloudHosting.desc"
  | "cloudServices.lsSuite"
  | "cloudServices.lsSuite.desc"
  | "cloudServices.jpaas"
  | "cloudServices.jpaas.desc"
  | "cloudServices.learnMore"
  | "footer.privacyPolicy"
  | "footer.company"
  | "footer.aboutUs"
  | "footer.jobs"
  | "footer.contactUs"
  | "footer.mediaCenter"
  | "footer.servicesTitle"
  | "footer.hosting"
  | "footer.domains"
  | "footer.vps"
  | "footer.serverSupport"
  | "footer.whois"
  | "footer.technology"
  | "footer.speed"
  | "footer.security"
  | "footer.controlPanel"
  | "footer.backups"
  | "footer.legal"
  | "footer.privacy"
  | "footer.paymentMethods"
  | "footer.sslCertificates"
  | "footer.partners"
  | "testimonials.1.text"
  | "testimonials.1.name"
  | "testimonials.1.title"
  | "testimonials.2.text"
  | "testimonials.2.name"
  | "testimonials.2.title"
  | "testimonials.3.text"
  | "testimonials.3.name"
  | "testimonials.3.title"
  | "testimonials.4.text"
  | "testimonials.4.name"
  | "testimonials.4.title"
  | "servicesCards.dedicatedServers.title"
  | "servicesCards.dedicatedServers.desc"
  | "servicesCards.sharedCloudHosting.title"
  | "servicesCards.sharedCloudHosting.desc"
  | "servicesCards.webHosting.title"
  | "servicesCards.webHosting.desc"
  | "servicesCards.controlPanelLicense.title"
  | "servicesCards.controlPanelLicense.desc"
  | "servicesCards.domains.title"
  | "servicesCards.domains.desc"
  | "servicesCards.vps.title"
  | "servicesCards.vps.desc"
  | "bouquets.ram"
  | "bouquets.websites"
  | "bouquets.nvmeStorage"
  | "bouquets.comparePackages"
  | "bouquets.orderNow"
  | "bouquets.quarterly"
  | "bouquets.native"
  | "bouquets.choosePlan"
  | "bouquets.choosePlan"
  | "servicesCards.startingPrice"
  | "bouquets.cpu"
  | "bouquets.controlPanel"
  | "bouquets.subdomains"
  | "bouquets.mysqlDatabases"
  | "bouquets.emailAccount"
  | "bouquets.ftpAccounts"
  | "bouquets.oneClickInstaller"
  | "hero.serverHosting"
  | "hero.descriptionText"
  | "hero.startNow"
  | "hostingPlans.choosePlan"
  | "hostingPlans.planName"
  | "hostingPlans.pricePeriod"
  | "hostingPlans.vCPU"
  | "hostingPlans.memory"
  | "hostingPlans.ssdStorage"
  | "hostingPlans.orderNow"
  | "hostingPlans.virtualServersTitle"
  | "hostingPlans.virtualServersDescription"
  | "hostingPlans.highPerformance"
  | "hostingPlans.enterpriseReliability"
  | "hostingPlans.uptimeGuarantee"
  | "hostingPlans.nvmeSsd"
  | "featuresSection.mainFeatures"
  | "featuresSection.description"
  | "featuresSection.backgroundDecorationAlt"
  | "featuresSection.sucuriAlt"
  | "featuresSection.softaculousAlt"
  | "featuresSection.linuxAlt"
  | "featuresSection.cpanelAlt"
  | "featuresSection.pleskAlt"
  | "featuresSection.acronisAlt"
  | "featuresSection.microsoftAlt"
  | "featuresSection.cloudLinuxAlt"
  | "featuresSection.ispManagerAlt"
  | "worldDaljm.multiRegionSupport"
  | "worldDaljm.description"
  | "worldDaljm.worldIllustrationAlt"
  | "trustCustomer.trustedBy"
  | "trustCustomer.docCenter"
  | "trustCustomer.financialCommittee"
  | "trustCustomer.socialSecurity"
  | "trustCustomer.commercialRegistry"
  | "trustCustomer.zatAlSawari"
  | "trustCustomer.docCenterAlt"
  | "trustCustomer.financialCommitteeAlt"
  | "trustCustomer.socialSecurityAlt"
  | "trustCustomer.commercialRegistryAlt"
  | "trustCustomer.zatAlSawariAlt"
  | "ourEdge.title"
  | "ourEdge.cdnPerformance"
  | "ourEdge.cdnPerformanceDesc"
  | "ourEdge.ddosMitigation"
  | "ourEdge.ddosMitigationDesc"
  | "ourEdge.securityProtection"
  | "ourEdge.securityProtectionDesc"
  | "ourEdge.performanceAlt"
  | "ourEdge.ddosProtectionAlt"
  | "ourEdge.securityAlt"
  | "ourEdge.visitorsAlt"
  | "ourEdge.easeOfUseAlt"
  | "ourEdge.growthAlt"
  | "questions.faq"
  | "questions.helpCenter"
  | "questions.faqAlt"
  | "questions.helpCenterAlt"
  | "questions.vpsDefinition"
  | "questions.vpsDefinitionDesc"
  | "questions.vpsVsShared"
  | "questions.vpsVsSharedDesc"
  | "questions.vpsVsDedicated"
  | "questions.vpsVsDedicatedDesc"
  | "questions.vpsLocations"
  | "questions.vpsLocationsDesc"
  | "trustCustomer.trustedBy"
  | "trustCustomer.docCenter"
  | "trustCustomer.financialCommittee"
  | "trustCustomer.socialSecurity"
  | "trustCustomer.commercialRegistry"
  | "trustCustomer.zatAlSawari"
  | "trustCustomer.docCenterAlt"
  | "trustCustomer.financialCommitteeAlt"
  | "trustCustomer.socialSecurityAlt"
  | "trustCustomer.commercialRegistryAlt"
  | "trustCustomer.zatAlSawariAlt"
  | "serverLicenses.title"
  | "serverLicenses.description"
  | "serverLicenses.signUpNow"
  | "individualLicenses.title"
  | "individualLicenses.description"
  | "individualLicenses.license.cloudLinux"
  | "individualLicenses.license.whmcs"
  | "individualLicenses.license.kernelCare"
  | "individualLicenses.license.liteSpeed"
  | "individualLicenses.license.directAdmin"
  | "individualLicenses.license.cPanelWHM"
  | "individualLicenses.license.softaculous"
  | "individualLicenses.license.cloudLinuxPro"
  | "individualLicenses.license.cloudLinuxAlt"
  | "individualLicenses.license.whmcsAlt"
  | "individualLicenses.license.kernelCareAlt"
  | "individualLicenses.license.liteSpeedAlt"
  | "individualLicenses.license.directAdminAlt"
  | "individualLicenses.license.cPanelWHMAlt"
  | "individualLicenses.license.softaculousAlt"
  | "individualLicenses.license.cloudLinuxProAlt"
  | "individualLicenses.monthly"
  | "featuresSectionFive.title"
  | "featuresSectionFive.description"
  | "featuresSectionFive.feature.emailOverview"
  | "featuresSectionFive.feature.emailOverviewDesc"
  | "featuresSectionFive.feature.topThreats"
  | "featuresSectionFive.feature.topThreatsDesc"
  | "featuresSectionFive.feature.spfDkimCompliance"
  | "featuresSectionFive.feature.spfDkimComplianceDesc"
  | "featuresSectionFive.feature.powerDmarcCompliance"
  | "featuresSectionFive.feature.powerDmarcComplianceDesc"
  | "featuresSectionFive.feature.emailOverviewAlt"
  | "featuresSectionFive.feature.topThreatsAlt"
  | "featuresSectionFive.feature.spfDkimComplianceAlt"
  | "featuresSectionFive.feature.powerDmarcComplianceAlt"
  | "whyChooseTigers.title"
  | "whyChooseTigers.feature.emailBlocking"
  | "whyChooseTigers.feature.emailBlockingDesc"
  | "whyChooseTigers.feature.realTimeMonitoring"
  | "whyChooseTigers.feature.realTimeMonitoringDesc"
  | "whyChooseTigers.feature.brandEnhancement"
  | "whyChooseTigers.feature.brandEnhancementDesc"
  | "whyChooseTigers.feature.emailDelivery"
  | "whyChooseTigers.feature.emailDeliveryDesc"
  | "whyChooseTigers.feature.emailBlockingAlt"
  | "whyChooseTigers.feature.realTimeMonitoringAlt"
  | "whyChooseTigers.feature.brandEnhancementAlt"
  | "whyChooseTigers.feature.emailDeliveryAlt"
  | "featuresSectionSix.title"
  | "featuresSectionSix.description"
  | "featuresSectionSix.feature.crossPlatform"
  | "featuresSectionSix.feature.ddosMitigation"
  | "featuresSectionSix.feature.malwareDetection"
  | "featuresSectionSix.feature.sslCertificate"
  | "featuresSectionSix.feature.securityMonitoring"
  | "featuresSectionSix.feature.performanceOptimization"
  | "featuresSectionSix.feature.crossPlatformAlt"
  | "featuresSectionSix.feature.ddosMitigationAlt"
  | "featuresSectionSix.feature.malwareDetectionAlt"
  | "featuresSectionSix.feature.sslCertificateAlt"
  | "featuresSectionSix.feature.securityMonitoringAlt"
  | "featuresSectionSix.feature.performanceOptimizationAlt"
  | "cloudHosting.title"
  | "cloudHosting.description"
  | "cloudHosting.startNow"
  | "dedicatedServerPricing.title"
  | "dedicatedServerPricing.serverInfo.title"
  | "dedicatedServerPricing.serverInfo.subtitle"
  | "dedicatedServerPricing.pricing.renewal"
  | "dedicatedServerPricing.pricing.buyNow"
  | "dedicatedServerPricing.pricing.features"
  | "dedicatedServerPricing.specs.cpu"
  | "dedicatedServerPricing.specs.cpuSubtitle"
  | "dedicatedServerPricing.specs.storage"
  | "dedicatedServerPricing.specs.storageSubtitle"
  | "dedicatedServerPricing.specs.database"
  | "dedicatedServerPricing.specs.databaseSubtitle"
  | "dedicatedServerPricing.specs.ram"
  | "dedicatedServerPricing.specs.ramSubtitle"
  | "dedicatedServerPricing.specs.bandwidth"
  | "dedicatedServerPricing.specs.bandwidthSubtitle"
  | "dedicatedServerPricing.specs.controlPanel"
  | "dedicatedServerPricing.specs.controlPanelSubtitle"
  | "dedicatedServerPricing.flags.usaAlt"
  | "dedicatedServerPricing.flags.ukAlt"
  | "dedicatedServerPricing.flags.australiaAlt"
  | "keyFeatures.title"
  | "keyFeatures.feature.backupRecovery"
  | "keyFeatures.feature.malwareProtection"
  | "keyFeatures.feature.deviceProtection"
  | "keyFeatures.feature.threatDetection"
  | "keyFeatures.feature.emailProtection"
  | "keyFeatures.feature.disasterRecovery"
  | "keyFeatures.feature.centralManagement"
  | "nistCompliance.title"
  | "nistCompliance.description"
  | "nistCompliance.principle.identify"
  | "nistCompliance.principle.identifyDesc"
  | "nistCompliance.principle.protect"
  | "nistCompliance.principle.protectDesc"
  | "nistCompliance.principle.verify"
  | "nistCompliance.principle.verifyDesc"
  | "nistCompliance.principle.recover"
  | "nistCompliance.principle.recoverDesc"
  | "cta.title"
  | "cta.description"
  | "cta.orderNow"
  | "cta.sectionBlockRightAlt"
  | "cta.sectionBlockLeftAlt"
  | "featuresSectionThree.title"
  | "featuresSectionThree.description"
  | "featuresSectionThree.feature.windowsLinuxSupport"
  | "featuresSectionThree.feature.ddosProtection"
  | "featuresSectionThree.feature.sslTlsCertificate"
  | "featuresSectionThree.feature.backupPlans"
  | "featuresSectionThree.feature.globalDataCenters"
  | "featuresSectionThree.feature.dedicatedIp"
  | "featuresSectionThree.feature.network10Gbit"
  | "featuresSectionThree.feature.windowsServerSupport"
  | "featuresSectionThree.feature.windowsLinuxSupportAlt"
  | "featuresSectionThree.feature.ddosProtectionAlt"
  | "featuresSectionThree.feature.sslTlsCertificateAlt"
  | "featuresSectionThree.feature.backupPlansAlt"
  | "featuresSectionThree.feature.globalDataCentersAlt"
  | "featuresSectionThree.feature.dedicatedIpAlt"
  | "featuresSectionThree.feature.network10GbitAlt"
  | "featuresSectionThree.feature.windowsServerSupportAlt"
  | "featuresSectionThree.rightImageAlt"
  | "featuresSectionThree.leftImageAlt"
  | "payment.titletwo";

type Translations = Record<TranslationKeys, string>;

const translations: Record<Language, Translations> = {
  arabic: {
    "sharedHosting.title": "الاستضافات المشتركة",
"sharedHosting.description": "خوادم سحابية عالية الأداء والثبات تصل إلى 100% مع مواقع جغرافية متعددة",
"sharedHosting.startNow": "ابدا الان!",
"smallContent.feature.backupRecovery": "النسخ الاحتياطي والاسترداد للبيئات المادية والافتراضية والسحابية.",
"smallContent.feature.malwareProtection": "الحماية من البرامج الضارة ومكافحة برامج الفدية.",
"smallContent.feature.deviceProtection": "حماية الأجهزة الطرفية وإدارتها.",
"smallContent.feature.threatDetection": "اكتشاف التهديدات المتقدمة والاستجابة لها.",
"smallContent.feature.emailProtection": "حماية البريد الإلكتروني والأرشفة.",
"smallContent.feature.disasterRecovery": "التعافي من الكوارث المستند إلى السحابة.",
"smallContent.feature.centralManagement": "إدارة ومراقبة مركزية.",
"smallContent.checkIconAlt": "أيقونة التحقق",
    "nistCompliance.title": "متوافق مع إطار عمل NIST",
    "payment.titletwo":
      "لا توجد رسوم مخفية، يتم تجديد الاشتراك بنفس سعر الاشتراك .",
    "nistCompliance.description":
      "يتوافق Acronis مع إطار عمل المعهد الوطني للمعايير والتكنولوجيا (NIST) ، والذي يتكون من خمسة مبادئ لحماية عملك:",
    "nistCompliance.principle.identify": "التعرف",
    "nistCompliance.principle.identifyDesc":
      "على الثغرات الأمنية في البنية التحتية لتكنولوجيا المعلومات لديك وإجراء الاكتشاف التلقائي للأجهزة في شبكتك",
    "nistCompliance.principle.protect": "الحماية",
    "nistCompliance.principle.protectDesc":
      "بإستخدام أفضل الممارسات في مجال الأمان والإدارة وتحديثات البرامج والمزيد",
    "nistCompliance.principle.verify": "التحقق",
    "nistCompliance.principle.verifyDesc":
      "من التهديدات وتوفير دفاعات قوية ضد البرامج الضارة / برامج الفدية",
    "nistCompliance.principle.recover": "استعادة",
    "nistCompliance.principle.recoverDesc":
      "يمكننا بسرعة معالجة واستعادة البيانات والأنظمة المفقودة عن بُعد مع التحقق من سبب حدوث المشكلة",
    "cta.title": "هل تحتاج تراخيص لتتشغيل الخادم الخاص بك؟",
    "cta.description": "نحن نوفرها لك باقل تكلفة",
    "cta.orderNow": "اطلب الان!",
    "cta.sectionBlockRightAlt": "كتلة زخرفية يمينية",
    "cta.sectionBlockLeftAlt": "كتلة زخرفية يسارية",
    "featuresSectionThree.title": "المزايا",
    "featuresSectionThree.description": "المزايا الأساسية في جميع خططنا",
    "featuresSectionThree.feature.windowsLinuxSupport":
      "دعم نظامي ويندوز ولينكس",
    "featuresSectionThree.feature.ddosProtection": "حماية DDoS",
    "featuresSectionThree.feature.sslTlsCertificate": "شهادة SSL/TLS",
    "featuresSectionThree.feature.backupPlans": "خطط نسخ احتياطي",
    "featuresSectionThree.feature.globalDataCenters": "مراكز بيانات عالميّة",
    "featuresSectionThree.feature.dedicatedIp": "عناوين IP مخصصة",
    "featuresSectionThree.feature.network10Gbit": "شبكة 10Gbit وافرة",
    "featuresSectionThree.feature.windowsServerSupport":
      "دعم أنظمة تشغيل Windows Server نسخ 2019/2022",
    "featuresSectionThree.feature.windowsLinuxSupportAlt":
      "أيقونة دعم نظامي ويندوز ولينكس",
    "featuresSectionThree.feature.ddosProtectionAlt": "أيقونة حماية DDoS",
    "featuresSectionThree.feature.sslTlsCertificateAlt": "أيقونة شهادة SSL/TLS",
    "featuresSectionThree.feature.backupPlansAlt": "أيقونة خطط النسخ الاحتياطي",
    "featuresSectionThree.feature.globalDataCentersAlt":
      "أيقونة مراكز البيانات العالمية",
    "featuresSectionThree.feature.dedicatedIpAlt": "أيقونة عناوين IP المخصصة",
    "featuresSectionThree.feature.network10GbitAlt": "أيقونة شبكة 10Gbit وافرة",
    "featuresSectionThree.feature.windowsServerSupportAlt":
      "أيقونة دعم أنظمة تشغيل Windows Server نسخ 2019/2022",
    "featuresSectionThree.rightImageAlt": "صورة زخرفية يمينية",
    "featuresSectionThree.leftImageAlt": "صورة زخرفية يسارية",

    "featuresSectionSix.title": "مزايا رئيسية",
    "featuresSectionSix.description":
      "قم بامتلاك مُخدّمك المخصص مع نظام التشغيل المفضل لديك والتطبيقات المثبتة مسبقًا.",
    "featuresSectionSix.feature.crossPlatform": "يعمل عبر منصات متعددة",
    "featuresSectionSix.feature.ddosMitigation":
      "تخفيف هجمات حجب الخدمة (DDoS)",
    "featuresSectionSix.feature.malwareDetection":
      "اكتشاف وإزالة البرامج الضارة",
    "featuresSectionSix.feature.sslCertificate": "شهادة أمان SSL",
    "featuresSectionSix.feature.securityMonitoring": "مراقبة الأمان",
    "featuresSectionSix.feature.performanceOptimization": "تحسين الأداء",
    "featuresSectionSix.feature.crossPlatformAlt":
      "أيقونة العمل عبر منصات متعددة",
    "featuresSectionSix.feature.ddosMitigationAlt":
      "أيقونة تخفيف هجمات حجب الخدمة (DDoS)",
    "featuresSectionSix.feature.malwareDetectionAlt":
      "أيقونة اكتشاف وإزالة البرامج الضارة",
    "featuresSectionSix.feature.sslCertificateAlt": "أيقونة شهادة أمان SSL",
    "featuresSectionSix.feature.securityMonitoringAlt": "أيقونة مراقبة الأمان",
    "featuresSectionSix.feature.performanceOptimizationAlt":
      "أيقونة تحسين الأداء",
    "cloudHosting.title": "الاستضافة السحابية",
    "cloudHosting.description":
      "خوادم سحابية عالية الأداء والثبات تصل إلى 100% مع مواقع جغرافية متعددة",
    "cloudHosting.startNow": "ابدا الان!",
    "dedicatedServerPricing.title": "خطط وأسعار استضافة الخادم المخصص",
    "dedicatedServerPricing.serverInfo.title": "INTEL SILVER 7402P",
    "dedicatedServerPricing.serverInfo.subtitle": "INTEL SILVER 7402P",
    "dedicatedServerPricing.pricing.renewal":
      "40 دولار شهريا عند اعادة الاشتراك",
    "dedicatedServerPricing.pricing.buyNow": "اشتري الان !",
    "dedicatedServerPricing.pricing.features": "الميزات",
    "dedicatedServerPricing.specs.cpu": "26 نواة @ 2.1 جيجاهرتز",
    "dedicatedServerPricing.specs.cpuSubtitle": "معيار الأداء 15,390",
    "dedicatedServerPricing.specs.storage": "2x 250 جيجابايت SSD",
    "dedicatedServerPricing.specs.storageSubtitle": "حتى 8 أقراص",
    "dedicatedServerPricing.specs.database": "1",
    "dedicatedServerPricing.specs.databaseSubtitle": "حتى 3",
    "dedicatedServerPricing.specs.ram": "64 جيجابايت",
    "dedicatedServerPricing.specs.ramSubtitle": "حتى 384 جيجابايت",
    "dedicatedServerPricing.specs.bandwidth": "3 جيجابايت/ثانية",
    "dedicatedServerPricing.specs.bandwidthSubtitle":
      "100 تيرابايت/شهر حركة مرور مجانية",
    "dedicatedServerPricing.specs.controlPanel": "cPanel/WHM، من فضلك",
    "dedicatedServerPricing.specs.controlPanelSubtitle":
      "إصدار Obsidian Web Host",
    "dedicatedServerPricing.flags.usaAlt": "علم الولايات المتحدة",
    "dedicatedServerPricing.flags.ukAlt": "علم المملكة المتحدة",
    "dedicatedServerPricing.flags.australiaAlt": "علم أستراليا",
    "keyFeatures.title": "مزايا رئيسية",
    "keyFeatures.feature.backupRecovery":
      "النسخ الاحتياطي والاسترداد للبيئات المادية والافتراضية والسحابية.",
    "keyFeatures.feature.malwareProtection":
      "الحماية من البرامج الضارة ومكافحة برامج الفدية.",
    "keyFeatures.feature.deviceProtection": "حماية الأجهزة الطرفية وإدارتها.",
    "keyFeatures.feature.threatDetection":
      "اكتشاف التهديدات المتقدمة والاستجابة لها.",
    "keyFeatures.feature.emailProtection": "حماية البريد الإلكتروني والأرشفة.",
    "keyFeatures.feature.disasterRecovery":
      "التعافي من الكوارث المستند إلى السحابة.",
    "keyFeatures.feature.centralManagement": "إدارة ومراقبة مركزية.",
    "serverLicenses.title": "تراخيص الخوادم",
    "serverLicenses.description":
      "ترخيص واحد للخوادم الخاصة والخوادم المخصصة بالكامل",
    "serverLicenses.signUpNow": "التسجيل الان!",
    "individualLicenses.title": "هل تحتاج إلى تراخيص فردية؟",
    "individualLicenses.description":
      "احصل على ترخيص فردي للخوادم الخاصة والخوادم المخصصة بالكامل",
    "individualLicenses.license.cloudLinux": "CloudLinux",
    "individualLicenses.license.whmcs": "WHMCS",
    "individualLicenses.license.kernelCare": "KernelCare",
    "individualLicenses.license.liteSpeed": "LiteSpeed",
    "individualLicenses.license.directAdmin": "DirectAdmin",
    "individualLicenses.license.cPanelWHM": "cPanel/WHM",
    "individualLicenses.license.softaculous": "Softaculous",
    "individualLicenses.license.cloudLinuxPro": "CloudLinux Pro",
    "individualLicenses.license.cloudLinuxAlt": "شعار CloudLinux",
    "individualLicenses.license.whmcsAlt": "شعار WHMCS",
    "individualLicenses.license.kernelCareAlt": "شعار KernelCare",
    "individualLicenses.license.liteSpeedAlt": "شعار LiteSpeed",
    "individualLicenses.license.directAdminAlt": "شعار DirectAdmin",
    "individualLicenses.license.cPanelWHMAlt": "شعار cPanel/WHM",
    "individualLicenses.license.softaculousAlt": "شعار Softaculous",
    "individualLicenses.license.cloudLinuxProAlt": "شعار CloudLinux Pro",
    "individualLicenses.monthly": "شهرياً",
    "featuresSectionFive.title": "نظرة شاملة على نطاقك بالكامل",
    "featuresSectionFive.description":
      "احصل على رؤية شاملة لكل ما يحدث في نطاقك على لوحة تحكم واحدة، وتعمق في التفاصيل من خلال المخططات التفاعلية والأدوات.",
    "featuresSectionFive.feature.emailOverview":
      "نظرة عامة على البريد الإلكتروني الصادر",
    "featuresSectionFive.feature.emailOverviewDesc":
      "عرض نسبة رسائل البريد الإلكتروني التي تمر عبر DMARC.",
    "featuresSectionFive.feature.topThreats": "أهم 5 تهديدات",
    "featuresSectionFive.feature.topThreatsDesc":
      "عرض أهم 5 عناوين IP تشكل أكبر التهديدات المحتملة لنطاقك.",
    "featuresSectionFive.feature.spfDkimCompliance":
      "التوافق مع أنظمة SPF وDKIM",
    "featuresSectionFive.feature.spfDkimComplianceDesc":
      "نسبة رسائل البريد الإلكتروني التي تتوافق مع SPF وDKIM على التوالي.",
    "featuresSectionFive.feature.powerDmarcCompliance":
      "التوافق مع منصة PowerDMARC",
    "featuresSectionFive.feature.powerDmarcComplianceDesc":
      "نسبة رسائل البريد الإلكتروني المرسلة من نطاقك والمتوافقة مع PowerDMARC.",
    "featuresSectionFive.feature.emailOverviewAlt":
      "أيقونة مغلف البريد الإلكتروني",
    "featuresSectionFive.feature.topThreatsAlt": "أيقونة مثلث التحذير",
    "featuresSectionFive.feature.spfDkimComplianceAlt": "أيقونة قفل الأمان",
    "featuresSectionFive.feature.powerDmarcComplianceAlt":
      "أيقونة درع الأمان مع علامة صح",
    "whyChooseTigers.title": "لماذا نختار النمور",
    "whyChooseTigers.feature.emailBlocking":
      "حظر البريد الإلكتروني غير المصرح به",
    "whyChooseTigers.feature.emailBlockingDesc":
      "عند استخدامك لـ PowerDMARC، لا تقوم فقط بالقضاء على انتحال البريد الإلكتروني، بل يمكنك أيضًا استخدام التقارير التفصيلية لتغيير استراتيجية المحتوى الخاصة بك فورًا. لا تترك مجالًا للصدفة.",
    "whyChooseTigers.feature.realTimeMonitoring":
      "مراقبة التهديدات في الوقت الفعلي",
    "whyChooseTigers.feature.realTimeMonitoringDesc":
      "باستخدام محرك الذكاء الاصطناعي لدينا، يمكنك تتبع المصادر الضارة التي تنتحل نطاقك أينما كانت في العالم.",
    "whyChooseTigers.feature.brandEnhancement": "تعزيز صورة علامتك التجارية",
    "whyChooseTigers.feature.brandEnhancementDesc":
      "عند استخدامك لـ PowerDMARC، لا تقوم فقط بالقضاء على انتحال البريد الإلكتروني، بل يمكنك أيضًا استخدام التقارير التفصيلية لتغيير استراتيجية المحتوى الخاصة بك فورًا. لا تترك مجالًا للصدفة.",
    "whyChooseTigers.feature.emailDelivery": "تحسين إمكانية تسليم البريد",
    "whyChooseTigers.feature.emailDeliveryDesc":
      "يثبت تنفيذ PowerDMARC لخوادم المستلمين أنك ملتزم بتحسين أمان بريدك الإلكتروني، مما يزيد من احتمال وصول رسائلك إلى صناديق البريد المستهدفة.",
    "whyChooseTigers.feature.emailBlockingAlt": "أيقونة أمان البريد الإلكتروني",
    "whyChooseTigers.feature.realTimeMonitoringAlt":
      "أيقونة المراقبة في الوقت الفعلي",
    "whyChooseTigers.feature.brandEnhancementAlt":
      "أيقونة تعزيز العلامة التجارية",
    "whyChooseTigers.feature.emailDeliveryAlt": "أيقونة تسليم البريد",
    "serverManagement.title": "إدارة الخوادم",
    "serverManagement.description": "دعنا ندير جميع خوادمك من أجلك!",
    "serverManagement.signUpNow": "التسجيل الان!",
    "pricingSection.choosePlan": "اختر أحد الخطط",
    "pricingSection.planName": "أوبيليونز ناتيف",
    "pricingSection.pricePeriod": "د.ل/ربع سنوي",
    "pricingSection.orderNow": "اطلب الان",
    "pricingSection.comparePackages": "قارن البكجات",
    "pricingSection.feature.nvmeStorage": "60 جيجابايت تخزين NVMe",
    "pricingSection.feature.websites": "15 موقعًا",
    "pricingSection.feature.ram": "4 رام",
    "pricingSection.feature.cpu": "3 وحدات معالجة مركزية",
    "pricingSection.feature.cpanel": "لوحة تحكم cPanel",
    "pricingSection.feature.subdomains": "نطاقات فرعية غير محدودة",
    "pricingSection.feature.databases": "قواعد بيانات MySQL وSQL غير محدودة",
    "pricingSection.feature.email": "حسابات بريد إلكتروني غير محدودة",
    "pricingSection.feature.ftp": "حسابات FTP غير محدودة",
    "pricingSection.feature.oneClickInstaller":
      "يدعم تثبيت التطبيقات بنقرة واحدة",
    "pricingSection.rightBlocksAlt": "كتل زخرفية يمينية مع أيقونات",
    "pricingSection.leftBlocksAlt": "كتل زخرفية يسارية مع أيقونات",
    "goFast.title": "انطلق بسرعة ونمي أعمالك",
    "goFast.cdnPerformance": "تحسين أداء الموقع عبر CDN",
    "goFast.cdnPerformanceDesc":
      "يعمل CDN الخاص بنا على تحسين سرعة تحميل الصفحات وتقليل أعباء الخادم بنسبة 80٪ في المتوسط لتحسين أداء موقعك.",
    "goFast.ddosMitigation": "التخفيف من هجمات DDoS",
    "goFast.ddosMitigationDesc":
      "يمكن أن تؤدي هجمات الحرمان من الخدمة الموزعة (DDoS) إلى تعطيل عملك بالكامل. نحن نحجب هجمات DDoS على المستويات 3 و4 و7 ونؤمن عرض النطاق الترددي أثناء الهجمات.",
    "goFast.securityProtection": "الحماية من الاختراق والبرمجيات الضارة",
    "goFast.securityProtectionDesc":
      "قم بحماية موقعك من البرمجيات الضارة ومنع محاولات الاختراق، وهجمات يوم الصفر، وهجمات تخمين كلمات المرور بالقوة الغاشمة.",
    "goFast.cdnIconAlt": "أيقونة تحسين أداء الموقع",
    "goFast.ddosIconAlt": "أيقونة حماية DDoS",
    "goFast.malwareIconAlt": "أيقونة الحماية من البرمجيات الضارة",
    "systemSucuri.title": "سوكوري يوفر دعمًا عبر الأنظمة الأساسية",
    "systemSucuri.description":
      "جدار الحماية لمواقع سوكوري يعمل عبر جميع الأنظمة الأساسية، بما في ذلك أشهر العلامات التجارية اليوم.",
    "systemSucuri.platform.phpbb": "Phpbb",
    "systemSucuri.platform.joomla": "Joomla",
    "systemSucuri.platform.drupal": "Drupal",
    "systemSucuri.platform.magento": "Magento",
    "systemSucuri.platform.wordpress": "WordPress",
    "systemSucuri.platform.phpbbAlt": "شعار Phpbb",
    "systemSucuri.platform.joomlaAlt": "شعار Joomla",
    "systemSucuri.platform.drupalAlt": "شعار Drupal",
    "systemSucuri.platform.magentoAlt": "شعار Magento",
    "systemSucuri.platform.wordpressAlt": "شعار WordPress",
    "featuresSectionFour.title": "مزايا رئيسية",
    "featuresSectionFour.description":
      "قم بامتلاك مُخدّمك المخصص مع نظام التشغيل المفضل لديك والتطبيقات المثبتة مسبقًا.",
    "featuresSectionFour.feature.crossPlatform": "يعمل عبر منصات متعددة",
    "featuresSectionFour.feature.ddosMitigation":
      "تخفيف هجمات حجب الخدمة (DDoS)",
    "featuresSectionFour.feature.malwareRemoval":
      "اكتشاف وإزالة البرامج الضارة",
    "featuresSectionFour.feature.sslCertificate": "شهادة أمان SSL",
    "featuresSectionFour.feature.securityMonitoring": "مراقبة الأمان",
    "featuresSectionFour.feature.performanceOptimization": "تحسين الأداء",
    "featuresSectionFour.feature.crossPlatformAlt": "يعمل عبر منصات متعددة",
    "featuresSectionFour.feature.ddosMitigationAlt":
      "تخفيف هجمات حجب الخدمة (DDoS)",
    "featuresSectionFour.feature.malwareRemovalAlt":
      "اكتشاف وإزالة البرامج الضارة",
    "featuresSectionFour.feature.sslCertificateAlt": "شهادة أمان SSL",
    "featuresSectionFour.feature.securityMonitoringAlt": "مراقبة الأمان",
    "featuresSectionFour.feature.performanceOptimizationAlt": "تحسين الأداء",

    "questions.faq": "الأسئلة الشائعة",
    "questions.helpCenter": "مركز المساعدة",
    "questions.faqAlt": "الأسئلة الشائعة",
    "questions.helpCenterAlt": "مركز المساعدة",
    "questions.vpsDefinition": "ما هو المُخدّم الافتراضي المخصص (VPS)؟",
    "questions.vpsDefinitionDesc":
      "المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون لديك استضافة VPS، فإن إحدى تلك البيئات مخصصة لك بالكامل. هذا يعني أنك لست مضطرًا إلى مشاركة الموارد (مثل ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر بسلوكهم.",
    "questions.vpsVsShared":
      "متى يجب علي استخدام استضافة VPS بدلًا من الاستضافة المشتركة؟",
    "questions.vpsVsSharedDesc":
      "الخادم الافتراضي الخاص مثالي للمستخدمين الذين يبحثون عن المزيد من التحكم في بيئة الاستضافة الخاصة بهم. لذا، إذا زاد عدد زوار موقعك أو إذا كان لديك مواقع متعددة وتحتاج إلى موارد إضافية لتشغيلها بكفاءة، فإن VPS يمنحك المزيد من المرونة والتحكم لتحسين الأداء وزيادة الموارد مثل RAM ومساحة القرص دون دفع أكثر مما تحتاج.",
    "questions.vpsVsDedicated":
      "ما الفرق بين المُخدّم الافتراضي والمُخدّم المخصص؟",
    "questions.vpsVsDedicatedDesc":
      "يختلف المُخدّم الافتراضي عن المُخدّم المخصص من حيث عدد المستخدمين الذين يمتلكون موارد على مُخدّم فعلي. مع VPS، يتم تخصيص بعض الموارد لمستخدمين محددين، ولكن هناك العديد من المستخدمين على نفس المُخدّم الفعلي. أما مع المُخدّم المخصص، فالمستخدم الواحد لديه وصول كامل إلى جميع موارد المُخدّم الفعلي.",
    "questions.vpsLocations": "ماهي المواقع المتاحة لاستضافة VPS؟",
    "questions.vpsLocationsDesc":
      "مع Libyan Spider، يمكنك اختيار موقع الخادم: ألمانيا، فنلندا",
    "ourEdge.title": "ما الذي يميز",
    "ourEdge.cdnPerformance": "تحسين أداء الموقع عبر CDN",
    "ourEdge.cdnPerformanceDesc":
      "تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال الخادم بنسبة 80٪ في المتوسط ​​لتحسين أداء موقعك.",
    "ourEdge.ddosMitigation": "التخفيف من هجمات DDoS",
    "ourEdge.ddosMitigationDesc":
      "يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات.",
    "ourEdge.securityProtection":
      "الحماية من عمليّات الاختراق والبرامج الخبيثة",
    "ourEdge.securityProtectionDesc":
      "قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.",
    "ourEdge.performanceAlt": "الأداء",
    "ourEdge.ddosProtectionAlt": "حماية DDoS",
    "ourEdge.securityAlt": "الأمان",
    "ourEdge.visitorsAlt": "الزوار",
    "ourEdge.easeOfUseAlt": "سهولة الاستخدام",
    "ourEdge.growthAlt": "النمو",
    "hostingPlans.choosePlan": "اختر الخطة المناسبة",
    "hostingPlans.planName": "أوبيليونز ناتيف",
    "hostingPlans.pricePeriod": "د.ل/ربع سنوي",
    "hostingPlans.vCPU": "vCPU",
    "hostingPlans.memory": "الذاكرة",
    "hostingPlans.ssdStorage": "SSD تخزين",
    "hostingPlans.orderNow": "اطلب الان",
    "hostingPlans.virtualServersTitle": "مُخدّمات افتراضية.. بقدرات حقيقيّة",
    "hostingPlans.virtualServersDescription":
      "توفّر لك المخدّمات السحابيّة الافتراضيّة قوّة الموارد المخصّصة بالكامل لتوسيع إمكانيّات استضافتك وتعزيز استقرار موقعك مع المزايا المتقدّمة.",
    "hostingPlans.highPerformance": "أجهزة عالية الأداء",
    "hostingPlans.enterpriseReliability": "موثوقيّة على مستوى المؤسسات",
    "hostingPlans.uptimeGuarantee": "ضمان وقت التشغيل 99.9٪",
    "hostingPlans.nvmeSsd": "أقراص NVMe SSD عالية السرعة",
    "featuresSection.mainFeatures": "مزايا رئيسية",
    "featuresSection.description":
      "قم بامتلاك مُخدّمك المخصص مع نظام التشغيل المفضل لديك والتطبيقات المثبتة مسبقًا.",
    "featuresSection.backgroundDecorationAlt": "زخرفة الخلفية",
    "featuresSection.sucuriAlt": "أمان Sucuri",
    "featuresSection.softaculousAlt": "Softaculous",
    "featuresSection.linuxAlt": "نظام تشغيل Linux",
    "featuresSection.cpanelAlt": "cPanel",
    "featuresSection.pleskAlt": "Plesk",
    "featuresSection.acronisAlt": "Acronis",
    "featuresSection.microsoftAlt": "Microsoft",
    "featuresSection.cloudLinuxAlt": "CloudLinux",
    "featuresSection.ispManagerAlt": "ISP Manager",
    "worldDaljm.multiRegionSupport": "دعم مرن لتعدد المناطق",
    "worldDaljm.description":
      "قم بتشغيل التطبيقات ونقلها بين مناطق أجهزة متعددة من خلال واجهة مستخدم واحدة سهلة الاستخدام، واجعلها أقرب إلى عملائك.",
    "worldDaljm.worldIllustrationAlt":
      "رسم توضيحي ثلاثي الأبعاد للعالم مع منصات",
    "trustCustomer.trustedBy": "موثوق به من قبل عملائنا",
    "trustCustomer.docCenter": "مركز المعلومات والتوثيق",
    "trustCustomer.financialCommittee": "لجنة الإفراجات المالية",
    "trustCustomer.socialSecurity": "صندوق الضمان الاجتماعي",
    "trustCustomer.commercialRegistry": "مصلحة السجل التجاري",
    "trustCustomer.zatAlSawari": "صيدلية ذات الصواري",
    "trustCustomer.docCenterAlt": "مركز المعلومات والتوثيق",
    "trustCustomer.financialCommitteeAlt": "لجنة الإفراجات المالية",
    "trustCustomer.socialSecurityAlt": "صندوق الضمان الاجتماعي",
    "trustCustomer.commercialRegistryAlt": "مصلحة السجل التجاري",
    "trustCustomer.zatAlSawariAlt": "صيدلية ذات الصواري",
    "header.phone": "+880181239633",
    "header.email": "info@doorsoft.co",
    "header.login": "الدخول",
    "header.register": "الإشتراك",
    "header.language": "العربية",
    "hero.serverHosting": "استضافة السيرفر",
    "hero.descriptionText": "عنوان وصف عنوان وصف عنوان وصف",
    "hero.startNow": "ابدا الان!",

    "nav.home": "الرئيسية",
    "nav.hosting": "الاستضافات",
    "nav.reseller": "استضافة الموزعين",
    "nav.servers": "الخوادم",
    "nav.domains": "النطاقات",
    "nav.company": "الشركة",
    "nav.technology": "التكنولوجيا",

    "hero.title": "حلول",
    "hero.subtitle": "استضافة الويب المثالية",
    "hero.description":
      "شركة نيمور هي شركة رائدة في مجال استضافة الويب وحجز النطاقات",
    "hero.search": "بحث",
    "hero.searchPlaceholder": "ابحث عن نطاق جديد",
    "bouquets.choosePlan": "اختر أحد الخطط",
    "bouquets.native": "أوبيليونز ناتيف",
    "bouquets.quarterly": "د.ل/ربع سنوي",
    "bouquets.orderNow": "اطلب الان",
    "bouquets.comparePackages": "قارن البكجات",
    "bouquets.nvmeStorage": "NVMe Storage",
    "bouquets.websites": "Website(s)",
    "bouquets.ram": "RAM",
    "bouquets.cpu": "CPU",
    "bouquets.controlPanel": "cPanel Control Panel",
    "bouquets.subdomains": "Subdomains",
    "bouquets.mysqlDatabases": "MySQL & SQL Databases",
    "bouquets.emailAccount": "Email Account",
    "bouquets.ftpAccounts": "FTP Accounts",
    "bouquets.oneClickInstaller": "Supports one-click app installer",

    "hosting.shared": "الاستضافات المشتركة",
    "hosting.shared.desc":
      "استضافة موثوقة وملائمة من حيث التكلفة للشركات الصغيرة والمواقع الشخصية",
    "hosting.cloud": "الاستضافة السحابية",
    "hosting.cloud.desc": "حلول استضافة قابلة للتوسع تنمو مع احتياجات عملك",
    "hosting.wordpress": "استضافات الووردبريس",
    "hosting.wordpress.desc":
      "بيئة استضافة محسنة مصممة خصيصاً لمواقع الووردبريس",
    "hosting.softaculous": "استضافة Softaculous",
    "hosting.softaculous.desc":
      "تثبيت بنقرة واحدة لأكثر من 400 تطبيق باستخدام Softaculous",
    "hosting.email": "استضافات البريد",
    "hosting.email.desc":
      "استضافة بريد إلكتروني موثوقة مع نطاقات مخصصة للتواصل المهني",
    "hosting.business": "استضافات الأعمال",
    "hosting.business.desc": "استضافة احترافية للشركات النامية مع أداء عالي",
    "hosting.developer": "استضافات المبرمجين",
    "hosting.developer.desc": "حلول استضافة متقدمة مع أدوات وميزات للمطورين",
    "hosting.tamoor": "سحابة تمور",
    "hosting.tamoor.desc":
      "استضافة سحابية آمنة وعالية الأداء لتطبيقات المؤسسات",

    "reseller.basic": "الموزع العادي",
    "reseller.basic.desc": "خطة استضافة أساسية للموزعين لبدء عملائهم",
    "reseller.plus": "الموزع بلاس",
    "reseller.plus.desc": "ميزات محسنة لشبكات الموزعين المتنامية",
    "reseller.ultra": "الموزع الترا",
    "reseller.ultra.desc": "استضافة متميزة لعمليات الموزعين على نطاق واسع",
    "reseller.program": "برنامج الموزعين",
    "reseller.program.desc": "انضم إلى برنامج الموزعين لدينا وابدأ في الكسب",

    "servicesCards.dedicatedServers.title": "الخوادم المخصصة",
    "servicesCards.dedicatedServers.desc":
      "استضف موقعك بسهولة وراحة وبتكاليف اقتصادية!",
    "servicesCards.sharedCloudHosting.title": "استضافة سحابية مشتركة",
    "servicesCards.sharedCloudHosting.desc":
      "استضف موقعك بسهولة وراحة وبتكاليف اقتصادية!",
    "servicesCards.webHosting.title": "استضافة الويب",
    "servicesCards.webHosting.desc":
      "استضف موقعك بسهولة وراحة وبتكاليف اقتصادية!",
    "servicesCards.controlPanelLicense.title": "ترخيص لوحة التحكم",
    "servicesCards.controlPanelLicense.desc":
      "استضف موقعك بسهولة وراحة وبتكاليف اقتصادية!",
    "servicesCards.domains.title": "النطاقات",
    "servicesCards.domains.desc": "استضف موقعك بسهولة وراحة وبتكاليف اقتصادية!",
    "servicesCards.vps.title": "الخادم الافتراضي الخاص",
    "servicesCards.vps.desc": "استضف موقعك بسهولة وراحة وبتكاليف اقتصادية!",
    "servicesCards.startingPrice": "ابتداءً من 45 ريال سعودي / شهريًا",

    "servers.vps": "خوادم VPS",
    "servers.vps.desc": "خوادم افتراضية خاصة مع موارد مخصصة لمشاريعك",
    "servers.cloud": "الخوادم السحابية",
    "servers.cloud.desc": "خوادم سحابية مرنة وقابلة للتوسع لأي نوع من الأعمال",
    "servers.dedicated": "الخوادم الكاملة",
    "servers.dedicated.desc": "خوادم مخصصة مع تحكم كامل في بيئتك",
    "servers.licenses": "تراخيص الخوادم",
    "servers.licenses.desc":
      "احصل على التراخيص اللازمة لبرنامج الخادم الخاص بك",
    "servers.support": "الدعم الفني للخوادم",
    "servers.support.desc": "احصل على دعم الخبراء لصيانة وإدارة الخوادم",
    "servers.backup": "النسخ الاحتياطية",
    "servers.backup.desc":
      "قم بتأمين بياناتك مع خدمات النسخ الاحتياطي التلقائي",

    "domains.register": "تسجيل النطاقات",
    "domains.register.desc":
      "سجل نطاقات جديدة أو قم بنقل نطاقاتك الحالية بسهولة",
    "domains.local": "النطاقات المحلية",
    "domains.local.desc": "احصل على امتدادات نطاقات محلية لمنطقتك أو بلدك",
    "domains.transfer": "نقل نطاق",
    "domains.transfer.desc": "نقل النطاقات بسلاسة من موزعين آخرين",
    "domains.cloudflare": "كلاود فلير",
    "domains.cloudflare.desc":
      "قم بتحسين أمان وأداء موقعك الإلكتروني باستخدام Cloudflare",
    "domains.ssl": "شهادات الأمان SSL",
    "domains.ssl.desc":
      "تأكد من تأمين الاتصالات لموقعك الإلكتروني باستخدام شهادات SSL",
    "domains.whois": "whois",
    "domains.whois.desc": "البحث عن معلومات النطاقات والتحقق من توفرها",

    "company.about": "عنا",
    "company.about.desc": "تعرف على المزيد عن شركتنا وقيمنا ومهمتنا",
    "company.contact": "اتصل بنا",
    "company.contact.desc": "تواصل مع فريقنا لأي استفسارات أو دعم",
    "company.jobs": "الوظائف",
    "company.jobs.desc": "انضم إلى فريقنا وساعدنا في تشكيل مستقبل الاستضافة",
    "company.news": "مركز الإعلام والأخبار",
    "company.news.desc": "ابق محدثاً بأحدث أخبار الشركة والإعلانات الإعلامية",
    "company.reseller": "برنامج الموزعين",
    "company.reseller.desc": "كن موزعاً وابدأ عملك معنا",
    "company.payment": "طرق الدفع",
    "company.payment.desc": "اكتشف جميع خيارات الدفع المتاحة لخدماتنا",

    "tech.security": "الأمان",
    "tech.security.desc":
      "ميزات أمان متطورة لحماية بياناتك ومواقعك الإلكترونية من جميع التهديدات المحتملة",
    "tech.speed": "السرعة",
    "tech.speed.desc":
      "حلول استضافة محسنة لضمان أسرع أوقات تحميل ممكنة لموقعك الإلكتروني",
    "tech.control": "لوحة التحكم",
    "tech.control.desc":
      "قم بإدارة خدمات الاستضافة الخاصة بك بسهولة باستخدام لوحة التحكم التفاعلية لدينا",
    "tech.datacenter": "مراكز البيانات",
    "tech.datacenter.desc":
      "اكتشف مراكز البيانات الحديثة لدينا للبنية التحتية من الدرجة الأولى",
    "tech.status": "حالة الخوادم",
    "tech.status.desc":
      "تحقق من الحالة الحالية ووقت التشغيل لجميع خوادمنا في الوقت الفعلي",
    "tech.backup": "النسخ الاحتياطية",
    "tech.backup.desc":
      "تأكد من أن بياناتك آمنة دائماً من خلال خدمات النسخ الاحتياطي المتطورة",

    "services.title": "خدمات رائعة تلبي احتياجات عملك",
    "services.description":
      "مع منتجاتنا وخدماتنا السحابية، ستجد أننا نلبي 100٪ من احتياجات عملك وبياناتك، مع أمان فائق لبنيتك التحتية.",
    "services.cloudHosting": "استضافة سحابية مشتركة",
    "services.lsSuite": "مجموعة LS",
    "services.jpaas": "JPaaS منصة كخدمة",
    "services.learnMore": "اعرف المزيد",

    "payment.title": "طرق الدفع",
    "payment.description": "ادفع باستخدام فوري أو أكثر من 20 طريقة دفع أخرى",

    "servers.title": "مواقع الخوادم",

    "partners.title": "شركاؤنا",
    "partners.description":
      "نحن نركز على شراكاتنا مع رواد التكامل لتقديم حلول استضافة آمنة وموثوقة تدعم نمو أعمال عملائنا وتساعدهم في تحقيق أهدافهم في العالم الرقمي.",

    "dashboard.title": "لوحة تحكم شاملة",
    "dashboard.subtitle": "لوحة خدمات المشتركين",
    "dashboard.description":
      "لوحة تحكم مُدارة بالكامل، متجاوبة وسهلة الاستخدام لإدارة جميع خدماتك السحابية.",

    "footer.rights": "@ جميع الحقوق محفوظة لشركة نمور الجارية ",
    "footer.services": "خدمات أخرى",
    "footer.contact": " تواصل معنا",
    "footer.domain": "تسجيل نطاق جديد",
    "footer.transfer": "نقل النطاق إلينا",
    "footer.affiliate": "التسويق على أساس العمولة",
    "footer.terms": "شروط الخدمة",

    "customer.helpCenter": "مركز المساعدة",
    "customer.jobs": "وظائف",
    "customer.subscriberServices": "خدمات المشتركين",
    "customer.dataCenters": "مراكز البيانات",
    "customer.testimonial":
      "إن احترافية فريقكم وتفانيهم واهتمامهم بالتفاصيل كان واضحاً طوال العملية الكاملة لتطوير موقع ISOC Libya. نحن معجبون تماماً بالمنتج النهائي. إنه سهل الاستخدام وجذاب من الناحية الجمالية، ويجسد روح ورؤية ISOC Libya بشكل مثالي. نحن سعداء حقاً بالنتائج والتعليقات الإيجابية التي بدأنا في تلقيها بالفعل.",
    "customer.customerName": "أمجد ب. شويحدي",
    "customer.customerTitle": "موقع ISOC Libya",
    "dashboard.easyManagement": "إدارة سهلة",
    "dashboard.easyManagement.desc":
      "إدارة كاملة ونظرة شاملة على جميع خدماتك في مكان واحد.",
    "dashboard.oneClick": "وظائف بنقرة واحدة",
    "dashboard.oneClick.desc": "نشر وتثبيت وإدارة ببضع نقرات وبخطوات بسيطة.",
    "dashboard.multiplePayment": "طرق دفع متعددة",
    "dashboard.multiplePayment.desc":
      "ادفع فواتير خدماتك عبر الإنترنت من خلال طرق دفع متعددة.",
    "dashboard.mainDashboard": "لوحة التحكم الرئيسية",
    "dashboard.servicesManagement": "إدارة الخدمات",
    "dashboard.checkoutProcess": "عملية الدفع",
    "footer.socialMedia":
      "ابق على اطلاع بأحدث أخبارنا وعروضنا الخاصة من خلال متابعتنا على قنوات التواصل الاجتماعي المختلفة.",
    "partners.linode.desc":
      "هي أكبر مزود مستقل لخدمات السحابة المفتوحة في العالم مع 11 مركز بيانات عالمي يخدم ما يقرب من مليون عميل وشركة حول العالم.",
    "partners.cpanel.desc":
      "لقد كان cPanel موثوقًا به من قبل ملايين المستخدمين حول العالم لأكثر من 20 عامًا، وظل هو المنصة الرائدة في أتمتة الاستضافة.",
    "partners.cloudlinux.desc":
      "CloudLinux OS هو المنصة الرائدة متعددة المستأجرين. إنه يحسن استقرار الخوادم والكثافة والأمان عن طريق عزل كل مستأجر.",
    "testimonials.1.text":
      "خدمة ممتازة وفريق محترف يقدم حلول مبتكرة وفعالة. تجربة رائعة تجاوزت كل توقعاتي وأنصح بها بشدة لكل من يبحث عن الجودة والاحترافية.",
    "testimonials.1.name": "محمد أحمد",
    "testimonials.1.title": "مدير عام",
    "testimonials.2.text":
      "الدعم الفني رائع والحلول فعالة، استجابوا لجميع استفساراتي بسرعة وكفاءة عالية. فريق عمل محترف ومتعاون يستحق كل التقدير والثناء.",
    "testimonials.2.name": "فاطمة علي",
    "testimonials.2.title": "مديرة تقنية",
    "testimonials.3.text":
      "سرعة في التنفيذ وجودة عالية في جميع الخدمات المقدمة. المنتجات ذات جودة ممتازة والتسليم كان في الموعد المحدد تماماً كما وعدوا.",
    "testimonials.3.name": "أحمد حسن",
    "testimonials.3.title": "مطور أول",
    "testimonials.4.text":
      "تجربة رائعة وحلول مبتكرة تلبي جميع احتياجاتنا بشكل مثالي. شعرت بالأمانة والمسئولية في التعامل مع فريق العمل المحترف والمتميز.",
    "testimonials.4.name": "سارة محمود",
    "testimonials.4.title": "مديرة مشاريع",

    "serverLocations.title": "مواقع الخوادم",
    "serverLocations.uae": "الإمارات العربية المتحدة",
    "serverLocations.germany": "ألمانيا",
    "serverLocations.finland": "فنلندا",
    "serverLocations.korea": "كوريا",
    "serverLocations.italy": "إيطاليا",
    "serverLocations.saudi": "المملكة العربية السعودية",
    "serverLocations.sudan": "السودان",
    "serverLocations.turkey": "تركيا",
    "serverLocations.britain": "بريطانيا",
    "serverLocations.america": "أمريكا",

    "servicesSection.title": "خدماتنا",
    "servicesSection.subtitle": "اكتشف الخدمات المقدمة لك",
    "servicesSection.dedicatedServers": "الخوادم المخصصة",
    "servicesSection.sharedCloudHosting": "استضافة سحابية مشتركة",
    "servicesSection.webHosting": "استضافة الويب",
    "servicesSection.controlPanelLicense": "ترخيص لوحة التحكم",
    "servicesSection.domains": "النطاقات",
    "servicesSection.vps": "الخادم الافتراضي الخاص",
    "servicesSection.description":
      "استضف موقعك بسهولة وراحة وبتكاليف اقتصادية!",
    "servicesSection.startingFrom": "ابتداءً من 45 ريال سعودي / شهريًا",

    "cloudServices.title": "خدمات رائعة تلبي احتياجات عملك",
    "cloudServices.description":
      "مع منتجاتنا وخدماتنا السحابية، ستجد أننا نلبي 100٪ من احتياجات عملك وبياناتك، مع أمان فائق لبنيتك التحتية.",
    "cloudServices.designDevelopment": "التصميم والتطوير",
    "cloudServices.domains": "النطاقات",
    "cloudServices.cloudServices": "الخدمات السحابية",
    "cloudServices.sharedCloudHosting": "استضافة سحابية مشتركة",
    "cloudServices.sharedCloudHosting.desc":
      "استضف موقعك بسهولة وراحة بتكلفة اقتصادية! . مع الاستضافة السحابية المشتركة.",
    "cloudServices.lsSuite": "مجموعة LS",
    "cloudServices.lsSuite.desc":
      "البريد الإلكتروني المهني، التخزين عبر الإنترنت، الاجتماعات المؤسسية، والمزيد. تم بناؤه للعمل.",
    "cloudServices.jpaas": "JPaaS منصة كخدمة",
    "cloudServices.jpaas.desc": "ادارة السيرفر مع تحكم كامل",
    "cloudServices.learnMore": "اعرف المزيد",
    "footer.privacyPolicy": "سياسة الخصوصية واتفاقية المستخدم",
    "footer.company": "الشركة",
    "footer.aboutUs": "من نحن",
    "footer.jobs": "الوظائف",
    "footer.contactUs": "اتصل بنا",
    "footer.mediaCenter": "مركز الإعلام والأخبار",
    "footer.servicesTitle": "الخدمات",
    "footer.hosting": "الاستضافة",
    "footer.domains": "النطاقات",
    "footer.vps": "الخادم الافتراضي الخاص",
    "footer.serverSupport": "الدعم الفني للخوادم",
    "footer.whois": "whois",
    "footer.technology": "التكنولوجيا",
    "footer.speed": "السرعة",
    "footer.security": "الأمان",
    "footer.controlPanel": "لوحة التحكم",
    "footer.backups": "النسخ الاحتياطية",
    "footer.legal": "القانوني",
    "footer.privacy": "الخصوصية",
    "footer.paymentMethods": "طرق الدفع",
    "footer.sslCertificates": "شهادات الأمان SSL",
    "footer.partners": "شركائنا",
  },

  english: {
    "sharedHosting.title": "Shared Hosting",
"sharedHosting.description": "High-performance and 100% stable cloud servers with multiple geographic locations",
"sharedHosting.startNow": "Start Now!",
"smallContent.feature.backupRecovery": "Backup and recovery for physical, virtual, and cloud environments.",
"smallContent.feature.malwareProtection": "Malware protection and anti-ransomware.",
"smallContent.feature.deviceProtection": "Endpoint protection and management.",
"smallContent.feature.threatDetection": "Advanced threat detection and response.",
"smallContent.feature.emailProtection": "Email protection and archiving.",
"smallContent.feature.disasterRecovery": "Cloud-based disaster recovery.",
"smallContent.feature.centralManagement": "Centralized management and monitoring.",
"smallContent.checkIconAlt": "Check Icon",

    "payment.titletwo":
      "No hidden fees, subscription renews at the same price.",
    "nistCompliance.title": "Compliant with NIST Framework",
    "nistCompliance.description":
      "Acronis complies with the National Institute of Standards and Technology (NIST) framework, which consists of five principles to protect your business:",
    "nistCompliance.principle.identify": "Identify",
    "nistCompliance.principle.identifyDesc":
      "Identify security vulnerabilities in your IT infrastructure and perform automatic device discovery in your network",
    "nistCompliance.principle.protect": "Protect",
    "nistCompliance.principle.protectDesc":
      "Using best practices in security, management, software updates, and more",
    "nistCompliance.principle.verify": "Verify",
    "nistCompliance.principle.verifyDesc":
      "Verify threats and provide robust defenses against malware/ransomware",
    "nistCompliance.principle.recover": "Recover",
    "nistCompliance.principle.recoverDesc":
      "We can quickly address and recover lost data and systems remotely while verifying the cause of the issue",
    "cta.title": "Need licenses to run your server?",
    "cta.description": "We provide them at the lowest cost",
    "cta.orderNow": "Order Now!",
    "cta.sectionBlockRightAlt": "Right Decorative Block",
    "cta.sectionBlockLeftAlt": "Left Decorative Block",
    "featuresSectionThree.title": "Features",
    "featuresSectionThree.description": "Core features in all our plans",
    "featuresSectionThree.feature.windowsLinuxSupport":
      "Windows and Linux Support",
    "featuresSectionThree.feature.ddosProtection": "DDoS Protection",
    "featuresSectionThree.feature.sslTlsCertificate": "SSL/TLS Certificate",
    "featuresSectionThree.feature.backupPlans": "Backup Plans",
    "featuresSectionThree.feature.globalDataCenters": "Global Data Centers",
    "featuresSectionThree.feature.dedicatedIp": "Dedicated IP Addresses",
    "featuresSectionThree.feature.network10Gbit": "Abundant 10Gbit Network",
    "featuresSectionThree.feature.windowsServerSupport":
      "Windows Server 2019/2022 Support",
    "featuresSectionThree.feature.windowsLinuxSupportAlt":
      "Windows and Linux Support Icon",
    "featuresSectionThree.feature.ddosProtectionAlt": "DDoS Protection Icon",
    "featuresSectionThree.feature.sslTlsCertificateAlt":
      "SSL/TLS Certificate Icon",
    "featuresSectionThree.feature.backupPlansAlt": "Backup Plans Icon",
    "featuresSectionThree.feature.globalDataCentersAlt":
      "Global Data Centers Icon",
    "featuresSectionThree.feature.dedicatedIpAlt":
      "Dedicated IP Addresses Icon",
    "featuresSectionThree.feature.network10GbitAlt":
      "Abundant 10Gbit Network Icon",
    "featuresSectionThree.feature.windowsServerSupportAlt":
      "Windows Server 2019/2022 Support Icon",
    "featuresSectionThree.rightImageAlt": "Right Decorative Image",
    "featuresSectionThree.leftImageAlt": "Left Decorative Image",

    "featuresSectionSix.title": "Key Features",
    "featuresSectionSix.description":
      "Own your dedicated server with your preferred operating system and pre-installed applications.",
    "featuresSectionSix.feature.crossPlatform":
      "Works Across Multiple Platforms",
    "featuresSectionSix.feature.ddosMitigation": "DDoS Attack Mitigation",
    "featuresSectionSix.feature.malwareDetection":
      "Malware Detection and Removal",
    "featuresSectionSix.feature.sslCertificate": "SSL Security Certificate",
    "featuresSectionSix.feature.securityMonitoring": "Security Monitoring",
    "featuresSectionSix.feature.performanceOptimization":
      "Performance Optimization",
    "featuresSectionSix.feature.crossPlatformAlt": "Cross-Platform Icon",
    "featuresSectionSix.feature.ddosMitigationAlt":
      "DDoS Attack Mitigation Icon",
    "featuresSectionSix.feature.malwareDetectionAlt":
      "Malware Detection and Removal Icon",
    "featuresSectionSix.feature.sslCertificateAlt":
      "SSL Security Certificate Icon",
    "featuresSectionSix.feature.securityMonitoringAlt":
      "Security Monitoring Icon",
    "featuresSectionSix.feature.performanceOptimizationAlt":
      "Performance Optimization Icon",
    "cloudHosting.title": "Cloud Hosting",
    "cloudHosting.description":
      "High-performance and 100% stable cloud servers with multiple geographic locations",
    "cloudHosting.startNow": "Start Now!",
    "dedicatedServerPricing.title":
      "Dedicated Server Hosting Plans and Pricing",
    "dedicatedServerPricing.serverInfo.title": "INTEL SILVER 7402P",
    "dedicatedServerPricing.serverInfo.subtitle": "INTEL SILVER 7402P",
    "dedicatedServerPricing.pricing.renewal": "$40 monthly upon renewal",
    "dedicatedServerPricing.pricing.buyNow": "Buy Now!",
    "dedicatedServerPricing.pricing.features": "Features",
    "dedicatedServerPricing.specs.cpu": "26 Cores @ 2.1 GHz",
    "dedicatedServerPricing.specs.cpuSubtitle": "Benchmark 15,390",
    "dedicatedServerPricing.specs.storage": "2x 250GB SSD",
    "dedicatedServerPricing.specs.storageSubtitle": "up to 8 disks",
    "dedicatedServerPricing.specs.database": "1",
    "dedicatedServerPricing.specs.databaseSubtitle": "up to 3",
    "dedicatedServerPricing.specs.ram": "64GB",
    "dedicatedServerPricing.specs.ramSubtitle": "up to 384GB",
    "dedicatedServerPricing.specs.bandwidth": "3Gbps",
    "dedicatedServerPricing.specs.bandwidthSubtitle": "100TB/mo free traffic",
    "dedicatedServerPricing.specs.controlPanel": "cPanel/WHM, please",
    "dedicatedServerPricing.specs.controlPanelSubtitle":
      "Obsidian Web Host Edition",
    "dedicatedServerPricing.flags.usaAlt": "US Flag",
    "dedicatedServerPricing.flags.ukAlt": "UK Flag",
    "dedicatedServerPricing.flags.australiaAlt": "Australia Flag",
    "keyFeatures.title": "Key Features",
    "keyFeatures.feature.backupRecovery":
      "Backup and recovery for physical, virtual, and cloud environments.",
    "keyFeatures.feature.malwareProtection":
      "Malware protection and anti-ransomware.",
    "keyFeatures.feature.deviceProtection":
      "Endpoint protection and management.",
    "keyFeatures.feature.threatDetection":
      "Advanced threat detection and response.",
    "keyFeatures.feature.emailProtection": "Email protection and archiving.",
    "keyFeatures.feature.disasterRecovery": "Cloud-based disaster recovery.",
    "keyFeatures.feature.centralManagement":
      "Centralized management and monitoring.",
    "serverLicenses.title": "Server Licenses",
    "serverLicenses.description":
      "One license for private and fully dedicated servers",
    "serverLicenses.signUpNow": "Sign Up Now!",
    "individualLicenses.title": "Need Individual Licenses?",
    "individualLicenses.description":
      "Get an individual license for private and fully dedicated servers",
    "individualLicenses.license.cloudLinux": "CloudLinux",
    "individualLicenses.license.whmcs": "WHMCS",
    "individualLicenses.license.kernelCare": "KernelCare",
    "individualLicenses.license.liteSpeed": "LiteSpeed",
    "individualLicenses.license.directAdmin": "DirectAdmin",
    "individualLicenses.license.cPanelWHM": "cPanel/WHM",
    "individualLicenses.license.softaculous": "Softaculous",
    "individualLicenses.license.cloudLinuxPro": "CloudLinux Pro",
    "individualLicenses.license.cloudLinuxAlt": "CloudLinux Logo",
    "individualLicenses.license.whmcsAlt": "WHMCS Logo",
    "individualLicenses.license.kernelCareAlt": "KernelCare Logo",
    "individualLicenses.license.liteSpeedAlt": "LiteSpeed Logo",
    "individualLicenses.license.directAdminAlt": "DirectAdmin Logo",
    "individualLicenses.license.cPanelWHMAlt": "cPanel/WHM Logo",
    "individualLicenses.license.softaculousAlt": "Softaculous Logo",
    "individualLicenses.license.cloudLinuxProAlt": "CloudLinux Pro Logo",
    "individualLicenses.monthly": "Monthly",
    "featuresSectionFive.title": "Comprehensive Overview of Your Entire Domain",
    "featuresSectionFive.description":
      "Get a complete view of everything happening in your domain on a single dashboard, and dive into details with interactive charts and tools.",
    "featuresSectionFive.feature.emailOverview": "Outgoing Email Overview",
    "featuresSectionFive.feature.emailOverviewDesc":
      "View the percentage of emails passing through DMARC.",
    "featuresSectionFive.feature.topThreats": "Top 5 Threats",
    "featuresSectionFive.feature.topThreatsDesc":
      "View the top 5 IP addresses posing the greatest potential threats to your domain.",
    "featuresSectionFive.feature.spfDkimCompliance": "SPF and DKIM Compliance",
    "featuresSectionFive.feature.spfDkimComplianceDesc":
      "Percentage of emails compliant with SPF and DKIM respectively.",
    "featuresSectionFive.feature.powerDmarcCompliance":
      "PowerDMARC Platform Compliance",
    "featuresSectionFive.feature.powerDmarcComplianceDesc":
      "Percentage of emails sent from your domain compliant with PowerDMARC.",
    "featuresSectionFive.feature.emailOverviewAlt": "Email Envelope Icon",
    "featuresSectionFive.feature.topThreatsAlt": "Warning Triangle Icon",
    "featuresSectionFive.feature.spfDkimComplianceAlt": "Security Lock Icon",
    "featuresSectionFive.feature.powerDmarcComplianceAlt":
      "Security Shield with Checkmark Icon",
    "whyChooseTigers.title": "Why Choose Tigers",
    "whyChooseTigers.feature.emailBlocking": "Block Unauthorized Emails",
    "whyChooseTigers.feature.emailBlockingDesc":
      "When using PowerDMARC, you not only eliminate email spoofing but can also use detailed reports to instantly adjust your content strategy. Leave nothing to chance.",
    "whyChooseTigers.feature.realTimeMonitoring": "Real-Time Threat Monitoring",
    "whyChooseTigers.feature.realTimeMonitoringDesc":
      "Using our AI engine, you can track malicious sources spoofing your domain anywhere in the world.",
    "whyChooseTigers.feature.brandEnhancement": "Enhance Your Brand Image",
    "whyChooseTigers.feature.brandEnhancementDesc":
      "When using PowerDMARC, you not only eliminate email spoofing but can also use detailed reports to instantly adjust your content strategy. Leave nothing to chance.",
    "whyChooseTigers.feature.emailDelivery": "Improve Email Deliverability",
    "whyChooseTigers.feature.emailDeliveryDesc":
      "Implementing PowerDMARC proves to receiving servers that you are committed to improving email security, increasing the likelihood of your emails reaching targeted inboxes.",
    "whyChooseTigers.feature.emailBlockingAlt": "Email Security Icon",
    "whyChooseTigers.feature.realTimeMonitoringAlt":
      "Real-Time Monitoring Icon",
    "whyChooseTigers.feature.brandEnhancementAlt": "Brand Enhancement Icon",
    "whyChooseTigers.feature.emailDeliveryAlt": "Email Delivery Icon",
    "serverManagement.title": "Server Management",
    "serverManagement.description": "Let us manage all your servers for you!",
    "serverManagement.signUpNow": "Sign Up Now!",
    "pricingSection.choosePlan": "Choose a Plan",
    "pricingSection.planName": "Opelionz Native",
    "pricingSection.pricePeriod": "LYD/Quarterly",
    "pricingSection.orderNow": "Order Now",
    "pricingSection.comparePackages": "Compare Packages",
    "pricingSection.feature.nvmeStorage": "60GB NVMe Storage",
    "pricingSection.feature.websites": "15 Website(s)",
    "pricingSection.feature.ram": "4 RAM",
    "pricingSection.feature.cpu": "3 CPU",
    "pricingSection.feature.cpanel": "cPanel Control Panel",
    "pricingSection.feature.subdomains": "Unlimited Subdomains",
    "pricingSection.feature.databases": "Unlimited MySQL & SQL Databases",
    "pricingSection.feature.email": "Unlimited Email Accounts",
    "pricingSection.feature.ftp": "Unlimited FTP Accounts",
    "pricingSection.feature.oneClickInstaller":
      "Supports One-Click App Installer",
    "pricingSection.rightBlocksAlt": "Right Decorative Blocks with Icons",
    "pricingSection.leftBlocksAlt": "Left Decorative Blocks with Icons",
    "goFast.title": "Launch Fast and Grow Your Business",
    "goFast.cdnPerformance": "Improve Website Performance via CDN",
    "goFast.cdnPerformanceDesc":
      "Our CDN improves page load speed and reduces server load by 80% on average to enhance your website's performance.",
    "goFast.ddosMitigation": "DDoS Attack Mitigation",
    "goFast.ddosMitigationDesc":
      "Distributed Denial of Service (DDoS) attacks can completely disrupt your business. We block DDoS attacks on layers 3, 4, and 7, securing bandwidth during attacks.",
    "goFast.securityProtection": "Protection Against Hacking and Malware",
    "goFast.securityProtectionDesc":
      "Protect your website from malware, prevent hacking attempts, zero-day attacks, and brute force password guessing attacks.",
    "goFast.cdnIconAlt": "Improve Website Performance Icon",
    "goFast.ddosIconAlt": "DDoS Protection Icon",
    "goFast.malwareIconAlt": "Malware Protection Icon",
    "systemSucuri.title": "Sucuri Provides Cross-Platform Support",
    "systemSucuri.description":
      "Sucuri's website firewall works across all platforms, including today's most popular brands.",
    "systemSucuri.platform.phpbb": "Phpbb",
    "systemSucuri.platform.joomla": "Joomla",
    "systemSucuri.platform.drupal": "Drupal",
    "systemSucuri.platform.magento": "Magento",
    "systemSucuri.platform.wordpress": "WordPress",
    "systemSucuri.platform.phpbbAlt": "Phpbb Logo",
    "systemSucuri.platform.joomlaAlt": "Joomla Logo",
    "systemSucuri.platform.drupalAlt": "Drupal Logo",
    "systemSucuri.platform.magentoAlt": "Magento Logo",
    "systemSucuri.platform.wordpressAlt": "WordPress Logo",
    "featuresSectionFour.title": "Key Features",
    "featuresSectionFour.description":
      "Own your dedicated server with your preferred operating system and pre-installed applications.",
    "featuresSectionFour.feature.crossPlatform":
      "Works Across Multiple Platforms",
    "featuresSectionFour.feature.ddosMitigation": "DDoS Attack Mitigation",
    "featuresSectionFour.feature.malwareRemoval":
      "Malware Detection and Removal",
    "featuresSectionFour.feature.sslCertificate": "SSL Security Certificate",
    "featuresSectionFour.feature.securityMonitoring": "Security Monitoring",
    "featuresSectionFour.feature.performanceOptimization":
      "Performance Optimization",
    "featuresSectionFour.feature.crossPlatformAlt":
      "Works Across Multiple Platforms",
    "featuresSectionFour.feature.ddosMitigationAlt": "DDoS Attack Mitigation",
    "featuresSectionFour.feature.malwareRemovalAlt":
      "Malware Detection and Removal",
    "featuresSectionFour.feature.sslCertificateAlt": "SSL Security Certificate",
    "featuresSectionFour.feature.securityMonitoringAlt": "Security Monitoring",
    "featuresSectionFour.feature.performanceOptimizationAlt":
      "Performance Optimization",
    "questions.faq": "Frequently Asked Questions",
    "questions.helpCenter": "Help Center",
    "questions.faqAlt": "FAQ",
    "questions.helpCenterAlt": "Help Center",
    "questions.vpsDefinition": "What is a Dedicated Virtual Server (VPS)?",
    "questions.vpsDefinitionDesc":
      "A virtual server is a server divided into completely separate hosting environments. When you have VPS hosting, one of those environments is dedicated entirely to you. This means you don’t have to share resources (like RAM or CPU) with other clients and are less likely to be affected by their behavior.",
    "questions.vpsVsShared":
      "When should I use VPS hosting instead of shared hosting?",
    "questions.vpsVsSharedDesc":
      "A Virtual Private Server is ideal for users seeking more control over their hosting environment. So, if your website traffic increases or you have multiple sites and need additional resources to run them efficiently, a VPS offers more flexibility and control to optimize performance and scale resources like RAM and disk space without paying for more than you need.",
    "questions.vpsVsDedicated":
      "What is the difference between a virtual server and a dedicated server?",
    "questions.vpsVsDedicatedDesc":
      "A virtual server differs from a dedicated server in terms of the number of users who have resources on a physical server. With a VPS, some resources are allocated to specific users, but multiple users exist on the same physical server. With a dedicated server, a single user has full access to all the resources of the physical server.",
    "questions.vpsLocations":
      "What are the available locations for VPS hosting?",
    "questions.vpsLocationsDesc":
      "With Libyan Spider, you can choose the server location: Germany, Finland",
    "ourEdge.title": "What Sets Us Apart",
    "ourEdge.cdnPerformance": "Improve Site Performance via CDN",
    "ourEdge.cdnPerformanceDesc":
      "Our Content Delivery Network (CDN) improves page load speed and reduces server loads by 80% on average to enhance your site's performance.",
    "ourEdge.ddosMitigation": "DDoS Attack Mitigation",
    "ourEdge.ddosMitigationDesc":
      "Distributed Denial of Service (DDoS) attacks can completely halt your business. We block DDoS attacks on layers 3, 4, and 7, securing bandwidth during attacks.",
    "ourEdge.securityProtection": "Protection Against Hacking and Malware",
    "ourEdge.securityProtectionDesc":
      "Protect your site from malware, prevent hacking attempts, Zero-Day exploit attacks, and Brute Force password guessing attacks.",
    "ourEdge.performanceAlt": "Performance",
    "ourEdge.ddosProtectionAlt": "DDoS Protection",
    "ourEdge.securityAlt": "Security",
    "ourEdge.visitorsAlt": "Visitors",
    "ourEdge.easeOfUseAlt": "Ease of Use",
    "ourEdge.growthAlt": "Growth",
    "hostingPlans.choosePlan": "Choose the Right Plan",
    "hostingPlans.planName": "Opelionz Native",
    "hostingPlans.pricePeriod": "LYD/Quarterly",
    "hostingPlans.vCPU": "vCPU",
    "hostingPlans.memory": "Memory",
    "hostingPlans.ssdStorage": "SSD Storage",
    "hostingPlans.orderNow": "Order Now",
    "hostingPlans.virtualServersTitle": "Virtual Servers with Real Power",
    "hostingPlans.virtualServersDescription":
      "Virtual cloud servers provide the full power of dedicated resources to expand your hosting capabilities and enhance your site's stability with advanced features.",
    "hostingPlans.highPerformance": "High-Performance Hardware",
    "hostingPlans.enterpriseReliability": "Enterprise-Level Reliability",
    "hostingPlans.uptimeGuarantee": "99.9% Uptime Guarantee",
    "hostingPlans.nvmeSsd": "High-Speed NVMe SSD Drives",
    "featuresSection.mainFeatures": "Key Features",
    "featuresSection.description":
      "Own your dedicated server with your preferred operating system and pre-installed applications.",
    "featuresSection.backgroundDecorationAlt": "Background Decoration",
    "featuresSection.sucuriAlt": "Sucuri Security",
    "featuresSection.softaculousAlt": "Softaculous",
    "featuresSection.linuxAlt": "Linux OS",
    "featuresSection.cpanelAlt": "cPanel",
    "featuresSection.pleskAlt": "Plesk",
    "featuresSection.acronisAlt": "Acronis",
    "featuresSection.microsoftAlt": "Microsoft",
    "featuresSection.cloudLinuxAlt": "CloudLinux",
    "featuresSection.ispManagerAlt": "ISP Manager",
    "worldDaljm.multiRegionSupport": "Flexible Multi-Region Support",
    "worldDaljm.description":
      "Run and migrate applications across multiple device regions through a single user-friendly interface, bringing them closer to your customers.",
    "worldDaljm.worldIllustrationAlt": "3D World Illustration with Platforms",
    "trustCustomer.trustedBy": "Trusted by Our Customers",
    "trustCustomer.docCenter": "Documentation Center",
    "trustCustomer.financialCommittee": "Financial Releases Committee",
    "trustCustomer.socialSecurity": "Social Security Fund",
    "trustCustomer.commercialRegistry": "Commercial Registry",
    "trustCustomer.zatAlSawari": "Zat Al Sawari Pharmacy",
    "trustCustomer.docCenterAlt": "Documentation Center",
    "trustCustomer.financialCommitteeAlt": "Financial Releases Committee",
    "trustCustomer.socialSecurityAlt": "Social Security Fund",
    "trustCustomer.commercialRegistryAlt": "Commercial Registry",
    "trustCustomer.zatAlSawariAlt": "Zat Al Sawari Pharmacy",
    "header.phone": "+880181239633",
    "header.email": "info@doorsoft.co",
    "header.login": "Login",
    "header.register": "Register",
    "header.language": "English",
    "bouquets.choosePlan": "Choose a Plan",
    "bouquets.native": "Obillions Native",
    "bouquets.quarterly": "SAR/Quarterly",
    "bouquets.orderNow": "Order Now",
    "bouquets.comparePackages": "Compare Packages",
    "bouquets.nvmeStorage": "NVMe Storage",
    "bouquets.websites": "Website(s)",
    "bouquets.ram": "RAM",
    "bouquets.cpu": "CPU",
    "bouquets.controlPanel": "cPanel Control Panel",
    "bouquets.subdomains": "Unlimited Subdomains",
    "bouquets.mysqlDatabases": "Unlimited MySQL & SQL Databases",
    "bouquets.emailAccount": "Unlimited Email Account",
    "bouquets.ftpAccounts": "Unlimited FTP Accounts",
    "bouquets.oneClickInstaller": "Supports one-click app installer",
    "nav.home": "Home",
    "nav.hosting": "Hosting",
    "nav.reseller": "Reseller Hosting",
    "nav.servers": "Servers",
    "nav.domains": "Domains",
    "nav.company": "Company",
    "nav.technology": "Technology",
    "hero.serverHosting": "Server Hosting",
    "hero.descriptionText":
      "Title description title description title description",
    "hero.startNow": "Start Now!",

    "hero.title": "Perfect",
    "hero.subtitle": "Web Hosting Solutions",
    "hero.description":
      "Nimor Company is a leading company in web hosting and domain registration",
    "hero.search": "Search",
    "hero.searchPlaceholder": "Search for a new domain",

    "hosting.shared": "Shared Hosting",
    "hosting.shared.desc":
      "Reliable and cost-effective hosting for small businesses and personal websites",
    "hosting.cloud": "Cloud Hosting",
    "hosting.cloud.desc":
      "Scalable hosting solutions that grow with your business needs",
    "hosting.wordpress": "WordPress Hosting",
    "hosting.wordpress.desc":
      "Optimized hosting environment tailored for WordPress websites",
    "hosting.softaculous": "Softaculous Hosting",
    "hosting.softaculous.desc":
      "One-click installs for over 400 applications using Softaculous",
    "hosting.email": "Email Hosting",
    "hosting.email.desc":
      "Reliable email hosting with custom domains for professional communication",
    "hosting.business": "Business Hosting",
    "hosting.business.desc":
      "Professional-grade hosting for growing businesses with high performance",
    "hosting.developer": "Developer Hosting",
    "hosting.developer.desc":
      "Advanced hosting solutions with tools and features for developers",
    "hosting.tamoor": "Tamoor Cloud",
    "hosting.tamoor.desc":
      "Secure and high-performance cloud hosting for enterprise applications",

    "reseller.basic": "Basic Reseller",
    "reseller.basic.desc":
      "Basic hosting plan for resellers to start their clients",
    "reseller.plus": "Reseller Plus",
    "reseller.plus.desc": "Enhanced features for growing reseller networks",
    "reseller.ultra": "Reseller Ultra",
    "reseller.ultra.desc":
      "Premium hosting for large-scale reseller operations",
    "reseller.program": "Reseller Program",
    "reseller.program.desc": "Join our reseller program and start earning",

    "servicesCards.dedicatedServers.title": "Dedicated Servers",
    "servicesCards.dedicatedServers.desc":
      "Host your website easily, comfortably and at economical costs!",
    "servicesCards.sharedCloudHosting.title": "Shared Cloud Hosting",
    "servicesCards.sharedCloudHosting.desc":
      "Host your website easily, comfortably and at economical costs!",
    "servicesCards.webHosting.title": "Web Hosting",
    "servicesCards.webHosting.desc":
      "Host your website easily, comfortably and at economical costs!",
    "servicesCards.controlPanelLicense.title": "Control Panel License",
    "servicesCards.controlPanelLicense.desc":
      "Host your website easily, comfortably and at economical costs!",
    "servicesCards.domains.title": "Domains",
    "servicesCards.domains.desc":
      "Host your website easily, comfortably and at economical costs!",
    "servicesCards.vps.title": "Virtual Private Server",
    "servicesCards.vps.desc":
      "Host your website easily, comfortably and at economical costs!",
    "servicesCards.startingPrice": "Starting from 45 SAR / monthly",

    "servers.vps": "VPS Servers",
    "servers.vps.desc":
      "Private virtual servers with dedicated resources for your projects",
    "servers.cloud": "Cloud Servers",
    "servers.cloud.desc":
      "Flexible and scalable cloud servers for any type of business",
    "servers.dedicated": "Dedicated Servers",
    "servers.dedicated.desc":
      "Dedicated servers with full control over your environment",
    "servers.licenses": "Server Licenses",
    "servers.licenses.desc":
      "Get the necessary licenses for your server software",
    "servers.support": "Server Technical Support",
    "servers.support.desc":
      "Get expert support for server maintenance and management",
    "servers.backup": "Backups",
    "servers.backup.desc": "Secure your data with automatic backup services",

    "domains.register": "Domain Registration",
    "domains.register.desc":
      "Register new domains or transfer your existing domains easily",
    "domains.local": "Local Domains",
    "domains.local.desc":
      "Get local domain extensions for your region or country",
    "domains.transfer": "Domain Transfer",
    "domains.transfer.desc": "Transfer domains seamlessly from other providers",
    "domains.cloudflare": "Cloudflare",
    "domains.cloudflare.desc":
      "Improve your website's security and performance using Cloudflare",
    "domains.ssl": "SSL Security Certificates",
    "domains.ssl.desc":
      "Ensure secure communications for your website using SSL certificates",
    "domains.whois": "WHOIS",
    "domains.whois.desc":
      "Search for domain information and check availability",

    "company.about": "About Us",
    "company.about.desc": "Learn more about our company, values, and mission",
    "company.contact": "Contact Us",
    "company.contact.desc":
      "Get in touch with our team for any inquiries or support",
    "company.jobs": "Jobs",
    "company.jobs.desc":
      "Join our team and help us shape the future of hosting",
    "company.news": "Media & News Center",
    "company.news.desc":
      "Stay updated with the latest company news and media announcements",
    "company.reseller": "Reseller Program",
    "company.reseller.desc":
      "Become a reseller and start your business with us",
    "company.payment": "Payment Methods",
    "company.payment.desc":
      "Discover all available payment options for our services",

    "tech.security": "Security",
    "tech.security.desc":
      "Advanced security features to protect your data and websites from all potential threats",
    "tech.speed": "Speed",
    "tech.speed.desc":
      "Optimized hosting solutions to ensure the fastest possible loading times for your website",
    "tech.control": "Control Panel",
    "tech.control.desc":
      "Easily manage your hosting services using our interactive control panel",
    "tech.datacenter": "Data Centers",
    "tech.datacenter.desc":
      "Discover our modern data centers for first-class infrastructure",
    "tech.status": "Server Status",
    "tech.status.desc":
      "Check the current status and uptime of all our servers in real-time",
    "tech.backup": "Backups",
    "tech.backup.desc":
      "Ensure your data is always safe through advanced backup services",

    "services.title": "Great Services That Meet Your Business Needs",
    "services.description":
      "With our cloud products and services, you will find that we meet 100% of your business and data needs, with superior security for your infrastructure.",
    "services.cloudHosting": "Shared Cloud Hosting",
    "services.lsSuite": "LS Suite",
    "services.jpaas": "JPaaS Platform as a Service",
    "services.learnMore": "Learn More",

    "payment.title": "Payment Methods",
    "payment.description":
      "Pay using Fawry or more than 20 other payment methods",

    "servers.title": "Server Locations",

    "partners.title": "Our Partners",
    "partners.description":
      "We focus on our partnerships with integration leaders to provide secure and reliable hosting solutions that support our clients' business growth and help them achieve their goals in the digital world.",

    "dashboard.title": "Comprehensive Control Panel",
    "dashboard.subtitle": "Subscriber Services Panel",
    "dashboard.description":
      "A fully managed, responsive and user-friendly control panel to manage all your cloud services.",

    "footer.rights": "All rights reserved to Nimor Al-Jariya Company @",
    "footer.services": "Other Services",
    "footer.contact": "Contact Us",
    "footer.domain": "Register New Domain",
    "footer.transfer": "Transfer Domain to Us",
    "footer.affiliate": "Affiliate Marketing",
    "footer.terms": "Terms of Service",

    "customer.helpCenter": "Help Center",
    "customer.jobs": "Jobs",
    "customer.subscriberServices": "Subscriber Services",
    "customer.dataCenters": "Data Centers",
    "customer.testimonial":
      "Your team's professionalism, dedication, and attention to detail have been evident throughout the entire process of developing the ISOC Libya website. We are thoroughly impressed with the final product. It is both user-friendly and aesthetically pleasing, embodying the spirit and vision of ISOC Libya perfectly. We are genuinely happy with the results and the positive feedback we have already started receiving.",
    "customer.customerName": "Amged-B. Shwehdy",
    "customer.customerTitle": "ISOC Libya Website",
    "dashboard.easyManagement": "Easy Management",
    "dashboard.easyManagement.desc":
      "Complete management and comprehensive overview of all your services in one place.",
    "dashboard.oneClick": "One-click Away Functionality",
    "dashboard.oneClick.desc":
      "Deploy, install and manage with a few clicks and in simple steps.",
    "dashboard.multiplePayment": "Multiple Payment Methods",
    "dashboard.multiplePayment.desc":
      "Pay your services' invoices online via multiple payment methods.",
    "dashboard.mainDashboard": "Main Dashboard",
    "dashboard.servicesManagement": "Services Management",
    "dashboard.checkoutProcess": "Checkout Process",
    "footer.socialMedia":
      "Stay updated with our latest news and special offers by following us on various social media channels.",
    "partners.linode.desc":
      "It is the world's largest independent open cloud services provider with 11 global data centers serving nearly one million customers and companies worldwide.",
    "partners.cpanel.desc":
      "cPanel has been trusted by millions of users worldwide for over 20 years, and remains the leading platform in hosting automation.",
    "partners.cloudlinux.desc":
      "CloudLinux OS is the leading multi-tenant platform. It improves server stability, density, and security by isolating each tenant.",
    "testimonials.1.text":
      "Excellent service and professional team providing innovative and effective solutions. Amazing experience that exceeded all my expectations and I highly recommend it to anyone looking for quality and professionalism.",
    "testimonials.1.name": "Mohammed Ahmed",
    "testimonials.1.title": "General Manager",
    "testimonials.2.text":
      "Technical support is excellent and solutions are effective, they responded to all my inquiries quickly and with high efficiency. Professional and cooperative team that deserves all appreciation and praise.",
    "testimonials.2.name": "Fatima Ali",
    "testimonials.2.title": "Technical Manager",
    "testimonials.3.text":
      "Speed in execution and high quality in all services provided. Products are of excellent quality and delivery was exactly on time as promised.",
    "testimonials.3.name": "Ahmed Hassan",
    "testimonials.3.title": "Senior Developer",
    "testimonials.4.text":
      "Amazing experience and innovative solutions that perfectly meet all our needs. I felt honesty and responsibility in dealing with the professional and distinguished work team.",
    "testimonials.4.name": "Sara Mahmoud",
    "testimonials.4.title": "Project Manager",

    "serverLocations.title": "Server Locations",
    "serverLocations.uae": "United Arab Emirates",
    "serverLocations.germany": "Germany",
    "serverLocations.finland": "Finland",
    "serverLocations.korea": "Korea",
    "serverLocations.italy": "Italy",
    "serverLocations.saudi": "Saudi Arabia",
    "serverLocations.sudan": "Sudan",
    "serverLocations.turkey": "Turkey",
    "serverLocations.britain": "Britain",
    "serverLocations.america": "America",

    "servicesSection.title": "Our Services",
    "servicesSection.subtitle": "Discover the Services Offered to You",
    "servicesSection.dedicatedServers": "Dedicated Servers",
    "servicesSection.sharedCloudHosting": "Shared Cloud Hosting",
    "servicesSection.webHosting": "Web Hosting",
    "servicesSection.controlPanelLicense": "Control Panel License",
    "servicesSection.domains": "Domains",
    "servicesSection.vps": "Virtual Private Server",
    "servicesSection.description":
      "Host your website easily, comfortably and at economical costs!",
    "servicesSection.startingFrom": "Starting from 45 SAR / monthly",

    "cloudServices.title": "Great Services That Meet Your Business Needs",
    "cloudServices.description":
      "With our cloud products and services, you will find that we meet 100% of your business and data needs, with superior security for your infrastructure.",
    "cloudServices.designDevelopment": "Design & Development",
    "cloudServices.domains": "Domains",
    "cloudServices.cloudServices": "Cloud Services",
    "cloudServices.sharedCloudHosting": "Shared Cloud Hosting",
    "cloudServices.sharedCloudHosting.desc":
      "Host your website easily and comfortably at economical cost! With shared cloud hosting.",
    "cloudServices.lsSuite": "LS Suite",
    "cloudServices.lsSuite.desc":
      "Professional email, online storage, corporate meetings, and more. Built for business.",
    "cloudServices.jpaas": "JPaaS Platform as a Service",
    "cloudServices.jpaas.desc": "Server management with full control",
    "cloudServices.learnMore": "Learn More",
    "footer.privacyPolicy": "Privacy Policy and User Agreement",
    "footer.company": "Company",
    "footer.aboutUs": "About Us",
    "footer.jobs": "Jobs",
    "footer.contactUs": "Contact Us",
    "footer.mediaCenter": "Media & News Center",
    "footer.servicesTitle": "Services",
    "footer.hosting": "Hosting",
    "footer.domains": "Domains",
    "footer.vps": "Virtual Private Server",
    "footer.serverSupport": "Server Technical Support",
    "footer.whois": "whois",
    "footer.technology": "Technology",
    "footer.speed": "Speed",
    "footer.security": "Security",
    "footer.controlPanel": "Control Panel",
    "footer.backups": "Backups",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy",
    "footer.paymentMethods": "Payment Methods",
    "footer.sslCertificates": "SSL Security Certificates",
    "footer.partners": "Our Partners",
  },

  french: {
    "sharedHosting.title": "Hébergement partagé",
"sharedHosting.description": "Serveurs cloud haute performance et stables à 100 % avec plusieurs emplacements géographiques",
"sharedHosting.startNow": "Commencez maintenant !",
"smallContent.feature.backupRecovery": "Sauvegarde et récupération pour les environnements physiques, virtuels et cloud.",
"smallContent.feature.malwareProtection": "Protection contre les malwares et anti-rançongiciels.",
"smallContent.feature.deviceProtection": "Protection et gestion des appareils terminaux.",
"smallContent.feature.threatDetection": "Détection et réponse aux menaces avancées.",
"smallContent.feature.emailProtection": "Protection et archivage des e-mails.",
"smallContent.feature.disasterRecovery": "Récupération après sinistre basée sur le cloud.",
"smallContent.feature.centralManagement": "Gestion et surveillance centralisées.",
"smallContent.checkIconAlt": "Icône de vérification",
    "payment.titletwo":
      "Aucun frais caché, l'abonnement est renouvelé au même prix.",
    "nistCompliance.title": "Conforme au cadre NIST",
    "nistCompliance.description":
      "Acronis est conforme au cadre du National Institute of Standards and Technology (NIST), qui comprend cinq principes pour protéger votre entreprise :",
    "nistCompliance.principle.identify": "Identifier",
    "nistCompliance.principle.identifyDesc":
      "Identifier les vulnérabilités de sécurité dans votre infrastructure informatique et effectuer une découverte automatique des appareils sur votre réseau",
    "nistCompliance.principle.protect": "Protéger",
    "nistCompliance.principle.protectDesc":
      "En utilisant les meilleures pratiques en matière de sécurité, de gestion, de mises à jour logicielles, et plus encore",
    "nistCompliance.principle.verify": "Vérifier",
    "nistCompliance.principle.verifyDesc":
      "Vérifier les menaces et fournir des défenses robustes contre les malwares/ransomwares",
    "nistCompliance.principle.recover": "Récupérer",
    "nistCompliance.principle.recoverDesc":
      "Nous pouvons rapidement traiter et récupérer les données et systèmes perdus à distance tout en vérifiant la cause du problème",
    "cta.title": "Besoin de licences pour faire fonctionner votre serveur ?",
    "cta.description": "Nous les fournissons au coût le plus bas",
    "cta.orderNow": "Commandez maintenant !",
    "cta.sectionBlockRightAlt": "Bloc décoratif droit",
    "cta.sectionBlockLeftAlt": "Bloc décoratif gauche",
    "featuresSectionThree.title": "Fonctionnalités",
    "featuresSectionThree.description":
      "Fonctionnalités principales dans tous nos plans",
    "featuresSectionThree.feature.windowsLinuxSupport":
      "Support Windows et Linux",
    "featuresSectionThree.feature.ddosProtection": "Protection DDoS",
    "featuresSectionThree.feature.sslTlsCertificate": "Certificat SSL/TLS",
    "featuresSectionThree.feature.backupPlans": "Plans de sauvegarde",
    "featuresSectionThree.feature.globalDataCenters":
      "Centres de données mondiaux",
    "featuresSectionThree.feature.dedicatedIp": "Adresses IP dédiées",
    "featuresSectionThree.feature.network10Gbit": "Réseau 10Gbit abondant",
    "featuresSectionThree.feature.windowsServerSupport":
      "Support Windows Server 2019/2022",
    "featuresSectionThree.feature.windowsLinuxSupportAlt":
      "Icône de support Windows et Linux",
    "featuresSectionThree.feature.ddosProtectionAlt":
      "Icône de protection DDoS",
    "featuresSectionThree.feature.sslTlsCertificateAlt":
      "Icône de certificat SSL/TLS",
    "featuresSectionThree.feature.backupPlansAlt":
      "Icône de plans de sauvegarde",
    "featuresSectionThree.feature.globalDataCentersAlt":
      "Icône de centres de données mondiaux",
    "featuresSectionThree.feature.dedicatedIpAlt":
      "Icône d'adresses IP dédiées",
    "featuresSectionThree.feature.network10GbitAlt":
      "Icône de réseau 10Gbit abondant",
    "featuresSectionThree.feature.windowsServerSupportAlt":
      "Icône de support Windows Server 2019/2022",
    "featuresSectionThree.rightImageAlt": "Image décorative droite",
    "featuresSectionThree.leftImageAlt": "Image décorative gauche",
    "featuresSectionSix.title": "Fonctionnalités principales",
    "featuresSectionSix.description":
      "Possédez votre serveur dédié avec votre système d'exploitation préféré et des applications préinstallées.",
    "featuresSectionSix.feature.crossPlatform":
      "Fonctionne sur plusieurs plateformes",
    "featuresSectionSix.feature.ddosMitigation":
      "Atténuation des attaques DDoS",
    "featuresSectionSix.feature.malwareDetection":
      "Détection et suppression des malwares",
    "featuresSectionSix.feature.sslCertificate": "Certificat de sécurité SSL",
    "featuresSectionSix.feature.securityMonitoring":
      "Surveillance de la sécurité",
    "featuresSectionSix.feature.performanceOptimization":
      "Optimisation des performances",
    "featuresSectionSix.feature.crossPlatformAlt": "Icône multiplateforme",
    "featuresSectionSix.feature.ddosMitigationAlt":
      "Icône d'atténuation des attaques DDoS",
    "featuresSectionSix.feature.malwareDetectionAlt":
      "Icône de détection et suppression des malwares",
    "featuresSectionSix.feature.sslCertificateAlt":
      "Icône de certificat de sécurité SSL",
    "featuresSectionSix.feature.securityMonitoringAlt":
      "Icône de surveillance de la sécurité",
    "featuresSectionSix.feature.performanceOptimizationAlt":
      "Icône d'optimisation des performances",
    "cloudHosting.title": "Hébergement cloud",
    "cloudHosting.description":
      "Serveurs cloud haute performance et stables à 100 % avec plusieurs emplacements géographiques",
    "cloudHosting.startNow": "Commencez maintenant !",
    "dedicatedServerPricing.title":
      "Plans et tarifs d'hébergement de serveurs dédiés",
    "dedicatedServerPricing.serverInfo.title": "INTEL SILVER 7402P",
    "dedicatedServerPricing.serverInfo.subtitle": "INTEL SILVER 7402P",
    "dedicatedServerPricing.pricing.renewal":
      "40 $ par mois lors du renouvellement",
    "dedicatedServerPricing.pricing.buyNow": "Achetez maintenant !",
    "dedicatedServerPricing.pricing.features": "Fonctionnalités",
    "dedicatedServerPricing.specs.cpu": "26 cœurs @ 2,1 GHz",
    "dedicatedServerPricing.specs.cpuSubtitle": "Benchmark 15,390",
    "dedicatedServerPricing.specs.storage": "2x 250 Go SSD",
    "dedicatedServerPricing.specs.storageSubtitle": "jusqu'à 8 disques",
    "dedicatedServerPricing.specs.database": "1",
    "dedicatedServerPricing.specs.databaseSubtitle": "jusqu'à 3",
    "dedicatedServerPricing.specs.ram": "64 Go",
    "dedicatedServerPricing.specs.ramSubtitle": "jusqu'à 384 Go",
    "dedicatedServerPricing.specs.bandwidth": "3 Gbps",
    "dedicatedServerPricing.specs.bandwidthSubtitle":
      "100 To/mois de trafic gratuit",
    "dedicatedServerPricing.specs.controlPanel": "cPanel/WHM, s'il vous plaît",
    "dedicatedServerPricing.specs.controlPanelSubtitle":
      "Édition Obsidian Web Host",
    "dedicatedServerPricing.flags.usaAlt": "Drapeau des États-Unis",
    "dedicatedServerPricing.flags.ukAlt": "Drapeau du Royaume-Uni",
    "dedicatedServerPricing.flags.australiaAlt": "Drapeau de l'Australie",
    "keyFeatures.title": "Fonctionnalités principales",
    "keyFeatures.feature.backupRecovery":
      "Sauvegarde et récupération pour les environnements physiques, virtuels et cloud.",
    "keyFeatures.feature.malwareProtection":
      "Protection contre les malwares et anti-rançongiciels.",
    "keyFeatures.feature.deviceProtection":
      "Protection et gestion des appareils terminaux.",
    "keyFeatures.feature.threatDetection":
      "Détection et réponse aux menaces avancées.",
    "keyFeatures.feature.emailProtection":
      "Protection et archivage des e-mails.",
    "keyFeatures.feature.disasterRecovery":
      "Récupération après sinistre basée sur le cloud.",
    "keyFeatures.feature.centralManagement":
      "Gestion et surveillance centralisées.",

    "serverLicenses.title": "Licences de serveurs",
    "serverLicenses.description":
      "Une licence pour les serveurs privés et entièrement dédiés",
    "serverLicenses.signUpNow": "Inscrivez-vous maintenant !",
    "individualLicenses.title": "Besoin de licences individuelles ?",
    "individualLicenses.description":
      "Obtenez une licence individuelle pour les serveurs privés et entièrement dédiés",
    "individualLicenses.license.cloudLinux": "CloudLinux",
    "individualLicenses.license.whmcs": "WHMCS",
    "individualLicenses.license.kernelCare": "KernelCare",
    "individualLicenses.license.liteSpeed": "LiteSpeed",
    "individualLicenses.license.directAdmin": "DirectAdmin",
    "individualLicenses.license.cPanelWHM": "cPanel/WHM",
    "individualLicenses.license.softaculous": "Softaculous",
    "individualLicenses.license.cloudLinuxPro": "CloudLinux Pro",
    "individualLicenses.license.cloudLinuxAlt": "Logo CloudLinux",
    "individualLicenses.license.whmcsAlt": "Logo WHMCS",
    "individualLicenses.license.kernelCareAlt": "Logo KernelCare",
    "individualLicenses.license.liteSpeedAlt": "Logo LiteSpeed",
    "individualLicenses.license.directAdminAlt": "Logo DirectAdmin",
    "individualLicenses.license.cPanelWHMAlt": "Logo cPanel/WHM",
    "individualLicenses.license.softaculousAlt": "Logo Softaculous",
    "individualLicenses.license.cloudLinuxProAlt": "Logo CloudLinux Pro",
    "individualLicenses.monthly": "Mensuel",
    "featuresSectionFive.title": "Vue d'ensemble complète de votre domaine",
    "featuresSectionFive.description":
      "Obtenez une vue complète de tout ce qui se passe dans votre domaine sur un seul tableau de bord, et plongez dans les détails avec des graphiques interactifs et des outils.",
    "featuresSectionFive.feature.emailOverview": "Aperçu des e-mails sortants",
    "featuresSectionFive.feature.emailOverviewDesc":
      "Visualisez le pourcentage d'e-mails passant par DMARC.",
    "featuresSectionFive.feature.topThreats": "Top 5 des menaces",
    "featuresSectionFive.feature.topThreatsDesc":
      "Visualisez les 5 principales adresses IP représentant les plus grandes menaces potentielles pour votre domaine.",
    "featuresSectionFive.feature.spfDkimCompliance": "Conformité SPF et DKIM",
    "featuresSectionFive.feature.spfDkimComplianceDesc":
      "Pourcentage d'e-mails conformes à SPF et DKIM respectivement.",
    "featuresSectionFive.feature.powerDmarcCompliance":
      "Conformité à la plateforme PowerDMARC",
    "featuresSectionFive.feature.powerDmarcComplianceDesc":
      "Pourcentage d'e-mails envoyés depuis votre domaine conformes à PowerDMARC.",
    "featuresSectionFive.feature.emailOverviewAlt":
      "Icône d'enveloppe d'e-mail",
    "featuresSectionFive.feature.topThreatsAlt":
      "Icône de triangle d'avertissement",
    "featuresSectionFive.feature.spfDkimComplianceAlt":
      "Icône de verrou de sécurité",
    "featuresSectionFive.feature.powerDmarcComplianceAlt":
      "Icône de bouclier de sécurité avec coche",
    "whyChooseTigers.title": "Pourquoi choisir Tigers",
    "whyChooseTigers.feature.emailBlocking":
      "Blocage des e-mails non autorisés",
    "whyChooseTigers.feature.emailBlockingDesc":
      "En utilisant PowerDMARC, vous éliminez non seulement l'usurpation d'e-mails, mais vous pouvez également utiliser des rapports détaillés pour ajuster instantanément votre stratégie de contenu. Ne laissez rien au hasard.",
    "whyChooseTigers.feature.realTimeMonitoring":
      "Surveillance des menaces en temps réel",
    "whyChooseTigers.feature.realTimeMonitoringDesc":
      "Grâce à notre moteur d'IA, vous pouvez suivre les sources malveillantes qui usurpent votre domaine partout dans le monde.",
    "whyChooseTigers.feature.brandEnhancement":
      "Amélioration de l'image de marque",
    "whyChooseTigers.feature.brandEnhancementDesc":
      "En utilisant PowerDMARC, vous éliminez non seulement l'usurpation d'e-mails, mais vous pouvez également utiliser des rapports détaillés pour ajuster instantanément votre stratégie de contenu. Ne laissez rien au hasard.",
    "whyChooseTigers.feature.emailDelivery":
      "Amélioration de la délivrabilité des e-mails",
    "whyChooseTigers.feature.emailDeliveryDesc":
      "La mise en œuvre de PowerDMARC prouve aux serveurs destinataires que vous vous engagez à améliorer la sécurité des e-mails, augmentant ainsi la probabilité que vos e-mails atteignent les boîtes de réception ciblées.",
    "whyChooseTigers.feature.emailBlockingAlt": "Icône de sécurité des e-mails",
    "whyChooseTigers.feature.realTimeMonitoringAlt":
      "Icône de surveillance en temps réel",
    "whyChooseTigers.feature.brandEnhancementAlt":
      "Icône d'amélioration de la marque",
    "whyChooseTigers.feature.emailDeliveryAlt":
      "Icône de délivrabilité des e-mails",
    "serverManagement.title": "Gestion des serveurs",
    "serverManagement.description":
      "Laissez-nous gérer tous vos serveurs pour vous !",
    "serverManagement.signUpNow": "Inscrivez-vous maintenant !",
    "pricingSection.choosePlan": "Choisissez un plan",
    "pricingSection.planName": "Opelionz Natif",
    "pricingSection.pricePeriod": "LYD/Trimestriel",
    "pricingSection.orderNow": "Commandez maintenant",
    "pricingSection.comparePackages": "Comparer les forfaits",
    "pricingSection.feature.nvmeStorage": "60 Go de stockage NVMe",
    "pricingSection.feature.websites": "15 sites web",
    "pricingSection.feature.ram": "4 Go de RAM",
    "pricingSection.feature.cpu": "3 CPU",
    "pricingSection.feature.cpanel": "Panneau de contrôle cPanel",
    "pricingSection.feature.subdomains": "Sous-domaines illimités",
    "pricingSection.feature.databases":
      "Bases de données MySQL et SQL illimitées",
    "pricingSection.feature.email": "Comptes email illimités",
    "pricingSection.feature.ftp": "Comptes FTP illimités",
    "pricingSection.feature.oneClickInstaller":
      "Supporte l'installateur d'applications en un clic",
    "pricingSection.rightBlocksAlt": "Blocs décoratifs droits avec icônes",
    "pricingSection.leftBlocksAlt": "Blocs décoratifs gauches avec icônes",
    "goFast.title": "Lancez rapidement et développez votre entreprise",
    "goFast.cdnPerformance": "Améliorer les performances du site via CDN",
    "goFast.cdnPerformanceDesc":
      "Notre CDN améliore la vitesse de chargement des pages et réduit la charge du serveur de 80 % en moyenne pour optimiser les performances de votre site.",
    "goFast.ddosMitigation": "Atténuation des attaques DDoS",
    "goFast.ddosMitigationDesc":
      "Les attaques par déni de service distribué (DDoS) peuvent complètement perturber votre entreprise. Nous bloquons les attaques DDoS sur les couches 3, 4 et 7, sécurisant la bande passante pendant les attaques.",
    "goFast.securityProtection":
      "Protection contre le piratage et les malwares",
    "goFast.securityProtectionDesc":
      "Protégez votre site contre les malwares, empêchez les tentatives de piratage, les attaques zero-day et les attaques par force brute sur les mots de passe.",
    "goFast.cdnIconAlt": "Icône d'amélioration des performances du site",
    "goFast.ddosIconAlt": "Icône de protection DDoS",
    "goFast.malwareIconAlt": "Icône de protection contre les malwares",
    "systemSucuri.title": "Sucuri offre un support multi-plateforme",
    "systemSucuri.description":
      "Le pare-feu de site web de Sucuri fonctionne sur toutes les plateformes, y compris les marques les plus populaires aujourd'hui.",
    "systemSucuri.platform.phpbb": "Phpbb",
    "systemSucuri.platform.joomla": "Joomla",
    "systemSucuri.platform.drupal": "Drupal",
    "systemSucuri.platform.magento": "Magento",
    "systemSucuri.platform.wordpress": "WordPress",
    "systemSucuri.platform.phpbbAlt": "Logo Phpbb",
    "systemSucuri.platform.joomlaAlt": "Logo Joomla",
    "systemSucuri.platform.drupalAlt": "Logo Drupal",
    "systemSucuri.platform.magentoAlt": "Logo Magento",
    "systemSucuri.platform.wordpressAlt": "Logo WordPress",
    "featuresSectionFour.title": "Caractéristiques principales",
    "featuresSectionFour.description":
      "Possédez votre serveur dédié avec le système d'exploitation de votre choix et des applications préinstallées.",
    "featuresSectionFour.feature.crossPlatform":
      "Fonctionne sur plusieurs plateformes",
    "featuresSectionFour.feature.ddosMitigation":
      "Atténuation des attaques DDoS",
    "featuresSectionFour.feature.malwareRemoval":
      "Détection et suppression des malwares",
    "featuresSectionFour.feature.sslCertificate": "Certificat de sécurité SSL",
    "featuresSectionFour.feature.securityMonitoring":
      "Surveillance de la sécurité",
    "featuresSectionFour.feature.performanceOptimization":
      "Optimisation des performances",
    "featuresSectionFour.feature.crossPlatformAlt":
      "Fonctionne sur plusieurs plateformes",
    "featuresSectionFour.feature.ddosMitigationAlt":
      "Atténuation des attaques DDoS",
    "featuresSectionFour.feature.malwareRemovalAlt":
      "Détection et suppression des malwares",
    "featuresSectionFour.feature.sslCertificateAlt":
      "Certificat de sécurité SSL",
    "featuresSectionFour.feature.securityMonitoringAlt":
      "Surveillance de la sécurité",
    "featuresSectionFour.feature.performanceOptimizationAlt":
      "Optimisation des performances",
    "questions.faq": "Questions fréquemment posées",
    "questions.helpCenter": "Centre d'aide",
    "questions.faqAlt": "FAQ",
    "questions.helpCenterAlt": "Centre d'aide",
    "questions.vpsDefinition": "Qu'est-ce qu'un serveur virtuel dédié (VPS) ?",
    "questions.vpsDefinitionDesc":
      "Un serveur virtuel est un serveur divisé en environnements d'hébergement complètement séparés. Lorsque vous avez un hébergement VPS, l'un de ces environnements vous est entièrement dédié. Cela signifie que vous n'avez pas à partager les ressources (comme la RAM ou le CPU) avec d'autres clients et que vous êtes moins susceptible d'être affecté par leur comportement.",
    "questions.vpsVsShared":
      "Quand dois-je utiliser l'hébergement VPS au lieu de l'hébergement partagé ?",
    "questions.vpsVsSharedDesc":
      "Un serveur privé virtuel est idéal pour les utilisateurs recherchant plus de contrôle sur leur environnement d'hébergement. Ainsi, si le trafic de votre site augmente ou si vous avez plusieurs sites et avez besoin de ressources supplémentaires pour les exécuter efficacement, un VPS offre plus de flexibilité et de contrôle pour optimiser les performances et augmenter les ressources comme la RAM et l'espace disque sans payer plus que nécessaire.",
    "questions.vpsVsDedicated":
      "Quelle est la différence entre un serveur virtuel et un serveur dédié ?",
    "questions.vpsVsDedicatedDesc":
      "Un serveur virtuel diffère d'un serveur dédié en termes de nombre d'utilisateurs ayant des ressources sur un serveur physique. Avec un VPS, certaines ressources sont allouées à des utilisateurs spécifiques, mais plusieurs utilisateurs existent sur le même serveur physique. Avec un serveur dédié, un seul utilisateur a un accès complet à toutes les ressources du serveur physique.",
    "questions.vpsLocations":
      "Quels sont les emplacements disponibles pour l'hébergement VPS ?",
    "questions.vpsLocationsDesc":
      "Avec Libyan Spider, vous pouvez choisir l'emplacement du serveur : Allemagne, Finlande",
    "ourEdge.title": "Ce qui nous distingue",
    "ourEdge.cdnPerformance": "Amélioration des performances du site via CDN",
    "ourEdge.cdnPerformanceDesc":
      "Notre réseau de diffusion de contenu (CDN) améliore la vitesse de chargement des pages et réduit la charge des serveurs de 80 % en moyenne pour optimiser les performances de votre site.",
    "ourEdge.ddosMitigation": "Atténuation des attaques DDoS",
    "ourEdge.ddosMitigationDesc":
      "Les attaques par déni de service distribué (DDoS) peuvent arrêter complètement votre activité. Nous bloquons les attaques DDoS sur les couches 3, 4 et 7, sécurisant la bande passante pendant les attaques.",
    "ourEdge.securityProtection":
      "Protection contre le piratage et les malwares",
    "ourEdge.securityProtectionDesc":
      "Protégez votre site contre les malwares, empêchez les tentatives de piratage, les attaques d'exploitation Zero-Day et les attaques par force brute sur les mots de passe.",
    "ourEdge.performanceAlt": "Performance",
    "ourEdge.ddosProtectionAlt": "Protection DDoS",
    "ourEdge.securityAlt": "Sécurité",
    "ourEdge.visitorsAlt": "Visiteurs",
    "ourEdge.easeOfUseAlt": "Facilité d'utilisation",
    "ourEdge.growthAlt": "Croissance",
    "hostingPlans.choosePlan": "Choisissez le bon plan",
    "hostingPlans.planName": "Opelionz Natif",
    "hostingPlans.pricePeriod": "LYD/Trimestriel",
    "hostingPlans.vCPU": "vCPU",
    "hostingPlans.memory": "Mémoire",
    "hostingPlans.ssdStorage": "Stockage SSD",
    "hostingPlans.orderNow": "Commandez maintenant",
    "hostingPlans.virtualServersTitle":
      "Serveurs virtuels avec une vraie puissance",
    "hostingPlans.virtualServersDescription":
      "Les serveurs cloud virtuels offrent toute la puissance des ressources dédiées pour élargir vos capacités d'hébergement et améliorer la stabilité de votre site avec des fonctionnalités avancées.",
    "hostingPlans.highPerformance": "Matériel haute performance",
    "hostingPlans.enterpriseReliability": "Fiabilité de niveau entreprise",
    "hostingPlans.uptimeGuarantee": "Garantie de disponibilité de 99,9 %",
    "hostingPlans.nvmeSsd": "Disques SSD NVMe à haute vitesse",
    "featuresSection.mainFeatures": "Caractéristiques principales",
    "featuresSection.description":
      "Possédez votre serveur dédié avec le système d'exploitation de votre choix et des applications préinstallées.",
    "featuresSection.backgroundDecorationAlt": "Décoration de fond",
    "featuresSection.sucuriAlt": "Sécurité Sucuri",
    "featuresSection.softaculousAlt": "Softaculous",
    "featuresSection.linuxAlt": "Système d'exploitation Linux",
    "featuresSection.cpanelAlt": "cPanel",
    "featuresSection.pleskAlt": "Plesk",
    "featuresSection.acronisAlt": "Acronis",
    "featuresSection.microsoftAlt": "Microsoft",
    "featuresSection.cloudLinuxAlt": "CloudLinux",
    "featuresSection.ispManagerAlt": "ISP Manager",
    "worldDaljm.multiRegionSupport": "Support multi-régional flexible",
    "worldDaljm.description":
      "Exécutez et migrez des applications entre plusieurs régions de dispositifs via une interface utilisateur unique et conviviale, les rapprochant de vos clients.",
    "worldDaljm.worldIllustrationAlt":
      "Illustration mondiale en 3D avec plateformes",
    "trustCustomer.trustedBy": "Approuvé par nos clients",
    "trustCustomer.docCenter": "Centre de documentation",
    "trustCustomer.financialCommittee": "Comité des libérations financières",
    "trustCustomer.socialSecurity": "Fonds de sécurité sociale",
    "trustCustomer.commercialRegistry": "Registre commercial",
    "trustCustomer.zatAlSawari": "Pharmacie Zat Al Sawari",
    "trustCustomer.docCenterAlt": "Centre de documentation",
    "trustCustomer.financialCommitteeAlt": "Comité des libérations financières",
    "trustCustomer.socialSecurityAlt": "Fonds de sécurité sociale",
    "trustCustomer.commercialRegistryAlt": "Registre commercial",
    "trustCustomer.zatAlSawariAlt": "Pharmacie Zat Al Sawari",

    "header.phone": "+880181239633",
    "header.email": "info@doorsoft.co",
    "header.login": "Connexion",
    "header.register": "S'inscrire",
    "header.language": "Français",
    "footer.privacyPolicy":
      "Politique de Confidentialité et Accord Utilisateur",
    "footer.company": "Entreprise",
    "footer.aboutUs": "À Propos",
    "footer.jobs": "Emplois",
    "footer.contactUs": "Nous Contacter",
    "footer.mediaCenter": "Centre Média & Actualités",
    "footer.servicesTitle": "Services",
    "footer.hosting": "Hébergement",
    "footer.domains": "Domaines",
    "footer.vps": "Serveur Privé Virtuel",
    "footer.serverSupport": "Support Technique Serveur",
    "footer.whois": "WHOIS",
    "footer.technology": "Technologie",
    "footer.speed": "Vitesse",
    "footer.security": "Sécurité",
    "footer.controlPanel": "Panneau de Contrôle",
    "footer.backups": "Sauvegardes",
    "footer.legal": "Légal",
    "footer.privacy": "Confidentialité",
    "footer.paymentMethods": "Méthodes de Paiement",
    "footer.sslCertificates": "Certificats SSL",
    "footer.partners": "Nos Partenaires",
    "hero.serverHosting": "Hébergement de Serveur",
    "hero.descriptionText":
      "Description du titre description du titre description du titre",
    "hero.startNow": "Commencez Maintenant !",
    "bouquets.choosePlan": "Choisir un forfait",
    "bouquets.native": "Obillions Native",
    "bouquets.quarterly": "SAR/Trimestriel",
    "bouquets.orderNow": "Commander maintenant",
    "bouquets.comparePackages": "Comparer les forfaits",
    "bouquets.nvmeStorage": "Stockage NVMe",
    "bouquets.websites": "Site(s) web",
    "bouquets.ram": "RAM",
    "bouquets.cpu": "CPU",
    "bouquets.controlPanel": "Panneau de contrôle cPanel",
    "bouquets.subdomains": "Sous-domaines illimités",
    "bouquets.mysqlDatabases": "Bases de données MySQL & SQL illimitées",
    "bouquets.emailAccount": "Compte de messagerie illimité",
    "bouquets.ftpAccounts": "Comptes FTP illimités",
    "bouquets.oneClickInstaller":
      "Prend en charge l'installateur d'applications en un clic",

    "nav.home": "Accueil",
    "nav.hosting": "Hébergement",
    "nav.reseller": "Hébergement Revendeur",
    "nav.servers": "Serveurs",
    "nav.domains": "Domaines",
    "nav.company": "Entreprise",
    "nav.technology": "Technologie",

    "hero.title": "Solutions",
    "hero.subtitle": "Hébergement Web Parfait",
    "hero.description":
      "Nimor Company est une entreprise leader dans l'hébergement web et l'enregistrement de domaines",
    "hero.search": "Rechercher",
    "hero.searchPlaceholder": "Rechercher un nouveau domaine",

    "hosting.shared": "Hébergement Partagé",
    "hosting.shared.desc":
      "Hébergement fiable et économique pour les petites entreprises et sites personnels",
    "hosting.cloud": "Hébergement Cloud",
    "hosting.cloud.desc":
      "Solutions d'hébergement évolutives qui grandissent avec vos besoins commerciaux",
    "hosting.wordpress": "Hébergement WordPress",
    "hosting.wordpress.desc":
      "Environnement d'hébergement optimisé conçu pour les sites WordPress",
    "hosting.softaculous": "Hébergement Softaculous",
    "hosting.softaculous.desc":
      "Installations en un clic pour plus de 400 applications avec Softaculous",
    "hosting.email": "Hébergement Email",
    "hosting.email.desc":
      "Hébergement email fiable avec domaines personnalisés pour communication professionnelle",
    "hosting.business": "Hébergement Business",
    "hosting.business.desc":
      "Hébergement professionnel pour entreprises en croissance avec haute performance",
    "hosting.developer": "Hébergement Développeur",
    "hosting.developer.desc":
      "Solutions d'hébergement avancées avec outils et fonctionnalités pour développeurs",
    "hosting.tamoor": "Cloud Tamoor",
    "hosting.tamoor.desc":
      "Hébergement cloud sécurisé et haute performance pour applications d'entreprise",

    "reseller.basic": "Revendeur Basique",
    "reseller.basic.desc":
      "Plan d'hébergement de base pour les revendeurs pour commencer leurs clients",
    "reseller.plus": "Revendeur Plus",
    "reseller.plus.desc":
      "Fonctionnalités améliorées pour les réseaux de revendeurs en croissance",
    "reseller.ultra": "Revendeur Ultra",
    "reseller.ultra.desc":
      "Hébergement premium pour les opérations de revendeur à grande échelle",
    "reseller.program": "Programme Revendeur",
    "reseller.program.desc":
      "Rejoignez notre programme de revendeur et commencez à gagner",

    "servicesCards.dedicatedServers.title": "Serveurs Dédiés",
    "servicesCards.dedicatedServers.desc":
      "Hébergez votre site facilement, confortablement et à des coûts économiques!",
    "servicesCards.sharedCloudHosting.title": "Hébergement Cloud Partagé",
    "servicesCards.sharedCloudHosting.desc":
      "Hébergez votre site facilement, confortablement et à des coûts économiques!",
    "servicesCards.webHosting.title": "Hébergement Web",
    "servicesCards.webHosting.desc":
      "Hébergez votre site facilement, confortablement et à des coûts économiques!",
    "servicesCards.controlPanelLicense.title": "Licence Panneau de Contrôle",
    "servicesCards.controlPanelLicense.desc":
      "Hébergez votre site facilement, confortablement et à des coûts économiques!",
    "servicesCards.domains.title": "Domaines",
    "servicesCards.domains.desc":
      "Hébergez votre site facilement, confortablement et à des coûts économiques!",
    "servicesCards.vps.title": "Serveur Privé Virtuel",
    "servicesCards.vps.desc":
      "Hébergez votre site facilement, confortablement et à des coûts économiques!",
    "servicesCards.startingPrice": "À partir de 45 SAR / mensuel",

    "servers.vps": "Serveurs VPS",
    "servers.vps.desc":
      "Serveurs virtuels privés avec ressources dédiées pour vos projets",
    "servers.cloud": "Serveurs Cloud",
    "servers.cloud.desc":
      "Serveurs cloud flexibles et évolutifs pour tout type d'entreprise",
    "servers.dedicated": "Serveurs Dédiés",
    "servers.dedicated.desc":
      "Serveurs dédiés avec contrôle total sur votre environnement",
    "servers.licenses": "Licences Serveur",
    "servers.licenses.desc":
      "Obtenez les licences nécessaires pour votre logiciel serveur",
    "servers.support": "Support Technique Serveur",
    "servers.support.desc":
      "Obtenez un support expert pour la maintenance et gestion des serveurs",
    "servers.backup": "Sauvegardes",
    "servers.backup.desc":
      "Sécurisez vos données avec des services de sauvegarde automatique",

    "domains.register": "Enregistrement Domaine",
    "domains.register.desc":
      "Enregistrez de nouveaux domaines ou transférez vos domaines existants facilement",
    "domains.local": "Domaines Locaux",
    "domains.local.desc":
      "Obtenez des extensions de domaine locales pour votre région ou pays",
    "domains.transfer": "Transfert Domaine",
    "domains.transfer.desc":
      "Transférez des domaines en toute transparence depuis d'autres fournisseurs",
    "domains.cloudflare": "Cloudflare",
    "domains.cloudflare.desc":
      "Améliorez la sécurité et les performances de votre site web avec Cloudflare",
    "domains.ssl": "Certificats SSL",
    "domains.ssl.desc":
      "Assurez des communications sécurisées pour votre site web avec des certificats SSL",
    "domains.whois": "WHOIS",
    "domains.whois.desc":
      "Recherchez des informations de domaine et vérifiez la disponibilité",

    "company.about": "À Propos",
    "company.about.desc":
      "Apprenez-en plus sur notre entreprise, nos valeurs et notre mission",
    "company.contact": "Nous Contacter",
    "company.contact.desc":
      "Contactez notre équipe pour toute demande ou support",
    "company.jobs": "Emplois",
    "company.jobs.desc":
      "Rejoignez notre équipe et aidez-nous à façonner l'avenir de l'hébergement",
    "company.news": "Centre Média & Actualités",
    "company.news.desc":
      "Restez informé des dernières nouvelles de l'entreprise et annonces médias",
    "company.reseller": "Programme Revendeur",
    "company.reseller.desc":
      "Devenez revendeur et démarrez votre entreprise avec nous",
    "company.payment": "Méthodes de Paiement",
    "company.payment.desc":
      "Découvrez toutes les options de paiement disponibles pour nos services",

    "tech.security": "Sécurité",
    "tech.security.desc":
      "Fonctionnalités de sécurité avancées pour protéger vos données et sites web de toutes les menaces potentielles",
    "tech.speed": "Vitesse",
    "tech.speed.desc":
      "Solutions d'hébergement optimisées pour garantir les temps de chargement les plus rapides possibles pour votre site web",
    "tech.control": "Panneau de Contrôle",
    "tech.control.desc":
      "Gérez facilement vos services d'hébergement avec notre panneau de contrôle interactif",
    "tech.datacenter": "Centres de Données",
    "tech.datacenter.desc":
      "Découvrez nos centres de données modernes pour une infrastructure de première classe",
    "tech.status": "État des Serveurs",
    "tech.status.desc":
      "Vérifiez l'état actuel et le temps de fonctionnement de tous nos serveurs en temps réel",
    "tech.backup": "Sauvegardes",
    "tech.backup.desc":
      "Assurez-vous que vos données sont toujours en sécurité grâce à des services de sauvegarde avancés",

    "services.title":
      "Excellents Services Qui Répondent Aux Besoins De Votre Entreprise",
    "services.description":
      "Avec nos produits et services cloud, vous constaterez que nous répondons à 100% des besoins de votre entreprise et de vos données, avec une sécurité supérieure pour votre infrastructure.",
    "services.cloudHosting": "Hébergement Cloud Partagé",
    "services.lsSuite": "Suite LS",
    "services.jpaas": "JPaaS Plateforme en tant que Service",
    "services.learnMore": "En Savoir Plus",

    "payment.title": "Méthodes de Paiement",
    "payment.description":
      "Payez en utilisant Fawry ou plus de 20 autres méthodes de paiement",

    "servers.title": "Emplacements des Serveurs",

    "partners.title": "Nos Partenaires",
    "partners.description":
      "Nous nous concentrons sur nos partenariats avec les leaders de l'intégration pour fournir des solutions d'hébergement sécurisées et fiables qui soutiennent la croissance des entreprises de nos clients.",

    "dashboard.title": "Panneau de Contrôle Complet",
    "dashboard.subtitle": "Panneau des Services Abonnés",
    "dashboard.description":
      "Un panneau de contrôle entièrement géré, réactif et convivial pour gérer tous vos services cloud.",

    "footer.rights": "Tous droits réservés à la société Nimor Al-Jariya @",
    "footer.services": "Autres Services",
    "footer.contact": "Nous Contacter",
    "footer.domain": "Enregistrer Nouveau Domaine",
    "footer.transfer": "Transférer Domaine Vers Nous",
    "footer.affiliate": "Marketing d'Affiliation",
    "footer.terms": "Conditions de Service",

    "customer.helpCenter": "Centre d'Aide",
    "customer.jobs": "Emplois",
    "customer.subscriberServices": "Services Abonnés",
    "customer.dataCenters": "Centres de Données",
    "customer.testimonial":
      "Le professionnalisme, le dévouement et l'attention aux détails de votre équipe ont été évidents tout au long du processus de développement du site web ISOC Libya. Nous sommes très impressionnés par le produit final. Il est à la fois convivial et esthétiquement plaisant, incarnant parfaitement l'esprit et la vision d'ISOC Libya. Nous sommes vraiment satisfaits des résultats et des commentaires positifs que nous avons déjà commencé à recevoir.",
    "customer.customerName": "Amged-B. Shwehdy",
    "customer.customerTitle": "Site Web ISOC Libya",
    "dashboard.easyManagement": "Gestion Facile",
    "dashboard.easyManagement.desc":
      "Gestion complète et vue d'ensemble de tous vos services en un seul endroit.",
    "dashboard.oneClick": "Fonctionnalité en Un Clic",
    "dashboard.oneClick.desc":
      "Déployez, installez et gérez en quelques clics et en étapes simples.",
    "dashboard.multiplePayment": "Méthodes de Paiement Multiples",
    "dashboard.multiplePayment.desc":
      "Payez les factures de vos services en ligne via plusieurs méthodes de paiement.",
    "dashboard.mainDashboard": "Tableau de Bord Principal",
    "dashboard.servicesManagement": "Gestion des Services",
    "dashboard.checkoutProcess": "Processus de Commande",
    "footer.socialMedia":
      "Restez informé de nos dernières nouvelles et offres spéciales en nous suivant sur les différents canaux de médias sociaux.",
    "partners.linode.desc":
      "C'est le plus grand fournisseur indépendant de services cloud ouverts au monde avec 11 centres de données mondiaux desservant près d'un million de clients et d'entreprises dans le monde.",
    "partners.cpanel.desc":
      "cPanel est approuvé par des millions d'utilisateurs dans le monde depuis plus de 20 ans et reste la plateforme leader en automatisation d'hébergement.",
    "partners.cloudlinux.desc":
      "CloudLinux OS est la plateforme multi-locataires leader. Il améliore la stabilité, la densité et la sécurité des serveurs en isolant chaque locataire.",
    "testimonials.1.text":
      "Service excellent et équipe professionnelle offrant des solutions innovantes et efficaces. Expérience incroyable qui a dépassé toutes mes attentes et je la recommande vivement à tous ceux qui recherchent la qualité et le professionnalisme.",
    "testimonials.1.name": "Mohammed Ahmed",
    "testimonials.1.title": "Directeur Général",
    "testimonials.2.text":
      "Le support technique est excellent et les solutions sont efficaces, ils ont répondu à toutes mes questions rapidement et avec une grande efficacité. Équipe professionnelle et coopérative qui mérite toute appréciation et éloge.",
    "testimonials.2.name": "Fatima Ali",
    "testimonials.2.title": "Directrice Technique",
    "testimonials.3.text":
      "Rapidité d'exécution et haute qualité dans tous les services fournis. Les produits sont d'excellente qualité et la livraison était exactement à temps comme promis.",
    "testimonials.3.name": "Ahmed Hassan",
    "testimonials.3.title": "Développeur Senior",
    "testimonials.4.text":
      "Expérience incroyable et solutions innovantes qui répondent parfaitement à tous nos besoins. J'ai ressenti l'honnêteté et la responsabilité dans les relations avec l'équipe de travail professionnelle et distinguée.",
    "testimonials.4.name": "Sara Mahmoud",
    "testimonials.4.title": "Chef de Projet",

    "serverLocations.title": "Emplacements des Serveurs",
    "serverLocations.uae": "Émirats Arabes Unis",
    "serverLocations.germany": "Allemagne",
    "serverLocations.finland": "Finlande",
    "serverLocations.korea": "Corée",
    "serverLocations.italy": "Italie",
    "serverLocations.saudi": "Arabie Saoudite",
    "serverLocations.sudan": "Soudan",
    "serverLocations.turkey": "Turquie",
    "serverLocations.britain": "Grande-Bretagne",
    "serverLocations.america": "Amérique",

    "servicesSection.title": "Nos Services",
    "servicesSection.subtitle": "Découvrez les Services Qui Vous Sont Offerts",
    "servicesSection.dedicatedServers": "Serveurs Dédiés",
    "servicesSection.sharedCloudHosting": "Hébergement Cloud Partagé",
    "servicesSection.webHosting": "Hébergement Web",
    "servicesSection.controlPanelLicense": "Licence Panneau de Contrôle",
    "servicesSection.domains": "Domaines",
    "servicesSection.vps": "Serveur Privé Virtuel",
    "servicesSection.description":
      "Hébergez votre site facilement, confortablement et à des coûts économiques!",
    "servicesSection.startingFrom": "À partir de 45 SAR / mensuel",

    "cloudServices.title":
      "Excellents Services Qui Répondent Aux Besoins De Votre Entreprise",
    "cloudServices.description":
      "Avec nos produits et services cloud, vous constaterez que nous répondons à 100% des besoins de votre entreprise et de vos données, avec une sécurité supérieure pour votre infrastructure.",
    "cloudServices.designDevelopment": "Conception et Développement",
    "cloudServices.domains": "Domaines",
    "cloudServices.cloudServices": "Services Cloud",
    "cloudServices.sharedCloudHosting": "Hébergement Cloud Partagé",
    "cloudServices.sharedCloudHosting.desc":
      "Hébergez votre site facilement et confortablement à un coût économique! Avec l'hébergement cloud partagé.",
    "cloudServices.lsSuite": "Suite LS",
    "cloudServices.lsSuite.desc":
      "Email professionnel, stockage en ligne, réunions d'entreprise, et plus encore. Conçu pour les affaires.",
    "cloudServices.jpaas": "JPaaS Plateforme en tant que Service",
    "cloudServices.jpaas.desc": "Gestion de serveur avec contrôle total",
    "cloudServices.learnMore": "En Savoir Plus",
  },

  german: {
    "sharedHosting.title": "Shared Hosting",
"sharedHosting.description": "Hochleistungs- und 100% stabile Cloud-Server mit mehreren geografischen Standorten",
"sharedHosting.startNow": "Jetzt starten!",
"smallContent.feature.backupRecovery": "Sicherung und Wiederherstellung für physische, virtuelle und Cloud-Umgebungen.",
"smallContent.feature.malwareProtection": "Schutz vor Malware und Anti-Ransomware.",
"smallContent.feature.deviceProtection": "Schutz und Verwaltung von Endgeräten.",
"smallContent.feature.threatDetection": "Erweiterte Bedrohungserkennung und -reaktion.",
"smallContent.feature.emailProtection": "E-Mail-Schutz und Archivierung.",
"smallContent.feature.disasterRecovery": "Cloud-basierte Notfallwiederherstellung.",
"smallContent.feature.centralManagement": "Zentralisierte Verwaltung und Überwachung.",
"smallContent.checkIconAlt": "Häkchen-Symbol",
    "payment.titletwo":
      "Keine versteckten Gebühren, das Abonnement wird zum gleichen Preis verlängert.",
    "nistCompliance.title": "Konform mit dem NIST-Framework",
    "nistCompliance.description":
      "Acronis entspricht dem Rahmenwerk des National Institute of Standards and Technology (NIST), das aus fünf Prinzipien zum Schutz Ihres Unternehmens besteht:",
    "nistCompliance.principle.identify": "Erkennung",
    "nistCompliance.principle.identifyDesc":
      "Erkennung von Sicherheitslücken in Ihrer IT-Infrastruktur und automatische Geräteerkennung in Ihrem Netzwerk",
    "nistCompliance.principle.protect": "Schutz",
    "nistCompliance.principle.protectDesc":
      "Nutzung bewährter Praktiken in den Bereichen Sicherheit, Verwaltung, Software-Updates und mehr",
    "nistCompliance.principle.verify": "Überprüfung",
    "nistCompliance.principle.verifyDesc":
      "Überprüfung von Bedrohungen und Bereitstellung robuster Abwehrmechanismen gegen Malware/Ransomware",
    "nistCompliance.principle.recover": "Wiederherstellung",
    "nistCompliance.principle.recoverDesc":
      "Wir können verlorene Daten und Systeme schnell remote wiederherstellen und die Ursache des Problems überprüfen",
    "cta.title": "Benötigen Sie Lizenzen, um Ihren Server zu betreiben?",
    "cta.description": "Wir bieten sie Ihnen zum niedrigsten Preis",
    "cta.orderNow": "Jetzt bestellen!",
    "cta.sectionBlockRightAlt": "Rechter dekorativer Block",
    "cta.sectionBlockLeftAlt": "Linker dekorativer Block",
    "featuresSectionThree.title": "Funktionen",
    "featuresSectionThree.description":
      "Kernfunktionen in allen unseren Plänen",
    "featuresSectionThree.feature.windowsLinuxSupport":
      "Windows- und Linux-Unterstützung",
    "featuresSectionThree.feature.ddosProtection": "DDoS-Schutz",
    "featuresSectionThree.feature.sslTlsCertificate": "SSL/TLS-Zertifikat",
    "featuresSectionThree.feature.backupPlans": "Backup-Pläne",
    "featuresSectionThree.feature.globalDataCenters": "Globale Rechenzentren",
    "featuresSectionThree.feature.dedicatedIp": "Dedizierte IP-Adressen",
    "featuresSectionThree.feature.network10Gbit": "Reichliches 10Gbit-Netzwerk",
    "featuresSectionThree.feature.windowsServerSupport":
      "Unterstützung für Windows Server 2019/2022",
    "featuresSectionThree.feature.windowsLinuxSupportAlt":
      "Symbol für Windows- und Linux-Unterstützung",
    "featuresSectionThree.feature.ddosProtectionAlt": "Symbol für DDoS-Schutz",
    "featuresSectionThree.feature.sslTlsCertificateAlt":
      "Symbol für SSL/TLS-Zertifikat",
    "featuresSectionThree.feature.backupPlansAlt": "Symbol für Backup-Pläne",
    "featuresSectionThree.feature.globalDataCentersAlt":
      "Symbol für globale Rechenzentren",
    "featuresSectionThree.feature.dedicatedIpAlt":
      "Symbol für dedizierte IP-Adressen",
    "featuresSectionThree.feature.network10GbitAlt":
      "Symbol für reichliches 10Gbit-Netzwerk",
    "featuresSectionThree.feature.windowsServerSupportAlt":
      "Symbol für Unterstützung von Windows Server 2019/2022",
    "featuresSectionThree.rightImageAlt": "Rechtes dekoratives Bild",
    "featuresSectionThree.leftImageAlt": "Linkes dekoratives Bild",

    "featuresSectionSix.title": "Hauptmerkmale",
    "featuresSectionSix.description":
      "Besitzen Sie Ihren dedizierten Server mit Ihrem bevorzugten Betriebssystem und vorinstallierten Anwendungen.",
    "featuresSectionSix.feature.crossPlatform":
      "Funktioniert auf mehreren Plattformen",
    "featuresSectionSix.feature.ddosMitigation": "Abwehr von DDoS-Angriffen",
    "featuresSectionSix.feature.malwareDetection":
      "Erkennung und Entfernung von Malware",
    "featuresSectionSix.feature.sslCertificate": "SSL-Sicherheitszertifikat",
    "featuresSectionSix.feature.securityMonitoring": "Sicherheitsüberwachung",
    "featuresSectionSix.feature.performanceOptimization":
      "Leistungsoptimierung",
    "featuresSectionSix.feature.crossPlatformAlt":
      "Plattformübergreifendes Symbol",
    "featuresSectionSix.feature.ddosMitigationAlt":
      "Symbol für DDoS-Angriffsabwehr",
    "featuresSectionSix.feature.malwareDetectionAlt":
      "Symbol für Malware-Erkennung und -Entfernung",
    "featuresSectionSix.feature.sslCertificateAlt":
      "Symbol für SSL-Sicherheitszertifikat",
    "featuresSectionSix.feature.securityMonitoringAlt":
      "Symbol für Sicherheitsüberwachung",
    "featuresSectionSix.feature.performanceOptimizationAlt":
      "Symbol für Leistungsoptimierung",
    "cloudHosting.title": "Cloud-Hosting",
    "cloudHosting.description":
      "Hochleistungs- und 100% stabile Cloud-Server mit mehreren geografischen Standorten",
    "cloudHosting.startNow": "Jetzt starten!",
    "dedicatedServerPricing.title":
      "Pläne und Preise für dediziertes Server-Hosting",
    "dedicatedServerPricing.serverInfo.title": "INTEL SILVER 7402P",
    "dedicatedServerPricing.serverInfo.subtitle": "INTEL SILVER 7402P",
    "dedicatedServerPricing.pricing.renewal": "40 $ monatlich bei Verlängerung",
    "dedicatedServerPricing.pricing.buyNow": "Jetzt kaufen!",
    "dedicatedServerPricing.pricing.features": "Funktionen",
    "dedicatedServerPricing.specs.cpu": "26 Kerne @ 2,1 GHz",
    "dedicatedServerPricing.specs.cpuSubtitle": "Benchmark 15,390",
    "dedicatedServerPricing.specs.storage": "2x 250GB SSD",
    "dedicatedServerPricing.specs.storageSubtitle": "bis zu 8 Festplatten",
    "dedicatedServerPricing.specs.database": "1",
    "dedicatedServerPricing.specs.databaseSubtitle": "bis zu 3",
    "dedicatedServerPricing.specs.ram": "64GB",
    "dedicatedServerPricing.specs.ramSubtitle": "bis zu 384GB",
    "dedicatedServerPricing.specs.bandwidth": "3Gbps",
    "dedicatedServerPricing.specs.bandwidthSubtitle":
      "100TB/Monat kostenloser Datenverkehr",
    "dedicatedServerPricing.specs.controlPanel": "cPanel/WHM, bitte",
    "dedicatedServerPricing.specs.controlPanelSubtitle":
      "Obsidian Web Host Edition",
    "dedicatedServerPricing.flags.usaAlt": "US-Flagge",
    "dedicatedServerPricing.flags.ukAlt": "UK-Flagge",
    "dedicatedServerPricing.flags.australiaAlt": "Australien-Flagge",
    "keyFeatures.title": "Hauptmerkmale",
    "keyFeatures.feature.backupRecovery":
      "Sicherung und Wiederherstellung für physische, virtuelle und Cloud-Umgebungen.",
    "keyFeatures.feature.malwareProtection":
      "Schutz vor Malware und Anti-Ransomware.",
    "keyFeatures.feature.deviceProtection":
      "Schutz und Verwaltung von Endgeräten.",
    "keyFeatures.feature.threatDetection":
      "Erweiterte Bedrohungserkennung und -reaktion.",
    "keyFeatures.feature.emailProtection": "E-Mail-Schutz und Archivierung.",
    "keyFeatures.feature.disasterRecovery":
      "Cloud-basierte Notfallwiederherstellung.",
    "keyFeatures.feature.centralManagement":
      "Zentralisierte Verwaltung und Überwachung.",
    "serverLicenses.title": "Serverlizenzen",
    "serverLicenses.description":
      "Eine Lizenz für private und vollständig dedizierte Server",
    "serverLicenses.signUpNow": "Jetzt anmelden!",
    "individualLicenses.title": "Benötigen Sie individuelle Lizenzen?",
    "individualLicenses.description":
      "Holen Sie sich eine individuelle Lizenz für private und vollständig dedizierte Server",
    "individualLicenses.license.cloudLinux": "CloudLinux",
    "individualLicenses.license.whmcs": "WHMCS",
    "individualLicenses.license.kernelCare": "KernelCare",
    "individualLicenses.license.liteSpeed": "LiteSpeed",
    "individualLicenses.license.directAdmin": "DirectAdmin",
    "individualLicenses.license.cPanelWHM": "cPanel/WHM",
    "individualLicenses.license.softaculous": "Softaculous",
    "individualLicenses.license.cloudLinuxPro": "CloudLinux Pro",
    "individualLicenses.license.cloudLinuxAlt": "CloudLinux-Logo",
    "individualLicenses.license.whmcsAlt": "WHMCS-Logo",
    "individualLicenses.license.kernelCareAlt": "KernelCare-Logo",
    "individualLicenses.license.liteSpeedAlt": "LiteSpeed-Logo",
    "individualLicenses.license.directAdminAlt": "DirectAdmin-Logo",
    "individualLicenses.license.cPanelWHMAlt": "cPanel/WHM-Logo",
    "individualLicenses.license.softaculousAlt": "Softaculous-Logo",
    "individualLicenses.license.cloudLinuxProAlt": "CloudLinux Pro-Logo",
    "individualLicenses.monthly": "Monatlich",
    "featuresSectionFive.title":
      "Umfassender Überblick über Ihre gesamte Domain",
    "featuresSectionFive.description":
      "Erhalten Sie eine vollständige Übersicht über alles, was in Ihrer Domain passiert, auf einem einzigen Dashboard und tauchen Sie mit interaktiven Diagrammen und Tools in die Details ein.",
    "featuresSectionFive.feature.emailOverview":
      "Übersicht über ausgehende E-Mails",
    "featuresSectionFive.feature.emailOverviewDesc":
      "Zeigen Sie den Prozentsatz der E-Mails an, die DMARC passieren.",
    "featuresSectionFive.feature.topThreats": "Top 5 Bedrohungen",
    "featuresSectionFive.feature.topThreatsDesc":
      "Zeigen Sie die fünf wichtigsten IP-Adressen an, die die größten potenziellen Bedrohungen für Ihre Domain darstellen.",
    "featuresSectionFive.feature.spfDkimCompliance":
      "SPF- und DKIM-Konformität",
    "featuresSectionFive.feature.spfDkimComplianceDesc":
      "Prozentsatz der E-Mails, die jeweils mit SPF und DKIM konform sind.",
    "featuresSectionFive.feature.powerDmarcCompliance":
      "Konformität mit der PowerDMARC-Plattform",
    "featuresSectionFive.feature.powerDmarcComplianceDesc":
      "Prozentsatz der von Ihrer Domain gesendeten E-Mails, die mit PowerDMARC konform sind.",
    "featuresSectionFive.feature.emailOverviewAlt": "E-Mail-Umschlag-Symbol",
    "featuresSectionFive.feature.topThreatsAlt": "Warn-Dreieck-Symbol",
    "featuresSectionFive.feature.spfDkimComplianceAlt":
      "Sicherheitsschloss-Symbol",
    "featuresSectionFive.feature.powerDmarcComplianceAlt":
      "Sicherheitsschild mit Häkchen-Symbol",
    "whyChooseTigers.title": "Warum Tigers wählen",
    "whyChooseTigers.feature.emailBlocking": "Blockieren Sie unbefugte E-Mails",
    "whyChooseTigers.feature.emailBlockingDesc":
      "Bei der Nutzung von PowerDMARC eliminieren Sie nicht nur E-Mail-Spoofing, sondern können auch detaillierte Berichte verwenden, um Ihre Inhaltsstrategie sofort anzupassen. Überlassen Sie nichts dem Zufall.",
    "whyChooseTigers.feature.realTimeMonitoring":
      "Echtzeit-Bedrohungsüberwachung",
    "whyChooseTigers.feature.realTimeMonitoringDesc":
      "Mit unserem KI-Engine können Sie bösartige Quellen, die Ihre Domain weltweit spoofen, verfolgen.",
    "whyChooseTigers.feature.brandEnhancement":
      "Verbessern Sie Ihr Markenimage",
    "whyChooseTigers.feature.brandEnhancementDesc":
      "Bei der Nutzung von PowerDMARC eliminieren Sie nicht nur E-Mail-Spoofing, sondern können auch detaillierte Berichte verwenden, um Ihre Inhaltsstrategie sofort anzupassen. Überlassen Sie nichts dem Zufall.",
    "whyChooseTigers.feature.emailDelivery":
      "Verbesserung der E-Mail-Zustellbarkeit",
    "whyChooseTigers.feature.emailDeliveryDesc":
      "Die Implementierung von PowerDMARC beweist Empfangsservern, dass Sie sich für die Verbesserung der E-Mail-Sicherheit engagieren, was die Wahrscheinlichkeit erhöht, dass Ihre E-Mails die gewünschten Posteingänge erreichen.",
    "whyChooseTigers.feature.emailBlockingAlt": "E-Mail-Sicherheits-Symbol",
    "whyChooseTigers.feature.realTimeMonitoringAlt":
      "Echtzeit-Überwachungs-Symbol",
    "whyChooseTigers.feature.brandEnhancementAlt": "Markenverbesserungs-Symbol",
    "whyChooseTigers.feature.emailDeliveryAlt": "E-Mail-Zustellungs-Symbol",
    "serverManagement.title": "Serververwaltung",
    "serverManagement.description":
      "Lassen Sie uns alle Ihre Server für Sie verwalten!",
    "serverManagement.signUpNow": "Jetzt anmelden!",
    "pricingSection.choosePlan": "Wählen Sie einen Plan",
    "pricingSection.planName": "Opelionz Native",
    "pricingSection.pricePeriod": "LYD/Vierteljährlich",
    "pricingSection.orderNow": "Jetzt bestellen",
    "pricingSection.comparePackages": "Pakete vergleichen",
    "pricingSection.feature.nvmeStorage": "60 GB NVMe-Speicher",
    "pricingSection.feature.websites": "15 Websites",
    "pricingSection.feature.ram": "4 GB RAM",
    "pricingSection.feature.cpu": "3 CPU",
    "pricingSection.feature.cpanel": "cPanel-Kontrollpanel",
    "pricingSection.feature.subdomains": "Unbegrenzte Subdomains",
    "pricingSection.feature.databases":
      "Unbegrenzte MySQL- und SQL-Datenbanken",
    "pricingSection.feature.email": "Unbegrenzte E-Mail-Konten",
    "pricingSection.feature.ftp": "Unbegrenzte FTP-Konten",
    "pricingSection.feature.oneClickInstaller":
      "Unterstützt App-Installation mit einem Klick",
    "pricingSection.rightBlocksAlt": "Rechte dekorative Blöcke mit Symbolen",
    "pricingSection.leftBlocksAlt": "Linke dekorative Blöcke mit Symbolen",
    "goFast.title": "Schnell starten und Ihr Geschäft ausbauen",
    "goFast.cdnPerformance": "Verbesserung der Website-Performance über CDN",
    "goFast.cdnPerformanceDesc":
      "Unser CDN verbessert die Ladezeit von Seiten und reduziert die Serverlast im Durchschnitt um 80 %, um die Leistung Ihrer Website zu steigern.",
    "goFast.ddosMitigation": "Abwehr von DDoS-Angriffen",
    "goFast.ddosMitigationDesc":
      "Verteilte Denial-of-Service (DDoS)-Angriffe können Ihr Geschäft komplett lahmlegen. Wir blockieren DDoS-Angriffe auf den Ebenen 3, 4 und 7 und sichern die Bandbreite während der Angriffe.",
    "goFast.securityProtection": "Schutz vor Hacking und Malware",
    "goFast.securityProtectionDesc":
      "Schützen Sie Ihre Website vor Malware, verhindern Sie Hacking-Versuche, Zero-Day-Angriffe und Brute-Force-Passwortangriffe.",
    "goFast.cdnIconAlt": "Symbol für die Verbesserung der Website-Performance",
    "goFast.ddosIconAlt": "Symbol für DDoS-Schutz",
    "goFast.malwareIconAlt": "Symbol für Malware-Schutz",
    "systemSucuri.title": "Sucuri bietet plattformübergreifende Unterstützung",
    "systemSucuri.description":
      "Die Website-Firewall von Sucuri funktioniert auf allen Plattformen, einschließlich der heute beliebtesten Marken.",
    "systemSucuri.platform.phpbb": "Phpbb",
    "systemSucuri.platform.joomla": "Joomla",
    "systemSucuri.platform.drupal": "Drupal",
    "systemSucuri.platform.magento": "Magento",
    "systemSucuri.platform.wordpress": "WordPress",
    "systemSucuri.platform.phpbbAlt": "Phpbb-Logo",
    "systemSucuri.platform.joomlaAlt": "Joomla-Logo",
    "systemSucuri.platform.drupalAlt": "Drupal-Logo",
    "systemSucuri.platform.magentoAlt": "Magento-Logo",
    "systemSucuri.platform.wordpressAlt": "WordPress-Logo",
    "featuresSectionFour.title": "Hauptmerkmale",
    "featuresSectionFour.description":
      "Besitzen Sie Ihren dedizierten Server mit Ihrem bevorzugten Betriebssystem und vorinstallierten Anwendungen.",
    "featuresSectionFour.feature.crossPlatform":
      "Funktioniert auf mehreren Plattformen",
    "featuresSectionFour.feature.ddosMitigation": "Abwehr von DDoS-Angriffen",
    "featuresSectionFour.feature.malwareRemoval":
      "Erkennung und Entfernung von Malware",
    "featuresSectionFour.feature.sslCertificate": "SSL-Sicherheitszertifikat",
    "featuresSectionFour.feature.securityMonitoring": "Sicherheitsüberwachung",
    "featuresSectionFour.feature.performanceOptimization":
      "Leistungsoptimierung",
    "featuresSectionFour.feature.crossPlatformAlt":
      "Funktioniert auf mehreren Plattformen",
    "featuresSectionFour.feature.ddosMitigationAlt":
      "Abwehr von DDoS-Angriffen",
    "featuresSectionFour.feature.malwareRemovalAlt":
      "Erkennung und Entfernung von Malware",
    "featuresSectionFour.feature.sslCertificateAlt":
      "SSL-Sicherheitszertifikat",
    "featuresSectionFour.feature.securityMonitoringAlt":
      "Sicherheitsüberwachung",
    "featuresSectionFour.feature.performanceOptimizationAlt":
      "Leistungsoptimierung",

    "questions.faq": "Häufig gestellte Fragen",
    "questions.helpCenter": "Hilfezentrum",
    "questions.faqAlt": "FAQ",
    "questions.helpCenterAlt": "Hilfezentrum",
    "questions.vpsDefinition":
      "Was ist ein dedizierter virtueller Server (VPS)?",
    "questions.vpsDefinitionDesc":
      "Ein virtueller Server ist ein Server, der in völlig getrennte Hosting-Umgebungen aufgeteilt ist. Wenn Sie VPS-Hosting haben, ist eine dieser Umgebungen vollständig Ihnen gewidmet. Das bedeutet, dass Sie keine Ressourcen (wie RAM oder CPU) mit anderen Kunden teilen müssen und weniger wahrscheinlich von ihrem Verhalten beeinflusst werden.",
    "questions.vpsVsShared":
      "Wann sollte ich VPS-Hosting statt Shared Hosting nutzen?",
    "questions.vpsVsSharedDesc":
      "Ein virtueller privater Server ist ideal für Nutzer, die mehr Kontrolle über ihre Hosting-Umgebung suchen. Wenn also der Traffic Ihrer Website steigt oder Sie mehrere Websites haben und zusätzliche Ressourcen benötigen, um sie effizient zu betreiben, bietet ein VPS mehr Flexibilität und Kontrolle, um die Leistung zu optimieren und Ressourcen wie RAM und Speicherplatz zu skalieren, ohne mehr zu zahlen, als Sie benötigen.",
    "questions.vpsVsDedicated":
      "Was ist der Unterschied zwischen einem virtuellen Server und einem dedizierten Server?",
    "questions.vpsVsDedicatedDesc":
      "Ein virtueller Server unterscheidet sich von einem dedizierten Server hinsichtlich der Anzahl der Nutzer, die Ressourcen auf einem physischen Server haben. Bei einem VPS werden einige Ressourcen spezifischen Nutzern zugeteilt, aber es gibt mehrere Nutzer auf demselben physischen Server. Bei einem dedizierten Server hat ein einzelner Nutzer vollständigen Zugriff auf alle Ressourcen des physischen Servers.",
    "questions.vpsLocations":
      "Welche Standorte sind für VPS-Hosting verfügbar?",
    "questions.vpsLocationsDesc":
      "Mit Libyan Spider können Sie den Serverstandort wählen: Deutschland, Finnland",
    "ourEdge.title": "Was uns auszeichnet",
    "ourEdge.cdnPerformance": "Verbesserung der Website-Performance über CDN",
    "ourEdge.cdnPerformanceDesc":
      "Unser Content Delivery Network (CDN) verbessert die Ladezeit von Seiten und reduziert die Serverlast im Durchschnitt um 80 %, um die Leistung Ihrer Website zu steigern.",
    "ourEdge.ddosMitigation": "Abwehr von DDoS-Angriffen",
    "ourEdge.ddosMitigationDesc":
      "Verteilte Denial-of-Service (DDoS)-Angriffe können Ihr Geschäft komplett lahmlegen. Wir blockieren DDoS-Angriffe auf den Ebenen 3, 4 und 7 und sichern die Bandbreite während der Angriffe.",
    "ourEdge.securityProtection": "Schutz vor Hacking und Malware",
    "ourEdge.securityProtectionDesc":
      "Schützen Sie Ihre Website vor Malware, verhindern Sie Hacking-Versuche, Zero-Day-Exploit-Angriffe und Brute-Force-Passwortangriffe.",
    "ourEdge.performanceAlt": "Leistung",
    "ourEdge.ddosProtectionAlt": "DDoS-Schutz",
    "ourEdge.securityAlt": "Sicherheit",
    "ourEdge.visitorsAlt": "Besucher",
    "ourEdge.easeOfUseAlt": "Benutzerfreundlichkeit",
    "ourEdge.growthAlt": "Wachstum",
    "hostingPlans.choosePlan": "Doğru Planı Seçin",
    "hostingPlans.planName": "Opelionz Yerel",
    "hostingPlans.pricePeriod": "LYD/Çeyreklik",
    "hostingPlans.vCPU": "vCPU",
    "hostingPlans.memory": "Bellek",
    "hostingPlans.ssdStorage": "SSD Depolama",
    "hostingPlans.orderNow": "Şimdi Sipariş Ver",
    "hostingPlans.virtualServersTitle": "Gerçek Güçlü Sanal Sunucular",
    "hostingPlans.virtualServersDescription":
      "Sanal bulut sunucuları, hosting kapasitenizi genişletmek ve sitenizin kararlılığını gelişmiş özelliklerle artırmak için tamamen ayrılmış kaynakların gücünü sağlar.",
    "hostingPlans.highPerformance": "Yüksek Performanslı Donanım",
    "hostingPlans.enterpriseReliability": "Kurumsal Seviyede Güvenilirlik",
    "hostingPlans.uptimeGuarantee": "%99,9 Çalışma Süresi Garantisi",
    "hostingPlans.nvmeSsd": "Yüksek Hızlı NVMe SSD Sürücüler",
    "featuresSection.mainFeatures": "Hauptmerkmale",
    "featuresSection.description":
      "Besitzen Sie Ihren dedizierten Server mit Ihrem bevorzugten Betriebssystem und vorinstallierten Anwendungen.",
    "featuresSection.backgroundDecorationAlt": "Hintergrunddekoration",
    "featuresSection.sucuriAlt": "Sucuri-Sicherheit",
    "featuresSection.softaculousAlt": "Softaculous",
    "featuresSection.linuxAlt": "Linux-Betriebssystem",
    "featuresSection.cpanelAlt": "cPanel",
    "featuresSection.pleskAlt": "Plesk",
    "featuresSection.acronisAlt": "Acronis",
    "featuresSection.microsoftAlt": "Microsoft",
    "featuresSection.cloudLinuxAlt": "CloudLinux",
    "featuresSection.ispManagerAlt": "ISP Manager",
    "worldDaljm.multiRegionSupport":
      "Flexible Unterstützung für mehrere Regionen",
    "worldDaljm.description":
      "Führen Sie Anwendungen aus und migrieren Sie sie zwischen mehreren Geräteregionen über eine einzige benutzerfreundliche Oberfläche, um sie Ihren Kunden näher zu bringen.",
    "worldDaljm.worldIllustrationAlt": "3D-Weltillustration mit Plattformen",
    "trustCustomer.trustedBy": "Vertraut von unseren Kunden",
    "trustCustomer.docCenter": "Dokumentationszentrum",
    "trustCustomer.financialCommittee": "Finanzfreigabekomitee",
    "trustCustomer.socialSecurity": "Sozialversicherungsfonds",
    "trustCustomer.commercialRegistry": "Handelsregister",
    "trustCustomer.zatAlSawari": "Zat Al Sawari Apotheke",
    "trustCustomer.docCenterAlt": "Dokumentationszentrum",
    "trustCustomer.financialCommitteeAlt": "Finanzfreigabekomitee",
    "trustCustomer.socialSecurityAlt": "Sozialversicherungsfonds",
    "trustCustomer.commercialRegistryAlt": "Handelsregister",
    "trustCustomer.zatAlSawariAlt": "Zat Al Sawari Apotheke",

    "header.phone": "+880181239633",
    "header.email": "info@doorsoft.co",
    "header.login": "Anmelden",
    "header.register": "Registrieren",
    "header.language": "Deutsch",
    "footer.privacyPolicy": "Datenschutzrichtlinie und Benutzervereinbarung",
    "footer.company": "Unternehmen",
    "footer.aboutUs": "Über uns",
    "footer.jobs": "Jobs",
    "footer.contactUs": "Kontaktieren Sie uns",
    "footer.mediaCenter": "Medien- & Nachrichtenzentrum",
    "footer.servicesTitle": "Dienste",
    "footer.hosting": "Hosting",
    "footer.domains": "Domains",
    "footer.vps": "Virtueller Privater Server",
    "footer.serverSupport": "Server-Technischer Support",
    "footer.whois": "WHOIS",
    "footer.technology": "Technologie",
    "footer.speed": "Geschwindigkeit",
    "footer.security": "Sicherheit",
    "footer.controlPanel": "Control Panel",
    "footer.backups": "Backups",
    "footer.legal": "Rechtlich",
    "footer.privacy": "Datenschutz",
    "footer.paymentMethods": "Zahlungsmethoden",
    "footer.sslCertificates": "SSL-Sicherheitszertifikate",
    "footer.partners": "Unsere Partner",
    "hero.serverHosting": "Server-Hosting",
    "hero.descriptionText":
      "Titelbeschreibung Titelbeschreibung Titelbeschreibung",
    "hero.startNow": "Jetzt Starten!",
    "bouquets.choosePlan": "Wähle einen Plan",
    "bouquets.native": "Obillions Native",
    "bouquets.quarterly": "SAR/Vierteljährlich",
    "bouquets.orderNow": "Jetzt bestellen",
    "bouquets.comparePackages": "Pakete vergleichen",
    "bouquets.nvmeStorage": "NVMe-Speicher",
    "bouquets.websites": "Webseite(n)",
    "bouquets.ram": "RAM",
    "bouquets.cpu": "CPU",
    "bouquets.controlPanel": "cPanel Control Panel",
    "bouquets.subdomains": "Unbegrenzte Subdomains",
    "bouquets.mysqlDatabases": "Unbegrenzte MySQL- & SQL-Datenbanken",
    "bouquets.emailAccount": "Unbegrenztes E-Mail-Konto",
    "bouquets.ftpAccounts": "Unbegrenzte FTP-Konten",
    "bouquets.oneClickInstaller": "Unterstützt One-Click-App-Installer",

    "nav.home": "Startseite",
    "nav.hosting": "Hosting",
    "nav.reseller": "Reseller Hosting",
    "nav.servers": "Server",
    "nav.domains": "Domains",
    "nav.company": "Unternehmen",
    "nav.technology": "Technologie",

    "hero.title": "Perfekte",
    "hero.subtitle": "Web-Hosting-Lösungen",
    "hero.description":
      "Nimor Company ist ein führendes Unternehmen im Bereich Web-Hosting und Domain-Registrierung",
    "hero.search": "Suchen",
    "hero.searchPlaceholder": "Nach einer neuen Domain suchen",

    "hosting.shared": "Shared Hosting",
    "hosting.shared.desc":
      "Zuverlässiges und kostengünstiges Hosting für kleine Unternehmen und persönliche Websites",
    "hosting.cloud": "Cloud Hosting",
    "hosting.cloud.desc":
      "Skalierbare Hosting-Lösungen, die mit Ihren Geschäftsanforderungen wachsen",
    "hosting.wordpress": "WordPress Hosting",
    "hosting.wordpress.desc":
      "Optimierte Hosting-Umgebung speziell für WordPress-Websites",
    "hosting.softaculous": "Softaculous Hosting",
    "hosting.softaculous.desc":
      "Ein-Klick-Installationen für über 400 Anwendungen mit Softaculous",
    "hosting.email": "E-Mail Hosting",
    "hosting.email.desc":
      "Zuverlässiges E-Mail-Hosting mit benutzerdefinierten Domains für professionelle Kommunikation",
    "hosting.business": "Business Hosting",
    "hosting.business.desc":
      "Professionelles Hosting für wachsende Unternehmen mit hoher Leistung",
    "hosting.developer": "Entwickler Hosting",
    "hosting.developer.desc":
      "Erweiterte Hosting-Lösungen mit Tools und Funktionen für Entwickler",
    "hosting.tamoor": "Tamoor Cloud",
    "hosting.tamoor.desc":
      "Sicheres und leistungsstarkes Cloud-Hosting für Unternehmensanwendungen",

    "reseller.basic": "Basic Reseller",
    "reseller.basic.desc":
      "Basis-Hosting-Plan für Reseller zum Starten ihrer Kunden",
    "reseller.plus": "Reseller Plus",
    "reseller.plus.desc":
      "Erweiterte Funktionen für wachsende Reseller-Netzwerke",
    "reseller.ultra": "Reseller Ultra",
    "reseller.ultra.desc":
      "Premium-Hosting für großangelegte Reseller-Operationen",
    "reseller.program": "Reseller-Programm",
    "reseller.program.desc":
      "Treten Sie unserem Reseller-Programm bei und beginnen Sie zu verdienen",

    "servicesCards.dedicatedServers.title": "Dedizierte Server",
    "servicesCards.dedicatedServers.desc":
      "Hosten Sie Ihre Website einfach, bequem und zu wirtschaftlichen Kosten!",
    "servicesCards.sharedCloudHosting.title": "Shared Cloud Hosting",
    "servicesCards.sharedCloudHosting.desc":
      "Hosten Sie Ihre Website einfach, bequem und zu wirtschaftlichen Kosten!",
    "servicesCards.webHosting.title": "Web Hosting",
    "servicesCards.webHosting.desc":
      "Hosten Sie Ihre Website einfach, bequem und zu wirtschaftlichen Kosten!",
    "servicesCards.controlPanelLicense.title": "Control Panel Lizenz",
    "servicesCards.controlPanelLicense.desc":
      "Hosten Sie Ihre Website einfach, bequem und zu wirtschaftlichen Kosten!",
    "servicesCards.domains.title": "Domains",
    "servicesCards.domains.desc":
      "Hosten Sie Ihre Website einfach, bequem und zu wirtschaftlichen Kosten!",
    "servicesCards.vps.title": "Virtual Private Server",
    "servicesCards.vps.desc":
      "Hosten Sie Ihre Website einfach, bequem und zu wirtschaftlichen Kosten!",
    "servicesCards.startingPrice": "Ab 45 SAR / monatlich",

    "servers.vps": "VPS Server",
    "servers.vps.desc":
      "Private virtuelle Server mit dedizierten Ressourcen für Ihre Projekte",
    "servers.cloud": "Cloud Server",
    "servers.cloud.desc":
      "Flexible und skalierbare Cloud-Server für jede Art von Geschäft",
    "servers.dedicated": "Dedizierte Server",
    "servers.dedicated.desc":
      "Dedizierte Server mit vollständiger Kontrolle über Ihre Umgebung",
    "servers.licenses": "Server-Lizenzen",
    "servers.licenses.desc":
      "Erhalten Sie die notwendigen Lizenzen für Ihre Server-Software",
    "servers.support": "Server-Technischer Support",
    "servers.support.desc":
      "Erhalten Sie Expertenunterstützung für Server-Wartung und -Verwaltung",
    "servers.backup": "Backups",
    "servers.backup.desc":
      "Sichern Sie Ihre Daten mit automatischen Backup-Services",

    "domains.register": "Domain-Registrierung",
    "domains.register.desc":
      "Registrieren Sie neue Domains oder übertragen Sie Ihre bestehenden Domains einfach",
    "domains.local": "Lokale Domains",
    "domains.local.desc":
      "Erhalten Sie lokale Domain-Erweiterungen für Ihre Region oder Ihr Land",
    "domains.transfer": "Domain-Transfer",
    "domains.transfer.desc":
      "Übertragen Sie Domains nahtlos von anderen Anbietern",
    "domains.cloudflare": "Cloudflare",
    "domains.cloudflare.desc":
      "Verbessern Sie die Sicherheit und Leistung Ihrer Website mit Cloudflare",
    "domains.ssl": "SSL-Sicherheitszertifikate",
    "domains.ssl.desc":
      "Gewährleisten Sie sichere Kommunikation für Ihre Website mit SSL-Zertifikaten",
    "domains.whois": "WHOIS",
    "domains.whois.desc":
      "Suchen Sie nach Domain-Informationen und prüfen Sie die Verfügbarkeit",

    "company.about": "Über uns",
    "company.about.desc":
      "Erfahren Sie mehr über unser Unternehmen, unsere Werte und unsere Mission",
    "company.contact": "Kontaktieren Sie uns",
    "company.contact.desc":
      "Kontaktieren Sie unser Team für Anfragen oder Support",
    "company.jobs": "Jobs",
    "company.jobs.desc":
      "Treten Sie unserem Team bei und helfen Sie uns, die Zukunft des Hostings zu gestalten",
    "company.news": "Medien- & Nachrichtenzentrum",
    "company.news.desc":
      "Bleiben Sie auf dem Laufenden mit den neuesten Unternehmensnachrichten und Medienankündigungen",
    "company.reseller": "Reseller-Programm",
    "company.reseller.desc":
      "Werden Sie Reseller und starten Sie Ihr Geschäft mit uns",
    "company.payment": "Zahlungsmethoden",
    "company.payment.desc":
      "Entdecken Sie alle verfügbaren Zahlungsoptionen für unsere Services",

    "tech.security": "Sicherheit",
    "tech.security.desc":
      "Erweiterte Sicherheitsfunktionen zum Schutz Ihrer Daten und Websites vor allen potenziellen Bedrohungen",
    "tech.speed": "Geschwindigkeit",
    "tech.speed.desc":
      "Optimierte Hosting-Lösungen für die schnellstmöglichen Ladezeiten Ihrer Website",
    "tech.control": "Control Panel",
    "tech.control.desc":
      "Verwalten Sie Ihre Hosting-Services einfach mit unserem interaktiven Control Panel",
    "tech.datacenter": "Rechenzentren",
    "tech.datacenter.desc":
      "Entdecken Sie unsere modernen Rechenzentren für erstklassige Infrastruktur",
    "tech.status": "Server-Status",
    "tech.status.desc":
      "Überprüfen Sie den aktuellen Status und die Betriebszeit aller unserer Server in Echtzeit",
    "tech.backup": "Backups",
    "tech.backup.desc":
      "Stellen Sie sicher, dass Ihre Daten durch erweiterte Backup-Services immer sicher sind",

    "services.title":
      "Großartige Services, die Ihre Geschäftsanforderungen erfüllen",
    "services.description":
      "Mit unseren Cloud-Produkten und -Services werden Sie feststellen, dass wir 100% Ihrer Geschäfts- und Datenanforderungen erfüllen, mit überlegener Sicherheit für Ihre Infrastruktur.",
    "services.cloudHosting": "Shared Cloud Hosting",
    "services.lsSuite": "LS Suite",
    "services.jpaas": "JPaaS Platform as a Service",
    "services.learnMore": "Mehr erfahren",

    "payment.title": "Zahlungsmethoden",
    "payment.description":
      "Zahlen Sie mit Fawry oder mehr als 20 anderen Zahlungsmethoden",

    "servers.title": "Server-Standorte",

    "partners.title": "Unsere Partner",
    "partners.description":
      "Wir konzentrieren uns auf unsere Partnerschaften mit Integrationsleitern, um sichere und zuverlässige Hosting-Lösungen zu bieten, die das Geschäftswachstum unserer Kunden unterstützen und ihnen helfen, ihre Ziele in der digitalen Welt zu erreichen.",

    "dashboard.title": "Umfassendes Control Panel",
    "dashboard.subtitle": "Abonnenten-Services-Panel",
    "dashboard.description":
      "Ein vollständig verwaltetes, responsives und benutzerfreundliches Control Panel zur Verwaltung aller Ihrer Cloud-Services.",

    "footer.rights": "Alle Rechte vorbehalten für Nimor Al-Jariya Company @",
    "footer.services": "Andere Services",
    "footer.contact": "Kontaktieren Sie uns",
    "footer.domain": "Neue Domain registrieren",
    "footer.transfer": "Domain zu uns übertragen",
    "footer.affiliate": "Affiliate-Marketing",
    "footer.terms": "Nutzungsbedingungen",

    "customer.helpCenter": "Hilfe-Center",
    "customer.jobs": "Jobs",
    "customer.subscriberServices": "Abonnenten-Services",
    "customer.dataCenters": "Rechenzentren",
    "customer.testimonial":
      "Die Professionalität, Hingabe und Aufmerksamkeit für Details Ihres Teams waren während des gesamten Entwicklungsprozesses der ISOC Libya Website offensichtlich. Wir sind vom Endprodukt begeistert. Es ist sowohl benutzerfreundlich als auch ästhetisch ansprechend und verkörpert den Geist und die Vision von ISOC Libya perfekt. Wir sind wirklich glücklich mit den Ergebnissen und dem positiven Feedback, das wir bereits erhalten haben.",
    "customer.customerName": "Amged-B. Shwehdy",
    "customer.customerTitle": "ISOC Libya Website",
    "dashboard.easyManagement": "Einfache Verwaltung",
    "dashboard.easyManagement.desc":
      "Vollständige Verwaltung und umfassender Überblick über alle Ihre Services an einem Ort.",
    "dashboard.oneClick": "Ein-Klick-Funktionalität",
    "dashboard.oneClick.desc":
      "Bereitstellen, installieren und verwalten Sie mit wenigen Klicks und in einfachen Schritten.",
    "dashboard.multiplePayment": "Mehrere Zahlungsmethoden",
    "dashboard.multiplePayment.desc":
      "Bezahlen Sie Ihre Service-Rechnungen online über mehrere Zahlungsmethoden.",
    "dashboard.mainDashboard": "Haupt-Dashboard",
    "dashboard.servicesManagement": "Services-Verwaltung",
    "dashboard.checkoutProcess": "Checkout-Prozess",
    "footer.socialMedia":
      "Bleiben Sie über unsere neuesten Nachrichten und Sonderangebote auf dem Laufenden, indem Sie uns auf verschiedenen Social-Media-Kanälen folgen.",
    "partners.linode.desc":
      "Es ist der weltweit größte unabhängige Anbieter von Open-Cloud-Services mit 11 globalen Rechenzentren, die fast eine Million Kunden und Unternehmen weltweit bedienen.",
    "partners.cpanel.desc":
      "cPanel wird seit über 20 Jahren von Millionen von Benutzern weltweit vertraut und bleibt die führende Plattform in der Hosting-Automatisierung.",
    "partners.cloudlinux.desc":
      "CloudLinux OS ist die führende Multi-Tenant-Plattform. Es verbessert Server-Stabilität, -Dichte und -Sicherheit durch Isolierung jedes Tenants.",
    "testimonials.1.text":
      "Exzellenter Service und professionelles Team, das innovative und effektive Lösungen bietet. Erstaunliche Erfahrung, die alle meine Erwartungen übertroffen hat und ich empfehle es jedem, der Qualität und Professionalität sucht.",
    "testimonials.1.name": "Mohammed Ahmed",
    "testimonials.1.title": "Geschäftsführer",
    "testimonials.2.text":
      "Der technische Support ist ausgezeichnet und die Lösungen sind effektiv, sie haben auf alle meine Anfragen schnell und mit hoher Effizienz geantwortet. Professionelles und kooperatives Team, das alle Wertschätzung und Lob verdient.",
    "testimonials.2.name": "Fatima Ali",
    "testimonials.2.title": "Technische Leiterin",
    "testimonials.3.text":
      "Schnelle Ausführung und hohe Qualität in allen erbrachten Dienstleistungen. Produkte sind von ausgezeichneter Qualität und die Lieferung war genau pünktlich wie versprochen.",
    "testimonials.3.name": "Ahmed Hassan",
    "testimonials.3.title": "Senior Entwickler",
    "testimonials.4.text":
      "Erstaunliche Erfahrung und innovative Lösungen, die alle unsere Bedürfnisse perfekt erfüllen. Ich spürte Ehrlichkeit und Verantwortung im Umgang mit dem professionellen und ausgezeichneten Arbeitsteam.",
    "testimonials.4.name": "Sara Mahmoud",
    "testimonials.4.title": "Projektleiterin",

    "serverLocations.title": "Server-Standorte",
    "serverLocations.uae": "Vereinigte Arabische Emirate",
    "serverLocations.germany": "Deutschland",
    "serverLocations.finland": "Finnland",
    "serverLocations.korea": "Korea",
    "serverLocations.italy": "Italien",
    "serverLocations.saudi": "Saudi-Arabien",
    "serverLocations.sudan": "Sudan",
    "serverLocations.turkey": "Türkei",
    "serverLocations.britain": "Großbritannien",
    "serverLocations.america": "Amerika",

    "servicesSection.title": "Unsere Services",
    "servicesSection.subtitle": "Entdecken Sie die Ihnen angebotenen Services",
    "servicesSection.dedicatedServers": "Dedizierte Server",
    "servicesSection.sharedCloudHosting": "Shared Cloud Hosting",
    "servicesSection.webHosting": "Web Hosting",
    "servicesSection.controlPanelLicense": "Control Panel Lizenz",
    "servicesSection.domains": "Domains",
    "servicesSection.vps": "Virtual Private Server",
    "servicesSection.description":
      "Hosten Sie Ihre Website einfach, bequem und zu wirtschaftlichen Kosten!",
    "servicesSection.startingFrom": "Ab 45 SAR / monatlich",

    "cloudServices.title":
      "Großartige Services, die Ihre Geschäftsanforderungen erfüllen",
    "cloudServices.description":
      "Mit unseren Cloud-Produkten und -Services werden Sie feststellen, dass wir 100% Ihrer Geschäfts- und Datenanforderungen erfüllen, mit überlegener Sicherheit für Ihre Infrastruktur.",
    "cloudServices.designDevelopment": "Design & Entwicklung",
    "cloudServices.domains": "Domains",
    "cloudServices.cloudServices": "Cloud Services",
    "cloudServices.sharedCloudHosting": "Shared Cloud Hosting",
    "cloudServices.sharedCloudHosting.desc":
      "Hosten Sie Ihre Website einfach und bequem zu wirtschaftlichen Kosten! Mit Shared Cloud Hosting.",
    "cloudServices.lsSuite": "LS Suite",
    "cloudServices.lsSuite.desc":
      "Professionelle E-Mail, Online-Speicher, Unternehmensmeetings und mehr. Für Unternehmen entwickelt.",
    "cloudServices.jpaas": "JPaaS Platform as a Service",
    "cloudServices.jpaas.desc": "Server-Verwaltung mit vollständiger Kontrolle",
    "cloudServices.learnMore": "Mehr erfahren",
  },

  turkish: {
    "sharedHosting.title": "Paylaşımlı Barındırma",
"sharedHosting.description": "Yüksek performanslı ve %100 kararlı bulut sunucuları, birden fazla coğrafi konumla",
"sharedHosting.startNow": "Şimdi Başla!",
"smallContent.feature.backupRecovery": "Fiziksel, sanal ve bulut ortamlar için yedekleme ve kurtarma.",
"smallContent.feature.malwareProtection": "Kötü amaçlı yazılım koruması ve fidye yazılımına karşı koruma.",
"smallContent.feature.deviceProtection": "Uç cihaz koruması ve yönetimi.",
"smallContent.feature.threatDetection": "Gelişmiş tehdit algılama ve yanıt.",
"smallContent.feature.emailProtection": "E-posta koruması ve arşivleme.",
"smallContent.feature.disasterRecovery": "Bulut tabanlı felaket kurtarma.",
"smallContent.feature.centralManagement": "Merkezi yönetim ve izleme.",
"smallContent.checkIconAlt": "Onay İkonu",
    "payment.titletwo": "Gizli ücret yok, abonelik aynı fiyattan yenilenir.",
    "nistCompliance.title": "NIST Çerçevesine Uygun",
    "nistCompliance.description":
      "Acronis, işinizi korumak için beş prensipten oluşan Ulusal Standartlar ve Teknoloji Enstitüsü (NIST) çerçevesine uygundur:",
    "nistCompliance.principle.identify": "Tanımlama",
    "nistCompliance.principle.identifyDesc":
      "BT altyapınızdaki güvenlik açıklarını tanımlayın ve ağınızda otomatik cihaz keşfi yapın",
    "nistCompliance.principle.protect": "Koruma",
    "nistCompliance.principle.protectDesc":
      "Güvenlik, yönetim, yazılım güncellemeleri ve daha fazlasında en iyi uygulamaları kullanma",
    "nistCompliance.principle.verify": "Doğrulama",
    "nistCompliance.principle.verifyDesc":
      "Tehditleri doğrulama ve kötü amaçlı yazılımlara/fidye yazılımlarına karşı sağlam savunmalar sağlama",
    "nistCompliance.principle.recover": "Kurtarma",
    "nistCompliance.principle.recoverDesc":
      "Kayıp verileri ve sistemleri uzaktan hızlıca ele alabilir ve sorunun nedenini doğrulayabiliriz",
    "cta.title": "Sunucunuzu çalıştırmak için lisanslara mı ihtiyacınız var?",
    "cta.description": "Biz bunları en düşük maliyetle sağlıyoruz",
    "cta.orderNow": "Şimdi Sipariş Ver!",
    "cta.sectionBlockRightAlt": "Sağ Dekoratif Blok",
    "cta.sectionBlockLeftAlt": "Sol Dekoratif Blok",
    "featuresSectionThree.title": "Özellikler",
    "featuresSectionThree.description": "Tüm planlarımızdaki temel özellikler",
    "featuresSectionThree.feature.windowsLinuxSupport":
      "Windows ve Linux Desteği",
    "featuresSectionThree.feature.ddosProtection": "DDoS Koruması",
    "featuresSectionThree.feature.sslTlsCertificate": "SSL/TLS Sertifikası",
    "featuresSectionThree.feature.backupPlans": "Yedekleme Planları",
    "featuresSectionThree.feature.globalDataCenters": "Küresel Veri Merkezleri",
    "featuresSectionThree.feature.dedicatedIp": "Özel IP Adresleri",
    "featuresSectionThree.feature.network10Gbit": "Bol 10Gbit Ağ",
    "featuresSectionThree.feature.windowsServerSupport":
      "Windows Server 2019/2022 Desteği",
    "featuresSectionThree.feature.windowsLinuxSupportAlt":
      "Windows ve Linux Desteği İkonu",
    "featuresSectionThree.feature.ddosProtectionAlt": "DDoS Koruması İkonu",
    "featuresSectionThree.feature.sslTlsCertificateAlt":
      "SSL/TLS Sertifikası İkonu",
    "featuresSectionThree.feature.backupPlansAlt": "Yedekleme Planları İkonu",
    "featuresSectionThree.feature.globalDataCentersAlt":
      "Küresel Veri Merkezleri İkonu",
    "featuresSectionThree.feature.dedicatedIpAlt": "Özel IP Adresleri İkonu",
    "featuresSectionThree.feature.network10GbitAlt": "Bol 10Gbit Ağ İkonu",
    "featuresSectionThree.feature.windowsServerSupportAlt":
      "Windows Server 2019/2022 Desteği İkonu",
    "featuresSectionThree.rightImageAlt": "Sağ Dekoratif Resim",
    "featuresSectionThree.leftImageAlt": "Sol Dekoratif Resim",
    "featuresSectionSix.title": "Ana Özellikler",
    "featuresSectionSix.description":
      "Tercih ettiğiniz işletim sistemi ve önceden yüklenmiş uygulamalarla özel sunucunuza sahip olun.",
    "featuresSectionSix.feature.crossPlatform":
      "Birden Fazla Platformda Çalışır",
    "featuresSectionSix.feature.ddosMitigation": "DDoS Saldırı Azaltma",
    "featuresSectionSix.feature.malwareDetection":
      "Kötü Amaçlı Yazılım Tespiti ve Kaldırılması",
    "featuresSectionSix.feature.sslCertificate": "SSL Güvenlik Sertifikası",
    "featuresSectionSix.feature.securityMonitoring": "Güvenlik İzleme",
    "featuresSectionSix.feature.performanceOptimization":
      "Performans Optimizasyonu",
    "featuresSectionSix.feature.crossPlatformAlt": "Çoklu Platform İkonu",
    "featuresSectionSix.feature.ddosMitigationAlt":
      "DDoS Saldırı Azaltma İkonu",
    "featuresSectionSix.feature.malwareDetectionAlt":
      "Kötü Amaçlı Yazılım Tespiti ve Kaldırılması İkonu",
    "featuresSectionSix.feature.sslCertificateAlt":
      "SSL Güvenlik Sertifikası İkonu",
    "featuresSectionSix.feature.securityMonitoringAlt": "Güvenlik İzleme İkonu",
    "featuresSectionSix.feature.performanceOptimizationAlt":
      "Performans Optimizasyonu İkonu",
    "cloudHosting.title": "Bulut Barındırma",
    "cloudHosting.description":
      "Yüksek performanslı ve %100 kararlı bulut sunucuları, birden fazla coğrafi konumla",
    "cloudHosting.startNow": "Şimdi Başla!",
    "dedicatedServerPricing.title":
      "Özel Sunucu Barındırma Planları ve Fiyatları",
    "dedicatedServerPricing.serverInfo.title": "INTEL SILVER 7402P",
    "dedicatedServerPricing.serverInfo.subtitle": "INTEL SILVER 7402P",
    "dedicatedServerPricing.pricing.renewal": "Yenileme için aylık 40 $",
    "dedicatedServerPricing.pricing.buyNow": "Şimdi Satın Al!",
    "dedicatedServerPricing.pricing.features": "Özellikler",
    "dedicatedServerPricing.specs.cpu": "26 Çekirdek @ 2.1 GHz",
    "dedicatedServerPricing.specs.cpuSubtitle": "Performans Testi 15,390",
    "dedicatedServerPricing.specs.storage": "2x 250GB SSD",
    "dedicatedServerPricing.specs.storageSubtitle": "8 diske kadar",
    "dedicatedServerPricing.specs.database": "1",
    "dedicatedServerPricing.specs.databaseSubtitle": "3'e kadar",
    "dedicatedServerPricing.specs.ram": "64GB",
    "dedicatedServerPricing.specs.ramSubtitle": "384GB'a kadar",
    "dedicatedServerPricing.specs.bandwidth": "3Gbps",
    "dedicatedServerPricing.specs.bandwidthSubtitle":
      "100TB/ay ücretsiz trafik",
    "dedicatedServerPricing.specs.controlPanel": "cPanel/WHM, lütfen",
    "dedicatedServerPricing.specs.controlPanelSubtitle":
      "Obsidian Web Host Sürümü",
    "dedicatedServerPricing.flags.usaAlt": "ABD Bayrağı",
    "dedicatedServerPricing.flags.ukAlt": "Birleşik Krallık Bayrağı",
    "dedicatedServerPricing.flags.australiaAlt": "Avustralya Bayrağı",
    "keyFeatures.title": "Ana Özellikler",
    "keyFeatures.feature.backupRecovery":
      "Fiziksel, sanal ve bulut ortamlar için yedekleme ve kurtarma.",
    "keyFeatures.feature.malwareProtection":
      "Kötü amaçlı yazılım koruması ve fidye yazılımına karşı koruma.",
    "keyFeatures.feature.deviceProtection": "Uç cihaz koruması ve yönetimi.",
    "keyFeatures.feature.threatDetection": "Gelişmiş tehdit algılama ve yanıt.",
    "keyFeatures.feature.emailProtection": "E-posta koruması ve arşivleme.",
    "keyFeatures.feature.disasterRecovery": "Bulut tabanlı felaket kurtarma.",
    "keyFeatures.feature.centralManagement": "Merkezi yönetim ve izleme.",
    "serverLicenses.title": "Serverlizenzen",
    "serverLicenses.description":
      "Eine Lizenz für private und vollständig dedizierte Server",
    "serverLicenses.signUpNow": "Jetzt anmelden!",
    "individualLicenses.title": "Benötigen Sie individuelle Lizenzen?",
    "individualLicenses.description":
      "Holen Sie sich eine individuelle Lizenz für private und vollständig dedizierte Server",
    "individualLicenses.license.cloudLinux": "CloudLinux",
    "individualLicenses.license.whmcs": "WHMCS",
    "individualLicenses.license.kernelCare": "KernelCare",
    "individualLicenses.license.liteSpeed": "LiteSpeed",
    "individualLicenses.license.directAdmin": "DirectAdmin",
    "individualLicenses.license.cPanelWHM": "cPanel/WHM",
    "individualLicenses.license.softaculous": "Softaculous",
    "individualLicenses.license.cloudLinuxPro": "CloudLinux Pro",
    "individualLicenses.license.cloudLinuxAlt": "CloudLinux-Logo",
    "individualLicenses.license.whmcsAlt": "WHMCS-Logo",
    "individualLicenses.license.kernelCareAlt": "KernelCare-Logo",
    "individualLicenses.license.liteSpeedAlt": "LiteSpeed-Logo",
    "individualLicenses.license.directAdminAlt": "DirectAdmin-Logo",
    "individualLicenses.license.cPanelWHMAlt": "cPanel/WHM-Logo",
    "individualLicenses.license.softaculousAlt": "Softaculous-Logo",
    "individualLicenses.license.cloudLinuxProAlt": "CloudLinux Pro-Logo",
    "individualLicenses.monthly": "Monatlich",
    "featuresSectionFive.title":
      "Umfassender Überblick über Ihre gesamte Domain",
    "featuresSectionFive.description":
      "Erhalten Sie eine vollständige Übersicht über alles, was in Ihrer Domain passiert, auf einem einzigen Dashboard und tauchen Sie mit interaktiven Diagrammen und Tools in die Details ein.",
    "featuresSectionFive.feature.emailOverview":
      "Übersicht über ausgehende E-Mails",
    "featuresSectionFive.feature.emailOverviewDesc":
      "Zeigen Sie den Prozentsatz der E-Mails an, die DMARC passieren.",
    "featuresSectionFive.feature.topThreats": "Top 5 Bedrohungen",
    "featuresSectionFive.feature.topThreatsDesc":
      "Zeigen Sie die fünf wichtigsten IP-Adressen an, die die größten potenziellen Bedrohungen für Ihre Domain darstellen.",
    "featuresSectionFive.feature.spfDkimCompliance":
      "SPF- und DKIM-Konformität",
    "featuresSectionFive.feature.spfDkimComplianceDesc":
      "Prozentsatz der E-Mails, die jeweils mit SPF und DKIM konform sind.",
    "featuresSectionFive.feature.powerDmarcCompliance":
      "Konformität mit der PowerDMARC-Plattform",
    "featuresSectionFive.feature.powerDmarcComplianceDesc":
      "Prozentsatz der von Ihrer Domain gesendeten E-Mails, die mit PowerDMARC konform sind.",
    "featuresSectionFive.feature.emailOverviewAlt": "E-Mail-Umschlag-Symbol",
    "featuresSectionFive.feature.topThreatsAlt": "Warn-Dreieck-Symbol",
    "featuresSectionFive.feature.spfDkimComplianceAlt":
      "Sicherheitsschloss-Symbol",
    "featuresSectionFive.feature.powerDmarcComplianceAlt":
      "Sicherheitsschild mit Häkchen-Symbol",
    "whyChooseTigers.title": "Warum Tigers wählen",
    "whyChooseTigers.feature.emailBlocking": "Blockieren Sie unbefugte E-Mails",
    "whyChooseTigers.feature.emailBlockingDesc":
      "Bei der Nutzung von PowerDMARC eliminieren Sie nicht nur E-Mail-Spoofing, sondern können auch detaillierte Berichte verwenden, um Ihre Inhaltsstrategie sofort anzupassen. Überlassen Sie nichts dem Zufall.",
    "whyChooseTigers.feature.realTimeMonitoring":
      "Echtzeit-Bedrohungsüberwachung",
    "whyChooseTigers.feature.realTimeMonitoringDesc":
      "Mit unserem KI-Engine können Sie bösartige Quellen, die Ihre Domain weltweit spoofen, verfolgen.",
    "whyChooseTigers.feature.brandEnhancement":
      "Verbessern Sie Ihr Markenimage",
    "whyChooseTigers.feature.brandEnhancementDesc":
      "Bei der Nutzung von PowerDMARC eliminieren Sie nicht nur E-Mail-Spoofing, sondern können auch detaillierte Berichte verwenden, um Ihre Inhaltsstrategie sofort anzupassen. Überlassen Sie nichts dem Zufall.",
    "whyChooseTigers.feature.emailDelivery":
      "Verbesserung der E-Mail-Zustellbarkeit",
    "whyChooseTigers.feature.emailDeliveryDesc":
      "Die Implementierung von PowerDMARC beweist Empfangsservern, dass Sie sich für die Verbesserung der E-Mail-Sicherheit engagieren, was die Wahrscheinlichkeit erhöht, dass Ihre E-Mails die gewünschten Posteingänge erreichen.",
    "whyChooseTigers.feature.emailBlockingAlt": "E-Mail-Sicherheits-Symbol",
    "whyChooseTigers.feature.realTimeMonitoringAlt":
      "Echtzeit-Überwachungs-Symbol",
    "whyChooseTigers.feature.brandEnhancementAlt": "Markenverbesserungs-Symbol",
    "whyChooseTigers.feature.emailDeliveryAlt": "E-Mail-Zustellungs-Symbol",
    "serverManagement.title": "Sunucu Yönetimi",
    "serverManagement.description": "Tüm sunucularınızı sizin için yönetelim!",
    "serverManagement.signUpNow": "Şimdi Kaydol!",
    "pricingSection.choosePlan": "Bir Plan Seçin",
    "pricingSection.planName": "Opelionz Yerel",
    "pricingSection.pricePeriod": "LYD/Çeyreklik",
    "pricingSection.orderNow": "Şimdi Sipariş Ver",
    "pricingSection.comparePackages": "Paketleri Karşılaştır",
    "pricingSection.feature.nvmeStorage": "60 GB NVMe Depolama",
    "pricingSection.feature.websites": "15 Web Sitesi",
    "pricingSection.feature.ram": "4 GB RAM",
    "pricingSection.feature.cpu": "3 CPU",
    "pricingSection.feature.cpanel": "cPanel Kontrol Paneli",
    "pricingSection.feature.subdomains": "Sınırsız Alt Alan Adı",
    "pricingSection.feature.databases": "Sınırsız MySQL ve SQL Veritabanları",
    "pricingSection.feature.email": "Sınırsız E-posta Hesabı",
    "pricingSection.feature.ftp": "Sınırsız FTP Hesabı",
    "pricingSection.feature.oneClickInstaller":
      "Tek Tıkla Uygulama Yükleyiciyi Destekler",
    "pricingSection.rightBlocksAlt": "Sağ Dekoratif Bloklar ve İkonlar",
    "pricingSection.leftBlocksAlt": "Sol Dekoratif Bloklar ve İkonlar",
    "goFast.title": "Hızla Başlayın ve İşinizi Büyütün",
    "goFast.cdnPerformance": "CDN ile Web Sitesi Performansını İyileştirme",
    "goFast.cdnPerformanceDesc":
      "CDN'miz, sayfa yükleme hızını artırır ve sunucu yükünü ortalama %80 oranında azaltarak web sitenizin performansını iyileştirir.",
    "goFast.ddosMitigation": "DDoS Saldırılarını Hafifletme",
    "goFast.ddosMitigationDesc":
      "Dağıtık Hizmet Engelleme (DDoS) saldırıları işinizi tamamen durdurabilir. 3, 4 ve 7. katman DDoS saldırılarını engelliyor ve saldırılar sırasında bant genişliğini güvence altına alıyoruz.",
    "goFast.securityProtection": "Hacking ve Malware'e Karşı Koruma",
    "goFast.securityProtectionDesc":
      "Web sitenizi kötü amaçlı yazılımlardan koruyun, hacking girişimlerini, zero-day saldırılarını ve kaba kuvvet parola tahmin saldırılarını engelleyin.",
    "goFast.cdnIconAlt": "Web Sitesi Performans İyileştirme İkonu",
    "goFast.ddosIconAlt": "DDoS Koruma İkonu",
    "goFast.malwareIconAlt": "Malware Koruma İkonu",
    "systemSucuri.title": "Sucuri Platformlar Arası Destek Sağlar",
    "systemSucuri.description":
      "Sucuri'nin web sitesi güvenlik duvarı, günümüzün en popüler markaları da dahil olmak üzere tüm platformlarda çalışır.",
    "systemSucuri.platform.phpbb": "Phpbb",
    "systemSucuri.platform.joomla": "Joomla",
    "systemSucuri.platform.drupal": "Drupal",
    "systemSucuri.platform.magento": "Magento",
    "systemSucuri.platform.wordpress": "WordPress",
    "systemSucuri.platform.phpbbAlt": "Phpbb Logosu",
    "systemSucuri.platform.joomlaAlt": "Joomla Logosu",
    "systemSucuri.platform.drupalAlt": "Drupal Logosu",
    "systemSucuri.platform.magentoAlt": "Magento Logosu",
    "systemSucuri.platform.wordpressAlt": "WordPress Logosu",
    "featuresSectionFour.title": "Ana Özellikler",
    "featuresSectionFour.description":
      "Tercih ettiğiniz işletim sistemi ve önceden yüklenmiş uygulamalarla özel sunucunuza sahip olun.",
    "featuresSectionFour.feature.crossPlatform":
      "Birden Fazla Platformda Çalışır",
    "featuresSectionFour.feature.ddosMitigation":
      "DDoS Saldırılarını Hafifletme",
    "featuresSectionFour.feature.malwareRemoval":
      "Kötü Amaçlı Yazılım Tespiti ve Kaldırma",
    "featuresSectionFour.feature.sslCertificate": "SSL Güvenlik Sertifikası",
    "featuresSectionFour.feature.securityMonitoring": "Güvenlik İzleme",
    "featuresSectionFour.feature.performanceOptimization":
      "Performans Optimizasyonu",
    "featuresSectionFour.feature.crossPlatformAlt":
      "Birden Fazla Platformda Çalışır",
    "featuresSectionFour.feature.ddosMitigationAlt":
      "DDoS Saldırılarını Hafifletme",
    "featuresSectionFour.feature.malwareRemovalAlt":
      "Kötü Amaçlı Yazılım Tespiti ve Kaldırma",
    "featuresSectionFour.feature.sslCertificateAlt": "SSL Güvenlik Sertifikası",
    "featuresSectionFour.feature.securityMonitoringAlt": "Güvenlik İzleme",
    "featuresSectionFour.feature.performanceOptimizationAlt":
      "Performans Optimizasyonu",
    "worldDaljm.multiRegionSupport": "Esnek Çok Bölgeli Destek",
    "worldDaljm.description":
      "Uygulamaları birden fazla cihaz bölgesinde çalıştırın ve tek bir kullanıcı dostu arayüz üzerinden taşıyın, müşterilerinize daha yakın hale getirin.",
    "worldDaljm.worldIllustrationAlt": "Platformlarla 3D Dünya İllüstrasyonu",
    "featuresSection.mainFeatures": "Ana Özellikler",
    "featuresSection.description":
      "Tercih ettiğiniz işletim sistemi ve önceden yüklenmiş uygulamalarla özel sunucunuza sahip olun.",
    "featuresSection.backgroundDecorationAlt": "Arka Plan Dekorasyonu",
    "featuresSection.sucuriAlt": "Sucuri Güvenlik",
    "featuresSection.softaculousAlt": "Softaculous",
    "featuresSection.linuxAlt": "Linux İşletim Sistemi",
    "featuresSection.cpanelAlt": "cPanel",
    "featuresSection.pleskAlt": "Plesk",
    "featuresSection.acronisAlt": "Acronis",
    "featuresSection.microsoftAlt": "Microsoft",
    "featuresSection.cloudLinuxAlt": "CloudLinux",
    "featuresSection.ispManagerAlt": "ISP Manager",
    "questions.faq": "Sıkça Sorulan Sorular",
    "questions.helpCenter": "Yardım Merkezi",
    "questions.faqAlt": "SSS",
    "questions.helpCenterAlt": "Yardım Merkezi",
    "questions.vpsDefinition": "Özel Sanal Sunucu (VPS) nedir?",
    "questions.vpsDefinitionDesc":
      "Sanal sunucu, tamamen ayrı barındırma ortamlarına bölünmüş bir sunucudur. VPS barındırmaya sahip olduğunuzda, bu ortamlardan biri tamamen size tahsis edilir. Bu, RAM veya CPU gibi kaynakları diğer müşterilerle paylaşmak zorunda olmadığınız ve onların davranışlarından etkilenme olasılığınızın daha düşük olduğu anlamına gelir.",
    "questions.vpsVsShared":
      "Paylaşımlı barındırma yerine VPS barındırmayı ne zaman kullanmalıyım?",
    "questions.vpsVsSharedDesc":
      "Sanal Özel Sunucu, barındırma ortamları üzerinde daha fazla kontrol arayan kullanıcılar için idealdir. Bu nedenle, web sitenizin trafiği artarsa veya birden fazla siteniz varsa ve bunları verimli bir şekilde çalıştırmak için ek kaynaklara ihtiyacınız varsa, VPS daha fazla esneklik ve kontrol sunar, performansı optimize etmek ve RAM veya disk alanı gibi kaynakları ihtiyaçlarınızdan fazla ödemeden ölçeklendirmek için.",
    "questions.vpsVsDedicated":
      "Sanal sunucu ile özel sunucu arasındaki fark nedir?",
    "questions.vpsVsDedicatedDesc":
      "Sanal sunucu, fiziksel bir sunucuda kaynaklara sahip olan kullanıcı sayısı açısından özel sunucudan farklıdır. VPS ile bazı kaynaklar belirli kullanıcılara tahsis edilir, ancak aynı fiziksel sunucuda birden fazla kullanıcı bulunur. Özel sunucuda ise tek bir kullanıcı, fiziksel sunucunun tüm kaynaklarına tam erişime sahiptir.",
    "questions.vpsLocations": "VPS barındırma için mevcut konumlar nelerdir?",
    "questions.vpsLocationsDesc":
      "Libyan Spider ile sunucu konumunu seçebilirsiniz: Almanya, Finlandiya",
    "ourEdge.title": "Bizi Farklı Kılan Nedir",
    "ourEdge.cdnPerformance": "CDN ile Site Performansını İyileştirme",
    "ourEdge.cdnPerformanceDesc":
      "İçerik Dağıtım Ağı (CDN) hizmetimiz, sayfa yükleme hızını artırır ve sunucu yüklerini ortalama %80 oranında azaltarak sitenizin performansını iyileştirir.",
    "ourEdge.ddosMitigation": "DDoS Saldırılarını Hafifletme",
    "ourEdge.ddosMitigationDesc":
      "Dağıtık Hizmet Engelleme (DDoS) saldırıları işinizi tamamen durdurabilir. 3, 4 ve 7. katman DDoS saldırılarını engelliyor ve saldırılar sırasında bant genişliğini güvence altına alıyoruz.",
    "ourEdge.securityProtection": "Hacking ve Malware'e Karşı Koruma",
    "ourEdge.securityProtectionDesc":
      "Sitenizi kötü amaçlı yazılımlardan koruyun, hacking girişimlerini, Zero-Day açık saldırılarını ve Brute Force parola tahmin saldırılarını engelleyin.",
    "ourEdge.performanceAlt": "Performans",
    "ourEdge.ddosProtectionAlt": "DDoS Koruması",
    "ourEdge.securityAlt": "Güvenlik",
    "ourEdge.visitorsAlt": "Ziyaretçiler",
    "ourEdge.easeOfUseAlt": "Kullanım Kolaylığı",
    "ourEdge.growthAlt": "Büyüme",
    "trustCustomer.trustedBy": "Müşterilerimiz Tarafından Güveniliyor",
    "trustCustomer.docCenter": "Dokümantasyon Merkezi",
    "trustCustomer.financialCommittee": "Finansal Serbest Bırakma Komitesi",
    "trustCustomer.socialSecurity": "Sosyal Güvenlik Fonu",
    "trustCustomer.commercialRegistry": "Ticari Sicil",
    "trustCustomer.zatAlSawari": "Zat Al Sawari Eczanesi",
    "trustCustomer.docCenterAlt": "Dokümantasyon Merkezi",
    "trustCustomer.financialCommitteeAlt": "Finansal Serbest Bırakma Komitesi",
    "trustCustomer.socialSecurityAlt": "Sosyal Güvenlik Fonu",
    "trustCustomer.commercialRegistryAlt": "Ticari Sicil",
    "trustCustomer.zatAlSawariAlt": "Zat Al Sawari Eczanesi",
    "cloudServices.description":
      "Bulut ürünlerimiz ve hizmetlerimizle, altyapınız için üstün güvenlikle birlikte iş ve veri ihtiyaçlarınızın %100'ünü karşıladığımızı göreceksiniz.",
    "header.phone": "+880181239633",
    "header.email": "info@doorsoft.co",
    "header.login": "Giriş",
    "header.register": "Kayıt Ol",
    "header.language": "Türkçe",
    "hero.serverHosting": "Sunucu Barındırma",
    "hero.descriptionText":
      "Başlık açıklaması başlık açıklaması başlık açıklaması",
    "hero.startNow": "Şimdi Başla!",
    "bouquets.choosePlan": "Bir Plan Seçin",
    "bouquets.native": "Obillions Native",
    "bouquets.quarterly": "SAR/Üç Aylık",
    "bouquets.orderNow": "Şimdi Sipariş Ver",
    "bouquets.comparePackages": "Paketleri Karşılaştır",
    "bouquets.nvmeStorage": "NVMe Depolama",
    "bouquets.websites": "Web Sitesi(leri)",
    "bouquets.ram": "RAM",
    "bouquets.cpu": "CPU",
    "bouquets.controlPanel": "cPanel Kontrol Paneli",
    "bouquets.subdomains": "Sınırsız Alt Alan Adı",
    "bouquets.mysqlDatabases": "Sınırsız MySQL & SQL Veritabanları",
    "bouquets.emailAccount": "Sınırsız E-posta Hesabı",
    "bouquets.ftpAccounts": "Sınırsız FTP Hesapları",
    "bouquets.oneClickInstaller":
      "Tek tıklamayla uygulama yükleyicisini destekler",
    "hostingPlans.choosePlan": "Doğru Planı Seçin",
    "hostingPlans.planName": "Opelionz Yerel",
    "hostingPlans.pricePeriod": "LYD/Çeyreklik",
    "hostingPlans.vCPU": "vCPU",
    "hostingPlans.memory": "Bellek",
    "hostingPlans.ssdStorage": "SSD Depolama",
    "hostingPlans.orderNow": "Şimdi Sipariş Ver",
    "hostingPlans.virtualServersTitle": "Gerçek Güçlü Sanal Sunucular",
    "hostingPlans.virtualServersDescription":
      "Sanal bulut sunucuları, hosting kapasitenizi genişletmek ve sitenizin kararlılığını gelişmiş özelliklerle artırmak için tamamen ayrılmış kaynakların gücünü sağlar.",
    "hostingPlans.highPerformance": "Yüksek Performanslı Donanım",
    "hostingPlans.enterpriseReliability": "Kurumsal Seviyede Güvenilirlik",
    "hostingPlans.uptimeGuarantee": "%99,9 Çalışma Süresi Garantisi",
    "hostingPlans.nvmeSsd": "Yüksek Hızlı NVMe SSD Sürücüler",
    "nav.home": "Ana Sayfa",
    "nav.hosting": "Hosting",
    "nav.reseller": "Bayi Hosting",
    "nav.servers": "Sunucular",
    "nav.domains": "Domainler",
    "nav.company": "Şirket",
    "nav.technology": "Teknoloji",

    "hero.title": "Mükemmel",
    "hero.subtitle": "Web Hosting Çözümleri",
    "hero.description":
      "Nimor Company, web hosting ve domain kayıt alanında lider bir şirkettir",
    "hero.search": "Ara",
    "hero.searchPlaceholder": "Yeni bir domain ara",

    "hosting.shared": "Paylaşımlı Hosting",
    "hosting.shared.desc":
      "Küçük işletmeler ve kişisel web siteleri için güvenilir ve uygun maliyetli hosting",
    "hosting.cloud": "Bulut Hosting",
    "hosting.cloud.desc":
      "İş ihtiyaçlarınızla birlikte büyüyen ölçeklenebilir hosting çözümleri",
    "hosting.wordpress": "WordPress Hosting",
    "hosting.wordpress.desc":
      "WordPress web siteleri için özel olarak tasarlanmış optimize hosting ortamı",
    "hosting.softaculous": "Softaculous Hosting",
    "hosting.softaculous.desc":
      "Softaculous kullanarak 400'den fazla uygulama için tek tıkla kurulum",
    "hosting.email": "E-posta Hosting",
    "hosting.email.desc":
      "Profesyonel iletişim için özel domainlerle güvenilir e-posta hosting",
    "hosting.business": "İş Hosting",
    "hosting.business.desc":
      "Yüksek performansla büyüyen işletmeler için profesyonel düzeyde hosting",
    "hosting.developer": "Geliştirici Hosting",
    "hosting.developer.desc":
      "Geliştiriciler için araçlar ve özelliklerle gelişmiş hosting çözümleri",
    "hosting.tamoor": "Tamoor Bulut",
    "hosting.tamoor.desc":
      "Kurumsal uygulamalar için güvenli ve yüksek performanslı bulut hosting",

    "reseller.basic": "Temel Bayi",
    "reseller.basic.desc":
      "Bayilerin müşterilerini başlatması için temel hosting planı",
    "reseller.plus": "Bayi Plus",
    "reseller.plus.desc": "Büyüyen bayi ağları için gelişmiş özellikler",
    "reseller.ultra": "Bayi Ultra",
    "reseller.ultra.desc":
      "Büyük ölçekli bayi operasyonları için premium hosting",
    "reseller.program": "Bayi Programı",
    "reseller.program.desc": "Bayi programımıza katılın ve kazanmaya başlayın",

    "servicesCards.dedicatedServers.title": "Özel Sunucular",
    "servicesCards.dedicatedServers.desc":
      "Web sitenizi kolay, rahat ve ekonomik maliyetlerle barındırın!",
    "servicesCards.sharedCloudHosting.title": "Paylaşımlı Bulut Hosting",
    "servicesCards.sharedCloudHosting.desc":
      "Web sitenizi kolay, rahat ve ekonomik maliyetlerle barındırın!",
    "servicesCards.webHosting.title": "Web Hosting",
    "servicesCards.webHosting.desc":
      "Web sitenizi kolay, rahat ve ekonomik maliyetlerle barındırın!",
    "servicesCards.controlPanelLicense.title": "Kontrol Paneli Lisansı",
    "servicesCards.controlPanelLicense.desc":
      "Web sitenizi kolay, rahat ve ekonomik maliyetlerle barındırın!",
    "servicesCards.domains.title": "Domainler",
    "servicesCards.domains.desc":
      "Web sitenizi kolay, rahat ve ekonomik maliyetlerle barındırın!",
    "servicesCards.vps.title": "Sanal Özel Sunucu",
    "servicesCards.vps.desc":
      "Web sitenizi kolay, rahat ve ekonomik maliyetlerle barındırın!",
    "servicesCards.startingPrice": "45 SAR / aylık başlangıç",

    "servers.vps": "VPS Sunucular",
    "servers.vps.desc":
      "Projeleriniz için özel kaynaklarla özel sanal sunucular",
    "servers.cloud": "Bulut Sunucular",
    "servers.cloud.desc":
      "Her türlü iş için esnek ve ölçeklenebilir bulut sunucular",
    "servers.dedicated": "Özel Sunucular",
    "servers.dedicated.desc": "Ortamınız üzerinde tam kontrolle özel sunucular",
    "servers.licenses": "Sunucu Lisansları",
    "servers.licenses.desc": "Sunucu yazılımınız için gerekli lisansları alın",
    "servers.support": "Sunucu Teknik Destek",
    "servers.support.desc": "Sunucu bakımı ve yönetimi için uzman desteği alın",
    "servers.backup": "Yedeklemeler",
    "servers.backup.desc":
      "Otomatik yedekleme hizmetleriyle verilerinizi güvence altına alın",

    "domains.register": "Domain Kaydı",
    "domains.register.desc":
      "Yeni domainler kaydedin veya mevcut domainlerinizi kolayca transfer edin",
    "domains.local": "Yerel Domainler",
    "domains.local.desc":
      "Bölgeniz veya ülkeniz için yerel domain uzantıları alın",
    "domains.transfer": "Domain Transfer",
    "domains.transfer.desc":
      "Domainleri diğer sağlayıcılardan sorunsuz bir şekilde transfer edin",
    "domains.cloudflare": "Cloudflare",
    "domains.cloudflare.desc":
      "Cloudflare kullanarak web sitenizin güvenliğini ve performansını artırın",
    "domains.ssl": "SSL Güvenlik Sertifikaları",
    "domains.ssl.desc":
      "SSL sertifikaları kullanarak web siteniz için güvenli iletişim sağlayın",
    "domains.whois": "WHOIS",
    "domains.whois.desc":
      "Domain bilgilerini arayın ve kullanılabilirliği kontrol edin",

    "company.about": "Hakkımızda",
    "company.about.desc":
      "Şirketimiz, değerlerimiz ve misyonumuz hakkında daha fazla bilgi edinin",
    "company.contact": "Bize Ulaşın",
    "company.contact.desc":
      "Herhangi bir soru veya destek için ekibimizle iletişime geçin",
    "company.jobs": "İş İlanları",
    "company.jobs.desc":
      "Ekibimize katılın ve hosting'in geleceğini şekillendirmemize yardımcı olun",
    "company.news": "Medya & Haber Merkezi",
    "company.news.desc":
      "En son şirket haberleri ve medya duyurularıyla güncel kalın",
    "company.reseller": "Bayi Programı",
    "company.reseller.desc": "Bayi olun ve bizimle işinizi başlatın",
    "company.payment": "Ödeme Yöntemleri",
    "company.payment.desc":
      "Hizmetlerimiz için mevcut tüm ödeme seçeneklerini keşfedin",

    "tech.security": "Güvenlik",
    "tech.security.desc":
      "Verilerinizi ve web sitelerinizi tüm potansiyel tehditlerden korumak için gelişmiş güvenlik özellikleri",
    "tech.speed": "Hız",
    "tech.speed.desc":
      "Web siteniz için mümkün olan en hızlı yükleme sürelerini sağlamak için optimize edilmiş hosting çözümleri",
    "tech.control": "Kontrol Paneli",
    "tech.control.desc":
      "İnteraktif kontrol panelimizi kullanarak hosting hizmetlerinizi kolayca yönetin",
    "tech.datacenter": "Veri Merkezleri",
    "tech.datacenter.desc":
      "Birinci sınıf altyapı için modern veri merkezlerimizi keşfedin",
    "tech.status": "Sunucu Durumu",
    "tech.status.desc":
      "Tüm sunucularımızın mevcut durumunu ve çalışma süresini gerçek zamanlı olarak kontrol edin",
    "tech.backup": "Yedeklemeler",
    "tech.backup.desc":
      "Gelişmiş yedekleme hizmetleri aracılığıyla verilerinizin her zaman güvende olduğundan emin olun",

    "services.title": "İş İhtiyaçlarınızı Karşılayan Harika Hizmetler",
    "services.description":
      "Bulut ürünlerimiz ve hizmetlerimizle, altyapınız için üstün güvenlikle birlikte iş ve veri ihtiyaçlarınızın %100'ünü karşıladığımızı göreceksiniz.",
    "services.cloudHosting": "Paylaşımlı Bulut Hosting",
    "services.lsSuite": "LS Suite",
    "services.jpaas": "JPaaS Platform as a Service",
    "services.learnMore": "Daha Fazla Bilgi",

    "payment.title": "Ödeme Yöntemleri",
    "payment.description":
      "Fawry veya 20'den fazla diğer ödeme yöntemi kullanarak ödeyin",

    "servers.title": "Sunucu Konumları",

    "partners.title": "Ortaklarımız",
    "partners.description":
      "Müşterilerimizin iş büyümesini destekleyen ve dijital dünyada hedeflerine ulaşmalarına yardımcı olan güvenli ve güvenilir hosting çözümleri sağlamak için entegrasyon liderleriyle ortaklıklarımıza odaklanıyoruz.",

    "dashboard.title": "Kapsamlı Kontrol Paneli",
    "dashboard.subtitle": "Abone Hizmetleri Paneli",
    "dashboard.description":
      "Tüm bulut hizmetlerinizi yönetmek için tamamen yönetilen, duyarlı ve kullanıcı dostu bir kontrol paneli.",

    "footer.rights": "Tüm hakları Nimor Al-Jariya Şirketi'ne aittir @",
    "footer.services": "Diğer Hizmetler",
    "footer.contact": "Bize Ulaşın",
    "footer.domain": "Yeni Domain Kaydet",
    "footer.transfer": "Domain'i Bize Transfer Et",
    "footer.affiliate": "Affiliate Pazarlama",
    "footer.terms": "Hizmet Şartları",

    "customer.helpCenter": "Yardım Merkezi",
    "customer.jobs": "İş İlanları",
    "customer.subscriberServices": "Abone Hizmetleri",
    "customer.dataCenters": "Veri Merkezleri",
    "customer.testimonial":
      "Ekibinizin profesyonelliği, özverisi ve detaylara gösterdiği özen, ISOC Libya web sitesinin geliştirilme sürecinin tamamında açıkça görülüyordu. Son üründen son derece etkilendik. Hem kullanıcı dostu hem de estetik açıdan hoş, ISOC Libya'nın ruhunu ve vizyonunu mükemmel bir şekilde yansıtıyor. Sonuçlardan ve şimdiden almaya başladığımız olumlu geri bildirimlerden gerçekten mutluyuz.",
    "customer.customerName": "Amged-B. Shwehdy",
    "customer.customerTitle": "ISOC Libya Web Sitesi",
    "dashboard.easyManagement": "Kolay Yönetim",
    "dashboard.easyManagement.desc":
      "Tüm hizmetlerinizin tek bir yerde eksiksiz yönetimi ve kapsamlı genel bakışı.",
    "dashboard.oneClick": "Tek Tıkla İşlevsellik",
    "dashboard.oneClick.desc":
      "Birkaç tıklama ve basit adımlarla dağıtın, kurun ve yönetin.",
    "dashboard.multiplePayment": "Çoklu Ödeme Yöntemleri",
    "dashboard.multiplePayment.desc":
      "Hizmet faturalarınızı çoklu ödeme yöntemleri ile çevrimiçi ödeyin.",
    "dashboard.mainDashboard": "Ana Gösterge Paneli",
    "dashboard.servicesManagement": "Hizmet Yönetimi",
    "dashboard.checkoutProcess": "Ödeme Süreci",
    "footer.socialMedia":
      "Çeşitli sosyal medya kanallarımızı takip ederek en son haberlerimiz ve özel tekliflerimizden haberdar olun.",
    "partners.linode.desc":
      "Dünya çapında yaklaşık bir milyon müşteri ve şirkete hizmet veren 11 küresel veri merkezi ile dünyanın en büyük bağımsız açık bulut hizmetleri sağlayıcısıdır.",
    "partners.cpanel.desc":
      "cPanel, 20 yılı aşkın süredir dünya çapında milyonlarca kullanıcı tarafından güvenilmekte ve hosting otomasyonunda lider platform olmaya devam etmektedir.",
    "partners.cloudlinux.desc":
      "CloudLinux OS, lider çok kiracılı platformdur. Her kiracıyı izole ederek sunucu kararlılığını, yoğunluğunu ve güvenliğini artırır.",
    "testimonials.1.text":
      "Mükemmel hizmet ve yenilikçi ve etkili çözümler sunan profesyonel ekip. Tüm beklentilerimi aşan harika bir deneyim ve kalite ve profesyonellik arayan herkese şiddetle tavsiye ederim.",
    "testimonials.1.name": "Mohammed Ahmed",
    "testimonials.1.title": "Genel Müdür",
    "testimonials.2.text":
      "Teknik destek mükemmel ve çözümler etkili, tüm sorularıma hızlı ve yüksek verimlilikle yanıt verdiler. Tüm takdir ve övgüyü hak eden profesyonel ve işbirlikçi ekip.",
    "testimonials.2.name": "Fatima Ali",
    "testimonials.2.title": "Teknik Müdür",
    "testimonials.3.text":
      "Sağlanan tüm hizmetlerde hızlı uygulama ve yüksek kalite. Ürünler mükemmel kalitede ve teslimat tam zamanında söz verildiği gibi oldu.",
    "testimonials.3.name": "Ahmed Hassan",
    "testimonials.3.title": "Kıdemli Geliştirici",
    "testimonials.4.text":
      "Tüm ihtiyaçlarımızı mükemmel şekilde karşılayan harika deneyim ve yenilikçi çözümler. Profesyonel ve seçkin çalışma ekibiyle ilişkilerde dürüstlük ve sorumluluk hissettim.",
    "testimonials.4.name": "Sara Mahmoud",
    "testimonials.4.title": "Proje Yöneticisi",

    "serverLocations.title": "Sunucu Konumları",
    "serverLocations.uae": "Birleşik Arap Emirlikleri",
    "serverLocations.germany": "Almanya",
    "serverLocations.finland": "Finlandiya",
    "serverLocations.korea": "Kore",
    "serverLocations.italy": "İtalya",
    "serverLocations.saudi": "Suudi Arabistan",
    "serverLocations.sudan": "Sudan",
    "serverLocations.turkey": "Türkiye",
    "serverLocations.britain": "İngiltere",
    "serverLocations.america": "Amerika",

    "servicesSection.title": "Hizmetlerimiz",
    "servicesSection.subtitle": "Size Sunulan Hizmetleri Keşfedin",
    "servicesSection.dedicatedServers": "Özel Sunucular",
    "servicesSection.sharedCloudHosting": "Paylaşımlı Bulut Hosting",
    "servicesSection.webHosting": "Web Hosting",
    "servicesSection.controlPanelLicense": "Kontrol Paneli Lisansı",
    "servicesSection.domains": "Domainler",
    "servicesSection.vps": "Sanal Özel Sunucu",
    "servicesSection.description":
      "Web sitenizi kolay, rahat ve ekonomik maliyetlerle barındırın!",
    "servicesSection.startingFrom": "45 SAR / aylık başlangıç",

    "cloudServices.title": "İş İhtiyaçlarınızı Karşılayan Harika Hizmetler",
    "cloudServices.designDevelopment": "Tasarım ve Geliştirme",
    "cloudServices.domains": "Domainler",
    "cloudServices.cloudServices": "Bulut Hizmetleri",
    "cloudServices.sharedCloudHosting": "Paylaşımlı Bulut Hosting",
    "cloudServices.sharedCloudHosting.desc":
      "Web sitenizi ekonomik maliyetlerle kolay ve rahat bir şekilde barındırın! Paylaşımlı bulut hosting ile.",
    "cloudServices.lsSuite": "LS Suite",
    "cloudServices.lsSuite.desc":
      "Profesyonel e-posta, çevrimiçi depolama, kurumsal toplantılar ve daha fazlası. İş için tasarlandı.",
    "cloudServices.jpaas": "JPaaS Platform as a Service",
    "cloudServices.jpaas.desc": "Tam kontrolle sunucu yönetimi",
    "cloudServices.learnMore": "Daha Fazla Bilgi",
    "footer.privacyPolicy": "Gizlilik Politikası ve Kullanıcı Sözleşmesi",
    "footer.company": "Şirket",
    "footer.aboutUs": "Hakkımızda",
    "footer.jobs": "İş İlanları",
    "footer.contactUs": "Bize Ulaşın",
    "footer.mediaCenter": "Medya & Haber Merkezi",
    "footer.servicesTitle": "Hizmetler",
    "footer.hosting": "Hosting",
    "footer.domains": "Domainler",
    "footer.vps": "Sanal Özel Sunucu",
    "footer.serverSupport": "Sunucu Teknik Destek",
    "footer.whois": "whois",
    "footer.technology": "Teknoloji",
    "footer.speed": "Hız",
    "footer.security": "Güvenlik",
    "footer.controlPanel": "Kontrol Paneli",
    "footer.backups": "Yedeklemeler",
    "footer.legal": "Yasal",
    "footer.privacy": "Gizlilik",
    "footer.paymentMethods": "Ödeme Yöntemleri",
    "footer.sslCertificates": "SSL Güvenlik Sertifikaları",
    "footer.partners": "Ortaklarımız",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("arabic");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (
      savedLanguage &&
      ["arabic", "english", "french", "german", "turkish"].includes(
        savedLanguage
      )
    ) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);

    document.documentElement.dir = lang === "arabic" ? "rtl" : "ltr";
    document.documentElement.lang =
      lang === "arabic"
        ? "ar"
        : lang === "english"
        ? "en"
        : lang === "french"
        ? "fr"
        : lang === "german"
        ? "de"
        : "tr";
  };

  const t = (key: TranslationKeys): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === "arabic";

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
        isRTL,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
