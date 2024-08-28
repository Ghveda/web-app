'use client';
import { usePathname, useRouter } from 'next/navigation';
import UserActions from '../../dashboard-actions';
import { SfIconChevronLeft } from '@storefront-ui/react';

const headers = [
  'Analytics',
  'Reviews',
  'Products',
  'Claimed',
  'Partners',
  'Settings',
];

export default function ContainerHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const pathnameArr = pathname?.split('/');
  const title = pathnameArr[pathnameArr?.length - 1];
  const capitalizedTitle = title?.charAt(0)?.toUpperCase() + title?.slice(1);

  return (
    <div className="flex flex-row items-center justify-between px-[12px] py-[24px]">
      {headers.includes(capitalizedTitle) ? (
        <h1 className="text-[30px] md:text-[40px]">{capitalizedTitle}</h1>
      ) : (
        <button
          onClick={() => router.back()}
          className="flex items-center font-bold text-gray-200"
        >
          <SfIconChevronLeft />
          Back
        </button>
      )}
      <div className="hidden md:flex">
        <UserActions />
      </div>
    </div>
  );
}
