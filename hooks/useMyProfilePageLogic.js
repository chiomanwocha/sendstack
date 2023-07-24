import useGetWalletBalance from "@/libs/request/useGetWalletBalance";
import useGetWalletTransatction from "@/libs/request/useGetWalletTransaction";
import useGetStoredInfo from "@/libs/useGetStoredInfo";
import useColorReducer from "@/utils/useColorReducer";

const useMyProfilePageLogic = () => {
  const { formattedStoredUserData } = useGetStoredInfo();
  const { data: walletBalance, isLoading: isWalletBalanceDataLoading } =
    useGetWalletBalance();
  const { data: walletTransaction, isLoading: isWalletTransactionDataLoading } =
    useGetWalletTransatction();
  const tableHead = [
    "s/n",
    "description",
    "amount",
    "type",
    "balance",
    "created at",
  ];

  const { colorReducer } = useColorReducer();
  return {
    formattedStoredUserData,
    walletBalance,
    isWalletBalanceDataLoading,
    walletTransaction,
    isWalletTransactionDataLoading,
    tableHead,
    colorReducer,
  };
};

export default useMyProfilePageLogic;
