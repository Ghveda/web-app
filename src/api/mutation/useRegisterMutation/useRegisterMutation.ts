import { registerService } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { IResponseError } from "@/types/common";
import { IParams, IUseRegisterMutation, IUseRegisterMutationResponse } from "./useRegisterMutation.config";

const useRegisterMutation = ({
  onSuccess,
  onError
}: IUseRegisterMutation) => (useMutation<IUseRegisterMutationResponse, IResponseError, IParams>({
  mutationFn: (params) => registerService(params),
  onSuccess,
  onError,
}));

export default useRegisterMutation;

