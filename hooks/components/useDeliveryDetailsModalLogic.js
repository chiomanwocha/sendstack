import useCancelDelivery from "@/libs/mutations/useCancelDelivery";
import useComponentToast from "@/utils/useComponentToast";
import { useQueryClient } from "react-query";

const useDeliveryDetailsModalLogic = (onClose, details) => {
  const { showToast } = useComponentToast();
  const client = useQueryClient();
  const { mutate, isLoading } = useCancelDelivery(
    (res) => {
      console.log(res);
      if (res?.status === false) {
        showToast("Error", res?.response?.data?.message, "error");
      } else {
        showToast("Success", res?.message, "success");
        client.invalidateQueries(["user-delivery-history"]);
        onClose();
      }
    },
    (err) => {
      console.log(err);
    }
  );

  const cancelDelivery = (deliveryId) => {
    mutate(deliveryId);
  };

  const hasCancelledStatus = details?.drops?.some(
    (item) => item.status === "CANCELLED"
  );

  return {
    isLoading,
    cancelDelivery,
    hasCancelledStatus,
  };
};

export default useDeliveryDetailsModalLogic;
