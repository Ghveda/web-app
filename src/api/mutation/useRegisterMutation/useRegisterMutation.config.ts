import { IUserType } from '@/app/layouts/header/auth-modal/register/register.config';

export interface IParams {
  email: string;
  firstName: string;
  lastName: string;
  identificationNumber: string;
  password: string;
  phone: string;
  accountType: IUserType;
}

export interface IUseRegisterMutationResponse {
  message: string;
  user: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    emailVerifiedAt: string;
    createdAt: string;
    updatedAt: string;
    identificationNumber: string;
    phone: string;
    accountType: string;
  };
  authentication: {
    token: string;
    type: string;
  };
}

export interface IUseRegisterMutation {
  onSuccess?: (data: IUseRegisterMutationResponse) => void;
  onError?: () => void;
}
