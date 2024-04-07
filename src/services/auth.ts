import { axiosIntance } from "@/api/axios";
import { IParams, IUseLoginMutationResponse } from "@/api/mutation/useLoginMutation/useLoginMutation.config";
import { IUseRegisterMutationResponse } from "@/api/mutation/useRegisterMutation/useRegisterMutation.config";
import { transformKeysToCamelCase } from "@/utils/formatData";

export const loginService = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  const { data } = await axiosIntance.post<IUseLoginMutationResponse>('auth/login', {
    email,
    password,
  });

  return transformKeysToCamelCase(data);
};

export const registerService = async (params: IParams) => {
  const { data } = await axiosIntance.post<IUseRegisterMutationResponse>('auth/register', {
    ...params,
  });

  return transformKeysToCamelCase(data);
}