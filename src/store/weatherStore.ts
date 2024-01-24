import { makeAutoObservable } from 'mobx';

import { IWeather } from '../utils/IWeather';

class WeatherStore {
  weather: IWeather[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setWeather(value: IWeather | undefined) {
    if (value !== undefined) {
      const existingIndex = this.weather.findIndex((el) => el.city.id === value.city.id);

      if (existingIndex === -1) {
        this.weather.push(value);
      } else {
        this.weather[existingIndex] = value;
      }
    }
  }

  deleteCityWeather(id: number) {
    this.weather = this.weather.filter((el) => el.city.id !== id);
  }
}

const weatherStore = new WeatherStore();
export default weatherStore;
