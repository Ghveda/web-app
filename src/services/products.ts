import { axiosIntance } from '@/api/axios';
import { IUseAddProductMutationParams } from '@/api/mutation/useAddProductMutation/useAddProductMutation.config';
import { IUseGetProductQueryResponse } from '@/api/query/useGetProductQuery/useGetProductQuery.config';
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

export const getProduct = async (productId: number) => {
  const { data } = await axiosIntance.get<IUseGetProductQueryResponse>(
    `warranty/list/${productId}`,
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

export const deleteProduct = async (productId: number) => {
  const { data } = await axiosIntance.delete<IUseGetProductQueryResponse>(
    `warranty/list/${productId}`,
  );

  return transformKeysToCamelCase(data);
};
