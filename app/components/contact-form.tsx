"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Settings, ShoppingCart, Tag } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function ContactForm() {
  const { t, isRTL } = useLanguage();

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="flex items-center justify-center bg-gray-50 p-8 sm:p-6 lg:p-16">
      <Card className="w-full max-w-xl sm:max-w-2xl md:max-w-2xl lg:max-w-2xl xl:max-w-2xl mx-auto rounded-lg shadow-md">
        <CardHeader className={`space-y-4 p-6 pb-0 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h1 className="text-2xl font-bold text-gray-800">{t('contactForm.title')}</h1>
          <p className="text-sm text-gray-500">{t('contactForm.description')}</p>
        </CardHeader>
        <CardContent className="p-6 pt-4">
          <Tabs defaultValue="sales" className="mb-6">
            <TabsList className="grid py-8 mx-auto rounded-lg bg-gray-100 md:p-8 w-full">
              <div className="flex w-full mx-auto justify-center gap-6 sm:gap-20 md:gap-24 lg:gap-28 items-center">
                <TabsTrigger
                  value="sales"
                  className="flex flex-col items-center justify-center gap-1 rounded-md py-2 -translate-y-7 text-xs font-medium text-gray-600 data-[state=active]:bg-[#4A327A] data-[state=active]:text-white"
                >
                  <CreditCard className="h-5 w-5" />
                  {t('contactForm.salesTab')}
                </TabsTrigger>
                <TabsTrigger
                  value="customization"
                  className="flex flex-col items-center justify-center gap-1 rounded-md py-2 -translate-y-7 text-xs font-medium text-gray-600 data-[state=active]:bg-[#4A327A] data-[state=active]:text-white"
                >
                  <Settings className="h-5 w-5" />
                  {t('contactForm.customizationTab')}
                </TabsTrigger>
                <TabsTrigger
                  value="trends"
                  className="flex flex-col items-center justify-center gap-1 rounded-md py-2 -translate-y-7 text-xs font-medium text-gray-600 data-[state=active]:bg-[#4A327A] data-[state=active]:text-white"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {t('contactForm.trendsTab')}
                </TabsTrigger>
                <TabsTrigger
                  value="prices"
                  className="flex flex-col items-center justify-center gap-1 rounded-md py-2 -translate-y-7 text-xs font-medium text-gray-600 data-[state=active]:bg-[#4A327A] data-[state=active]:text-white"
                >
                  <Tag className="h-5 w-5" />
                  {t('contactForm.pricesTab')}
                </TabsTrigger>
              </div>
            </TabsList>
          </Tabs>

          <form className="space-y-4">
            <div className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              <Label htmlFor="full-name">{t('contactForm.fullNameLabel')}</Label>
              <Input id="full-name" placeholder={t('contactForm.fullNameLabel')} className={isRTL ? 'text-right' : 'text-left'} />
            </div>
            <div className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              <Label htmlFor="username">{t('contactForm.usernameLabel')}</Label>
              <Input id="username" placeholder={t('contactForm.usernameLabel')} className={isRTL ? 'text-right' : 'text-left'} />
            </div>
            <div className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              <Label htmlFor="message">{t('contactForm.messageLabel')}</Label>
              <Textarea id="message" placeholder={t('contactForm.messageLabel')} className={`min-h-[100px] ${isRTL ? 'text-right' : 'text-left'}`} />
            </div>
            <div className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              <Label htmlFor="language">{t('contactForm.languageLabel')}</Label>
              <Select defaultValue="arabic">
                <SelectTrigger id="language" className={`w-full ${isRTL ? 'text-right' : 'text-left'}`}>
                  <SelectValue placeholder={t('contactForm.languagePlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="arabic">{t('contactForm.languageArabic')}</SelectItem>
                  <SelectItem value="english">{t('contactForm.languageEnglish')}</SelectItem>
                  <SelectItem value="spanish">{t('contactForm.languageSpanish')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full bg-[#4A327A] hover:bg-[#3A2860]">
              {t('contactForm.submitButton')}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>{t('contactForm.contactAlternative')}</p>
            <p className="font-medium mt-3 text-gray-800">+214568987</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}