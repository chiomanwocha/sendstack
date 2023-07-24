import { useState } from "react";

const useBookDeliveryPageLogic = () => {
  const [initialItems, setInitialItems] = useState([
    { item: "1", isActive: true },
    { item: "2", isActive: false },
    { item: "3", isActive: false },
  ]);

  const [formIndex, setFormIndex] = useState("1");

  const [pickupInfo, setPickupInfo] = useState({
    address: "",
    locationCode: "",
    pickupName: "",
    pickupNumber: "",
    altPickupNumber: "",
    pickupDate: "",
    note: "",
    price: "",
  });

  const [totalDropOffLocation, setTotalDropOffLocation] = useState([]);
  const [recipientInfo, setRecipientInfo] = useState({
    locationCode: "",
    address: "",
    recipientName: "",
    recipientNumber: "",
    altRecipientNumber: "",
    price: "",
  });
  return {
    initialItems,
    setInitialItems,
    formIndex,
    setFormIndex,
    pickupInfo,
    setPickupInfo,
    totalDropOffLocation,
    setTotalDropOffLocation,
    recipientInfo,
    setRecipientInfo,
  };
};

export default useBookDeliveryPageLogic;
