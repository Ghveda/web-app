'use client';
import { useAppContext } from '@/providers/context-provider';
import Cookies from 'js-cookie';
import { useParams, usePathname, useRouter } from 'next/navigation';

export default function ContainerHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();

  const { setUserData } = useAppContext();

  const handleLogOut = () => {
    setUserData(undefined);
    Cookies.remove('accessToken');
    router.push(`/${locale}`);
  };

  const pathnameArr = pathname?.split('/');
  const title = pathnameArr[pathnameArr?.length - 1];
  const capitalizedTitle = title?.charAt(0)?.toUpperCase() + title?.slice(1);

  return (
    <div className="flex flex-row items-center justify-between px-[12px] py-[24px]">
      <h1 className="text-[40px]">{capitalizedTitle}</h1>
      <button onClick={handleLogOut}>logout</button>
    </div>
  );
}
