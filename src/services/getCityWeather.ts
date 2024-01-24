import axios from 'axios';

export const getCityWeather = async (cityName: string) => {
  try {
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=cc5f0d67d7805534c20a71d92df9d658`,
    );
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};
