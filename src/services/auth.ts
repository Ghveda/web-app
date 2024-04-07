import { axiosIntance } from "@/api/axios";

export const loginService = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  const response = await axiosIntance.post<any>('auth/login', {
    email,
    password,
  });

  return response;
};