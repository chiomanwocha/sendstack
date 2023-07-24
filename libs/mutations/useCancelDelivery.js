import { useMutation } from "react-query";
import { request } from "../instance";

export const cancelDelivery = (deliveryId) =>
  request({
    url: `/deliveries/${deliveryId}/cancel`,
    method: "POST",
  });

const useCancelDelivery = (onSuccess, onError) => {
  return useMutation(cancelDelivery, {
    onSuccess,
    onError,
  });
};

export default useCancelDelivery;
