import { ReactNode } from 'react';
import './globals.css';

export default async function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
