import { IFile } from '@/types/models';

export interface IUseUploadProductMutationResponse extends IFile {}

export interface IUseUploadProductMutation {
  onSuccess?: (data: IUseUploadProductMutationResponse) => void;
  onError?: () => void;
}
