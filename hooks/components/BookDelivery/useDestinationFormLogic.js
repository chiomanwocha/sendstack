const useDestinationFormLogic = (
  totalDropOffLocation,
  setTotalDropOffLocation,
  recipientInfo,
  setRecipientInfo,
  setFormIndex,
  setInitialItems
) => {
  const inputDetails = [
    {
      title: "Recipient Location",
      placeholder: "Enter your recipient's location",
      stateTag: "address",
      required: true,
    },
    {
      title: "Recipient Name",
      stateTag: "recipientName",
      placeholder: "Enter your recipient's name",
      required: true,
    },
    {
      title: "Recipient Number",
      stateTag: "recipientNumber",
      placeholder: "Enter your  recipient's number",
      required: true,
    },
    {
      title: "Recipient Alternative Number",
      stateTag: "altRecipientNumber",
      placeholder: "Enter your recipient's alternative number",
      required: true,
    },
  ];
  const deleteLocation = (index) => {
    const filteredArray = totalDropOffLocation.filter(
      (_location, locationIndex) => locationIndex !== index
    );
    setTotalDropOffLocation(filteredArray);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setTotalDropOffLocation((prevTotal) => [...prevTotal, recipientInfo]);
    setRecipientInfo({
      locationCode: "",
      address: "",
      recipientName: "",
      recipientNumber: "",
      price: "",
      altRecipientNumber: "",
    });
  };

  const handlePrevious = () => {
    setFormIndex("1");
    setInitialItems((prevItems) => {
      const updatedItems = prevItems.map((item, index) => {
        if (index === 1) return { ...item, isActive: false };
        return item;
      });
      return updatedItems;
    });
  };

  const handleNext = () => {
    setFormIndex("3");
    setInitialItems((prevItems) => {
      const updatedItems = prevItems.map((item, index) => {
        if (index === 2) return { ...item, isActive: true };
        return item;
      });
      return updatedItems;
    });
  };
  return {
    inputDetails,
    deleteLocation,
    handleSubmitForm,
    handlePrevious,
    handleNext,
  };
};

export default useDestinationFormLogic;
