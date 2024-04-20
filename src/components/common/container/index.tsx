import SideBar from '@/app/layouts/sidebar';
import { ReactNode } from 'react';
import ContainerHeader from './container-header';

type Props = {
  children: ReactNode;
};
export default function DashboardContainer({ children }: Props) {
  return (
    <main className="flex flex-row items-start bg-primary-100 p-[24px]">
      <SideBar />
      <div className="min-h-[100vh] flex-1 rounded-[24px] bg-gray-100 p-[12px]">
        <ContainerHeader />
        <div>{children}</div>
      </div>
    </main>
  );
}
