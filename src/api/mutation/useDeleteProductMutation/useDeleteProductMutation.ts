import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IResponseError } from '@/types/common';
import { deleteProduct } from '@/services/products';
import { IUseDeleteProductMutation } from './useDeleteProductMutation.config';

const useDeleteProductMutation = ({
  onSuccess,
  onError,
}: IUseDeleteProductMutation) => {
  const query = useQueryClient();

  return useMutation<any, IResponseError, { productId: number }>({
    mutationFn: ({ productId }) => deleteProduct(productId),
    onSuccess: () => {
      query.refetchQueries({ queryKey: ['useGetProductsQuery'] });
      if (onSuccess) {
        onSuccess();
      }
    },
    onError,
  });
};

export default useDeleteProductMutation;
