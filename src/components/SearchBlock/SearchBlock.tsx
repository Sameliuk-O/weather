import React, { FormEvent, useState, useRef, useEffect } from 'react';
import { Translation, useTranslation } from 'react-i18next';

import { getCityWeather } from '../../services/getCityWeather';
import weatherStore from '../../store/weatherStore';
import { SearchItem } from '../SearchItem';

export const SearchBlock = () => {
  const [city, setCity] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [sortedCities, setSortedCities] = useState<string[]>([]);
  const { t } = useTranslation();

  const arrayCityString = localStorage.getItem('arrayCity');
  const arrayCity: string[] = arrayCityString ? JSON.parse(arrayCityString) : [];

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    setCity(inputText);

    const sortedCities = arrayCity
      .filter((city) => city.toLowerCase().includes(inputText.toLowerCase()))
      .sort((a, b) => {
        const regex = new RegExp(`^${inputText}`, 'i');
        return regex.test(a) ? -1 : regex.test(b) ? 1 : 0;
      });

    setSortedCities(sortedCities);
  };

  const handleOptionClick = (clickedCity: string) => {
    setCity(clickedCity);
    setIsDropdownOpen(false);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const uniqueCitiesSet = new Set([...arrayCity, city]);
    const uniqueCitiesArray = Array.from(uniqueCitiesSet);

    localStorage.setItem('arrayCity', JSON.stringify(uniqueCitiesArray));

    try {
      const weatherData = await getCityWeather(city);
      weatherStore.setWeather(weatherData);
      setCity('');
    } catch (error) {
      console.error('Error fetching weather data', error);
    }

    setIsDropdownOpen(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (inputRef.current && !inputRef.current.contains(target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="mt-[72px] flex justify-center">
      <form onSubmit={onSubmit} className="search-block flex">
        <div className="relative">
          <input
            type="text"
            className="w-[569px] rounded px-5 py-2 shadow"
            placeholder={t('AddYourCity')}
            value={city}
            onChange={handleInputChange}
            onClick={() => setIsDropdownOpen(true)}
            ref={inputRef}
          />
          {isDropdownOpen && arrayCity.length > 0 && (
            <div className="absolute z-10 mt-2 max-h-40 w-[569px] overflow-y-scroll rounded border bg-white">
              {sortedCities.length === 0
                ? arrayCity.map((city) => (
                    <SearchItem city={city} handleOptionClick={handleOptionClick} key={city} />
                  ))
                : sortedCities.map((city) => (
                    <SearchItem city={city} handleOptionClick={handleOptionClick} key={city} />
                  ))}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="ml-2.5 rounded bg-blue px-11 py-2.5 text-sm text-white shadow hover:bg-sky-800"
        >
          <Translation>{(t) => <span>{t('Add')}</span>}</Translation>
        </button>
      </form>
    </div>
  );
};
