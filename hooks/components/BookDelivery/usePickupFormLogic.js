import getGeocoordinate from "@/utils/getGeocoordinate";

const usePickupFormLogic = (
  setPickupInfo,
  pickupInfo,
  setFormIndex,
  setInitialItems
) => {
  const inputDetails = [
    {
      title: "Pick-up Location",
      placeholder: "Enter your location",
      required: true,
      stateTag: "address",
    },
    {
      title: "Pick-up Name",
      placeholder: "Enter your location",
      required: true,
      stateTag: "pickupName",
    },
    {
      title: "Pick-up Number",
      placeholder: "Enter your number",
      required: true,
      stateTag: "pickupNumber",
    },
    {
      title: "Pick-up Alternative Number",
      placeholder: "Enter your alternative number",
      required: true,
      stateTag: "altPickupNumber",
    },
  ];
  const today = new Date().toISOString().split("T")[0];

  const fetchDeliveryCoordinates = async () => {
    try {
      const deliveryPrice = await getGeocoordinate(pickupInfo?.address);
      setPickupInfo((prevInfo) => ({ ...prevInfo, price: deliveryPrice }));
    } catch (err) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDeliveryCoordinates();
    setFormIndex("2");
    setInitialItems((prevItems) => {
      const updatedItems = prevItems.map((item, index) => {
        if (index === 1) return { ...item, isActive: true };
        return item;
      });
      return updatedItems;
    });
  };
  return {
    today,
    handleSubmit,
    inputDetails,
  };
};

export default usePickupFormLogic;
