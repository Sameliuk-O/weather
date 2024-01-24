import React, { useEffect } from 'react';
import { Translation } from 'react-i18next';

interface ITempBlock {
  city: string;
  celsius: string;
  farenheit: string;
  feelsLikeCelsius: string;
  feelsLikeFarenheit: string;
  tempDisplay: { city: string; temp: string };
  setTempDisplay: ({ city, temp }: { city: string; temp: string }) => void;
}

export const TempBlock = ({
  city,
  celsius,
  farenheit,
  feelsLikeCelsius,
  feelsLikeFarenheit,
  tempDisplay,
  setTempDisplay,
}: ITempBlock) => {
  useEffect(() => {
    tempDisplay.temp && localStorage.setItem(`${tempDisplay.city}`, JSON.stringify(tempDisplay));
  }, [tempDisplay]);

  return (
    <div>
      <div className="flex pr-1">
        <p className="pt-2 text-6xl">
          {Number(celsius) > 0 ? '+' : ''}
          {tempDisplay.temp === 'C' ? celsius : farenheit}
        </p>
        <div className="h-[32px] text-2xl">
          <button
            className={`border-r border-borderGray pr-2.5 ${
              tempDisplay.temp === 'C' ? 'text-borderGray' : ''
            }`}
            onClick={() => setTempDisplay({ city, temp: 'C' })}
          >
            °C
          </button>
          <button
            className={`pl-2.5 ${tempDisplay.temp === 'F' ? 'text-borderGray' : ''}`}
            onClick={() => setTempDisplay({ city, temp: 'F' })}
          >
            °F
          </button>
        </div>
      </div>
      <div>
        <div className="text-liteGray">
          <Translation>{(t) => <span>{t('FeelsLike')}</span>}</Translation>
          <span className="pl-1 font-bold">
            {tempDisplay.temp === 'C' ? feelsLikeCelsius + '°C' : feelsLikeFarenheit + '°F'}
          </span>
        </div>
      </div>
    </div>
  );
};
