'use client';
import { usePathname } from 'next/navigation';
import UserActions from '../../dashboard-actions';

export default function ContainerHeader() {
  const pathname = usePathname();
  const pathnameArr = pathname?.split('/');
  const title = pathnameArr[pathnameArr?.length - 1];
  const capitalizedTitle = title?.charAt(0)?.toUpperCase() + title?.slice(1);

  return (
    <div className="flex flex-row items-center justify-between px-[12px] py-[24px]">
      <h1 className="text-[30px] md:text-[40px]">{capitalizedTitle}</h1>
      <div className="hidden md:flex">
        <UserActions />
      </div>
    </div>
  );
}
