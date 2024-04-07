export interface IUseLoginMutationResponse {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
}

export interface IUseLoginMutation {
  onSuccess?: (data: IUseLoginMutationResponse) => void;
  onError?: () => void;
}

export interface IParams {
  password: string;
  email: string;
}
