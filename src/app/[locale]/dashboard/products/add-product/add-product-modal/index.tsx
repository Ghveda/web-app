'use client';
import Button from '@/components/common/button';
import Modal from '@/components/common/modal';

type Props = {
  showModal: boolean;
  onClose: () => void;
};

export default function AddProductModal({ showModal, onClose }: Props) {
  return (
    <Modal isOpen={showModal} onClose={() => onClose()} className="w-[600px]">
      <div className="flex flex-col gap-[20px] p-[20px]">
        <p className="rounded-lg border-[1px] border-gray-200 p-[20px] text-[14px] font-bold text-gray-200">
          Add a Photo/Document of your warranty paper here, and AI will convert
          it into digital format! PDF, JPG, PNG are allowed.
        </p>
        <Button variant="primary" disabled>
          Add
        </Button>
      </div>
    </Modal>
  );
}
