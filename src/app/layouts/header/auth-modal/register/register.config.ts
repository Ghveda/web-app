import * as yup from 'yup';

export type Props = {
  showModal: boolean;
  onClose: () => void;
  setShowLoginModal: () => void;
};

export interface IFormBody {
  firstname: string;
  lastname: string;
  email: string;
  identificationNumber: string;
  password: string;
  phone: string;
}

export enum IUserType {
  CORPORATE = 'corporate',
  INDIVIDUAL = 'individual',
}

export const schema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  identificationNumber: yup
    .string()
    .matches(/^\d{11}$/, 'Identification must be 11 symbols and only digits')
    .required(),
  password: yup.string().required(),
  phone: yup
    .string()
    .matches(/^\d{9}$/, 'Phone number must be 9 symbols and only digits')
    .required(),
});
