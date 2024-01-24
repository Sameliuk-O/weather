import { useQuery } from 'react-query';
import axios from 'axios';
import { IWeather } from '../utils/IWeather';

// const REACT_WEATHER_API_KEY = process.env.REACT_WEATHER_API_KEY;
interface IPosition {
  latitude: string;
  longitude: string;
}

const fetchWeatherData = async ({ latitude, longitude }: IPosition) => {
  try {
    const resp: { data: IWeather } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=cc5f0d67d7805534c20a71d92df9d658`,
    );
    return resp.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : 'Network error');
  }
};

export const useGetCurrentWeather = () => {
  const userLocation = localStorage.getItem('userLocation');
  const userLocationObject = userLocation !== null && JSON.parse(userLocation);

  return useQuery('weather', () => fetchWeatherData(userLocationObject));
};