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
      <section className="col-span-2 flex flex-col items-center justify-center gap-[20px] rounded-[12px] p-[20px]">
        <p>{t('dashboard.product.upload-desc')}</p>
        <div
          onClick={handleBoxclick}
          className="flex h-[50px] cursor-pointer flex-row items-center  justify-center gap-[10px] rounded-md bg-primary-100 px-[10px]"
        >
          <div className="flex h-full items-center justify-center border-r-[2px] border-white px-[8px]">
            <UploadImageIcon width={25} height={25} fill="white" />
          </div>
          <span className="text-white">
            {t('dashboard.product.add-warranty')}
          </span>
        </div>
      </section>
      <AddProductModal
        showModal={showModal}
        onCloseModal={() => setShowModal(false)}
      />
    </>
  );
}
