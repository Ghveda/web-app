import { ReactNode } from 'react';
import Footer from '../../layouts/footer';

export default async function LocaleLayout({
  children,
}: {
  children: ReactNode;
  params: any;
}) {
  return (
    <html>
      <body>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
