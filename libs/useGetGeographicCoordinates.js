import { useEffect, useState } from "react";
import axios from "axios";

const useDebounceValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};

const useGetGeographicCoordinates = (address) => {
  const debouncedAddress = useDebounceValue(address, 1000);
  const [deliveryPrice, setDeliveryPrice] = useState(null);

  useEffect(() => {
    if (!debouncedAddress) return; 

    const getDeliveryPrice = () => {
      axios
        .get(`https://geocode.maps.co/search?q=${debouncedAddress}`)
        .then((res) => {
          setDeliveryPrice(res.data.deliveryPrice);
        })
        .catch((err) => {
          console.log("err", err);
        });
    };

    getDeliveryPrice(); 
  }, [debouncedAddress]);

  return deliveryPrice; 
};

export default useGetGeographicCoordinates;
