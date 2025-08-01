'use client';
import { SfDrawer, useTrapFocus } from '@storefront-ui/react';
import { useRef } from 'react';
import classNames from 'classnames';
import UserActions from '@/components/common/dashboard-actions';
import ClaimedIcon from '@/components/assets/claimed-icon';
import PartnersIcon from '@/components/assets/partners-icon';
import ProductsIcon from '@/components/assets/products-icon';
import SettingsIcon from '@/components/assets/settings-icon';
import AnalyticsIcon from '@/components/assets/analytics-icon';
import Reviews from '@/components/assets/reviews-icon';
import ActiveItem from '../../sidebar/active-item';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

type Props = {
  open: boolean;
  setOpen: () => void;
};

export default function HeaderDrawer({ open, setOpen }: Props) {
  const drawerRef = useRef(null);
  useTrapFocus(drawerRef, { activeState: open });

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
    <SfDrawer
      ref={drawerRef}
      open={open}
      placement="left"
      onClose={setOpen}
      className={classNames(
        'max-w-[370px] translate-x-0 border border-gray-300 bg-neutral-50 p-[16px] transition duration-500 ease-in-out',
      )}
    >
      <UserActions />
      <ul className="mt-[100px]">
        {menuItems.map((menuItem) => (
          <li key={menuItem.id} className="mt-[10px] md:mt-[30px]">
            <ActiveItem href={menuItem.href}>
              <div className="flex flex-row items-center gap-[8px]">
                {menuItem.icon}
                <span className="text-[18px]">{menuItem.title}</span>
              </div>
            </ActiveItem>
          </li>
        ))}
      </ul>
    </SfDrawer>
  );
}
