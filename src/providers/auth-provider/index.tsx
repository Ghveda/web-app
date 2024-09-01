'use client';
import { axiosIntance } from '@/api/axios';
import { ReactNode, useLayoutEffect, useState } from 'react';
import { useAppContext } from '../context-provider';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Spinner from '@/components/common/spinner';

type Props = {
  children: ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams<{ locale: string }>();

  const { setUserData } = useAppContext();

  useLayoutEffect(() => {
    const fetchUser = async () => {
      setLoading(true);

      try {
        const { data } = await axiosIntance.post('auth/me');
        setUserData(data);
        if (pathname.includes('dashboard')) {
          setLoading(false);
          return;
        }
        router.push(`/${locale}/dashboard/analytics`);
      } catch (error) {
        console.error(error);

        router.push(`/${locale}`);
      }

      setLoading(false);
    };

    try {
      fetchUser();
    } catch (error) {}
  }, [locale, axiosIntance]);

  if (loading) {
    return <Spinner />;
  }

  return children;
}
