import { useQuery } from "react-query";
import { request } from "../instance";

const getWalletTransaction = () =>
  request({ url: "/wallet/transactions", method: "GET" });

const useGetWalletTransatction = (onSuccess, onError) =>
  useQuery(["user-wallet-transactions"], getWalletTransaction, {
    onError,
    onSuccess,
  });

export default useGetWalletTransatction;
