'use client';
import { useTranslation } from '@/app/i18n/client';
import Button from '@/components/common/button';
import Input from '@/components/common/input';
import { useParams } from 'next/navigation';

export default function ContactUS() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');

  return (
    <form action="" className="flex w-full max-w-[550px] flex-col gap-[16px]">
      <Input
        variant="primary"
        placeholder={t('home.company-name')}
        type="text"
      />
      <Input variant="primary" placeholder={t('home.email')} type="email" />
      <Input
        variant="primary"
        placeholder={t('home.phone-number')}
        type="text"
      />
      <Button onClick={(event) => event.preventDefault()} variant="secondary">
        {t('home.contact-us')}
      </Button>
    </form>
  );
}
