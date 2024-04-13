import { Dispatch, ReactNode, SetStateAction } from "react";

export type Props = {
  children: ReactNode;
};

export type UserData = {
  accountType: string;
  createdAt: string;
  email: string;
  emailVerifiedAt: string
  id: number;
  identificationNumber: string;
  name: string;
  phone: string;
  updatedAt: string
}

export type IAppContext = {
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData | undefined>>;
}
