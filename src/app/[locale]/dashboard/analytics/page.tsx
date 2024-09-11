'use client';
import DashboardContainer from '@/components/common/container';
import AnalyticsHeader from './analytics-header';
import DashboardList from './dashboard-list';
import { categoriesList, storesList } from './analytics.mock';
import { useTranslation } from '@/app/i18n/client';
import { useGetAnalyticsQuery } from '@/api/query/useGetAnalyticsQuery';

type Params = {
  params: {
    locale: string;
  };
};

export default function Analytics({ params: { locale } }: Params) {
  const { t } = useTranslation(locale, 'translations');
  const { data: analyticsData } = useGetAnalyticsQuery();
  console.log(analyticsData);

  return (
    <DashboardContainer>
      <>
        <AnalyticsHeader
          purchaseAmount={t('dashboard.analytics.purchase-amount')}
          totalWarranties={t('dashboard.analytics.total-warranties')}
          activeWarranties={t('dashboard.analytics.active-warranties')}
          expiredWarranties={t('dashboard.analytics.expired-warranties')}
        />
        <section className="mt-[24px] grid grid-cols-2 gap-[24px] xl:grid-cols-4">
          <DashboardList
            title={t('dashboard.analytics.categories')}
            list={categoriesList}
            total={1249}
          />
          <DashboardList
            title={t('dashboard.analytics.stores')}
            list={storesList}
            total={1}
          />
        </section>
      </>
    </DashboardContainer>
  );
}
