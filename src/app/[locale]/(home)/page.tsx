import Footer from '@/app/layouts/footer';
import About from './about';
import AboutUs from './about-us';
import Features from './features';
import Header from '@/app/layouts/header';
import Partners from './partners';
import { useTranslation } from '@/app/i18n';

type Params = {
  params: {
    locale: string;
  };
};

export default async function Home({ params: { locale } }: Params) {
  const { t } = await useTranslation(locale, 'translations');

  return (
    <main className="text-40">
      <Header
        locale={locale}
        about={t('home.about')}
        features={t('home.features')}
        partners={t('home.partners')}
        contact={t('home.contact')}
      />
      <About
        manageProducts={t('home.manage-products')}
        signUpNow={t('home.sign-up-now')}
        warrantyNotifications={t('home.warranty-notifications')}
      />
      <Features
        features={t('home.features')}
        syncWithPartners={t('home.sync-with-partners')}
        syncDesc={t('home.sync-desc')}
        hassleFree={t('home.hassle-free')}
        hassleFreeDesc={t('home.hassle-free-desc')}
        expirationReminder={t('home.expiration-reminder')}
        expirationReminderDesc={t('home.expiration-reminder-desc')}
        claimSubmission={t('home.claim-submission')}
        claimSubmissionDesc={t('home.claim-submission-desc')}
        deliveryService={t('home.delivery-service')}
        deliveryServiceDesc={t('home.delivery-service-desc')}
        monitoringAndPlanning={t('home.monitoring-and-planning')}
        monitoringAndPlanningDesc={t('home.monitoring-and-planning-desc')}
        warrantyExtension={t('home.warranty-extension')}
        warrantyExtensionDesc={t('home.warranty-extension-desc')}
        repairService={t('home.repair-service')}
        repairServiceDesc={t('home.repair-service-desc')}
        featuresubtitle={t('home.features-subtitle')}
      />
      <Partners
        partners={t('home.partners')}
        partnersSubTitle={t('home.partner-sub-title')}
        becomeThem={t('home.become-them')}
        ourPartnersBenefit={t('home.our-partners-benefit')}
        enhanancedCustomer={t('home.enhananced-customer')}
        marketingAnalytics={t('home.marketing-analytics')}
        crossSelling={t('home.cross-selling')}
        remarketing={t('home.remarketing')}
      />
      <AboutUs
        aboutUs={t('home.about-us')}
        aboutDescOne={t('home.about-desc-one')}
        aboutDescTwo={t('home.about-desc-two')}
        aboutDescThree={t('home.about-desc-three')}
      />
      <Footer
        privacyPolicy={t('home.privacy-policy')}
        termsOfService={t('home.terms-of-service')}
      />
    </main>
  );
}
