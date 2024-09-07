import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/providers/QueryClientProvider';
import AuthProvider from '@/providers/auth-provider';
import ContextProvider from '@/providers/context-provider';
import { dir } from 'i18next';
import { languages } from './i18n/settings';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: 'Warrio',
  description: 'Warrio - App',
  icons: {
    icon: '/assets/images/favicon.ico',
  },
};

export default async function RootLayout({
  children,
  params: { locale = 'en' },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <QueryProvider>
          <ContextProvider>
            <AuthProvider>
              <div>
                <div>{children}</div>
              </div>
            </AuthProvider>
          </ContextProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
