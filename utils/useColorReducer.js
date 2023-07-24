const useColorReducer = () => {
  const colorReducer = (status) => {
    switch (status.toLowerCase()) {
      case "delivered":
      case "credit":
        return {
          color: "#027A48",
          bg: "#ECFDF3",
        };
      case "pending":
        return {
          color: "#B54708",
          bg: "#FFFAEB",
        };
      case "cancelled":
      case "debit":
        return {
          color: "#B42318",
          bg: "#FEF3F2",
        };
      default:
        return {
          color: "black",
          bg: "white",
        };
    }
  };
  return { colorReducer };
};

export default useColorReducer;
