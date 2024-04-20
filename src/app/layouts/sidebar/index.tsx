import { AlertIcon } from '@/components/assets/alert-icon';
import ActiveItem from './active-item';
import ClaimedIcon from '@/components/assets/claimed-icon';
import PartnersIcon from '@/components/assets/partners-icon';
import ProductsIcon from '@/components/assets/products-icon';
import SettingsIcon from '@/components/assets/settings-icon';
import AnalyticsIcon from '@/components/assets/analytics-icon';
import Reviews from '@/components/assets/reviews-icon';

export default function SideBar() {
  const menuItems = [
    {
      id: 1,
      title: 'Analytics',
      href: 'dashboard/analytics',
      icon: <AnalyticsIcon width={20} height={20} />,
    },
    {
      id: 2,
      title: 'Reviews',
      href: 'dashboard/reviews',
      icon: <Reviews width={20} height={20} />,
    },
    {
      id: 3,
      title: 'Products',
      href: 'dashboard/products',
      icon: <ProductsIcon width={20} height={20} />,
    },
    {
      id: 4,
      title: 'Claimed',
      href: 'dashboard/claimed',
      icon: <ClaimedIcon width={20} height={20} />,
    },
    {
      id: 5,
      title: 'Partners',
      href: 'dashboard/partners',
      icon: <PartnersIcon width={20} height={20} />,
    },
    {
      id: 6,
      title: 'Settings',
      href: 'dashboard/settings',
      icon: <SettingsIcon width={20} height={20} />,
    },
  ];

  return (
    <aside className="flex flex-col items-center">
      <div className="flex h-[40px]  w-[230px] justify-center px-[40px]">
        <img
          className="h-full w-full object-fill"
          src="/images/logo.png"
          alt="Logo"
        />
      </div>
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
