import { useEffect, useState } from "react";
import useGetDeliveryPrice from "@/libs/mutations/useGetDeliveryPrice";
import getGeocoordinate from "@/utils/getGeocoordinate";
import useComponentToast from "@/utils/useComponentToast";

const useConfirmDeliveryDetailsLogic = (totalDropOffLocation, pickupInfo) => {
  const [openModal, setOpenModal] = useState(false);
  const [result, setResult] = useState([]);
  const [prices, setPrices] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [apiCallMade, setApiCallMade] = useState(false);
  const { showToast } = useComponentToast();

  const updatedArray = totalDropOffLocation.map((item, index) => ({
    ...item,
    geoCoordinate: result[index],
  }));

  const { mutate, isLoading } = useGetDeliveryPrice(
    (res) => {
      if (res?.response?.data?.status === false) {
        if (res?.response?.data?.message.includes("is required")) {
          setErrorMessage("We can't find your exact geolocations.");
        } else {
          setErrorMessage(res?.response?.data?.message);
        }
        setIsDisabled(true);
      } else {
        setPrices((prev) => [...prev, res?.data?.price]);
        setIsDisabled(false);
      }
    },
    (err) => {
      showToast("Error", err?.message ?? "Try again", "error");
    }
  );

  useEffect(() => {
    if (totalDropOffLocation) {
      Promise.all(
        totalDropOffLocation.map(async (each) => {
          const { address } = each;
          const deliveryPrice = await getGeocoordinate(address);
          return deliveryPrice;
        })
      ).then((updatedLocations) => setResult(updatedLocations));
    }
  }, [totalDropOffLocation]);

  useEffect(() => {
    if (errorMessage) {
      showToast("Error", errorMessage, "error");
    }
  }, [errorMessage]);

  useEffect(() => {
    if (result && result.length > 0 && !apiCallMade) {
      result.forEach((each) => {
        mutate({
          pickupDate: pickupInfo?.pickupDate,
          pickupGeo: {
            lat: pickupInfo?.price?.lat,
            long: pickupInfo?.price?.lon,
          },
          dropoffGeo: {
            lat: each?.lat,
            long: each?.lon,
          },
        });
      });
      setApiCallMade(true);
    }
  }, [result, apiCallMade, mutate, pickupInfo]);

  return {
    result,
    openModal,
    setOpenModal,
    prices,
    isDisabled,
    updatedArray,
    isLoading,
  };
};

export default useConfirmDeliveryDetailsLogic;
