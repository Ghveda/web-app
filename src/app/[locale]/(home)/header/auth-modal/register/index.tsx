'use client';
import Button from '@/components/common/button';
import Input from '@/components/common/input';
import Modal from '@/components/common/modal';
import classNames from 'classnames';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IFormBody, IUserType, Props, schema } from './register.config';
import { useRegisterMutation } from '@/api/mutation/useRegisterMutation';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Register({
  showModal,
  onClose,
  setShowLoginModal,
}: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [registerError, setRegisterError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormBody>({
    resolver: yupResolver(schema),
  });

  const { mutate: registerMutation } = useRegisterMutation({
    onError: () => {
      setRegisterError(true);
    },
  });

  const onSubmit = (body: IFormBody) => {
    registerMutation({
      ...body,
      accountType: !activeTab ? IUserType.INDIVIDUAL : IUserType.CORPORATE,
    });
  };

  const handleLogin = () => {
    onClose();
    setShowLoginModal();
  };

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-[20px] flex w-full flex-col gap-[16px]"
        >
          <Input
            variant="secondary"
            type="text"
            placeholder={activeTab ? 'Company Name' : 'Full Name'}
            {...register('name')}
          />
          <Input
            variant="secondary"
            type="text"
            placeholder="ID Number"
            {...register('identificationNumber')}
          />
          <Input
            variant="secondary"
            type="text"
            placeholder="Phone number"
            {...register('phone')}
          />
          <Input
            variant="secondary"
            type="email"
            placeholder={activeTab ? 'Corporate E-maill' : 'E-mail Adress'}
            {...register('email')}
          />
          <Input
            variant="secondary"
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          {registerError && (
            <span className="text-[14px] text-red-100">
              Email or Id number is taken
            </span>
          )}
          <Button variant="primary" disabled={!isValid}>
            Sign Up
          </Button>
          <span
            role="button"
            className="text-primary-100 inline w-[60px] text-[14px] underline"
            onClick={handleLogin}
          >
            Login
          </span>
        </form>
      </div>
    </Modal>
  );
}
