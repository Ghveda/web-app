import * as yup from 'yup';

export type Props = {
  showModal: boolean;
  onClose: () => void;
  setShowLoginModal: () => void;
};

export interface IFormBody {
  email: string;
  identificationNumber: string;
  name: string;
  password: string;
  phone: string;
}

export enum IUserType {
  CORPORATE = 'corporate',
  INDIVIDUAL = 'individual'
}

export const schema = yup.object({
  email: yup.string().email().required(),
  identificationNumber: yup.string().required(),
  name: yup.string().required(),
  password: yup.string().required(),
  phone: yup.string().required()
})
