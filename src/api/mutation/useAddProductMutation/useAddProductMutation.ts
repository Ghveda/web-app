import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IResponseError } from '@/types/common';
import { addProduct } from '@/services/products';
import {
  IUseAddProductMutation,
  IUseAddProductMutationParams,
} from './useAddProductMutation.config';

const useAddProductMutation = ({
  onSuccess,
  onError,
}: IUseAddProductMutation) => {
  const query = useQueryClient();

  return useMutation<any, IResponseError, IUseAddProductMutationParams>({
    mutationFn: (params) => addProduct(params),
    onSuccess: () => {
      query.refetchQueries({ queryKey: ['useGetProductsQuery'] });
      if (onSuccess) {
        onSuccess();
      }
    },
    onError,
  });
};

export default useAddProductMutation;
