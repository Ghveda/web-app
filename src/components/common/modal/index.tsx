'use client';
import { ReactNode, useEffect, useState } from 'react';
import { SfModal } from '@storefront-ui/react';
import classNames from 'classnames';
import CloseIcon from '@/components/assets/close-icon';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
  onClose: () => void;
};

export default function Modal({
  children,
  isOpen,
  className = '',
  onClose,
}: Props) {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.body;
    setModalRoot(root);
  }, []);

  if (!modalRoot) {
    return null;
  }
  return createPortal(
    <>
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-20 h-full w-full backdrop-blur-sm" />
      )}
      <SfModal
        open={isOpen}
        className={classNames(
          className,
          'z-30 max-w-[90%] border-0 md:max-w-lg',
        )}
        as="section"
        role="alertdialog"
        aria-labelledby="promoModalTitle"
        aria-describedby="promoModalDesc"
      >
        <div className="absolute left-0 top-0 flex w-full justify-center rounded-tl-[10px] rounded-tr-[10px] bg-primary-100 py-[10px]">
          <div className="w-[100px] overflow-hidden">
            <img
              alt=""
              src="/assets/images/logo.png"
              className="h-full w-full object-cover"
            />
          </div>
          <button
            onClick={onClose}
            className="absolute right-[10px] top-[10px]"
          >
            <CloseIcon width={30} height={30} fill="white" />
          </button>
        </div>
        <div>{children}</div>
      </SfModal>
    </>,
    modalRoot!,
  );
}
