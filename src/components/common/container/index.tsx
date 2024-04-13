import SideBar from '@/app/layouts/sidebar';
import { ReactNode } from 'react';
import ContainerHeader from './container-header';

type Props = {
  children: ReactNode;
};
export default function DashboardContainer({ children }: Props) {
  return (
    <main>
      <SideBar />
      <div className="min-h-[100vh] bg-gray-100 p-[12px]">
        <ContainerHeader />
        <div>{children}</div>
      </div>
    </main>
  );
}
