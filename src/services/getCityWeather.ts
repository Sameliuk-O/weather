import axios from 'axios';

const REACT_APP_WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const REACT_APP_WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL;

export const getCityWeather = async (cityName: string) => {
  try {
    const resp = await axios.get(
      `${REACT_APP_WEATHER_API_URL}/data/2.5/forecast?q=${cityName}&appid=${REACT_APP_WEATHER_API_KEY}`,
    );

    return resp.data;
  } catch (e) {
    console.log(e);
  }
};
