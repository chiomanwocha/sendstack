import { useQuery } from "react-query";
import { request } from "../instance";

const getAvailableLocationFn = () =>
  request({ url: "/locations", method: "GET" });

const useGetAvailableLocation = (onSuccess, onError) =>
  useQuery(["available-locations"], getAvailableLocationFn, {
    onSuccess,
    onError,
  });

export default useGetAvailableLocation;
