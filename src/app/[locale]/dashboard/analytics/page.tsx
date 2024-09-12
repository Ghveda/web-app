'use client';
import DashboardContainer from '@/components/common/container';
import AnalyticsHeader from './analytics-header';
import DashboardList from './dashboard-list';
import { useTranslation } from '@/app/i18n/client';
import { useGetAnalyticsQuery } from '@/api/query/useGetAnalyticsQuery';
import Link from 'next/link';

type Params = {
  params: {
    locale: string;
  };
};

export default function Analytics({ params: { locale } }: Params) {
  const { t } = useTranslation(locale, 'translations');
  const { data: analyticsData } = useGetAnalyticsQuery();

  const categoryArr = analyticsData?.categoryReport?.map((category) => ({
    storeName: category.categoryName,
    itemCount: +category.totalPurchaseAmount || 0,
  }));

  return (
    <DashboardContainer>
      <>
        <AnalyticsHeader
          amount={analyticsData?.totalPurchaseAmount || 0}
          totalWarantyItems={analyticsData?.totalWarranties || 0}
          totalActiveWarantyItems={analyticsData?.totalActiveWarranties || 0}
          totalExpiredWarantyItems={analyticsData?.totalExpiredWarranties || 0}
          purchaseAmount={t('dashboard.analytics.purchase-amount')}
          totalWarranties={t('dashboard.analytics.total-warranties')}
          activeWarranties={t('dashboard.analytics.active-warranties')}
          expiredWarranties={t('dashboard.analytics.expired-warranties')}
        />
        <section className="mt-[24px] grid grid-cols-2 gap-[24px] xl:grid-cols-4">
          {!!categoryArr?.length && (
            <DashboardList
              title={t('dashboard.analytics.categories')}
              list={categoryArr}
              total={categoryArr.length}
            />
          )}
          {!!analyticsData?.storeItemCount?.length ? (
            <DashboardList
              title={t('dashboard.analytics.stores')}
              list={analyticsData?.storeItemCount}
              total={analyticsData?.storeItemCount.length}
            />
          ) : (
            <p className="col-span-2 text-primary-100">
              {t('dashboard.analytics.not-uploaded-yet')}
              <Link
                href={`/${locale}/dashboard/products`}
                className="ml-[8px] underline"
              >
                {t('dashboard.analytics.click-here')}
              </Link>{' '}
              {t('dashboard.analytics.upload-now')}
            </p>
          )}
        </section>
      </>
    </DashboardContainer>
  );
}
