import { useQuery } from 'react-query';

const fetchCurrentLocation = async () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLocation = { latitude, longitude };

          const storedLocationString = localStorage.getItem('userLocation');
          const storedLocation = storedLocationString ? JSON.parse(storedLocationString) : null;

          if (
            !storedLocation ||
            (storedLocation.latitude !== latitude && storedLocation.longitude !== longitude)
          ) {
            const userLocation = { latitude, longitude };
            localStorage.setItem('userLocation', JSON.stringify(userLocation));
          }

          resolve(userLocation);
        },
        (error) => {
          console.error(`Error getting location: ${error.message}`);
          reject(error);
        },
      );
    } else {
      const error = new Error('Geolocation is not supported by your browser.');
      console.error(error.message);
      reject(error);
    }
  });
};

export const useGetCurrentLocation = () => {
  return useQuery('currentLocation', fetchCurrentLocation);
};
