'use client';
import { useTranslation } from '@/app/i18n/client';
import Button from '@/components/common/button';
import { SfRatingButton } from '@storefront-ui/react';
import { useParams } from 'next/navigation';
import { useId, useState } from 'react';

export default function AddReview() {
  const [rating, setRating] = useState(0);
  const labelId = useId();

  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-row items-center gap-[10px]">
        <span>{t('dashboard.product.rate-review')}</span>
        <div>
          <SfRatingButton
            value={rating}
            onChange={setRating}
            className="[&>label>svg]:!text-primary-50"
            aria-labelledby={labelId}
          />
        </div>
      </div>
      <div>
        <textarea
          className="w-full rounded-[8px] border-[1px] p-[8px] outline-none"
          placeholder={t('dashboard.product.comment-placeholder')}
        />
      </div>
      <Button
        variant="primary"
        className="h-[30px] bg-primary-50 py-[3px] md:w-[180px]"
      >
        {t('dashboard.product.leave-comment')}
      </Button>
    </div>
  );
}
