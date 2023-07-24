import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: process.env.BASE_URL,

  headers: {
    'app_id': process.env.APP_ID,
    'app_secret': process.env.APP_SECRET,
  },
});

export const request = (axiosConfig) => apiInstance(axiosConfig)
  .then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.data;
    }
  })
  .catch((err) => {
    return err;
  });