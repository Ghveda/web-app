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

export interface IProduct {
  id: number;
  userId: number;
  status: 'pending' | 'approved' | 'rejected';
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
  category: null;
  product: null;
  manufacturer: null;
  store: null;
}
