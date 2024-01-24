interface IMain {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

interface IList {
  clouds: {
    all: number;
  };
  dt: number;
  dt_text: string;
  main: IMain;
  pop: number;
  sys: {
    pod: string;
  };
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

interface ICity {
  country: string;
  coord: {
    lat: number;
    lon: number;
  };
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: string;
}

export interface IWeather {
  city: ICity;
  cnt: number;
  cod: string;
  list: IList[];
  message: number;
}
