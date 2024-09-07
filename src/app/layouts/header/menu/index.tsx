'use client';
import { useTranslation } from '@/app/i18n/client';
import MenuItem from './menu-item';
import { useParams, usePathname } from 'next/navigation';

export default function Menu() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');
  const pathname = usePathname();

  if (pathname !== `/${locale}`) {
    return null;
  }

  return (
    <div className="hidden lg:block">
      <ul className="flex flex-row gap-[50px] align-top">
        <MenuItem text={t('home.about')} elementId="about" />
        <MenuItem text={t('home.features')} elementId="features" />
        <MenuItem text={t('home.partners')} elementId="partners" />
        <MenuItem text={t('home.contact')} elementId="about-us" />
      </ul>
    </div>
  );
}
