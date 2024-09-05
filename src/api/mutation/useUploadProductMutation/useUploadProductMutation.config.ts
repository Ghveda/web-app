export interface IUseUploadProductMutationResponse {
  fileName: string;
  originalName: string;
  fileType: string;
  size: number;
  address: string;
  result: string;
}

export interface IUseUploadProductMutation {
  onSuccess?: (data: IUseUploadProductMutationResponse) => void;
  onError?: () => void;
}
