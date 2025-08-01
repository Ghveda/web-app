import Button from '@/components/common/button';
import Input from '@/components/common/input';
import Modal from '@/components/common/modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginBody, Props, schema } from './login.config';
import { useState } from 'react';
import { useLoginMutation } from '@/api/mutation/useLoginMutation';
import Cookies from 'js-cookie';
import { useParams, useRouter } from 'next/navigation';
import { useAppContext } from '@/providers/context-provider';
import { useTranslation } from '@/app/i18n/client';

export default function Login({
  showModal,
  onClose,
  setShowRegisterModal,
}: Props) {
  const [loginError, setLoginErro] = useState(false);
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();
  const { setUserData } = useAppContext();

  const { t } = useTranslation(locale, 'translations');

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ILoginBody>({
    resolver: yupResolver(schema),
  });

  const { mutate: loginMutation, isPending: isLoadingLogin } = useLoginMutation(
    {
      onError: () => {
        setLoginErro(true);
      },
      onSuccess: (data) => {
        Cookies.set('accessToken', data.accessToken, {
          expires: data.expiresIn,
        });
        setUserData(data.user);
        router.push(`/${locale}/dashboard/analytics`);
      },
    },
  );

  const handleRegister = () => {
    onClose();
    setShowRegisterModal();
  };

  const onSubmit = (body: ILoginBody) => {
    loginMutation(body);
  };

  return (
    <Modal isOpen={showModal} onClose={() => onClose()} className="w-[600px]">
      <div className="mt-[30px]">
        <h1 className="text-center text-[20px] font-bold text-primary-100">
          {t('auth.manage-warranties')}
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-[20px] flex w-full flex-col gap-[16px]"
        >
          <Input
            variant="secondary"
            type="text"
            placeholder={t('auth.email-or-id')}
            {...register('email')}
          />
          <Input
            variant="secondary"
            type="password"
            placeholder={t('auth.password')}
            {...register('password')}
          />
          {loginError && (
            <span className="text-[14px] text-red-100">
              {t('auth.credentials-are-incorrect')}
            </span>
          )}
          <Button
            variant="primary"
            loading={isLoadingLogin}
            disabled={!isValid}
          >
            {t('auth.login')}
          </Button>
          <span
            role="button"
            className="inline w-[60px] text-[14px] text-primary-100 underline"
            onClick={handleRegister}
          >
            {t('auth.register')}
          </span>
        </form>
      </div>
    </Modal>
  );
}
