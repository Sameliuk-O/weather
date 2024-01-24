import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useGetCurrentWeather } from '../../services/getCurrentWeather';
import weatherStore from '../../store/weatherStore';
import { WeatherCard } from '../WeatherCard';

export const WeatherBlock = observer(() => {
  const { data } = useGetCurrentWeather();
  const { weather } = weatherStore;

  useEffect(() => {
    weatherStore.setWeather(data);
  }, [data]);

  return (
    <div className="mt-[122px] flex flex-wrap justify-center gap-3.5">
      {weather.map((el) => (
        <WeatherCard weather={el} key={el.city.id} />
      ))}
    </div>
  );
});
