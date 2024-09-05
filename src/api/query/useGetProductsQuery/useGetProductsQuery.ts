import { getAllProducts } from '@/services/products';
import { useQuery } from '@tanstack/react-query';
import { IuseGetProductsQueryResponse } from './useGetProductsQuery.config';
import { IResponseError } from '@/types/common';

const useGetProductsQuery = () =>
  useQuery<IuseGetProductsQueryResponse, IResponseError>({
    queryKey: ['useGetProductsQuery'],
    queryFn: () => getAllProducts(),
  });

export default useGetProductsQuery;
