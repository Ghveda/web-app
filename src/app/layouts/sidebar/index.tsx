'use client';
import ActiveItem from './active-item';
import ClaimedIcon from '@/components/assets/claimed-icon';
import PartnersIcon from '@/components/assets/partners-icon';
import ProductsIcon from '@/components/assets/products-icon';
import SettingsIcon from '@/components/assets/settings-icon';
import AnalyticsIcon from '@/components/assets/analytics-icon';
import Reviews from '@/components/assets/reviews-icon';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';
import Link from 'next/link';

export default function SideBar() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');

  const menuItems = [
    {
      id: 1,
      title: t('dashboard.sidebar.analytics'),
      href: 'dashboard/analytics',
      icon: <AnalyticsIcon width={20} height={20} />,
    },
    {
      id: 2,
      title: t('dashboard.sidebar.reviews'),
      href: 'dashboard/reviews',
      icon: <Reviews width={20} height={20} />,
    },
    {
      id: 3,
      title: t('dashboard.sidebar.products'),
      href: 'dashboard/products',
      icon: <ProductsIcon width={20} height={20} />,
    },
    {
      id: 4,
      title: t('dashboard.sidebar.claimed'),
      href: 'dashboard/claimed',
      icon: <ClaimedIcon width={20} height={20} />,
    },
    {
      id: 5,
      title: t('dashboard.sidebar.partners'),
      href: 'dashboard/partners',
      icon: <PartnersIcon width={20} height={20} />,
    },
    {
      id: 6,
      title: t('dashboard.sidebar.settings'),
      href: 'dashboard/settings',
      icon: <SettingsIcon width={20} height={20} />,
    },
  ];

  return (
    <aside className="hidden flex-col items-center md:flex md:px-[40px] xl:px-[60px]">
      <Link
        href={`/${locale}/dashboard/analytics`}
        className="mt-[20px] flex h-[40px] justify-center md:h-[30px] md:w-[130px] xl:h-[46px] xl:w-[160px]"
      >
        <img
          className="h-full w-full object-fill"
          src="/assets/images/logo.png"
          alt="Logo"
        />
      </Link>
      <ul className="mt-[100px]">
        {menuItems.map((menuItem) => (
          <li key={menuItem.id} className="mt-[30px]">
            <ActiveItem href={menuItem.href}>
              <div className="flex flex-row items-center gap-[8px]">
                {menuItem.icon}
                <span className="text-[18px]">{menuItem.title}</span>
              </div>
            </ActiveItem>
          </li>
        ))}
      </ul>
    </aside>
  );
}
