import { axiosIntance } from '@/api/axios';
import { IUseGetAnalyticsQueryResponse } from '@/api/query/useGetAnalyticsQuery/useGetAnalyticsQuery.config';
import { transformKeysToCamelCase } from '@/utils/formatData';

export const getAnalitycsProducts = async () => {
  const { data } =
    await axiosIntance.get<IUseGetAnalyticsQueryResponse>('warranty/analytics');

  return transformKeysToCamelCase(data);
};
