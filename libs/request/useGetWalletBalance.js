import { useQuery } from "react-query";
import { request } from "../instance";

const getWallatBalanceInfo = () =>
  request({ url: "/wallet/balance", method: "GET" });

const useGetWalletBalance = (onSuccess, onError) =>
  useQuery(["user-profile-info"], getWallatBalanceInfo, {
    onError,
    onSuccess,
  });

export default useGetWalletBalance;
