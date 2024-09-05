import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IResponseError } from '@/types/common';
import { uploadProduct } from '@/services/products';
import {
  IUseUploadProductMutation,
  IUseUploadProductMutationResponse,
} from './useUploadProductMutation.config';

const useUploadProductMutation = ({
  onSuccess,
  onError,
}: IUseUploadProductMutation) =>
  useMutation<IUseUploadProductMutationResponse, IResponseError, FormData>({
    mutationFn: (params) => uploadProduct(params),
    onSuccess,
    onError,
  });

export default useUploadProductMutation;
