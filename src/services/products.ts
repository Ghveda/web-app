import { axiosIntance } from '@/api/axios';
import { IUseAddProductMutationParams } from '@/api/mutation/useAddProductMutation/useAddProductMutation.config';
import {
  IUseGetProductsQueryParams,
  IuseGetProductsQueryResponse,
} from '@/api/query/useGetProductsQuery/useGetProductsQuery.config';
import { transformKeysToCamelCase } from '@/utils/formatData';

export const getAllProducts = async ({
  page = 1,
  limit = 10,
}: IUseGetProductsQueryParams) => {
  const { data } = await axiosIntance.get<IuseGetProductsQueryResponse>(
    `warranty/list?limit=${limit}&page=${page}`,
  );

  return transformKeysToCamelCase(data);
};

export const uploadProduct = async (params: FormData) => {
  const { data } = await axiosIntance.post<any>('warranty/upload', params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return transformKeysToCamelCase(data);
};

export const addProduct = async (params: IUseAddProductMutationParams) => {
  const { data } = await axiosIntance.post<any>('warranty/add', params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return transformKeysToCamelCase(data);
};
