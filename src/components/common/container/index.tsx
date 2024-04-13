import SideBar from '@/app/layouts/sidebar';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function DashboardContainer({ children }: Props) {
  return (
    <main>
      <SideBar />
      <div className="p-[12px]">{children}</div>
    </main>
  );
}
