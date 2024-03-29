import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import weatherStore from '../../store/weatherStore';
import { kelvinToCelsius, kelvinToFahrenheit } from '../../utils/convertTemp';
import { humanizeTime } from '../../utils/humanizeTime';
import { IWeather } from '../../utils/IWeather';
import { ChartWeather } from '../ChartWeather';
import { LocationInfo } from '../LocationInfo';
import { OptionalWeatherInfo } from '../OptionalWeatherInfo';
import { TempBlock } from '../TempBlock';

export const WeatherCard = ({ weather }: { weather: IWeather }) => {
  const storedCity = localStorage.getItem(`${weather.city.name}`);
  const defaultLanguage = { city: weather.city.name, temp: 'C' };
  const citiesStr = localStorage.getItem('arrayCity');
  const citiesArray = citiesStr && JSON.parse(citiesStr);

  const [tempDisplay, setTempDisplay] = useState(
    (storedCity && JSON.parse(storedCity)) || defaultLanguage,
  );

  const { i18n } = useTranslation();
  const { dayOfWeek, dayOfMonth, month } = humanizeTime(weather?.list[0].dt, i18n);

  const celsius = kelvinToCelsius(weather?.list[0].main.temp).toFixed(0);
  const farenheit = kelvinToFahrenheit(weather?.list[0].main.temp).toFixed(0);
  const feelsLikeCelsius = kelvinToCelsius(weather?.list[0].main.feels_like).toFixed(0);
  const feelsLikeFarenheit = kelvinToFahrenheit(weather?.list[0].main.feels_like).toFixed(0);

  const labelChart = weather?.list.map((value) => {
    const date = new Date(value.dt * 1000);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');

    return Number(`${day}.${month}`);
  });

  const dataChart = weather?.list.map((value) =>
    tempDisplay.temp === 'C'
      ? Number(kelvinToCelsius(value.main.temp).toFixed(0))
      : Number(kelvinToFahrenheit(value.main.temp).toFixed(0)),
  );
  const handleDeleteCard = (id: number, city: string) => {
    weatherStore.deleteCityWeather(id);
    const newCities = citiesArray.filter((el: string) => el !== city);
    localStorage.setItem('arrayCity', JSON.stringify(newCities));
  };

  return (
    <div
      key={weather?.city.id}
      className={`h-[257px] w-[350px] rounded p-3.5 shadow ${Number(celsius) >= 0 ? 'bg-liteOrange' : 'bg-liteBlue'}`}
    >
      <button
        className="float-right -mr-1.5 -mt-3.5 text-liteGray hover:text-gray"
        onClick={() => handleDeleteCard(weather?.city.id, weather?.city.name)}
      >
        x
      </button>
      <LocationInfo
        city={weather?.city.name}
        country={weather?.city.country}
        dayOfWeek={dayOfWeek}
        dayOfMonth={dayOfMonth}
        month={month}
        icon={weather?.list[0]?.weather[0].icon}
        main={weather?.list[0]?.weather[0].main}
      />
      <div>
        <ChartWeather labels={labelChart} dataChart={dataChart} celsiusTemp={celsius} />
      </div>
      <div className="flex justify-between">
        <TempBlock
          city={weather?.city.name}
          celsius={celsius}
          farenheit={farenheit}
          feelsLikeCelsius={feelsLikeCelsius}
          feelsLikeFarenheit={feelsLikeFarenheit}
          tempDisplay={tempDisplay}
          setTempDisplay={setTempDisplay}
        />
        <OptionalWeatherInfo
          wind={weather?.list[0].wind.speed}
          humidity={weather?.list[0].main.humidity}
          pressure={weather?.list[0].main.pressure}
        />
      </div>
    </div>
  );
};
