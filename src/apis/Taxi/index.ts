import axios from 'axios';

export const getAvailableTaxis = async () => {
  try {
    const response = await axios.get(`${process.env.BASE_PATH}/transport/taxi-availability`);
    return response.data;
  } catch (e) {
    return {};
  }
};
