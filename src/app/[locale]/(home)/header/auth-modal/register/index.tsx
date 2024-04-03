'use client';
import Button from '@/components/common/button';
import Input from '@/components/common/input';
import Modal from '@/components/common/modal';
import classNames from 'classnames';
import { useState } from 'react';

type Props = {
  showModal: boolean;
  onClose: () => void;
};
export default function Register({ showModal, onClose }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const spanStyle =
    'text-primary-100 flex-1 text-[20px] text-center p-[10px] rounded-tl-[8px] rounded-tr-[8px]';
  return (
    <Modal isOpen={showModal} onClose={onClose} className="w-[600px]">
      <div className="mt-[30px]">
        <h1 className="text-primary-100 text-center text-[20px] font-bold">
          Manage All Your Product Warranties Just for $10 a month!
        </h1>
        <div className="border-primary-100 mt-[20px] flex flex-row items-center border-b-[1px]">
          <div
            role="button"
            onClick={() => setActiveTab(0)}
            className={classNames(spanStyle, {
              'bg-primary-100 text-white': !activeTab,
            })}
          >
            Individual
          </div>
          <div
            role="button"
            onClick={() => setActiveTab(1)}
            className={classNames(spanStyle, {
              'bg-primary-100 text-white': activeTab,
            })}
          >
            Corporate
          </div>
        </div>
        <form className="mt-[20px] flex w-full flex-col gap-[16px]">
          <Input
            variant="secondary"
            type="text"
            placeholder={activeTab ? 'Company Name' : 'Full Name'}
          />
          <Input variant="secondary" type="text" placeholder="ID Number" />
          <Input variant="secondary" type="text" placeholder="Phone number" />
          <Input
            variant="secondary"
            type="email"
            placeholder={activeTab ? 'Corporate E-maill' : 'E-mail Adress'}
          />
          <Input variant="secondary" type="password" placeholder="Password" />
          <Button variant="primary">Sign Up</Button>
        </form>
      </div>
    </Modal>
  );
}
