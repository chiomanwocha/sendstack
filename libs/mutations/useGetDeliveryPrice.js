import { useMutation } from "react-query";
import { request } from "../instance";

export const getDeliveryPriceFn = (data) =>
  request({
    url: "/deliveries/price",
    method: "POST",
    data,
  });

const useGetDeliveryPrice = (onSuccess, onError) => {
  return useMutation(getDeliveryPriceFn, {
    onSuccess,
    onError,
  });
};

export default useGetDeliveryPrice;
