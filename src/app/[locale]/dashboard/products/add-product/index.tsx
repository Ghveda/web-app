'use client';
import { useState } from 'react';
import AddProductModal from './add-product-modal';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';
import { UploadImageIcon } from '@/components/assets/upload-image';

export default function AddProduct() {
  const [showModal, setShowModal] = useState(false);

  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');

  const handleBoxclick = () => {
    setShowModal(true);
  };

  return (
    <>
      <section
        onClick={handleBoxclick}
        className="col-span-2 flex cursor-pointer items-center justify-center gap-[20px] rounded-[12px] border-[1px] border-black bg-white p-[20px]"
      >
        <UploadImageIcon width={40} height={40} />
        <p className="max-w-[390px] text-[16px] font-bold text-gray-200">
          {t('dashboard.product.add-document')}
        </p>
      </section>
      <AddProductModal
        showModal={showModal}
        onCloseModal={() => setShowModal(false)}
      />
    </>
  );
}
