import DashboardContainer from '@/components/common/container';
import AnalyticsHeader from './analytics-header';
import DashboardList from './dashboard-list';
import { categoriesList, storesList } from './analytics.mock';

export default function Analytics() {
  return (
    <DashboardContainer>
      <>
        <AnalyticsHeader />
        <section className="mt-[24px] grid grid-cols-4 gap-[24px]">
          <DashboardList
            title="Categories"
            list={categoriesList}
            total={1249}
          />
          <DashboardList title="Stores" list={storesList} total={1} />
        </section>
      </>
    </DashboardContainer>
  );
}
