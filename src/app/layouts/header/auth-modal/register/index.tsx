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
import Cookies from 'js-cookie';
import { useParams, useRouter } from 'next/navigation';
import { useAppContext } from '@/providers/context-provider';
import { useTranslation } from '@/app/i18n/client';

export default function Register({
  showModal,
  onClose,
  setShowLoginModal,
}: Props) {
  const [activeTab, _] = useState(0);
  const [registerError, setRegisterError] = useState(false);

  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();
  const { setUserData } = useAppContext();

  const { t } = useTranslation(locale, 'translations');

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormBody>({
    resolver: yupResolver(schema),
  });

  const { mutate: registerMutation, isPending: isLoadingRegister } =
    useRegisterMutation({
      onError: () => {
        setRegisterError(true);
      },
      onSuccess: (data) => {
        Cookies.set('accessToken', data.authentication.token, {
          expires: 36000,
        });
        router.push(`/${locale}/dashboard/analytics`);
        setUserData(data.user);
      },
    });

  const onSubmit = (body: IFormBody) => {
    registerMutation({
      ...body,
      accountType: !activeTab ? IUserType.INDIVIDUAL : IUserType.CORPORATE,
    });
  };

  const handleCloseModal = () => {
    reset();
    onClose();
  };

  const handleLogin = () => {
    handleCloseModal();
    setShowLoginModal();
  };

  const spanStyle =
    'text-primary-100 flex-1 text-[20px] text-center p-[10px] rounded-tl-[8px] rounded-tr-[8px]';
  return (
    <Modal isOpen={showModal} onClose={handleCloseModal} className="w-[600px]">
      <div className="mt-[30px]">
        <h1 className="text-center text-[20px] font-bold text-primary-100">
          {t('auth.register-title')}
        </h1>
        {/* <div className="mt-[20px] flex flex-row items-center border-b-[1px] border-primary-100">
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
        </div> */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-[20px] flex w-full flex-col gap-[16px]"
        >
          <Input
            variant="secondary"
            type="text"
            placeholder={t('auth.firstname')}
            {...register('firstname')}
          />
          <Input
            variant="secondary"
            type="text"
            placeholder={t('auth.lastname')}
            {...register('lastname')}
          />
          <Input
            variant="secondary"
            type="number"
            placeholder={t('auth.id-number')}
            error={errors?.identificationNumber?.message}
            {...register('identificationNumber')}
          />
          <Input
            variant="secondary"
            type="number"
            placeholder={t('auth.phone-number')}
            error={errors?.phone?.message}
            {...register('phone')}
          />
          <Input
            variant="secondary"
            type="email"
            placeholder={
              activeTab ? t('auth.corporate-email') : t('auth.email-adress')
            }
            {...register('email')}
          />
          <Input
            variant="secondary"
            type="password"
            placeholder={t('auth.password')}
            {...register('password')}
          />
          {registerError && (
            <span className="text-[14px] text-red-100">
              {t('auth.already-registered')}
            </span>
          )}
          <Button
            variant="primary"
            loading={isLoadingRegister}
            // disabled={!isValid}
          >
            {t('auth.sign-up')}
          </Button>
          <span
            role="button"
            className="inline w-[60px] text-[14px] text-primary-100 underline"
            onClick={handleLogin}
          >
            {t('auth.login')}
          </span>
        </form>
      </div>
    </Modal>
  );
}
