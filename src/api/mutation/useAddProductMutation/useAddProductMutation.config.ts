export interface IUseAddProductMutation {
  onSuccess?: () => void;
  onError?: () => void;
}

export interface IUseAddProductMutationParams {
  files: {
    fileName: string;
    originalName: string;
    fileType: string;
    size: number;
    address: string;
    result: string;
  }[];
}
