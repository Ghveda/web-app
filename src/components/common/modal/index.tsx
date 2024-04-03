'use client';
import { ReactNode } from 'react';
import { SfModal } from '@storefront-ui/react';
import classNames from 'classnames';
import CloseIcon from '@/components/assets/close-icon';

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
  return (
    <SfModal
      open={isOpen}
      className={classNames(className, 'max-w-[90%] border-0 md:max-w-lg')}
      as="section"
      role="alertdialog"
      aria-labelledby="promoModalTitle"
      aria-describedby="promoModalDesc"
    >
      <div className="bg-primary-100 absolute left-0 top-0 flex w-full justify-center rounded-tl-[10px] rounded-tr-[10px] py-[10px]">
        <div className="w-[100px] overflow-hidden">
          <img
            alt=""
            src="/images/logo.png"
            className="h-full w-full object-cover"
          />
        </div>
        <button
          onClick={() => onClose()}
          className="absolute right-[10px] top-[10px]"
        >
          <CloseIcon width={30} height={30} fill="white" />
        </button>
      </div>
      <div>{children}</div>
    </SfModal>
  );
}
