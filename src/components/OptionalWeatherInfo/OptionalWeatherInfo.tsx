import React from 'react';
import { Translation } from 'react-i18next';

interface IOptionalWeatherInfo {
  wind: number | undefined;
  humidity: number | undefined;
  pressure: number | undefined;
}
export const OptionalWeatherInfo = ({ wind, humidity, pressure }: IOptionalWeatherInfo) => {
  return (
    <div className="text-right">
      <p>
        <Translation>{(t) => <span>{t('Wind')}:</span>}</Translation>
        <span className="pl-1 text-orange">
          {wind} <Translation>{(t) => <span>{t('ms')}</span>}</Translation>
        </span>
      </p>
      <p>
        <Translation>{(t) => <span>{t('Humidity')}:</span>}</Translation>
        <span className="pl-1 text-orange">{humidity}%</span>
      </p>
      <p>
        <Translation>{(t) => <span>{t('Pressure')}:</span>}</Translation>
        <span className="pl-1 text-orange">
          {pressure}
          <Translation>{(t) => <span>{t('Pa')}</span>}</Translation>
        </span>
      </p>
    </div>
  );
};
