import Button from '@/components/common/button';
import Input from '@/components/common/input';
import Modal from '@/components/common/modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginBody, Props, schema } from './login.config';
import { useState } from 'react';
import { useLoginMutation } from '@/api/mutation/useLoginMutation';

export default function Login({
  showModal,
  onClose,
  setShowRegisterModal,
}: Props) {
  const [loginError, setLoginErro] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ILoginBody>({
    resolver: yupResolver(schema),
  });

  const { mutate: loginMutation } = useLoginMutation({
    onError: () => {
      setLoginErro(true);
    },
  });

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
        <h1 className="text-primary-100 text-center text-[20px] font-bold">
          Manage All Your Product Warranties Just for $10 a month!
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-[20px] flex w-full flex-col gap-[16px]"
        >
          <Input
            variant="secondary"
            type="email"
            placeholder="Email"
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
              Email or Password is incorrect
            </span>
          )}
          <Button variant="primary" disabled={!isValid}>
            Login
          </Button>
          <span
            role="button"
            className="text-primary-100 inline w-[60px] text-[14px] underline"
            onClick={handleRegister}
          >
            Register
          </span>
        </form>
      </div>
    </Modal>
  );
}
