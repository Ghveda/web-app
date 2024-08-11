import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/providers/QueryClientProvider';
import AuthProvider from '@/providers/auth-provider';
import ContextProvider from '@/providers/context-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Warrio',
  description: 'Warrio - App',
  icons: {
    icon: '/images/logo.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
