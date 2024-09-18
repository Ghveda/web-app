import { getProduct } from '@/services/products';
import { useQuery } from '@tanstack/react-query';
import { IResponseError } from '@/types/common';
import { IUseGetProductQueryResponse } from './useGetProductQuery.config';

const useGetProductQuery = (productId: number) =>
  useQuery<IUseGetProductQueryResponse, IResponseError>({
    queryKey: ['useGetProductQuery', productId],
    queryFn: () => getProduct(productId),
  });

export default useGetProductQuery;
