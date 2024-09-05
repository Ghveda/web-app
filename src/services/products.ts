import { axiosIntance } from '@/api/axios';
import { IUseAddProductMutationParams } from '@/api/mutation/useAddProductMutation/useAddProductMutation.config';
import { IuseGetProductsQueryResponse } from '@/api/query/useGetProductsQuery/useGetProductsQuery.config';
import { transformKeysToCamelCase } from '@/utils/formatData';

export const getAllProducts = async () => {
  const { data } =
    await axiosIntance.get<IuseGetProductsQueryResponse>('warranty/list');

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
