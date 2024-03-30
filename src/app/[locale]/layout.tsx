import { ReactNode } from 'react';
import localFont from 'next/font/local';
import './globals.css';

const fonts = localFont({
  src: [
    {
      path: '../../../public/fonts/Montserrat-Black.ttf',
      weight: '300',
    },
    {
      path: '../../../public/fonts/Montserrat-BlackItalic.ttf',
      weight: '400',
    },
    {
      path: '../../../public/fonts/Montserrat-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--neue',
});

export default async function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html className={`${fonts.variable}`}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
