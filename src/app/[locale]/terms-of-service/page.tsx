import { useTranslation } from '@/app/i18n';
import Footer from '@/app/layouts/footer';
import Header from '@/app/layouts/header';

type Params = {
  params: {
    locale: string;
  };
};

export default async function TermsOfService({ params: { locale } }: Params) {
  const { t } = await useTranslation(locale, 'translations');

  return (
    <main>
      <Header locale={locale} />
      <section className="h-[100vh]"></section>
      <Footer
        privacyPolicy={t('home.privacy-policy')}
        termsOfService={t('home.terms-of-service')}
      />
    </main>
  );
}
