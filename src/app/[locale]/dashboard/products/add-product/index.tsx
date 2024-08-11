'use client';
import { useState } from 'react';
import AddProductModal from './add-product-modal';

export default function AddProduct() {
  const [showModal, setShowModal] = useState(false);

  const handleBoxclick = () => {
    setShowModal(true);
  };

  return (
    <section
      onClick={handleBoxclick}
      className="col-span-2 flex cursor-pointer items-center justify-center rounded-[12px] border-[1px] border-black bg-white p-[20px]"
    >
      <img src="./as" alt="" />
      <p className="max-w-[390px] text-[16px] font-bold text-gray-200">
        Add a Photo/Document of your warranty paper here, and AI will convert it
        into digital format! PDF, JPG, PNG are allowed.
      </p>
      <AddProductModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </section>
  );
}
