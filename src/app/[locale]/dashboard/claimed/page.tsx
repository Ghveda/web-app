import { useTranslation } from '@/app/i18n';
import DashboardContainer from '@/components/common/container';

type Params = {
  params: {
    locale: string;
  };
};

export default async function Claimed({ params: { locale } }: Params) {
  const { t } = await useTranslation(locale, 'translations');

  return (
    <DashboardContainer>
      <section>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-[35px] font-medium text-primary-100">
            {t('dashboard.claimed.not-claimed')}
          </h1>
          <p className="mt-[20px] max-w-[600px] text-center text-[19px] font-thin text-primary-100">
            {t('dashboard.claimed.warranty-issue')}
          </p>
        </div>
      </section>
    </DashboardContainer>
  );
}
