'use client';
import { useTranslation } from '@/app/i18n/client';
import Button from '@/components/common/button';
import Modal from '@/components/common/modal';
import { useParams } from 'next/navigation';

type Props = {
  showModal: boolean;
  onClose: () => void;
};

export default function AddProductModal({ showModal, onClose }: Props) {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');

  return (
    <Modal isOpen={showModal} onClose={() => onClose()} className="w-[600px]">
      <div className="flex flex-col gap-[20px] p-[20px]">
        <p className="rounded-lg border-[1px] border-gray-200 p-[20px] text-[14px] font-bold text-gray-200">
          {t('dashboard.product.add-document')}
        </p>
        <Button variant="primary" disabled>
          {t('dashboard.product.add')}
        </Button>
      </div>
    </Modal>
  );
}
