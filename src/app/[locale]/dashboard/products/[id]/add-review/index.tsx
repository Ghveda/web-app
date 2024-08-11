'use client';
import Button from '@/components/common/button';
import { SfRatingButton } from '@storefront-ui/react';
import { useId, useState } from 'react';

export default function AddReview() {
  const [rating, setRating] = useState(0);
  const labelId = useId();

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-row items-center gap-[10px]">
        <span>Rate & Review:</span>
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
          placeholder="We'd love to hear about your experience with this product. Please leave us a review! Your comment will be shared with others on the review page, but your anonymity will be protected."
        />
      </div>
      <Button
        variant="primary"
        className="h-[30px] bg-primary-50 py-[3px] md:w-[180px]"
      >
        Leave a Comment
      </Button>
    </div>
  );
}
