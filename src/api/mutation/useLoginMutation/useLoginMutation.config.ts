export interface IUser {
  accountType: string;
  createdAt: string;
  email: string;
  emailVerifiedAt: string;
  firstName: string;
  id: number;
  identificationNumber: string;
  isAdmin: number;
  lastName: string;
  name: string;
  phone: string;
  updatedAt: string;
  firstname: string;
  lastname: string;
}
export interface IUseLoginMutationResponse {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
  user: IUser;
}

export interface IUseLoginMutation {
  onSuccess?: (data: IUseLoginMutationResponse) => void;
  onError?: () => void;
}

export interface IParams {
  password: string;
  email: string;
}
