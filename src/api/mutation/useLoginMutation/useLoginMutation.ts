import { loginService } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { IParams, IUseLoginMutation, IUseLoginMutationResponse } from "./useLoginMutation.config";
import { IResponseError } from "@/types/common";

const useLoginMutation = ({
  onSuccess,
  onError
}: IUseLoginMutation) => (useMutation<IUseLoginMutationResponse, IResponseError, IParams>({
  mutationFn: (params) => loginService(params),
  onSuccess,
  onError,
}));

export default useLoginMutation;

