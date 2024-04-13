'use client';
import { useAppContext } from '@/providers/context-provider';
import Cookies from 'js-cookie';
import { useParams, useRouter } from 'next/navigation';

export default function ContainerHeader() {
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();

  const { setUserData } = useAppContext();

  const handleLogOut = () => {
    setUserData(undefined);
    Cookies.remove('accessToken');
    router.push(`/${locale}`);
  };

  return (
    <div className="flex flex-row items-center justify-between px-[12px] py-[24px]">
      <h1 className="text-[24px] font-medium">Analytics</h1>
      <button onClick={handleLogOut}>logout</button>
    </div>
  );
}
