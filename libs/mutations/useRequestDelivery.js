import { useMutation } from "react-query";
import { request } from "../instance";

export const requestDelivery = (data) =>
  request({
    url: "/deliveries",
    method: "POST",
    data,
  });

const useRequestDelivery = (onSuccess, onError) => {
  return useMutation(requestDelivery, {
    onSuccess,
    onError,
  });
};

export default useRequestDelivery;
