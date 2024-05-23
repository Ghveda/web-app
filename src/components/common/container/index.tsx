import SideBar from '@/app/layouts/sidebar';
import { ReactNode } from 'react';
import ContainerHeader from './container-header';
import DashboardHeader from '@/app/layouts/dashboard-header';

type Props = {
  children: ReactNode;
};
export default function DashboardContainer({ children }: Props) {
  return (
    <main className="flex flex-row items-start bg-primary-200 pl-0 md:p-[20px]">
      <SideBar />
      <DashboardHeader />
      <div className="calc-container-height mt-[50px] flex-1 bg-gray-100 p-[12px] md:mt-0 md:rounded-[24px]">
        <ContainerHeader />
        <div className="mt-[40px]">{children}</div>
      </div>
    </main>
  );
}
