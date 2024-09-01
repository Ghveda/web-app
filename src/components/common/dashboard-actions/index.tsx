'use client';
import { useTranslation } from '@/app/i18n/client';
import { AlertIcon } from '@/components/assets/alert-icon';
import { AvatarIcon } from '@/components/assets/avatar-icon';
import { useAppContext } from '@/providers/context-provider';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function UserActions() {
  const [showUserSettings, setShowUserSettings] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');

  const { userData, setUserData } = useAppContext();

  const handleLogOut = () => {
    setUserData(undefined);
    setShowUserSettings(false);
    Cookies.remove('accessToken');
    router.push(`/${locale}`);
  };

  return (
    <div className="flex items-center gap-[18px]">
      <button className="h-[42px] w-[42px] rounded-[4px] border-[1px] border-black">
        <AlertIcon
          width={40}
          height={40}
          fill="transparent"
          iconColor="#000000"
        />
      </button>
      <Link
        href={
          locale === 'en'
            ? `/ka${pathname.slice(3)}`
            : `/en${pathname.slice(3)}`
        }
      >
        <span className="hidden h-[42px] max-h-[10px] w-[42px] rounded-[4px] border-[1px] border-black p-[10px] text-[700] md:inline">
          {locale?.toLocaleUpperCase()}
        </span>
      </Link>
      <div className="relative">
        <button
          onClick={() => setShowUserSettings(!showUserSettings)}
          className="flex h-[42px] flex-row items-center gap-[8px] rounded-[4px] border-[1px] border-black px-[8px]"
        >
          <AvatarIcon />
          <span className="h-[19px] w-[1px] bg-black" />
          <span>{userData?.firstname}</span>
        </button>
        {showUserSettings && (
          <div className="absolute right-0 top-[40px] flex justify-center rounded-[4px] border-[1px] border-black bg-gray-100">
            <ul>
              <li
                className="cursor-pointer p-[8px] hover:bg-gray-200"
                onClick={() => router.push(`/${locale}/dashboard/settings`)}
              >
                {t('common.settings')}
              </li>
              <li
                className="cursor-pointer p-[8px] hover:bg-gray-200"
                onClick={handleLogOut}
              >
                {t('common.logout')}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
