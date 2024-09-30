'use client';
import { useAddProductMutation } from '@/api/mutation/useAddProductMutation';
import { useUploadProductMutation } from '@/api/mutation/useUploadProductMutation';
import { useTranslation } from '@/app/i18n/client';
import { UploadImageIcon } from '@/components/assets/upload-image';
import Button from '@/components/common/button';
import Input from '@/components/common/input';
import Modal from '@/components/common/modal';
import { IFile } from '@/types/models';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'next/navigation';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { schema } from './add-product-modal.config';
import ImageCard from './image-card';

type Props = {
  showModal: boolean;
  onCloseModal: () => void;
};

export default function AddProductModal({ showModal, onCloseModal }: Props) {
  const [images, setImages] = useState<IFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');

  const {
    reset,
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleModalClose = () => {
    reset();
    setImages([]);
    onCloseModal();
  };

  const { mutate: addProduct, isPending: addProductIsLoading } =
    useAddProductMutation({
      onSuccess: () => {
        handleModalClose();
      },
    });

  const { mutate: uploadProduct } = useUploadProductMutation({
    onSuccess: (data) => {
      setImages((prev) => [...prev, data]);
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
    }
  };

  const handleDeleteImage = (imgAddress: string) => {
    setImages((prev) => [
      ...prev.filter((image) => image.address !== imgAddress),
    ]);
  };

  const onSubmit = (body: any) => {
    const payload = {
      title: body.title,
      files: images,
    };

    addProduct(payload);
  };

  return (
    <Modal isOpen={showModal} onClose={handleModalClose} className="w-[600px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[20px] p-[20px]"
      >
        <Input
          placeholder={t('dashboard.product.warranty-title')}
          {...register('title')}
          required
        />
        <div
          onClick={handleUploadClick}
          className="flex cursor-pointer flex-row items-center gap-[20px] rounded-lg border-[1px] border-gray-200 p-[20px] text-[14px] font-bold text-gray-200"
        >
          <UploadImageIcon
            width={25}
            height={25}
            fill="rgb(173,173,173, 0.68)"
            className="shrink-0"
          />
          <p>{t('dashboard.product.add-document')}</p>
        </div>
        <input
          onChange={handleInputChange}
          className="hidden"
          type="file"
          ref={fileInputRef}
        />
        <div className="flex flex-row gap-2 overflow-x-auto py-3">
          {images.map((imageItem) => (
            <ImageCard
              deleteImage={() => handleDeleteImage(imageItem.address)}
              imgUrl={`https://warrio.ge/files/${imageItem?.address}`}
            />
          ))}
        </div>
        <Button
          loading={addProductIsLoading}
          disabled={!isValid || !images.length}
          variant="primary"
        >
          {t('dashboard.product.upload-warranty')}
        </Button>
      </form>
    </Modal>
  );
}
