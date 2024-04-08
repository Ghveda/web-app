import { AxiosError } from 'axios';

interface IResponseErrorData<T extends object = never> {
  message: string;
  errors: Record<string, string[]>;
  additionalFields?: T;
}

export interface IResponseError<T extends object = never> extends AxiosError<IResponseErrorData<T>> { }
