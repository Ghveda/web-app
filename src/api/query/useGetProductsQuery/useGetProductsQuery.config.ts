import { IProduct } from '@/types/models';

export interface IuseGetProductsQuery {}

export interface IuseGetProductsQueryResponse {
  currentPage: number;
  data: IProduct[];
  firstPageUrl: string;
  from: unknown;
  lastPage: number;
  lastPageUrl: string;
  links: {
    url: string;
    label: string;
    active: boolean;
  }[];
  nextPageUrl: string;
  path: string;
  perPage: number;
  prevPageUrl: string;
  to: unknown;
  total: number;
}
