import useGetHistory from "@/libs/request/useGetHistory";
import { useState } from "react";

const useHistoryPageLogic = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading } = useGetHistory(page + 1);

  const tableHead = [
    "batch id",
    "pick up name",
    "pick up address",
    "amount",
    "date created",
    "",
  ];

  const [openDetails, setOpenDetails] = useState(false);
  const [detailsBody, setDetailsBody] = useState({});
  return {
    data,
    isLoading,
    tableHead,
    openDetails,
    setOpenDetails,
    detailsBody,
    setDetailsBody,
    page,
    setPage,
  };
};

export default useHistoryPageLogic;
