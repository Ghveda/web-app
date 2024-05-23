import SideBar from '@/app/layouts/sidebar';
import { ReactNode } from 'react';
import ContainerHeader from './container-header';

type Props = {
  children: ReactNode;
};
export default function DashboardContainer({ children }: Props) {
  return (
    <main className="flex flex-row items-start bg-primary-200 p-[20px] pl-0">
      <SideBar />
      <div className="calc-container-height flex-1 rounded-[24px] bg-gray-100 p-[12px]">
        <ContainerHeader />
        <div className="mt-[40px]">{children}</div>
      </div>
    </main>
  );
}
