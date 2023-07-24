import { useQuery } from "react-query";
import { request } from "../instance";

const getHistory = () =>
  request({ url: "/deliveries", method: "GET" });

const useGetHistory = (onSuccess, onError) =>
  useQuery(["user-delivery-history"], getHistory, {
    onError,
    onSuccess,
  });

export default useGetHistory;
