import { useState, useEffect } from "react";

const useGetStoredInfo = () => {
  const [formattedStoredUserData, setFormattedStoredUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("ssUser");
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setFormattedStoredUserData(parsedData);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return { formattedStoredUserData };
};

export default useGetStoredInfo;
