import { useQuery } from '@tanstack/react-query';
import { IResponseError } from '@/types/common';
import { getAnalitycsProducts } from '@/services/analytics';
import { IUseGetAnalyticsQueryResponse } from './useGetAnalyticsQuery.config';

const useGetAnalyticsQuery = () =>
  useQuery<IUseGetAnalyticsQueryResponse, IResponseError>({
    queryKey: ['useGetAnalyticsQuery'],
    queryFn: () => getAnalitycsProducts(),
  });

export default useGetAnalyticsQuery;
