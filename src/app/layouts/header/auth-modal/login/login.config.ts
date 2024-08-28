import * as yup from 'yup';

export const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export type Props = {
  showModal: boolean;
  onClose: () => void;
  setShowRegisterModal: () => void;
};

export interface ILoginBody {
  email: string;
  password: string;
}
