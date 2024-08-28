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

export default function Login({
  showModal,
  onClose,
  setShowRegisterModal,
}: Props) {
  const [loginError, setLoginErro] = useState(false);
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();

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
          Manage All Your Product Warranties
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-[20px] flex w-full flex-col gap-[16px]"
        >
          <Input
            variant="secondary"
            type="text"
            placeholder="Email or ID"
            {...register('email')}
          />
          <Input
            variant="secondary"
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          {loginError && (
            <span className="text-[14px] text-red-100">
              Credentials are incorrect
            </span>
          )}
          <Button
            variant="primary"
            loading={isLoadingLogin}
            disabled={!isValid}
          >
            Login
          </Button>
          <span
            role="button"
            className="inline w-[60px] text-[14px] text-primary-100 underline"
            onClick={handleRegister}
          >
            Register
          </span>
        </form>
      </div>
    </Modal>
  );
}
