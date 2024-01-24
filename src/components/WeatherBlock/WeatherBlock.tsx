import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { getCityWeather } from '../../services/getCityWeather';

import { useGetCurrentWeather } from '../../services/getCurrentWeather';
import weatherStore from '../../store/weatherStore';
import { WeatherCard } from '../WeatherCard';

export const WeatherBlock = observer(() => {
  const { data } = useGetCurrentWeather();
  const { weather } = weatherStore;
  const cities = localStorage.getItem('arrayCity');
  const arrayCities = cities !== null ? JSON.parse(cities) : [];

  const fetchData = async (city: string) => {
    try {
      const weatherData = await getCityWeather(city);
      weatherStore.setWeather(weatherData);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  useEffect(() => {
    weatherStore.setWeather(data);
  }, [data]);

  useEffect(() => {
    if (arrayCities) {
      arrayCities.map((el: string) => {
        fetchData(el);
      });
    }
  }, []);

  return (
    <div className="mt-[122px] flex flex-wrap justify-center gap-3.5">
      {weather.map((el) => (
        <WeatherCard weather={el} key={el.city.id} />
      ))}
    </div>
  );
});
