'use client';
import { useAddProductMutation } from '@/api/mutation/useAddProductMutation';
import { useUploadProductMutation } from '@/api/mutation/useUploadProductMutation';
import { useTranslation } from '@/app/i18n/client';
import Button from '@/components/common/button';
import Modal from '@/components/common/modal';
import { useParams } from 'next/navigation';
import { useRef } from 'react';

type Props = {
  showModal: boolean;
  onClose: () => void;
};

export default function AddProductModal({ showModal, onClose }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');

  const { mutate: addProduct } = useAddProductMutation({});

  const { mutate: uploadProduct } = useUploadProductMutation({
    onSuccess: (data) => {
      const payload = {
        files: [data],
      };

      addProduct(payload);
    },
  });

  const handleUploadClick = () => {
    fileInputRef?.current?.click();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      uploadProduct(formData);
      onClose();
    }
  };

  return (
    <Modal isOpen={showModal} onClose={onClose} className="w-[600px]">
      <div className="flex flex-col gap-[20px] p-[20px]">
        <p
          onClick={handleUploadClick}
          className="rounded-lg border-[1px] border-gray-200 p-[20px] text-[14px] font-bold text-gray-200"
        >
          {t('dashboard.product.add-document')}
        </p>
        <input
          onChange={handleInputChange}
          className="hidden"
          type="file"
          ref={fileInputRef}
        />
        <Button variant="primary" disabled type="submit">
          {t('dashboard.product.add')}
        </Button>
      </div>
    </Modal>
  );
}
