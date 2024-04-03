import Button from '@/components/common/button';
import Input from '@/components/common/input';
import Modal from '@/components/common/modal';

type Props = {
  showModal: boolean;
  onClose: () => void;
  setShowRegisterModal: () => void;
};

export default function Login({
  showModal,
  onClose,
  setShowRegisterModal,
}: Props) {
  const handleRegister = () => {
    onClose();
    setShowRegisterModal();
  };
  return (
    <Modal isOpen={showModal} onClose={() => onClose()} className="w-[600px]">
      <div className="mt-[30px]">
        <h1 className="text-primary-100 text-center text-[20px] font-bold">
          Manage All Your Product Warranties Just for $10 a month!
        </h1>
        <form className="mt-[20px] flex w-full flex-col gap-[16px]">
          <Input variant="secondary" type="email" placeholder="Email" />
          <Input variant="secondary" type="password" placeholder="Password" />
          <Button variant="primary">Login</Button>
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
