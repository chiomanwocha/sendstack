/* eslint-disable react-hooks/exhaustive-deps */
import useRequestDelivery from "@/libs/mutations/useRequestDelivery";
import useComponentToast from "@/utils/useComponentToast";
import { useRouter } from "next/router";

const useTotalModalPriceLogic = (updatedTotalDropOffLocationArray, prices, pickupInfo, onClose) => {
  const updatedArray = updatedTotalDropOffLocationArray.map((item, index) => ({
    ...item,
    price: prices[index],
  }));
  const totalPrice = updatedArray.reduce(
    (total, item) => total + item.price,
    0
  );

  const router = useRouter();

  const { showToast } = useComponentToast();

  const { mutate, isLoading: isRequestDeliveryLoading } = useRequestDelivery(
    (res) => {
      if (res?.response?.data?.status === false) {
        showToast("Error", res?.response?.data?.message, "error");

      } else {
        showToast("Success", res?.message, "success");
        router.push("/my-profile");
        onClose();
      }
    },
    (err) => {
      showToast("Error", err?.message ?? "Try again", "error");
    }
  );
  
  const handleAction = () => {
    const payload = {
      pickup: {
        long: pickupInfo?.price?.lon,
        lat: pickupInfo?.price?.lat,
        address: pickupInfo?.address,
        pickupName: pickupInfo?.pickupName,
        pickupNumber: pickupInfo?.pickupNumber,
        altPickupNumber: pickupInfo?.altPickupNumber,
        pickupDate: pickupInfo?.pickupDate,
        note: pickupInfo?.note,
      },
      drops: updatedArray.map((item) => ({
        long: item?.geoCoordinate?.lon,
        lat: item?.geoCoordinate?.lat,
        address: item?.address,
        recipientName: item?.recipientName,
        recipientNumber: item?.recipientNumber,
        altRecipientNumber: item?.altRecipientNumber,
      })),
    };
    mutate(payload);
  };
  return { totalPrice, isRequestDeliveryLoading, handleAction, updatedArray };
};

export default useTotalModalPriceLogic;
