interface IBase {
  createdAt: string;
  id: number;
  name: string;
  nameEng: string;
  updated_at: string;
}

export type StatusType = 'pending' | 'approved' | 'rejected';
export interface IFile {
  id: number;
  warrantyId: number;
  fileName: string;
  originalName: string;
  fileType: string;
  size: number;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICategory extends IBase {}
export interface IManufacturer extends IBase {}
export interface IStore extends IBase {}
export interface IProductFields extends IBase {
  categoryId: number;
}

export interface IProduct {
  id: number;
  title: string;
  userId: number;
  status: StatusType;
  createdAt: string;
  updatedAt: string;
  manufacturerId: number;
  modelName: string;
  serialNumber: number;
  price: number;
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
}

export interface IFile {
  fileName: string;
  originalName: string;
  fileType: string;
  size: number;
  address: string;
  result: string;
}
