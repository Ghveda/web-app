'use client';
import { useTranslation } from '@/app/i18n/client';
import classNames from 'classnames';
import { useParams } from 'next/navigation';

type Props = {
  amount: number;
  title: string;
  border: boolean;
};

export default function PartnersInfomation({ amount, title, border }: Props) {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');

  return (
    <div
      className={classNames(
        {
          'border-b-[1px] border-white lg:border-b-0 lg:border-r-[1px]': border,
        },
        'flex shrink-0 flex-col items-center px-[50px] py-[40px]',
      )}
    >
      <span className="text-[30px] font-bold text-white">{`${amount}+`}</span>
      <span className="text-center text-[30px] font-[100] text-white">
        {t(title)}
      </span>
    </div>
  );
}
