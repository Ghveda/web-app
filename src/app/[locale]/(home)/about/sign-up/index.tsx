'use client';
import { useAppContext } from '@/providers/context-provider';

type Params = {
  signUpNow: string;
};

export default function SignUp({ signUpNow }: Params) {
  const { setShowRegistrationModal } = useAppContext();

  return (
    <button
      onClick={() => setShowRegistrationModal(true)}
      className="mb-[80px] mt-[80px] max-w-[250px] rounded-[10px] bg-yellow-400 px-[12px] py-[8px] text-[24px] uppercase text-white"
    >
      {signUpNow}
    </button>
  );
}
