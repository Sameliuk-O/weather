import React, { useEffect } from 'react';

import { SearchBlock } from '../../components/SearchBlock';
import { WeatherBlock } from '../../components/WeatherBlock';
import { useGetCurrentLocation } from '../../services/getCurrentLocation';

export const Home = () => {
  const { refetch } = useGetCurrentLocation();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <SearchBlock />
      <WeatherBlock />
      <div className="pb-20" />
    </>
  );
};
