export interface IUseLoginMutation {
  onSuccess?: () => void;
  onError?: () => void;
}

export interface IParams {
  password: string;
  email: string;
}
