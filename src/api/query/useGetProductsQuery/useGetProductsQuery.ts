import { getAllProducts } from '@/services/products';
import { useQuery } from '@tanstack/react-query';
import {
  IUseGetProductsQueryParams,
  IuseGetProductsQueryResponse,
} from './useGetProductsQuery.config';
import { IResponseError } from '@/types/common';

const useGetProductsQuery = (params: IUseGetProductsQueryParams) =>
  useQuery<IuseGetProductsQueryResponse, IResponseError>({
    queryKey: ['useGetProductsQuery'],
    queryFn: () => getAllProducts(params),
  });

export default useGetProductsQuery;
