import axios from "axios";

const getGeocoordinate = async (address) => {
  try {
    const res = await axios.get(`https://geocode.maps.co/search?q=${address}`);
    return res.data[0];
  } catch (err) {
    return null;
  }
};

export default getGeocoordinate;