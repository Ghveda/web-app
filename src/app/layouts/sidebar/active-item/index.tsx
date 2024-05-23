'use client';
import classNames from 'classnames';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode | string;
  className?: string;
};
export default function ActiveItem({ children, href, className }: Props) {
  const { locale } = useParams<{ locale: string }>();
  const pathname = usePathname();

  const navigateLink = `/${locale}/${href}`;
  return (
    <Link
      href={navigateLink}
      className={classNames(
        'text-primary-200 opacity-50 md:text-white',
        { '!opacity-100': navigateLink === pathname },
        className,
      )}
    >
      {children}
    </Link>
  );
}
