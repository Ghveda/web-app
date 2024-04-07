'use client';
import { IResponseError } from '@/types/common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const onError = (error: unknown) => {
  const responseError = error as IResponseError;

  console.warn(responseError);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retryOnMount: false,
      retry: false,
    },
    mutations: {
      onError,
    },
  },
});

export default function QueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
