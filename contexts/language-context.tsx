"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Language = "arabic" | "english" | "french" | "german" | "turkish";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

type TranslationKeys =
  | "domainRegistrationSA.backgroundAlt"
  | "domainRegistrationSA.numberOneAlt"
  | "domainInfographic.titlePart1"
  | "domainInfographic.titlePart2"
  | "domainFeatures.mainTitle"
  | "brandGuidelines.headerTitle"
  | "brandGuidelines.headerDescription"
  | "brandGuidelines.logoTitle"
  | "brandGuidelines.logoDescription"
  | "brandGuidelines.logoAlt"
  | "brandGuidelines.logoSizesTitle"
  | "brandGuidelines.logoSizesDescription"
  | "brandGuidelines.logoSizesAlt"
  | "brandGuidelines.typographyTitle"
  | "brandGuidelines.typographyDescription"
  | "brandGuidelines.typographyFontName"
  | "brandGuidelines.downloadsTitle"
  | "brandGuidelines.downloadItem4Title"
  | "brandGuidelines.downloadsDescription"
  | "brandGuidelines.downloadItem1Alt"
  | "brandGuidelines.downloadItem1Title"
  | "brandGuidelines.downloadItem2Alt"
  | "brandGuidelines.downloadItem2Title"
  | "brandGuidelines.downloadItem3Alt"
  | "brandGuidelines.downloadItem3Title"
  | "brandGuidelines.downloadItem4Alt"
  | "brandGuidelines.downloadPDF"
  | "brandGuidelines.downloadSVG"
  | "brandGuidelines.downloadPNG"
  | "brandGuidelines.identityTitle"
  | "brandGuidelines.identityCard1Title"
  | "brandGuidelines.identityCard1Alt"
  | "brandGuidelines.identityCard2Title"
  | "brandGuidelines.identityCard2Alt"
  | "brandGuidelines.identityBottomAlt"
  | "domainFeatures.lockTitle"
  | "domainFeatures.lockDescription"
  | "domainFeatures.renewalTitle"
  | "domainFeatures.renewalDescription"
  | "domainFeatures.autoRenewalTitle"
  | "domainFeatures.autoRenewalDescription"
  | "domainFeatures.managementTitle"
  | "domainFeatures.managementDescription"
  | "domainFeatures.privacyTitle"
  | "domainFeatures.privacyDescription"
  | "domainFeatures.pricingTitle"
  | "domainFeatures.pricingDescription"
  | "domainInfographic.section1Title"
  | "domainInfographic.section1Description"
  | "domainPricingTable.title1"
  | "domainPricingTable.title2"
  | "domainPricingTable.domain"
  | "domainPricingTable.registration"
  | "domainPricingTable.renewal"
  | "domainPricingTable.transfer"
  | "domainPricingTable.protection"
  | "domainPricingTable.searchPlaceholder"
  | "domainPricingTable.noResults"
  | "domainPricingTable.previous"
  | "domainPricingTable.next"
  | "domainPricingTable.currencySymbol"
  | "domainInfographic.section2Title"
  | "domainInfographic.section2Description"
  | "domainInfographic.section3Title"
  | "domainInfographic.section3Description"
  | "domainRegistrationSA.title"
  | "domainSearchSection.title"
  | "domainSearchSection.description"
  | "domainSearchSection.searchPlaceholder"
  | "domainSearchSection.searchButton"
  | "domainSearchSection.popular"
  | "domainSearchSection.geographic"
  | "domainSearchSection.technology"
  | "domainSearchSection.service"
  | "domainSearchSection.business"
  | "domainSearchSection.media"
  | "domainSearchSection.shopping"
  | "domainSearchSection.more"
  | "domainSearchSection.domainImageAlt"
  | "namoorSection.title"
  | "paymentSection.description"
  | "domainRegistrationSA.description"
  | "partnersSection.mainTitle"
  | "partnersSection.rightBackgroundAlt"
  | "partnersSection.leftBackgroundAlt"
  | "partnersSection.sucuriName"
  | "partnersSection.sucuriDescription"
  | "partnersSection.sucuriLogoAlt"
  | "partnersSection.softaculousName"
  | "partnersSection.softaculousDescription"
  | "partnersSection.softaculousLogoAlt"
  | "partnersSection.linuxName"
  | "partnersSection.linuxDescription"
  | "partnersSection.linuxLogoAlt"
  | "domainRegistrationSA.saTitle"
  | "domainRegistrationSA.saPrice"
  | "domainRegistrationSA.saCircleAlt"
  | "domainRegistrationSA.eduSa"
  | "domainRegistrationSA.comSa"
  | "domainRegistrationSA.netSa"
  | "domainRegistrationSA.orgSa"
  | "domainRegistrationSA.medSa"
  | "domainRegistrationSA.idSa"
  | "domainRegistrationSA.schSa"
  | "domainRegistrationSA.plcSa"
  | "domainRegistrationSA.worldIconAlt"
  | "domainRegistrationSA.price"
  | "domainRegistrationSA.approvalTitle"
  | "domainRegistrationSA.schSaApproval"
  | "domainRegistrationSA.schSaApprovalDesc"
  | "domainRegistrationSA.medSaApproval"
  | "domainRegistrationSA.medSaApprovalDesc"
  | "domainRegistrationSA.govSaApproval"
  | "domainRegistrationSA.govSaApprovalDesc"
  | "domainRegistrationSA.govSaAltApproval"
  | "domainRegistrationSA.govSaAltApprovalDesc"
  | "domainStatsSA.title"
  | "domainStatsSA.description"
  | "domainStatsSA.chooseDomain"
  | "domainStatsSA.achievement"
  | "domainStatsSA.backgroundRightAlt"
  | "domainStatsSA.backgroundLeftAlt"
  | "speedSection.title"
  | "dashboardWelcome.title"
  | "dashboardWelcome.description"
  | "serverLocations.india"
  | "dashboardWelcome.imageAlt"
  // DashboardOverview
  | "dashboardOverview.title"
  | "dashboardOverview.description"
  | "dashboardOverview.imageAlt"
  // PerformanceTracking
  | "performanceTracking.title"
  | "performanceTracking.description"
  | "performanceTracking.mobileAlt"
  | "performanceTracking.backgroundAlt"
  | "performanceTracking.patternAlt"
  // DomainManagement
  | "domainManagement.title"
  | "domainManagement.description"
  | "domainManagement.imageAlt"
  // TechStack
  | "techStack.mainTitle"
  | "techStack.reactTitle"
  | "priceDomains.backgroundAlt"
  | "priceDomains.title"
  | "priceDomains.domainName"
  | "priceDomains.price"
  | "priceDomains.originalPrice"
  | "priceDomains.domainAriaLabel"
  | "techStack.reactAlt"
  | "techStack.laravelTitle"
  | "techStack.laravelAlt"
  | "techStack.phpTitle"
  | "techStack.phpAlt"
  | "techStack.javascriptTitle"
  | "techStack.javascriptAlt"
  | "techStack.lagomTitle"
  | "techStack.lagomAlt"
  | "techStack.whatsappApiTitle"
  | "techStack.whatsappApiAlt"
  | "websiteSuccessCriteria.sslTitle"
  | "websiteSuccessCriteria.sslDescription"
  | "websiteSuccessCriteria.cloudflareTitle"
  | "websiteSuccessCriteria.cloudflareDescription"
  | "websiteSuccessCriteria.cloudflareEnhanceTitle"
  | "websiteSuccessCriteria.cloudflareEnhanceDescription"
  | "websiteSuccessCriteria.mainTitle"
  | "websiteSuccessCriteria.performanceTitle"
  | "websiteSuccessCriteria.globalSpeedBoost"
  | "websiteSuccessCriteria.contentDelivery"
  | "websiteSuccessCriteria.loadBalancing"
  | "websiteSuccessCriteria.latencyReduction"
  | "websiteSuccessCriteria.globalSpeedBoostIconAlt"
  | "websiteSuccessCriteria.globalSpeedBoostDescription"
  | "websiteSuccessCriteria.securityTitle"
  | "websiteSuccessCriteria.ddosProtection"
  | "websiteSuccessCriteria.webApplicationFirewall"
  | "websiteSuccessCriteria.sslTlsEncryption"
  | "websiteSuccessCriteria.botManagement"
  | "websiteSuccessCriteria.realTimeThreatAnalysis"
  | "websiteSuccessCriteria.securityIconAlt"
  | "websiteSuccessCriteria.ddosProtectionDescription"
  | "websiteSuccessCriteria.signUpNow"
  | "cloudflareSection.cloudflareTitle"
  | "cloudflareSection.cloudflareDescription"
  | "cloudflareSection.cloudflareEnhanceTitle"
  | "cloudflareSection.cloudflareEnhanceDescription"
  | "cloudflareSection.signUpNow"
  | "sslSection.sslTitle"
  | "sslContent.rightBackgroundAlt"
  | "sslContent.leftBackgroundAlt"
  | "sslContent.trustTitle"
  | "sslContent.trustDescription"
  | "sslContent.chooseSslTitle"
  | "sslContent.chooseSslDescription"
  | "choosePlan.rightBackgroundAlt"
  | "choosePlan.leftBackgroundAlt"
  | "choosePlan.mainTitle"
  | "choosePlan.planTitle"
  | "choosePlan.currency"
  | "choosePlan.validation"
  | "choosePlan.organization"
  | "choosePlan.siteSeal"
  | "choosePlan.dynamic"
  | "choosePlan.orderNow"
  | "notFound.title"
  | "notFound.description"
  | "notFound.backToHome"
  | "websiteSecurity.title"
  | "websiteSecurity.description"
  | "websiteSecurity.securityImageAlt"
  | "beyondProtection.bigBlocksAlt"
  | "beyondProtection.mainTitle"
  | "beyondProtection.mainDescription"
  | "beyondProtection.browserCompatibilityTitle"
  | "beyondProtection.browserCompatibilityDescription"
  | "beyondProtection.customerTrustAlt"
  | "beyondProtection.seoTitle"
  | "beyondProtection.seoDescription"
  | "beyondProtection.browserFriendlyAlt"
  | "beyondProtection.customerTrustTitle"
  | "beyondProtection.customerTrustDescription"
  | "beyondProtection.seoIncreaseAlt"
  | "techStack.whmcsTitle"
  | "techStack.whmcsAlt"
  // KeyFeaturesTwo
  | "keyFeaturesTwo.mainTitle"
  | "keyFeaturesTwo.mainDescription"
  | "keyFeaturesTwo.cloudHostingTitle"
  | "keyFeaturesTwo.cloudHostingDescription"
  | "keyFeaturesTwo.cloudHostingAlt"
  | "keyFeaturesTwo.lsSuiteTitle"
  | "keyFeaturesTwo.lsSuiteDescription"
  | "keyFeaturesTwo.lsSuiteAlt"
  | "keyFeaturesTwo.jpaasTitle"
  | "keyFeaturesTwo.jpaasDescription"
  | "keyFeaturesTwo.jpaasAlt"
  | "keyFeaturesTwo.learnMore"
  | "speedSection.description"
  | "launchAppsSection.mainTitle"
  | "launchAppsSection.mainDescription"
  | "launchAppsSection.appAlt"
  | "launchAppsSection.dockerAlt"
  | "launchAppsSection.phpAlt"
  | "launchAppsSection.pythonAlt"
  | "featuresGrid.disasterRecovery"
  | "featuresGrid.emailProtection"
  | "featuresGrid.threatDetection"
  | "featuresGrid.centralizedManagement1"
  | "featuresGrid.centralizedManagement2"
  | "featuresGrid.centralizedManagement3"
  | "featuresGrid.centralizedManagement4"
  | "featuresGrid.centralizedManagement5"
  | "featuresGrid.centralizedManagement6"
  | "onlinePaymentSection.americanExpressAlt"
  | "serverLocations.mapAlt"
  | "serverLocations.comingSoonMessage"
  | "serverLocations.comingSoonTitle"
  | "serverLocations.upload"
  | "serverLocations.download"
  | "onlinePaymentSection.visaAlt"
  | "onlinePaymentSection.masterCardAlt"
  | "countrySelector.italyName"
  | "countrySelector.franceName"
  | "countrySelector.germanyName"
  | "countrySelector.japanName"
  | "countrySelector.finlandName"
  | "countrySelector.usaName"
  | "countrySelector.turkeyName"
  | "countrySelector.italyFlagAlt"
  | "countrySelector.franceFlagAlt"
  | "countrySelector.germanyFlagAlt"
  | "onlinePaymentSection.mainTitle"
  | "onlinePaymentSection.mainDescription"
  | "countrySelector.japanFlagAlt"
  | "countrySelector.finlandFlagAlt"
  | "countrySelector.usaFlagAlt"
  | "countrySelector.turkeyFlagAlt"
  | "backupsSection.title"
  | "backupsSection.description"
  | "supportParagraph.description"
  | "supportSectionTwo.helpCenter"
  | "supportSectionTwo.serverStatus"
  | "supportSectionTwo.subscriberServices"
  | "supportSectionTwo.helpCenterAlt"
  | "supportSectionTwo.serverStatusAlt"
  | "supportSectionTwo.subscriberServicesAlt"
  | "supportSectionTwo.emailService"
  | "supportSectionTwo.phone"
  | "supportSectionTwo.location"
  | "supportSectionTwo.emailServiceAlt"
  | "supportSectionTwo.phoneAlt"
  | "supportSectionTwo.locationAlt"
  | "supportSectionTwo.mapTitle"
  | "supportSectionTwo.locationValue"
  | "contactForm.title"
  | "contactForm.description"
  | "contactForm.salesTab"
  | "contactForm.customizationTab"
  | "contactForm.trendsTab"
  | "contactForm.pricesTab"
  | "contactForm.fullNameLabel"
  | "contactForm.usernameLabel"
  | "contactForm.messageLabel"
  | "contactForm.languageLabel"
  | "contactForm.languagePlaceholder"
  | "contactForm.languageArabic"
  | "contactForm.languageEnglish"
  | "contactForm.languageSpanish"
  | "contactForm.submitButton"
  | "contactForm.contactAlternative"
  | "loginSection.logoAlt"
  | "loginSection.emailIconAlt"
  | "loginSection.passwordIconAlt"
  | "loginSection.footerLogoAlt"
  | "loginSection.title"
  | "loginSection.emailPlaceholder"
  | "loginSection.passwordPlaceholder"
  | "loginSection.forgotPassword"
  | "loginSection.loginButton"
  | "loginSection.noAccount"
  | "loginSection.createAccount"
  | "softaculousSection.title"
  | "softaculousSection.description"
  | "appHostingSection.title"
  | "appHostingSection.description"
  | "appHostingSection.viewPricing"
  | "appHostingSection.createAccount"
  | "ecommerceSection.title"
  | "ecommerceSection.cyclosName"
  | "ecommerceSection.magentoName"
  | "ecommerceSection.magentoClusterName"
  | "ecommerceSection.maianCartName"
  | "ecommerceSection.openCartName"
  | "paymentMethodsSection.title"
  | "paymentMethodsSection.description"
  | "walletsSection.mainTitle"
  | "walletsSection.mainDescription"
  | "walletsSection.sdadTitle"
  | "walletsSection.sdadDescription"
  | "walletsSection.sdadAlt"
  | "walletsSection.paypalTitle"
  | "walletsSection.paypalDescription"
  | "walletsSection.paypalAlt"
  | "walletsSection.vodafoneTitle"
  | "walletsSection.vodafoneDescription"
  | "walletsSection.vodafoneAlt"
  | "walletsSection.zainTitle"
  | "walletsSection.zainDescription"
  | "walletsSection.zainAlt"
  | "walletsSection.moreLink"
  | "paymentMethodsSection.mainTitle"
  | "paymentMethodsSection.mainDescription"
  | "paymentMethodsSection.bankakTitle"
  | "paymentMethodsSection.bankakDescription"
  | "paymentMethodsSection.bankakAlt"
  | "paymentMethodsSection.ibanTitle"
  | "paymentMethodsSection.ibanDescription"
  | "paymentMethodsSection.ibanAlt"
  | "paymentMethodsSection.instantTitle"
  | "paymentMethodsSection.instantDescription"
  | "paymentMethodsSection.instantAlt"
  | "paymentMethodsSection.oowCashTitle"
  | "paymentMethodsSection.oowCashDescription"
  | "paymentMethodsSection.oowCashAlt"
  | "paymentMethodsSection.moreLink"
  | "cryptocurrenciesSection.mainTitle"
  | "cryptocurrenciesSection.mainDescription"
  | "cryptocurrenciesSection.ethereumAlt"
  | "cryptocurrenciesSection.binanceAlt"
  | "cryptocurrenciesSection.bitcoinAlt"
  | "cryptocurrenciesSection.tetherAlt"
  | "traditionalPaymentSection.mainTitle"
  | "traditionalPaymentSection.cdnTitle"
  | "traditionalPaymentSection.cdnDescription"
  | "traditionalPaymentSection.cdnAlt"
  | "traditionalPaymentSection.ddosTitle"
  | "traditionalPaymentSection.ddosDescription"
  | "traditionalPaymentSection.ddosAlt"
  | "traditionalPaymentSection.securityTitle"
  | "traditionalPaymentSection.securityDescription"
  | "traditionalPaymentSection.securityAlt"
  | "ecommerceSection.prestaShopName"
  | "ecommerceSection.cyclosDescription"
  | "ecommerceSection.magentoDescription"
  | "ecommerceSection.magentoClusterDescription"
  | "ecommerceSection.maianCartDescription"
  | "ecommerceSection.openCartDescription"
  | "ecommerceSection.prestaShopDescription"
  | "ecommerceSection.cyclosLogoAlt"
  | "ecommerceSection.magentoLogoAlt"
  | "ecommerceSection.maianCartLogoAlt"
  | "ecommerceSection.openCartLogoAlt"
  | "ecommerceSection.prestaShopLogoAlt"
  | "ecommerceSection.launchNow"
  | "statsSectionTwo.dataCenters"
  | "statsSectionTwo.uptime"
  | "statsSectionTwo.hostedSites"
  | "statsSectionTwo.guaranteedAvailability"
  | "statsSectionTwo.customerSatisfaction"
  | "statsSectionTwo.dataCentersAlt"
  | "statsSectionTwo.uptimeAlt"
  | "statsSectionTwo.hostedSitesAlt"
  | "statsSectionTwo.guaranteedAvailabilityAlt"
  | "statsSectionTwo.customerSatisfactionAlt"
  | "achievementsSectionTwo.title"
  | "achievementsSectionTwo.description"
  | "contactSection.description"
  | "contactSection.helpTitle"
  | "contactSection.helpDescription"
  | "contactSection.contactButton"
  | "contactSection.microsoftLogoAlt"
  | "contactSection.partner1LogoAlt"
  | "contactSection.partner2LogoAlt"
  | "contactSection.partner3LogoAlt"
  | "contactSection.partner4LogoAlt"
  | "tigersSection.title"
  | "tigersSection.description"
  | "featuresSection.title"
  | "featuresSection.multilingualSites"
  | "featuresSection.fiftyLanguages"
  | "featuresSection.responsiveDesign"
  | "featuresSection.easyTool"
  | "featuresSection.videoTutorials"
  | "featuresSection.plugins"
  | "featuresSection.templates"
  | "featuresSection.siteMigration"
  | "featuresSection.multilingualSitesAlt"
  | "featuresSection.fiftyLanguagesAlt"
  | "featuresSection.responsiveDesignAlt"
  | "featuresSection.easyToolAlt"
  | "featuresSection.videoTutorialsAlt"
  | "featuresSection.pluginsAlt"
  | "featuresSection.templatesAlt"
  | "featuresSection.siteMigrationAlt"
  | "featuresSection.rightImgAlt"
  | "featuresSection.leftImgAlt"
  | "oneClickApps.helmChartsAlt"
  | "oneClickApps.certManagerAlt"
  | "oneClickApps.linkerdAlt"
  | "oneClickApps.operatorsAlt"
  | "oneClickApps.illustrationAlt"
  | "distributorBasicNeed.title"
  | "distributorBasicNeed.subtitle"
  | "distributorBasicNeed.registerButton"
  | "distributorBasicNeed.distributorsButton"
  | "distributorBasicNeed.settingsIllustrationAlt"
  | "kubernetes.title"
  | "resellerHosting.title"
  | "resellerHostingPlus.title"
  | "resellerHostingUltra.title"
  | "resellerHostingProgram.title"
  | "standalone.serverDescription"
  | "resellerHosting.description"
  | "windowsHosting.title"
  | "windowsHosting.description"
  | "tigersHosting.title"
  | "tigersHosting.description"
  | "cloudInfrastructure.title"
  | "cloudInfrastructure.description"
  | "cloudInfrastructure.tools"
  | "cloudInfrastructure.resources"
  | "cloudInfrastructure.loadMetrics"
  | "cloudInfrastructure.loadMetricsAlt"
  | "cloudInfrastructure.networking"
  | "cloudInfrastructure.networkingAlt"
  | "cloudInfrastructure.storageSizes"
  | "cloudInfrastructure.storageSizesAlt"
  | "cloudInfrastructure.virtualServers"
  | "cloudInfrastructure.virtualServersAlt"
  | "cloudInfrastructure.backgroundAlt"
  | "whyChooseTigers.title"
  | "whyChooseTigers.blockUnauthorizedEmail"
  | "whyChooseTigers.blockUnauthorizedEmailDesc"
  | "whyChooseTigers.blockUnauthorizedEmailAlt"
  | "whyChooseTigers.preventEmailSpoofing"
  | "whyChooseTigers.preventEmailSpoofingDesc"
  | "whyChooseTigers.preventEmailSpoofingAlt"
  | "whyChooseTigers.enhanceEmailSecurity"
  | "whyChooseTigers.enhanceEmailSecurityDesc"
  | "whyChooseTigers.enhanceEmailSecurityAlt"
  | "whyChooseTigers.verifyEmail"
  | "whyChooseTigers.verifyEmailDesc"
  | "whyChooseTigers.verifyEmailAlt"
  | "whyChooseTigers.backgroundRightAlt"
  | "whyChooseTigers.backgroundLeftAlt"
  | "websiteBuilder.title"
  | "websiteBuilder.chooseTemplate"
  | "websiteBuilder.chooseTemplateDesc"
  | "whoisToolSectionTwo.description"
  | "whoisTool.whoisTitle"
  | "whoisTool.whoisDescription"
  | "whoisTool.searchButton"
  | "whoisTool.searchPlaceholder"
  | "whoisTool.whatIsWhoisTitle"
  | "whoisTool.whatIsWhoisDescription"
  | "whoisTool.groupImageAlt"
  | "whoisTool.howItWorksTitle"
  | "whoisTool.howItWorksDescription"
  | "whoisTool.sslWhoisImageAlt"
  | "whoisToolSectionTwo.imageAlt"
  | "whoisToolSection.title"
  | "whoisToolSection.description"
  | "whoisToolSection.imageAlt"
  | "keyBenefitsSection.mainTitle"
  | "keyBenefitsSection.mainDescription"
  | "keyBenefitsSection.pciDssTitle"
  | "keyBenefitsSection.pciDssAlt"
  | "keyBenefitsSection.encryptionTitle"
  | "keyBenefitsSection.encryptionAlt"
  | "keyBenefitsSection.secureClientTitle"
  | "keyBenefitsSection.secureClientAlt"
  | "keyBenefitsSection.supportTitle"
  | "keyBenefitsSection.supportAlt"
  | "keyBenefitsSection.warrantyTitle"
  | "keyBenefitsSection.warrantyAlt"
  | "keyBenefitsSection.securityTitle"
  | "keyBenefitsSection.securityAlt"
  | "websiteBuilder.enhanceFunctionality"
  | "websiteBuilder.enhanceFunctionalityDesc"
  | "websiteBuilder.previewSite"
  | "websiteBuilder.previewSiteDesc"
  | "websiteBuilder.publishSave"
  | "websiteBuilder.publishSaveDesc"
  | "websiteBuilder.chooseTemplateAlt"
  | "websiteBuilder.websiteBuilderAlt"
  | "featuresNine.title"
  | "featuresNine.description"
  | "featuresNine.multilingualSites"
  | "featuresNine.languageSupport"
  | "featuresNine.responsiveDesign"
  | "featuresNine.easyTool"
  | "featuresNine.videoTutorials"
  | "featuresNine.plugins"
  | "featuresNine.millionTemplates"
  | "featuresNine.siteMigration"
  | "featuresNine.iconAlt"
  | "featuresNine.rightImageAlt"
  | "featuresNine.leftImageAlt"
  | "wordpressHosting.title"
  | "wordpressHosting.description"
  | "wordpressHosting.startNow"
  | "kubernetes.description"
  | "kubernetes.orderNow"
  | "services.titletwo"
  | "services.reliableHosting"
  | "services.reliableHostingDesc"
  | "services.scalableStorage"
  | "services.scalableStorageDesc"
  | "services.enterpriseHosting"
  | "services.enterpriseHostingDesc"
  | "services.reliableHostingAlt"
  | "services.scalableStorageAlt"
  | "services.enterpriseHostingAlt"
  | "services.backgroundDecorationAlt"
  | "oneClickApps.title"
  | "blogsSection.title"
  | "blogsSection.description"
  | "benefitsSection.mainTitle"
  | "benefitsSection.description"
  | "benefitsSection.trainingTitle"
  | "benefitsSection.trainingAlt"
  | "benefitsSection.leaveTitle"
  | "benefitsSection.leaveAlt"
  | "benefitsSection.rewardsTitle"
  | "benefitsSection.rewardsAlt"
  | "benefitsSection.insuranceTitle"
  | "benefitsSection.insuranceAlt"
  | "joinUsSection.title"
  | "joinUsSection.description"
  | "joinUsSection.button"
  | "jobsSection.title"
  | "jobsSection.description"
  | "jobsSection.button"
  | "jobsSection.rightBackgroundAlt"
  | "jobsSection.leftBackgroundAlt"
  | "jobsSection.lampImageAlt"
  | "oneClickApps.description"
  | "oneClickApps.helmCharts"
  | "oneClickApps.certManager"
  | "oneClickApps.linkerd"
  | "oneClickApps.operators"
  | "oneClickApps.imageAlt"
  | "templates.million"
  | "templates.title"
  | "templates.description"
  | "templates.viewMore"
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
  | "brandGuidelines.colorPaletteTitle"
  | "brandGuidelines.colorPaletteDescription"
  | "brandGuidelines.colorCodesTitle"
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
  | "geoRegions.header"
  | "geoRegions.text"
  | "geoRegions.illustrationAlt"
  | "essentialFeatures.header"
  | "essentialFeatures.serverMonitoringTitle"
  | "essentialFeatures.serverMonitoringAlt"
  | "essentialFeatures.sslCertificateTitle"
  | "essentialFeatures.sslCertificateAlt"
  | "essentialFeatures.threatProtectionTitle"
  | "essentialFeatures.threatProtectionAlt"
  | "essentialFeatures.softaculousInstallerTitle"
  | "essentialFeatures.softaculousInstallerAlt"
  | "essentialFeatures.regularBackupTitle"
  | "essentialFeatures.regularBackupAlt"
  | "essentialFeatures.linuxOsTitle"
  | "essentialFeatures.linuxOsAlt"
  | "essentialFeatures.controlPanelTitle"
  | "essentialFeatures.controlPanelAlt"
  | "essentialFeatures.technicalSupportTitle"
  | "essentialFeatures.technicalSupportAlt"
  | "fullServers.mainTitle"
  | "fullServers.mainDescription"
  | "hostingTiers.mainTitle"
  | "hostingTiers.serverInfoTitle"
  | "hostingTiers.serverInfoSubtitle"
  | "hostingTiers.priceMain"
  | "hostingTiers.priceRenewal"
  | "hostingTiers.buyNowButton"
  | "hostingTiers.featuresButton"
  | "hostingTiers.cpuSpecTitle"
  | "hostingTiers.cpuSpecSubtitle"
  | "hostingTiers.storageSpecTitle"
  | "hostingTiers.storageSpecSubtitle"
  | "hostingTiers.databaseSpecTitle"
  | "hostingTiers.databaseSpecSubtitle"
  | "hostingTiers.ramSpecTitle"
  | "hostingTiers.ramSpecSubtitle"
  | "hostingTiers.bandwidthSpecTitle"
  | "hostingTiers.bandwidthSpecSubtitle"
  | "hostingTiers.controlPanelSpecTitle"
  | "hostingTiers.controlPanelSpecSubtitle"
  | "hostingTiers.germanyFlagAlt"
  | "hostingTiers.finlandFlagAlt"
  | "hostingTiers.ukFlagAlt"
  | "serverServices.mainTitle"
  | "serverServices.emailProtection"
  | "serverServices.malwareProtection"
  | "serverServices.networkSecurity"
  | "serverServices.cloudMigration"
  | "serverServices.threatDetection"
  | "serverServices.identityProtection"
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
  | "payment.titletwo"
  | "hosting.windows"
  | "hosting.windows.description"
  | "hostingProgrammers.title"
  | "hostingProgrammers.description"
  | "hostingProgrammers.startNow"
  | "servicesTwo.title"
  | "servicesTwo.description"
  | "services.scalableStorageTwo"
  | "services.scalableStorageDescTwo"
  | "services.scalableStorageAltTwo"
  | "services.enterpriseHostingTwo"
  | "services.enterpriseHostingDescTwo"
  | "services.enterpriseHostingAltTwo"
  | "services.reliableHostingTwo"
  | "services.reliableHostingDescTwo"
  | "services.reliableHostingAltTwo"
  | "services.backgroundDecorationAltTwo"
  | "imglist.contactUs"
  | "imglist.partnerLogoAlt"
  | "sslSection.title"
  | "sslSection.description"
  | "sslSection.buildTrust"
  | "sslSection.buildTrustDesc"
  | "sslSection.buildTrustAlt"
  | "sslSection.seoRanking"
  | "sslSection.seoRankingDesc"
  | "sslSection.seoRankingAlt"
  | "sslSection.browserCompatibility"
  | "sslSection.browserCompatibilityDesc"
  | "sslSection.browserCompatibilityAlt"
  | "whois.title"
  | "whois.description"
  | "emailHosting.title"
  | "emailHosting.description"
  | "businessNeeds.title"
  | "businessNeeds.brandAwareness"
  | "businessNeeds.brandAwarenessDesc"
  | "businessNeeds.brandAwarenessAlt"
  | "businessNeeds.security"
  | "businessNeeds.securityDesc"
  | "businessNeeds.securityAlt"
  | "businessNeeds.accessCollaboration"
  | "businessNeeds.accessCollaborationDesc"
  | "businessNeeds.accessCollaborationAlt"
  | "emailSecurity.title"
  | "emailSecurity.description"
  | "emailSecurity.backupRestore"
  | "emailSecurity.backupRestoreAlt"
  | "emailSecurity.antiSpamPhishing"
  | "emailSecurity.antiSpamPhishingAlt"
  | "emailSecurity.documentProtection"
  | "emailSecurity.documentProtectionAlt"
  | "emailSecurity.encryption"
  | "emailSecurity.encryptionAlt"
  | "emailSecurity.backgroundAlt"
  | "keyFeaturesTwo.title"
  | "keyFeatures.description"
  | "keyFeatures.mailStorage"
  | "keyFeatures.mailStorageAlt"
  | "keyFeatures.reliableEmail"
  | "keyFeatures.reliableEmailAlt"
  | "keyFeatures.customEmail"
  | "keyFeatures.customEmailAlt"
  | "keyFeatures.calendarSharing"
  | "keyFeatures.calendarSharingAlt"
  | "keyFeatures.spamProtection"
  | "keyFeatures.spamProtectionAlt"
  | "callToAction.title"
  | "callToAction.description"
  | "callToAction.startNow"
  | "callToAction.settingsAlt"
  | "businessHosting.title"
  | "businessHosting.description"
  | "servicesThree.title"
  | "servicesThree.reliableStaticHosting"
  | "servicesThree.reliableStaticHostingDesc"
  | "servicesThree.reliableStaticHostingAlt"
  | "servicesThree.scalableCloudStorage"
  | "servicesThree.scalableCloudStorageDesc"
  | "servicesThree.scalableCloudStorageAlt"
  | "servicesThree.enterpriseStaticHosting"
  | "servicesThree.enterpriseStaticHostingDesc"
  | "servicesThree.enterpriseStaticHostingAlt"
  | "mainFeatures.title"
  | "mainFeatures.description"
  | "languageSelector.saudi"
  | "languageSelector.uae"
  | "languageSelector.sudan"
  | "languageSelector.turkey"
  | "languageSelector.egypt"
  | "languageSelector.oman"
  | "languageSelector.iraq"
  | "languageSelector.syria"
  | "languageSelector.germany"
  | "languageSelector.france"
  | "languageSelector.qatar"
  | "languageSelector.india"
  | "mainFeatures.crossPlatform"
  | "mainFeatures.crossPlatformAlt"
  | "mainFeatures.ddosMitigation"
  | "mainFeatures.ddosMitigationAlt"
  | "mainFeatures.malwareDetection"
  | "mainFeatures.malwareDetectionAlt"
  | "mainFeatures.sslCertificate"
  | "mainFeatures.sslCertificateAlt"
  | "mainFeatures.securityMonitoring"
  | "mainFeatures.securityMonitoringAlt"
  | "mainFeatures.performanceOptimization"
  | "mainFeatures.performanceOptimizationAlt"
  | "mainFeatures.backgroundRightAlt"
  | "mainFeatures.backgroundLeftAlt"
  | "support.title"
  | "support.description"
  | "support.successMessage"
  | "support.cta"
  | "support.settingsChanges"
  | "support.settingsChangesAlt"
  | "support.training"
  | "support.trainingAlt"
  | "support.technicalSupport"
  | "support.technicalSupportAlt"
  | "support.settingsCustomization"
  | "support.settingsCustomizationAlt"
  | "support.dataUserMigration"
  | "support.dataUserMigrationAlt"
  | "support.sharePointMigration"
  | "support.sharePointMigrationAlt"
  | "statsSection.dataCenters"
  | "statsSection.uptime"
  | "statsSection.hostedSites"
  | "statsSection.guaranteedAvailability"
  | "statsSection.customerSatisfaction"
  | "statsSection.dataCentersAlt"
  | "statsSection.uptimeAlt"
  | "statsSection.hostedSitesAlt"
  | "statsSection.guaranteedAvailabilityAlt"
  | "statsSection.customerSatisfactionAlt";

type Translations = Record<TranslationKeys, string>;

const translations: Record<Language, Translations> = {
  arabic: {
    "notFound.title": "الصفحة غير موجودة",
    "notFound.description":
      "عذرًا، الصفحة التي تبحث عنها غير متوفرة أو ربما تم نقلها.",
    "notFound.backToHome": "العودة إلى الصفحة الرئيسية",
    "brandGuidelines.colorPaletteTitle": "ألوان النمور",
    "brandGuidelines.colorPaletteDescription":
      "استخدمنا في التعبير عن هوية محجوز ثلاث ألوان: الأبيض والفيروزي والأسود، وهي ألوان لها طابع رسمي يليق بخدمات الاستضافة والدعم، حيث يرمز اللون الفيروزي إلى سهولة التعامل، والأبيض للدلالة على البساطة، والأسود للدلالة على الجدية، وتم دمجهم في ثلاث طرق كالتالي:",
    "brandGuidelines.colorCodesTitle": "هنا الكود الخاص بكل لون :",
    "brandGuidelines.headerTitle": "إرشادات البراند",
    "brandGuidelines.headerDescription":
      "دليل لعرض الشعار والألوان وأكوادها وهويتها بشكل واضح ومنظم",
    "brandGuidelines.logoTitle": "الشعار",
    "brandGuidelines.logoDescription":
      'يتميز رمز محجوز بالجمع بين هوية ورؤية الشركة. جاءت فكرته من تداخل كلا من حرفي الـ "p" والـ "z" وعند دمج الحرفين معًا تكونت علامة الـ "ما" لا نهاية والتي تعبر عن رؤية الشركة في الخدمة والدعم المتواصل.',
    "brandGuidelines.logoAlt": "شعارين مدمجين",
    "brandGuidelines.logoSizesTitle": "حجم الشعار",
    "brandGuidelines.logoSizesDescription":
      "صمم الشعار في أحجام مختلفة كي يناسب أي بيئة إستخدام",
    "brandGuidelines.logoSizesAlt": "الشعار بأحجام مختلفة",
    "brandGuidelines.typographyTitle": "تايبوجرافي النمور",
    "brandGuidelines.typographyDescription":
      'استخدمنا خط "Cairo" للنصوص الإنجليزية و العربية نظرًا لبساطتها وسهولة قرائتها.',
    "brandGuidelines.typographyFontName": "C a i r o",
    "brandGuidelines.downloadsTitle": "التحميلات",
    "brandGuidelines.downloadsDescription":
      "وفرنا كافة العناصر التي يمكن أن تحتاج إليها عندما تستخدم اسم محجوز في أي تصميم، بدءًا من الشعار وانتهاءً بالمواد الدعائية التي يمكن أن تستخدمها في أي حدث أو مؤتمر.",
    "brandGuidelines.downloadItem1Alt": "شعار دائري أزرق داكن",
    "brandGuidelines.downloadItem1Title": "شعار النمور",
    "brandGuidelines.downloadItem2Alt": "شعار دائري أزرق داكن",
    "brandGuidelines.downloadItem2Title": "شركة النمور",
    "brandGuidelines.downloadItem3Alt":
      "شعار دائري أزرق داكن على خلفية زرقاء فاتحة",
    "brandGuidelines.downloadItem3Title": "شركة النمور",
    "brandGuidelines.downloadItem4Alt": "شعار دائري أزرق داكن",
    "brandGuidelines.downloadItem4Title": "شعار النمور الثانوي",
    "brandGuidelines.downloadPDF": "pdf",
    "brandGuidelines.downloadSVG": "svg",
    "brandGuidelines.downloadPNG": "png",
    "brandGuidelines.identityTitle":
      "وهذه هي الهوية الخاصة بمحجوز نعرضها لكم بأكثر من شكل.",
    "brandGuidelines.identityCard1Title": "شركة النمور",
    "brandGuidelines.identityCard1Alt": "شعار مع نص عربي",
    "brandGuidelines.identityCard2Title": "شركة النمور",
    "brandGuidelines.identityCard2Alt": "شعار مع نص عربي",
    "brandGuidelines.identityBottomAlt":
      "شعارين دائريين، واحد على خلفية رمادية فاتحة وواحد على خلفية بيضاء",
    "domainFeatures.mainTitle": "لماذا تشتري النطاقات من النامور؟",
    "domainFeatures.lockTitle": "قفل النطاق",
    "domainFeatures.lockDescription":
      "اقفل نطاقك لمنع النقل غير المصرح به لأسماء النطاقات الخاصة بك.",
    "domainFeatures.renewalTitle": "معدلات تجديد رائعة",
    "domainFeatures.renewalDescription":
      "عندما يحين وقت تجديد نطاقك، لن تقلق أبداً بشأن كسر البنك.",
    "domainFeatures.autoRenewalTitle": "التجديد التلقائي",
    "domainFeatures.autoRenewalDescription":
      "لن تفقد نطاقك أبداً (حتى لو نسيت) بفضل خيار التجديد التلقائي لدينا.",
    "domainFeatures.managementTitle": "إدارة سهلة",
    "domainFeatures.managementDescription":
      "أدر نطاقك بلوحة تحكم سهلة الاستخدام ولوحة معلومات.",
    "domainFeatures.privacyTitle": "حماية خصوصية Whois",
    "domainFeatures.privacyDescription":
      "تحتاج لبعض الخصوصية؟ سنحمي معلوماتك الشخصية من قاعدة بيانات WHOIS مقابل رسوم صغيرة.",
    "domainFeatures.pricingTitle": "أسعار منخفضة ومجموعة ضخمة",
    "domainFeatures.pricingDescription":
      "سجل نطاقك بسعر منخفض واختر من مجموعة واسعة من الامتدادات.",
    "domainPricingTable.title1": "استكشف الإمكانيات",
    "domainPricingTable.title2": "من قائمة النطاقات الخاصة بنا",
    "domainPricingTable.domain": "النطاق",
    "domainPricingTable.registration": "التسجيل",
    "domainPricingTable.renewal": "التجديد",
    "domainPricingTable.transfer": "النقل",
    "domainPricingTable.protection": "حماية الهوية",
    "domainPricingTable.searchPlaceholder": "بحث...",
    "domainPricingTable.noResults": 'لا توجد نتائج للبحث "{searchTerm}"',
    "domainPricingTable.previous": "السابق",
    "domainPricingTable.next": "التالي",
    "domainPricingTable.currencySymbol": "د.ل ",
    "domainInfographic.titlePart1": "أشياء يجب تذكرها",
    "domainInfographic.titlePart2": "قبل شراء النطاقات",
    "domainInfographic.section1Title": "ابقه بسيطاً",
    "domainInfographic.section1Description":
      "لا تعقد الأمور. اسم النطاق السهل التذكر هو الأفضل دائماً.",
    "domainInfographic.section2Title": "تصرف الآن",
    "domainInfographic.section2Description":
      "كن صادقاً مع علامتك التجارية. كن مميزاً ولكن اختر نطاقاً سيتعرف عليه جمهورك.",
    "domainInfographic.section3Title": "تجنب الشرطات",
    "domainInfographic.section3Description":
      "فقط لأن الإنترنت تقني لا يعني أن اسم نطاقك يجب أن يكون كذلك.",
    "priceDomains.backgroundAlt": "نمط زخرفي للخلفية",
    "priceDomains.title": "اختر من أكثر امتدادات النطاقات شيوعًا",
    "priceDomains.domainName": "اسم النطاق",
    "priceDomains.price": "6.49 د.ل/سنة",
    "priceDomains.originalPrice": "بدلاً من 14.98 د.ل/سنة",
    "priceDomains.domainAriaLabel": "اسم النطاق {tld}",
    "domainSearchSection.title": "ابحث واشترِ نطاق",
    "domainSearchSection.description": "احصل على النطاق الذي كنت تبحث عنه.",
    "domainSearchSection.searchPlaceholder": "اكتب هنا للبحث",
    "domainSearchSection.searchButton": "بحث",
    "domainSearchSection.popular": "شائع",
    "domainSearchSection.geographic": "جغرافي",
    "domainSearchSection.technology": "تكنولوجيا",
    "domainSearchSection.service": "خدمة",
    "domainSearchSection.business": "أعمال",
    "domainSearchSection.media": "إعلام",
    "domainSearchSection.shopping": "تسوق",
    "domainSearchSection.more": "المزيد",
    "domainSearchSection.domainImageAlt": "صورة توضيحية للنطاق",
    "namoorSection.title": "شركة النامور",
    "partnersSection.mainTitle": "شركاء النجاح",
    "partnersSection.rightBackgroundAlt": "خلفية يمين SVG",
    "partnersSection.leftBackgroundAlt": "خلفية يسار SVG",
    "partnersSection.sucuriName": "SUCURI",
    "partnersSection.sucuriDescription":
      "نحن نقدم خدمات الحماية المتقدمة للمواقع الإلكترونية من خلال تقنيات متطورة تضمن الأمان الكامل. نقدم حلول شاملة لحماية المواقع من الهجمات الإلكترونية والبرمجيات الخبيثة. فريقنا المتخصص يعمل على مدار الساعة لضمان استمرارية عمل موقعك بأمان تام.",
    "partnersSection.sucuriLogoAlt": "شعار SUCURI",
    "partnersSection.softaculousName": "Softaculous",
    "partnersSection.softaculousDescription":
      "منصة متكاملة لإدارة التطبيقات والبرمجيات بسهولة تامة. نوفر مكتبة شاملة من التطبيقات الجاهزة للتثبيت بنقرة واحدة. حلولنا تساعد في تبسيط عملية إدارة المواقع والتطبيقات المختلفة بكفاءة عالية ومرونة كبيرة.",
    "partnersSection.softaculousLogoAlt": "شعار Softaculous",
    "partnersSection.linuxName": "Linux",
    "partnersSection.linuxDescription":
      "نظام تشغيل مفتوح المصدر يوفر استقرارًا وأمانًا عاليين. نقدم حلول استضافة متقدمة باستخدام أنظمة لينكس المختلفة. فريقنا المتخصص يضمن الأداء الأمثل والاستقرار الكامل لجميع الخدمات المقدمة.",
    "partnersSection.linuxLogoAlt": "شعار Linux",
    "paymentSection.description":
      "ادفع بالطريقة التي تناسبك واستمتع بتجربة دفع سهلة وسلسة",
    "whoisTool.whoisTitle": "أداة Whois",
    "whoisTool.whoisDescription": "استعلام احترافي عن بيانات الدومين",
    "whoisTool.searchButton": "بحث",
    "whoisTool.searchPlaceholder": "ادخل اسم الدومين",
    "whoisTool.whatIsWhoisTitle": "ما هي أداة Whois؟",
    "whoisTool.whatIsWhoisDescription":
      "Whois هي أداة تُستخدم للاستعلام عن معلومات تسجيل النطاقات، مثل المالك، وتاريخ التسجيل، وتاريخ الانتهاء.",
    "whoisTool.groupImageAlt": "صورة توضيحية لأداة Whois",
    "whoisTool.howItWorksTitle": "كيف تعمل؟",
    "whoisTool.howItWorksDescription":
      "تعمل Whois عبر استعلام قاعدة بيانات عامة لاسترداد تفاصيل تسجيل النطاق المخزنة لدى المسجلين.",
    "whoisTool.sslWhoisImageAlt": "صورة توضيحية لـ SSL و Whois",
    "websiteSuccessCriteria.sslTitle": "شهادات SSL",
    "websiteSuccessCriteria.sslDescription":
      "الحل الأمثل لتأمين موقعك الإلكتروني وحماية بيانات المستخدمين.",
    "websiteSuccessCriteria.cloudflareTitle": "كلاودفلير",
    "websiteSuccessCriteria.cloudflareDescription":
      "الحل المثالي لتجربة ويب أسرع وأكثر أمانًا وموثوقية.",
    "websiteSuccessCriteria.cloudflareEnhanceTitle":
      "عزّز حماية موقعك الإلكتروني من التهديدات السيبرانية وحسّن أداؤه مع كلاودفلير.",
    "websiteSuccessCriteria.cloudflareEnhanceDescription":
      "من الحماية ضد التهديدات السيبرانية إلى تسريع تسليم المحتوى، تعد كلاودفلير شريكك الموثوق في أداء وأمان الويب.",
    "websiteSuccessCriteria.mainTitle":
      "حدد معيارًا جديدًا لنجاح موقعك الإلكتروني",
    "websiteSuccessCriteria.performanceTitle": "أداء فائق السرعة",
    "websiteSuccessCriteria.globalSpeedBoost": "تعزيز السرعة العالمية",
    "websiteSuccessCriteria.contentDelivery": "تحسين تسليم المحتوى",
    "websiteSuccessCriteria.loadBalancing": "توزيع الحمل",
    "websiteSuccessCriteria.latencyReduction": "تقليل وقت الانتقال",
    "websiteSuccessCriteria.globalSpeedBoostIconAlt":
      "أيقونة تعزيز السرعة العالمية",
    "websiteSuccessCriteria.globalSpeedBoostDescription":
      "بفضل شبكة CDN العالمية من كلاودفلير، يتم تحميل موقعك بسرعة للزوار أينما كانوا في العالم.",
    "websiteSuccessCriteria.securityTitle": "أمان لا مثيل له",
    "websiteSuccessCriteria.ddosProtection":
      "الحماية من هجمات حجب الخدمة (DDoS)",
    "websiteSuccessCriteria.webApplicationFirewall":
      "جدار حماية تطبيقات الويب (WAF)",
    "websiteSuccessCriteria.sslTlsEncryption": "تشفير SSL/TLS",
    "websiteSuccessCriteria.botManagement": "إدارة الروبوتات",
    "websiteSuccessCriteria.realTimeThreatAnalysis":
      "تحليل التهديدات في الوقت الفعلي",
    "websiteSuccessCriteria.securityIconAlt": "أيقونة الأمان",
    "websiteSuccessCriteria.ddosProtectionDescription":
      "تم تصميم شبكة كلاودفلير لامتصاص وتخفيف هجمات حجب الخدمة (DDoS)، مما يضمن بقاء موقعك متاحًا حتى أثناء الهجمات المستهدفة.",
    "websiteSuccessCriteria.signUpNow": "سجّل الآن",
    "cloudflareSection.cloudflareTitle": "كلاودفلير",
    "cloudflareSection.cloudflareDescription":
      "الحل المثالي لتجربة ويب أسرع وأكثر أمانًا وموثوقية.",
    "cloudflareSection.cloudflareEnhanceTitle":
      "عزّز حماية موقعك الإلكتروني من التهديدات السيبرانية وحسّن أداؤه مع كلاودفلير.",
    "cloudflareSection.cloudflareEnhanceDescription":
      "من الحماية ضد التهديدات السيبرانية إلى تسريع تسليم المحتوى، تعد كلاودفلير شريكك الموثوق في أداء وأمان الويب.",
    "cloudflareSection.signUpNow": "سجّل الآن",
    "sslSection.sslTitle": "شهادات SSL",
    "sslContent.rightBackgroundAlt": "خلفية يمين مع أيقونات",
    "sslContent.leftBackgroundAlt": "خلفية يسار مع أيقونات",
    "sslContent.trustTitle": "قم بترسيخ موثوقية عملك",
    "sslContent.trustDescription":
      "قم بحماية بيانات موقعك - وبيانات الزائرين - عبر إنشاء اتصال آمن وتشفير البيانات المُقدّمة من شهادات SSL، ودع كافة زوار موقعك يعلمون أن موقع الويب الخاص بك آمن وموثوق من خلال علامة القفل المميزة واختصار https:// في بداية اسم نطاقك.",
    "sslContent.chooseSslTitle": "اختر شهادة SSL المناسبة",
    "sslContent.chooseSslDescription":
      "شركة العنكبوت الليبي توفّر لك مجموعة متنوّعة من شهادات الحماية من أكثر الشركات الموثوقة في المجال عالميًا.",
    "choosePlan.rightBackgroundAlt": "خلفية يمين SVG",
    "choosePlan.leftBackgroundAlt": "خلفية يسار SVG",
    "choosePlan.mainTitle": "اختر الخطة المناسبة",
    "choosePlan.planTitle": "GeoTrust QuickSSL Premium",
    "choosePlan.currency": "د.ل/ربع سنوي",
    "choosePlan.validation": "التحقق من صحة",
    "choosePlan.organization": "Organization",
    "choosePlan.siteSeal": "ختم الموقع",
    "choosePlan.dynamic": "Dynamic",
    "choosePlan.orderNow": "اطلب الآن",
    "websiteSecurity.title":
      "أمن المواقع وتشفير البيانات لم يعد أمرًا اختياريًا بعد اليوم",
    "websiteSecurity.description":
      "إن المواقع التي تحمل علامة 'غير آمن' لم تعد مقبولة بعد الآن. شهادة SSL لم تعد مسألة اختيار، إنها مطلب أساسي في أساسيات أمن مواقع الويب في عالمنا المعاصر. حيث يعمل تشفير البيانات والاتصال الآمن على التخلص من مخاطر الهجمات الإلكترونية الناشئة والمتزايدة والتي يمكن أن تستغل أي ثغرة أمنية.",
    "websiteSecurity.securityImageAlt": "صورة أمن الموقع",
    "beyondProtection.bigBlocksAlt": "خلفية الكتل الكبيرة",
    "beyondProtection.mainTitle": "أكثر من مجرد حماية",
    "beyondProtection.mainDescription":
      "قم بامتلاك مُخدّمك المخصص مع نظام التشغيل المفضل لديك والتطبيقات المثبتة مسبقًا.",
    "beyondProtection.browserCompatibilityTitle":
      "حافظ على ظهور موقعك عبر مختلف المتصفحات",
    "beyondProtection.browserCompatibilityDescription":
      "إذا لم يكن لدى موقعك شهادة SSL، فإن معظم المتصفحات الشهيرة عالميًا ستضع عليه علامة 'غير آمن' مع إظهار تحذير، وقد يصل الأمر ببعض المتصفحات إلى حظره تمامًا عن المستخدم.",
    "beyondProtection.customerTrustAlt": "أيقونة ثقة العملاء",
    "beyondProtection.seoTitle": "رفع ترتيب موقعك في محركات البحث (SEO)",
    "beyondProtection.seoDescription":
      "المواقع المؤمّنة تمتلك ميزة في الحصول على ترتيب أعلى في نتائج محركات البحث، حيث إن الأمان يُعد عاملاً أساسيًا في عملية الترتيب.",
    "beyondProtection.browserFriendlyAlt": "أيقونة التوافق مع المتصفحات",
    "beyondProtection.customerTrustTitle": "بناء ثقة العملاء",
    "beyondProtection.customerTrustDescription":
      "أظهر لعملائك أن نشاطك التجاري عبر الإنترنت آمن وموثوق به من خلال إبلاغهم بأن بياناتهم الحساسة ومدفوعاتهم عبر الإنترنت محمية بالكامل.",
    "beyondProtection.seoIncreaseAlt": "أيقونة زيادة تحسين محركات البحث",

    "domainRegistrationSA.backgroundAlt": "صورة خلفية",
    "domainRegistrationSA.numberOneAlt": "صورة تسجيل رقم 1",
    "domainRegistrationSA.title": "احصل على اسم نطاق sa. من المسجل رقم #1",
    "domainRegistrationSA.description":
      "الآلاف من أسماء نطاق sa. تم تسجيلها بالفعل، سارع بالتسجيل واحجز اسم نطاقك الفريد sa. الآن مع عدة امتدادات متنوعة متاحة",
    "domainRegistrationSA.saTitle": "SA",
    "domainRegistrationSA.saPrice": "فقط 20 دولار",
    "domainRegistrationSA.saCircleAlt": "أيقونة دائرة SA",
    "domainRegistrationSA.eduSa": ".edu.sa",
    "domainRegistrationSA.comSa": ".com.sa",
    "domainRegistrationSA.netSa": ".net.sa",
    "domainRegistrationSA.orgSa": ".org.sa",
    "domainRegistrationSA.medSa": ".med.sa",
    "domainRegistrationSA.idSa": ".id.sa",
    "domainRegistrationSA.schSa": ".sch.sa",
    "domainRegistrationSA.plcSa": ".plc.sa",
    "domainRegistrationSA.worldIconAlt": "أيقونة العالم",
    "domainRegistrationSA.price": "فقط 20 دولار",
    "domainRegistrationSA.approvalTitle":
      "أسماء النطاق التي تحتاج إلى موافقة المسجل",
    "domainRegistrationSA.schSaApproval": "sch.sa للمدارس.",
    "domainRegistrationSA.schSaApprovalDesc":
      "خطاب رسمي إلى شركة السعودية للاتصالات والتقنية؛ لطلب الموافقة على تسجيل اسم النطاق.",
    "domainRegistrationSA.medSaApproval": "med.sa للمستشفيات والعيادات.",
    "domainRegistrationSA.medSaApprovalDesc":
      "خطاب رسمي إلى شركة السعودية للاتصالات والتقنية؛ لطلب الموافقة على تسجيل اسم النطاق.",
    "domainRegistrationSA.govSaApproval": "gov.sa للحكومات.",
    "domainRegistrationSA.govSaApprovalDesc":
      "خطاب رسمي إلى شركة السعودية للاتصالات والتقنية؛ لطلب الموافقة على تسجيل اسم النطاق.",
    "domainRegistrationSA.govSaAltApproval": "gov.sa للجهات الحكومية.",
    "domainRegistrationSA.govSaAltApprovalDesc":
      "يتم تسجيله مباشرة مع شركة السعودية للاتصالات والتقنية بعد موافقة الهيئة العامة للاتصالات وطلب تسجيله تحت لوحة تحكم السعودية الرقمي.",
    "domainStatsSA.title": "إحصائيات sa.",
    "domainStatsSA.description": "القِ نظرة على الأرقام:",
    "domainStatsSA.chooseDomain": "اختر نطاقك الخاص",
    "domainStatsSA.achievement": "نفتخر بتسجيلنا لأكثر من 1,800 اسم نطاق!",
    "domainStatsSA.backgroundRightAlt": "خلفية SVG يمين",
    "domainStatsSA.backgroundLeftAlt": "خلفية SVG يسار",
    "languageSelector.saudi": "السعودية",
    "languageSelector.uae": "الإمارات",
    "languageSelector.sudan": "السودان",
    "languageSelector.turkey": "تركيا",
    "languageSelector.egypt": "مصر",
    "languageSelector.oman": "عمان",
    "languageSelector.iraq": "العراق",
    "languageSelector.syria": "سوريا",
    "languageSelector.germany": "ألمانيا",
    "languageSelector.france": "فرنسا",
    "languageSelector.qatar": "قطر",
    "languageSelector.india": "الهند",
    "serverLocations.download": "تنزيل",
    "serverLocations.upload": "رفع",
    "serverLocations.comingSoonTitle": "قريباً",
    "serverLocations.comingSoonMessage": "سيتم إطلاق هذا الخادم قريباً",
    "serverLocations.mapAlt": "خريطة العالم",

    "dashboardWelcome.title": "مرحبًا بك في لوحة التحكم الخاصة بك",
    "dashboardWelcome.description":
      "إدارة مجالك بسهولة، تحقق من إحصائياتك، وراقب الأداء من مكان واحد.",
    "dashboardWelcome.imageAlt": "لوحة التحكم",
    "dashboardOverview.title": "نظرة عامة على لوحة التحكم",
    "dashboardOverview.description":
      "الوصول إلى البيانات في الوقت الفعلي وقياسات الأداء مباشرة من لوحة التحكم الخاصة بك. تتبع حالة مجالك، إحصائيات الزوار، والكثير غيرها في مكان واحد.",
    "dashboardOverview.imageAlt": "صورة نظرة عامة على لوحة التحكم",
    "performanceTracking.title": "تتبع الأداء",
    "performanceTracking.description":
      "ابق على اطلاع دائم بأداء مجالك. راقب حركة المرور، التجديدات، والاستخدام بسرعة.",
    "performanceTracking.mobileAlt": "صورة أداء الجوال",
    "performanceTracking.backgroundAlt": "صورة طبقة الخلفية",
    "performanceTracking.patternAlt": "نمط SVG زخرفي",
    "domainManagement.title": "إدارة المجال",
    "domainManagement.description":
      "قم بإدارة مجالك بسهولة. قم بتسجيل مجالات جديدة، وتجديد المجالات الحالية، وعرض جميع التفاصيل ذات الصلة في الوقت الفعلي.",
    "domainManagement.imageAlt": "صورة سطح المكتب",
    "techStack.mainTitle": "التقنية المستخدمة في بناء المشروع",
    "techStack.reactTitle": "React",
    "techStack.reactAlt": "أيقونة React",
    "techStack.laravelTitle": "Laravel",
    "techStack.laravelAlt": "شعار Laravel",
    "techStack.phpTitle": "PHP",
    "techStack.phpAlt": "شعار PHP",
    "techStack.javascriptTitle": "JavaScript",
    "techStack.javascriptAlt": "شعار JavaScript",
    "techStack.lagomTitle": "Lagom Theme",
    "techStack.lagomAlt": "شعار Lagom Theme",
    "techStack.whatsappApiTitle": "واجهة برمجة WhatsApp",
    "techStack.whatsappApiAlt": "أيقونة واجهة برمجة WhatsApp",
    "techStack.whmcsTitle": "WHMCS",
    "techStack.whmcsAlt": "شعار WHMCS",
    "keyFeaturesTwo.mainTitle": "مزايا رئيسية",
    "keyFeaturesTwo.mainDescription":
      "من خلال منتجاتنا وخدماتنا السحابية، ستجد أننا نلبي 100% من احتياجات عملك وبياناتك، مع توفير أعلى مستويات الأمان لبنيتك التحتية.",
    "keyFeaturesTwo.cloudHostingTitle": "استضافة سحابية مشتركة",
    "keyFeaturesTwo.cloudHostingDescription":
      "استضف موقعك بسهولة وراحة بتكلفة اقتصادية! مع الاستضافة السحابية المشتركة.",
    "keyFeaturesTwo.cloudHostingAlt": "أيقونة الاستضافة السحابية المشتركة",
    "keyFeaturesTwo.lsSuiteTitle": "مجموعة LS",
    "keyFeaturesTwo.lsSuiteDescription":
      "البريد الإلكتروني المهني، التخزين عبر الإنترنت، الاجتماعات المؤسسية، والمزيد. تم بناؤه للعمل.",
    "keyFeaturesTwo.lsSuiteAlt": "أيقونة مجموعة LS",
    "keyFeaturesTwo.jpaasTitle": "JPaaS منصة كخدمة",
    "keyFeaturesTwo.jpaasDescription": "ادارة السيرفر مع تحكم كامل",
    "keyFeaturesTwo.jpaasAlt": "أيقونة منصة JPaaS",
    "keyFeaturesTwo.learnMore": "اعرف المزيد",

    "speedSection.title": "السرعة",
    "speedSection.description":
      "حماية بيانات موقعك، وإظهار شهادة الأمان الخاصة بك لزوارك",
    "launchAppsSection.mainTitle": "أطلق تطبيقاتك في ثواني!",
    "launchAppsSection.mainDescription":
      "قم بإنشاء أو تشغيل مختلف تطبيقاتك، مع الدعم الشامل للمنصة",
    "launchAppsSection.appAlt": "أيقونة تطبيق",
    "launchAppsSection.dockerAlt": "أيقونة Docker",
    "launchAppsSection.phpAlt": "أيقونة PHP",
    "launchAppsSection.pythonAlt": "أيقونة Python",
    "featuresGrid.disasterRecovery": "التعافي من الكوارث المستند إلى السحابة",
    "featuresGrid.emailProtection": "حماية البريد الإلكتروني والأرشفة",
    "featuresGrid.threatDetection": "اكتشاف التهديدات المتقدمة والاستجابة لها",
    "featuresGrid.centralizedManagement1": "إدارة ومراقبة مركزية",
    "featuresGrid.centralizedManagement2": "إدارة ومراقبة مركزية",
    "featuresGrid.centralizedManagement3": "إدارة ومراقبة مركزية",
    "featuresGrid.centralizedManagement4": "إدارة ومراقبة مركزية",
    "featuresGrid.centralizedManagement5": "إدارة ومراقبة مركزية",
    "featuresGrid.centralizedManagement6": "إدارة ومراقبة مركزية",
    "whoisToolSectionTwo.description":
      "تُعد أداة WHOIS خدمة مفيدة تتيح الحصول على معلومات شاملة حول أسماء النطاقات، مثل اسم المالك، وتفاصيل التسجيل، وتاريخ الانتهاء، وبيانات الاتصال ذات الصلة. تساعد هذه الأداة في التأكد من ملكية النطاق، ومعرفة ما إذا كان متاحًا للتسجيل، بالإضافة إلى التحقق من موثوقية المواقع الإلكترونية. ويعتمد عليها العديد من مسجلي النطاقات والمتخصصين في الأمن السيبراني لأغراض البحث والحماية والالتزام بالمعايير القانونية.",
    "whoisToolSectionTwo.imageAlt": "صورة أداة WHOIS",
    "whoisToolSection.title": "ما هي أداة WHOIS؟",
    "whoisToolSection.description":
      "أداة WHOIS هي خدمة توفر معلومات حول أسماء النطاقات، بما في ذلك مالك النطاق وتفاصيل التسجيل وتاريخ الانتهاء ومعلومات الاتصال المرتبطة به. تساعد المستخدمين على التحقق من ملكية النطاق، وفحص توفره، والتحقق من مصداقية المواقع الإلكترونية. ويستخدم العديد من مسجلي النطاقات والمتخصصين في الأمن السيبراني هذه الأداة لأغراض البحث والأمن والامتثال.",
    "whoisToolSection.imageAlt": "صورة أمان WHOIS",
    "keyBenefitsSection.mainTitle": "الفوائد الرئيسية",
    "keyBenefitsSection.mainDescription":
      "قم بامتلاك مُخدّمك المخصص مع نظام التشغيل المفضل لديك والتطبيقات المثبتة مسبقًا.",
    "keyBenefitsSection.pciDssTitle": "التوافق مع معيار PCI/DSS",
    "keyBenefitsSection.pciDssAlt": "أيقونة التوافق",
    "keyBenefitsSection.encryptionTitle": "تشفير البيانات بمفتاح 256 بت",
    "keyBenefitsSection.encryptionAlt": "أيقونة التشفير",
    "keyBenefitsSection.secureClientTitle": "تأمين بيانات العملاء",
    "keyBenefitsSection.secureClientAlt": "أيقونة تأمين البيانات",
    "keyBenefitsSection.supportTitle": "الدعم الفني",
    "keyBenefitsSection.supportAlt": "أيقونة الدعم الفني",
    "keyBenefitsSection.warrantyTitle": "الضمان",
    "keyBenefitsSection.warrantyAlt": "أيقونة الضمان",
    "keyBenefitsSection.securityTitle": "رمز القفل واختصار https://",
    "keyBenefitsSection.securityAlt": "أيقونة الأمان",
    "onlinePaymentSection.mainTitle": "الدفع عبر الإنترنت",
    "onlinePaymentSection.mainDescription":
      "استمتع بعملية دفع عبر الإنترنت سريعة ومباشرة",
    "onlinePaymentSection.americanExpressAlt": "أيقونة American Express",
    "onlinePaymentSection.visaAlt": "أيقونة Visa",
    "onlinePaymentSection.masterCardAlt": "أيقونة MasterCard",
    "paymentMethodsSection.title": "طرق الدفع",
    "paymentMethodsSection.description":
      "ادفع بالطريقة التي تناسبك واستمتع بتجربة دفع سهلة وسلسة",
    "paymentMethodsSection.mainTitle": "طرق الدفع عبر التحويل البنكي",
    "paymentMethodsSection.mainDescription":
      "ادفع بسهولة وأمان عبر التحويل البنكي",
    "paymentMethodsSection.bankakTitle": "بنكك",
    "paymentMethodsSection.bankakDescription":
      "تعرف على المزيد عن بنكك، خدماته، وكيف يساعد في إدارة معاملاتك المالية بأمان وكفاءة.",
    "paymentMethodsSection.bankakAlt": "أيقونة بنكك",
    "paymentMethodsSection.ibanTitle": "رقم الحساب المصرفي الدولي (IBAN)",
    "paymentMethodsSection.ibanDescription":
      "افهم أهمية رقم IBAN للمعاملات الدولية وكيف يضمن تحويلات مالية آمنة ودقيقة.",
    "paymentMethodsSection.ibanAlt": "أيقونة IBAN",
    "paymentMethodsSection.instantTitle": "التحويلات الفورية",
    "paymentMethodsSection.instantDescription":
      "أرسل واستلم الأموال فورًا باستخدام حلول الدفع الآمنة والموثوقة المصممة للمعاملات السريعة.",
    "paymentMethodsSection.instantAlt": "أيقونة التحويلات الفورية",
    "paymentMethodsSection.oowCashTitle": "أوو-كاش",
    "paymentMethodsSection.oowCashDescription":
      "اكتشف مزايا أوو-كاش للمدفوعات الرقمية السلسة والإدارة المالية السهلة.",
    "paymentMethodsSection.oowCashAlt": "أيقونة أوو-كاش",
    "paymentMethodsSection.moreLink": "المزيد",
    "walletsSection.mainTitle": "المحافظ الإلكترونية",
    "walletsSection.mainDescription":
      "احصل على ترخيص واحد للخوادم الخاصة والخوادم المخصصة الكاملة",
    "walletsSection.sdadTitle": "دفع",
    "walletsSection.sdadDescription":
      "قم بإجراء مدفوعات آمنة وسريعة مع حلول الدفع الموثوقة لدينا، مما يضمن تجربة معاملة سلسة.",
    "walletsSection.sdadAlt": "أيقونة الدفع",
    "walletsSection.paypalTitle": "بايبال",
    "walletsSection.paypalDescription":
      "أرسل واستلم الأموال من جميع أنحاء العالم باستخدام بايبال، منصة الدفع الإلكترونية الموثوقة التي تقدم معاملات آمنة.",
    "walletsSection.paypalAlt": "أيقونة بايبال",
    "walletsSection.vodafoneTitle": "فودافون كاش",
    "walletsSection.vodafoneDescription":
      "قم بتحويل الأموال بسهولة، ودفع الفواتير، وشحن رصيدك مع خدمة الدفع عبر الهاتف المحمول من فودافون المريحة.",
    "walletsSection.vodafoneAlt": "أيقونة فودافون كاش",
    "walletsSection.zainTitle": "زين كاش",
    "walletsSection.zainDescription":
      "استمتع بمعاملات مالية سلسة مع زين كاش، التي توفر مدفوعات رقمية آمنة وتحويلات مالية.",
    "walletsSection.zainAlt": "أيقونة زين كاش",
    "walletsSection.moreLink": "المزيد",
    "cryptocurrenciesSection.mainTitle": "العملات الرقمية",
    "cryptocurrenciesSection.mainDescription":
      "احصل على ترخيص واحد للخوادم الخاصة والخوادم المخصصة الكاملة",
    "cryptocurrenciesSection.ethereumAlt": "أيقونة Ethereum",
    "cryptocurrenciesSection.binanceAlt": "أيقونة Binance",
    "cryptocurrenciesSection.bitcoinAlt": "أيقونة Bitcoin",
    "cryptocurrenciesSection.tetherAlt": "أيقونة Tether",
    "traditionalPaymentSection.mainTitle": "طرق الدفع التقليدية",
    "traditionalPaymentSection.cdnTitle": "تحسين أداء الموقع عبر CDN",
    "traditionalPaymentSection.cdnDescription":
      "قم بربط اسم نطاق شركتك لتعزيز الوعي بالعلامة التجارية وتقديم صورة أكثر احترافية باستخدام بريد إلكتروني مخصص",
    "traditionalPaymentSection.cdnAlt": "أيقونة البطاقة",
    "traditionalPaymentSection.ddosTitle": "التخفيف من هجمات DDoS",
    "traditionalPaymentSection.ddosDescription":
      "يمكن أن تؤدي هجمات الحرمان من الخدمة الموزعة (DDoS) إلى تعطيل عملك بالكامل. نحن نحجب هجمات DDoS على المستويات 3 و4 و7 ونؤمن عرض النطاق الترددي أثناء الهجمات.",
    "traditionalPaymentSection.ddosAlt": "أيقونة التحويل",
    "traditionalPaymentSection.securityTitle":
      "الحماية من الاختراق والبرمجيات الضارة",
    "traditionalPaymentSection.securityDescription":
      "قم بحماية موقعك من البرمجيات الضارة ومنع محاولات الاختراق، وهجمات يوم الصفر، وهجمات تخمين كلمات المرور بالقوة الغاشمة.",
    "traditionalPaymentSection.securityAlt": "أيقونة النقدية",
    "blogsSection.title": "المدونات",
    "blogsSection.description": "تصفح آخر المقالات وأحدثها عن نمور",
    "benefitsSection.mainTitle": "المزايا",
    "benefitsSection.description":
      "نوفر بيئة عمل مرنة، تدريبًا مستمرًا، ومكافآت للأداء المتميز.",
    "benefitsSection.trainingTitle": "التدريب / المساعدة التعليمية",
    "benefitsSection.trainingAlt": "أيقونة التدريب",
    "benefitsSection.leaveTitle": "الإجازات الشخصية والمرضية",
    "benefitsSection.leaveAlt": "أيقونة الإجازات",
    "benefitsSection.rewardsTitle":
      "المكافآت (الأداء المتميز، تحقيق هدف، اجتياز مرحلة)",
    "benefitsSection.rewardsAlt": "أيقونة المكافآت",
    "benefitsSection.insuranceTitle": "تأمين صحّي",
    "benefitsSection.insuranceAlt": "أيقونة التأمين الصحي",
    "joinUsSection.title": "انضم الينا الأن",
    "joinUsSection.description":
      "نؤمن بأن فريقنا هو أساس نجاحنا، ونسعى لتوفير بيئة عمل محفزة مع الاستثمار المستمر في تطوير مهاراتهم ليواكبوا جديد خدماتنا.",
    "joinUsSection.button": "الوظائف المتاحة",
    "jobsSection.title": "الوظائف المتاحة",
    "jobsSection.description":
      "مهمتنا هي قيادة التطور التقني محليًا، اقتصاديًا وثقافيًا، ونحتاج إلى أشخاص شغوفين ومجتهدين لتحقيق هذا الهدف!",
    "jobsSection.button": "الوظائف المتاحة",
    "jobsSection.rightBackgroundAlt": "خلفية يمين",
    "jobsSection.leftBackgroundAlt": "خلفية يسار",
    "jobsSection.lampImageAlt": "صورة المصباح",

    "countrySelector.italyName": "إيطاليا",
    "countrySelector.franceName": "فرنسا",
    "countrySelector.germanyName": "ألمانيا",
    "countrySelector.japanName": "اليابان",
    "countrySelector.finlandName": "فنلندا",
    "countrySelector.usaName": "أمريكا",
    "countrySelector.turkeyName": "تركيا",
    "countrySelector.italyFlagAlt": "علم إيطاليا",
    "countrySelector.franceFlagAlt": "علم فرنسا",
    "countrySelector.germanyFlagAlt": "علم ألمانيا",
    "countrySelector.japanFlagAlt": "علم اليابان",
    "countrySelector.finlandFlagAlt": "علم فنلندا",
    "countrySelector.usaFlagAlt": "علم أمريكا",
    "countrySelector.turkeyFlagAlt": "علم تركيا",
    "standalone.serverDescription":
      "يمكنك امتلاك خادم مخصص مع نظام التشغيل الذي تفضله والتطبيقات المثبتة مسبقًا.",
    "geoRegions.header": "تعدد المناطق الجغرافية",
    "geoRegions.text":
      "قم بإدارة وتشغيل تطبيقاتك عبر مناطق أجهزة متعددة من خلال واجهة مستخدم سهلة وموحدة، مما يتيح لك نقلها بسلاسة لتكون أقرب إلى عملائك.",
    "geoRegions.illustrationAlt": "رسم توضيحي للمناطق الجغرافية",
    "essentialFeatures.header":
      "استمتع بمجموعة من الميزات الضرورية التي تضمن لك تجربة متكاملة وفعالة مع خدماتنا، بغض النظر عن الخطة التي تختارها",
    "essentialFeatures.serverMonitoringTitle": "مراقبة الخادم على مدار الساعة",
    "essentialFeatures.serverMonitoringAlt": "أيقونة مراقبة الخادم",
    "essentialFeatures.sslCertificateTitle": "شهادة SSL مجانية",
    "essentialFeatures.sslCertificateAlt": "أيقونة شهادة SSL",
    "essentialFeatures.threatProtectionTitle": "حمايتك من التهديدات الضارة",
    "essentialFeatures.threatProtectionAlt": "أيقونة الحماية من التهديدات",
    "essentialFeatures.softaculousInstallerTitle": "برنامج Softaculous المثبت",
    "essentialFeatures.softaculousInstallerAlt": "أيقونة برنامج Softaculous",
    "essentialFeatures.regularBackupTitle": "نسخ احتياطي منتظم",
    "essentialFeatures.regularBackupAlt": "أيقونة النسخ الاحتياطي",
    "essentialFeatures.linuxOsTitle": "نظام التشغيل لينكس",
    "essentialFeatures.linuxOsAlt": "أيقونة نظام لينكس",
    "essentialFeatures.controlPanelTitle": "لوحة التحكم Cpanel/Plesk",
    "essentialFeatures.controlPanelAlt": "أيقونة لوحة التحكم",
    "essentialFeatures.technicalSupportTitle": "دعم فني متواصل",
    "essentialFeatures.technicalSupportAlt": "أيقونة الدعم الفني",
    "fullServers.mainTitle": "السيرفرات الكاملة المخصصة",
    "fullServers.mainDescription":
      "نحن نقدم لك استضافة مشتركة سهلة الاستخدام مع أدوات مبتكرة تساعدك على بناء وإدارة موقعك بكل سهولة",

    "hostingTiers.mainTitle": "خطط السيرفرات المخصصة",
    "hostingTiers.serverInfoTitle": "معلومات السيرفر",
    "hostingTiers.serverInfoSubtitle": "اختر السيرفر المناسب لاحتياجاتك",
    "hostingTiers.priceMain": "31.99",
    "hostingTiers.priceRenewal": "20 ر.س/شهر عند التجديد",
    "hostingTiers.buyNowButton": "اشتر الآن",
    "hostingTiers.featuresButton": "المزايا",
    "hostingTiers.cpuSpecTitle": "32 نواة بسرعة 2.4 جيجاهرتز",
    "hostingTiers.cpuSpecSubtitle": "نتيجة الاختبار: 15,390",
    "hostingTiers.storageSpecTitle": "2 أقراص SSD بسعة 250 جيجابايت",
    "hostingTiers.storageSpecSubtitle": "قابلة للتوسيع حتى 8 أقراص",
    "hostingTiers.databaseSpecTitle": "1 قاعدة بيانات",
    "hostingTiers.databaseSpecSubtitle": "قابلة للتوسيع حتى 3 قواعد بيانات",
    "hostingTiers.ramSpecTitle": "64 جيجابايت",
    "hostingTiers.ramSpecSubtitle": "قابل للزيادة حتى 384 جيجابايت",
    "hostingTiers.bandwidthSpecTitle": "سرعة 3 جيجابت في الثانية",
    "hostingTiers.bandwidthSpecSubtitle":
      "100 تيرابايت من البيانات المجانية شهريًا",
    "hostingTiers.controlPanelSpecTitle": "سي بانل/WHM، بليسك",
    "hostingTiers.controlPanelSpecSubtitle": "إصدار استضافة الويب Obsidian",
    "hostingTiers.germanyFlagAlt": "علم ألمانيا",
    "hostingTiers.finlandFlagAlt": "علم فنلندا",
    "hostingTiers.ukFlagAlt": "علم المملكة المتحدة",
    "serverServices.mainTitle": "كل الخدمات تتضمن",
    "serverServices.emailProtection": "حماية البريد الإلكتروني والفيروسية",
    "serverServices.malwareProtection":
      "الحماية من البرامج الخبيثة ومكافحة برامج الفدية الضارة",
    "serverServices.networkSecurity":
      "التتبع والاحتيال والأنشطار للشبكات المعلنة والسرقة والتشهير والتخصيص",
    "serverServices.cloudMigration": "الانتقال من التكوين المستحيل إلى السحابة",
    "serverServices.threatDetection":
      "اكتشاف التهديدات المتقدمة والاستجابة لها",
    "serverServices.identityProtection": "حماية الهوية الإلكترونية وأجهزتها",

    "backupsSection.title": "النسخ الاحتياطي",
    "backupsSection.description": "نسخ احتياطية تلقائية دائمة!",
    "supportParagraph.description":
      "إذا كنت أحد عملاء الشركة، يمكنك التواصل معنا بسهولة عبر حسابك للوصول إلى فريق الدعم الفني أو المبيعات . نحن ملتزمون بتقديم أفضل خدمة وحلول سريعة تناسب احتياجاتك.",
    "supportSectionTwo.helpCenter": "مركز المساعدة",
    "supportSectionTwo.serverStatus": "حالة السيرفر",
    "supportSectionTwo.subscriberServices": "خدمات المشتركين",
    "supportSectionTwo.helpCenterAlt": "أيقونة مركز المساعدة",
    "supportSectionTwo.serverStatusAlt": "أيقونة حالة السيرفر",
    "supportSectionTwo.subscriberServicesAlt": "أيقونة خدمات المشتركين",
    "supportSectionTwo.emailService": "خدمة البريد الإلكتروني",
    "supportSectionTwo.phone": "الهاتف",
    "supportSectionTwo.location": "الموقع",
    "supportSectionTwo.emailServiceAlt": "أيقونة البريد الإلكتروني",
    "supportSectionTwo.phoneAlt": "أيقونة الهاتف",
    "supportSectionTwo.locationAlt": "أيقونة الموقع",
    "supportSectionTwo.mapTitle": "موقعنا على الخريطة",
    "supportSectionTwo.locationValue": "الرياض، عليا، السعودية",

    "contactForm.title": "لم تجد إجابتك بعد؟ احصل على الدعم الفني الآن.",
    "contactForm.description":
      "مع العديد من الحلول الفريدة يمكنك بسهولة بناء صفحة دون الحاجة إلى البرمجة. قم ببناء موقعك الاستشاري التالي في غضون دقائق قليلة.",
    "contactForm.salesTab": "المبيعات",
    "contactForm.customizationTab": "التخصيص",
    "contactForm.trendsTab": "الصيحات",
    "contactForm.pricesTab": "الاسعار",
    "contactForm.fullNameLabel": "الاسم بالكامل",
    "contactForm.usernameLabel": "معرف المستخدم",
    "contactForm.messageLabel": "رسالتك",
    "contactForm.languageLabel": "بأي لغه تتواصل معنا؟",
    "contactForm.languagePlaceholder": "اختر لغة",
    "contactForm.languageArabic": "العربية",
    "contactForm.languageEnglish": "English",
    "contactForm.languageSpanish": "Español",
    "contactForm.submitButton": "إرسال",
    "contactForm.contactAlternative": "او اتصل بنا علي",

    "loginSection.logoAlt": "شعار",
    "loginSection.emailIconAlt": "أيقونة البريد الإلكتروني",
    "loginSection.passwordIconAlt": "أيقونة القفل",
    "loginSection.footerLogoAlt": "شعار التذييل",
    "loginSection.title": "الدخول",
    "loginSection.emailPlaceholder": "أدخل بريدك الإلكتروني",
    "loginSection.passwordPlaceholder": "أدخل كلمة المرور",
    "loginSection.forgotPassword": "فقدت بيانات الدخول؟",
    "loginSection.loginButton": "الدخول",
    "loginSection.noAccount": "ليس لديك حساب؟",
    "loginSection.createAccount": "إنشاء حساب جديد",
    "softaculousSection.title": "استضافة سوفت كلاوز",
    "softaculousSection.description":
      "تثبيت بنقرة واحدة لأكثر من 400 تطبيق باستخدام سوفت كلاوز",
    "appHostingSection.title": "استضافة التطبيقات",
    "appHostingSection.description":
      "كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة",
    "appHostingSection.viewPricing": "عرض الأسعار",
    "appHostingSection.createAccount": "انشاء حساب",
    "ecommerceSection.title": "التجارة الإلكترونية",
    "ecommerceSection.cyclosName": "سايكلوس 4 برو",
    "ecommerceSection.magentoName": "ماجنتو",
    "ecommerceSection.magentoClusterName": "ماجنتو كلاستر",
    "ecommerceSection.maianCartName": "مايان كارت",
    "ecommerceSection.openCartName": "أوبن كارت",
    "ecommerceSection.prestaShopName": "بريستاشوب",
    "ecommerceSection.cyclosDescription":
      "سايكلوس 4 برو هي منصة دفع للشركات والمؤسسات الكبيرة",
    "ecommerceSection.magentoDescription":
      "ماجنتو هي برمجية ومنصة تجارة إلكترونية موثوقة من أفضل العلامات التجارية في العالم. نمي عملك عبر الإنترنت مع ماجنتو",
    "ecommerceSection.magentoClusterDescription":
      "توسع آلي وتوافرية عالية لمجموعة ماجنتو مع موازنة التحميل، تكرار البيانات، تخزين المحتوى المؤقت وتخزين جلسات المستخدم",
    "ecommerceSection.maianCartDescription":
      "مايان كارت هي منصة تجارة إلكترونية سريعة وقوية ومجانية مبنية باستخدام PHP وMySQL، تحتوي على جميع الميزات التي تحتاجها لتشغيل متجرك الإلكتروني",
    "ecommerceSection.openCartDescription":
      "أوبن كارت هو نظام تسوق عبر الإنترنت مفتوح المصدر مبني على PHP",
    "ecommerceSection.prestaShopDescription":
      "بريستاشوب هي حل مفتوح المصدر وقابل للتخصيص بالكامل لبيع المنتجات عبر الإنترنت، وهو فعال وسريع وسهل الاستخدام",
    "ecommerceSection.cyclosLogoAlt": "شعار سايكلوس 4 برو",
    "ecommerceSection.magentoLogoAlt": "شعار ماجنتو",
    "ecommerceSection.maianCartLogoAlt": "أيقونة عربة التسوق مايان كارت",
    "ecommerceSection.openCartLogoAlt": "شعار أوبن كارت",
    "ecommerceSection.prestaShopLogoAlt": "شعار بريستاشوب",
    "ecommerceSection.launchNow": "ابدأ الآن",
    "statsSection.dataCenters": "مراكز المعلومات",
    "statsSection.uptime": "الاستقلالية",
    "statsSection.hostedSites": "المواقع المستضافة",
    "statsSection.guaranteedAvailability": "الوقت المتاح مضمون",
    "statsSection.customerSatisfaction": "رضا العملاء",
    "statsSection.dataCentersAlt": "أيقونة مراكز المعلومات",
    "statsSection.uptimeAlt": "أيقونة الاستقلالية",
    "statsSection.hostedSitesAlt": "أيقونة المواقع المستضافة",
    "statsSection.guaranteedAvailabilityAlt": "أيقونة الوقت المتاح مضمون",
    "statsSection.customerSatisfactionAlt": "أيقونة رضا العملاء",

    "contactSection.description":
      "هل أنت مهتم بمعرفة كيف يمكننا مساعدة عملك على النجاح؟ . اتصل بنا .",
    "contactSection.helpTitle": "هل تحتاج مساعدة؟",
    "contactSection.helpDescription": "تواصل معنا واحصل على مساعدة",
    "contactSection.contactButton": "اتصل الان",
    "contactSection.microsoftLogoAlt": "شعار مايكروسوفت",
    "contactSection.partner1LogoAlt": "شعار شريك 1",
    "contactSection.partner2LogoAlt": "شعار شريك 2",
    "contactSection.partner3LogoAlt": "شعار شريك 3",
    "contactSection.partner4LogoAlt": "شعار شريك 4",

    "statsSectionTwo.dataCenters": "مراكز المعلومات",
    "statsSectionTwo.uptime": "الاستقلالية",
    "statsSectionTwo.hostedSites": "المواقع المستضافة",
    "statsSectionTwo.guaranteedAvailability": "الوقت المتاح مضمون",
    "statsSectionTwo.customerSatisfaction": "رضا العملاء",
    "statsSectionTwo.dataCentersAlt": "أيقونة مراكز المعلومات",
    "statsSectionTwo.uptimeAlt": "أيقونة الاستقلالية",
    "statsSectionTwo.hostedSitesAlt": "أيقونة المواقع المستضافة",
    "statsSectionTwo.guaranteedAvailabilityAlt": "أيقونة الوقت المتاح مضمون",
    "statsSectionTwo.customerSatisfactionAlt": "أيقونة رضا العملاء",
    "achievementsSectionTwo.title": "إنجازاتنا",
    "achievementsSectionTwo.description":
      "تأسست على يد علي المنسي ويحيى حسن وبدأت عملها متخصصة في خدمات الاستضافة بفريق مكون من 3 أفراد فقط.",
    "tigersSection.title": "عن النمور",
    "tigersSection.description":
      "النمور هو المزود الرائد لخدمات السحابة في المملكة العربية السعودية، ويعمل على دعم وحماية البنية التحتية التقنية للمؤسسات من جميع الأحجام.",
    "featuresSection.title": "المزايا",
    "featuresSection.multilingualSites": "مواقع متعددة اللغات",
    "featuresSection.fiftyLanguages": "دعم 50 لغة",
    "featuresSection.responsiveDesign": "تصميم متجاوب على مختلف الأجهزة",
    "featuresSection.easyTool": "أداة سهلة الاستخدام",
    "featuresSection.videoTutorials": "دروس فيديو حول كيفية الاستخدام",
    "featuresSection.plugins": "الإضافات",
    "featuresSection.templates": "أكثر من مليون قالب",
    "featuresSection.siteMigration": "إمكانية نقل المواقع من أدوات بناء أخرى",
    "featuresSection.multilingualSitesAlt": "أيقونة مواقع متعددة اللغات",
    "featuresSection.fiftyLanguagesAlt": "أيقونة دعم 50 لغة",
    "featuresSection.responsiveDesignAlt": "أيقونة تصميم متجاوب",
    "featuresSection.easyToolAlt": "أيقونة أداة سهلة الاستخدام",
    "featuresSection.videoTutorialsAlt": "أيقونة دروس فيديو",
    "featuresSection.pluginsAlt": "أيقونة الإضافات",
    "featuresSection.templatesAlt": "أيقونة قوالب",
    "featuresSection.siteMigrationAlt": "أيقونة نقل المواقع",
    "featuresSection.rightImgAlt": "صورة خلفية يمنى",
    "featuresSection.leftImgAlt": "صورة خلفية يسرى",
    "oneClickApps.helmChartsAlt": "أيقونة Helm Charts",
    "oneClickApps.certManagerAlt": "أيقونة مدير الشهادات",
    "oneClickApps.linkerdAlt": "أيقونة Linkerd",
    "oneClickApps.operatorsAlt": "أيقونة المشغلون",
    "oneClickApps.illustrationAlt": "صورة توضيحية للتطبيقات بنقرة واحدة",
    "distributorBasicNeed.title": "هل تحتاج تراخيص لتتشغيل الخادم الخاص بك؟",
    "distributorBasicNeed.subtitle": "نحن نوفرها لك باقل تكلفة",
    "distributorBasicNeed.registerButton": "نموذج التسجيل",
    "distributorBasicNeed.distributorsButton": "الموزعون",
    "distributorBasicNeed.settingsIllustrationAlt": "إعدادات",

    "kubernetes.title": "قم ببناء مجموعات Kubernetes في دقائق معدودة",
    "resellerHosting.title": "استضافة الموزعين",
    "resellerHostingPlus.title": "الموزع بلاس",
    "resellerHostingUltra.title": "الموزع الترا",
    "resellerHostingProgram.title": "برنامج الموزعين",
    "resellerHosting.description": "حقق الأرباح ووسع خدماتك.",
    "windowsHosting.title": "استضافة ويندوز",
    "windowsHosting.description": "واحدة من أفضل وأسرع وأسهل خدمات الاستضافة",
    "support.title": "لست متأكدًا من أين تبدأ؟ لا تقلق، نحن هنا لمساعدتك",
    "support.description":
      "شركة ليبيا سبايدر، كمزود رسمي لحلول السحابة من مايكروسوفت، جاهزة لمساعدة مؤسستك في اعتماد حل الإنتاجية السحابي “Microsoft 365” ودمجه بالكامل مع سير العمل الخاص بك.",
    "support.successMessage":
      "نحن فخورون بأننا قدمنا خدماتنا للعديد من الشركات في رحلتهم للانتقال الناجح إلى خدمات Microsoft 365 – ونحن سعداء بمساعدتك أيضًا!",
    "support.cta": "اطلب الان!",
    "support.settingsChanges": "تغييرات الإعدادات",
    "support.settingsChangesAlt": "أيقونة تغييرات الإعدادات",
    "support.training": "التدريب",
    "support.trainingAlt": "أيقونة التدريب",
    "support.technicalSupport": "الدعم الفني",
    "support.technicalSupportAlt": "أيقونة الدعم الفني",
    "support.settingsCustomization": "ضبط الإعدادات والتخصيص",
    "support.settingsCustomizationAlt": "أيقونة ضبط الإعدادات والتخصيص",
    "support.dataUserMigration": "نقل البيانات والمستخدمين",
    "support.dataUserMigrationAlt": "أيقونة نقل البيانات والمستخدمين",
    "support.sharePointMigration": "ترحيل SharePoint Online",
    "support.sharePointMigrationAlt": "أيقونة ترحيل SharePoint Online",
    "tigersHosting.title": "استضافة نمور",
    "tigersHosting.description":
      "البنية التحتية السحابية سهلة الإدارة وفعّالة من حيث التكلفة",
    "cloudInfrastructure.title":
      "بنية تحتية مرنة، سهلة الإدارة وقابلة للتوسّع.",
    "cloudInfrastructure.description":
      "يجمع LS Cloud بين موارد الحوسبة والتخزين والشبكات بالإضافة إلى التحليلات المتقدمة وأدوات المراقبة في منصة سحابية واحدة سهلة الاستخدام.",
    "cloudInfrastructure.tools": "أدوات في منصة سحابية واحدة سهلة الاستخدام.",
    "cloudInfrastructure.resources": "موارد سحابية يمكن تثبيتها في دقائق",
    "cloudInfrastructure.loadMetrics": "مقاييس التحميل",
    "cloudInfrastructure.loadMetricsAlt": "أيقونة مقاييس التحميل",
    "cloudInfrastructure.networking": "الشبكات",
    "cloudInfrastructure.networkingAlt": "أيقونة الشبكات",
    "cloudInfrastructure.storageSizes": "أحجام التخزين",
    "cloudInfrastructure.storageSizesAlt": "أيقونة أحجام التخزين",
    "cloudInfrastructure.virtualServers": "الخوادم الافتراضية",
    "cloudInfrastructure.virtualServersAlt": "أيقونة الخوادم الافتراضية",
    "cloudInfrastructure.backgroundAlt": "خلفية سحابية",
    "whyChooseTigers.blockUnauthorizedEmail":
      "حظر البريد الإلكتروني غير المصرح به",
    "whyChooseTigers.blockUnauthorizedEmailDesc":
      "عند استخدامك لـ PowerDMARC، لا تقوم فقط بالقضاء على انتحال البريد الإلكتروني، بل يمكنك أيضًا استخدام التقارير التفصيلية لتغيير استراتيجية المحتوى الخاصة بك فورًا. لا تترك مجالًا للصدفة.",
    "whyChooseTigers.blockUnauthorizedEmailAlt":
      "أيقونة حظر البريد الإلكتروني غير المصرح به",
    "whyChooseTigers.preventEmailSpoofing": "منع انتحال البريد الإلكتروني",
    "whyChooseTigers.preventEmailSpoofingDesc":
      "احمِ نطاقك من انتحال البريد الإلكتروني وهجمات التصيد الاحتيالي باستخدام بروتوكولات المصادقة المتقدمة. تأكد من أن المرسلين المعتمدين فقط يمكنهم استخدام نطاقك.",
    "whyChooseTigers.preventEmailSpoofingAlt":
      "أيقونة منع انتحال البريد الإلكتروني",
    "whyChooseTigers.enhanceEmailSecurity": "تعزيز أمان البريد الإلكتروني",
    "whyChooseTigers.enhanceEmailSecurityDesc":
      "احصل على رؤية كاملة لحركة البريد الإلكتروني لديك واكتشف الأنشطة غير المصرح بها في الوقت الفعلي. حافظ على أمان اتصالك والتزامه بالمعايير.",
    "whyChooseTigers.enhanceEmailSecurityAlt":
      "أيقونة تعزيز أمان البريد الإلكتروني",
    "whyChooseTigers.verifyEmail": "تحقق من كل بريد إلكتروني",
    "whyChooseTigers.verifyEmailDesc":
      "استخدم DMARC وSPF وDKIM للتحقق من صحة رسائلك الإلكترونية ومنع المجرمين الإلكترونيين من انتحال نطاقك. عزز الثقة مع المستلمين.",
    "whyChooseTigers.verifyEmailAlt": "أيقونة تحقق من كل بريد إلكتروني",
    "whyChooseTigers.backgroundRightAlt": "خلفية يمين",
    "whyChooseTigers.backgroundLeftAlt": "خلفية يسار",

    "businessHosting.title": "استضافة الأعمال",
    "businessHosting.description": "واحدة من أفضل وأسرع وأسهل خدمات الاستضافة",
    "servicesThree.title": "انطلق بسرعة ونمي أعمالك",
    "servicesThree.reliableStaticHosting": "استضافة ثابتة موثوقة",
    "servicesThree.reliableStaticHostingDesc":
      "استضف مواقعك الثابتة بوقت تحميل فائق السرعة واستقرار لا مثيل له. استمتع بنشر سلس مع شبكة CDN موزعة عالميًا.",
    "servicesThree.reliableStaticHostingAlt": "أيقونة استضافة ثابتة موثوقة",
    "servicesThree.scalableCloudStorage": "تخزين سحابي قابل للتطوير",
    "servicesThree.scalableCloudStorageDesc":
      "قم بتخزين بياناتك والوصول إليها بأمان مع تخزين سحابي عالي الأداء. قم بالتوسع بسهولة مع نمو عملك بفضل التكرار المحسن.",
    "servicesThree.scalableCloudStorageAlt": "أيقونة تخزين سحابي قابل للتطوير",
    "servicesThree.enterpriseStaticHosting": "استضافة ثابتة بمستوى الشركات",
    "servicesThree.enterpriseStaticHostingDesc":
      "قم بتقديم تطبيقاتك الثابتة بأمان وأداء عاليين. استفد من التحديثات الفورية، والوصول العالمي، وعدم الحاجة إلى الصيانة.",
    "servicesThree.enterpriseStaticHostingAlt":
      "أيقونة استضافة ثابتة بمستوى الشركات",
    "mainFeatures.title": "مزايا رئيسية",
    "mainFeatures.description":
      "قم بامتلاك مُخدّمك المخصص مع نظام التشغيل المفضل لديك والتطبيقات المثبتة مسبقًا.",
    "mainFeatures.crossPlatform": "يعمل عبر منصات متعددة",
    "mainFeatures.crossPlatformAlt": "أيقونة يعمل عبر منصات متعددة",
    "mainFeatures.ddosMitigation": "تخفيف هجمات حجب الخدمة (DDoS)",
    "mainFeatures.ddosMitigationAlt": "أيقونة تخفيف هجمات حجب الخدمة",
    "mainFeatures.malwareDetection": "اكتشاف وإزالة البرامج الضارة",
    "mainFeatures.malwareDetectionAlt": "أيقونة اكتشاف وإزالة البرامج الضارة",
    "mainFeatures.sslCertificate": "شهادة أمان SSL",
    "mainFeatures.sslCertificateAlt": "أيقونة شهادة أمان SSL",
    "mainFeatures.securityMonitoring": "مراقبة الأمان",
    "mainFeatures.securityMonitoringAlt": "أيقونة مراقبة الأمان",
    "mainFeatures.performanceOptimization": "تحسين الأداء",
    "mainFeatures.performanceOptimizationAlt": "أيقونة تحسين الأداء",
    "mainFeatures.backgroundRightAlt": "صورة خلفية يمين",
    "mainFeatures.backgroundLeftAlt": "صورة خلفية يسار",
    "emailHosting.title": "استضافة البريد الإلكتروني",
    "emailHosting.description": "واحدة من أفضل وأسرع وأسهل خدمات الاستضافة",
    "businessNeeds.title": "كل ما تحتاجه لعملك",
    "businessNeeds.brandAwareness": "زيادة الوعي بالعلامة التجارية",
    "businessNeeds.brandAwarenessDesc":
      "قم بربط اسم نطاق شركتك لتعزيز الوعي بالعلامة التجارية وتقديم صورة أكثر احترافية باستخدام بريد إلكتروني مخصص",
    "businessNeeds.brandAwarenessAlt": "أيقونة زيادة الوعي بالعلامة التجارية",
    "businessNeeds.security": "الأمان",
    "businessNeeds.securityDesc":
      "باستخدام الذكاء الاصطناعي وبرمجيات الحماية الذكية للبريد الإلكتروني، تعمل LS Suite على حماية صندوق الوارد لديك من البريد العشوائي والفيروسات والبرمجيات الضارة وفيروسات الفدية وهجمات التصيد الاحتيالي.",
    "businessNeeds.securityAlt": "أيقونة الأمان",
    "businessNeeds.accessCollaboration": "سهولة الوصول والعمل المشترك",
    "businessNeeds.accessCollaborationDesc":
      "يمكنك الوصول إلى بريدك الإلكتروني والتقويم وجهات الاتصال والملفات من أي مكان وعلى أي جهاز، والتعاون مع فريقك في الوقت نفسه، مع حفظ جميع التغييرات تلقائيًا.",
    "businessNeeds.accessCollaborationAlt":
      "أيقونة سهولة الوصول والعمل المشترك",
    "emailSecurity.title": "أمان قوي لحماية البريد الإلكتروني",
    "emailSecurity.description":
      "احمِ بريدك الإلكتروني المهني بأمان مدعوم بالذكاء الاصطناعي ضد البريد العشوائي والتصيد الاحتيالي والبرامج الضارة.",
    "emailSecurity.backupRestore":
      "النسخ الاحتياطي والاستعادة للبيئات الفعلية والافتراضية والسحابية.",
    "emailSecurity.backupRestoreAlt": "أيقونة النسخ الاحتياطي والاستعادة",
    "emailSecurity.antiSpamPhishing":
      "أدوات متقدمة مدمجة لمكافحة البريد العشوائي والفيروسات والتصيد الاحتيالي.",
    "emailSecurity.antiSpamPhishingAlt":
      "أيقونة أدوات مكافحة البريد العشوائي والتصيد",
    "emailSecurity.documentProtection":
      "حماية المستندات المشتركة بكلمة مرور وقيود زمنية.",
    "emailSecurity.documentProtectionAlt": "أيقونة حماية المستندات",
    "emailSecurity.encryption":
      "تشفير البريد الإلكتروني والملفات بسهولة لحماية المعلومات الحساسة.",
    "emailSecurity.encryptionAlt": "أيقونة تشفير البريد والملفات",
    "emailSecurity.backgroundAlt": "صورة خلفية",
    "keyFeaturesTwo.title": "مزايا رئيسية",
    "keyFeatures.description":
      "امتلك خادمًا مخصصًا خاصًا بك مع نظام التشغيل المفضل لديك والتطبيقات المثبتة مسبقًا.",
    "keyFeatures.mailStorage": "سعة تخزين البريد",
    "keyFeatures.mailStorageAlt": "أيقونة سعة تخزين البريد",
    "keyFeatures.reliableEmail":
      "بريد إلكتروني موثوق مع ضمان وقت تشغيل بنسبة 99.9٪",
    "keyFeatures.reliableEmailAlt": "أيقونة بريد إلكتروني موثوق",
    "keyFeatures.customEmail": "بريد إلكتروني مخصص وآمن للأعمال",
    "keyFeatures.customEmailAlt": "أيقونة بريد إلكتروني مخصص",
    "keyFeatures.calendarSharing": "مشاركة التقويم وجهات الاتصال والمهام",
    "keyFeatures.calendarSharingAlt": "أيقونة مشاركة التقويم",
    "keyFeatures.spamProtection": "تصفية البريد العشوائي وحماية من الفيروسات",
    "keyFeatures.spamProtectionAlt": "أيقونة حماية من البريد العشوائي",
    "callToAction.title": "ابدأ انتقالك السهل معنا",
    "callToAction.description":
      "قم بترقية بريدك الإلكتروني إلى LS Suite بسهولة وسرعة وأمان بمساعدة شركة العنكبوت الليبي. وابدأ رحلتك لتحسين الإنتاجية وتعزيز أمان بريدك الإلكتروني بدعمنا الكامل، بحيث لا يكون هناك أي انقطاع أو توقف أو فقدان للبيانات من أي نوع.",
    "callToAction.startNow": "ابدأ الآن!",
    "callToAction.settingsAlt": "إعدادات",

    "hostingProgrammers.title": "استضافة للمبرمجين",
    "hostingProgrammers.description":
      "خوادم سحابية عالية الأداء والثبات تصل إلى 100% مع مواقع جغرافية متعددة",
    "hostingProgrammers.startNow": "ابدأ الآن",
    "servicesTwo.title": "لماذا تختار النمور؟",
    "servicesTwo.description": "حلول وخدمات متطوّرة وشاملة، للأفراد والمؤسسات",
    "services.scalableStorageTwo": "تخزين قابل للتوسع",
    "services.scalableStorageDescTwo":
      "تخزين سحابي مرن يتكيف مع احتياجاتك المتزايدة.",
    "services.scalableStorageAltTwo": "أيقونة التخزين القابل للتوسع",
    "services.enterpriseHostingTwo": "استضافة للمؤسسات",
    "services.enterpriseHostingDescTwo":
      "حلول استضافة متقدمة مصممة للشركات الكبرى.",
    "services.enterpriseHostingAltTwo": "أيقونة استضافة المؤسسات",
    "services.reliableHostingTwo": "استضافة موثوقة",
    "services.reliableHostingDescTwo":
      "استضافة مستقرة بأداء عالٍ وتوقيت تشغيل مضمون.",
    "services.reliableHostingAltTwo": "أيقونة الاستضافة الموثوقة",
    "services.backgroundDecorationAltTwo": "صورة زخرفية خلفية",
    "imglist.contactUs":
      "هل أنت مهتم بمعرفة كيف يمكننا مساعدة عملك على النجاح؟ اتصل بنا",
    "imglist.partnerLogoAlt": "شعار الشريك",
    "sslSection.title": "اكثر من مجرد موضوع آمان",
    "sslSection.description":
      "يعدّ امتلاك شهادة SSL للمواقع ضرورة ملحّة، ليس فقط من ناحية الأمان.",
    "sslSection.buildTrust": "بناء ثقة العملاء",
    "sslSection.buildTrustDesc":
      "أظهر لعملائك أن عملك التجاري على الإنترنت مُؤمّن ومُصادَق عبر معرفتهم وتأكّدهم بأن بياناتهم الحسّاسة ومدفوعاتهم الإلكترونيّة محميّة بالكامل.",
    "sslSection.buildTrustAlt": "أيقونة بناء ثقة العملاء",
    "sslSection.seoRanking": "رفع تصنيف موقعك في محركات البحث SEO",
    "sslSection.seoRankingDesc":
      "المواقع المؤمّنة لها الأفضليّة في الحصول على ترتيب أعلى في نتائج محرّكات البحث، حيث أن الأمان هو عامل أساسي في عمليّة التصنيف.",
    "sslSection.seoRankingAlt": "أيقونة رفع تصنيف SEO",
    "sslSection.browserCompatibility":
      "حافظ على ظهور موقعك عبر المتصفّحات المختلفة",
    "sslSection.browserCompatibilityDesc":
      "إذا كان موقعك لا يحتوي على شهادة SSL، فستقوم معظم متصفحات الويب المشهورة عالميًا بوضع علامة عليه على أنه 'غير آمن' مع إظهار علامة تحذير، وبعض المتصفحات ستصل إلى حد حظره تمامًا من المستخدم.",
    "sslSection.browserCompatibilityAlt": "أيقونة توافق المتصفحات",
    "whois.title": "ما هي أداة WHOIS؟",
    "whois.description":
      "أداة WHOIS هي خدمة توفر معلومات حول أسماء النطاقات، بما في ذلك مالك النطاق وتفاصيل التسجيل وتاريخ الانتهاء ومعلومات الاتصال المرتبطة به. تساعد المستخدمين على التحقق من ملكية النطاق، وفحص توفر النطاق، والتحقق من شرعية المواقع الإلكترونية. يستخدم العديد من مسجلي النطاقات والمتخصصين في الأمن السيبراني أداة WHOIS لأغراض البحث والأمن السيبراني والامتثال.",

    "websiteBuilder.title": "ابني موقعك بسهولة مع منشئ المواقع الخاص بنا",
    "websiteBuilder.chooseTemplate": "اختر القالب الخاص بك",
    "websiteBuilder.chooseTemplateDesc":
      "اختر من بين 200 قالب رائع لبدء بناء موقعك.",
    "websiteBuilder.enhanceFunctionality": "تعزيز وظائف موقعك",
    "websiteBuilder.enhanceFunctionalityDesc":
      "احصل على العديد من الإضافات والأدوات والوظائف التي تحتاجها لتحسين موقعك. بما في ذلك الأساسيات مثل معرض الصور الخاص بك، ووسائل الإعلام، ومنصات التواصل الاجتماعي، والمزيد.",
    "websiteBuilder.previewSite": "معاينة الموقع",
    "websiteBuilder.previewSiteDesc":
      "اطلع على موقعك باستخدام القالب المحدد، قبل نشره علنًا.",
    "websiteBuilder.publishSave": "انشر أو احفظ موقعك – بنقرة واحدة",
    "websiteBuilder.publishSaveDesc":
      "يمكنك نشر موقعك على الإنترنت، أو حفظ مسودة لموقعك دون نشره.",
    "websiteBuilder.chooseTemplateAlt": "أيقونة اختيار القالب",
    "websiteBuilder.websiteBuilderAlt": "أيقونة منشئ المواقع",
    "featuresNine.title": "المزايا",
    "featuresNine.description": "المزايا الأساسية في جميع خططنا",
    "featuresNine.multilingualSites": "مواقع متعددة اللغات",
    "featuresNine.languageSupport": "دعم 50 لغة",
    "featuresNine.responsiveDesign": "تصميم متجاوب على مختلف الأجهزة",
    "featuresNine.easyTool": "أداة سهلة الاستخدام",
    "featuresNine.videoTutorials": "دروس فيديو حول كيفية الاستخدام",
    "featuresNine.plugins": "الإضافات",
    "featuresNine.millionTemplates": "أكثر من مليون قالب",
    "featuresNine.siteMigration": "إمكانية نقل المواقع من أدوات بناء أخرى",
    "featuresNine.iconAlt": "أيقونة",
    "featuresNine.rightImageAlt": "صورة زخرفية يمينية",
    "featuresNine.leftImageAlt": "صورة زخرفية يسارية",
    "wordpressHosting.title": "استضافة وورد بريس",
    "wordpressHosting.description": "بيئة محسّنة لنمو موقعك باستخدام ووردبريس",
    "wordpressHosting.startNow": "ابدا الان!",
    "kubernetes.description":
      "توقف عن إضاعة الوقت والجهد في إدارة مجموعات Kubernetes. باستخدام محرك Kubernetes المُدار بالكامل، يمكنك بسهولة إطلاق الموارد المُدارة للحاويات الخاصة بتطبيقك وإدارتها وتوسيع نطاقها في دقائق بدلاً من أيام.",
    "kubernetes.orderNow": "اطلب الان!",
    "services.titletwo": "انطلق بسرعة ونمي أعمالك",
    "services.reliableHosting": "استضافة ثابتة موثوقة",
    "services.reliableHostingDesc":
      "استضف مواقعك الثابتة بوقت تحميل فائق السرعة واستقرار لا مثيل له. استمتع بنشر سلس مع شبكة CDN موزعة عالميًا.",
    "services.scalableStorage": "تخزين سحابي قابل للتطوير",
    "services.scalableStorageDesc":
      "قم بتخزين بياناتك والوصول إليها بأمان مع تخزين سحابي عالي الأداء. قم بالتوسع بسهولة مع نمو عملك بفضل التكرار المحسن.",
    "services.enterpriseHosting": "استضافة ثابتة بمستوى الشركات",
    "services.enterpriseHostingDesc":
      "قم بتقديم تطبيقاتك الثابتة بأمان وأداء عاليين. استفد من التحديثات الفورية، والوصول العالمي، وعدم الحاجة إلى الصيانة.",
    "services.reliableHostingAlt": "أيقونة استضافة ثابتة موثوقة",
    "services.scalableStorageAlt": "أيقونة تخزين سحابي قابل للتطوير",
    "services.enterpriseHostingAlt": "أيقونة استضافة ثابتة بمستوى الشركات",
    "services.backgroundDecorationAlt": "زخرفة خلفية",
    "oneClickApps.title": "ابدأ بسرعة مع التطبيقات بنقرة واحدة",
    "oneClickApps.description":
      "يدعم محرك Kubernetes التكامل مع أدوات Kubernetes الشائعة، مما يسمح لك بإنشاء مجموعات تشغل برامج مفتوحة المصدر مُعدة مسبقًا بنقرة واحدة.",
    "oneClickApps.helmCharts": "Helm Charts",
    "oneClickApps.certManager": "مدير الشهادات",
    "oneClickApps.linkerd": "Linkerd",
    "oneClickApps.operators": "المشغلون",
    "oneClickApps.imageAlt": "تطبيقات بنقرة واحدة",
    "templates.million": "1000000+",
    "templates.title": "أكثر من 1,000,000 قالب جاهز لجميع الأغراض",
    "templates.description":
      "لجميع أنواع الأنشطة التجارية والشخصية، يوفر لك منشئ مواقع الويب لدينا أكثر من 1,000,000 قالب رائع جاهز للاستخدام مع تصميم قابل للتخصيص والتعديل بالكامل.",
    "templates.viewMore": "عرض المزيد",

    "hosting.windows": "استضافة ويندوز",
    "hosting.windows.description":
      "استضافة تعتمد على نظام ويندوز مع دعم لـ .NET وغيرها من تقنيات مايكروسوفت.",
    "sharedHosting.title": "الاستضافات المشتركة",
    "sharedHosting.description":
      "خوادم سحابية عالية الأداء والثبات تصل إلى 100% مع مواقع جغرافية متعددة",
    "sharedHosting.startNow": "ابدا الان!",
    "smallContent.feature.backupRecovery":
      "النسخ الاحتياطي والاسترداد للبيئات المادية والافتراضية والسحابية.",
    "smallContent.feature.malwareProtection":
      "الحماية من البرامج الضارة ومكافحة برامج الفدية.",
    "smallContent.feature.deviceProtection": "حماية الأجهزة الطرفية وإدارتها.",
    "smallContent.feature.threatDetection":
      "اكتشاف التهديدات المتقدمة والاستجابة لها.",
    "smallContent.feature.emailProtection": "حماية البريد الإلكتروني والأرشفة.",
    "smallContent.feature.disasterRecovery":
      "التعافي من الكوارث المستند إلى السحابة.",
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
    "reseller.basic.desc": "خطة استضافة أساسية للموزعين لبدء عملياتهم",
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
    "serverLocations.india": "الهند",
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
    "notFound.title": "Page Not Found",
    "notFound.description":
      "Sorry, the page you are looking for is not available or may have been moved.",
    "notFound.backToHome": "Back to Homepage",
    "brandGuidelines.colorPaletteTitle": "Namoor Colors",
    "brandGuidelines.colorPaletteDescription":
      "We used three colors to express Mahjooz’s identity: white, turquoise, and black. These colors have a formal tone suitable for hosting and support services, where turquoise symbolizes ease of use, white signifies simplicity, and black denotes seriousness, combined in three ways as follows:",
    "brandGuidelines.colorCodesTitle": "Here are the codes for each color:",
    "brandGuidelines.headerTitle": "Brand Guidelines",
    "brandGuidelines.headerDescription":
      "A guide to clearly and systematically display the logo, colors, codes, and identity",
    "brandGuidelines.logoTitle": "Logo",
    "brandGuidelines.logoDescription":
      'The Namoor logo combines the company’s identity and vision. Its concept comes from the overlap of the letters "p" and "z", which when merged form the infinite "ma" symbol, reflecting the company’s vision of continuous service and support.',
    "brandGuidelines.logoAlt": "Combined Logos",
    "brandGuidelines.logoSizesTitle": "Logo Sizes",
    "brandGuidelines.logoSizesDescription":
      "The logo is designed in various sizes to suit any usage environment.",
    "brandGuidelines.logoSizesAlt": "Logo in Various Sizes",
    "brandGuidelines.typographyTitle": "Namoor Typography",
    "brandGuidelines.typographyDescription":
      'We used the "Cairo" font for English and Arabic texts due to its simplicity and readability.',
    "brandGuidelines.typographyFontName": "C a i r o",
    "brandGuidelines.downloadsTitle": "Downloads",
    "brandGuidelines.downloadsDescription":
      "We’ve provided all the elements you might need when using the Namoor name in any design, from the logo to promotional materials for events or conferences.",
    "brandGuidelines.downloadItem1Alt": "Dark Blue Circular Logo",
    "brandGuidelines.downloadItem1Title": "Namoor Logo",
    "brandGuidelines.downloadItem2Alt": "Dark Blue Circular Logo",
    "brandGuidelines.downloadItem2Title": "Namoor Company",
    "brandGuidelines.downloadItem3Alt":
      "Dark Blue Circular Logo on Light Blue Background",
    "brandGuidelines.downloadItem3Title": "Namoor Company",
    "brandGuidelines.downloadItem4Alt": "Dark Blue Circular Logo",
    "brandGuidelines.downloadItem4Title": "Namoor Secondary Logo",
    "brandGuidelines.downloadPDF": "PDF",
    "brandGuidelines.downloadSVG": "SVG",
    "brandGuidelines.downloadPNG": "PNG",
    "brandGuidelines.identityTitle":
      "This is the Namoor identity, presented in multiple forms.",
    "brandGuidelines.identityCard1Title": "Namoor Company",
    "brandGuidelines.identityCard1Alt": "Logo with Arabic Text",
    "brandGuidelines.identityCard2Title": "Namoor Company",
    "brandGuidelines.identityCard2Alt": "Logo with Arabic Text",
    "brandGuidelines.identityBottomAlt":
      "Two circular logos, one on a light gray background and one on a white background",

    "domainFeatures.mainTitle": "Why Buy Domains from Namoor?",
    "domainFeatures.lockTitle": "Domain Locking",
    "domainFeatures.lockDescription":
      "Lock your domain to prevent unauthorized transfers of your domain names.",
    "domainFeatures.renewalTitle": "Great Renewal Rates",
    "domainFeatures.renewalDescription":
      "When it’s time to renew your domain, you’ll never worry about breaking the bank.",
    "domainFeatures.autoRenewalTitle": "Auto-Renewal",
    "domainFeatures.autoRenewalDescription":
      "Never lose your domain (even if you forget) thanks to our auto-renewal option.",
    "domainFeatures.managementTitle": "Easy Management",
    "domainFeatures.managementDescription":
      "Manage your domain with an easy-to-use control panel and dashboard.",
    "domainFeatures.privacyTitle": "Whois Privacy Protection",
    "domainFeatures.privacyDescription":
      "Need some privacy? We’ll protect your personal information from the WHOIS database for a small fee.",
    "domainFeatures.pricingTitle": "Low Prices & Huge Selection",
    "domainFeatures.pricingDescription":
      "Register your domain at a low price and choose from a wide range of extensions.",
    "domainPricingTable.title1": "Explore the Possibilities",
    "domainPricingTable.title2": "From Our Domain List",
    "domainPricingTable.domain": "Domain",
    "domainPricingTable.registration": "Registration",
    "domainPricingTable.renewal": "Renewal",
    "domainPricingTable.transfer": "Transfer",
    "domainPricingTable.protection": "Identity Protection",
    "domainPricingTable.searchPlaceholder": "Search...",
    "domainPricingTable.noResults": 'No results for "{searchTerm}"',
    "domainPricingTable.previous": "Previous",
    "domainPricingTable.next": "Next",
    "domainPricingTable.currencySymbol": "$",
    "domainInfographic.titlePart1": "Things to Remember",
    "domainInfographic.titlePart2": "Before Buying Domains",
    "domainInfographic.section1Title": "Keep It Simple",
    "domainInfographic.section1Description":
      "Don’t complicate things. A domain name that’s easy to remember is always the best choice.",
    "domainInfographic.section2Title": "Act Now",
    "domainInfographic.section2Description":
      "Stay true to your brand. Be distinctive but choose a domain that your audience will recognize.",
    "domainInfographic.section3Title": "Avoid Dashes",
    "domainInfographic.section3Description":
      "Just because the internet is technical doesn’t mean your domain name has to be.",
    "priceDomains.backgroundAlt": "Decorative background pattern",
    "priceDomains.title": "Choose from the most popular domain extensions",
    "priceDomains.domainName": "Domain Name",
    "priceDomains.price": "$6.49/year",
    "priceDomains.originalPrice": "Instead of $14.98/year",
    "priceDomains.domainAriaLabel": "Domain name {tld}",
    "domainSearchSection.title": "Search and Buy a Domain",
    "domainSearchSection.description":
      "Get the domain you’ve been looking for.",
    "domainSearchSection.searchPlaceholder": "Type here to search",
    "domainSearchSection.searchButton": "Search",
    "domainSearchSection.popular": "Popular",
    "domainSearchSection.geographic": "Geographic",
    "domainSearchSection.technology": "Technology",
    "domainSearchSection.service": "Service",
    "domainSearchSection.business": "Business",
    "domainSearchSection.media": "Media",
    "domainSearchSection.shopping": "Shopping",
    "domainSearchSection.more": "More",
    "domainSearchSection.domainImageAlt": "Domain Illustration",
    "namoorSection.title": "Namoor Company",
    "partnersSection.mainTitle": "Success Partners",
    "partnersSection.rightBackgroundAlt": "Right Background SVG",
    "partnersSection.leftBackgroundAlt": "Left Background SVG",
    "partnersSection.sucuriName": "SUCURI",
    "partnersSection.sucuriDescription":
      "We provide advanced website protection services through cutting-edge technologies that ensure complete security. We offer comprehensive solutions to protect websites from cyberattacks and malware. Our dedicated team works around the clock to ensure your website operates with total security.",
    "partnersSection.sucuriLogoAlt": "SUCURI Logo",
    "partnersSection.softaculousName": "Softaculous",
    "partnersSection.softaculousDescription":
      "A comprehensive platform for managing applications and software with ease. We provide a complete library of applications ready for one-click installation. Our solutions help simplify the management of websites and various applications with high efficiency and great flexibility.",
    "partnersSection.softaculousLogoAlt": "Softaculous Logo",
    "partnersSection.linuxName": "Linux",
    "partnersSection.linuxDescription":
      "An open-source operating system offering high stability and security. We provide advanced hosting solutions using various Linux systems. Our specialized team ensures optimal performance and complete stability for all provided services.",
    "partnersSection.linuxLogoAlt": "Linux Logo",
    "paymentSection.description":
      "Pay in the way that suits you and enjoy an easy and smooth payment experience",
    "whoisTool.whoisTitle": "Whois Tool",
    "whoisTool.whoisDescription": "Professional domain data lookup",
    "whoisTool.searchButton": "Search",
    "whoisTool.searchPlaceholder": "Enter domain name",
    "whoisTool.whatIsWhoisTitle": "What is the Whois Tool?",
    "whoisTool.whatIsWhoisDescription":
      "Whois is a tool used to query domain registration information, such as the owner, registration date, and expiration date.",
    "whoisTool.groupImageAlt": "Whois Tool Illustration",
    "whoisTool.howItWorksTitle": "How Does It Work?",
    "whoisTool.howItWorksDescription":
      "Whois works by querying a public database to retrieve domain registration details stored with registrars.",
    "whoisTool.sslWhoisImageAlt": "SSL and Whois Illustration",
    "websiteSuccessCriteria.sslTitle": "SSL Certificates",
    "websiteSuccessCriteria.sslDescription":
      "The perfect solution to secure your website and protect user data.",
    "websiteSuccessCriteria.cloudflareTitle": "Cloudflare",
    "websiteSuccessCriteria.cloudflareDescription":
      "The ideal solution for a faster, safer, and more reliable web experience.",
    "websiteSuccessCriteria.cloudflareEnhanceTitle":
      "Enhance your website’s protection against cyber threats and improve its performance with Cloudflare.",
    "websiteSuccessCriteria.cloudflareEnhanceDescription":
      "From protection against cyber threats to accelerating content delivery, Cloudflare is your trusted partner in web performance and security.",
    "websiteSuccessCriteria.mainTitle":
      "Set a New Standard for Your Website’s Success",
    "websiteSuccessCriteria.performanceTitle": "Blazing Fast Performance",
    "websiteSuccessCriteria.globalSpeedBoost": "Global Speed Boost",
    "websiteSuccessCriteria.contentDelivery": "Content Delivery Optimization",
    "websiteSuccessCriteria.loadBalancing": "Load Balancing",
    "websiteSuccessCriteria.latencyReduction": "Latency Reduction",
    "websiteSuccessCriteria.globalSpeedBoostIconAlt": "Global Speed Boost Icon",
    "websiteSuccessCriteria.globalSpeedBoostDescription":
      "Thanks to Cloudflare’s global CDN, your website loads quickly for visitors anywhere in the world.",
    "websiteSuccessCriteria.securityTitle": "Unmatched Security",
    "websiteSuccessCriteria.ddosProtection": "DDoS Attack Protection",
    "websiteSuccessCriteria.webApplicationFirewall":
      "Web Application Firewall (WAF)",
    "websiteSuccessCriteria.sslTlsEncryption": "SSL/TLS Encryption",
    "websiteSuccessCriteria.botManagement": "Bot Management",
    "websiteSuccessCriteria.realTimeThreatAnalysis":
      "Real-Time Threat Analysis",
    "websiteSuccessCriteria.securityIconAlt": "Security Icon",
    "websiteSuccessCriteria.ddosProtectionDescription":
      "Cloudflare’s network is designed to absorb and mitigate DDoS attacks, ensuring your website remains available even during targeted attacks.",
    "websiteSuccessCriteria.signUpNow": "Sign Up Now",
    "cloudflareSection.cloudflareTitle": "Cloudflare",
    "cloudflareSection.cloudflareDescription":
      "The ideal solution for a faster, safer, and more reliable web experience.",
    "cloudflareSection.cloudflareEnhanceTitle":
      "Enhance your website’s protection against cyber threats and improve its performance with Cloudflare.",
    "cloudflareSection.cloudflareEnhanceDescription":
      "From protection against cyber threats to accelerating content delivery, Cloudflare is your trusted partner in web performance and security.",
    "cloudflareSection.signUpNow": "Sign Up Now",
    "sslSection.sslTitle": "SSL Certificates",
    "sslContent.rightBackgroundAlt": "Right Background with Icons",
    "sslContent.leftBackgroundAlt": "Left Background with Icons",
    "sslContent.trustTitle": "Establish Your Business’s Trustworthiness",
    "sslContent.trustDescription":
      "Protect your website’s data - and your visitors’ data - by establishing a secure connection and encrypting data provided by SSL certificates. Let all your website visitors know that your site is secure and trustworthy with the distinctive lock icon and the https:// prefix in your domain name.",
    "sslContent.chooseSslTitle": "Choose the Right SSL Certificate",
    "sslContent.chooseSslDescription":
      "Libyan Spider Company provides you with a variety of protection certificates from the most trusted companies in the field worldwide.",
    "choosePlan.rightBackgroundAlt": "Right Background SVG",
    "choosePlan.leftBackgroundAlt": "Left Background SVG",
    "choosePlan.mainTitle": "Choose the Right Plan",
    "choosePlan.planTitle": "GeoTrust QuickSSL Premium",
    "choosePlan.currency": "LYD/Quarterly",
    "choosePlan.validation": "Validation",
    "choosePlan.organization": "Organization",
    "choosePlan.siteSeal": "Site Seal",
    "choosePlan.dynamic": "Dynamic",
    "choosePlan.orderNow": "Order Now",
    "websiteSecurity.title":
      "Website Security and Data Encryption Are No Longer Optional",
    "websiteSecurity.description":
      "Websites marked as 'Not Secure' are no longer acceptable. An SSL certificate is no longer a choice; it is a fundamental requirement for website security in today’s world. Data encryption and secure connections eliminate the risks of emerging and increasing cyberattacks that can exploit any security vulnerability.",
    "websiteSecurity.securityImageAlt": "Website Security Image",
    "beyondProtection.bigBlocksAlt": "Big Blocks Background",
    "beyondProtection.mainTitle": "More Than Just Protection",
    "beyondProtection.mainDescription":
      "Own your dedicated server with your preferred operating system and pre-installed applications.",
    "beyondProtection.browserCompatibilityTitle":
      "Ensure Your Website Appears Across All Browsers",
    "beyondProtection.browserCompatibilityDescription":
      "If your website lacks an SSL certificate, most popular browsers worldwide will mark it as 'Not Secure' with a warning, and some browsers may even block it entirely from users.",
    "beyondProtection.customerTrustAlt": "Customer Trust Icon",
    "beyondProtection.seoTitle":
      "Boost Your Website’s Search Engine Ranking (SEO)",
    "beyondProtection.seoDescription":
      "Secured websites have an advantage in achieving higher rankings in search engine results, as security is a key factor in the ranking process.",
    "beyondProtection.browserFriendlyAlt": "Browser Friendly Icon",
    "beyondProtection.customerTrustTitle": "Build Customer Trust",
    "beyondProtection.customerTrustDescription":
      "Show your customers that your online business is safe and trustworthy by ensuring their sensitive data and online payments are fully protected.",
    "beyondProtection.seoIncreaseAlt": "SEO Increase Icon",
    "domainRegistrationSA.backgroundAlt": "Background Image",
    "domainRegistrationSA.numberOneAlt": "Number 1 Register Image",
    "domainRegistrationSA.title":
      "Get your sa. domain name from the #1 registrar",
    "domainRegistrationSA.description":
      "Thousands of sa. domain names have already been registered. Hurry up and secure your unique sa. domain now with various extensions available.",
    "domainRegistrationSA.saTitle": "SA",
    "domainRegistrationSA.saPrice": "Just $20",
    "domainRegistrationSA.saCircleAlt": "SA Circle Icon",
    "domainRegistrationSA.eduSa": ".edu.sa",
    "domainRegistrationSA.comSa": ".com.sa",
    "domainRegistrationSA.netSa": ".net.sa",
    "domainRegistrationSA.orgSa": ".org.sa",
    "domainRegistrationSA.medSa": ".med.sa",
    "domainRegistrationSA.idSa": ".id.sa",
    "domainRegistrationSA.schSa": ".sch.sa",
    "domainRegistrationSA.plcSa": ".plc.sa",
    "domainRegistrationSA.worldIconAlt": "World Icon",
    "domainRegistrationSA.price": "Just $20",
    "domainRegistrationSA.approvalTitle":
      "Domain Names Requiring Registrar Approval",
    "domainRegistrationSA.schSaApproval": "sch.sa for schools.",
    "domainRegistrationSA.schSaApprovalDesc":
      "Official letter to the Saudi Communications and Technology Company to request approval for domain name registration.",
    "domainRegistrationSA.medSaApproval": "med.sa for hospitals and clinics.",
    "domainRegistrationSA.medSaApprovalDesc":
      "Official letter to the Saudi Communications and Technology Company to request approval for domain name registration.",
    "domainRegistrationSA.govSaApproval": "gov.sa for governments.",
    "domainRegistrationSA.govSaApprovalDesc":
      "Official letter to the Saudi Communications and Technology Company to request approval for domain name registration.",
    "domainRegistrationSA.govSaAltApproval": "gov.sa for government entities.",
    "domainRegistrationSA.govSaAltApprovalDesc":
      "Registered directly with the Saudi Communications and Technology Company after approval from the General Communications Authority and requested under the Saudi Digital Control Panel.",
    "domainStatsSA.title": "Statistics for sa.",
    "domainStatsSA.description": "Take a look at the numbers:",
    "domainStatsSA.chooseDomain": "Choose your own domain",
    "domainStatsSA.achievement":
      "We are proud to have registered over 1,800 domain names!",
    "domainStatsSA.backgroundRightAlt": "Right SVG Background",
    "domainStatsSA.backgroundLeftAlt": "Left SVG Background",
    "languageSelector.saudi": "Saudi Arabia",
    "languageSelector.uae": "United Arab Emirates",
    "languageSelector.sudan": "Sudan",
    "languageSelector.turkey": "Turkey",
    "languageSelector.egypt": "Egypt",
    "languageSelector.oman": "Oman",
    "languageSelector.iraq": "Iraq",
    "languageSelector.syria": "Syria",
    "languageSelector.germany": "Germany",
    "languageSelector.france": "France",
    "languageSelector.qatar": "Qatar",
    "languageSelector.india": "India",
    "serverLocations.download": "Download",
    "serverLocations.upload": "Upload",
    "serverLocations.comingSoonTitle": "Coming Soon",
    "serverLocations.comingSoonMessage": "This server will be launched soon",
    "serverLocations.mapAlt": "World Map",

    "dashboardWelcome.title": "Welcome to Your Dashboard",
    "dashboardWelcome.description":
      "Manage your domain easily, check your statistics, and monitor performance from one place.",
    "dashboardWelcome.imageAlt": "Dashboard",
    "dashboardOverview.title": "Dashboard Overview",
    "dashboardOverview.description":
      "Access real-time data and performance metrics directly from your dashboard. Track your domain status, visitor statistics, and much more in one place.",
    "dashboardOverview.imageAlt": "Dashboard Overview Image",
    "performanceTracking.title": "Track Your Performance",
    "performanceTracking.description":
      "Stay updated on your domain's performance. Monitor traffic, renewals, and usage quickly.",
    "performanceTracking.mobileAlt": "Mobile Performance Image",
    "performanceTracking.backgroundAlt": "Background Layer Image",
    "performanceTracking.patternAlt": "Decorative SVG Pattern",
    "domainManagement.title": "Domain Management",
    "domainManagement.description":
      "Manage your domain with ease. Register new domains, renew existing ones, and view all relevant details in real-time.",
    "domainManagement.imageAlt": "Desktop Image",
    "techStack.mainTitle": "Technologies Used in Building the Project",
    "techStack.reactTitle": "React",
    "techStack.reactAlt": "React Icon",
    "techStack.laravelTitle": "Laravel",
    "techStack.laravelAlt": "Laravel Logo",
    "techStack.phpTitle": "PHP",
    "techStack.phpAlt": "PHP Logo",
    "techStack.javascriptTitle": "JavaScript",
    "techStack.javascriptAlt": "JavaScript Logo",
    "techStack.lagomTitle": "Lagom Theme",
    "techStack.lagomAlt": "Lagom Theme Logo",
    "techStack.whatsappApiTitle": "WhatsApp API",
    "techStack.whatsappApiAlt": "WhatsApp API Icon",
    "techStack.whmcsTitle": "WHMCS",
    "techStack.whmcsAlt": "WHMCS Logo",
    "keyFeaturesTwo.mainTitle": "Key Features",
    "keyFeaturesTwo.mainDescription":
      "Through our cloud products and services, we meet 100% of your business and data needs, providing the highest levels of security for your infrastructure.",
    "keyFeaturesTwo.cloudHostingTitle": "Shared Cloud Hosting",
    "keyFeaturesTwo.cloudHostingDescription":
      "Host your website easily and comfortably at an affordable cost! With shared cloud hosting.",
    "keyFeaturesTwo.cloudHostingAlt": "Shared Cloud Hosting Icon",
    "keyFeaturesTwo.lsSuiteTitle": "LS Suite",
    "keyFeaturesTwo.lsSuiteDescription":
      "Professional email, online storage, enterprise meetings, and more. Built for business.",
    "keyFeaturesTwo.lsSuiteAlt": "LS Suite Icon",
    "keyFeaturesTwo.jpaasTitle": "JPaaS Platform as a Service",
    "keyFeaturesTwo.jpaasDescription": "Manage your server with full control",
    "keyFeaturesTwo.jpaasAlt": "JPaaS Platform Icon",
    "keyFeaturesTwo.learnMore": "Learn More",

    "speedSection.title": "Speed",
    "speedSection.description":
      "Protect your website's data and display your security certificate to your visitors",
    "launchAppsSection.mainTitle": "Launch Your Apps in Seconds!",
    "launchAppsSection.mainDescription":
      "Create or run various applications with comprehensive platform support",
    "launchAppsSection.appAlt": "App Icon",
    "launchAppsSection.dockerAlt": "Docker Icon",
    "launchAppsSection.phpAlt": "PHP Icon",
    "launchAppsSection.pythonAlt": "Python Icon",
    "featuresGrid.disasterRecovery": "Cloud-Based Disaster Recovery",
    "featuresGrid.emailProtection": "Email Protection and Archiving",
    "featuresGrid.threatDetection": "Advanced Threat Detection and Response",
    "featuresGrid.centralizedManagement1":
      "Centralized Management and Monitoring",
    "featuresGrid.centralizedManagement2":
      "Centralized Management and Monitoring",
    "featuresGrid.centralizedManagement3":
      "Centralized Management and Monitoring",
    "featuresGrid.centralizedManagement4":
      "Centralized Management and Monitoring",
    "featuresGrid.centralizedManagement5":
      "Centralized Management and Monitoring",
    "featuresGrid.centralizedManagement6":
      "Centralized Management and Monitoring",

    "whoisToolSectionTwo.description":
      "The WHOIS tool is a valuable service that provides comprehensive information about domain names, such as the owner's name, registration details, expiration date, and related contact information. It helps verify domain ownership, check availability for registration, and assess the reliability of websites. Many domain registrars and cybersecurity professionals rely on it for research, protection, and compliance with legal standards.",
    "whoisToolSectionTwo.imageAlt": "WHOIS Tool Image",
    "whoisToolSection.title": "What is the WHOIS Tool?",
    "whoisToolSection.description":
      "The WHOIS tool is a service that provides information about domain names, including the domain owner, registration details, expiration date, and associated contact information. It helps users verify domain ownership, check availability, and validate website credibility. Many domain registrars and cybersecurity professionals use this tool for research, security, and compliance purposes.",
    "whoisToolSection.imageAlt": "WHOIS Security Image",
    "keyBenefitsSection.mainTitle": "Key Benefits",
    "keyBenefitsSection.mainDescription":
      "Own your dedicated server with your preferred operating system and pre-installed applications.",
    "keyBenefitsSection.pciDssTitle": "PCI/DSS Compliance",
    "keyBenefitsSection.pciDssAlt": "Compliance Icon",
    "keyBenefitsSection.encryptionTitle": "256-bit Data Encryption",
    "keyBenefitsSection.encryptionAlt": "Encryption Icon",
    "keyBenefitsSection.secureClientTitle": "Securing Customer Data",
    "keyBenefitsSection.secureClientAlt": "Data Security Icon",
    "keyBenefitsSection.supportTitle": "Technical Support",
    "keyBenefitsSection.supportAlt": "Technical Support Icon",
    "keyBenefitsSection.warrantyTitle": "Warranty",
    "keyBenefitsSection.warrantyAlt": "Warranty Icon",
    "keyBenefitsSection.securityTitle": "Lock Icon and https://",
    "keyBenefitsSection.securityAlt": "Security Icon",

    "onlinePaymentSection.mainTitle": "Online Payment",
    "onlinePaymentSection.mainDescription":
      "Enjoy a fast and direct online payment process",
    "onlinePaymentSection.americanExpressAlt": "American Express Icon",
    "onlinePaymentSection.visaAlt": "Visa Icon",
    "onlinePaymentSection.masterCardAlt": "MasterCard Icon",
    "paymentMethodsSection.title": "Payment Methods",
    "paymentMethodsSection.description":
      "Pay in the way that suits you and enjoy a seamless payment experience",
    "paymentMethodsSection.mainTitle": "Bank Transfer Payment Methods",
    "paymentMethodsSection.mainDescription":
      "Make bank transfers easily and securely",
    "paymentMethodsSection.bankakTitle": "Bankak",
    "paymentMethodsSection.bankakDescription":
      "Learn more about Bankak, its services, and how it helps manage your financial transactions securely and efficiently.",
    "paymentMethodsSection.bankakAlt": "Bankak Icon",
    "paymentMethodsSection.ibanTitle":
      "International Bank Account Number (IBAN)",
    "paymentMethodsSection.ibanDescription":
      "Understand the importance of IBAN for international transactions and how it ensures secure and accurate financial transfers.",
    "paymentMethodsSection.ibanAlt": "IBAN Icon",
    "paymentMethodsSection.instantTitle": "Instant Transfers",
    "paymentMethodsSection.instantDescription":
      "Send and receive money instantly with secure and reliable payment solutions designed for fast transactions.",
    "paymentMethodsSection.instantAlt": "Instant Transfers Icon",
    "paymentMethodsSection.oowCashTitle": "Oow-Cash",
    "paymentMethodsSection.oowCashDescription":
      "Discover the benefits of Oow-Cash for seamless digital payments and easy financial management.",
    "paymentMethodsSection.oowCashAlt": "Oow-Cash Icon",
    "paymentMethodsSection.moreLink": "More",
    "walletsSection.mainTitle": "Electronic Wallets",
    "walletsSection.mainDescription":
      "Get a single license for private servers and full dedicated servers",
    "walletsSection.sdadTitle": "Payment",
    "walletsSection.sdadDescription":
      "Make secure and fast payments with our reliable payment solutions, ensuring a seamless transaction experience.",
    "walletsSection.sdadAlt": "Payment Icon",
    "walletsSection.paypalTitle": "PayPal",
    "walletsSection.paypalDescription":
      "Send and receive money worldwide using PayPal, a trusted electronic payment platform offering secure transactions.",
    "walletsSection.paypalAlt": "PayPal Icon",
    "walletsSection.vodafoneTitle": "Vodafone Cash",
    "walletsSection.vodafoneDescription":
      "Easily transfer money, pay bills, and top up your balance with Vodafone's convenient mobile payment service.",
    "walletsSection.vodafoneAlt": "Vodafone Cash Icon",
    "walletsSection.zainTitle": "Zain Cash",
    "walletsSection.zainDescription":
      "Enjoy seamless financial transactions with Zain Cash, providing secure digital payments and money transfers.",
    "walletsSection.zainAlt": "Zain Cash Icon",
    "walletsSection.moreLink": "More",
    "cryptocurrenciesSection.mainTitle": "Cryptocurrencies",
    "cryptocurrenciesSection.mainDescription":
      "Get a single license for VPS and full dedicated servers",
    "cryptocurrenciesSection.ethereumAlt": "Ethereum icon",
    "cryptocurrenciesSection.binanceAlt": "Binance icon",
    "cryptocurrenciesSection.bitcoinAlt": "Bitcoin icon",
    "cryptocurrenciesSection.tetherAlt": "Tether icon",
    "traditionalPaymentSection.mainTitle": "Traditional Payment Methods",
    "traditionalPaymentSection.cdnTitle":
      "Improve Website Performance with CDN",
    "traditionalPaymentSection.cdnDescription":
      "Connect your company's domain name to enhance brand awareness and present a more professional image using a custom email",
    "traditionalPaymentSection.cdnAlt": "Card Icon",
    "traditionalPaymentSection.ddosTitle": "DDoS Attack Mitigation",
    "traditionalPaymentSection.ddosDescription":
      "Distributed Denial of Service (DDoS) attacks can disrupt your entire business. We block DDoS attacks at layers 3, 4, and 7, securing bandwidth during attacks.",
    "traditionalPaymentSection.ddosAlt": "Transfer Icon",
    "traditionalPaymentSection.securityTitle":
      "Protection Against Hacking and Malware",
    "traditionalPaymentSection.securityDescription":
      "Protect your website from malware, prevent hacking attempts, zero-day attacks, and brute-force password guessing attacks.",
    "traditionalPaymentSection.securityAlt": "Cash Icon",
    "blogsSection.title": "Blogs",
    "blogsSection.description":
      "Browse the latest and most recent articles about Nemours",
    "benefitsSection.mainTitle": "Benefits",
    "benefitsSection.description":
      "We provide a flexible work environment, continuous training, and rewards for outstanding performance.",
    "benefitsSection.trainingTitle": "Training / Educational Assistance",
    "benefitsSection.trainingAlt": "Training Icon",
    "benefitsSection.leaveTitle": "Personal and Sick Leave",
    "benefitsSection.leaveAlt": "Leave Icon",
    "benefitsSection.rewardsTitle":
      "Rewards (Outstanding Performance, Goal Achievement, Milestone Completion)",
    "benefitsSection.rewardsAlt": "Rewards Icon",
    "benefitsSection.insuranceTitle": "Health Insurance",
    "benefitsSection.insuranceAlt": "Health Insurance Icon",
    "joinUsSection.title": "Join Us Now",
    "joinUsSection.description":
      "We believe our team is the foundation of our success, and we strive to provide a motivating work environment with continuous investment in their skills development to keep up with our latest services.",
    "joinUsSection.button": "Available Jobs",
    "jobsSection.title": "Available Jobs",
    "jobsSection.description":
      "Our mission is to lead technological advancement locally, economically, and culturally, and we need passionate and dedicated individuals to achieve this goal!",
    "jobsSection.button": "Available Jobs",
    "jobsSection.rightBackgroundAlt": "Right Background",
    "jobsSection.leftBackgroundAlt": "Left Background",
    "jobsSection.lampImageAlt": "Lamp Image",
    "countrySelector.italyName": "Italy",
    "countrySelector.franceName": "France",
    "countrySelector.germanyName": "Germany",
    "countrySelector.japanName": "Japan",
    "countrySelector.finlandName": "Finland",
    "countrySelector.usaName": "USA",
    "countrySelector.turkeyName": "Turkey",
    "countrySelector.italyFlagAlt": "Italy Flag",
    "countrySelector.franceFlagAlt": "France Flag",
    "countrySelector.germanyFlagAlt": "Germany Flag",
    "countrySelector.japanFlagAlt": "Japan Flag",
    "countrySelector.finlandFlagAlt": "Finland Flag",
    "countrySelector.usaFlagAlt": "USA Flag",
    "countrySelector.turkeyFlagAlt": "Turkey Flag",
    "standalone.serverDescription":
      "You can own a dedicated server with your preferred operating system and pre-installed applications.",
    "geoRegions.header": "Multiple Geographic Regions",
    "geoRegions.text":
      "Manage and run your applications across multiple device regions through an easy and unified user interface, enabling seamless migration to be closer to your customers.",
    "geoRegions.illustrationAlt": "Geographic Regions Illustration",
    "essentialFeatures.header":
      "Enjoy a range of essential features that ensure a comprehensive and efficient experience with our services, regardless of the plan you choose",
    "essentialFeatures.serverMonitoringTitle": "24/7 Server Monitoring",
    "essentialFeatures.serverMonitoringAlt": "Server Monitoring Icon",
    "essentialFeatures.sslCertificateTitle": "Free SSL Certificate",
    "essentialFeatures.sslCertificateAlt": "SSL Certificate Icon",
    "essentialFeatures.threatProtectionTitle":
      "Protection from Harmful Threats",
    "essentialFeatures.threatProtectionAlt": "Threat Protection Icon",
    "essentialFeatures.softaculousInstallerTitle":
      "Softaculous Installer Program",
    "essentialFeatures.softaculousInstallerAlt": "Softaculous Icon",
    "essentialFeatures.regularBackupTitle": "Regular Backup",
    "essentialFeatures.regularBackupAlt": "Backup Icon",
    "essentialFeatures.linuxOsTitle": "Linux Operating System",
    "essentialFeatures.linuxOsAlt": "Linux Icon",
    "essentialFeatures.controlPanelTitle": "Cpanel/Plesk Control Panel",
    "essentialFeatures.controlPanelAlt": "Control Panel Icon",
    "essentialFeatures.technicalSupportTitle": "Continuous Technical Support",
    "essentialFeatures.technicalSupportAlt": "Technical Support Icon",
    "fullServers.mainTitle": "Dedicated Full Servers",
    "fullServers.mainDescription":
      "We provide you with user-friendly shared hosting with innovative tools to help you build and manage your website with ease",

    "hostingTiers.mainTitle": "Dedicated Server Plans",
    "hostingTiers.serverInfoTitle": "Server Information",
    "hostingTiers.serverInfoSubtitle":
      "Choose the server that suits your needs",
    "hostingTiers.priceMain": "31.99",
    "hostingTiers.priceRenewal": "20 SAR/month upon renewal",
    "hostingTiers.buyNowButton": "Buy Now",
    "hostingTiers.featuresButton": "Features",
    "hostingTiers.cpuSpecTitle": "32 Cores at 2.4 GHz",
    "hostingTiers.cpuSpecSubtitle": "Benchmark Score: 15,390",
    "hostingTiers.storageSpecTitle": "2 x 250 GB SSD Drives",
    "hostingTiers.storageSpecSubtitle": "Expandable up to 8 drives",
    "hostingTiers.databaseSpecTitle": "1 Database",
    "hostingTiers.databaseSpecSubtitle": "Expandable up to 3 databases",
    "hostingTiers.ramSpecTitle": "64 GB",
    "hostingTiers.ramSpecSubtitle": "Upgradable up to 384 GB",
    "hostingTiers.bandwidthSpecTitle": "3 Gbps Speed",
    "hostingTiers.bandwidthSpecSubtitle": "100 TB of free monthly data",
    "hostingTiers.controlPanelSpecTitle": "cPanel/WHM, Plesk",
    "hostingTiers.controlPanelSpecSubtitle": "Obsidian Web Hosting Edition",
    "hostingTiers.germanyFlagAlt": "Germany Flag",
    "hostingTiers.finlandFlagAlt": "Finland Flag",
    "hostingTiers.ukFlagAlt": "United Kingdom Flag",
    "serverServices.mainTitle": "All Services Include",
    "serverServices.emailProtection": "Email and Virus Protection",
    "serverServices.malwareProtection":
      "Protection Against Malware and Ransomware",
    "serverServices.networkSecurity":
      "Tracking, Fraud, and Protection Against Ad Network Threats, Theft, Defamation, and Customization",
    "serverServices.cloudMigration":
      "Migration from Impossible Configuration to the Cloud",
    "serverServices.threatDetection": "Advanced Threat Detection and Response",
    "serverServices.identityProtection":
      "Protection of Digital Identity and Devices",

    "backupsSection.title": "Backups",
    "backupsSection.description": "Permanent automatic backups!",
    "supportParagraph.description":
      "If you are a company customer, you can easily contact us through your account to reach our technical support or sales team. We are committed to providing the best service and fast solutions tailored to your needs.",
    "supportSectionTwo.helpCenter": "Help Center",
    "supportSectionTwo.serverStatus": "Server Status",
    "supportSectionTwo.subscriberServices": "Subscriber Services",
    "supportSectionTwo.helpCenterAlt": "Help Center Icon",
    "supportSectionTwo.serverStatusAlt": "Server Status Icon",
    "supportSectionTwo.subscriberServicesAlt": "Subscriber Services Icon",
    "supportSectionTwo.emailService": "Email Service",
    "supportSectionTwo.phone": "Phone",
    "supportSectionTwo.location": "Location",
    "supportSectionTwo.emailServiceAlt": "Email Icon",
    "supportSectionTwo.phoneAlt": "Phone Icon",
    "supportSectionTwo.locationAlt": "Location Icon",
    "supportSectionTwo.mapTitle": "Our Location on the Map",
    "supportSectionTwo.locationValue": "Riyadh, Olaya, Saudi Arabia",

    "contactForm.title":
      "Haven't found your answer yet? Get technical support now.",
    "contactForm.description":
      "With many unique solutions, you can easily build a page without the need for coding. Build your next consulting website in just a few minutes.",
    "contactForm.salesTab": "Sales",
    "contactForm.customizationTab": "Customization",
    "contactForm.trendsTab": "Trends",
    "contactForm.pricesTab": "Prices",
    "contactForm.fullNameLabel": "Full Name",
    "contactForm.usernameLabel": "Username",
    "contactForm.messageLabel": "Your Message",
    "contactForm.languageLabel":
      "Which language would you like to communicate in?",
    "contactForm.languagePlaceholder": "Select a language",
    "contactForm.languageArabic": "Arabic",
    "contactForm.languageEnglish": "English",
    "contactForm.languageSpanish": "Spanish",
    "contactForm.submitButton": "Submit",
    "contactForm.contactAlternative": "Or contact us at",

    "loginSection.logoAlt": "Logo",
    "loginSection.emailIconAlt": "Email Icon",
    "loginSection.passwordIconAlt": "Lock Icon",
    "loginSection.footerLogoAlt": "Footer Logo",
    "loginSection.title": "Login",
    "loginSection.emailPlaceholder": "Enter your email",
    "loginSection.passwordPlaceholder": "Enter the password",
    "loginSection.forgotPassword": "Forgot your login details?",
    "loginSection.loginButton": "Login",
    "loginSection.noAccount": "Don't have an account?",
    "loginSection.createAccount": "Create a new account",

    "softaculousSection.title": "Softaculous Hosting",
    "softaculousSection.description":
      "One-click installs for over 400 applications using Softaculous.",

    "appHostingSection.title": "Application Hosting",
    "appHostingSection.description":
      "Description and details about shared hosting services, designed to provide reliable and scalable solutions for your applications",
    "appHostingSection.viewPricing": "View Pricing",
    "appHostingSection.createAccount": "Create Account",
    "ecommerceSection.title": "E-commerce – electronic commerce",
    "ecommerceSection.cyclosName": "Cyclos 4 Pro",
    "ecommerceSection.magentoName": "Magento",
    "ecommerceSection.magentoClusterName": "Magento Cluster",
    "ecommerceSection.maianCartName": "Maian Cart",
    "ecommerceSection.openCartName": "OpenCart",
    "ecommerceSection.prestaShopName": "PrestaShop",
    "ecommerceSection.cyclosDescription":
      "Cyclos 4 PRO is a payment platform for large companies and institutions",
    "ecommerceSection.magentoDescription":
      "Magento is an e-commerce software and platform trusted by the world's leading brands. Grow your online business with Magento",
    "ecommerceSection.magentoClusterDescription":
      "Automated scalability and high availability Magento cluster with load balancing, data replication, content caching and user session storage.",
    "ecommerceSection.maianCartDescription":
      "Maian Cart is a fast, powerful and free e-commerce platform built with PHP and MySQL that has all the features you need to run your online store",
    "ecommerceSection.openCartDescription":
      "OpenCart is an open source online shopping system based on PHP",
    "ecommerceSection.prestaShopDescription":
      "PrestaShop is an open source and fully customizable solution for selling products online, which is efficient, fast and easy to use",
    "ecommerceSection.cyclosLogoAlt": "Cyclos 4 Pro logo",
    "ecommerceSection.magentoLogoAlt": "Magento logo",
    "ecommerceSection.maianCartLogoAlt": "Maian Cart shopping cart icon",
    "ecommerceSection.openCartLogoAlt": "OpenCart logo",
    "ecommerceSection.prestaShopLogoAlt": "PrestaShop logo",
    "ecommerceSection.launchNow": "Launch now",
    "statsSection.dataCenters": "Data Centers",
    "statsSection.uptime": "Uptime",
    "statsSection.hostedSites": "Hosted Sites",
    "statsSection.guaranteedAvailability": "Guaranteed Availability",
    "statsSection.customerSatisfaction": "Customer Satisfaction",
    "statsSection.dataCentersAlt": "Data Centers Icon",
    "statsSection.uptimeAlt": "Uptime Icon",
    "statsSection.hostedSitesAlt": "Hosted Sites Icon",
    "statsSection.guaranteedAvailabilityAlt": "Guaranteed Availability Icon",
    "statsSection.customerSatisfactionAlt": "Customer Satisfaction Icon",

    "statsSectionTwo.dataCenters": "Data Centers",
    "statsSectionTwo.uptime": "Uptime",
    "statsSectionTwo.hostedSites": "Hosted Sites",
    "statsSectionTwo.guaranteedAvailability": "Guaranteed Availability",
    "statsSectionTwo.customerSatisfaction": "Customer Satisfaction",
    "statsSectionTwo.dataCentersAlt": "Data Centers Icon",
    "statsSectionTwo.uptimeAlt": "Uptime Icon",
    "statsSectionTwo.hostedSitesAlt": "Hosted Sites Icon",
    "statsSectionTwo.guaranteedAvailabilityAlt": "Guaranteed Availability Icon",
    "statsSectionTwo.customerSatisfactionAlt": "Customer Satisfaction Icon",
    "achievementsSectionTwo.title": "Our Achievements",
    "achievementsSectionTwo.description":
      "Founded by Ali Al-Mansi and Yahya Hassan, it began operations specializing in hosting services with a team of just 3 individuals.",

    "contactSection.description":
      "Are you interested in learning how we can help your business succeed? Contact us.",
    "contactSection.helpTitle": "Need Help?",
    "contactSection.helpDescription":
      "Get in touch with us and receive assistance",
    "contactSection.contactButton": "Contact Now",
    "contactSection.microsoftLogoAlt": "Microsoft Logo",
    "contactSection.partner1LogoAlt": "Partner 1 Logo",
    "contactSection.partner2LogoAlt": "Partner 2 Logo",
    "contactSection.partner3LogoAlt": "Partner 3 Logo",
    "contactSection.partner4LogoAlt": "Partner 4 Logo",

    "tigersSection.title": "About Nomoar",
    "tigersSection.description":
      "Nomoar is the leading provider of cloud services in Saudi Arabia, dedicated to supporting and protecting the technical infrastructure of organizations of all sizes.",
    "featuresSection.title": "Features",
    "featuresSection.multilingualSites": "Multilingual Websites",
    "featuresSection.fiftyLanguages": "Support for 50 Languages",
    "featuresSection.responsiveDesign": "Responsive Design for All Devices",
    "featuresSection.easyTool": "User-Friendly Tool",
    "featuresSection.videoTutorials": "Video Tutorials on How to Use",
    "featuresSection.plugins": "Plugins",
    "featuresSection.templates": "Over a Million Templates",
    "featuresSection.siteMigration":
      "Ability to Migrate Sites from Other Builders",
    "featuresSection.multilingualSitesAlt": "Multilingual Websites Icon",
    "featuresSection.fiftyLanguagesAlt": "50 Languages Support Icon",
    "featuresSection.responsiveDesignAlt": "Responsive Design Icon",
    "featuresSection.easyToolAlt": "User-Friendly Tool Icon",
    "featuresSection.videoTutorialsAlt": "Video Tutorials Icon",
    "featuresSection.pluginsAlt": "Plugins Icon",
    "featuresSection.templatesAlt": "Templates Icon",
    "featuresSection.siteMigrationAlt": "Site Migration Icon",
    "featuresSection.rightImgAlt": "Right Background Image",
    "featuresSection.leftImgAlt": "Left Background Image",
    "oneClickApps.helmChartsAlt": "Helm Charts Icon",
    "oneClickApps.certManagerAlt": "Certificate Manager Icon",
    "oneClickApps.linkerdAlt": "Linkerd Icon",
    "oneClickApps.operatorsAlt": "Operators Icon",
    "oneClickApps.illustrationAlt": "One-Click Apps Illustration",
    "distributorBasicNeed.title":
      "Do you need licenses to operate your server?",
    "distributorBasicNeed.subtitle": "We provide them at the lowest cost",
    "distributorBasicNeed.registerButton": "Registration Form",
    "distributorBasicNeed.distributorsButton": "Distributors",
    "distributorBasicNeed.settingsIllustrationAlt": "Settings",

    "kubernetes.title": "Build Kubernetes Clusters in Minutes",
    "resellerHosting.title": "Reseller Hosting",
    "resellerHostingPlus.title": "Distributor Plus",
    "resellerHostingUltra.title": "Distributor Ultra",
    "resellerHostingProgram.title": "Reseller Program",
    "resellerHosting.description": "Generate profits and expand your services.",

    "windowsHosting.title": "Windows Hosting",
    "windowsHosting.description":
      "One of the best, fastest, and easiest hosting services",
    "support.title": "Not sure where to start? Don’t worry, we’re here to help",
    "support.description":
      "Libya Spider, as an official Microsoft cloud solutions provider, is ready to assist your organization in adopting and fully integrating the Microsoft 365 cloud productivity solution into your workflow.",
    "support.successMessage":
      "We are proud to have supported numerous companies in their successful transition to Microsoft 365 services – and we’re excited to help you too!",
    "support.cta": "Request Now!",
    "support.settingsChanges": "Settings Changes",
    "support.settingsChangesAlt": "Settings Changes Icon",
    "support.training": "Training",
    "support.trainingAlt": "Training Icon",
    "support.technicalSupport": "Technical Support",
    "support.technicalSupportAlt": "Technical Support Icon",
    "support.settingsCustomization": "Settings and Customization",
    "support.settingsCustomizationAlt": "Settings and Customization Icon",
    "support.dataUserMigration": "Data and User Migration",
    "support.dataUserMigrationAlt": "Data and User Migration Icon",
    "support.sharePointMigration": "SharePoint Online Migration",
    "support.sharePointMigrationAlt": "SharePoint Online Migration Icon",
    "tigersHosting.title": "Nomoar Hosting",
    "tigersHosting.description":
      "Easy-to-manage and cost-effective cloud infrastructure",
    "cloudInfrastructure.title":
      "Flexible, Easy-to-Manage, and Scalable Infrastructure",
    "cloudInfrastructure.description":
      "LS Cloud combines compute, storage, and networking resources along with advanced analytics and monitoring tools in a single, user-friendly cloud platform.",
    "cloudInfrastructure.tools":
      "Tools in a single, user-friendly cloud platform.",
    "cloudInfrastructure.resources": "Cloud resources deployable in minutes",
    "cloudInfrastructure.loadMetrics": "Load Metrics",
    "cloudInfrastructure.loadMetricsAlt": "Load Metrics Icon",
    "cloudInfrastructure.networking": "Networking",
    "cloudInfrastructure.networkingAlt": "Networking Icon",
    "cloudInfrastructure.storageSizes": "Storage Sizes",
    "cloudInfrastructure.storageSizesAlt": "Storage Sizes Icon",
    "cloudInfrastructure.virtualServers": "Virtual Servers",
    "cloudInfrastructure.virtualServersAlt": "Virtual Servers Icon",
    "cloudInfrastructure.backgroundAlt": "Cloud Background",
    "whyChooseTigers.blockUnauthorizedEmail": "Block Unauthorized Email",
    "whyChooseTigers.blockUnauthorizedEmailDesc":
      "With PowerDMARC, you not only eliminate email spoofing but also leverage detailed reports to adjust your content strategy instantly. Leave nothing to chance.",
    "whyChooseTigers.blockUnauthorizedEmailAlt":
      "Block Unauthorized Email Icon",
    "whyChooseTigers.preventEmailSpoofing": "Prevent Email Spoofing",
    "whyChooseTigers.preventEmailSpoofingDesc":
      "Protect your domain from email spoofing and phishing attacks using advanced authentication protocols. Ensure only authorized senders can use your domain.",
    "whyChooseTigers.preventEmailSpoofingAlt": "Prevent Email Spoofing Icon",
    "whyChooseTigers.enhanceEmailSecurity": "Enhance Email Security",
    "whyChooseTigers.enhanceEmailSecurityDesc":
      "Gain full visibility into your email traffic and detect unauthorized activities in real-time. Keep your communication secure and compliant.",
    "whyChooseTigers.enhanceEmailSecurityAlt": "Enhance Email Security Icon",
    "whyChooseTigers.verifyEmail": "Verify Every Email",
    "whyChooseTigers.verifyEmailDesc":
      "Use DMARC, SPF, and DKIM to validate your emails and prevent cybercriminals from spoofing your domain. Build trust with recipients.",
    "whyChooseTigers.verifyEmailAlt": "Verify Every Email Icon",
    "whyChooseTigers.backgroundRightAlt": "Right Background",
    "whyChooseTigers.backgroundLeftAlt": "Left Background",

    "businessHosting.title": "Business Hosting",
    "businessHosting.description":
      "One of the best, fastest, and easiest hosting services",
    "servicesThree.title": "Launch Fast and Grow Your Business",
    "servicesThree.reliableStaticHosting": "Reliable Static Hosting",
    "servicesThree.reliableStaticHostingDesc":
      "Host your static websites with lightning-fast load times and unmatched stability. Enjoy seamless deployment with a globally distributed CDN.",
    "servicesThree.reliableStaticHostingAlt": "Reliable Static Hosting Icon",
    "servicesThree.scalableCloudStorage": "Scalable Cloud Storage",
    "servicesThree.scalableCloudStorageDesc":
      "Store and access your data securely with high-performance cloud storage. Scale effortlessly as your business grows with enhanced redundancy.",
    "servicesThree.scalableCloudStorageAlt": "Scalable Cloud Storage Icon",
    "servicesThree.enterpriseStaticHosting": "Enterprise-Level Static Hosting",
    "servicesThree.enterpriseStaticHostingDesc":
      "Deliver your static applications with security and high performance. Benefit from instant updates, global access, and zero maintenance.",
    "servicesThree.enterpriseStaticHostingAlt":
      "Enterprise Static Hosting Icon",
    "mainFeatures.title": "Key Features",
    "mainFeatures.description":
      "Own your dedicated server with your preferred operating system and pre-installed applications.",
    "mainFeatures.crossPlatform": "Works Across Multiple Platforms",
    "mainFeatures.crossPlatformAlt": "Cross-Platform Icon",
    "mainFeatures.ddosMitigation": "DDoS Attack Mitigation",
    "mainFeatures.ddosMitigationAlt": "DDoS Mitigation Icon",
    "mainFeatures.malwareDetection": "Malware Detection and Removal",
    "mainFeatures.malwareDetectionAlt": "Malware Detection Icon",
    "mainFeatures.sslCertificate": "SSL Security Certificate",
    "mainFeatures.sslCertificateAlt": "SSL Certificate Icon",
    "mainFeatures.securityMonitoring": "Security Monitoring",
    "mainFeatures.securityMonitoringAlt": "Security Monitoring Icon",
    "mainFeatures.performanceOptimization": "Performance Optimization",
    "mainFeatures.performanceOptimizationAlt": "Performance Optimization Icon",
    "mainFeatures.backgroundRightAlt": "Right Background Image",
    "mainFeatures.backgroundLeftAlt": "Left Background Image",

    "emailHosting.title": "Email Hosting",
    "emailHosting.description":
      "One of the best, fastest, and easiest hosting services",
    "businessNeeds.title": "Everything Your Business Needs",
    "businessNeeds.brandAwareness": "Increase Brand Awareness",
    "businessNeeds.brandAwarenessDesc":
      "Link your company's domain name to enhance brand awareness and present a more professional image using a custom email",
    "businessNeeds.brandAwarenessAlt": "Brand Awareness Icon",
    "businessNeeds.security": "Security",
    "businessNeeds.securityDesc":
      "Using AI and smart email protection software, LS Suite protects your inbox from spam, viruses, malware, ransomware, and phishing attacks.",
    "businessNeeds.securityAlt": "Security Icon",
    "businessNeeds.accessCollaboration": "Easy Access and Collaboration",
    "businessNeeds.accessCollaborationDesc":
      "Access your email, calendar, contacts, and files from anywhere on any device, and collaborate with your team in real-time, with all changes saved automatically.",
    "businessNeeds.accessCollaborationAlt": "Access and Collaboration Icon",
    "emailSecurity.title": "Strong Security for Email Protection",
    "emailSecurity.description":
      "Protect your professional email with AI-powered security against spam, phishing, and malware.",
    "emailSecurity.backupRestore":
      "Backup and restore for physical, virtual, and cloud environments.",
    "emailSecurity.backupRestoreAlt": "Backup and Restore Icon",
    "emailSecurity.antiSpamPhishing":
      "Advanced integrated tools to combat spam, viruses, and phishing.",
    "emailSecurity.antiSpamPhishingAlt": "Anti-Spam and Phishing Tools Icon",
    "emailSecurity.documentProtection":
      "Protect shared documents with passwords and time restrictions.",
    "emailSecurity.documentProtectionAlt": "Document Protection Icon",
    "emailSecurity.encryption":
      "Easily encrypt emails and files to protect sensitive information.",
    "emailSecurity.encryptionAlt": "Email and File Encryption Icon",
    "emailSecurity.backgroundAlt": "Background Image",
    "keyFeaturesTwo.title": "Key Features",
    "keyFeatures.description":
      "Own your dedicated server with your preferred operating system and pre-installed applications.",
    "keyFeatures.mailStorage": "Email Storage Capacity",
    "keyFeatures.mailStorageAlt": "Email Storage Icon",
    "keyFeatures.reliableEmail": "Reliable Email with 99.9% Uptime Guarantee",
    "keyFeatures.reliableEmailAlt": "Reliable Email Icon",
    "keyFeatures.customEmail": "Custom and Secure Business Email",
    "keyFeatures.customEmailAlt": "Custom Email Icon",
    "keyFeatures.calendarSharing": "Calendar, Contacts, and Tasks Sharing",
    "keyFeatures.calendarSharingAlt": "Calendar Sharing Icon",
    "keyFeatures.spamProtection": "Spam Filtering and Virus Protection",
    "keyFeatures.spamProtectionAlt": "Spam Protection Icon",
    "callToAction.title": "Start Your Easy Transition with Us",
    "callToAction.description":
      "Upgrade your email to LS Suite easily, quickly, and securely with the help of Libyan Spider. Begin your journey to improve productivity and enhance email security with our full support, ensuring no interruptions, downtime, or data loss of any kind.",
    "callToAction.startNow": "Start Now!",
    "callToAction.settingsAlt": "Settings",

    "hostingProgrammers.title": "Hosting Programmers",
    "hostingProgrammers.description":
      "High-performance and 100% stable cloud servers with multiple geographic locations",
    "hostingProgrammers.startNow": "Start Now",
    "servicesTwo.title": "Why Choose Al-Namur?",
    "servicesTwo.description":
      "Advanced and comprehensive solutions and services for individuals and organizations",
    "services.scalableStorageTwo": "Scalable Storage",
    "services.scalableStorageDescTwo":
      "Flexible cloud storage that adapts to your growing needs.",
    "services.scalableStorageAltTwo": "Scalable Storage Icon",
    "services.enterpriseHostingTwo": "Enterprise Hosting",
    "services.enterpriseHostingDescTwo":
      "Advanced hosting solutions tailored for large businesses.",
    "services.enterpriseHostingAltTwo": "Enterprise Hosting Icon",
    "services.reliableHostingTwo": "Reliable Hosting",
    "services.reliableHostingDescTwo":
      "Stable hosting with high performance and guaranteed uptime.",
    "services.reliableHostingAltTwo": "Reliable Hosting Icon",
    "services.backgroundDecorationAltTwo": "Background Decorative Image",
    "imglist.contactUs":
      "Interested in learning how we can help your business succeed? Contact us",
    "imglist.partnerLogoAlt": "Partner Logo",
    "sslSection.title": "More Than Just a Security Matter",
    "sslSection.description":
      "Having an SSL certificate for websites is an urgent necessity, not just from a security perspective.",
    "sslSection.buildTrust": "Build Customer Trust",
    "sslSection.buildTrustDesc":
      "Show your customers that your online business is secure and authenticated, ensuring their sensitive data and electronic payments are fully protected.",
    "sslSection.buildTrustAlt": "Build Customer Trust Icon",
    "sslSection.seoRanking": "Boost Your Site’s SEO Ranking",
    "sslSection.seoRankingDesc":
      "Secured websites have an advantage in achieving higher rankings in search engine results, as security is a key factor in the ranking process.",
    "sslSection.seoRankingAlt": "SEO Ranking Icon",
    "sslSection.browserCompatibility":
      "Ensure Your Site’s Visibility Across Browsers",
    "sslSection.browserCompatibilityDesc":
      "If your site lacks an SSL certificate, most globally popular web browsers will mark it as 'not secure' with a warning sign, and some browsers may even block it entirely from users.",
    "sslSection.browserCompatibilityAlt": "Browser Compatibility Icon",
    "whois.title": "What is the WHOIS Tool?",
    "whois.description":
      "The WHOIS tool is a service that provides information about domain names, including the domain owner, registration details, expiration date, and associated contact information. It helps users verify domain ownership, check domain availability, and validate the legitimacy of websites. Many domain registrars and cybersecurity professionals use the WHOIS tool for research, cybersecurity, and compliance purposes.",

    "websiteBuilder.title":
      "Build Your Website Easily with Our Website Builder",
    "websiteBuilder.chooseTemplate": "Choose Your Template",
    "websiteBuilder.chooseTemplateDesc":
      "Choose from 200 stunning templates to start building your site.",
    "websiteBuilder.enhanceFunctionality": "Enhance Your Site’s Functionality",
    "websiteBuilder.enhanceFunctionalityDesc":
      "Get numerous plugins, tools, and features you need to improve your site, including essentials like your photo gallery, media, social media platforms, and more.",
    "websiteBuilder.previewSite": "Preview Your Site",
    "websiteBuilder.previewSiteDesc":
      "View your site with the selected template before publishing it publicly.",
    "websiteBuilder.publishSave": "Publish or Save Your Site – One Click",
    "websiteBuilder.publishSaveDesc":
      "You can publish your site online or save a draft of your site without publishing it.",
    "websiteBuilder.chooseTemplateAlt": "Choose Template Icon",
    "websiteBuilder.websiteBuilderAlt": "Website Builder Icon",
    "featuresNine.title": "Features",
    "featuresNine.description": "Core features in all our plans",
    "featuresNine.multilingualSites": "Multilingual Websites",
    "featuresNine.languageSupport": "Support for 50 Languages",
    "featuresNine.responsiveDesign": "Responsive Design Across Devices",
    "featuresNine.easyTool": "Easy-to-Use Tool",
    "featuresNine.videoTutorials": "Video Tutorials on Usage",
    "featuresNine.plugins": "Plugins",
    "featuresNine.millionTemplates": "Over a Million Templates",
    "featuresNine.siteMigration":
      "Ability to Migrate Sites from Other Builders",
    "featuresNine.iconAlt": "Icon",
    "featuresNine.rightImageAlt": "Right Decorative Image",
    "featuresNine.leftImageAlt": "Left Decorative Image",
    "wordpressHosting.title": "WordPress Hosting",
    "wordpressHosting.description":
      "An optimized environment for growing your site using WordPress",
    "wordpressHosting.startNow": "Start Now!",
    "kubernetes.description":
      "Stop wasting time and effort managing Kubernetes clusters. With our fully managed Kubernetes engine, you can easily deploy, manage, and scale your application's containerized resources in minutes instead of days.",
    "kubernetes.orderNow": "Order Now!",
    "services.titletwo": "Launch Fast and Grow Your Business",
    "services.reliableHosting": "Reliable Static Hosting",
    "services.reliableHostingDesc":
      "Host your static sites with lightning-fast load times and unmatched stability. Enjoy seamless deployment with a globally distributed CDN.",
    "services.scalableStorage": "Scalable Cloud Storage",
    "services.scalableStorageDesc":
      "Store and access your data securely with high-performance cloud storage. Scale effortlessly as your business grows with enhanced redundancy.",
    "services.enterpriseHosting": "Enterprise-Grade Static Hosting",
    "services.enterpriseHostingDesc":
      "Deliver your static applications securely with high performance. Benefit from instant updates, global access, and zero maintenance.",
    "services.reliableHostingAlt": "Reliable Static Hosting Icon",
    "services.scalableStorageAlt": "Scalable Cloud Storage Icon",
    "services.enterpriseHostingAlt": "Enterprise-Grade Static Hosting Icon",
    "services.backgroundDecorationAlt": "Background Decoration",
    "oneClickApps.title": "Get Started Quickly with One-Click Apps",
    "oneClickApps.description":
      "Our Kubernetes engine supports integration with popular Kubernetes tools, allowing you to create clusters running pre-configured open-source software with a single click.",
    "oneClickApps.helmCharts": "Helm Charts",
    "oneClickApps.certManager": "Certificate Manager",
    "oneClickApps.linkerd": "Linkerd",
    "oneClickApps.operators": "Operators",
    "oneClickApps.imageAlt": "One-Click Applications",
    "templates.million": "1,000,000+",
    "templates.title": "Over 1,000,000 Ready-to-Use Templates for All Purposes",
    "templates.description":
      "For all types of business and personal activities, our website builder provides over 1,000,000 stunning ready-to-use templates with fully customizable and editable designs.",
    "templates.viewMore": "View More",

    "hosting.windows": "Windows Hosting",
    "hosting.windows.description":
      "Windows-based hosting with support for .NET and other Microsoft technologies.",
    "sharedHosting.title": "Shared Hosting",
    "sharedHosting.description":
      "High-performance and 100% stable cloud servers with multiple geographic locations",
    "sharedHosting.startNow": "Start Now!",
    "smallContent.feature.backupRecovery":
      "Backup and recovery for physical, virtual, and cloud environments.",
    "smallContent.feature.malwareProtection":
      "Malware protection and anti-ransomware.",
    "smallContent.feature.deviceProtection":
      "Endpoint protection and management.",
    "smallContent.feature.threatDetection":
      "Advanced threat detection and response.",
    "smallContent.feature.emailProtection": "Email protection and archiving.",
    "smallContent.feature.disasterRecovery": "Cloud-based disaster recovery.",
    "smallContent.feature.centralManagement":
      "Centralized management and monitoring.",
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
    "whyChooseTigers.title": "Why Choose Nomoar",
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
    "serverLocations.india": "India",
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
    "notFound.title": "Page Non Trouvée",
    "notFound.description":
      "Désolé, la page que vous recherchez n'est pas disponible ou a peut-être été déplacée.",
    "notFound.backToHome": "Retour à la page d'accueil",
    "brandGuidelines.colorPaletteTitle": "Couleurs Namoor",
    "brandGuidelines.colorPaletteDescription":
      "Nous avons utilisé trois couleurs pour exprimer l’identité de Mahjooz : le blanc, le turquoise et le noir. Ces couleurs ont un ton formel adapté aux services d’hébergement et de support, où le turquoise symbolise la facilité d’utilisation, le blanc représente la simplicité, et le noir indique le sérieux, combinés de trois manières comme suit :",
    "brandGuidelines.colorCodesTitle": "Voici les codes pour chaque couleur :",
    "brandGuidelines.headerTitle": "Directives de la marque",
    "brandGuidelines.headerDescription":
      "Un guide pour afficher clairement et systématiquement le logo, les couleurs, les codes et l’identité",
    "brandGuidelines.logoTitle": "Logo",
    "brandGuidelines.logoDescription":
      "Le logo Namoor combine l’identité et la vision de l’entreprise. Son concept provient du chevauchement des lettres « p » et « z », qui, une fois fusionnées, forment le symbole infini « ma », reflétant la vision de l’entreprise de service et de soutien continus.",
    "brandGuidelines.logoAlt": "Logos combinés",
    "brandGuidelines.logoSizesTitle": "Tailles du logo",
    "brandGuidelines.logoSizesDescription":
      "Le logo est conçu dans différentes tailles pour convenir à tout environnement d’utilisation.",
    "brandGuidelines.logoSizesAlt": "Logo en différentes tailles",
    "brandGuidelines.typographyTitle": "Typographie Namoor",
    "brandGuidelines.typographyDescription":
      "Nous avons utilisé la police « Cairo » pour les textes en anglais et en arabe en raison de sa simplicité et de sa lisibilité.",
    "brandGuidelines.typographyFontName": "C a i r o",
    "brandGuidelines.downloadsTitle": "Téléchargements",
    "brandGuidelines.downloadsDescription":
      "Nous avons fourni tous les éléments dont vous pourriez avoir besoin lorsque vous utilisez le nom Namoor dans n’importe quel design, du logo aux matériaux promotionnels pour des événements ou des conférences.",
    "brandGuidelines.downloadItem1Alt": "Logo circulaire bleu foncé",
    "brandGuidelines.downloadItem1Title": "Logo Namoor",
    "brandGuidelines.downloadItem2Alt": "Logo circulaire bleu foncé",
    "brandGuidelines.downloadItem2Title": "Entreprise Namoor",
    "brandGuidelines.downloadItem3Alt":
      "Logo circulaire bleu foncé sur fond bleu clair",
    "brandGuidelines.downloadItem3Title": "Entreprise Namoor",
    "brandGuidelines.downloadItem4Alt": "Logo circulaire bleu foncé",
    "brandGuidelines.downloadItem4Title": "Logo secondaire Namoor",
    "brandGuidelines.downloadPDF": "PDF",
    "brandGuidelines.downloadSVG": "SVG",
    "brandGuidelines.downloadPNG": "PNG",
    "brandGuidelines.identityTitle":
      "Voici l’identité de Namoor, présentée sous plusieurs formes.",
    "brandGuidelines.identityCard1Title": "Entreprise Namoor",
    "brandGuidelines.identityCard1Alt": "Logo avec texte arabe",
    "brandGuidelines.identityCard2Title": "Entreprise Namoor",
    "brandGuidelines.identityCard2Alt": "Logo avec texte arabe",
    "brandGuidelines.identityBottomAlt":
      "Deux logos circulaires, l’un sur un fond gris clair et l’autre sur un fond blanc",

    "domainFeatures.mainTitle": "Pourquoi acheter des domaines chez Namoor ?",
    "domainFeatures.lockTitle": "Verrouillage de domaine",
    "domainFeatures.lockDescription":
      "Verrouillez votre domaine pour empêcher les transferts non autorisés de vos noms de domaine.",
    "domainFeatures.renewalTitle": "Excellents taux de renouvellement",
    "domainFeatures.renewalDescription":
      "Quand vient le moment de renouveler votre domaine, vous n’aurez jamais à craindre de vous ruiner.",
    "domainFeatures.autoRenewalTitle": "Renouvellement automatique",
    "domainFeatures.autoRenewalDescription":
      "Ne perdez jamais votre domaine (même si vous oubliez) grâce à notre option de renouvellement automatique.",
    "domainFeatures.managementTitle": "Gestion facile",
    "domainFeatures.managementDescription":
      "Gérez votre domaine avec un panneau de contrôle et un tableau de bord faciles à utiliser.",
    "domainFeatures.privacyTitle": "Protection de la confidentialité Whois",
    "domainFeatures.privacyDescription":
      "Besoin de confidentialité ? Nous protégerons vos informations personnelles dans la base de données WHOIS pour une petite somme.",
    "domainFeatures.pricingTitle": "Prix bas et vaste sélection",
    "domainFeatures.pricingDescription":
      "Enregistrez votre domaine à un prix bas et choisissez parmi une large gamme d’extensions.",
    "domainPricingTable.title1": "Explorez les possibilités",
    "domainPricingTable.title2": "Depuis notre liste de domaines",
    "domainPricingTable.domain": "Domaine",
    "domainPricingTable.registration": "Enregistrement",
    "domainPricingTable.renewal": "Renouvellement",
    "domainPricingTable.transfer": "Transfert",
    "domainPricingTable.protection": "Protection de l’identité",
    "domainPricingTable.searchPlaceholder": "Rechercher...",
    "domainPricingTable.noResults": 'Aucun résultat pour "{searchTerm}"',
    "domainPricingTable.previous": "Précédent",
    "domainPricingTable.next": "Suivant",
    "domainPricingTable.currencySymbol": "€",
    "domainInfographic.titlePart1": "Choses à retenir",
    "domainInfographic.titlePart2": "Avant d’acheter des domaines",
    "domainInfographic.section1Title": "Restez simple",
    "domainInfographic.section1Description":
      "Ne compliquez pas les choses. Un nom de domaine facile à retenir est toujours le meilleur choix.",
    "domainInfographic.section2Title": "Agissez maintenant",
    "domainInfographic.section2Description":
      "Restez fidèle à votre marque. Soyez distinctif mais choisissez un domaine que votre public reconnaîtra.",
    "domainInfographic.section3Title": "Évitez les tirets",
    "domainInfographic.section3Description":
      "Ce n’est pas parce que l’internet est technique que votre nom de domaine doit l’être.",
    "priceDomains.backgroundAlt": "Motif décoratif de fond",
    "priceDomains.title":
      "Choisissez parmi les extensions de domaine les plus populaires",
    "priceDomains.domainName": "Nom de domaine",
    "priceDomains.price": "6,49 €/an",
    "priceDomains.originalPrice": "Au lieu de 14,98 €/an",
    "priceDomains.domainAriaLabel": "Nom de domaine {tld}",
    "domainSearchSection.title": "Recherchez et achetez un domaine",
    "domainSearchSection.description": "Obtenez le domaine que vous cherchiez.",
    "domainSearchSection.searchPlaceholder": "Tapez ici pour rechercher",
    "domainSearchSection.searchButton": "Rechercher",
    "domainSearchSection.popular": "Populaire",
    "domainSearchSection.geographic": "Géographique",
    "domainSearchSection.technology": "Technologie",
    "domainSearchSection.service": "Service",
    "domainSearchSection.business": "Affaires",
    "domainSearchSection.media": "Médias",
    "domainSearchSection.shopping": "Shopping",
    "domainSearchSection.more": "Plus",
    "domainSearchSection.domainImageAlt": "Illustration de domaine",
    "namoorSection.title": "Entreprise Namoor",
    "partnersSection.mainTitle": "Partenaires de succès",
    "partnersSection.rightBackgroundAlt": "Fond SVG droit",
    "partnersSection.leftBackgroundAlt": "Fond SVG gauche",
    "partnersSection.sucuriName": "SUCURI",
    "partnersSection.sucuriDescription":
      "Nous proposons des services de protection de sites web avancés grâce à des technologies de pointe garantissant une sécurité totale. Nous offrons des solutions complètes pour protéger les sites contre les cyberattaques et les logiciels malveillants. Notre équipe dédiée travaille 24/7 pour assurer le fonctionnement sécurisé de votre site.",
    "partnersSection.sucuriLogoAlt": "Logo SUCURI",
    "partnersSection.softaculousName": "Softaculous",
    "partnersSection.softaculousDescription":
      "Une plateforme complète pour gérer les applications et logiciels en toute simplicité. Nous fournissons une bibliothèque complète d’applications prêtes à être installées en un clic. Nos solutions simplifient la gestion des sites web et des applications diverses avec une grande efficacité et flexibilité.",
    "partnersSection.softaculousLogoAlt": "Logo Softaculous",
    "partnersSection.linuxName": "Linux",
    "partnersSection.linuxDescription":
      "Un système d’exploitation open-source offrant une grande stabilité et sécurité. Nous proposons des solutions d’hébergement avancées utilisant divers systèmes Linux. Notre équipe spécialisée garantit des performances optimales et une stabilité totale pour tous les services fournis.",
    "partnersSection.linuxLogoAlt": "Logo Linux",
    "paymentSection.description":
      "Payez de la manière qui vous convient et profitez d’une expérience de paiement facile et fluide",
    "whoisTool.whoisTitle": "Outil Whois",
    "whoisTool.whoisDescription":
      "Recherche professionnelle de données de domaine",
    "whoisTool.searchButton": "Rechercher",
    "whoisTool.searchPlaceholder": "Entrez le nom de domaine",
    "whoisTool.whatIsWhoisTitle": "Qu’est-ce que l’outil Whois ?",
    "whoisTool.whatIsWhoisDescription":
      "Whois est un outil utilisé pour interroger les informations d’enregistrement de domaine, telles que le propriétaire, la date d’enregistrement et la date d’expiration.",
    "whoisTool.groupImageAlt": "Illustration de l’outil Whois",
    "whoisTool.howItWorksTitle": "Comment ça fonctionne ?",
    "whoisTool.howItWorksDescription":
      "Whois fonctionne en interrogeant une base de données publique pour récupérer les détails d’enregistrement de domaine stockés auprès des registraires.",
    "whoisTool.sslWhoisImageAlt": "Illustration SSL et Whois",
    "websiteSuccessCriteria.sslTitle": "Certificats SSL",
    "websiteSuccessCriteria.sslDescription":
      "La solution parfaite pour sécuriser votre site web et protéger les données des utilisateurs.",
    "websiteSuccessCriteria.cloudflareTitle": "Cloudflare",
    "websiteSuccessCriteria.cloudflareDescription":
      "La solution idéale pour une expérience web plus rapide, plus sûre et plus fiable.",
    "websiteSuccessCriteria.cloudflareEnhanceTitle":
      "Renforcez la protection de votre site web contre les cybermenaces et améliorez ses performances avec Cloudflare.",
    "websiteSuccessCriteria.cloudflareEnhanceDescription":
      "De la protection contre les cybermenaces à l’accélération de la livraison de contenu, Cloudflare est votre partenaire de confiance pour la performance et la sécurité web.",
    "websiteSuccessCriteria.mainTitle":
      "Établissez une nouvelle norme pour le succès de votre site web",
    "websiteSuccessCriteria.performanceTitle": "Performance ultra-rapide",
    "websiteSuccessCriteria.globalSpeedBoost": "Boost de vitesse global",
    "websiteSuccessCriteria.contentDelivery":
      "Optimisation de la livraison de contenu",
    "websiteSuccessCriteria.loadBalancing": "Équilibrage de charge",
    "websiteSuccessCriteria.latencyReduction": "Réduction de la latence",
    "websiteSuccessCriteria.globalSpeedBoostIconAlt":
      "Icône de boost de vitesse global",
    "websiteSuccessCriteria.globalSpeedBoostDescription":
      "Grâce au CDN mondial de Cloudflare, votre site web se charge rapidement pour les visiteurs partout dans le monde.",
    "websiteSuccessCriteria.securityTitle": "Sécurité inégalée",
    "websiteSuccessCriteria.ddosProtection":
      "Protection contre les attaques DDoS",
    "websiteSuccessCriteria.webApplicationFirewall":
      "Pare-feu d’application web (WAF)",
    "websiteSuccessCriteria.sslTlsEncryption": "Chiffrement SSL/TLS",
    "websiteSuccessCriteria.botManagement": "Gestion des bots",
    "websiteSuccessCriteria.realTimeThreatAnalysis":
      "Analyse des menaces en temps réel",
    "websiteSuccessCriteria.securityIconAlt": "Icône de sécurité",
    "websiteSuccessCriteria.ddosProtectionDescription":
      "Le réseau de Cloudflare est conçu pour absorber et atténuer les attaques DDoS, garantissant que votre site reste disponible même pendant les attaques ciblées.",
    "websiteSuccessCriteria.signUpNow": "S’inscrire maintenant",
    "cloudflareSection.cloudflareTitle": "Cloudflare",
    "cloudflareSection.cloudflareDescription":
      "La solution idéale pour une expérience web plus rapide, plus sûre et plus fiable.",
    "cloudflareSection.cloudflareEnhanceTitle":
      "Renforcez la protection de votre site web contre les cybermenaces et améliorez ses performances avec Cloudflare.",
    "cloudflareSection.cloudflareEnhanceDescription":
      "De la protection contre les cybermenaces à l’accélération de la livraison de contenu, Cloudflare est votre partenaire de confiance pour la performance et la sécurité web.",
    "cloudflareSection.signUpNow": "S’inscrire maintenant",
    "sslSection.sslTitle": "Certificats SSL",
    "sslContent.rightBackgroundAlt": "Fond droit avec icônes",
    "sslContent.leftBackgroundAlt": "Fond gauche avec icônes",
    "sslContent.trustTitle": "Renforcez la fiabilité de votre entreprise",
    "sslContent.trustDescription":
      "Protégez les données de votre site web - et celles de vos visiteurs - en établissant une connexion sécurisée et en chiffrant les données fournies par les certificats SSL. Faites savoir à tous les visiteurs de votre site que celui-ci est sécurisé et fiable grâce à l’icône de cadenas distinctive et au préfixe https:// dans votre nom de domaine.",
    "sslContent.chooseSslTitle": "Choisissez le bon certificat SSL",
    "sslContent.chooseSslDescription":
      "La société Libyan Spider vous propose une variété de certificats de protection issus des entreprises les plus fiables du secteur à l’échelle mondiale.",
    "choosePlan.rightBackgroundAlt": "Fond SVG droit",
    "choosePlan.leftBackgroundAlt": "Fond SVG gauche",
    "choosePlan.mainTitle": "Choisissez le bon plan",
    "choosePlan.planTitle": "GeoTrust QuickSSL Premium",
    "choosePlan.currency": "LYD/Trimestriel",
    "choosePlan.validation": "Validation",
    "choosePlan.organization": "Organisation",
    "choosePlan.siteSeal": "Sceau du site",
    "choosePlan.dynamic": "Dynamique",
    "choosePlan.orderNow": "Commander maintenant",
    "websiteSecurity.title":
      "La sécurité des sites web et le cryptage des données ne sont plus optionnels",
    "websiteSecurity.description":
      "Les sites web marqués comme 'Non sécurisé' ne sont plus acceptables. Un certificat SSL n’est plus un choix ; c’est une exigence fondamentale pour la sécurité des sites web dans le monde d’aujourd’hui. Le cryptage des données et les connexions sécurisées éliminent les risques des cyberattaques émergentes et croissantes qui peuvent exploiter toute vulnérabilité de sécurité.",
    "websiteSecurity.securityImageAlt": "Image de sécurité de site web",
    "beyondProtection.bigBlocksAlt": "Fond de blocs volumineux",
    "beyondProtection.mainTitle": "Plus qu’une simple protection",
    "beyondProtection.mainDescription":
      "Possédez votre serveur dédié avec le système d’exploitation de votre choix et des applications préinstallées.",
    "beyondProtection.browserCompatibilityTitle":
      "Assurez l’affichage de votre site sur tous les navigateurs",
    "beyondProtection.browserCompatibilityDescription":
      "Si votre site web n’a pas de certificat SSL, la plupart des navigateurs populaires dans le monde le marqueront comme 'Non sécurisé' avec un avertissement, et certains navigateurs pourraient même le bloquer complètement pour les utilisateurs.",
    "beyondProtection.customerTrustAlt": "Icône de confiance des clients",
    "beyondProtection.seoTitle":
      "Améliorez le classement de votre site dans les moteurs de recherche (SEO)",
    "beyondProtection.seoDescription":
      "Les sites web sécurisés ont un avantage pour obtenir un meilleur classement dans les résultats des moteurs de recherche, car la sécurité est un facteur clé dans le processus de classement.",
    "beyondProtection.browserFriendlyAlt":
      "Icône de compatibilité avec les navigateurs",
    "beyondProtection.customerTrustTitle": "Renforcez la confiance des clients",
    "beyondProtection.customerTrustDescription":
      "Montrez à vos clients que votre activité en ligne est sûre et fiable en garantissant que leurs données sensibles et leurs paiements en ligne sont entièrement protégés.",
    "beyondProtection.seoIncreaseAlt": "Icône d’amélioration SEO",
    "domainRegistrationSA.backgroundAlt": "Image de fond",
    "domainRegistrationSA.numberOneAlt": "Image d'enregistrement numéro 1",
    "domainRegistrationSA.title":
      "Obtenez votre nom de domaine sa. auprès du registraire n°1",
    "domainRegistrationSA.description":
      "Des milliers de noms de domaine sa. ont déjà été enregistrés. Dépêchez-vous de sécuriser votre domaine sa. unique maintenant avec diverses extensions disponibles.",
    "domainRegistrationSA.saTitle": "SA",
    "domainRegistrationSA.saPrice": "Seulement 20 $",
    "domainRegistrationSA.saCircleAlt": "Icône de cercle SA",
    "domainRegistrationSA.eduSa": ".edu.sa",
    "domainRegistrationSA.comSa": ".com.sa",
    "domainRegistrationSA.netSa": ".net.sa",
    "domainRegistrationSA.orgSa": ".org.sa",
    "domainRegistrationSA.medSa": ".med.sa",
    "domainRegistrationSA.idSa": ".id.sa",
    "domainRegistrationSA.schSa": ".sch.sa",
    "domainRegistrationSA.plcSa": ".plc.sa",
    "domainRegistrationSA.worldIconAlt": "Icône du monde",
    "domainRegistrationSA.price": "Seulement 20 $",
    "domainRegistrationSA.approvalTitle":
      "Noms de domaine nécessitant l'approbation du registraire",
    "domainRegistrationSA.schSaApproval": "sch.sa pour les écoles.",
    "domainRegistrationSA.schSaApprovalDesc":
      "Lettre officielle à la Saudi Communications and Technology Company pour demander l'approbation de l'enregistrement du nom de domaine.",
    "domainRegistrationSA.medSaApproval":
      "med.sa pour les hôpitaux et cliniques.",
    "domainRegistrationSA.medSaApprovalDesc":
      "Lettre officielle à la Saudi Communications and Technology Company pour demander l'approbation de l'enregistrement du nom de domaine.",
    "domainRegistrationSA.govSaApproval": "gov.sa pour les gouvernements.",
    "domainRegistrationSA.govSaApprovalDesc":
      "Lettre officielle à la Saudi Communications and Technology Company pour demander l'approbation de l'enregistrement du nom de domaine.",
    "domainRegistrationSA.govSaAltApproval":
      "gov.sa pour les entités gouvernementales.",
    "domainRegistrationSA.govSaAltApprovalDesc":
      "Enregistré directement auprès de la Saudi Communications and Technology Company après approbation de l'Autorité Générale des Communications et requis sous le panneau de contrôle numérique saoudien.",
    "domainStatsSA.title": "Statistiques pour sa.",
    "domainStatsSA.description": "Jetez un œil aux chiffres :",
    "domainStatsSA.chooseDomain": "Choisissez votre propre domaine",
    "domainStatsSA.achievement":
      "Nous sommes fiers d'avoir enregistré plus de 1,800 noms de domaine !",
    "domainStatsSA.backgroundRightAlt": "Fond SVG droit",
    "domainStatsSA.backgroundLeftAlt": "Fond SVG gauche",
    "languageSelector.saudi": "Arabie Saoudite",
    "languageSelector.uae": "Émirats arabes unis",
    "languageSelector.sudan": "Soudan",
    "languageSelector.turkey": "Turquie",
    "languageSelector.egypt": "Égypte",
    "languageSelector.oman": "Oman",
    "languageSelector.iraq": "Irak",
    "languageSelector.syria": "Syrie",
    "languageSelector.germany": "Allemagne",
    "languageSelector.france": "France",
    "languageSelector.qatar": "Qatar",
    "languageSelector.india": "Inde",
    "serverLocations.download": "Téléchargement",
    "serverLocations.upload": "Téléversement",
    "serverLocations.comingSoonTitle": "Bientôt disponible",
    "serverLocations.comingSoonMessage": "Ce serveur sera lancé bientôt",
    "serverLocations.mapAlt": "Carte du monde",

    "dashboardWelcome.title": "Bienvenue sur votre tableau de bord",
    "dashboardWelcome.description":
      "Gérez votre domaine facilement, consultez vos statistiques et surveillez les performances depuis un seul endroit.",
    "dashboardWelcome.imageAlt": "Tableau de bord",
    "dashboardOverview.title": "Aperçu du tableau de bord",
    "dashboardOverview.description":
      "Accédez aux données en temps réel et aux métriques de performance directement depuis votre tableau de bord. Suivez l'état de votre domaine, les statistiques des visiteurs, et bien plus encore en un seul endroit.",
    "dashboardOverview.imageAlt": "Image d'aperçu du tableau de bord",
    "performanceTracking.title": "Suivez vos performances",
    "performanceTracking.description":
      "Restez informé des performances de votre domaine. Surveillez le trafic, les renouvellements et l'utilisation rapidement.",
    "performanceTracking.mobileAlt": "Image de performance mobile",
    "performanceTracking.backgroundAlt": "Image de couche de fond",
    "performanceTracking.patternAlt": "Motif SVG décoratif",
    "domainManagement.title": "Gestion de domaine",
    "domainManagement.description":
      "Gérez votre domaine facilement. Enregistrez de nouveaux domaines, renouvelez ceux existants et consultez toutes les informations pertinentes en temps réel.",
    "domainManagement.imageAlt": "Image de bureau",
    "techStack.mainTitle": "Technologies utilisées pour construire le projet",
    "techStack.reactTitle": "React",
    "techStack.reactAlt": "Icône React",
    "techStack.laravelTitle": "Laravel",
    "techStack.laravelAlt": "Logo Laravel",
    "techStack.phpTitle": "PHP",
    "techStack.phpAlt": "Logo PHP",
    "techStack.javascriptTitle": "JavaScript",
    "techStack.javascriptAlt": "Logo JavaScript",
    "techStack.lagomTitle": "Thème Lagom",
    "techStack.lagomAlt": "Logo du thème Lagom",
    "techStack.whatsappApiTitle": "API WhatsApp",
    "techStack.whatsappApiAlt": "Icône API WhatsApp",
    "techStack.whmcsTitle": "WHMCS",
    "techStack.whmcsAlt": "Logo WHMCS",
    "keyFeaturesTwo.mainTitle": "Fonctionnalités clés",
    "keyFeaturesTwo.mainDescription":
      "Grâce à nos produits et services cloud, nous répondons à 100% de vos besoins professionnels et de données, tout en offrant les plus hauts niveaux de sécurité pour votre infrastructure.",
    "keyFeaturesTwo.cloudHostingTitle": "Hébergement cloud partagé",
    "keyFeaturesTwo.cloudHostingDescription":
      "Hébergez votre site web facilement et confortablement à un coût abordable ! Avec l'hébergement cloud partagé.",
    "keyFeaturesTwo.cloudHostingAlt": "Icône d'hébergement cloud partagé",
    "keyFeaturesTwo.lsSuiteTitle": "Suite LS",
    "keyFeaturesTwo.lsSuiteDescription":
      "Email professionnel, stockage en ligne, réunions d'entreprise, et plus encore. Conçu pour les affaires.",
    "keyFeaturesTwo.lsSuiteAlt": "Icône de la suite LS",
    "keyFeaturesTwo.jpaasTitle": "JPaaS Plateforme en tant que service",
    "keyFeaturesTwo.jpaasDescription":
      "Gérez votre serveur avec un contrôle total",
    "keyFeaturesTwo.jpaasAlt": "Icône de la plateforme JPaaS",
    "keyFeaturesTwo.learnMore": "En savoir plus",
    "speedSection.title": "Vitesse",
    "speedSection.description":
      "Protégez les données de votre site web et affichez votre certificat de sécurité à vos visiteurs",
    "launchAppsSection.mainTitle":
      "Lancez vos applications en quelques secondes !",
    "launchAppsSection.mainDescription":
      "Créez ou exécutez diverses applications avec un support complet de la plateforme",
    "launchAppsSection.appAlt": "Icône d'application",
    "launchAppsSection.dockerAlt": "Icône Docker",
    "launchAppsSection.phpAlt": "Icône PHP",
    "launchAppsSection.pythonAlt": "Icône Python",
    "featuresGrid.disasterRecovery":
      "Récupération après sinistre basée sur le cloud",
    "featuresGrid.emailProtection": "Protection et archivage des e-mails",
    "featuresGrid.threatDetection": "Détection et réponse avancées aux menaces",
    "featuresGrid.centralizedManagement1":
      "Gestion et surveillance centralisées",
    "featuresGrid.centralizedManagement2":
      "Gestion et surveillance centralisées",
    "featuresGrid.centralizedManagement3":
      "Gestion et surveillance centralisées",
    "featuresGrid.centralizedManagement4":
      "Gestion et surveillance centralisées",
    "featuresGrid.centralizedManagement5":
      "Gestion et surveillance centralisées",
    "featuresGrid.centralizedManagement6":
      "Gestion et surveillance centralisées",

    "whoisToolSectionTwo.description":
      "L'outil WHOIS est un service précieux qui fournit des informations complètes sur les noms de domaine, telles que le nom du propriétaire, les détails d'enregistrement, la date d'expiration et les informations de contact associées. Il aide à vérifier la propriété des domaines, à vérifier leur disponibilité pour l'enregistrement et à évaluer la fiabilité des sites web. De nombreux registraires de domaines et professionnels de la cybersécurité s'appuient sur cet outil pour la recherche, la protection et le respect des normes légales.",
    "whoisToolSectionTwo.imageAlt": "Image de l'outil WHOIS",
    "whoisToolSection.title": "Qu'est-ce que l'outil WHOIS ?",
    "whoisToolSection.description":
      "L'outil WHOIS est un service qui fournit des informations sur les noms de domaine, y compris le propriétaire du domaine, les détails d'enregistrement, la date d'expiration et les informations de contact associées. Il aide les utilisateurs à vérifier la propriété des domaines, à vérifier leur disponibilité et à valider la crédibilité des sites web. De nombreux registraires de domaines et professionnels de la cybersécurité utilisent cet outil pour la recherche, la sécurité et la conformité.",
    "whoisToolSection.imageAlt": "Image de sécurité WHOIS",
    "keyBenefitsSection.mainTitle": "Avantages clés",
    "keyBenefitsSection.mainDescription":
      "Possédez votre serveur dédié avec votre système d'exploitation préféré et des applications préinstallées.",
    "keyBenefitsSection.pciDssTitle": "Conformité PCI/DSS",
    "keyBenefitsSection.pciDssAlt": "Icône de conformité",
    "keyBenefitsSection.encryptionTitle": "Chiffrement des données à 256 bits",
    "keyBenefitsSection.encryptionAlt": "Icône de chiffrement",
    "keyBenefitsSection.secureClientTitle":
      "Sécurisation des données des clients",
    "keyBenefitsSection.secureClientAlt": "Icône de sécurité des données",
    "keyBenefitsSection.supportTitle": "Support technique",
    "keyBenefitsSection.supportAlt": "Icône de support technique",
    "keyBenefitsSection.warrantyTitle": "Garantie",
    "keyBenefitsSection.warrantyAlt": "Icône de garantie",
    "keyBenefitsSection.securityTitle": "Icône de verrouillage et https://",
    "keyBenefitsSection.securityAlt": "Icône de sécurité",

    "paymentMethodsSection.title": "Méthodes de paiement",
    "onlinePaymentSection.americanExpressAlt": "Icône American Express",
    "onlinePaymentSection.visaAlt": "Icône Visa",
    "onlinePaymentSection.masterCardAlt": "Icône MasterCard",
    "onlinePaymentSection.mainTitle": "Paiement en ligne",
    "onlinePaymentSection.mainDescription":
      "Profitez d'un processus de paiement en ligne rapide et direct",
    "paymentMethodsSection.description":
      "Payez de la manière qui vous convient et profitez d'une expérience de paiement fluide",
    "paymentMethodsSection.mainTitle":
      "Méthodes de paiement par virement bancaire",
    "paymentMethodsSection.mainDescription":
      "Effectuez des virements bancaires facilement et en toute sécurité",
    "paymentMethodsSection.bankakTitle": "Bankak",
    "paymentMethodsSection.bankakDescription":
      "Découvrez Bankak, ses services, et comment il aide à gérer vos transactions financières en toute sécurité et efficacité.",
    "paymentMethodsSection.bankakAlt": "Icône Bankak",
    "paymentMethodsSection.ibanTitle":
      "Numéro de compte bancaire international (IBAN)",
    "paymentMethodsSection.ibanDescription":
      "Comprenez l'importance de l'IBAN pour les transactions internationales et comment il garantit des transferts financiers sécurisés et précis.",
    "paymentMethodsSection.ibanAlt": "Icône IBAN",
    "paymentMethodsSection.instantTitle": "Virements instantanés",
    "paymentMethodsSection.instantDescription":
      "Envoyez et recevez de l'argent instantanément avec des solutions de paiement sécurisées et fiables conçues pour les transactions rapides.",
    "paymentMethodsSection.instantAlt": "Icône des virements instantanés",
    "paymentMethodsSection.oowCashTitle": "Oow-Cash",
    "paymentMethodsSection.oowCashDescription":
      "Découvrez les avantages d'Oow-Cash pour des paiements numériques fluides et une gestion financière facile.",
    "paymentMethodsSection.oowCashAlt": "Icône Oow-Cash",
    "paymentMethodsSection.moreLink": "Plus",
    "walletsSection.mainTitle": "Portefeuilles électroniques",
    "walletsSection.mainDescription":
      "Obtenez une licence unique pour les serveurs privés et les serveurs dédiés complets",
    "walletsSection.sdadTitle": "Paiement",
    "walletsSection.sdadDescription":
      "Effectuez des paiements sécurisés et rapides avec nos solutions de paiement fiables, garantissant une expérience de transaction fluide.",
    "walletsSection.sdadAlt": "Icône de paiement",
    "walletsSection.paypalTitle": "PayPal",
    "walletsSection.paypalDescription":
      "Envoyez et recevez de l'argent dans le monde entier avec PayPal, une plateforme de paiement électronique fiable offrant des transactions sécurisées.",
    "walletsSection.paypalAlt": "Icône PayPal",
    "walletsSection.vodafoneTitle": "Vodafone Cash",
    "walletsSection.vodafoneDescription":
      "Transférez de l'argent facilement, payez vos factures et rechargez votre solde avec le service de paiement mobile pratique de Vodafone.",
    "walletsSection.vodafoneAlt": "Icône Vodafone Cash",
    "walletsSection.zainTitle": "Zain Cash",
    "walletsSection.zainDescription":
      "Profitez de transactions financières fluides avec Zain Cash, offrant des paiements numériques sécurisés et des transferts d'argent.",
    "walletsSection.zainAlt": "Icône Zain Cash",
    "walletsSection.moreLink": "Plus",
    "cryptocurrenciesSection.mainTitle": "Cryptomonnaies",
    "cryptocurrenciesSection.mainDescription":
      "Obtenez une licence unique pour les serveurs privés et les serveurs dédiés complets",
    "cryptocurrenciesSection.ethereumAlt": "Icône Ethereum",
    "cryptocurrenciesSection.binanceAlt": "Icône Binance",
    "cryptocurrenciesSection.bitcoinAlt": "Icône Bitcoin",
    "cryptocurrenciesSection.tetherAlt": "Icône Tether",
    "traditionalPaymentSection.mainTitle":
      "Méthodes de paiement traditionnelles",
    "traditionalPaymentSection.cdnTitle":
      "Améliorer les performances du site avec un CDN",
    "traditionalPaymentSection.cdnDescription":
      "Connectez le nom de domaine de votre entreprise pour renforcer la notoriété de votre marque et présenter une image plus professionnelle avec un email personnalisé",
    "traditionalPaymentSection.cdnAlt": "Icône de carte",
    "traditionalPaymentSection.ddosTitle": "Atténuation des attaques DDoS",
    "traditionalPaymentSection.ddosDescription":
      "Les attaques par déni de service distribué (DDoS) peuvent perturber toute votre entreprise. Nous bloquons les attaques DDoS aux couches 3, 4 et 7, sécurisant la bande passante pendant les attaques.",
    "traditionalPaymentSection.ddosAlt": "Icône de transfert",
    "traditionalPaymentSection.securityTitle":
      "Protection contre le piratage et les malwares",
    "traditionalPaymentSection.securityDescription":
      "Protégez votre site contre les malwares, empêchez les tentatives de piratage, les attaques zero-day et les attaques par force brute sur les mots de passe.",
    "traditionalPaymentSection.securityAlt": "Icône de paiement en espèces",
    "blogsSection.title": "Blogs",
    "blogsSection.description":
      "Parcourez les articles les plus récents sur Nemours",
    "benefitsSection.mainTitle": "Avantages",
    "benefitsSection.description":
      "Nous offrons un environnement de travail flexible, une formation continue et des récompenses pour des performances exceptionnelles.",
    "benefitsSection.trainingTitle": "Formation / Aide éducative",
    "benefitsSection.trainingAlt": "Icône de formation",
    "benefitsSection.leaveTitle": "Congés personnels et maladie",
    "benefitsSection.leaveAlt": "Icône de congés",
    "benefitsSection.rewardsTitle":
      "Récompenses (Performance exceptionnelle, atteinte d'objectifs, réussite d'étapes)",
    "benefitsSection.rewardsAlt": "Icône de récompenses",
    "benefitsSection.insuranceTitle": "Assurance santé",
    "benefitsSection.insuranceAlt": "Icône d'assurance santé",
    "joinUsSection.title": "Rejoignez-nous maintenant",
    "joinUsSection.description":
      "Nous croyons que notre équipe est la base de notre succès, et nous nous efforçons de fournir un environnement de travail motivant avec un investissement continu dans le développement de leurs compétences pour suivre nos derniers services.",
    "joinUsSection.button": "Emplois disponibles",
    "jobsSection.title": "Emplois disponibles",
    "jobsSection.description":
      "Notre mission est de mener l'avancement technologique localement, économiquement et culturellement, et nous avons besoin de personnes passionnées et dévouées pour atteindre cet objectif !",
    "jobsSection.button": "Emplois disponibles",
    "jobsSection.rightBackgroundAlt": "Fond droit",
    "jobsSection.leftBackgroundAlt": "Fond gauche",
    "jobsSection.lampImageAlt": "Image de lampe",
    "countrySelector.italyName": "Italie",
    "countrySelector.franceName": "France",
    "countrySelector.germanyName": "Allemagne",
    "countrySelector.japanName": "Japon",
    "countrySelector.finlandName": "Finlande",
    "countrySelector.usaName": "États-Unis",
    "countrySelector.turkeyName": "Turquie",
    "countrySelector.italyFlagAlt": "Drapeau de l'Italie",
    "countrySelector.franceFlagAlt": "Drapeau de la France",
    "countrySelector.germanyFlagAlt": "Drapeau de l'Allemagne",
    "countrySelector.japanFlagAlt": "Drapeau du Japon",
    "countrySelector.finlandFlagAlt": "Drapeau de la Finlande",
    "countrySelector.usaFlagAlt": "Drapeau des États-Unis",
    "countrySelector.turkeyFlagAlt": "Drapeau de la Turquie",
    "standalone.serverDescription":
      "Vous pouvez posséder un serveur dédié avec le système d'exploitation de votre choix et des applications préinstallées.",
    "geoRegions.header": "Multiples Régions Géographiques",
    "geoRegions.text":
      "Gérez et exécutez vos applications sur plusieurs régions de dispositifs via une interface utilisateur simple et unifiée, permettant une migration fluide pour être plus proche de vos clients.",
    "geoRegions.illustrationAlt": "Illustration des Régions Géographiques",
    "essentialFeatures.header":
      "Profitez d'une gamme de fonctionnalités essentielles qui garantissent une expérience complète et efficace avec nos services, quelle que soit l'offre choisie",
    "essentialFeatures.serverMonitoringTitle": "Surveillance du serveur 24/7",
    "essentialFeatures.serverMonitoringAlt": "Icône de surveillance du serveur",
    "essentialFeatures.sslCertificateTitle": "Certificat SSL gratuit",
    "essentialFeatures.sslCertificateAlt": "Icône de certificat SSL",
    "essentialFeatures.threatProtectionTitle":
      "Protection contre les menaces nuisibles",
    "essentialFeatures.threatProtectionAlt":
      "Icône de protection contre les menaces",
    "essentialFeatures.softaculousInstallerTitle":
      "Programme d'installation Softaculous",
    "essentialFeatures.softaculousInstallerAlt": "Icône Softaculous",
    "essentialFeatures.regularBackupTitle": "Sauvegarde régulière",
    "essentialFeatures.regularBackupAlt": "Icône de sauvegarde",
    "essentialFeatures.linuxOsTitle": "Système d'exploitation Linux",
    "essentialFeatures.linuxOsAlt": "Icône Linux",
    "essentialFeatures.controlPanelTitle": "Panneau de contrôle Cpanel/Plesk",
    "essentialFeatures.controlPanelAlt": "Icône du panneau de contrôle",
    "essentialFeatures.technicalSupportTitle": "Support technique continu",
    "essentialFeatures.technicalSupportAlt": "Icône de support technique",

    "fullServers.mainTitle": "Serveurs Dédiés Complets",
    "fullServers.mainDescription":
      "Nous vous offrons un hébergement partagé convivial avec des outils innovants pour vous aider à construire et gérer votre site web facilement",

    "hostingTiers.mainTitle": "Plans de Serveurs Dédiés",
    "hostingTiers.serverInfoTitle": "Informations sur le Serveur",
    "hostingTiers.serverInfoSubtitle":
      "Choisissez le serveur qui répond à vos besoins",
    "hostingTiers.priceMain": "31,99 ",
    "hostingTiers.priceRenewal": "20 SAR/mois au renouvellement",
    "hostingTiers.buyNowButton": "Acheter Maintenant",
    "hostingTiers.featuresButton": "Fonctionnalités",
    "hostingTiers.cpuSpecTitle": "32 Cœurs à 2,4 GHz",
    "hostingTiers.cpuSpecSubtitle": "Score de Benchmark : 15 390",
    "hostingTiers.storageSpecTitle": "2 Disques SSD de 250 Go",
    "hostingTiers.storageSpecSubtitle": "Extensible jusqu'à 8 disques",
    "hostingTiers.databaseSpecTitle": "1 Base de Données",
    "hostingTiers.databaseSpecSubtitle":
      "Extensible jusqu'à 3 bases de données",
    "hostingTiers.ramSpecTitle": "64 Go",
    "hostingTiers.ramSpecSubtitle": "Évolutif jusqu'à 384 Go",
    "hostingTiers.bandwidthSpecTitle": "Vitesse de 3 Gbps",
    "hostingTiers.bandwidthSpecSubtitle":
      "100 To de données gratuites par mois",
    "hostingTiers.controlPanelSpecTitle": "cPanel/WHM, Plesk",
    "hostingTiers.controlPanelSpecSubtitle":
      "Édition Obsidian pour l'Hébergement Web",
    "hostingTiers.germanyFlagAlt": "Drapeau de l'Allemagne",
    "hostingTiers.finlandFlagAlt": "Drapeau de la Finlande",
    "hostingTiers.ukFlagAlt": "Drapeau du Royaume-Uni",
    "serverServices.mainTitle": "Tous les Services Incluent",
    "serverServices.emailProtection": "Protection des Emails et Antivirale",
    "serverServices.malwareProtection":
      "Protection Contre les Malwares et Ransomwares",
    "serverServices.networkSecurity":
      "Suivi, Fraude et Protection Contre les Menaces des Réseaux Publicitaires, Vol, Diffamation et Personnalisation",
    "serverServices.cloudMigration":
      "Migration d'une Configuration Impossible vers le Cloud",
    "serverServices.threatDetection":
      "Détection et Réponse aux Menaces Avancées",
    "serverServices.identityProtection":
      "Protection de l'Identité Numérique et des Appareils",

    "backupsSection.title": "Sauvegardes",
    "backupsSection.description": "Sauvegardes automatiques permanentes !",
    "supportParagraph.description":
      "Si vous êtes client de l'entreprise, vous pouvez facilement nous contacter via votre compte pour joindre notre équipe de support technique ou de vente. Nous nous engageons à fournir le meilleur service et des solutions rapides adaptées à vos besoins.",

    "supportSectionTwo.helpCenter": "Centre d'aide",
    "supportSectionTwo.serverStatus": "État du serveur",
    "supportSectionTwo.subscriberServices": "Services aux abonnés",
    "supportSectionTwo.helpCenterAlt": "Icône du centre d'aide",
    "supportSectionTwo.serverStatusAlt": "Icône de l'état du serveur",
    "supportSectionTwo.subscriberServicesAlt": "Icône des services aux abonnés",
    "supportSectionTwo.emailService": "Service email",
    "supportSectionTwo.phone": "Téléphone",
    "supportSectionTwo.location": "Emplacement",
    "supportSectionTwo.emailServiceAlt": "Icône email",
    "supportSectionTwo.phoneAlt": "Icône téléphone",
    "supportSectionTwo.locationAlt": "Icône emplacement",
    "supportSectionTwo.mapTitle": "Notre emplacement sur la carte",
    "supportSectionTwo.locationValue": "Riyad, Olaya, Arabie Saoudite",

    "contactForm.title":
      "Vous n'avez pas encore trouvé votre réponse ? Obtenez un support technique maintenant.",
    "contactForm.description":
      "Avec de nombreuses solutions uniques, vous pouvez facilement créer une page sans avoir besoin de coder. Créez votre prochain site de conseil en quelques minutes.",
    "contactForm.salesTab": "Ventes",
    "contactForm.customizationTab": "Personnalisation",
    "contactForm.trendsTab": "Tendances",
    "contactForm.pricesTab": "Prix",
    "contactForm.fullNameLabel": "Nom complet",
    "contactForm.usernameLabel": "Nom d'utilisateur",
    "contactForm.messageLabel": "Votre message",
    "contactForm.languageLabel":
      "Dans quelle langue souhaitez-vous communiquer ?",
    "contactForm.languagePlaceholder": "Choisir une langue",
    "contactForm.languageArabic": "Arabe",
    "contactForm.languageEnglish": "Anglais",
    "contactForm.languageSpanish": "Espagnol",
    "contactForm.submitButton": "Envoyer",
    "contactForm.contactAlternative": "Ou contactez-nous au",

    "loginSection.logoAlt": "Logo",
    "loginSection.emailIconAlt": "Icône email",
    "loginSection.passwordIconAlt": "Icône de verrou",
    "loginSection.footerLogoAlt": "Logo de pied de page",
    "loginSection.title": "Connexion",
    "loginSection.emailPlaceholder": "Entrez votre email",
    "loginSection.passwordPlaceholder": "Entrez le mot de passe",
    "loginSection.forgotPassword": "Oublié vos identifiants ?",
    "loginSection.loginButton": "Connexion",
    "loginSection.noAccount": "Vous n'avez pas de compte ?",
    "loginSection.createAccount": "Créer un nouveau compte",
    "softaculousSection.title": "Hébergement Softaculous",
    "softaculousSection.description":
      "Installation en un clic pour plus de 400 applications avec Softaculous",

    "appHostingSection.title": "Hébergement d'applications",
    "appHostingSection.description":
      "Description et détails sur les services d'hébergement partagé, conçus pour offrir des solutions fiables et évolutives pour vos applications",
    "appHostingSection.viewPricing": "Voir les tarifs",
    "appHostingSection.createAccount": "Créer un compte",
    "ecommerceSection.title": "Commerce électronique",
    "ecommerceSection.cyclosName": "Cyclos 4 Pro",
    "ecommerceSection.magentoName": "Magento",
    "ecommerceSection.magentoClusterName": "Cluster Magento",
    "ecommerceSection.maianCartName": "Maian Cart",
    "ecommerceSection.openCartName": "OpenCart",
    "ecommerceSection.prestaShopName": "PrestaShop",
    "ecommerceSection.cyclosDescription":
      "Cyclos 4 PRO est une plateforme de paiement pour les grandes entreprises et institutions",
    "ecommerceSection.magentoDescription":
      "Magento est un logiciel et une plateforme de commerce électronique approuvés par les plus grandes marques mondiales. Développez votre entreprise en ligne avec Magento",
    "ecommerceSection.magentoClusterDescription":
      "Évolutivité automatisée et haute disponibilité pour le cluster Magento avec équilibrage de charge, réplication des données, mise en cache du contenu et stockage des sessions utilisateur",
    "ecommerceSection.maianCartDescription":
      "Maian Cart est une plateforme de commerce électronique rapide, puissante et gratuite, construite avec PHP et MySQL, qui dispose de toutes les fonctionnalités nécessaires pour gérer votre boutique en ligne",
    "ecommerceSection.openCartDescription":
      "OpenCart est un système de shopping en ligne open source basé sur PHP",
    "ecommerceSection.prestaShopDescription":
      "PrestaShop est une solution open source et entièrement personnalisable pour vendre des produits en ligne, efficace, rapide et facile à utiliser",
    "ecommerceSection.cyclosLogoAlt": "Logo Cyclos 4 Pro",
    "ecommerceSection.magentoLogoAlt": "Logo Magento",
    "ecommerceSection.maianCartLogoAlt": "Icône de panier d'achat Maian Cart",
    "ecommerceSection.openCartLogoAlt": "Logo OpenCart",
    "ecommerceSection.prestaShopLogoAlt": "Logo PrestaShop",
    "ecommerceSection.launchNow": "Lancer maintenant",
    "statsSection.dataCenters": "Centres de données",
    "statsSection.uptime": "Disponibilité",
    "statsSection.hostedSites": "Sites hébergés",
    "statsSection.guaranteedAvailability": "Disponibilité garantie",
    "statsSection.customerSatisfaction": "Satisfaction client",
    "statsSection.dataCentersAlt": "Icône des centres de données",
    "statsSection.uptimeAlt": "Icône de disponibilité",
    "statsSection.hostedSitesAlt": "Icône des sites hébergés",
    "statsSection.guaranteedAvailabilityAlt": "Icône de disponibilité garantie",
    "statsSection.customerSatisfactionAlt": "Icône de satisfaction client",

    "statsSectionTwo.dataCenters": "Centres de données",
    "statsSectionTwo.uptime": "Disponibilité",
    "statsSectionTwo.hostedSites": "Sites hébergés",
    "statsSectionTwo.guaranteedAvailability": "Disponibilité garantie",
    "statsSectionTwo.customerSatisfaction": "Satisfaction client",
    "statsSectionTwo.dataCentersAlt": "Icône des centres de données",
    "statsSectionTwo.uptimeAlt": "Icône de disponibilité",
    "statsSectionTwo.hostedSitesAlt": "Icône des sites hébergés",
    "statsSectionTwo.guaranteedAvailabilityAlt":
      "Icône de disponibilité garantie",
    "statsSectionTwo.customerSatisfactionAlt": "Icône de satisfaction client",

    "achievementsSectionTwo.title": "Nos réalisations",
    "achievementsSectionTwo.description":
      "Fondée par Ali Al-Mansi et Yahya Hassan, elle a commencé ses activités en se spécialisant dans les services d'hébergement avec une équipe de seulement 3 personnes.",

    "contactSection.description":
      "Vous souhaitez savoir comment nous pouvons aider votre entreprise à réussir ? Contactez-nous.",
    "contactSection.helpTitle": "Besoin d'aide ?",
    "contactSection.helpDescription": "Contactez-nous et obtenez de l'aide",
    "contactSection.contactButton": "Contactez maintenant",
    "contactSection.microsoftLogoAlt": "Logo Microsoft",
    "contactSection.partner1LogoAlt": "Logo Partenaire 1",
    "contactSection.partner2LogoAlt": "Logo Partenaire 2",
    "contactSection.partner3LogoAlt": "Logo Partenaire 3",
    "contactSection.partner4LogoAlt": "Logo Partenaire 4",

    "tigersSection.title": "À propos de Nomoar",
    "tigersSection.description":
      "Nomoar est le principal fournisseur de services cloud en Arabie Saoudite, dédié au soutien et à la protection de l'infrastructure technique des organisations de toutes tailles.",
    "featuresSection.title": "Fonctionnalités",
    "featuresSection.multilingualSites": "Sites multilingues",
    "featuresSection.fiftyLanguages": "Support pour 50 langues",
    "featuresSection.responsiveDesign":
      "Design adaptatif pour tous les appareils",
    "featuresSection.easyTool": "Outil facile à utiliser",
    "featuresSection.videoTutorials": "Tutoriels vidéo sur l'utilisation",
    "featuresSection.plugins": "Extensions",
    "featuresSection.templates": "Plus d'un million de modèles",
    "featuresSection.siteMigration":
      "Possibilité de migrer des sites depuis d'autres constructeurs",
    "featuresSection.multilingualSitesAlt": "Icône de sites multilingues",
    "featuresSection.fiftyLanguagesAlt": "Icône de support pour 50 langues",
    "featuresSection.responsiveDesignAlt": "Icône de design adaptatif",
    "featuresSection.easyToolAlt": "Icône d'outil facile à utiliser",
    "featuresSection.videoTutorialsAlt": "Icône de tutoriels vidéo",
    "featuresSection.pluginsAlt": "Icône d'extensions",
    "featuresSection.templatesAlt": "Icône de modèles",
    "featuresSection.siteMigrationAlt": "Icône de migration de sites",
    "featuresSection.rightImgAlt": "Image de fond droite",
    "featuresSection.leftImgAlt": "Image de fond gauche",
    "oneClickApps.helmChartsAlt": "Icône Helm Charts",
    "oneClickApps.certManagerAlt": "Icône Gestionnaire de certificats",
    "oneClickApps.linkerdAlt": "Icône Linkerd",
    "oneClickApps.operatorsAlt": "Icône Opérateurs",
    "oneClickApps.illustrationAlt": "Illustration des applications en un clic",
    "distributorBasicNeed.title":
      "Avez-vous besoin de licences pour exploiter votre serveur ?",
    "distributorBasicNeed.subtitle": "Nous les fournissons au moindre coût",
    "distributorBasicNeed.registerButton": "Formulaire d'inscription",
    "distributorBasicNeed.distributorsButton": "Distributeurs",
    "distributorBasicNeed.settingsIllustrationAlt": "Paramètres",
    "kubernetes.title":
      "Construisez des clusters Kubernetes en quelques minutes",
    "resellerHosting.title": "Hébergement pour revendeurs",
    "resellerHostingPlus.title": "Distributeur Plus",
    "resellerHostingUltra.title": "Distributeur Ultra",
    "resellerHostingProgram.title": "Programme Revendeur",
    "resellerHosting.description":
      "Générez des profits et élargissez vos services.",
    "windowsHosting.title": "Hébergement Windows",
    "windowsHosting.description":
      "L'un des services d'hébergement les meilleurs, les plus rapides et les plus faciles",
    "support.title":
      "Vous ne savez pas par où commencer ? Ne vous inquiétez pas, nous sommes là pour vous aider",
    "support.description":
      "Libya Spider, en tant que fournisseur officiel de solutions cloud Microsoft, est prêt à aider votre organisation à adopter et intégrer pleinement la solution de productivité cloud Microsoft 365 dans votre flux de travail.",
    "support.successMessage":
      "Nous sommes fiers d’avoir accompagné de nombreuses entreprises dans leur transition réussie vers les services Microsoft 365 – et nous sommes ravis de vous aider aussi !",
    "support.cta": "Demandez maintenant !",
    "support.settingsChanges": "Modifications des paramètres",
    "support.settingsChangesAlt": "Icône de modifications des paramètres",
    "support.training": "Formation",
    "support.trainingAlt": "Icône de formation",
    "support.technicalSupport": "Support technique",
    "support.technicalSupportAlt": "Icône de support technique",
    "support.settingsCustomization": "Paramètres et personnalisation",
    "support.settingsCustomizationAlt":
      "Icône de paramètres et personnalisation",
    "support.dataUserMigration": "Migration des données et des utilisateurs",
    "support.dataUserMigrationAlt":
      "Icône de migration des données et des utilisateurs",
    "support.sharePointMigration": "Migration SharePoint Online",
    "support.sharePointMigrationAlt": "Icône de migration SharePoint Online",
    "tigersHosting.title": "Hébergement Nomoar",
    "tigersHosting.description":
      "Infrastructure cloud facile à gérer et économique",
    "cloudInfrastructure.title":
      "Infrastructure flexible, facile à gérer et évolutive",
    "cloudInfrastructure.description":
      "LS Cloud combine des ressources de calcul, de stockage et de réseau avec des analyses avancées et des outils de surveillance dans une plateforme cloud unique et conviviale.",
    "cloudInfrastructure.tools":
      "Outils dans une plateforme cloud unique et conviviale.",
    "cloudInfrastructure.resources":
      "Ressources cloud déployables en quelques minutes",
    "cloudInfrastructure.loadMetrics": "Métriques de charge",
    "cloudInfrastructure.loadMetricsAlt": "Icône de métriques de charge",
    "cloudInfrastructure.networking": "Réseautage",
    "cloudInfrastructure.networkingAlt": "Icône de réseautage",
    "cloudInfrastructure.storageSizes": "Tailles de stockage",
    "cloudInfrastructure.storageSizesAlt": "Icône de tailles de stockage",
    "cloudInfrastructure.virtualServers": "Serveurs virtuels",
    "cloudInfrastructure.virtualServersAlt": "Icône de serveurs virtuels",
    "cloudInfrastructure.backgroundAlt": "Arrière-plan cloud",
    "whyChooseTigers.blockUnauthorizedEmail":
      "Bloquer les emails non autorisés",
    "whyChooseTigers.blockUnauthorizedEmailDesc":
      "Avec PowerDMARC, vous éliminez non seulement l'usurpation d'emails, mais vous pouvez également utiliser des rapports détaillés pour ajuster votre stratégie de contenu immédiatement. Ne laissez rien au hasard.",
    "whyChooseTigers.blockUnauthorizedEmailAlt":
      "Icône de blocage des emails non autorisés",
    "whyChooseTigers.preventEmailSpoofing": "Prévenir l'usurpation d'email",
    "whyChooseTigers.preventEmailSpoofingDesc":
      "Protégez votre domaine contre l'usurpation d'emails et les attaques de phishing à l'aide de protocoles d'authentification avancés. Assurez-vous que seuls les expéditeurs autorisés peuvent utiliser votre domaine.",
    "whyChooseTigers.preventEmailSpoofingAlt":
      "Icône de prévention de l'usurpation d'email",
    "whyChooseTigers.enhanceEmailSecurity": "Renforcer la sécurité des emails",
    "whyChooseTigers.enhanceEmailSecurityDesc":
      "Obtenez une visibilité complète sur le trafic de vos emails et détectez les activités non autorisées en temps réel. Maintenez vos communications sécurisées et conformes.",
    "whyChooseTigers.enhanceEmailSecurityAlt":
      "Icône de renforcement de la sécurité des emails",
    "whyChooseTigers.verifyEmail": "Vérifier chaque email",
    "whyChooseTigers.verifyEmailDesc":
      "Utilisez DMARC, SPF et DKIM pour valider vos emails et empêcher les cybercriminels d'usurper votre domaine. Renforcez la confiance avec les destinataires.",
    "whyChooseTigers.verifyEmailAlt": "Icône de vérification de chaque email",
    "whyChooseTigers.backgroundRightAlt": "Arrière-plan droit",
    "whyChooseTigers.backgroundLeftAlt": "Arrière-plan gauche",

    "businessHosting.title": "Hébergement d'entreprise",
    "businessHosting.description":
      "L'un des services d'hébergement les meilleurs, les plus rapides et les plus faciles",
    "servicesThree.title": "Démarrez rapidement et développez votre entreprise",
    "servicesThree.reliableStaticHosting": "Hébergement statique fiable",
    "servicesThree.reliableStaticHostingDesc":
      "Hébergez vos sites statiques avec des temps de chargement ultra-rapides et une stabilité inégalée. Profitez d'un déploiement fluide avec un CDN distribué à l'échelle mondiale.",
    "servicesThree.reliableStaticHostingAlt":
      "Icône d'hébergement statique fiable",
    "servicesThree.scalableCloudStorage": "Stockage cloud évolutif",
    "servicesThree.scalableCloudStorageDesc":
      "Stockez et accédez à vos données en toute sécurité avec un stockage cloud haute performance. Évoluez facilement à mesure que votre entreprise grandit grâce à une redondance améliorée.",
    "servicesThree.scalableCloudStorageAlt": "Icône de stockage cloud évolutif",
    "servicesThree.enterpriseStaticHosting":
      "Hébergement statique de niveau entreprise",
    "servicesThree.enterpriseStaticHostingDesc":
      "Diffusez vos applications statiques avec sécurité et haute performance. Bénéficiez de mises à jour instantanées, d'un accès mondial et d'aucune maintenance.",
    "servicesThree.enterpriseStaticHostingAlt":
      "Icône d'hébergement statique de niveau entreprise",
    "mainFeatures.title": "Fonctionnalités clés",
    "mainFeatures.description":
      "Possédez votre serveur dédié avec le système d'exploitation de votre choix et des applications préinstallées.",
    "mainFeatures.crossPlatform": "Fonctionne sur plusieurs plateformes",
    "mainFeatures.crossPlatformAlt": "Icône multi-plateforme",
    "mainFeatures.ddosMitigation": "Atténuation des attaques DDoS",
    "mainFeatures.ddosMitigationAlt": "Icône d'atténuation DDoS",
    "mainFeatures.malwareDetection": "Détection et suppression des malwares",
    "mainFeatures.malwareDetectionAlt": "Icône de détection de malwares",
    "mainFeatures.sslCertificate": "Certificat de sécurité SSL",
    "mainFeatures.sslCertificateAlt": "Icône de certificat SSL",
    "mainFeatures.securityMonitoring": "Surveillance de la sécurité",
    "mainFeatures.securityMonitoringAlt":
      "Icône de surveillance de la sécurité",
    "mainFeatures.performanceOptimization": "Optimisation des performances",
    "mainFeatures.performanceOptimizationAlt":
      "Icône d'optimisation des performances",
    "mainFeatures.backgroundRightAlt": "Image de fond droite",
    "mainFeatures.backgroundLeftAlt": "Image de fond gauche",

    "emailHosting.title": "Hébergement d'email",
    "emailHosting.description":
      "L'un des services d'hébergement les meilleurs, les plus rapides et les plus faciles",
    "businessNeeds.title": "Tout ce dont votre entreprise a besoin",
    "businessNeeds.brandAwareness": "Augmenter la notoriété de la marque",
    "businessNeeds.brandAwarenessDesc":
      "Associez le nom de domaine de votre entreprise pour renforcer la notoriété de la marque et présenter une image plus professionnelle avec un email personnalisé",
    "businessNeeds.brandAwarenessAlt": "Icône de notoriété de la marque",
    "businessNeeds.security": "Sécurité",
    "businessNeeds.securityDesc":
      "Grâce à l'intelligence artificielle et à des logiciels de protection intelligente des emails, LS Suite protège votre boîte de réception contre le spam, les virus, les malwares, les ransomwares et les attaques de phishing.",
    "businessNeeds.securityAlt": "Icône de sécurité",
    "businessNeeds.accessCollaboration": "Accès facile et collaboration",
    "businessNeeds.accessCollaborationDesc":
      "Accédez à vos emails, calendrier, contacts et fichiers depuis n'importe où sur n'importe quel appareil, et collaborez avec votre équipe en temps réel, avec toutes les modifications enregistrées automatiquement.",
    "businessNeeds.accessCollaborationAlt": "Icône d'accès et de collaboration",
    "emailSecurity.title": "Sécurité renforcée pour la protection des emails",
    "emailSecurity.description":
      "Protégez votre email professionnel avec une sécurité alimentée par l'IA contre le spam, le phishing et les malwares.",
    "emailSecurity.backupRestore":
      "Sauvegarde et restauration pour les environnements physiques, virtuels et cloud.",
    "emailSecurity.backupRestoreAlt": "Icône de sauvegarde et restauration",
    "emailSecurity.antiSpamPhishing":
      "Outils avancés intégrés pour lutter contre le spam, les virus et le phishing.",
    "emailSecurity.antiSpamPhishingAlt":
      "Icône d'outils anti-spam et anti-phishing",
    "emailSecurity.documentProtection":
      "Protégez les documents partagés avec des mots de passe et des restrictions temporelles.",
    "emailSecurity.documentProtectionAlt": "Icône de protection des documents",
    "emailSecurity.encryption":
      "Chiffrez facilement les emails et les fichiers pour protéger les informations sensibles.",
    "emailSecurity.encryptionAlt":
      "Icône de chiffrement des emails et fichiers",
    "emailSecurity.backgroundAlt": "Image de fond",
    "keyFeaturesTwo.title": "Fonctionnalités clés",
    "keyFeatures.description":
      "Possédez votre serveur dédié avec le système d'exploitation de votre choix et des applications préinstallées.",
    "keyFeatures.mailStorage": "Capacité de stockage des emails",
    "keyFeatures.mailStorageAlt": "Icône de stockage des emails",
    "keyFeatures.reliableEmail":
      "Email fiable avec une garantie de disponibilité de 99,9 %",
    "keyFeatures.reliableEmailAlt": "Icône d'email fiable",
    "keyFeatures.customEmail": "Email professionnel personnalisé et sécurisé",
    "keyFeatures.customEmailAlt": "Icône d'email personnalisé",
    "keyFeatures.calendarSharing": "Partage de calendrier, contacts et tâches",
    "keyFeatures.calendarSharingAlt": "Icône de partage de calendrier",
    "keyFeatures.spamProtection":
      "Filtrage des spams et protection contre les virus",
    "keyFeatures.spamProtectionAlt": "Icône de protection contre les spams",
    "callToAction.title": "Commencez votre transition facile avec nous",
    "callToAction.description":
      "Passez à LS Suite pour vos emails facilement, rapidement et en toute sécurité avec l'aide de Libyan Spider. Commencez votre voyage pour améliorer la productivité et renforcer la sécurité de vos emails avec notre soutien complet, garantissant aucune interruption, aucun temps d'arrêt ni aucune perte de données de quelque nature que ce soit.",
    "callToAction.startNow": "Commencez maintenant !",
    "callToAction.settingsAlt": "Paramètres",

    "hostingProgrammers.title": "Hébergement pour programmeurs",
    "hostingProgrammers.description":
      "Serveurs cloud haute performance et 100% stables avec plusieurs emplacements géographiques",
    "hostingProgrammers.startNow": "Commencer maintenant",
    "servicesTwo.title": "Pourquoi choisir Al-Namur ?",
    "servicesTwo.description":
      "Solutions et services avancés et complets pour les particuliers et les organisations",
    "services.scalableStorageTwo": "Stockage évolutif",
    "services.scalableStorageDescTwo":
      "Stockage cloud flexible qui s'adapte à vos besoins croissants.",
    "services.scalableStorageAltTwo": "Icône de stockage évolutif",
    "services.enterpriseHostingTwo": "Hébergement d'entreprise",
    "services.enterpriseHostingDescTwo":
      "Solutions d'hébergement avancées conçues pour les grandes entreprises.",
    "services.enterpriseHostingAltTwo": "Icône d'hébergement d'entreprise",
    "services.reliableHostingTwo": "Hébergement fiable",
    "services.reliableHostingDescTwo":
      "Hébergement stable avec des performances élevées et un temps de disponibilité garanti.",
    "services.reliableHostingAltTwo": "Icône d'hébergement fiable",
    "services.backgroundDecorationAltTwo": "Image décorative de fond",
    "imglist.contactUs":
      "Intéressé à découvrir comment nous pouvons aider votre entreprise à réussir ? Contactez-nous",
    "imglist.partnerLogoAlt": "Logo du partenaire",
    "sslSection.title": "Plus qu'une simple question de sécurité",
    "sslSection.description":
      "Posséder un certificat SSL pour les sites web est une nécessité urgente, pas seulement du point de vue de la sécurité.",
    "sslSection.buildTrust": "Gagner la confiance des clients",
    "sslSection.buildTrustDesc":
      "Montrez à vos clients que votre entreprise en ligne est sécurisée et authentifiée, garantissant que leurs données sensibles et paiements électroniques sont entièrement protégés.",
    "sslSection.buildTrustAlt": "Icône de confiance des clients",
    "sslSection.seoRanking": "Améliorer le classement SEO de votre site",
    "sslSection.seoRankingDesc":
      "Les sites sécurisés ont un avantage pour obtenir un meilleur classement dans les résultats des moteurs de recherche, la sécurité étant un facteur clé dans le processus de classement.",
    "sslSection.seoRankingAlt": "Icône de classement SEO",
    "sslSection.browserCompatibility":
      "Assurer la visibilité de votre site sur différents navigateurs",
    "sslSection.browserCompatibilityDesc":
      "Si votre site n'a pas de certificat SSL, la plupart des navigateurs web populaires dans le monde le marqueront comme 'non sécurisé' avec un avertissement, et certains navigateurs pourraient même le bloquer complètement pour les utilisateurs.",
    "sslSection.browserCompatibilityAlt":
      "Icône de compatibilité des navigateurs",
    "whois.title": "Qu'est-ce que l'outil WHOIS ?",
    "whois.description":
      "L'outil WHOIS est un service qui fournit des informations sur les noms de domaine, y compris le propriétaire du domaine, les détails d'enregistrement, la date d'expiration et les informations de contact associées. Il aide les utilisateurs à vérifier la propriété des domaines, à vérifier la disponibilité des domaines et à valider la légitimité des sites web. De nombreux registraires de domaines et professionnels de la cybersécurité utilisent l'outil WHOIS à des fins de recherche, de cybersécurité et de conformité.",

    "websiteBuilder.title":
      "Construisez votre site web facilement avec notre constructeur de sites",
    "websiteBuilder.chooseTemplate": "Choisissez votre modèle",
    "websiteBuilder.chooseTemplateDesc":
      "Choisissez parmi 200 modèles magnifiques pour commencer à construire votre site.",
    "websiteBuilder.enhanceFunctionality":
      "Améliorez les fonctionnalités de votre site",
    "websiteBuilder.enhanceFunctionalityDesc":
      "Obtenez de nombreux plugins, outils et fonctionnalités nécessaires pour améliorer votre site, y compris les essentiels comme votre galerie de photos, les médias, les plateformes de réseaux sociaux, et plus encore.",
    "websiteBuilder.previewSite": "Prévisualisez votre site",
    "websiteBuilder.previewSiteDesc":
      "Visualisez votre site avec le modèle sélectionné avant de le publier publiquement.",
    "websiteBuilder.publishSave":
      "Publiez ou sauvegardez votre site – en un clic",
    "websiteBuilder.publishSaveDesc":
      "Vous pouvez publier votre site en ligne ou enregistrer un brouillon de votre site sans le publier.",
    "websiteBuilder.chooseTemplateAlt": "Icône de choix de modèle",
    "websiteBuilder.websiteBuilderAlt": "Icône de constructeur de sites",
    "featuresNine.title": "Fonctionnalités",
    "featuresNine.description":
      "Fonctionnalités principales dans tous nos plans",
    "featuresNine.multilingualSites": "Sites web multilingues",
    "featuresNine.languageSupport": "Prise en charge de 50 langues",
    "featuresNine.responsiveDesign": "Design adaptatif pour tous les appareils",
    "featuresNine.easyTool": "Outil facile à utiliser",
    "featuresNine.videoTutorials": "Tutoriels vidéo sur l’utilisation",
    "featuresNine.plugins": "Plugins",
    "featuresNine.millionTemplates": "Plus d’un million de modèles",
    "featuresNine.siteMigration":
      "Possibilité de migrer des sites depuis d’autres constructeurs",
    "featuresNine.iconAlt": "Icône",
    "featuresNine.rightImageAlt": "Image décorative droite",
    "featuresNine.leftImageAlt": "Image décorative gauche",
    "wordpressHosting.title": "Hébergement WordPress",
    "wordpressHosting.description":
      "Un environnement optimisé pour développer votre site avec WordPress",
    "wordpressHosting.startNow": "Commencez maintenant !",

    "kubernetes.description":
      "Cessez de perdre du temps et des efforts à gérer des clusters Kubernetes. Avec notre moteur Kubernetes entièrement géré, vous pouvez facilement déployer, gérer et mettre à l'échelle les ressources conteneurisées de votre application en quelques minutes au lieu de jours.",
    "kubernetes.orderNow": "Commandez maintenant !",
    "services.titletwo": "Lancez rapidement et développez votre entreprise",
    "services.reliableHosting": "Hébergement statique fiable",
    "services.reliableHostingDesc":
      "Hébergez vos sites statiques avec des temps de chargement ultra-rapides et une stabilité inégalée. Profitez d'un déploiement fluide avec un CDN distribué mondialement.",
    "services.scalableStorage": "Stockage cloud évolutif",
    "services.scalableStorageDesc":
      "Stockez et accédez à vos données en toute sécurité avec un stockage cloud haute performance. Évoluez facilement à mesure que votre entreprise grandit grâce à une redondance améliorée.",
    "services.enterpriseHosting": "Hébergement statique de niveau entreprise",
    "services.enterpriseHostingDesc":
      "Déployez vos applications statiques en toute sécurité avec des performances élevées. Bénéficiez de mises à jour instantanées, d'un accès mondial et d'aucune maintenance.",
    "services.reliableHostingAlt": "Icône d'hébergement statique fiable",
    "services.scalableStorageAlt": "Icône de stockage cloud évolutif",
    "services.enterpriseHostingAlt":
      "Icône d'hébergement statique de niveau entreprise",
    "services.backgroundDecorationAlt": "Décoration d'arrière-plan",
    "oneClickApps.title":
      "Démarrez rapidement avec les applications en un clic",
    "oneClickApps.description":
      "Notre moteur Kubernetes prend en charge l'intégration avec les outils Kubernetes populaires, vous permettant de créer des clusters exécutant des logiciels open-source préconfigurés en un seul clic.",
    "oneClickApps.helmCharts": "Helm Charts",
    "oneClickApps.certManager": "Gestionnaire de certificats",
    "oneClickApps.linkerd": "Linkerd",
    "oneClickApps.operators": "Opérateurs",
    "oneClickApps.imageAlt": "Applications en un clic",
    "templates.million": "1 000 000+",
    "templates.title":
      "Plus de 1 000 000 de modèles prêts à l’emploi pour tous les usages",
    "templates.description":
      "Pour tous types d’activités commerciales et personnelles, notre constructeur de sites web propose plus de 1 000 000 de modèles magnifiques prêts à l’emploi avec des designs entièrement personnalisables et modifiables.",
    "templates.viewMore": "Voir plus",

    "hosting.windows": "Hébergement Windows",
    "hosting.windows.description":
      "Hébergement basé sur Windows avec prise en charge de .NET et d'autres technologies Microsoft.",
    "sharedHosting.title": "Hébergement partagé",
    "sharedHosting.description":
      "Serveurs cloud haute performance et stables à 100 % avec plusieurs emplacements géographiques",
    "sharedHosting.startNow": "Commencez maintenant !",
    "smallContent.feature.backupRecovery":
      "Sauvegarde et récupération pour les environnements physiques, virtuels et cloud.",
    "smallContent.feature.malwareProtection":
      "Protection contre les malwares et anti-rançongiciels.",
    "smallContent.feature.deviceProtection":
      "Protection et gestion des appareils terminaux.",
    "smallContent.feature.threatDetection":
      "Détection et réponse aux menaces avancées.",
    "smallContent.feature.emailProtection":
      "Protection et archivage des e-mails.",
    "smallContent.feature.disasterRecovery":
      "Récupération après sinistre basée sur le cloud.",
    "smallContent.feature.centralManagement":
      "Gestion et surveillance centralisées.",
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
    "whyChooseTigers.title": "Pourquoi choisir Nomoar",
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
    "serverLocations.india": "Inde",
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
    "notFound.title": "Seite Nicht Gefunden",
    "notFound.description":
      "Entschuldigung, die von Ihnen gesuchte Seite ist nicht verfügbar oder wurde möglicherweise verschoben.",
    "notFound.backToHome": "Zurück zur Startseite",
    "brandGuidelines.colorPaletteTitle": "Namoor-Farben",
    "brandGuidelines.colorPaletteDescription":
      "Wir haben drei Farben verwendet, um die Identität von Mahjooz auszudrücken: Weiß, Türkis und Schwarz. Diese Farben haben einen formellen Ton, der für Hosting- und Supportdienste geeignet ist, wobei Türkis für Benutzerfreundlichkeit steht, Weiß für Einfachheit und Schwarz für Seriosität, kombiniert auf drei Arten wie folgt:",
    "brandGuidelines.colorCodesTitle": "Hier sind die Codes für jede Farbe:",
    "brandGuidelines.headerTitle": "Markenrichtlinien",
    "brandGuidelines.headerDescription":
      "Ein Leitfaden zur klaren und systematischen Darstellung des Logos, der Farben, Codes und der Identität",
    "brandGuidelines.logoTitle": "Logo",
    "brandGuidelines.logoDescription":
      "Das Namoor-Logo kombiniert die Identität und Vision des Unternehmens. Das Konzept stammt aus der Überlagerung der Buchstaben „p“ und „z“, die zusammen das unendliche „ma“-Symbol bilden, das die Vision des Unternehmens für kontinuierlichen Service und Support widerspiegelt.",
    "brandGuidelines.logoAlt": "Kombinierte Logos",
    "brandGuidelines.logoSizesTitle": "Logo-Größen",
    "brandGuidelines.logoSizesDescription":
      "Das Logo wurde in verschiedenen Größen gestaltet, um jeder Nutzungsumgebung gerecht zu werden.",
    "brandGuidelines.logoSizesAlt": "Logo in verschiedenen Größen",
    "brandGuidelines.typographyTitle": "Namoor-Typografie",
    "brandGuidelines.typographyDescription":
      "Wir haben die Schriftart „Cairo“ für englische und arabische Texte verwendet, aufgrund ihrer Einfachheit und Lesbarkeit.",
    "brandGuidelines.typographyFontName": "C a i r o",
    "brandGuidelines.downloadsTitle": "Downloads",
    "brandGuidelines.downloadsDescription":
      "Wir haben alle Elemente bereitgestellt, die Sie benötigen könnten, wenn Sie den Namen Namoor in einem Design verwenden, vom Logo bis hin zu Werbematerialien für Veranstaltungen oder Konferenzen.",
    "brandGuidelines.downloadItem1Alt": "Dunkelblaues rundes Logo",
    "brandGuidelines.downloadItem1Title": "Namoor-Logo",
    "brandGuidelines.downloadItem2Alt": "Dunkelblaues rundes Logo",
    "brandGuidelines.downloadItem2Title": "Namoor-Unternehmen",
    "brandGuidelines.downloadItem3Alt":
      "Dunkelblaues rundes Logo auf hellblauem Hintergrund",
    "brandGuidelines.downloadItem3Title": "Namoor-Unternehmen",
    "brandGuidelines.downloadItem4Alt": "Dunkelblaues rundes Logo",
    "brandGuidelines.downloadItem4Title": "Namoor-Sekundärlogo",
    "brandGuidelines.downloadPDF": "PDF",
    "brandGuidelines.downloadSVG": "SVG",
    "brandGuidelines.downloadPNG": "PNG",
    "brandGuidelines.identityTitle":
      "Dies ist die Identität von Namoor, präsentiert in mehreren Formen.",
    "brandGuidelines.identityCard1Title": "Namoor-Unternehmen",
    "brandGuidelines.identityCard1Alt": "Logo mit arabischem Text",
    "brandGuidelines.identityCard2Title": "Namoor-Unternehmen",
    "brandGuidelines.identityCard2Alt": "Logo mit arabischem Text",
    "brandGuidelines.identityBottomAlt":
      "Zwei runde Logos, eines auf hellgrauem und eines auf weißem Hintergrund",

    "domainFeatures.mainTitle": "Warum Domains bei Namoor kaufen?",
    "domainFeatures.lockTitle": "Domain-Sperre",
    "domainFeatures.lockDescription":
      "Sperren Sie Ihre Domain, um unbefugte Übertragungen Ihrer Domainnamen zu verhindern.",
    "domainFeatures.renewalTitle": "Tolle Verlängerungsraten",
    "domainFeatures.renewalDescription":
      "Wenn es Zeit ist, Ihre Domain zu verlängern, müssen Sie sich keine Sorgen machen, die Bank zu sprengen.",
    "domainFeatures.autoRenewalTitle": "Automatische Verlängerung",
    "domainFeatures.autoRenewalDescription":
      "Verlieren Sie nie Ihre Domain (selbst wenn Sie es vergessen) dank unserer Option für automatische Verlängerung.",
    "domainFeatures.managementTitle": "Einfache Verwaltung",
    "domainFeatures.managementDescription":
      "Verwalten Sie Ihre Domain mit einem benutzerfreundlichen Bedienfeld und Dashboard.",
    "domainFeatures.privacyTitle": "Whois-Datenschutz",
    "domainFeatures.privacyDescription":
      "Brauchen Sie Privatsphäre? Wir schützen Ihre persönlichen Daten in der WHOIS-Datenbank für eine geringe Gebühr.",
    "domainFeatures.pricingTitle": "Niedrige Preise & riesige Auswahl",
    "domainFeatures.pricingDescription":
      "Registrieren Sie Ihre Domain zu einem niedrigen Preis und wählen Sie aus einer breiten Palette von Erweiterungen.",
    "domainPricingTable.title1": "Entdecken Sie die Möglichkeiten",
    "domainPricingTable.title2": "Aus unserer Domain-Liste",
    "domainPricingTable.domain": "Domain",
    "domainPricingTable.registration": "Registrierung",
    "domainPricingTable.renewal": "Verlängerung",
    "domainPricingTable.transfer": "Transfer",
    "domainPricingTable.protection": "Identitätsschutz",
    "domainPricingTable.searchPlaceholder": "Suchen...",
    "domainPricingTable.noResults": 'Keine Ergebnisse für "{searchTerm}"',
    "domainPricingTable.previous": "Vorherige",
    "domainPricingTable.next": "Nächste",
    "domainPricingTable.currencySymbol": "€",
    "domainInfographic.titlePart1": "Dinge, die man beachten sollte",
    "domainInfographic.titlePart2": "Vor dem Kauf von Domains",
    "domainInfographic.section1Title": "Einfach halten",
    "domainInfographic.section1Description":
      "Machen Sie es nicht kompliziert. Ein Domainname, der leicht zu merken ist, ist immer die beste Wahl.",
    "domainInfographic.section2Title": "Jetzt handeln",
    "domainInfographic.section2Description":
      "Bleiben Sie Ihrer Marke treu. Seien Sie einzigartig, aber wählen Sie eine Domain, die Ihr Publikum erkennt.",
    "domainInfographic.section3Title": "Bindestriche vermeiden",
    "domainInfographic.section3Description":
      "Nur weil das Internet technisch ist, muss Ihr Domainname es nicht sein.",
    "priceDomains.backgroundAlt": "Dekoratives Hintergrundmuster",
    "priceDomains.title":
      "Wählen Sie aus den beliebtesten Domain-Erweiterungen",
    "priceDomains.domainName": "Domainname",
    "priceDomains.price": "6,49 €/Jahr",
    "priceDomains.originalPrice": "Statt 14,98 €/Jahr",
    "priceDomains.domainAriaLabel": "Domainname {tld}",
    "domainSearchSection.title": "Domain suchen und kaufen",
    "domainSearchSection.description":
      "Holen Sie sich die Domain, die Sie gesucht haben.",
    "domainSearchSection.searchPlaceholder": "Hier tippen, um zu suchen",
    "domainSearchSection.searchButton": "Suchen",
    "domainSearchSection.popular": "Beliebt",
    "domainSearchSection.geographic": "Geografisch",
    "domainSearchSection.technology": "Technologie",
    "domainSearchSection.service": "Dienstleistung",
    "domainSearchSection.business": "Geschäft",
    "domainSearchSection.media": "Medien",
    "domainSearchSection.shopping": "Einkaufen",
    "domainSearchSection.more": "Mehr",
    "domainSearchSection.domainImageAlt": "Domain-Illustration",
    "namoorSection.title": "Namoor Unternehmen",
    "partnersSection.mainTitle": "Erfolgspartner",
    "partnersSection.rightBackgroundAlt": "Rechter SVG-Hintergrund",
    "partnersSection.leftBackgroundAlt": "Linker SVG-Hintergrund",
    "partnersSection.sucuriName": "SUCURI",
    "partnersSection.sucuriDescription":
      "Wir bieten fortschrittliche Website-Schutzdienste durch modernste Technologien, die vollständige Sicherheit gewährleisten. Wir bieten umfassende Lösungen zum Schutz von Websites vor Cyberangriffen und Malware. Unser engagiertes Team arbeitet rund um die Uhr, um den sicheren Betrieb Ihrer Website zu gewährleisten.",
    "partnersSection.sucuriLogoAlt": "SUCURI-Logo",
    "partnersSection.softaculousName": "Softaculous",
    "partnersSection.softaculousDescription":
      "Eine umfassende Plattform zur einfachen Verwaltung von Anwendungen und Software. Wir bieten eine vollständige Bibliothek von Anwendungen, die mit einem Klick installiert werden können. Unsere Lösungen vereinfachen die Verwaltung von Websites und verschiedenen Anwendungen mit hoher Effizienz und großer Flexibilität.",
    "partnersSection.softaculousLogoAlt": "Softaculous-Logo",
    "partnersSection.linuxName": "Linux",
    "partnersSection.linuxDescription":
      "Ein Open-Source-Betriebssystem, das hohe Stabilität und Sicherheit bietet. Wir bieten fortschrittliche Hosting-Lösungen mit verschiedenen Linux-Systemen. Unser spezialisiertes Team sorgt für optimale Leistung und vollständige Stabilität für alle bereitgestellten Dienste.",
    "partnersSection.linuxLogoAlt": "Linux-Logo",
    "paymentSection.description":
      "Zahlen Sie auf die Weise, die Ihnen passt, und genießen Sie ein einfaches und reibungsloses Zahlungserlebnis",
    "whoisTool.whoisTitle": "Whois-Tool",
    "whoisTool.whoisDescription": "Professionelle Domain-Datenabfrage",
    "whoisTool.searchButton": "Suchen",
    "whoisTool.searchPlaceholder": "Geben Sie den Domainnamen ein",
    "whoisTool.whatIsWhoisTitle": "Was ist das Whois-Tool?",
    "whoisTool.whatIsWhoisDescription":
      "Whois ist ein Tool, das verwendet wird, um Informationen zur Domainregistrierung abzufragen, wie z.B. den Eigentümer, das Registrierungsdatum und das Ablaufdatum.",
    "whoisTool.groupImageAlt": "Whois-Tool-Illustration",
    "whoisTool.howItWorksTitle": "Wie funktioniert es?",
    "whoisTool.howItWorksDescription":
      "Whois funktioniert durch die Abfrage einer öffentlichen Datenbank, um Details zur Domainregistrierung abzurufen, die bei Registraren gespeichert sind.",
    "whoisTool.sslWhoisImageAlt": "SSL- und Whois-Illustration",
    "websiteSuccessCriteria.sslTitle": "SSL-Zertifikate",
    "websiteSuccessCriteria.sslDescription":
      "Die perfekte Lösung, um Ihre Website zu sichern und Benutzerdaten zu schützen.",
    "websiteSuccessCriteria.cloudflareTitle": "Cloudflare",
    "websiteSuccessCriteria.cloudflareDescription":
      "Die ideale Lösung für ein schnelleres, sichereres und zuverlässigeres Web-Erlebnis.",
    "websiteSuccessCriteria.cloudflareEnhanceTitle":
      "Verbessern Sie den Schutz Ihrer Website vor Cyberbedrohungen und steigern Sie ihre Leistung mit Cloudflare.",
    "websiteSuccessCriteria.cloudflareEnhanceDescription":
      "Vom Schutz vor Cyberbedrohungen bis zur Beschleunigung der Inhaltsauslieferung ist Cloudflare Ihr vertrauenswürdiger Partner für Web-Performance und Sicherheit.",
    "websiteSuccessCriteria.mainTitle":
      "Setzen Sie einen neuen Standard für den Erfolg Ihrer Website",
    "websiteSuccessCriteria.performanceTitle": "Blitzschnelle Leistung",
    "websiteSuccessCriteria.globalSpeedBoost": "Globaler Geschwindigkeitsboost",
    "websiteSuccessCriteria.contentDelivery":
      "Optimierung der Inhaltsauslieferung",
    "websiteSuccessCriteria.loadBalancing": "Lastverteilung",
    "websiteSuccessCriteria.latencyReduction": "Latenzreduktion",
    "websiteSuccessCriteria.globalSpeedBoostIconAlt":
      "Symbol für globalen Geschwindigkeitsboost",
    "websiteSuccessCriteria.globalSpeedBoostDescription":
      "Dank des globalen CDN von Cloudflare lädt Ihre Website schnell für Besucher auf der ganzen Welt.",
    "websiteSuccessCriteria.securityTitle": "Unübertroffene Sicherheit",
    "websiteSuccessCriteria.ddosProtection": "Schutz vor DDoS-Angriffen",
    "websiteSuccessCriteria.webApplicationFirewall":
      "Web Application Firewall (WAF)",
    "websiteSuccessCriteria.sslTlsEncryption": "SSL/TLS-Verschlüsselung",
    "websiteSuccessCriteria.botManagement": "Bot-Management",
    "websiteSuccessCriteria.realTimeThreatAnalysis":
      "Echtzeit-Bedrohungsanalyse",
    "websiteSuccessCriteria.securityIconAlt": "Sicherheitssymbol",
    "websiteSuccessCriteria.ddosProtectionDescription":
      "Das Netzwerk von Cloudflare ist darauf ausgelegt, DDoS-Angriffe abzuwehren und zu entschärfen, sodass Ihre Website auch während gezielter Angriffe verfügbar bleibt.",
    "websiteSuccessCriteria.signUpNow": "Jetzt anmelden",
    "cloudflareSection.cloudflareTitle": "Cloudflare",
    "cloudflareSection.cloudflareDescription":
      "Die ideale Lösung für ein schnelleres, sichereres und zuverlässigeres Web-Erlebnis.",
    "cloudflareSection.cloudflareEnhanceTitle":
      "Verbessern Sie den Schutz Ihrer Website vor Cyberbedrohungen und steigern Sie ihre Leistung mit Cloudflare.",
    "cloudflareSection.cloudflareEnhanceDescription":
      "Vom Schutz vor Cyberbedrohungen bis zur Beschleunigung der Inhaltsauslieferung ist Cloudflare Ihr vertrauenswürdiger Partner für Web-Performance und Sicherheit.",
    "cloudflareSection.signUpNow": "Jetzt anmelden",
    "sslSection.sslTitle": "SSL-Zertifikate",
    "sslContent.rightBackgroundAlt": "Rechter Hintergrund mit Symbolen",
    "sslContent.leftBackgroundAlt": "Linker Hintergrund mit Symbolen",
    "sslContent.trustTitle":
      "Bauen Sie die Vertrauenswürdigkeit Ihres Unternehmens auf",
    "sslContent.trustDescription":
      "Schützen Sie die Daten Ihrer Website - und die Ihrer Besucher - durch eine sichere Verbindung und die Verschlüsselung der von SSL-Zertifikaten bereitgestellten Daten. Zeigen Sie allen Besuchern Ihrer Website, dass Ihre Seite sicher und vertrauenswürdig ist, mit dem markanten Schloss-Symbol und dem https://-Präfix in Ihrem Domainnamen.",
    "sslContent.chooseSslTitle": "Wählen Sie das richtige SSL-Zertifikat",
    "sslContent.chooseSslDescription":
      "Die Libyan Spider Company bietet Ihnen eine Vielzahl von Schutz-Zertifikaten von den weltweit vertrauenswürdigsten Unternehmen im Bereich.",
    "choosePlan.rightBackgroundAlt": "Rechter SVG-Hintergrund",
    "choosePlan.leftBackgroundAlt": "Linker SVG-Hintergrund",
    "choosePlan.mainTitle": "Wählen Sie den richtigen Plan",
    "choosePlan.planTitle": "GeoTrust QuickSSL Premium",
    "choosePlan.currency": "LYD/Vierteljährlich",
    "choosePlan.validation": "Validierung",
    "choosePlan.organization": "Organisation",
    "choosePlan.siteSeal": "Website-Siegel",
    "choosePlan.dynamic": "Dynamisch",
    "choosePlan.orderNow": "Jetzt bestellen",
    "websiteSecurity.title":
      "Websitesicherheit und Datenverschlüsselung sind nicht mehr optional",
    "websiteSecurity.description":
      "Websites, die als 'Nicht sicher' gekennzeichnet sind, sind nicht mehr akzeptabel. Ein SSL-Zertifikat ist keine Wahl mehr; es ist eine grundlegende Anforderung für die Sicherheit von Websites in der heutigen Welt. Datenverschlüsselung und sichere Verbindungen beseitigen die Risiken von neuen und zunehmenden Cyberangriffen, die jede Sicherheitslücke ausnutzen können.",
    "websiteSecurity.securityImageAlt": "Bild zur Websitesicherheit",
    "beyondProtection.bigBlocksAlt": "Großer Blöcke-Hintergrund",
    "beyondProtection.mainTitle": "Mehr als nur Schutz",
    "beyondProtection.mainDescription":
      "Besitzen Sie Ihren dedizierten Server mit Ihrem bevorzugten Betriebssystem und vorinstallierten Anwendungen.",
    "beyondProtection.browserCompatibilityTitle":
      "Stellen Sie sicher, dass Ihre Website in allen Browsern angezeigt wird",
    "beyondProtection.browserCompatibilityDescription":
      "Wenn Ihre Website kein SSL-Zertifikat hat, werden die meisten weltweit beliebten Browser sie als 'Nicht sicher' markieren und eine Warnung anzeigen, und einige Browser könnten sie für Benutzer vollständig blockieren.",
    "beyondProtection.customerTrustAlt": "Symbol für Kundenvertrauen",
    "beyondProtection.seoTitle":
      "Verbessern Sie das Ranking Ihrer Website in Suchmaschinen (SEO)",
    "beyondProtection.seoDescription":
      "Gesicherte Websites haben einen Vorteil, um höhere Platzierungen in den Suchmaschinenergebnissen zu erzielen, da Sicherheit ein Schlüsselfaktor im Ranking-Prozess ist.",
    "beyondProtection.browserFriendlyAlt": "Symbol für Browserfreundlichkeit",
    "beyondProtection.customerTrustTitle": "Kundenvertrauen aufbauen",
    "beyondProtection.customerTrustDescription":
      "Zeigen Sie Ihren Kunden, dass Ihr Online-Geschäft sicher und vertrauenswürdig ist, indem Sie sicherstellen, dass ihre sensiblen Daten und Online-Zahlungen vollständig geschützt sind.",
    "beyondProtection.seoIncreaseAlt": "Symbol für SEO-Steigerung",

    "domainRegistrationSA.backgroundAlt": "Hintergrundbild",
    "domainRegistrationSA.numberOneAlt": "Nummer 1 Registrierungsbild",
    "domainRegistrationSA.title":
      "Sichern Sie sich Ihre sa.-Domain vom Registrar Nr. 1",
    "domainRegistrationSA.description":
      "Tausende von sa.-Domainnamen wurden bereits registriert. Beeilen Sie sich und sichern Sie sich jetzt Ihre einzigartige sa.-Domain mit verschiedenen verfügbaren Erweiterungen.",
    "domainRegistrationSA.saTitle": "SA",
    "domainRegistrationSA.saPrice": "Nur 20 $",
    "domainRegistrationSA.saCircleAlt": "SA-Kreis-Symbol",
    "domainRegistrationSA.eduSa": ".edu.sa",
    "domainRegistrationSA.comSa": ".com.sa",
    "domainRegistrationSA.netSa": ".net.sa",
    "domainRegistrationSA.orgSa": ".org.sa",
    "domainRegistrationSA.medSa": ".med.sa",
    "domainRegistrationSA.idSa": ".id.sa",
    "domainRegistrationSA.schSa": ".sch.sa",
    "domainRegistrationSA.plcSa": ".plc.sa",
    "domainRegistrationSA.worldIconAlt": "Welt-Symbol",
    "domainRegistrationSA.price": "Nur 20 $",
    "domainRegistrationSA.approvalTitle":
      "Domainnamen, die die Genehmigung des Registrars erfordern",
    "domainRegistrationSA.schSaApproval": "sch.sa für Schulen.",
    "domainRegistrationSA.schSaApprovalDesc":
      "Offizielles Schreiben an die Saudi Communications and Technology Company zur Beantragung der Genehmigung für die Registrierung des Domainnamens.",
    "domainRegistrationSA.medSaApproval":
      "med.sa für Krankenhäuser und Kliniken.",
    "domainRegistrationSA.medSaApprovalDesc":
      "Offizielles Schreiben an die Saudi Communications and Technology Company zur Beantragung der Genehmigung für die Registrierung des Domainnamens.",
    "domainRegistrationSA.govSaApproval": "gov.sa für Regierungen.",
    "domainRegistrationSA.govSaApprovalDesc":
      "Offizielles Schreiben an die Saudi Communications and Technology Company zur Beantragung der Genehmigung für die Registrierung des Domainnamens.",
    "domainRegistrationSA.govSaAltApproval":
      "gov.sa für staatliche Einrichtungen.",
    "domainRegistrationSA.govSaAltApprovalDesc":
      "Direkt bei der Saudi Communications and Technology Company registriert nach Genehmigung der Allgemeinen Kommunikationsbehörde und Antrag unter dem saudi-arabischen digitalen Kontrollpanel.",
    "domainStatsSA.title": "Statistiken für sa.",
    "domainStatsSA.description": "Werfen Sie einen Blick auf die Zahlen:",
    "domainStatsSA.chooseDomain": "Wählen Sie Ihre eigene Domain",
    "domainStatsSA.achievement":
      "Wir sind stolz darauf, über 1.800 Domainnamen registriert zu haben!",
    "domainStatsSA.backgroundRightAlt": "Rechter SVG-Hintergrund",
    "domainStatsSA.backgroundLeftAlt": "Linker SVG-Hintergrund",
    "languageSelector.saudi": "Saudi-Arabien",
    "languageSelector.uae": "Vereinigte Arabische Emirate",
    "languageSelector.sudan": "Sudan",
    "languageSelector.turkey": "Türkei",
    "languageSelector.egypt": "Ägypten",
    "languageSelector.oman": "Oman",
    "languageSelector.iraq": "Irak",
    "languageSelector.syria": "Syrien",
    "languageSelector.germany": "Deutschland",
    "languageSelector.france": "Frankreich",
    "languageSelector.qatar": "Katar",
    "languageSelector.india": "Indien",
    "serverLocations.download": "Download",
    "serverLocations.upload": "Upload",
    "serverLocations.comingSoonTitle": "Demnächst",
    "serverLocations.comingSoonMessage": "Dieser Server wird bald gestartet",
    "serverLocations.mapAlt": "Weltkarte",

    "dashboardWelcome.title": "Willkommen in Ihrem Dashboard",
    "dashboardWelcome.description":
      "Verwalten Sie Ihre Domain einfach, überprüfen Sie Ihre Statistiken und überwachen Sie die Leistung von einem Ort aus.",
    "dashboardWelcome.imageAlt": "Dashboard",
    "dashboardOverview.title": "Dashboard-Übersicht",
    "dashboardOverview.description":
      "Greifen Sie direkt von Ihrem Dashboard auf Echtzeitdaten und Leistungsmetriken zu. Verfolgen Sie den Status Ihrer Domain, Besucherstatistiken und vieles mehr an einem Ort.",
    "dashboardOverview.imageAlt": "Bild der Dashboard-Übersicht",
    "performanceTracking.title": "Leistung verfolgen",
    "performanceTracking.description":
      "Bleiben Sie über die Leistung Ihrer Domain auf dem Laufenden. Überwachen Sie den Traffic, Verlängerungen und die Nutzung schnell.",
    "performanceTracking.mobileAlt": "Bild der mobilen Leistung",
    "performanceTracking.backgroundAlt": "Bild der Hintergrundschicht",
    "performanceTracking.patternAlt": "Dekoratives SVG-Muster",
    "domainManagement.title": "Domainverwaltung",
    "domainManagement.description":
      "Verwalten Sie Ihre Domain mit Leichtigkeit. Registrieren Sie neue Domains, verlängern Sie bestehende und sehen Sie alle relevanten Details in Echtzeit ein.",
    "domainManagement.imageAlt": "Desktop-Bild",
    "techStack.mainTitle":
      "Technologien, die beim Aufbau des Projekts verwendet wurden",
    "techStack.reactTitle": "React",
    "techStack.reactAlt": "React-Symbol",
    "techStack.laravelTitle": "Laravel",
    "techStack.laravelAlt": "Laravel-Logo",
    "techStack.phpTitle": "PHP",
    "techStack.phpAlt": "PHP-Logo",
    "techStack.javascriptTitle": "JavaScript",
    "techStack.javascriptAlt": "JavaScript-Logo",
    "techStack.lagomTitle": "Lagom Theme",
    "techStack.lagomAlt": "Lagom Theme-Logo",
    "techStack.whatsappApiTitle": "WhatsApp API",
    "techStack.whatsappApiAlt": "WhatsApp API-Symbol",
    "techStack.whmcsTitle": "WHMCS",
    "techStack.whmcsAlt": "WHMCS-Logo",
    "keyFeaturesTwo.mainTitle": "Hauptmerkmale",
    "keyFeaturesTwo.mainDescription":
      "Durch unsere Cloud-Produkte und -Dienste erfüllen wir 100% Ihrer Geschäfts- und Datenanforderungen und bieten höchste Sicherheitsstandards für Ihre Infrastruktur.",
    "keyFeaturesTwo.cloudHostingTitle": "Geteiltes Cloud-Hosting",
    "keyFeaturesTwo.cloudHostingDescription":
      "Hosten Sie Ihre Website einfach und komfortabel zu einem erschwinglichen Preis! Mit geteiltem Cloud-Hosting.",
    "keyFeaturesTwo.cloudHostingAlt": "Symbol für geteiltes Cloud-Hosting",
    "keyFeaturesTwo.lsSuiteTitle": "LS Suite",
    "keyFeaturesTwo.lsSuiteDescription":
      "Professionelle E-Mail, Online-Speicher, Unternehmensmeetings und mehr. Entwickelt für Unternehmen.",
    "keyFeaturesTwo.lsSuiteAlt": "LS Suite-Symbol",
    "keyFeaturesTwo.jpaasTitle": "JPaaS Plattform als Dienst",
    "keyFeaturesTwo.jpaasDescription":
      "Verwalten Sie Ihren Server mit voller Kontrolle",
    "keyFeaturesTwo.jpaasAlt": "JPaaS Plattform-Symbol",
    "keyFeaturesTwo.learnMore": "Erfahren Sie mehr",
    "speedSection.title": "Geschwindigkeit",
    "speedSection.description":
      "Schützen Sie die Daten Ihrer Website und zeigen Sie Ihr Sicherheitszertifikat Ihren Besuchern",
    "launchAppsSection.mainTitle": "Starten Sie Ihre Apps in Sekunden!",
    "launchAppsSection.mainDescription":
      "Erstellen oder führen Sie verschiedene Anwendungen mit umfassender Plattformunterstützung aus",
    "launchAppsSection.appAlt": "App-Symbol",
    "launchAppsSection.dockerAlt": "Docker-Symbol",
    "launchAppsSection.phpAlt": "PHP-Symbol",
    "launchAppsSection.pythonAlt": "Python-Symbol",
    "featuresGrid.disasterRecovery": "Cloud-basierte Notfallwiederherstellung",
    "featuresGrid.emailProtection": "E-Mail-Schutz und Archivierung",
    "featuresGrid.threatDetection":
      "Erweiterte Bedrohungserkennung und -reaktion",
    "featuresGrid.centralizedManagement1":
      "Zentralisierte Verwaltung und Überwachung",
    "featuresGrid.centralizedManagement2":
      "Zentralisierte Verwaltung und Überwachung",
    "featuresGrid.centralizedManagement3":
      "Zentralisierte Verwaltung und Überwachung",
    "featuresGrid.centralizedManagement4":
      "Zentralisierte Verwaltung und Überwachung",
    "featuresGrid.centralizedManagement5":
      "Zentralisierte Verwaltung und Überwachung",
    "featuresGrid.centralizedManagement6":
      "Zentralisierte Verwaltung und Überwachung",

    "whoisToolSectionTwo.description":
      "Das WHOIS-Tool ist ein wertvoller Dienst, der umfassende Informationen über Domainnamen liefert, wie z.B. den Namen des Eigentümers, Registrierungsdetails, Ablaufdatum und zugehörige Kontaktinformationen. Es hilft, die Eigentümerschaft von Domains zu überprüfen, die Verfügbarkeit für die Registrierung zu prüfen und die Zuverlässigkeit von Websites zu bewerten. Viele Domain-Registrare und Cybersicherheitsexperten verlassen sich auf dieses Tool für Forschung, Schutz und die Einhaltung gesetzlicher Standards.",
    "whoisToolSectionTwo.imageAlt": "WHOIS-Tool-Bild",
    "whoisToolSection.title": "Was ist das WHOIS-Tool?",
    "whoisToolSection.description":
      "Das WHOIS-Tool ist ein Dienst, der Informationen über Domainnamen bereitstellt, einschließlich des Domaininhabers, Registrierungsdetails, Ablaufdatum und zugehöriger Kontaktinformationen. Es hilft Nutzern, die Eigentümerschaft von Domains zu überprüfen, die Verfügbarkeit zu prüfen und die Glaubwürdigkeit von Websites zu validieren. Viele Domain-Registrare und Cybersicherheitsexperten nutzen dieses Tool für Forschung, Sicherheit und Compliance-Zwecke.",
    "whoisToolSection.imageAlt": "WHOIS-Sicherheitsbild",
    "keyBenefitsSection.mainTitle": "Hauptvorteile",
    "keyBenefitsSection.mainDescription":
      "Besitzen Sie Ihren dedizierten Server mit Ihrem bevorzugten Betriebssystem und vorinstallierten Anwendungen.",
    "keyBenefitsSection.pciDssTitle": "PCI/DSS-Konformität",
    "keyBenefitsSection.pciDssAlt": "Konformitätssymbol",
    "keyBenefitsSection.encryptionTitle": "256-Bit-Datenverschlüsselung",
    "keyBenefitsSection.encryptionAlt": "Verschlüsselungssymbol",
    "keyBenefitsSection.secureClientTitle": "Sicherung von Kundendaten",
    "keyBenefitsSection.secureClientAlt": "Datensicherheitssymbol",
    "keyBenefitsSection.supportTitle": "Technischer Support",
    "keyBenefitsSection.supportAlt": "Technisches Supportsymbol",
    "keyBenefitsSection.warrantyTitle": "Garantie",
    "keyBenefitsSection.warrantyAlt": "Garantiesymbol",
    "keyBenefitsSection.securityTitle": "Schlosssymbol und https://",
    "keyBenefitsSection.securityAlt": "Sicherheitssymbol",

    "onlinePaymentSection.mainTitle": "Online-Zahlung",
    "onlinePaymentSection.mainDescription":
      "Genießen Sie einen schnellen und direkten Online-Zahlungsprozess",
    "onlinePaymentSection.americanExpressAlt": "American Express-Symbol",
    "onlinePaymentSection.visaAlt": "Visa-Symbol",
    "onlinePaymentSection.masterCardAlt": "MasterCard-Symbol",
    "paymentMethodsSection.title": "Zahlungsmethoden",
    "paymentMethodsSection.description":
      "Zahlen Sie auf die für Sie passende Weise und genießen Sie ein reibungsloses Zahlungserlebnis",
    "paymentMethodsSection.mainTitle": "Zahlungsmethoden per Banküberweisung",
    "paymentMethodsSection.mainDescription":
      "Führen Sie Banküberweisungen einfach und sicher durch",
    "paymentMethodsSection.bankakTitle": "Bankak",
    "paymentMethodsSection.bankakDescription":
      "Erfahren Sie mehr über Bankak, seine Dienstleistungen und wie es Ihnen hilft, Ihre Finanztransaktionen sicher und effizient zu verwalten.",
    "paymentMethodsSection.bankakAlt": "Bankak-Symbol",
    "paymentMethodsSection.ibanTitle": "Internationale Bankkontonummer (IBAN)",
    "paymentMethodsSection.ibanDescription":
      "Verstehen Sie die Bedeutung der IBAN für internationale Transaktionen und wie sie sichere und genaue Finanzüberweisungen gewährleistet.",
    "paymentMethodsSection.ibanAlt": "IBAN-Symbol",
    "paymentMethodsSection.instantTitle": "Sofortüberweisungen",
    "paymentMethodsSection.instantDescription":
      "Senden und empfangen Sie Geld sofort mit sicheren und zuverlässigen Zahlungslösungen, die für schnelle Transaktionen entwickelt wurden.",
    "paymentMethodsSection.instantAlt": "Sofortüberweisungen-Symbol",
    "paymentMethodsSection.oowCashTitle": "Oow-Cash",
    "paymentMethodsSection.oowCashDescription":
      "Entdecken Sie die Vorteile von Oow-Cash für reibungslose digitale Zahlungen und einfache Finanzverwaltung.",
    "paymentMethodsSection.oowCashAlt": "Oow-Cash-Symbol",
    "paymentMethodsSection.moreLink": "Mehr",
    "walletsSection.mainTitle": "Portefeuilles électroniques",
    "walletsSection.mainDescription":
      "Obtenez une licence unique pour les serveurs privés et les serveurs dédiés complets",
    "walletsSection.sdadTitle": "Paiement",
    "walletsSection.sdadDescription":
      "Effectuez des paiements sécurisés et rapides avec nos solutions de paiement fiables, garantissant une expérience de transaction fluide.",
    "walletsSection.sdadAlt": "Icône de paiement",
    "walletsSection.paypalTitle": "PayPal",
    "walletsSection.paypalDescription":
      "Envoyez et recevez de l'argent dans le monde entier avec PayPal, une plateforme de paiement électronique fiable offrant des transactions sécurisées.",
    "walletsSection.paypalAlt": "Icône PayPal",
    "walletsSection.vodafoneTitle": "Vodafone Cash",
    "walletsSection.vodafoneDescription":
      "Transférez de l'argent facilement, payez vos factures et rechargez votre solde avec le service de paiement mobile pratique de Vodafone.",
    "walletsSection.vodafoneAlt": "Icône Vodafone Cash",
    "walletsSection.zainTitle": "Zain Cash",
    "walletsSection.zainDescription":
      "Profitez de transactions financières fluides avec Zain Cash, offrant des paiements numériques sécurisés et des transferts d'argent.",
    "walletsSection.zainAlt": "Icône Zain Cash",
    "walletsSection.moreLink": "Plus",
    "cryptocurrenciesSection.mainTitle": "Kryptowährungen",
    "cryptocurrenciesSection.mainDescription":
      "Erhalten Sie eine einzige Lizenz für private Server und vollständig dedizierte Server",
    "cryptocurrenciesSection.ethereumAlt": "Ethereum-Symbol",
    "cryptocurrenciesSection.binanceAlt": "Binance-Symbol",
    "cryptocurrenciesSection.bitcoinAlt": "Bitcoin-Symbol",
    "cryptocurrenciesSection.tetherAlt": "Tether-Symbol",
    "traditionalPaymentSection.mainTitle": "Traditionelle Zahlungsmethoden",
    "traditionalPaymentSection.cdnTitle":
      "Verbessern Sie die Website-Leistung mit CDN",
    "traditionalPaymentSection.cdnDescription":
      "Verbinden Sie den Domainnamen Ihres Unternehmens, um die Markenbekanntheit zu steigern und ein professionelleres Image mit einer benutzerdefinierten E-Mail zu präsentieren",
    "traditionalPaymentSection.cdnAlt": "Kartensymbol",
    "traditionalPaymentSection.ddosTitle": "Abwehr von DDoS-Angriffen",
    "traditionalPaymentSection.ddosDescription":
      "Verteilte Denial-of-Service-Angriffe (DDoS) können Ihr gesamtes Unternehmen stören. Wir blockieren DDoS-Angriffe auf den Ebenen 3, 4 und 7 und sichern die Bandbreite während der Angriffe.",
    "traditionalPaymentSection.ddosAlt": "Transfersymbol",
    "traditionalPaymentSection.securityTitle": "Schutz vor Hacking und Malware",
    "traditionalPaymentSection.securityDescription":
      "Schützen Sie Ihre Website vor Malware, verhindern Sie Hacking-Versuche, Zero-Day-Angriffe und Brute-Force-Angriffe auf Passwörter.",
    "traditionalPaymentSection.securityAlt": "Bargeldsymbol",
    "blogsSection.title": "Blogs",
    "blogsSection.description":
      "Durchstöbern Sie die neuesten und aktuellsten Artikel über Nemours",
    "benefitsSection.mainTitle": "Vorteile",
    "benefitsSection.description":
      "Wir bieten eine flexible Arbeitsumgebung, kontinuierliche Schulungen und Belohnungen für herausragende Leistungen.",
    "benefitsSection.trainingTitle": "Schulung / Bildungsunterstützung",
    "benefitsSection.trainingAlt": "Schulungssymbol",
    "benefitsSection.leaveTitle": "Persönlicher und Krankenurlaub",
    "benefitsSection.leaveAlt": "Urlaubssymbol",
    "benefitsSection.rewardsTitle":
      "Belohnungen (Herausragende Leistung, Zielerreichung, Meilensteinabschluss)",
    "benefitsSection.rewardsAlt": "Belohnungssymbol",
    "benefitsSection.insuranceTitle": "Krankenversicherung",
    "benefitsSection.insuranceAlt": "Krankenversicherungssymbol",
    "joinUsSection.title": "Jetzt beitreten",
    "joinUsSection.description":
      "Wir glauben, dass unser Team die Grundlage unseres Erfolgs ist, und wir streben danach, eine motivierende Arbeitsumgebung mit kontinuierlicher Investition in die Entwicklung ihrer Fähigkeiten zu bieten, um mit unseren neuesten Dienstleistungen Schritt zu halten.",
    "joinUsSection.button": "Verfügbare Stellen",
    "jobsSection.title": "Verfügbare Stellen",
    "jobsSection.description":
      "Unsere Mission ist es, den technologischen Fortschritt lokal, wirtschaftlich und kulturell zu führen, und wir brauchen leidenschaftliche und engagierte Menschen, um dieses Ziel zu erreichen!",
    "jobsSection.button": "Verfügbare Stellen",
    "jobsSection.rightBackgroundAlt": "Rechter Hintergrund",
    "jobsSection.leftBackgroundAlt": "Linker Hintergrund",
    "jobsSection.lampImageAlt": "Lampenbild",
    "countrySelector.italyName": "Italien",
    "countrySelector.franceName": "Frankreich",
    "countrySelector.germanyName": "Deutschland",
    "countrySelector.japanName": "Japan",
    "countrySelector.finlandName": "Finnland",
    "countrySelector.usaName": "USA",
    "countrySelector.turkeyName": "Türkei",
    "countrySelector.italyFlagAlt": "Flagge Italiens",
    "countrySelector.franceFlagAlt": "Flagge Frankreichs",
    "countrySelector.germanyFlagAlt": "Flagge Deutschlands",
    "countrySelector.japanFlagAlt": "Flagge Japans",
    "countrySelector.finlandFlagAlt": "Flagge Finnlands",
    "countrySelector.usaFlagAlt": "Flagge der USA",
    "countrySelector.turkeyFlagAlt": "Flagge der Türkei",
    "standalone.serverDescription":
      "Vous pouvez posséder un serveur dédié avec le système d'exploitation de votre choix et des applications préinstallées.",
    "geoRegions.header": "Mehrere Geografische Regionen",
    "geoRegions.text":
      "Verwalten und betreiben Sie Ihre Anwendungen über mehrere Geräteregionen hinweg mit einer einfachen und einheitlichen Benutzeroberfläche, die eine nahtlose Migration ermöglicht, um Ihren Kunden näher zu sein.",
    "geoRegions.illustrationAlt": "Illustration Geografischer Regionen",
    "essentialFeatures.header":
      "Profitieren Sie von einer Reihe essentieller Funktionen, die ein umfassendes und effizientes Erlebnis mit unseren Diensten gewährleisten, unabhängig vom gewählten Plan",
    "essentialFeatures.serverMonitoringTitle": "24/7 Serverüberwachung",
    "essentialFeatures.serverMonitoringAlt": "Serverüberwachungssymbol",
    "essentialFeatures.sslCertificateTitle": "Kostenloses SSL-Zertifikat",
    "essentialFeatures.sslCertificateAlt": "SSL-Zertifikatssymbol",
    "essentialFeatures.threatProtectionTitle":
      "Schutz vor schädlichen Bedrohungen",
    "essentialFeatures.threatProtectionAlt": "Bedrohungsschutzsymbol",
    "essentialFeatures.softaculousInstallerTitle":
      "Softaculous-Installationsprogramm",
    "essentialFeatures.softaculousInstallerAlt": "Softaculous-Symbol",
    "essentialFeatures.regularBackupTitle": "Regelmäßige Sicherung",
    "essentialFeatures.regularBackupAlt": "Sicherungssymbol",
    "essentialFeatures.linuxOsTitle": "Linux-Betriebssystem",
    "essentialFeatures.linuxOsAlt": "Linux-Symbol",
    "essentialFeatures.controlPanelTitle": "Cpanel/Plesk-Kontrollpanel",
    "essentialFeatures.controlPanelAlt": "Kontrollpanel-Symbol",
    "essentialFeatures.technicalSupportTitle":
      "Kontinuierlicher technischer Support",
    "essentialFeatures.technicalSupportAlt": "Technisches Support-Symbol",

    "fullServers.mainTitle": "Dedizierte Volle Server",
    "fullServers.mainDescription":
      "Wir bieten Ihnen benutzerfreundliches Shared Hosting mit innovativen Tools, die Ihnen helfen, Ihre Website einfach zu erstellen und zu verwalten",

    "hostingTiers.mainTitle": "Dedizierte Serverpläne",
    "hostingTiers.serverInfoTitle": "Serverinformationen",
    "hostingTiers.serverInfoSubtitle":
      "Wählen Sie den Server, der Ihren Anforderungen entspricht",
    "hostingTiers.priceMain": "31,99 ",
    "hostingTiers.priceRenewal": "20 SAR/Monat bei Verlängerung",
    "hostingTiers.buyNowButton": "Jetzt Kaufen",
    "hostingTiers.featuresButton": "Funktionen",
    "hostingTiers.cpuSpecTitle": "32 Kerne bei 2,4 GHz",
    "hostingTiers.cpuSpecSubtitle": "Benchmark-Ergebnis: 15.390",
    "hostingTiers.storageSpecTitle": "2 x 250 GB SSD-Laufwerke",
    "hostingTiers.storageSpecSubtitle": "Erweiterbar auf bis zu 8 Laufwerke",
    "hostingTiers.databaseSpecTitle": "1 Datenbank",
    "hostingTiers.databaseSpecSubtitle": "Erweiterbar auf bis zu 3 Datenbanken",
    "hostingTiers.ramSpecTitle": "64 GB",
    "hostingTiers.ramSpecSubtitle": "Aufrüstbar auf bis zu 384 GB",
    "hostingTiers.bandwidthSpecTitle": "3 Gbps Geschwindigkeit",
    "hostingTiers.bandwidthSpecSubtitle": "100 TB kostenlose monatliche Daten",
    "hostingTiers.controlPanelSpecTitle": "cPanel/WHM, Plesk",
    "hostingTiers.controlPanelSpecSubtitle": "Obsidian Webhosting-Edition",
    "hostingTiers.germanyFlagAlt": "Flagge Deutschlands",
    "hostingTiers.finlandFlagAlt": "Flagge Finnlands",
    "hostingTiers.ukFlagAlt": "Flagge des Vereinigten Königreichs",
    "serverServices.mainTitle": "Alle Dienste Enthalten",
    "serverServices.emailProtection": "E-Mail- und Virenschutz",
    "serverServices.malwareProtection": "Schutz vor Malware und Ransomware",
    "serverServices.networkSecurity":
      "Verfolgung, Betrug und Schutz vor Bedrohungen durch Werbenetzwerke, Diebstahl, Verleumdung und Anpassung",
    "serverServices.cloudMigration":
      "Migration von unmöglicher Konfiguration in die Cloud",
    "serverServices.threatDetection":
      "Erkennung und Reaktion auf fortgeschrittene Bedrohungen",
    "serverServices.identityProtection":
      "Schutz der digitalen Identität und Geräte",

    "backupsSection.title": "Sauvegardes",
    "backupsSection.description": "Sauvegardes automatiques permanentes !",
    "supportParagraph.description":
      "Wenn Sie Kunde des Unternehmens sind, können Sie uns einfach über Ihr Konto kontaktieren, um unser technisches Support- oder Vertriebsteam zu erreichen. Wir sind bestrebt, den besten Service und schnelle Lösungen zu bieten, die auf Ihre Bedürfnisse zugeschnitten sind.",

    "supportSectionTwo.helpCenter": "Hilfezentrum",
    "supportSectionTwo.serverStatus": "Serverstatus",
    "supportSectionTwo.subscriberServices": "Abonnentendienste",
    "supportSectionTwo.helpCenterAlt": "Symbol des Hilfezentrums",
    "supportSectionTwo.serverStatusAlt": "Symbol des Serverstatus",
    "supportSectionTwo.subscriberServicesAlt": "Symbol der Abonnentendienste",
    "supportSectionTwo.emailService": "E-Mail-Service",
    "supportSectionTwo.phone": "Telefon",
    "supportSectionTwo.location": "Standort",
    "supportSectionTwo.emailServiceAlt": "E-Mail-Symbol",
    "supportSectionTwo.phoneAlt": "Telefon-Symbol",
    "supportSectionTwo.locationAlt": "Standort-Symbol",
    "supportSectionTwo.mapTitle": "Unser Standort auf der Karte",
    "supportSectionTwo.locationValue": "Riad, Olaya, Saudi-Arabien",

    "contactForm.title":
      "Haben Sie Ihre Antwort noch nicht gefunden? Holen Sie sich jetzt technischen Support.",
    "contactForm.description":
      "Mit vielen einzigartigen Lösungen können Sie problemlos eine Seite ohne Programmierkenntnisse erstellen. Erstellen Sie Ihre nächste Beratungswebsite in wenigen Minuten.",
    "contactForm.salesTab": "Vertrieb",
    "contactForm.customizationTab": "Anpassung",
    "contactForm.trendsTab": "Trends",
    "contactForm.pricesTab": "Preise",
    "contactForm.fullNameLabel": "Vollständiger Name",
    "contactForm.usernameLabel": "Benutzername",
    "contactForm.messageLabel": "Ihre Nachricht",
    "contactForm.languageLabel":
      "In welcher Sprache möchten Sie kommunizieren?",
    "contactForm.languagePlaceholder": "Sprache auswählen",
    "contactForm.languageArabic": "Arabisch",
    "contactForm.languageEnglish": "Englisch",
    "contactForm.languageSpanish": "Spanisch",
    "contactForm.submitButton": "Senden",
    "contactForm.contactAlternative": "Oder kontaktieren Sie uns unter",

    "loginSection.logoAlt": "Logo",
    "loginSection.emailIconAlt": "E-Mail-Symbol",
    "loginSection.passwordIconAlt": "Schloss-Symbol",
    "loginSection.footerLogoAlt": "Fußzeilen-Logo",
    "loginSection.title": "Anmeldung",
    "loginSection.emailPlaceholder": "Geben Sie Ihre E-Mail ein",
    "loginSection.passwordPlaceholder": "Geben Sie das Passwort ein",
    "loginSection.forgotPassword": "Anmeldedaten vergessen?",
    "loginSection.loginButton": "Anmelden",
    "loginSection.noAccount": "Haben Sie kein Konto?",
    "loginSection.createAccount": "Neues Konto erstellen",

    "softaculousSection.title": "Softaculous Hosting",
    "softaculousSection.description":
      "Ein-Klick-Installation für über 400 Anwendungen mit Softaculous",

    "appHostingSection.title": "Anwendungs-Hosting",
    "appHostingSection.description":
      "Beschreibung und Details zu Shared-Hosting-Diensten, die entwickelt wurden, um zuverlässige und skalierbare Lösungen für Ihre Anwendungen bereitzustellen",
    "appHostingSection.viewPricing": "Preise anzeigen",
    "appHostingSection.createAccount": "Konto erstellen",
    "ecommerceSection.title": "E-Commerce – Elektronischer Handel",
    "ecommerceSection.cyclosName": "Cyclos 4 Pro",
    "ecommerceSection.magentoName": "Magento",
    "ecommerceSection.magentoClusterName": "Magento Cluster",
    "ecommerceSection.maianCartName": "Maian Cart",
    "ecommerceSection.openCartName": "OpenCart",
    "ecommerceSection.prestaShopName": "PrestaShop",
    "ecommerceSection.cyclosDescription":
      "Cyclos 4 PRO ist eine Zahlungsplattform für große Unternehmen und Institutionen",
    "ecommerceSection.magentoDescription":
      "Magento ist eine E-Commerce-Software und -Plattform, der weltweit führende Marken vertrauen. Wachsen Sie mit Magento Ihr Online-Geschäft",
    "ecommerceSection.magentoClusterDescription":
      "Automatisierte Skalierbarkeit und hohe Verfügbarkeit für Magento-Cluster mit Lastverteilung, Datenreplikation, Inhaltscaching und Speicherung von Benutzersitzungen",
    "ecommerceSection.maianCartDescription":
      "Maian Cart ist eine schnelle, leistungsstarke und kostenlose E-Commerce-Plattform, die mit PHP und MySQL entwickelt wurde und alle Funktionen bietet, die Sie für Ihren Online-Shop benötigen",
    "ecommerceSection.openCartDescription":
      "OpenCart ist ein Open-Source-Online-Shopping-System basierend auf PHP",
    "ecommerceSection.prestaShopDescription":
      "PrestaShop ist eine Open-Source- und vollständig anpassbare Lösung für den Online-Verkauf von Produkten, die effizient, schnell und einfach zu bedienen ist",
    "ecommerceSection.cyclosLogoAlt": "Cyclos 4 Pro Logo",
    "ecommerceSection.magentoLogoAlt": "Magento Logo",
    "ecommerceSection.maianCartLogoAlt": "Maian Cart Einkaufswagen-Symbol",
    "ecommerceSection.openCartLogoAlt": "OpenCart Logo",
    "ecommerceSection.prestaShopLogoAlt": "PrestaShop Logo",
    "ecommerceSection.launchNow": "Jetzt starten",
    "statsSection.dataCenters": "Rechenzentren",
    "statsSection.uptime": "Betriebszeit",
    "statsSection.hostedSites": "Gehostete Websites",
    "statsSection.guaranteedAvailability": "Garantierte Verfügbarkeit",
    "statsSection.customerSatisfaction": "Kundenzufriedenheit",
    "statsSection.dataCentersAlt": "Symbol für Rechenzentren",
    "statsSection.uptimeAlt": "Symbol für Betriebszeit",
    "statsSection.hostedSitesAlt": "Symbol für gehostete Websites",
    "statsSection.guaranteedAvailabilityAlt":
      "Symbol für garantierte Verfügbarkeit",
    "statsSection.customerSatisfactionAlt": "Symbol für Kundenzufriedenheit",

    "statsSectionTwo.dataCenters": "Rechenzentren",
    "statsSectionTwo.uptime": "Betriebszeit",
    "statsSectionTwo.hostedSites": "Gehostete Websites",
    "statsSectionTwo.guaranteedAvailability": "Garantierte Verfügbarkeit",
    "statsSectionTwo.customerSatisfaction": "Kundenzufriedenheit",
    "statsSectionTwo.dataCentersAlt": "Symbol für Rechenzentren",
    "statsSectionTwo.uptimeAlt": "Symbol für Betriebszeit",
    "statsSectionTwo.hostedSitesAlt": "Symbol für gehostete Websites",
    "statsSectionTwo.guaranteedAvailabilityAlt":
      "Symbol für garantierte Verfügbarkeit",
    "statsSectionTwo.customerSatisfactionAlt": "Symbol für Kundenzufriedenheit",

    "achievementsSectionTwo.title": "Unsere Erfolge",
    "achievementsSectionTwo.description":
      "Gegründet von Ali Al-Mansi und Yahya Hassan, begann es seine Tätigkeit mit der Spezialisierung auf Hosting-Dienste mit einem Team von nur 3 Personen.",

    "contactSection.description":
      "Möchten Sie erfahren, wie wir Ihrem Unternehmen zum Erfolg verhelfen können? Kontaktieren Sie uns.",
    "contactSection.helpTitle": "Brauchen Sie Hilfe?",
    "contactSection.helpDescription":
      "Nehmen Sie Kontakt mit uns auf und erhalten Sie Unterstützung",
    "contactSection.contactButton": "Jetzt kontaktieren",
    "contactSection.microsoftLogoAlt": "Microsoft-Logo",
    "contactSection.partner1LogoAlt": "Partner 1 Logo",
    "contactSection.partner2LogoAlt": "Partner 2 Logo",
    "contactSection.partner3LogoAlt": "Partner 3 Logo",
    "contactSection.partner4LogoAlt": "Partner 4 Logo",

    "tigersSection.title": "Über Nomoar",
    "tigersSection.description":
      "Nomoar ist der führende Anbieter von Cloud-Diensten in Saudi-Arabien und widmet sich der Unterstützung und dem Schutz der technischen Infrastruktur von Organisationen jeder Größe.",
    "featuresSection.title": "Funktionen",
    "featuresSection.multilingualSites": "Mehrsprachige Websites",
    "featuresSection.fiftyLanguages": "Unterstützung für 50 Sprachen",
    "featuresSection.responsiveDesign": "Responsives Design für alle Geräte",
    "featuresSection.easyTool": "Benutzerfreundliches Tool",
    "featuresSection.videoTutorials": "Video-Tutorials zur Nutzung",
    "featuresSection.plugins": "Plugins",
    "featuresSection.templates": "Über eine Million Vorlagen",
    "featuresSection.siteMigration":
      "Möglichkeit zur Migration von Websites aus anderen Baukästen",
    "featuresSection.multilingualSitesAlt": "Symbol für mehrsprachige Websites",
    "featuresSection.fiftyLanguagesAlt":
      "Symbol für Unterstützung von 50 Sprachen",
    "featuresSection.responsiveDesignAlt": "Symbol für responsives Design",
    "featuresSection.easyToolAlt": "Symbol für benutzerfreundliches Tool",
    "featuresSection.videoTutorialsAlt": "Symbol für Video-Tutorials",
    "featuresSection.pluginsAlt": "Symbol für Plugins",
    "featuresSection.templatesAlt": "Symbol für Vorlagen",
    "featuresSection.siteMigrationAlt": "Symbol für Website-Migration",
    "featuresSection.rightImgAlt": "Rechtes Hintergrundbild",
    "featuresSection.leftImgAlt": "Linkes Hintergrundbild",
    "oneClickApps.helmChartsAlt": "Helm Charts Symbol",
    "oneClickApps.certManagerAlt": "Zertifikatsmanager Symbol",
    "oneClickApps.linkerdAlt": "Linkerd Symbol",
    "oneClickApps.operatorsAlt": "Operatoren Symbol",
    "oneClickApps.illustrationAlt": "Illustration der One-Click-Apps",
    "distributorBasicNeed.title":
      "Benötigen Sie Lizenzen, um Ihren Server zu betreiben?",
    "distributorBasicNeed.subtitle":
      "Wir bieten sie Ihnen zum niedrigsten Preis an",
    "distributorBasicNeed.registerButton": "Registrierungsformular",
    "distributorBasicNeed.distributorsButton": "Händler",
    "distributorBasicNeed.settingsIllustrationAlt": "Einstellungen",
    "kubernetes.title": "Erstellen Sie Kubernetes-Cluster in wenigen Minuten",
    "resellerHosting.title": "Reseller-Hosting",
    "resellerHostingPlus.title": "Verteiler Plus",
    "resellerHostingUltra.title": "Verteiler Ultra",
    "resellerHostingProgram.title": "Partnerprogramm für Wiederverkäufer",
    "resellerHosting.description":
      "Erzielen Sie Gewinne und erweitern Sie Ihre Dienstleistungen.",
    "windowsHosting.title": "Windows-Hosting",
    "windowsHosting.description":
      "Einer der besten, schnellsten und einfachsten Hosting-Dienste",
    "support.title":
      "Nicht sicher, wo Sie anfangen sollen? Keine Sorge, wir sind hier, um Ihnen zu helfen",
    "support.description":
      "Libya Spider, als offizieller Anbieter von Microsoft-Cloud-Lösungen, ist bereit, Ihre Organisation bei der Einführung und vollständigen Integration der Microsoft 365 Cloud-Produktivitätslösung in Ihren Arbeitsablauf zu unterstützen.",
    "support.successMessage":
      "Wir sind stolz darauf, zahlreiche Unternehmen bei ihrem erfolgreichen Übergang zu Microsoft 365-Diensten unterstützt zu haben – und freuen uns, auch Ihnen zu helfen!",
    "support.cta": "Jetzt anfragen!",
    "support.settingsChanges": "Einstellungsänderungen",
    "support.settingsChangesAlt": "Symbol für Einstellungsänderungen",
    "support.training": "Schulung",
    "support.trainingAlt": "Symbol für Schulung",
    "support.technicalSupport": "Technischer Support",
    "support.technicalSupportAlt": "Symbol für technischen Support",
    "support.settingsCustomization": "Einstellungen und Anpassung",
    "support.settingsCustomizationAlt":
      "Symbol für Einstellungen und Anpassung",
    "support.dataUserMigration": "Daten- und Benutzermigration",
    "support.dataUserMigrationAlt": "Symbol für Daten- und Benutzermigration",
    "support.sharePointMigration": "SharePoint Online-Migration",
    "support.sharePointMigrationAlt": "Symbol für SharePoint Online-Migration",
    "tigersHosting.title": "Nomoar Hosting",
    "tigersHosting.description":
      "Einfach zu verwaltende und kosteneffiziente Cloud-Infrastruktur",
    "cloudInfrastructure.title":
      "Flexible, leicht zu verwaltende und skalierbare Infrastruktur",
    "cloudInfrastructure.description":
      "LS Cloud kombiniert Rechen-, Speicher- und Netzwerkressourcen mit fortschrittlichen Analysen und Überwachungstools in einer einzigen, benutzerfreundlichen Cloud-Plattform.",
    "cloudInfrastructure.tools":
      "Tools in einer einzigen, benutzerfreundlichen Cloud-Plattform.",
    "cloudInfrastructure.resources":
      "Cloud-Ressourcen, die in Minuten bereitgestellt werden können",
    "cloudInfrastructure.loadMetrics": "Lastmetriken",
    "cloudInfrastructure.loadMetricsAlt": "Symbol für Lastmetriken",
    "cloudInfrastructure.networking": "Netzwerk",
    "cloudInfrastructure.networkingAlt": "Symbol für Netzwerk",
    "cloudInfrastructure.storageSizes": "Speichergrößen",
    "cloudInfrastructure.storageSizesAlt": "Symbol für Speichergrößen",
    "cloudInfrastructure.virtualServers": "Virtuelle Server",
    "cloudInfrastructure.virtualServersAlt": "Symbol für virtuelle Server",
    "cloudInfrastructure.backgroundAlt": "Cloud-Hintergrund",
    "whyChooseTigers.blockUnauthorizedEmail": "Unbefugte E-Mails blockieren",
    "whyChooseTigers.blockUnauthorizedEmailDesc":
      "Mit PowerDMARC eliminieren Sie nicht nur E-Mail-Spoofing, sondern können auch detaillierte Berichte nutzen, um Ihre Content-Strategie sofort anzupassen. Lassen Sie nichts dem Zufall über.",
    "whyChooseTigers.blockUnauthorizedEmailAlt":
      "Symbol für das Blockieren unbefugter E-Mails",
    "whyChooseTigers.preventEmailSpoofing": "E-Mail-Spoofing verhindern",
    "whyChooseTigers.preventEmailSpoofingDesc":
      "Schützen Sie Ihre Domain vor E-Mail-Spoofing und Phishing-Angriffen mit fortschrittlichen Authentifizierungsprotokollen. Stellen Sie sicher, dass nur autorisierte Absender Ihre Domain verwenden können.",
    "whyChooseTigers.preventEmailSpoofingAlt":
      "Symbol für die Verhinderung von E-Mail-Spoofing",
    "whyChooseTigers.enhanceEmailSecurity": "E-Mail-Sicherheit verbessern",
    "whyChooseTigers.enhanceEmailSecurityDesc":
      "Erhalten Sie vollständige Einblicke in Ihren E-Mail-Verkehr und erkennen Sie unbefugte Aktivitäten in Echtzeit. Halten Sie Ihre Kommunikation sicher und konform.",
    "whyChooseTigers.enhanceEmailSecurityAlt":
      "Symbol für die Verbesserung der E-Mail-Sicherheit",
    "whyChooseTigers.verifyEmail": "Jede E-Mail verifizieren",
    "whyChooseTigers.verifyEmailDesc":
      "Verwenden Sie DMARC, SPF und DKIM, um Ihre E-Mails zu validieren und Cyberkriminelle daran zu hindern, Ihre Domain zu spoofen. Bauen Sie Vertrauen bei den Empfängern auf.",
    "whyChooseTigers.verifyEmailAlt":
      "Symbol für die Verifizierung jeder E-Mail",
    "whyChooseTigers.backgroundRightAlt": "Rechter Hintergrund",
    "whyChooseTigers.backgroundLeftAlt": "Linker Hintergrund",

    "businessHosting.title": "Business-Hosting",
    "businessHosting.description":
      "Einer der besten, schnellsten und einfachsten Hosting-Dienste",
    "servicesThree.title": "Schnell starten und Ihr Unternehmen ausbauen",
    "servicesThree.reliableStaticHosting": "Zuverlässiges statisches Hosting",
    "servicesThree.reliableStaticHostingDesc":
      "Hosten Sie Ihre statischen Websites mit blitzschnellen Ladezeiten und unübertroffener Stabilität. Genießen Sie nahtlosen Einsatz mit einem global verteilten CDN.",
    "servicesThree.reliableStaticHostingAlt":
      "Symbol für zuverlässiges statisches Hosting",
    "servicesThree.scalableCloudStorage": "Skalierbarer Cloud-Speicher",
    "servicesThree.scalableCloudStorageDesc":
      "Speichern und greifen Sie sicher auf Ihre Daten mit hochleistungsfähigem Cloud-Speicher zu. Skalieren Sie mühelos, während Ihr Unternehmen wächst, mit verbesserter Redundanz.",
    "servicesThree.scalableCloudStorageAlt":
      "Symbol für skalierbaren Cloud-Speicher",
    "servicesThree.enterpriseStaticHosting":
      "Statisches Hosting auf Unternehmensebene",
    "servicesThree.enterpriseStaticHostingDesc":
      "Liefern Sie Ihre statischen Anwendungen mit Sicherheit und hoher Leistung. Profitieren Sie von sofortigen Updates, globalem Zugriff und keiner Wartung.",
    "servicesThree.enterpriseStaticHostingAlt":
      "Symbol für statisches Hosting auf Unternehmensebene",
    "mainFeatures.title": "Hauptfunktionen",
    "mainFeatures.description":
      "Besitzen Sie Ihren dedizierten Server mit Ihrem bevorzugten Betriebssystem und vorinstallierten Anwendungen.",
    "mainFeatures.crossPlatform": "Funktioniert auf mehreren Plattformen",
    "mainFeatures.crossPlatformAlt": "Symbol für Multiplattform",
    "mainFeatures.ddosMitigation": "Abwehr von DDoS-Angriffen",
    "mainFeatures.ddosMitigationAlt": "Symbol für DDoS-Abwehr",
    "mainFeatures.malwareDetection": "Erkennung und Entfernung von Malware",
    "mainFeatures.malwareDetectionAlt": "Symbol für Malware-Erkennung",
    "mainFeatures.sslCertificate": "SSL-Sicherheitszertifikat",
    "mainFeatures.sslCertificateAlt": "Symbol für SSL-Zertifikat",
    "mainFeatures.securityMonitoring": "Sicherheitsüberwachung",
    "mainFeatures.securityMonitoringAlt": "Symbol für Sicherheitsüberwachung",
    "mainFeatures.performanceOptimization": "Leistungsoptimierung",
    "mainFeatures.performanceOptimizationAlt":
      "Symbol für Leistungsoptimierung",
    "mainFeatures.backgroundRightAlt": "Rechtes Hintergrundbild",
    "mainFeatures.backgroundLeftAlt": "Linkes Hintergrundbild",

    "emailHosting.title": "E-Mail-Hosting",
    "emailHosting.description":
      "Einer der besten, schnellsten und einfachsten Hosting-Dienste",
    "businessNeeds.title": "Alles, was Ihr Unternehmen braucht",
    "businessNeeds.brandAwareness": "Markenbekanntheit steigern",
    "businessNeeds.brandAwarenessDesc":
      "Verknüpfen Sie den Domainnamen Ihres Unternehmens, um die Markenbekanntheit zu steigern und ein professionelleres Image mit einer benutzerdefinierten E-Mail zu präsentieren",
    "businessNeeds.brandAwarenessAlt": "Symbol für Markenbekanntheit",
    "businessNeeds.security": "Sicherheit",
    "businessNeeds.securityDesc":
      "Mit KI und intelligenter E-Mail-Schutzsoftware schützt LS Suite Ihren Posteingang vor Spam, Viren, Malware, Ransomware und Phishing-Angriffen.",
    "businessNeeds.securityAlt": "Symbol für Sicherheit",
    "businessNeeds.accessCollaboration": "Einfacher Zugriff und Zusammenarbeit",
    "businessNeeds.accessCollaborationDesc":
      "Greifen Sie von überall und auf jedem Gerät auf Ihre E-Mails, Kalender, Kontakte und Dateien zu und arbeiten Sie in Echtzeit mit Ihrem Team zusammen, wobei alle Änderungen automatisch gespeichert werden.",
    "businessNeeds.accessCollaborationAlt":
      "Symbol für Zugriff und Zusammenarbeit",
    "emailSecurity.title": "Starke Sicherheit für E-Mail-Schutz",
    "emailSecurity.description":
      "Schützen Sie Ihre professionelle E-Mail mit KI-gestützter Sicherheit gegen Spam, Phishing und Malware.",
    "emailSecurity.backupRestore":
      "Sicherung und Wiederherstellung für physische, virtuelle und Cloud-Umgebungen.",
    "emailSecurity.backupRestoreAlt":
      "Symbol für Sicherung und Wiederherstellung",
    "emailSecurity.antiSpamPhishing":
      "Fortschrittliche integrierte Tools zur Bekämpfung von Spam, Viren und Phishing.",
    "emailSecurity.antiSpamPhishingAlt":
      "Symbol für Anti-Spam- und Phishing-Tools",
    "emailSecurity.documentProtection":
      "Schützen Sie freigegebene Dokumente mit Passwörtern und zeitlichen Beschränkungen.",
    "emailSecurity.documentProtectionAlt": "Symbol für Dokumentschutz",
    "emailSecurity.encryption":
      "Verschlüsseln Sie E-Mails und Dateien einfach, um sensible Informationen zu schützen.",
    "emailSecurity.encryptionAlt":
      "Symbol für E-Mail- und Dateiverschlüsselung",
    "emailSecurity.backgroundAlt": "Hintergrundbild",
    "keyFeaturesTwo.title": "Hauptfunktionen",
    "keyFeatures.description":
      "Besitzen Sie Ihren dedizierten Server mit Ihrem bevorzugten Betriebssystem und vorinstallierten Anwendungen.",
    "keyFeatures.mailStorage": "E-Mail-Speicherkapazität",
    "keyFeatures.mailStorageAlt": "Symbol für E-Mail-Speicher",
    "keyFeatures.reliableEmail":
      "Zuverlässige E-Mail mit 99,9% Verfügbarkeitsgarantie",
    "keyFeatures.reliableEmailAlt": "Symbol für zuverlässige E-Mail",
    "keyFeatures.customEmail": "Individuelle und sichere Geschäfts-E-Mail",
    "keyFeatures.customEmailAlt": "Symbol für individuelle E-Mail",
    "keyFeatures.calendarSharing":
      "Teilen von Kalender, Kontakten und Aufgaben",
    "keyFeatures.calendarSharingAlt": "Symbol für Kalenderfreigabe",
    "keyFeatures.spamProtection": "Spam-Filterung und Virenschutz",
    "keyFeatures.spamProtectionAlt": "Symbol für Spamschutz",
    "callToAction.title": "Starten Sie Ihren einfachen Übergang mit uns",
    "callToAction.description":
      "Upgraden Sie Ihre E-Mail auf LS Suite einfach, schnell und sicher mit der Hilfe von Libyan Spider. Beginnen Sie Ihre Reise, um die Produktivität zu steigern und die E-Mail-Sicherheit mit unserer vollen Unterstützung zu verbessern, ohne Unterbrechungen, Ausfallzeiten oder Datenverluste jeglicher Art.",
    "callToAction.startNow": "Jetzt starten!",
    "callToAction.settingsAlt": "Einstellungen",

    "hostingProgrammers.title": "Hosting für Programmierer",
    "hostingProgrammers.description":
      "Hochleistungs- und 100% stabile Cloud-Server mit mehreren geografischen Standorten",
    "hostingProgrammers.startNow": "Jetzt starten",
    "servicesTwo.title": "Warum Al-Namur wählen?",
    "servicesTwo.description":
      "Fortschrittliche und umfassende Lösungen und Dienstleistungen für Einzelpersonen und Organisationen",
    "services.scalableStorageTwo": "Skalierbarer Speicher",
    "services.scalableStorageDescTwo":
      "Flexibler Cloud-Speicher, der sich an Ihre wachsenden Bedürfnisse anpasst.",
    "services.scalableStorageAltTwo": "Symbol für skalierbaren Speicher",
    "services.enterpriseHostingTwo": "Unternehmenshosting",
    "services.enterpriseHostingDescTwo":
      "Fortschrittliche Hosting-Lösungen, die für große Unternehmen entwickelt wurden.",
    "services.enterpriseHostingAltTwo": "Symbol für Unternehmenshosting",
    "services.reliableHostingTwo": "Zuverlässiges Hosting",
    "services.reliableHostingDescTwo":
      "Stabiles Hosting mit hoher Leistung und garantierter Verfügbarkeit.",
    "services.reliableHostingAltTwo": "Symbol für zuverlässiges Hosting",
    "services.backgroundDecorationAltTwo": "Dekoratives Hintergrundbild",
    "imglist.contactUs":
      "Möchten Sie erfahren, wie wir Ihrem Unternehmen zum Erfolg verhelfen können? Kontaktieren Sie uns",
    "imglist.partnerLogoAlt": "Partner-Logo",
    "sslSection.title": "Mehr als nur eine Sicherheitsfrage",
    "sslSection.description":
      "Ein SSL-Zertifikat für Websites ist eine dringende Notwendigkeit, nicht nur aus Sicherheitsgründen.",
    "sslSection.buildTrust": "Kundenvertrauen aufbauen",
    "sslSection.buildTrustDesc":
      "Zeigen Sie Ihren Kunden, dass Ihr Online-Geschäft sicher und authentifiziert ist, und stellen Sie sicher, dass ihre sensiblen Daten und elektronischen Zahlungen vollständig geschützt sind.",
    "sslSection.buildTrustAlt": "Symbol für Kundenvertrauen",
    "sslSection.seoRanking": "Verbessern Sie das SEO-Ranking Ihrer Website",
    "sslSection.seoRankingDesc":
      "Gesicherte Websites haben einen Vorteil, um ein höheres Ranking in den Suchmaschinenergebnissen zu erzielen, da Sicherheit ein Schlüsselfaktor im Ranking-Prozess ist.",
    "sslSection.seoRankingAlt": "Symbol für SEO-Ranking",
    "sslSection.browserCompatibility":
      "Sichern Sie die Sichtbarkeit Ihrer Website in verschiedenen Browsern",
    "sslSection.browserCompatibilityDesc":
      "Wenn Ihre Website kein SSL-Zertifikat hat, markieren die meisten weltweit beliebten Webbrowser sie als 'unsicher' mit einer Warnung, und einige Browser könnten sie sogar vollständig für Benutzer blockieren.",
    "sslSection.browserCompatibilityAlt": "Symbol für Browser-Kompatibilität",
    "whois.title": "Was ist das WHOIS-Tool?",
    "whois.description":
      "Das WHOIS-Tool ist ein Dienst, der Informationen über Domainnamen liefert, einschließlich des Domaininhabers, Registrierungsdetails, Ablaufdatum und zugehöriger Kontaktinformationen. Es hilft Nutzern, die Eigentümerschaft von Domains zu überprüfen, die Verfügbarkeit von Domains zu prüfen und die Legitimität von Websites zu validieren. Viele Domain-Registrare und Cybersicherheitsexperten nutzen das WHOIS-Tool für Forschung, Cybersicherheit und Compliance-Zwecke.",

    "websiteBuilder.title":
      "Erstellen Sie Ihre Website einfach mit unserem Website-Builder",
    "websiteBuilder.chooseTemplate": "Wählen Sie Ihre Vorlage",
    "websiteBuilder.chooseTemplateDesc":
      "Wählen Sie aus 200 atemberaubenden Vorlagen, um mit dem Erstellen Ihrer Website zu beginnen.",
    "websiteBuilder.enhanceFunctionality":
      "Erweitern Sie die Funktionalität Ihrer Website",
    "websiteBuilder.enhanceFunctionalityDesc":
      "Erhalten Sie zahlreiche Plugins, Tools und Funktionen, die Sie benötigen, um Ihre Website zu verbessern, einschließlich grundlegender Funktionen wie Ihre Fotogalerie, Medien, Social-Media-Plattformen und mehr.",
    "websiteBuilder.previewSite": "Vorschau Ihrer Website",
    "websiteBuilder.previewSiteDesc":
      "Sehen Sie sich Ihre Website mit der ausgewählten Vorlage an, bevor Sie sie öffentlich veröffentlichen.",
    "websiteBuilder.publishSave":
      "Veröffentlichen oder speichern Sie Ihre Website – mit einem Klick",
    "websiteBuilder.publishSaveDesc":
      "Sie können Ihre Website online veröffentlichen oder einen Entwurf Ihrer Website speichern, ohne sie zu veröffentlichen.",
    "websiteBuilder.chooseTemplateAlt": "Symbol für Vorlagenauswahl",
    "websiteBuilder.websiteBuilderAlt": "Symbol für Website-Builder",
    "featuresNine.title": "Funktionen",
    "featuresNine.description": "Kernfunktionen in allen unseren Plänen",
    "featuresNine.multilingualSites": "Mehrsprachige Websites",
    "featuresNine.languageSupport": "Unterstützung für 50 Sprachen",
    "featuresNine.responsiveDesign": "Responsives Design für alle Geräte",
    "featuresNine.easyTool": "Einfach zu bedienendes Tool",
    "featuresNine.videoTutorials": "Video-Tutorials zur Nutzung",
    "featuresNine.plugins": "Plugins",
    "featuresNine.millionTemplates": "Über eine Million Vorlagen",
    "featuresNine.siteMigration":
      "Möglichkeit, Websites von anderen Baukästen zu migrieren",
    "featuresNine.iconAlt": "Symbol",
    "featuresNine.rightImageAlt": "Rechtes dekoratives Bild",
    "featuresNine.leftImageAlt": "Linkes dekoratives Bild",
    "wordpressHosting.title": "WordPress-Hosting",
    "wordpressHosting.description":
      "Eine optimierte Umgebung für das Wachstum Ihrer Website mit WordPress",
    "wordpressHosting.startNow": "Jetzt starten!",
    "kubernetes.description":
      "Hören Sie auf, Zeit und Mühe mit der Verwaltung von Kubernetes-Clustern zu verschwenden. Mit unserer vollständig verwalteten Kubernetes-Engine können Sie die containerisierten Ressourcen Ihrer Anwendung in Minuten statt Tagen einfach bereitstellen, verwalten und skalieren.",
    "kubernetes.orderNow": "Jetzt bestellen!",
    "services.titletwo": "Schnell starten und Ihr Unternehmen ausbauen",
    "services.reliableHosting": "Zuverlässiges statisches Hosting",
    "services.reliableHostingDesc":
      "Hosten Sie Ihre statischen Websites mit blitzschnellen Ladezeiten und unübertroffener Stabilität. Genießen Sie nahtlosen Einsatz mit einem global verteilten CDN.",
    "services.scalableStorage": "Skalierbarer Cloud-Speicher",
    "services.scalableStorageDesc":
      "Speichern und greifen Sie sicher auf Ihre Daten mit hochleistungsfähigem Cloud-Speicher zu. Skalieren Sie mühelos, während Ihr Unternehmen wächst, mit verbesserter Redundanz.",
    "services.enterpriseHosting": "Statisches Hosting auf Unternehmensebene",
    "services.enterpriseHostingDesc":
      "Stellen Sie Ihre statischen Anwendungen sicher und mit hoher Leistung bereit. Profitieren Sie von sofortigen Updates, globalem Zugriff und keiner Wartung.",
    "services.reliableHostingAlt":
      "Symbol für zuverlässiges statisches Hosting",
    "services.scalableStorageAlt": "Symbol für skalierbaren Cloud-Speicher",
    "services.enterpriseHostingAlt":
      "Symbol für statisches Hosting auf Unternehmensebene",
    "services.backgroundDecorationAlt": "Hintergrunddekoration",
    "oneClickApps.title": "Schnell starten mit Ein-Klick-Apps",
    "oneClickApps.description":
      "Unsere Kubernetes-Engine unterstützt die Integration mit beliebten Kubernetes-Tools, sodass Sie Cluster mit vorkonfigurierten Open-Source-Software mit einem einzigen Klick erstellen können.",
    "oneClickApps.helmCharts": "Helm Charts",
    "oneClickApps.certManager": "Zertifikatsmanager",
    "oneClickApps.linkerd": "Linkerd",
    "oneClickApps.operators": "Operatoren",
    "oneClickApps.imageAlt": "Ein-Klick-Anwendungen",
    "templates.million": "1.000.000+",
    "templates.title": "Über 1.000.000 vorgefertigte Vorlagen für alle Zwecke",
    "templates.description":
      "Für alle Arten von geschäftlichen und persönlichen Aktivitäten bietet unser Website-Builder über 1.000.000 atemberaubende, sofort einsatzbereite Vorlagen mit vollständig anpassbaren und bearbeitbaren Designs.",
    "templates.viewMore": "Mehr anzeigen",

    "hosting.windows": "Windows-Hosting",
    "hosting.windows.description":
      "Windows-basiertes Hosting mit Unterstützung für .NET und andere Microsoft-Technologien.",
    "sharedHosting.title": "Shared Hosting",
    "sharedHosting.description":
      "Hochleistungs- und 100% stabile Cloud-Server mit mehreren geografischen Standorten",
    "sharedHosting.startNow": "Jetzt starten!",
    "smallContent.feature.backupRecovery":
      "Sicherung und Wiederherstellung für physische, virtuelle und Cloud-Umgebungen.",
    "smallContent.feature.malwareProtection":
      "Schutz vor Malware und Anti-Ransomware.",
    "smallContent.feature.deviceProtection":
      "Schutz und Verwaltung von Endgeräten.",
    "smallContent.feature.threatDetection":
      "Erweiterte Bedrohungserkennung und -reaktion.",
    "smallContent.feature.emailProtection": "E-Mail-Schutz und Archivierung.",
    "smallContent.feature.disasterRecovery":
      "Cloud-basierte Notfallwiederherstellung.",
    "smallContent.feature.centralManagement":
      "Zentralisierte Verwaltung und Überwachung.",
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
    "whyChooseTigers.title": "Warum Nomoar wählen",
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
    "serverLocations.india": "Indien",
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
    "notFound.title": "Sayfa Bulunamadı",
    "notFound.description":
      "Üzgünüz, aradığınız sayfa mevcut değil veya taşınmış olabilir.",
    "notFound.backToHome": "Anasayfaya Geri Dön",
    "brandGuidelines.colorPaletteTitle": "Namoor Renkleri",
    "brandGuidelines.colorPaletteDescription":
      "Mahjooz’un kimliğini ifade etmek için üç renk kullandık: beyaz, turkuaz ve siyah. Bu renkler, barındırma ve destek hizmetlerine uygun resmi bir tona sahiptir; turkuaz kullanım kolaylığını, beyaz sadeliği ve siyah ciddiyeti temsil eder ve şu şekilde üç farklı yolla birleştirilmiştir:",
    "brandGuidelines.colorCodesTitle": "İşte her rengin kodu:",
    "brandGuidelines.headerTitle": "Marka Kılavuzu",
    "brandGuidelines.headerDescription":
      "Logoyu, renkleri, kodları ve kimliği açık ve sistematik bir şekilde sergilemek için bir rehber",
    "brandGuidelines.logoTitle": "Logo",
    "brandGuidelines.logoDescription":
      'Namoor logosu, şirketin kimliği ve vizyonunu birleştirir. Konsepti, "p" ve "z" harflerinin kesişiminden gelir; bu harfler birleştiğinde, şirketin sürekli hizmet ve destek vizyonunu yansıtan sonsuz "ma" sembolünü oluşturur.',
    "brandGuidelines.logoAlt": "Birleştirilmiş Logolar",
    "brandGuidelines.logoSizesTitle": "Logo Boyutları",
    "brandGuidelines.logoSizesDescription":
      "Logo, her kullanım ortamına uygun olacak şekilde farklı boyutlarda tasarlandı.",
    "brandGuidelines.logoSizesAlt": "Çeşitli Boyutlarda Logo",
    "brandGuidelines.typographyTitle": "Namoor Tipografisi",
    "brandGuidelines.typographyDescription":
      'İngilizce ve Arapça metinler için, sadeliği ve okunabilirliği nedeniyle "Cairo" yazı tipini kullandık.',
    "brandGuidelines.typographyFontName": "C a i r o",
    "brandGuidelines.downloadsTitle": "İndirmeler",
    "brandGuidelines.downloadsDescription":
      "Namoor adını herhangi bir tasarımda kullanırken ihtiyacınız olabilecek tüm unsurları sağladık, logodan etkinlikler veya konferanslar için tanıtım materyallerine kadar.",
    "brandGuidelines.downloadItem1Alt": "Koyu Mavi Yuvarlak Logo",
    "brandGuidelines.downloadItem1Title": "Namoor Logosu",
    "brandGuidelines.downloadItem2Alt": "Koyu Mavi Yuvarlak Logo",
    "brandGuidelines.downloadItem2Title": "Namoor Şirketi",
    "brandGuidelines.downloadItem3Alt":
      "Açık Mavi Arka Planda Koyu Mavi Yuvarlak Logo",
    "brandGuidelines.downloadItem3Title": "Namoor Şirketi",
    "brandGuidelines.downloadItem4Alt": "Koyu Mavi Yuvarlak Logo",
    "brandGuidelines.downloadItem4Title": "Namoor İkincil Logosu",
    "brandGuidelines.downloadPDF": "PDF",
    "brandGuidelines.downloadSVG": "SVG",
    "brandGuidelines.downloadPNG": "PNG",
    "brandGuidelines.identityTitle":
      "İşte Namoor’un kimliği, birden fazla şekilde sunuluyor.",
    "brandGuidelines.identityCard1Title": "Namoor Şirketi",
    "brandGuidelines.identityCard1Alt": "Arapça metinli logo",
    "brandGuidelines.identityCard2Title": "Namoor Şirketi",
    "brandGuidelines.identityCard2Alt": "Arapça metinli logo",
    "brandGuidelines.identityBottomAlt":
      "İki yuvarlak logo, biri açık gri arka planda ve biri beyaz arka planda",
    "domainFeatures.mainTitle": "Neden Namoor’dan Alan Adı Satın Almalısınız?",
    "domainFeatures.lockTitle": "Alan Adı Kilitleme",
    "domainFeatures.lockDescription":
      "Alan adınızı kilitleyerek yetkisiz alan adı transferlerini önleyin.",
    "domainFeatures.renewalTitle": "Harika Yenileme Oranları",
    "domainFeatures.renewalDescription":
      "Alan adınızı yenileme zamanı geldiğinde, bankayı kırma konusunda asla endişelenmeyeceksiniz.",
    "domainFeatures.autoRenewalTitle": "Otomatik Yenileme",
    "domainFeatures.autoRenewalDescription":
      "Otomatik yenileme seçeneğimiz sayesinde (unutursanız bile) alan adınızı asla kaybetmezsiniz.",
    "domainFeatures.managementTitle": "Kolay Yönetim",
    "domainFeatures.managementDescription":
      "Alan adınızı kullanıcı dostu bir kontrol paneli ve gösterge tablosu ile yönetin.",
    "domainFeatures.privacyTitle": "Whois Gizlilik Koruması",
    "domainFeatures.privacyDescription":
      "Biraz gizliliğe mi ihtiyacınız var? WHOIS veritabanındaki kişisel bilgilerinizi küçük bir ücret karşılığında koruruz.",
    "domainFeatures.pricingTitle": "Düşük Fiyatlar & Geniş Seçim",
    "domainFeatures.pricingDescription":
      "Alan adınızı düşük bir fiyata kaydedin ve geniş bir uzantı yelpazesinden seçim yapın.",
    "domainPricingTable.title1": "Olanakları Keşfedin",
    "domainPricingTable.title2": "Alan Adı Listemizden",
    "domainPricingTable.domain": "Alan Adı",
    "domainPricingTable.registration": "Kayıt",
    "domainPricingTable.renewal": "Yenileme",
    "domainPricingTable.transfer": "Transfer",
    "domainPricingTable.protection": "Kimlik Koruması",
    "domainPricingTable.searchPlaceholder": "Ara...",
    "domainPricingTable.noResults": '"{searchTerm}" için sonuç bulunamadı',
    "domainPricingTable.previous": "Önceki",
    "domainPricingTable.next": "Sonraki",
    "domainPricingTable.currencySymbol": "TL ",
    "domainInfographic.titlePart1": "Hatırlanması Gerekenler",
    "domainInfographic.titlePart2": "Alan Adı Satın Almadan Önce",
    "domainInfographic.section1Title": "Basit Tutun",
    "domainInfographic.section1Description":
      "İşleri karmaşık hale getirmeyin. Hatırlaması kolay bir alan adı her zaman en iyi seçimdir.",
    "domainInfographic.section2Title": "Şimdi Harekete Geçin",
    "domainInfographic.section2Description":
      "Markanıza sadık kalın. Farklı olun ama kitlenizin tanıyacağı bir alan adı seçin.",
    "domainInfographic.section3Title": "Tirelerden Kaçının",
    "domainInfographic.section3Description":
      "İnternet teknik olduğu için alan adınızın da teknik olması gerekmez.",
    "priceDomains.backgroundAlt": "Dekoratif arka plan deseni",
    "priceDomains.title": "En popüler alan adı uzantılarından seçin",
    "priceDomains.domainName": "Alan Adı",
    "priceDomains.price": "6,49 TL/yıl",
    "priceDomains.originalPrice": "14,98 TL/yıl yerine",
    "priceDomains.domainAriaLabel": "Alan adı {tld}",
    "domainSearchSection.title": "Alan Adı Ara ve Satın Al",
    "domainSearchSection.description": "Aradığınız alan adını edinin.",
    "domainSearchSection.searchPlaceholder": "Aramak için buraya yazın",
    "domainSearchSection.searchButton": "Ara",
    "domainSearchSection.popular": "Popüler",
    "domainSearchSection.geographic": "Coğrafi",
    "domainSearchSection.technology": "Teknoloji",
    "domainSearchSection.service": "Hizmet",
    "domainSearchSection.business": "İş",
    "domainSearchSection.media": "Medya",
    "domainSearchSection.shopping": "Alışveriş",
    "domainSearchSection.more": "Daha Fazla",
    "domainSearchSection.domainImageAlt": "Alan Adı İllüstrasyonu",
    "namoorSection.title": "Namoor Şirketi",
    "partnersSection.mainTitle": "Başarı Ortakları",
    "partnersSection.rightBackgroundAlt": "Sağ SVG Arka Plan",
    "partnersSection.leftBackgroundAlt": "Sol SVG Arka Plan",
    "partnersSection.sucuriName": "SUCURI",
    "partnersSection.sucuriDescription":
      "Web siteleri için gelişmiş koruma hizmetleri sunuyoruz ve tam güvenlik sağlayan son teknoloji çözümler kullanıyoruz. Siber saldırılara ve kötü amaçlı yazılımlara karşı kapsamlı çözümler sunuyoruz. Özel ekibimiz, web sitenizin tamamen güvenli bir şekilde çalışmasını sağlamak için 7/24 çalışır.",
    "partnersSection.sucuriLogoAlt": "SUCURI Logosu",
    "partnersSection.softaculousName": "Softaculous",
    "partnersSection.softaculousDescription":
      "Uygulamaları ve yazılımları kolayca yönetmek için kapsamlı bir platform. Tek tıkla kuruluma hazır kapsamlı bir uygulama kütüphanesi sunuyoruz. Çözümlerimiz, web siteleri ve çeşitli uygulamaların yönetimini yüksek verimlilik ve büyük esneklikle basitleştirir.",
    "partnersSection.softaculousLogoAlt": "Softaculous Logosu",
    "partnersSection.linuxName": "Linux",
    "partnersSection.linuxDescription":
      "Yüksek stabilite ve güvenlik sunan açık kaynaklı bir işletim sistemi. Çeşitli Linux sistemlerini kullanarak gelişmiş barındırma çözümleri sunuyoruz. Uzman ekibimiz, tüm sağlanan hizmetler için optimum performans ve tam stabilite sağlar.",
    "partnersSection.linuxLogoAlt": "Linux Logosu",
    "paymentSection.description":
      "Size uygun olan şekilde ödeme yapın ve kolay ve sorunsuz bir ödeme deneyimi yaşayın",
    "whoisTool.whoisTitle": "Whois Aracı",
    "whoisTool.whoisDescription": "Profesyonel alan adı verisi sorgulama",
    "whoisTool.searchButton": "Ara",
    "whoisTool.searchPlaceholder": "Alan adını girin",
    "whoisTool.whatIsWhoisTitle": "Whois Aracı Nedir?",
    "whoisTool.whatIsWhoisDescription":
      "Whois, alan adı kayıt bilgileri, örneğin sahip, kayıt tarihi ve sona erme tarihi gibi bilgileri sorgulamak için kullanılan bir araçtır.",
    "whoisTool.groupImageAlt": "Whois Aracı İllüstrasyonu",
    "whoisTool.howItWorksTitle": "Nasıl Çalışır?",
    "whoisTool.howItWorksDescription":
      "Whois, kayıt kuruluşlarında saklanan alan adı kayıt detaylarını almak için genel bir veritabanını sorgulayarak çalışır.",
    "whoisTool.sslWhoisImageAlt": "SSL ve Whois İllüstrasyonu",
    "websiteSuccessCriteria.sslTitle": "SSL Sertifikaları",
    "websiteSuccessCriteria.sslDescription":
      "Web sitenizi güvence altına almak ve kullanıcı verilerini korumak için mükemmel çözüm.",
    "websiteSuccessCriteria.cloudflareTitle": "Cloudflare",
    "websiteSuccessCriteria.cloudflareDescription":
      "Daha hızlı, daha güvenli ve daha güvenilir bir web deneyimi için ideal çözüm.",
    "websiteSuccessCriteria.cloudflareEnhanceTitle":
      "Cloudflare ile web sitenizin siber tehditlere karşı korumasını artırın ve performansını iyileştirin.",
    "websiteSuccessCriteria.cloudflareEnhanceDescription":
      "Siber tehditlere karşı korumadan içerik teslimini hızlandırmaya kadar, Cloudflare web performansı ve güvenliğinde güvenilir ortağınızdır.",
    "websiteSuccessCriteria.mainTitle":
      "Web Sitenizin Başarısı İçin Yeni Bir Standart Belirleyin",
    "websiteSuccessCriteria.performanceTitle": "Yıldırım Hızında Performans",
    "websiteSuccessCriteria.globalSpeedBoost": "Küresel Hız Artışı",
    "websiteSuccessCriteria.contentDelivery": "İçerik Teslim Optimizasyonu",
    "websiteSuccessCriteria.loadBalancing": "Yük Dengeleme",
    "websiteSuccessCriteria.latencyReduction": "Gecikme Azaltma",
    "websiteSuccessCriteria.globalSpeedBoostIconAlt":
      "Küresel Hız Artışı Simgesi",
    "websiteSuccessCriteria.globalSpeedBoostDescription":
      "Cloudflare’ın küresel CDN’si sayesinde, web siteniz dünya çapındaki ziyaretçiler için hızlı bir şekilde yüklenir.",
    "websiteSuccessCriteria.securityTitle": "Eşsiz Güvenlik",
    "websiteSuccessCriteria.ddosProtection": "DDoS Saldırı Koruması",
    "websiteSuccessCriteria.webApplicationFirewall":
      "Web Uygulama Güvenlik Duvarı (WAF)",
    "websiteSuccessCriteria.sslTlsEncryption": "SSL/TLS Şifreleme",
    "websiteSuccessCriteria.botManagement": "Bot Yönetimi",
    "websiteSuccessCriteria.realTimeThreatAnalysis":
      "Gerçek Zamanlı Tehdit Analizi",
    "websiteSuccessCriteria.securityIconAlt": "Güvenlik Simgesi",
    "websiteSuccessCriteria.ddosProtectionDescription":
      "Cloudflare’ın ağı, DDoS saldırılarını absorbe etmek ve hafifletmek için tasarlanmıştır, böylece web siteniz hedefli saldırılar sırasında bile erişilebilir kalır.",
    "websiteSuccessCriteria.signUpNow": "Şimdi Kaydol",
    "cloudflareSection.cloudflareTitle": "Cloudflare",
    "cloudflareSection.cloudflareDescription":
      "Daha hızlı, daha güvenli ve daha güvenilir bir web deneyimi için ideal çözüm.",
    "cloudflareSection.cloudflareEnhanceTitle":
      "Cloudflare ile web sitenizin siber tehditlere karşı korumasını artırın ve performansını iyileştirin.",
    "cloudflareSection.cloudflareEnhanceDescription":
      "Siber tehditlere karşı korumadan içerik teslimini hızlandırmaya kadar, Cloudflare web performansı ve güvenliğinde güvenilir ortağınızdır.",
    "cloudflareSection.signUpNow": "Şimdi Kaydol",
    "sslSection.sslTitle": "SSL Sertifikaları",
    "sslContent.rightBackgroundAlt": "Simge içeren sağ arka plan",
    "sslContent.leftBackgroundAlt": "Simge içeren sol arka plan",
    "sslContent.trustTitle": "İşletmenizin Güvenilirliğini Artırın",
    "sslContent.trustDescription":
      "SSL sertifikaları tarafından sağlanan güvenli bir bağlantı kurarak ve verileri şifreleyerek web sitenizin verilerini - ve ziyaretçilerinizin verilerini - koruyun. Web sitenizin güvenli ve güvenilir olduğunu, ayırt edici kilit simgesi ve alan adınızın başında yer alan https:// ön eki ile tüm ziyaretçilere bildirin.",
    "sslContent.chooseSslTitle": "Doğru SSL Sertifikasını Seçin",
    "sslContent.chooseSslDescription":
      "Libyan Spider Company, dünya çapında en güvenilir şirketlerden çeşitli koruma sertifikaları sunar.",
    "choosePlan.rightBackgroundAlt": "Sağ SVG Arka Plan",
    "choosePlan.leftBackgroundAlt": "Sol SVG Arka Plan",
    "choosePlan.mainTitle": "Doğru Planı Seçin",
    "choosePlan.planTitle": "GeoTrust QuickSSL Premium",
    "choosePlan.currency": "LYD/Çeyreklik",
    "choosePlan.validation": "Doğrulama",
    "choosePlan.organization": "Organizasyon",
    "choosePlan.siteSeal": "Site Mührü",
    "choosePlan.dynamic": "Dinamik",
    "choosePlan.orderNow": "Şimdi Sipariş Ver",
    "websiteSecurity.title":
      "Web Sitesi Güvenliği ve Veri Şifreleme Artık İsteğe Bağlı Değil",
    "websiteSecurity.description":
      "'Güvenli Değil' olarak işaretlenmiş web siteleri artık kabul edilebilir değil. SSL sertifikası artık bir seçenek değil; günümüz dünyasında web sitesi güvenliği için temel bir gerekliliktir. Veri şifreleme ve güvenli bağlantılar, herhangi bir güvenlik açığını istismar edebilecek ortaya çıkan ve artan siber saldırıların risklerini ortadan kaldırır.",
    "websiteSecurity.securityImageAlt": "Web Sitesi Güvenlik Resmi",
    "beyondProtection.bigBlocksAlt": "Büyük Bloklar Arka Planı",
    "beyondProtection.mainTitle": "Sadece Koruma Değil",
    "beyondProtection.mainDescription":
      "Tercih ettiğiniz işletim sistemi ve önceden yüklenmiş uygulamalarla özel sunucunuza sahip olun.",
    "beyondProtection.browserCompatibilityTitle":
      "Web Sitenizin Tüm Tarayıcılarda Göründüğünden Emin Olun",
    "beyondProtection.browserCompatibilityDescription":
      "Web sitenizde SSL sertifikası yoksa, dünya çapındaki popüler tarayıcıların çoğu onu 'Güvenli Değil' olarak işaretleyecek ve bir uyarı gösterecek, bazı tarayıcılar ise kullanıcılar için tamamen engelleyebilir.",
    "beyondProtection.customerTrustAlt": "Müşteri Güveni Simgesi",
    "beyondProtection.seoTitle":
      "Web Sitenizin Arama Motoru Sıralamasını Yükseltin (SEO)",
    "beyondProtection.seoDescription":
      "Güvenli web siteleri, arama motoru sonuçlarında daha yüksek sıralamalar elde etme avantajına sahiptir, çünkü güvenlik sıralama sürecinde temel bir faktördür.",
    "beyondProtection.browserFriendlyAlt": "Tarayıcı Dostu Simge",
    "beyondProtection.customerTrustTitle": "Müşteri Güveni Oluşturun",
    "beyondProtection.customerTrustDescription":
      "Hassas verilerinin ve çevrimiçi ödemelerinin tamamen korunduğunu bildirerek müşterilerinize çevrimiçi işinizin güvenli ve güvenilir olduğunu gösterin.",
    "beyondProtection.seoIncreaseAlt": "SEO Artış Simgesi",
    "domainRegistrationSA.backgroundAlt": "Arka Plan Resmi",
    "domainRegistrationSA.numberOneAlt": "Numara 1 Kayıt Resmi",
    "domainRegistrationSA.title":
      "1 numaralı kayıt şirketinden sa. alan adınızı alın",
    "domainRegistrationSA.description":
      "Binlerce sa. alan adı zaten kaydedildi. Hemen kaydolun ve çeşitli uzantılarla mevcut olan benzersiz sa. alan adınızı şimdi güvence altına alın.",
    "domainRegistrationSA.saTitle": "SA",
    "domainRegistrationSA.saPrice": "Sadece 20 $",
    "domainRegistrationSA.saCircleAlt": "SA Daire Simgesi",
    "domainRegistrationSA.eduSa": ".edu.sa",
    "domainRegistrationSA.comSa": ".com.sa",
    "domainRegistrationSA.netSa": ".net.sa",
    "domainRegistrationSA.orgSa": ".org.sa",
    "domainRegistrationSA.medSa": ".med.sa",
    "domainRegistrationSA.idSa": ".id.sa",
    "domainRegistrationSA.schSa": ".sch.sa",
    "domainRegistrationSA.plcSa": ".plc.sa",
    "domainRegistrationSA.worldIconAlt": "Dünya Simgesi",
    "domainRegistrationSA.price": "Sadece 20 $",
    "domainRegistrationSA.approvalTitle":
      "Kayıt Şirketi Onayı Gerektiren Alan Adları",
    "domainRegistrationSA.schSaApproval": "sch.sa okullar için.",
    "domainRegistrationSA.schSaApprovalDesc":
      "Alan adı kaydı için onay talep etmek üzere Suudi İletişim ve Teknoloji Şirketi'ne resmi bir mektup.",
    "domainRegistrationSA.medSaApproval":
      "med.sa hastaneler ve klinikler için.",
    "domainRegistrationSA.medSaApprovalDesc":
      "Alan adı kaydı için onay talep etmek üzere Suudi İletişim ve Teknoloji Şirketi'ne resmi bir mektup.",
    "domainRegistrationSA.govSaApproval": "gov.sa hükümetler için.",
    "domainRegistrationSA.govSaApprovalDesc":
      "Alan adı kaydı için onay talep etmek üzere Suudi İletişim ve Teknoloji Şirketi'ne resmi bir mektup.",
    "domainRegistrationSA.govSaAltApproval": "gov.sa devlet kurumları için.",
    "domainRegistrationSA.govSaAltApprovalDesc":
      "Genel İletişim Otoritesinin onayıyla ve Suudi Dijital Kontrol Paneli altında talep edildikten sonra Suudi İletişim ve Teknoloji Şirketi ile doğrudan kaydedilir.",
    "domainStatsSA.title": "sa. için istatistikler",
    "domainStatsSA.description": "Rakamlara bir göz atın:",
    "domainStatsSA.chooseDomain": "Kendi alan adınızı seçin",
    "domainStatsSA.achievement":
      "1.800'den fazla alan adı kaydetmekten gurur duyuyoruz!",
    "domainStatsSA.backgroundRightAlt": "Sağ SVG Arka Plan",
    "domainStatsSA.backgroundLeftAlt": "Sol SVG Arka Plan",
    "languageSelector.saudi": "Suudi Arabistan",
    "languageSelector.uae": "Birleşik Arap Emirlikleri",
    "languageSelector.sudan": "Sudan",
    "languageSelector.turkey": "Türkiye",
    "languageSelector.egypt": "Mısır",
    "languageSelector.oman": "Umman",
    "languageSelector.iraq": "Irak",
    "languageSelector.syria": "Suriye",
    "languageSelector.germany": "Almanya",
    "languageSelector.france": "Fransa",
    "languageSelector.qatar": "Katar",
    "languageSelector.india": "Hindistan",
    "serverLocations.download": "İndirme",
    "serverLocations.upload": "Yükleme",
    "serverLocations.comingSoonTitle": "Yakında",
    "serverLocations.comingSoonMessage": "Bu sunucu yakında başlatılacak",
    "serverLocations.mapAlt": "Dünya Haritası",

    "dashboardWelcome.title": "Kontrol Panelinize Hoş Geldiniz",
    "dashboardWelcome.description":
      "Alan adınızı kolayca yönetin, istatistiklerinizi kontrol edin ve performansı tek bir yerden izleyin.",
    "dashboardWelcome.imageAlt": "Kontrol Paneli",
    "dashboardOverview.title": "Kontrol Paneli Genel Bakış",
    "dashboardOverview.description":
      "Kontrol panelinizden gerçek zamanlı verilere ve performans metriklerine doğrudan erişin. Alan adı durumunuzu, ziyaretçi istatistiklerini ve daha fazlasını tek bir yerde takip edin.",
    "dashboardOverview.imageAlt": "Kontrol Paneli Genel Bakış Görseli",
    "performanceTracking.title": "Performansı Takip Et",
    "performanceTracking.description":
      "Alan adınızın performansını güncel tutun. Trafiği, yenilemeleri ve kullanımı hızlıca izleyin.",
    "performanceTracking.mobileAlt": "Mobil Performans Görseli",
    "performanceTracking.backgroundAlt": "Arka Plan Katmanı Görseli",
    "performanceTracking.patternAlt": "Dekoratif SVG Deseni",
    "domainManagement.title": "Alan Adı Yönetimi",
    "domainManagement.description":
      "Alan adınızı kolayca yönetin. Yeni alan adları kaydedin, mevcut olanları yenileyin ve tüm ilgili detayları gerçek zamanlı olarak görüntüleyin.",
    "domainManagement.imageAlt": "Masaüstü Görseli",
    "techStack.mainTitle": "Projenin İnşasında Kullanılan Teknolojiler",
    "techStack.reactTitle": "React",
    "techStack.reactAlt": "React İkonu",
    "techStack.laravelTitle": "Laravel",
    "techStack.laravelAlt": "Laravel Logosu",
    "techStack.phpTitle": "PHP",
    "techStack.phpAlt": "PHP Logosu",
    "techStack.javascriptTitle": "JavaScript",
    "techStack.javascriptAlt": "JavaScript Logosu",
    "techStack.lagomTitle": "Lagom Theme",
    "techStack.lagomAlt": "Lagom Theme Logosu",
    "techStack.whatsappApiTitle": "WhatsApp API",
    "techStack.whatsappApiAlt": "WhatsApp API İkonu",
    "techStack.whmcsTitle": "WHMCS",
    "techStack.whmcsAlt": "WHMCS Logosu",
    "keyFeaturesTwo.mainTitle": "Ana Özellikler",
    "keyFeaturesTwo.mainDescription":
      "Bulut ürünlerimiz ve hizmetlerimizle, iş ve veri ihtiyaçlarınızın %100'ünü karşılıyoruz, altyapınız için en yüksek güvenlik seviyelerini sağlıyoruz.",
    "keyFeaturesTwo.cloudHostingTitle": "Paylaşımlı Bulut Barındırma",
    "keyFeaturesTwo.cloudHostingDescription":
      "Web sitenizi kolayca ve uygun maliyetle barındırın! Paylaşımlı bulut barındırma ile.",
    "keyFeaturesTwo.cloudHostingAlt": "Paylaşımlı Bulut Barındırma İkonu",
    "keyFeaturesTwo.lsSuiteTitle": "LS Suite",
    "keyFeaturesTwo.lsSuiteDescription":
      "Profesyonel e-posta, çevrimiçi depolama, kurumsal toplantılar ve daha fazlası. İş için tasarlandı.",
    "keyFeaturesTwo.lsSuiteAlt": "LS Suite İkonu",
    "keyFeaturesTwo.jpaasTitle": "JPaaS Platformu Servis Olarak",
    "keyFeaturesTwo.jpaasDescription": "Sunucunuzu tam kontrolle yönetin",
    "keyFeaturesTwo.jpaasAlt": "JPaaS Platform İkonu",
    "keyFeaturesTwo.learnMore": "Daha Fazla Bilgi Edinin",
    "speedSection.title": "Hız",
    "speedSection.description":
      "Web sitenizin verilerini koruyun ve ziyaretçilerinize güvenlik sertifikanızı gösterin",
    "launchAppsSection.mainTitle":
      "Uygulamalarınızı Saniyeler İçinde Başlatın!",
    "launchAppsSection.mainDescription":
      "Çeşitli uygulamalarınızı oluşturun veya çalıştırın, kapsamlı platform desteği ile",
    "launchAppsSection.appAlt": "Uygulama İkonu",
    "launchAppsSection.dockerAlt": "Docker İkonu",
    "launchAppsSection.phpAlt": "PHP İkonu",
    "launchAppsSection.pythonAlt": "Python İkonu",
    "featuresGrid.disasterRecovery": "Bulut Tabanlı Felaket Kurtarma",
    "featuresGrid.emailProtection": "E-posta Koruması ve Arşivleme",
    "featuresGrid.threatDetection": "Gelişmiş Tehdit Tespiti ve Yanıt",
    "featuresGrid.centralizedManagement1": "Merkezi Yönetim ve İzleme",
    "featuresGrid.centralizedManagement2": "Merkezi Yönetim ve İzleme",
    "featuresGrid.centralizedManagement3": "Merkezi Yönetim ve İzleme",
    "featuresGrid.centralizedManagement4": "Merkezi Yönetim ve İzleme",
    "featuresGrid.centralizedManagement5": "Merkezi Yönetim ve İzleme",
    "featuresGrid.centralizedManagement6": "Merkezi Yönetim ve İzleme",

    "whoisToolSectionTwo.description":
      "WHOIS aracı, alan adları hakkında kapsamlı bilgiler sağlayan değerli bir hizmettir; örneğin, sahibin adı, kayıt detayları, son kullanma tarihi ve ilgili iletişim bilgileri. Bu araç, alan adı sahipliğini doğrulamaya, kayıt için uygun olup olmadığını kontrol etmeye ve web sitelerinin güvenilirliğini değerlendirmeye yardımcı olur. Birçok alan adı kayıt kuruluşu ve siber güvenlik uzmanı, araştırma, koruma ve yasal standartlara uygunluk için bu araca güvenir.",
    "whoisToolSectionTwo.imageAlt": "WHOIS Aracı Resmi",
    "whoisToolSection.title": "WHOIS Aracı Nedir?",
    "whoisToolSection.description":
      "WHOIS aracı, alan adları hakkında bilgi sağlayan bir hizmettir; bu, alan adı sahibi, kayıt detayları, son kullanma tarihi ve ilgili iletişim bilgilerini içerir. Kullanıcıların alan adı sahipliğini doğrulamasına, uygunluğunu kontrol etmesine ve web sitelerinin güvenilirliğini doğrulamasına yardımcı olur. Birçok alan adı kayıt kuruluşu ve siber güvenlik uzmanı, araştırma, güvenlik ve uyumluluk amaçları için bu aracı kullanır.",
    "whoisToolSection.imageAlt": "WHOIS Güvenlik Resmi",
    "keyBenefitsSection.mainTitle": "Ana Faydalar",
    "keyBenefitsSection.mainDescription":
      "Tercih ettiğiniz işletim sistemi ve önceden yüklenmiş uygulamalarla özel sunucunuza sahip olun.",
    "keyBenefitsSection.pciDssTitle": "PCI/DSS Uyumluluğu",
    "keyBenefitsSection.pciDssAlt": "Uyumluluk İkonu",
    "keyBenefitsSection.encryptionTitle": "256-bit Veri Şifreleme",
    "keyBenefitsSection.encryptionAlt": "Şifreleme İkonu",
    "keyBenefitsSection.secureClientTitle":
      "Müşteri Verilerini Güvence Altına Alma",
    "keyBenefitsSection.secureClientAlt": "Veri Güvenliği İkonu",
    "keyBenefitsSection.supportTitle": "Teknik Destek",
    "keyBenefitsSection.supportAlt": "Teknik Destek İkonu",
    "keyBenefitsSection.warrantyTitle": "Garanti",
    "keyBenefitsSection.warrantyAlt": "Garanti İkonu",
    "keyBenefitsSection.securityTitle": "Kilit İkonu ve https://",
    "keyBenefitsSection.securityAlt": "Güvenlik İkonu",

    "onlinePaymentSection.mainTitle": "Çevrimiçi Ödeme",
    "onlinePaymentSection.mainDescription":
      "Hızlı ve doğrudan bir çevrimiçi ödeme sürecinin keyfini çıkarın",
    "onlinePaymentSection.americanExpressAlt": "American Express İkonu",
    "onlinePaymentSection.visaAlt": "Visa İkonu",
    "onlinePaymentSection.masterCardAlt": "MasterCard İkonu",
    "paymentMethodsSection.title": "Ödeme Yöntemleri",
    "paymentMethodsSection.description":
      "Size uygun şekilde ödeme yapın ve sorunsuz bir ödeme deneyimi yaşayın",
    "paymentMethodsSection.mainTitle": "Banka Havalesi Ödeme Yöntemleri",
    "paymentMethodsSection.mainDescription":
      "Banka havalelerini kolay ve güvenli bir şekilde gerçekleştirin",
    "paymentMethodsSection.bankakTitle": "Bankak",
    "paymentMethodsSection.bankakDescription":
      "Bankak, hizmetleri ve finansal işlemlerinizi güvenli ve verimli bir şekilde yönetmenize nasıl yardımcı olduğu hakkında daha fazla bilgi edinin.",
    "paymentMethodsSection.bankakAlt": "Bankak İkonu",
    "paymentMethodsSection.ibanTitle":
      "Uluslararası Banka Hesap Numarası (IBAN)",
    "paymentMethodsSection.ibanDescription":
      "Uluslararası işlemler için IBAN'ın önemini ve güvenli ve doğru finansal transferleri nasıl sağladığını anlayın.",
    "paymentMethodsSection.ibanAlt": "IBAN İkonu",
    "paymentMethodsSection.instantTitle": "Anlık Transferler",
    "paymentMethodsSection.instantDescription":
      "Hızlı işlemler için tasarlanmış güvenli ve güvenilir ödeme çözümleriyle anında para gönderin ve alın.",
    "paymentMethodsSection.instantAlt": "Anlık Transferler İkonu",
    "paymentMethodsSection.oowCashTitle": "Oow-Cash",
    "paymentMethodsSection.oowCashDescription":
      "Sorunsuz dijital ödemeler ve kolay finansal yönetim için Oow-Cash'in avantajlarını keşfedin.",
    "paymentMethodsSection.oowCashAlt": "Oow-Cash İkonu",
    "paymentMethodsSection.moreLink": "Daha Fazla",
    "walletsSection.mainTitle": "Elektronik Cüzdanlar",
    "walletsSection.mainDescription":
      "Özel sunucular ve tam teşekküllü özel sunucular için tek bir lisans alın",
    "walletsSection.sdadTitle": "Ödeme",
    "walletsSection.sdadDescription":
      "Güvenilir ödeme çözümlerimizle güvenli ve hızlı ödemeler yapın, sorunsuz bir işlem deneyimi sağlayın.",
    "walletsSection.sdadAlt": "Ödeme İkonu",
    "walletsSection.paypalTitle": "PayPal",
    "walletsSection.paypalDescription":
      "PayPal ile dünya çapında para gönderin ve alın; güvenli işlemler sunan güvenilir bir elektronik ödeme platformu.",
    "walletsSection.paypalAlt": "PayPal İkonu",
    "walletsSection.vodafoneTitle": "Vodafone Cash",
    "walletsSection.vodafoneDescription":
      "Vodafone'un pratik mobil ödeme servisi ile kolayca para transferi yapın, faturalarınızı ödeyin ve bakiyenizi doldurun.",
    "walletsSection.vodafoneAlt": "Vodafone Cash İkonu",
    "walletsSection.zainTitle": "Zain Cash",
    "walletsSection.zainDescription":
      "Zain Cash ile sorunsuz finansal işlemlerin keyfini çıkarın; güvenli dijital ödemeler ve para transferleri sunar.",
    "walletsSection.zainAlt": "Zain Cash İkonu",
    "walletsSection.moreLink": "Daha Fazla",
    "cryptocurrenciesSection.mainTitle": "Kripto Paralar",
    "cryptocurrenciesSection.mainDescription":
      "Özel sunucular ve tam teşekküllü özel sunucular için tek bir lisans alın",
    "cryptocurrenciesSection.ethereumAlt": "Ethereum İkonu",
    "cryptocurrenciesSection.binanceAlt": "Binance İkonu",
    "cryptocurrenciesSection.bitcoinAlt": "Bitcoin İkonu",
    "cryptocurrenciesSection.tetherAlt": "Tether İkonu",
    "traditionalPaymentSection.mainTitle": "Geleneksel Ödeme Yöntemleri",
    "traditionalPaymentSection.cdnTitle":
      "CDN ile Web Sitesi Performansını İyileştirin",
    "traditionalPaymentSection.cdnDescription":
      "Marka bilinirliğini artırmak ve özel bir e-posta kullanarak daha profesyonel bir görüntü sunmak için şirketinizin alan adını bağlayın",
    "traditionalPaymentSection.cdnAlt": "Kart İkonu",
    "traditionalPaymentSection.ddosTitle": "DDoS Saldırılarını Hafifletme",
    "traditionalPaymentSection.ddosDescription":
      "Dağıtık Hizmet Engelleme (DDoS) saldırıları tüm işinizi aksatabilir. Katman 3, 4 ve 7'de DDoS saldırılarını engelliyor ve saldırılar sırasında bant genişliğini güvence altına alıyoruz.",
    "traditionalPaymentSection.ddosAlt": "Transfer İkonu",
    "traditionalPaymentSection.securityTitle":
      "Hacking ve Kötü Amaçlı Yazılımlara Karşı Koruma",
    "traditionalPaymentSection.securityDescription":
      "Web sitenizi kötü amaçlı yazılımlardan koruyun, hack girişiklerini, sıfırıncı gün saldırılarını ve kaba kuvvet parola tahmin saldırılarını önleyin.",
    "traditionalPaymentSection.securityAlt": "Nakit İkonu",
    "blogsSection.title": "Bloglar",
    "blogsSection.description":
      "Nemours hakkında en son ve en yeni makalelere göz atın",
    "benefitsSection.mainTitle": "Avantajlar",
    "benefitsSection.description":
      "Esnek bir çalışma ortamı, sürekli eğitim ve üstün performans için ödüller sunuyoruz.",
    "benefitsSection.trainingTitle": "Eğitim / Eğitim Yardımı",
    "benefitsSection.trainingAlt": "Eğitim İkonu",
    "benefitsSection.leaveTitle": "Kişisel ve Hastalık İzinleri",
    "benefitsSection.leaveAlt": "İzin İkonu",
    "benefitsSection.rewardsTitle":
      "Ödüller (Üstün Performans, Hedef Başarısı, Aşama Tamamlama)",
    "benefitsSection.rewardsAlt": "Ödül İkonu",
    "benefitsSection.insuranceTitle": "Sağlık Sigortası",
    "benefitsSection.insuranceAlt": "Sağlık Sigortası İkonu",
    "joinUsSection.title": "Şimdi Bize Katıl",
    "joinUsSection.description":
      "Ekibimizin başarımızın temeli olduğuna inanıyoruz ve en yeni hizmetlerimizle uyum sağlamak için becerilerinin geliştirilmesine sürekli yatırım yaparak motive edici bir çalışma ortamı sağlamaya çalışıyoruz.",
    "joinUsSection.button": "Mevcut İşler",
    "jobsSection.title": "Mevcut İşler",
    "jobsSection.description":
      "Misyonumuz, yerel, ekonomik ve kültürel olarak teknolojik gelişimi yönetmek ve bu hedefe ulaşmak için tutkulu ve özverili insanlara ihtiyacımız var!",
    "jobsSection.button": "Mevcut İşler",
    "jobsSection.rightBackgroundAlt": "Sağ Arka Plan",
    "jobsSection.leftBackgroundAlt": "Sol Arka Plan",
    "jobsSection.lampImageAlt": "Lamba Resmi",
    "countrySelector.italyName": "Italien",
    "countrySelector.franceName": "Frankreich",
    "countrySelector.germanyName": "Deutschland",
    "countrySelector.japanName": "Japan",
    "countrySelector.finlandName": "Finnland",
    "countrySelector.usaName": "USA",
    "countrySelector.turkeyName": "Türkei",
    "countrySelector.italyFlagAlt": "Flagge Italiens",
    "countrySelector.franceFlagAlt": "Flagge Frankreichs",
    "countrySelector.germanyFlagAlt": "Flagge Deutschlands",
    "countrySelector.japanFlagAlt": "Flagge Japans",
    "countrySelector.finlandFlagAlt": "Flagge Finnlands",
    "countrySelector.usaFlagAlt": "Flagge der USA",
    "countrySelector.turkeyFlagAlt": "Flagge der Türkei",
    "standalone.serverDescription":
      "Tercih ettiğiniz işletim sistemi ve önceden yüklenmiş uygulamalarla özel bir sunucuya sahip olabilirsiniz.",
    "geoRegions.header": "Çoklu Coğrafi Bölgeler",
    "geoRegions.text":
      "Uygulamalarınızı birden fazla cihaz bölgesi üzerinden kolay ve birleşik bir kullanıcı arayüzü ile yönetin ve çalıştırın, müşterilerinize daha yakın olmak için sorunsuz geçiş yapmanızı sağlar.",
    "geoRegions.illustrationAlt": "Coğrafi Bölgeler İllüstrasyonu",

    "essentialFeatures.header":
      "Seçtiğiniz plana bakılmaksızın hizmetlerimizle kapsamlı ve verimli bir deneyim sağlayan temel özelliklerden yararlanın",
    "essentialFeatures.serverMonitoringTitle": "7/24 Sunucu İzleme",
    "essentialFeatures.serverMonitoringAlt": "Sunucu İzleme Simgesi",
    "essentialFeatures.sslCertificateTitle": "Ücretsiz SSL Sertifikası",
    "essentialFeatures.sslCertificateAlt": "SSL Sertifikası Simgesi",
    "essentialFeatures.threatProtectionTitle":
      "Zararlı Tehditlere Karşı Koruma",
    "essentialFeatures.threatProtectionAlt": "Tehdit Koruması Simgesi",
    "essentialFeatures.softaculousInstallerTitle":
      "Softaculous Kurulum Programı",
    "essentialFeatures.softaculousInstallerAlt": "Softaculous Simgesi",
    "essentialFeatures.regularBackupTitle": "Düzenli Yedekleme",
    "essentialFeatures.regularBackupAlt": "Yedekleme Simgesi",
    "essentialFeatures.linuxOsTitle": "Linux İşletim Sistemi",
    "essentialFeatures.linuxOsAlt": "Linux Simgesi",
    "essentialFeatures.controlPanelTitle": "Cpanel/Plesk Kontrol Paneli",
    "essentialFeatures.controlPanelAlt": "Kontrol Paneli Simgesi",
    "essentialFeatures.technicalSupportTitle": "Sürekli Teknik Destek",
    "essentialFeatures.technicalSupportAlt": "Teknik Destek Simgesi",

    "fullServers.mainTitle": "Tamamen Adanmış Sunucular",
    "fullServers.mainDescription":
      "Web sitenizi kolaylıkla oluşturmanıza ve yönetmenize yardımcı olacak yenilikçi araçlarla kullanıcı dostu paylaşımlı barındırma sunuyoruz",

    "hostingTiers.mainTitle": "Adanmış Sunucu Planları",
    "hostingTiers.serverInfoTitle": "Sunucu Bilgileri",
    "hostingTiers.serverInfoSubtitle": "İhtiyaçlarınıza uygun sunucuyu seçin",
    "hostingTiers.priceMain": "31,99 ",
    "hostingTiers.priceRenewal": "Yenilemede 20 SAR/ay",
    "hostingTiers.buyNowButton": "Şimdi Satın Al",
    "hostingTiers.featuresButton": "Özellikler",
    "hostingTiers.cpuSpecTitle": "2,4 GHz'de 32 Çekirdek",
    "hostingTiers.cpuSpecSubtitle": "Benchmark Skoru: 15.390",
    "hostingTiers.storageSpecTitle": "2 x 250 GB SSD Sürücü",
    "hostingTiers.storageSpecSubtitle": "8 sürücüye kadar genişletilebilir",
    "hostingTiers.databaseSpecTitle": "1 Veritabanı",
    "hostingTiers.databaseSpecSubtitle":
      "3 veritabanına kadar genişletilebilir",
    "hostingTiers.ramSpecTitle": "64 GB",
    "hostingTiers.ramSpecSubtitle": "384 GB'a kadar yükseltilebilir",
    "hostingTiers.bandwidthSpecTitle": "3 Gbps Hız",
    "hostingTiers.bandwidthSpecSubtitle": "Aylık 100 TB ücretsiz veri",
    "hostingTiers.controlPanelSpecTitle": "cPanel/WHM, Plesk",
    "hostingTiers.controlPanelSpecSubtitle": "Obsidian Web Barındırma Sürümü",
    "hostingTiers.germanyFlagAlt": "Almanya Bayrağı",
    "hostingTiers.finlandFlagAlt": "Finlandiya Bayrağı",
    "hostingTiers.ukFlagAlt": "Birleşik Krallık Bayrağı",
    "serverServices.mainTitle": "Tüm Hizmetler İçerir",
    "serverServices.emailProtection": "E-posta ve Virüs Koruması",
    "serverServices.malwareProtection":
      "Kötü Amaçlı Yazılımlara ve Fidye Yazılımlarına Karşı Koruma",
    "serverServices.networkSecurity":
      "İzleme, Dolandırıcılık ve Reklam Ağı Tehditlerine, Hırsızlığa, İftiraya ve Özelleştirmeye Karşı Koruma",
    "serverServices.cloudMigration": "İmkansız Yapılandırmadan Buluta Geçiş",
    "serverServices.threatDetection": "Gelişmiş Tehdit Tespiti ve Yanıt",
    "serverServices.identityProtection":
      "Dijital Kimlik ve Cihazların Koruması",

    "backupsSection.title": "Backups",
    "backupsSection.description": "Permanente automatische Backups!",
    "supportParagraph.description":
      "Eğer şirket müşterilerinden biriyseniz, teknik destek veya satış ekibimize ulaşmak için hesabınız ,üzerinden kolayca bizimle iletişime geçebilirsiniz. İhtiyaçlarınıza uygun en iyi hizmeti ve hızlı çözümleri sunmaya kararlıyız.",

    "supportSectionTwo.helpCenter": "Yardım Merkezi",
    "supportSectionTwo.serverStatus": "Sunucu Durumu",
    "supportSectionTwo.subscriberServices": "Abone Hizmetleri",
    "supportSectionTwo.helpCenterAlt": "Yardım Merkezi İkonu",
    "supportSectionTwo.serverStatusAlt": "Sunucu Durumu İkonu",
    "supportSectionTwo.subscriberServicesAlt": "Abone Hizmetleri İkonu",
    "supportSectionTwo.emailService": "E-posta Servisi",
    "supportSectionTwo.phone": "Telefon",
    "supportSectionTwo.location": "Konum",
    "supportSectionTwo.emailServiceAlt": "E-posta İkonu",
    "supportSectionTwo.phoneAlt": "Telefon İkonu",
    "supportSectionTwo.locationAlt": "Konum İkonu",
    "supportSectionTwo.mapTitle": "Haritadaki Konumumuz",
    "supportSectionTwo.locationValue": "Riyad, Olaya, Suudi Arabistan",

    "contactForm.title":
      "Hâlâ cevabınızı bulamadınız mı? Şimdi teknik destek alın.",
    "contactForm.description":
      "Birçok benzersiz çözümle, kodlama yapmadan kolayca bir sayfa oluşturabilirsiniz. Bir sonraki danışmanlık web sitenizi birkaç dakika içinde oluşturun.",
    "contactForm.salesTab": "Satış",
    "contactForm.customizationTab": "Özelleştirme",
    "contactForm.trendsTab": "Trendler",
    "contactForm.pricesTab": "Fiyatlar",
    "contactForm.fullNameLabel": "Tam Ad",
    "contactForm.usernameLabel": "Kullanıcı Adı",
    "contactForm.messageLabel": "Mesajınız",
    "contactForm.languageLabel": "Hangi dilde iletişim kurmak istersiniz?",
    "contactForm.languagePlaceholder": "Bir dil seçin",
    "contactForm.languageArabic": "Arapça",
    "contactForm.languageEnglish": "İngilizce",
    "contactForm.languageSpanish": "İspanyolca",
    "contactForm.submitButton": "Gönder",
    "contactForm.contactAlternative": "Veya bizi şu numaradan arayın",

    "loginSection.logoAlt": "Logo",
    "loginSection.emailIconAlt": "E-posta İkonu",
    "loginSection.passwordIconAlt": "Kilit İkonu",
    "loginSection.footerLogoAlt": "Altbilgi Logosu",
    "loginSection.title": "Giriş",
    "loginSection.emailPlaceholder": "E-postanızı girin",
    "loginSection.passwordPlaceholder": "Şifrenizi girin",
    "loginSection.forgotPassword": "Giriş bilgilerinizi mi unuttunuz?",
    "loginSection.loginButton": "Giriş",
    "loginSection.noAccount": "Hesabınız yok mu?",
    "loginSection.createAccount": "Yeni hesap oluştur",

    "softaculousSection.title": "Softaculous Barındırma",
    "softaculousSection.description":
      "Softaculous ile 400'den fazla uygulama için tek tıkla kurulum",

    "appHostingSection.title": "Uygulama Barındırma",
    "appHostingSection.description":
      "Paylaşımlı barındırma hizmetleri hakkında açıklama ve detaylar, uygulamalarınız için güvenilir ve ölçeklenebilir çözümler sunmak üzere tasarlanmıştır",
    "appHostingSection.viewPricing": "Fiyatları Görüntüle",
    "appHostingSection.createAccount": "Hesap Oluştur",
    "ecommerceSection.title": "E-ticaret – Elektronik Ticaret",
    "ecommerceSection.cyclosName": "Cyclos 4 Pro",
    "ecommerceSection.magentoName": "Magento",
    "ecommerceSection.magentoClusterName": "Magento Cluster",
    "ecommerceSection.maianCartName": "Maian Cart",
    "ecommerceSection.openCartName": "OpenCart",
    "ecommerceSection.prestaShopName": "PrestaShop",
    "ecommerceSection.cyclosDescription":
      "Cyclos 4 PRO, büyük şirketler ve kurumlar için bir ödeme platformudur",
    "ecommerceSection.magentoDescription":
      "Magento, dünyanın önde gelen markaları tarafından güvenilen bir e-ticaret yazılımı ve platformudur. Magento ile çevrimiçi işinizi büyütün",
    "ecommerceSection.magentoClusterDescription":
      "Yük dengeleme, veri çoğaltma, içerik önbellekleme ve kullanıcı oturumu depolama ile otomatik ölçeklenebilirlik ve yüksek kullanılabilirlik sunan Magento kümesi",
    "ecommerceSection.maianCartDescription":
      "Maian Cart, PHP ve MySQL ile geliştirilmiş hızlı, güçlü ve ücretsiz bir e-ticaret platformudur ve çevrimiçi mağazanızı yönetmek için ihtiyacınız olan tüm özelliklere sahiptir",
    "ecommerceSection.openCartDescription":
      "OpenCart, PHP tabanlı açık kaynaklı bir çevrimiçi alışveriş sistemidir",
    "ecommerceSection.prestaShopDescription":
      "PrestaShop, ürünleri çevrimiçi satmak için açık kaynaklı ve tamamen özelleştirilebilir, verimli, hızlı ve kullanımı kolay bir çözümdür",
    "ecommerceSection.cyclosLogoAlt": "Cyclos 4 Pro Logosu",
    "ecommerceSection.magentoLogoAlt": "Magento Logosu",
    "ecommerceSection.maianCartLogoAlt": "Maian Cart Alışveriş Sepeti İkonu",
    "ecommerceSection.openCartLogoAlt": "OpenCart Logosu",
    "ecommerceSection.prestaShopLogoAlt": "PrestaShop Logosu",
    "ecommerceSection.launchNow": "Şimdi Başlat",
    "statsSection.dataCenters": "Veri Merkezleri",
    "statsSection.uptime": "Çalışma Süresi",
    "statsSection.hostedSites": "Barındırılan Siteler",
    "statsSection.guaranteedAvailability": "Garantili Kullanılabilirlik",
    "statsSection.customerSatisfaction": "Müşteri Memnuniyeti",
    "statsSection.dataCentersAlt": "Veri Merkezleri İkonu",
    "statsSection.uptimeAlt": "Çalışma Süresi İkonu",
    "statsSection.hostedSitesAlt": "Barındırılan Siteler İkonu",
    "statsSection.guaranteedAvailabilityAlt":
      "Garantili Kullanılabilirlik İkonu",
    "statsSection.customerSatisfactionAlt": "Müşteri Memnuniyeti İkonu",

    "statsSectionTwo.dataCenters": "Rechenzentren",
    "statsSectionTwo.uptime": "Betriebszeit",
    "statsSectionTwo.hostedSites": "Gehostete Websites",
    "statsSectionTwo.guaranteedAvailability": "Garantierte Verfügbarkeit",
    "statsSectionTwo.customerSatisfaction": "Kundenzufriedenheit",
    "statsSectionTwo.dataCentersAlt": "Symbol für Rechenzentren",
    "statsSectionTwo.uptimeAlt": "Symbol für Betriebszeit",
    "statsSectionTwo.hostedSitesAlt": "Symbol für gehostete Websites",
    "statsSectionTwo.guaranteedAvailabilityAlt":
      "Symbol für garantierte Verfügbarkeit",
    "statsSectionTwo.customerSatisfactionAlt": "Symbol für Kundenzufriedenheit",

    "achievementsSectionTwo.title": "Başarılarımız",
    "achievementsSectionTwo.description":
      "Ali Al-Mansi ve Yahya Hassan tarafından kurulan şirket, yalnızca 3 kişilik bir ekiple barındırma hizmetlerinde uzmanlaşarak faaliyetlerine başladı.",

    "contactSection.description":
      "İşletmenizin başarısına nasıl yardımcı olabileceğimizi öğrenmek ister misiniz? Bize ulaşın.",
    "contactSection.helpTitle": "Yardım mı gerekiyor?",
    "contactSection.helpDescription": "Bize ulaşın ve destek alın",
    "contactSection.contactButton": "Şimdi İletişime Geç",
    "contactSection.microsoftLogoAlt": "Microsoft Logosu",
    "contactSection.partner1LogoAlt": "Ortak 1 Logosu",
    "contactSection.partner2LogoAlt": "Ortak 2 Logosu",
    "contactSection.partner3LogoAlt": "Ortak 3 Logosu",
    "contactSection.partner4LogoAlt": "Ortak 4 Logosu",

    "tigersSection.title": "Nomoar Hakkında",
    "tigersSection.description":
      "Nomoar, Suudi Arabistan'daki lider bulut hizmetleri sağlayıcısıdır ve her büyüklükteki kuruluşun teknik altyapısını desteklemeye ve korumaya adanmıştır.",
    "featuresSection.title": "Özellikler",
    "featuresSection.multilingualSites": "Çok Dilli Web Siteleri",
    "featuresSection.fiftyLanguages": "50 Dil Desteği",
    "featuresSection.responsiveDesign": "Tüm Cihazlar için Duyarlı Tasarım",
    "featuresSection.easyTool": "Kullanıcı Dostu Araç",
    "featuresSection.videoTutorials": "Kullanım Videoları",
    "featuresSection.plugins": "Eklentiler",
    "featuresSection.templates": "Bir Milyondan Fazla Şablon",
    "featuresSection.siteMigration":
      "Diğer Yapım Araçlarından Site Taşıma İmkanı",
    "featuresSection.multilingualSitesAlt": "Çok Dilli Web Siteleri İkonu",
    "featuresSection.fiftyLanguagesAlt": "50 Dil Desteği İkonu",
    "featuresSection.responsiveDesignAlt": "Duyarlı Tasarım İkonu",
    "featuresSection.easyToolAlt": "Kullanıcı Dostu Araç İkonu",
    "featuresSection.videoTutorialsAlt": "Kullanım Videoları İkonu",
    "featuresSection.pluginsAlt": "Eklentiler İkonu",
    "featuresSection.templatesAlt": "Şablonlar İkonu",
    "featuresSection.siteMigrationAlt": "Site Taşıma İkonu",
    "featuresSection.rightImgAlt": "Sağ Arka Plan Görseli",
    "featuresSection.leftImgAlt": "Sol Arka Plan Görseli",
    "oneClickApps.helmChartsAlt": "Helm Charts İkonu",
    "oneClickApps.certManagerAlt": "Sertifika Yöneticisi İkonu",
    "oneClickApps.linkerdAlt": "Linkerd İkonu",
    "oneClickApps.operatorsAlt": "Operatörler İkonu",
    "oneClickApps.illustrationAlt": "Tek Tıkla Uygulamalar İllüstrasyonu",
    "distributorBasicNeed.title":
      "Sunucunuzu çalıştırmak için lisanslara mı ihtiyacınız var?",
    "distributorBasicNeed.subtitle": "Bunları en düşük maliyetle sağlıyoruz",
    "distributorBasicNeed.registerButton": "Kayıt Formu",
    "distributorBasicNeed.distributorsButton": "Dağıtıcılar",
    "distributorBasicNeed.settingsIllustrationAlt": "Ayarlar",
    "kubernetes.title": "Kubernetes Kümelerini Dakikalar İçinde Oluşturun",
    "resellerHosting.title": "Bayi Barındırma",
    "resellerHostingPlus.title": "Bayi Plus",
    "resellerHostingUltra.title": "Bayi Ultra",
    "resellerHostingProgram.title": "Bayi Programı",
    "resellerHosting.description":
      "Kâr elde edin ve hizmetlerinizi genişletin.",
    "windowsHosting.title": "Windows Barındırma",
    "windowsHosting.description":
      "En iyi, en hızlı ve en kolay barındırma hizmetlerinden biri",
    "support.title":
      "Nereden başlayacağınızı bilmiyor musunuz? Endişelenmeyin, size yardımcı olmak için buradayız",
    "support.description":
      "Resmi bir Microsoft bulut çözümleri sağlayıcısı olan Libya Spider, kuruluşunuzun Microsoft 365 bulut üretkenlik çözümünü benimsemesine ve iş akışınıza tam olarak entegre etmesine yardımcı olmaya hazır.",
    "support.successMessage":
      "Çok sayıda şirketin Microsoft 365 hizmetlerine başarılı geçişlerinde destek olmaktan gurur duyuyoruz – ve size de yardım etmekten mutluluk duyarız!",
    "support.cta": "Şimdi Talep Edin!",
    "support.settingsChanges": "Ayar Değişiklikleri",
    "support.settingsChangesAlt": "Ayar Değişiklikleri İkonu",
    "support.training": "Eğitim",
    "support.trainingAlt": "Eğitim İkonu",
    "support.technicalSupport": "Teknik Destek",
    "support.technicalSupportAlt": "Teknik Destek İkonu",
    "support.settingsCustomization": "Ayarlar ve Özelleştirme",
    "support.settingsCustomizationAlt": "Ayarlar ve Özelleştirme İkonu",
    "support.dataUserMigration": "Veri ve Kullanıcı Göçü",
    "support.dataUserMigrationAlt": "Veri ve Kullanıcı Göçü İkonu",
    "support.sharePointMigration": "SharePoint Online Göçü",
    "support.sharePointMigrationAlt": "SharePoint Online Göçü İkonu",
    "tigersHosting.title": "Nomoar Barındırma",
    "tigersHosting.description":
      "Yönetimi kolay ve uygun maliyetli bulut altyapısı",
    "cloudInfrastructure.title":
      "Esnek, Yönetimi Kolay ve Ölçeklenebilir Altyapı",
    "cloudInfrastructure.description":
      "LS Cloud, bilgi işlem, depolama ve ağ kaynaklarını gelişmiş analizler ve izleme araçlarıyla tek bir kullanıcı dostu bulut platformunda birleştirir.",
    "cloudInfrastructure.tools":
      "Tek bir kullanıcı dostu bulut platformunda araçlar.",
    "cloudInfrastructure.resources":
      "Dakikalar içinde dağıtılabilen bulut kaynakları",
    "cloudInfrastructure.loadMetrics": "Yük Metrikleri",
    "cloudInfrastructure.loadMetricsAlt": "Yük Metrikleri İkonu",
    "cloudInfrastructure.networking": "Ağ",
    "cloudInfrastructure.networkingAlt": "Ağ İkonu",
    "cloudInfrastructure.storageSizes": "Depolama Boyutları",
    "cloudInfrastructure.storageSizesAlt": "Depolama Boyutları İkonu",
    "cloudInfrastructure.virtualServers": "Sanal Sunucular",
    "cloudInfrastructure.virtualServersAlt": "Sanal Sunucular İkonu",
    "cloudInfrastructure.backgroundAlt": "Bulut Arka Planı",
    "whyChooseTigers.blockUnauthorizedEmail": "Yetkisiz E-postaları Engelle",
    "whyChooseTigers.blockUnauthorizedEmailDesc":
      "PowerDMARC ile sadece e-posta sahteciliğini ortadan kaldırmakla kalmaz, aynı zamanda ayrıntılı raporları kullanarak içerik stratejinizi anında ayarlayabilirsiniz. Şansa yer bırakmayın.",
    "whyChooseTigers.blockUnauthorizedEmailAlt":
      "Yetkisiz E-posta Engelleme İkonu",
    "whyChooseTigers.preventEmailSpoofing": "E-posta Sahteciliğini Önle",
    "whyChooseTigers.preventEmailSpoofingDesc":
      "Gelişmiş kimlik doğrulama protokolleri kullanarak alan adınızı e-posta sahteciliği ve kimlik avı saldırılarına karşı koruyun. Yalnızca yetkili göndericilerin alan adınızı kullanabileceğinden emin olun.",
    "whyChooseTigers.preventEmailSpoofingAlt":
      "E-posta Sahteciliğini Önleme İkonu",
    "whyChooseTigers.enhanceEmailSecurity": "E-posta Güvenliğini Artır",
    "whyChooseTigers.enhanceEmailSecurityDesc":
      "E-posta trafiğinize tam görünürlük kazanın ve yetkisiz etkinlikleri gerçek zamanlı olarak tespit edin. İletişiminizi güvenli ve uyumlu tutun.",
    "whyChooseTigers.enhanceEmailSecurityAlt":
      "E-posta Güvenliğini Artırma İkonu",
    "whyChooseTigers.verifyEmail": "Her E-postayı Doğrula",
    "whyChooseTigers.verifyEmailDesc":
      "DMARC, SPF ve DKIM kullanarak e-postalarınızı doğrulayın ve siber suçluların alan adınızı sahtecilikle kullanmasını engelleyin. Alıcılarla güven oluşturun.",
    "whyChooseTigers.verifyEmailAlt": "Her E-postayı Doğrulama İkonu",
    "whyChooseTigers.backgroundRightAlt": "Sağ Arka Plan",
    "whyChooseTigers.backgroundLeftAlt": "Sol Arka Plan",
    "businessHosting.title": "İş Barındırma",
    "businessHosting.description":
      "En iyi, en hızlı ve en kolay barındırma hizmetlerinden biri",
    "servicesThree.title": "Hızla Başlayın ve İşinizi Büyütün",
    "servicesThree.reliableStaticHosting": "Güvenilir Statik Barındırma",
    "servicesThree.reliableStaticHostingDesc":
      "Statik web sitelerinizi yıldırım hızında yükleme süreleri ve eşsiz stabilite ile barındırın. Küresel olarak dağıtılmış bir CDN ile sorunsuz dağıtımın keyfini çıkarın.",
    "servicesThree.reliableStaticHostingAlt":
      "Güvenilir Statik Barındırma İkonu",
    "servicesThree.scalableCloudStorage": "Ölçeklenebilir Bulut Depolama",
    "servicesThree.scalableCloudStorageDesc":
      "Verilerinizi yüksek performanslı bulut depolama ile güvenli bir şekilde saklayın ve erişin. İşletmeniz büyüdükçe gelişmiş yedeklilik ile kolayca ölçeklendirin.",
    "servicesThree.scalableCloudStorageAlt":
      "Ölçeklenebilir Bulut Depolama İkonu",
    "servicesThree.enterpriseStaticHosting":
      "Kurumsal Düzeyde Statik Barındırma",
    "servicesThree.enterpriseStaticHostingDesc":
      "Statik uygulamalarınızı güvenlik ve yüksek performansla sunun. Anlık güncellemeler, küresel erişim ve sıfır bakım avantajlarından yararlanın.",
    "servicesThree.enterpriseStaticHostingAlt":
      "Kurumsal Statik Barındırma İkonu",
    "mainFeatures.title": "Ana Özellikler",
    "mainFeatures.description":
      "Tercih ettiğiniz işletim sistemi ve önceden yüklenmiş uygulamalarla kendi özel sunucunuza sahip olun.",
    "mainFeatures.crossPlatform": "Birden Fazla Platformda Çalışır",
    "mainFeatures.crossPlatformAlt": "Çoklu Platform İkonu",
    "mainFeatures.ddosMitigation": "DDoS Saldırılarını Hafifletme",
    "mainFeatures.ddosMitigationAlt": "DDoS Hafifletme İkonu",
    "mainFeatures.malwareDetection": "Kötü Amaçlı Yazılım Tespiti ve Kaldırma",
    "mainFeatures.malwareDetectionAlt": "Kötü Amaçlı Yazılım Tespiti İkonu",
    "mainFeatures.sslCertificate": "SSL Güvenlik Sertifikası",
    "mainFeatures.sslCertificateAlt": "SSL Sertifikası İkonu",
    "mainFeatures.securityMonitoring": "Güvenlik İzleme",
    "mainFeatures.securityMonitoringAlt": "Güvenlik İzleme İkonu",
    "mainFeatures.performanceOptimization": "Performans Optimizasyonu",
    "mainFeatures.performanceOptimizationAlt": "Performans Optimizasyonu İkonu",
    "mainFeatures.backgroundRightAlt": "Sağ Arka Plan Resmi",
    "mainFeatures.backgroundLeftAlt": "Sol Arka Plan Resmi",

    "emailHosting.title": "E-posta Barındırma",
    "emailHosting.description":
      "En iyi, en hızlı ve en kolay barındırma hizmetlerinden biri",
    "businessNeeds.title": "İşletmeniz İçin İhtiyacınız Olan Her Şey",
    "businessNeeds.brandAwareness": "Marka Bilinirliğini Artırın",
    "businessNeeds.brandAwarenessDesc":
      "Şirketinizin alan adını bağlayarak marka bilinirliğini artırın ve özel bir e-posta ile daha profesyonel bir imaj sunun",
    "businessNeeds.brandAwarenessAlt": "Marka Bilinirliği İkonu",
    "businessNeeds.security": "Güvenlik",
    "businessNeeds.securityDesc":
      "Yapay zeka ve akıllı e-posta koruma yazılımları kullanarak LS Suite, gelen kutunuzu spam, virüs, kötü amaçlı yazılım, fidye yazılımı ve kimlik avı saldırılarına karşı korur.",
    "businessNeeds.securityAlt": "Güvenlik İkonu",
    "businessNeeds.accessCollaboration": "Kolay Erişim ve İşbirliği",
    "businessNeeds.accessCollaborationDesc":
      "E-postalarınıza, takviminize, kişilerize ve dosyalarınıza her yerden ve herhangi bir cihazdan erişin ve ekibinizle gerçek zamanlı olarak işbirliği yapın, tüm değişiklikler otomatik olarak kaydedilir.",
    "businessNeeds.accessCollaborationAlt": "Erişim ve İşbirliği İkonu",
    "emailSecurity.title": "E-posta Koruması için Güçlü Güvenlik",
    "emailSecurity.description":
      "Profesyonel e-postanızı spam, kimlik avı ve kötü amaçlı yazılımlara karşı yapay zeka destekli güvenlikle koruyun.",
    "emailSecurity.backupRestore":
      "Fiziksel, sanal ve bulut ortamları için yedekleme ve geri yükleme.",
    "emailSecurity.backupRestoreAlt": "Yedekleme ve Geri Yükleme İkonu",
    "emailSecurity.antiSpamPhishing":
      "Spam, virüs ve kimlik avına karşı mücadele için gelişmiş entegre araçlar.",
    "emailSecurity.antiSpamPhishingAlt":
      "Anti-Spam ve Kimlik Avı Araçları İkonu",
    "emailSecurity.documentProtection":
      "Paylaşılan belgeleri parolalar ve zaman kısıtlamaları ile koruyun.",
    "emailSecurity.documentProtectionAlt": "Doküman Koruması İkonu",
    "emailSecurity.encryption":
      "Hassas bilgileri korumak için e-postaları ve dosyaları kolayca şifreleyin.",
    "emailSecurity.encryptionAlt": "E-posta ve Dosya Şifreleme İkonu",
    "emailSecurity.backgroundAlt": "Arka Plan Resmi",
    "keyFeaturesTwo.title": "Ana Özellikler",
    "keyFeatures.description":
      "Tercih ettiğiniz işletim sistemi ve önceden yüklenmiş uygulamalarla kendi özel sunucunuza sahip olun.",
    "keyFeatures.mailStorage": "E-posta Depolama Kapasitesi",
    "keyFeatures.mailStorageAlt": "E-posta Depolama İkonu",
    "keyFeatures.reliableEmail":
      "%99,9 Çalışma Süresi Garantisi ile Güvenilir E-posta",
    "keyFeatures.reliableEmailAlt": "Güvenilir E-posta İkonu",
    "keyFeatures.customEmail": "Özel ve Güvenli İş E-postası",
    "keyFeatures.customEmailAlt": "Özel E-posta İkonu",
    "keyFeatures.calendarSharing": "Takvim, Kişiler ve Görev Paylaşımı",
    "keyFeatures.calendarSharingAlt": "Takvim Paylaşımı İkonu",
    "keyFeatures.spamProtection": "Spam Filtreleme ve Virüs Koruması",
    "keyFeatures.spamProtectionAlt": "Spam Koruması İkonu",
    "callToAction.title": "Bizimle Kolay Geçişinize Başlayın",
    "callToAction.description":
      "Libyan Spider'ın yardımıyla e-postanızı LS Suite'e kolayca, hızlı ve güvenli bir şekilde yükseltin. Üretkenliği artırmak ve e-posta güvenliğini tam desteğimizle geliştirmek için yolculuğunuza başlayın, hiçbir kesinti, duraklama veya herhangi bir veri kaybı olmadan.",
    "callToAction.startNow": "Şimdi Başla!",
    "callToAction.settingsAlt": "Ayarlar",
    "hostingProgrammers.title": "Programcılar için Hosting",
    "hostingProgrammers.description":
      "Yüksek performanslı ve %100 kararlı bulut sunucuları, birden fazla coğrafi konumla",
    "hostingProgrammers.startNow": "Şimdi Başla",
    "servicesTwo.title": "Neden Al-Namur'u Seçmelisiniz?",
    "servicesTwo.description":
      "Bireyler ve kuruluşlar için gelişmiş ve kapsamlı çözümler ve hizmetler",
    "services.scalableStorageTwo": "Ölçeklenebilir Depolama",
    "services.scalableStorageDescTwo":
      "Büyüyen ihtiyaçlarınıza uyum sağlayan esnek bulut depolama.",
    "services.scalableStorageAltTwo": "Ölçeklenebilir Depolama İkonu",
    "services.enterpriseHostingTwo": "Kurumsal Barındırma",
    "services.enterpriseHostingDescTwo":
      "Büyük işletmeler için tasarlanmış gelişmiş barındırma çözümleri.",
    "services.enterpriseHostingAltTwo": "Kurumsal Barındırma İkonu",
    "services.reliableHostingTwo": "Güvenilir Barındırma",
    "services.reliableHostingDescTwo":
      "Yüksek performans ve garantili çalışma süresi ile sabit barındırma.",
    "services.reliableHostingAltTwo": "Güvenilir Barındırma İkonu",
    "services.backgroundDecorationAlt": "Arka Plan Dekoratif Resmi",
    "imglist.contactUs":
      "İşletmenizin başarısına nasıl yardımcı olabileceğimizi öğrenmek ister misiniz? Bize ulaşın",
    "imglist.partnerLogoAlt": "Ortak Logosu",
    "sslSection.title": "Sadece Bir Güvenlik Meselesi Değil",
    "sslSection.description":
      "Web siteleri için SSL sertifikasına sahip olmak, sadece güvenlik açısından değil, acil bir gerekliliktir.",
    "sslSection.buildTrust": "Müşteri Güveni Oluşturun",
    "sslSection.buildTrustDesc":
      "Müşterilerinize çevrimiçi işletmenizin güvenli ve doğrulanmış olduğunu gösterin, hassas verilerinin ve elektronik ödemelerinin tamamen korunduğunu sağlayın.",
    "sslSection.buildTrustAlt": "Müşteri Güveni İkonu",
    "sslSection.seoRanking": "Sitenizin SEO Sıralamasını Yükseltin",
    "sslSection.seoRankingDesc":
      "Güvenli web siteleri, arama motoru sonuçlarında daha yüksek sıralamalar elde etme avantajına sahiptir, çünkü güvenlik sıralama sürecinde temel bir faktördür.",
    "sslSection.seoRankingAlt": "SEO Sıralama İkonu",
    "sslSection.browserCompatibility":
      "Sitenizin Farklı Tarayıcılarda Görünürlüğünü Sağlayın",
    "sslSection.browserCompatibilityDesc":
      "Eğer sitenizde SSL sertifikası yoksa, dünya çapında popüler olan çoğu web tarayıcısı onu 'güvensiz' olarak işaretleyecek ve bir uyarı gösterecek, bazı tarayıcılar ise kullanıcılar için tamamen engelleyebilir.",
    "sslSection.browserCompatibilityAlt": "Tarayıcı Uyumluluğu İkonu",
    "whois.title": "WHOIS Aracı Nedir?",
    "whois.description":
      "WHOIS aracı, alan adları hakkında bilgi sağlayan bir hizmettir; bu bilgiler arasında alan adı sahibi, kayıt detayları, son kullanma tarihi ve ilgili iletişim bilgileri yer alır. Kullanıcıların alan adı sahipliğini doğrulamasına, alan adı kullanılabilirliğini kontrol etmesine ve web sitelerinin meşruiyetini doğrulamasına yardımcı olur. Birçok alan adı kayıt kuruluşu ve siber güvenlik uzmanı, WHOIS aracını araştırma, siber güvenlik ve uyumluluk amaçları için kullanır.",

    "websiteBuilder.title":
      "Web Sitenizi Kolayca Web Sitemiz Oluşturucusu ile Oluşturun",
    "websiteBuilder.chooseTemplate": "Şablonunuzu Seçin",
    "websiteBuilder.chooseTemplateDesc":
      "Sitenizi oluşturmaya başlamak için 200 muhteşem şablon arasından seçim yapın.",
    "websiteBuilder.enhanceFunctionality":
      "Sitenizin İşlevselliğini Geliştirin",
    "websiteBuilder.enhanceFunctionalityDesc":
      "Sitenizi geliştirmek için ihtiyaç duyduğunuz çok sayıda eklenti, araç ve özelliği edinin; fotoğraf galeriniz, medya, sosyal medya platformları ve daha fazlası gibi temel özellikler dahil.",
    "websiteBuilder.previewSite": "Sitenizi Önizleyin",
    "websiteBuilder.previewSiteDesc":
      "Seçilen şablonla sitenizi halka açık olarak yayınlamadan önce görüntüleyin.",
    "websiteBuilder.publishSave":
      "Sitenizi Yayınlayın veya Kaydedin – Tek Tıkla",
    "websiteBuilder.publishSaveDesc":
      "Sitenizi çevrimiçi yayınlayabilir veya yayınlamadan sitenizin taslağını kaydedebilirsiniz.",
    "websiteBuilder.chooseTemplateAlt": "Şablon Seçme İkonu",
    "websiteBuilder.websiteBuilderAlt": "Web Sitesi Oluşturucu İkonu",
    "featuresNine.title": "Özellikler",
    "featuresNine.description": "Tüm planlarımızdaki temel özellikler",
    "featuresNine.multilingualSites": "Çok Dilli Web Siteleri",
    "featuresNine.languageSupport": "50 Dil Desteği",
    "featuresNine.responsiveDesign": "Farklı Cihazlara Uyumlu Tasarım",
    "featuresNine.easyTool": "Kullanıcı Dostu Araç",
    "featuresNine.videoTutorials": "Kullanım için Video Eğitimleri",
    "featuresNine.plugins": "Eklentiler",
    "featuresNine.millionTemplates": "Bir Milyondan Fazla Şablon",
    "featuresNine.siteMigration": "Diğer Oluşturuculardan Site Taşıma İmkanı",
    "featuresNine.iconAlt": "İkon",
    "featuresNine.rightImageAlt": "Sağ Dekoratif Resim",
    "featuresNine.leftImageAlt": "Sol Dekoratif Resim",
    "wordpressHosting.title": "WordPress Barındırma",
    "wordpressHosting.description":
      "WordPress ile sitenizin büyümesi için optimize edilmiş bir ortam",
    "wordpressHosting.startNow": "Şimdi Başla!",
    "kubernetes.description":
      "Kubernetes kümelerini yönetmek için zaman ve çaba harcamayı bırakın. Tamamen yönetilen Kubernetes motorumuzla, uygulamanızın konteynerli kaynaklarını dakikalar içinde kolayca dağıtabilir, yönetebilir ve ölçeklendirebilirsiniz.",
    "kubernetes.orderNow": "Şimdi Sipariş Ver!",
    "services.titletwo": "Hızlı Başlayın ve İşinizi Büyütün",
    "services.reliableHosting": "Güvenilir Statik Barındırma",
    "services.reliableHostingDesc":
      "Statik sitelerinizi yıldırım hızında yükleme süreleri ve eşsiz kararlılıkla barındırın. Küresel olarak dağıtılmış bir CDN ile sorunsuz dağıtımın keyfini çıkarın.",
    "services.scalableStorage": "Ölçeklenebilir Bulut Depolama",
    "services.scalableStorageDesc":
      "Verilerinizi yüksek performanslı bulut depolama ile güvenli bir şekilde depolayın ve erişin. Geliştirilmiş yedeklilikle işiniz büyüdükçe kolayca ölçeklendirin.",
    "services.enterpriseHosting": "Kurumsal Seviyede Statik Barındırma",
    "services.enterpriseHostingDesc":
      "Statik uygulamalarınızı güvenli ve yüksek performansla sunun. Anında güncellemeler, küresel erişim ve sıfır bakım avantajlarından faydalanın.",
    "services.reliableHostingAlt": "Güvenilir Statik Barındırma İkonu",
    "services.scalableStorageAlt": "Ölçeklenebilir Bulut Depolama İkonu",
    "services.enterpriseHostingAlt":
      "Kurumsal Seviyede Statik Barındırma İkonu",
    "services.backgroundDecorationAltTwo": "Arka Plan Dekorasyonu",
    "oneClickApps.title": "Tek Tıkla Uygulamalarla Hızlı Başlayın",
    "oneClickApps.description":
      "Kubernetes motorumuz, popüler Kubernetes araçlarıyla entegrasyonu destekler ve tek bir tıklamayla önceden yapılandırılmış açık kaynak yazılımları çalıştıran kümeler oluşturmanıza olanak tanır.",
    "oneClickApps.helmCharts": "Helm Charts",
    "oneClickApps.certManager": "Sertifika Yöneticisi",
    "oneClickApps.linkerd": "Linkerd",
    "oneClickApps.operators": "Operatörler",
    "oneClickApps.imageAlt": "Tek Tıkla Uygulamalar",
    "templates.million": "1.000.000+",
    "templates.title": "Her Amaç için 1.000.000’den Fazla Hazır Şablon",
    "templates.description":
      "Her türlü iş ve kişisel faaliyet için web sitesi oluşturucumuz, tamamen özelleştirilebilir ve düzenlenebilir tasarımlarla 1.000.000’den fazla harika hazır şablon sunar.",
    "templates.viewMore": "Daha Fazla Göster",

    "hosting.windows": "Windows Barındırma",
    "hosting.windows.description":
      ".NET ve diğer Microsoft teknolojilerini destekleyen Windows tabanlı barındırma.",
    "sharedHosting.title": "Paylaşımlı Barındırma",
    "sharedHosting.description":
      "Yüksek performanslı ve %100 kararlı bulut sunucuları, birden fazla coğrafi konumla",
    "sharedHosting.startNow": "Şimdi Başla!",
    "smallContent.feature.backupRecovery":
      "Fiziksel, sanal ve bulut ortamlar için yedekleme ve kurtarma.",
    "smallContent.feature.malwareProtection":
      "Kötü amaçlı yazılım koruması ve fidye yazılımına karşı koruma.",
    "smallContent.feature.deviceProtection": "Uç cihaz koruması ve yönetimi.",
    "smallContent.feature.threatDetection":
      "Gelişmiş tehdit algılama ve yanıt.",
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
    "whyChooseTigers.title": "Warum Nomoar wählen",
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
    "serverLocations.india": "Hindistan",
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
  const [selectedCountry, setSelectedCountry] = useState<string>("");

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

  const t = (key: string): string => {
    return translations[language][key as TranslationKeys] || key;
  };

  const isRTL = language === "arabic";

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
        isRTL,
        selectedCountry,
        setSelectedCountry,
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
