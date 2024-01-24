import axios from 'axios';

const REACT_APP_WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getCityWeather = async (cityName: string) => {
  try {
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${REACT_APP_WEATHER_API_KEY}`,
    );
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};
