'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import UserActions from '../../dashboard-actions';
import { SfIconChevronLeft } from '@storefront-ui/react';
import { useTranslation } from '@/app/i18n/client';

const headers = [
  'analytics',
  'reviews',
  'products',
  'claimed',
  'partners',
  'settings',
];

export default function ContainerHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');

  const pathnameArr = pathname?.split('/');
  const title = pathnameArr[pathnameArr?.length - 1];

  return (
    <div className="flex flex-row items-center justify-between px-[12px] py-[24px]">
      {headers.includes(title) ? (
        <h1 className="text-[30px] md:text-[40px]">
          {t(`dashboard.sidebar.${title}`)}
        </h1>
      ) : (
        <button
          onClick={() => router.back()}
          className="flex items-center font-bold text-gray-200"
        >
          <SfIconChevronLeft />
          {t('dashboard.product.back')}
        </button>
      )}
      <div className="hidden md:flex">
        <UserActions />
      </div>
    </div>
  );
}
