'use client';
import { AlertIcon } from '@/components/assets/alert-icon';
import { AvatarIcon } from '@/components/assets/avatar-icon';
import { useAppContext } from '@/providers/context-provider';
import Cookies from 'js-cookie';
import { useParams, useRouter } from 'next/navigation';

export default function UserActions() {
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();

  const { userData, setUserData } = useAppContext();

  // TODO: Implement logout function
  const handleLogOut = () => {
    setUserData(undefined);
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
      <button
        onClick={() => handleLogOut()}
        className="flex h-[42px] flex-row items-center gap-[8px] rounded-[4px] border-[1px] border-black px-[8px]"
      >
        <AvatarIcon />
        <span className="h-[19px] w-[1px] bg-black" />
        <span>{userData?.name?.split(' ')[0]}</span>
      </button>
    </div>
  );
}
