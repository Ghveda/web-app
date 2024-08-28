import { Dispatch, ReactNode, SetStateAction } from 'react';

export type Props = {
  children: ReactNode;
};

export type UserData = {
  firstname: string;
  lastname: string;
  accountType: string;
  createdAt: string;
  email: string;
  emailVerifiedAt: string;
  id: number;
  identificationNumber: string;
  phone: string;
  updatedAt: string;
};

export type IAppContext = {
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData | undefined>>;
};
