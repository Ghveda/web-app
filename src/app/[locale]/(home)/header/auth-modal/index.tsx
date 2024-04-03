'use client';
import Modal from '@/components/common/modal';
import { useState } from 'react';

export default function AuthModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <span
        role="button"
        onClick={() => setShowModal(true)}
        className="max-h-[10px] rounded-[5px] border-[1px] border-white p-[5px] font-bold text-white"
      >
        Sign in | up
      </span>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        className="w-[600px]"
      >
        somehting
      </Modal>
    </div>
  );
}
