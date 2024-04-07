import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function DashboardContainer({ children }: Props) {
  return (
    <main>
      <aside>side bar</aside>
      <section></section>
      {children}
    </main>
  );
}
