import {
  ICategory,
  IFile,
  IManufacturer,
  IProductFields,
  IStore,
  StatusType,
} from '@/types/models';

export interface IUseGetProductQueryResponse {
  warranty: {
    id: number;
    userId: number;
    status: StatusType;
    warrantyStatus: string;
    created_at: string;
    updated_at: string;
    manufacturerId: number;
    modelName: string;
    serialNumber: string;
    price: string;
    storeId: number;
    categoryId: number;
    categoryProductId: number;
    dateStart: string;
    dateEnd: string;
    files: IFile[];
    category: ICategory;
    product: IProductFields;
    manufacturer: IManufacturer;
    store: IStore;
  };
}
