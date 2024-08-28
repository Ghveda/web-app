'use client';
import { AlertIcon } from '@/components/assets/alert-icon';
import { AvatarIcon } from '@/components/assets/avatar-icon';
import { useAppContext } from '@/providers/context-provider';
import Cookies from 'js-cookie';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function UserActions() {
  const [showUserSettings, setShowUserSettings] = useState(false);
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();

  const { userData, setUserData } = useAppContext();

  // TODO: Implement logout function
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
      <button className="h-[42px] w-[42px] rounded-[4px] border-[1px] border-black">
        EN
      </button>
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
                Settings
              </li>
              <li
                className="cursor-pointer p-[8px] hover:bg-gray-200"
                onClick={handleLogOut}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
