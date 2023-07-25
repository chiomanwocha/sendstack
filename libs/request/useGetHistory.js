import { useQuery } from "react-query";
import { request } from "../instance";

const getHistory = (page) =>
  request({ url: `/deliveries?page=${page}`, method: "GET" });

const useGetHistory = (page, onSuccess, onError) =>
  useQuery(["user-delivery-history", page], () => getHistory(page), {
    onError,
    onSuccess,
  });

export default useGetHistory;
