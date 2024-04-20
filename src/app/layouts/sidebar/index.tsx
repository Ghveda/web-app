import { AlertIcon } from '@/components/assets/alert-icon';
import ActiveItem from './active-item';

export default function SideBar() {
  const menuItems = [
    {
      id: 1,
      title: 'Analytics',
      href: 'dashboard/analytics',
      icon: <AlertIcon width={32} height={32} />,
    },
    {
      id: 2,
      title: 'Reviews',
      href: 'dashboard/reviews',
      icon: <AlertIcon width={32} height={32} />,
    },
    {
      id: 3,
      title: 'Products',
      href: 'dashboard/products',
      icon: <AlertIcon width={32} height={32} />,
    },
    {
      id: 4,
      title: 'Claimed',
      href: 'dashboard/claimed',
      icon: <AlertIcon width={32} height={32} />,
    },
    {
      id: 5,
      title: 'Partners',
      href: 'dashboard/partners',
      icon: <AlertIcon width={32} height={32} />,
    },
    {
      id: 6,
      title: 'Settings',
      href: 'dashboard/settings',
      icon: <AlertIcon width={32} height={32} />,
    },
  ];

  return (
    <aside>
      <div className="h-[50px] w-[200px]  lg:h-[60px] lg:w-[270px]">
        <img
          className="h-full w-full object-fill"
          src="images/logo.png"
          alt="Logo"
        />
      </div>
      <ul className="mt-[100px]">
        {menuItems.map((menuItem) => (
          <li key={menuItem.id} className="mt-[30px]">
            <ActiveItem href={menuItem.href}>
              <div className="flex flex-row items-center gap-[6px]">
                {menuItem.icon}
                <span>{menuItem.title}</span>
              </div>
            </ActiveItem>
          </li>
        ))}
      </ul>
    </aside>
  );
}
