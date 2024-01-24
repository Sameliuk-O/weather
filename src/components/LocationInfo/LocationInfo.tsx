import React from 'react';

import { getCurrentTime } from '../../utils/getCurrentTime';

interface LocationInfoProps {
  city: string;
  country: string;
  dayOfWeek: string;
  dayOfMonth: number;
  month: string;
  icon: string;
  main: string;
}

export const LocationInfo = ({
  city,
  country,
  dayOfWeek,
  dayOfMonth,
  month,
  icon,
  main,
}: LocationInfoProps) => {
  const currentTime = getCurrentTime();

  return (
    <div className="mr-6 flex justify-between">
      <div>
        <p className="font-medium">
          {city}, {country}
        </p>
        <p className="font-light">
          {dayOfWeek}, {dayOfMonth} {month}, {currentTime}
        </p>
      </div>
      <div className="flex text-xs text-liteGray">
        <div className="h-[50px] w-[50px]">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            className="-mt-3.5"
            alt={main}
          />
        </div>

        <span>{main}</span>
      </div>
    </div>
  );
};
