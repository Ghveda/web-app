'use client';
import { useState } from 'react';
import HeaderDrawer from './header-drawer';
import { BurgerIcon } from '@/components/assets/burger-icon';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function DashboardHeader() {
  const [open, setOpen] = useState(false);
  const { locale } = useParams<{ locale: string }>();

  return (
    <header className="fixed left-0 right-0 top-0 z-10 h-[50px] w-full bg-primary-200 px-[10px] py-[10px] md:hidden">
      <div className="flex flex-row items-center gap-[10px]">
        <button onClick={() => setOpen(true)} className="mt-[10px]">
          <BurgerIcon stroke="white" />
        </button>
        <Link
          href={`/${locale}/dashboard/analytics`}
          className="h-[30px] w-[100px]"
        >
          <img
            className="h-full w-full object-fill"
            src="/images/logo.png"
            alt="Logo"
          />
        </Link>
      </div>
      <HeaderDrawer open={open} setOpen={() => setOpen(false)} />
    </header>
  );
}
