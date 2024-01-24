import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Wind: 'Wind',
      ms: 'm/s',
      Humidity: 'Humidity',
      Pressure: 'Pressure',
      Pa: 'Pa',
      FeelsLike: 'Feels like',
      Add: 'Add',
      AddYourCity: 'Add your city',
      daysOfWeek: {
        Sun: 'Sun',
        Mon: 'Mon',
        Tue: 'Tue',
        Wed: 'Wed',
        Thu: 'Thu',
        Fri: 'Fri',
        Sat: 'Sat',
      },
      months: {
        January: 'January',
        February: 'February',
        March: 'March',
        April: 'April',
        May: 'May',
        June: 'June',
        July: 'July',
        August: 'August',
        September: 'September',
        October: 'October',
        November: 'November',
        December: 'December',
      },
    },
  },
  ua: {
    translation: {
      Wind: 'Вітер',
      ms: 'м/с',
      Humidity: 'Вологість',
      Pressure: 'Тиск',
      Pa: 'Па',
      FeelsLike: 'Відчувається',
      Add: 'Додати',
      AddYourCity: 'Додайте своє місто',
      daysOfWeek: {
        Sun: 'Нд',
        Mon: 'Пн',
        Tue: 'Вт',
        Wed: 'Ср',
        Thu: 'Чт',
        Fri: 'Пт',
        Sat: 'Сб',
      },
      months: {
        January: 'Січень',
        February: 'Лютий',
        March: 'Березень',
        April: 'Квітень',
        May: 'Травень',
        June: 'Червень',
        July: 'Липень',
        August: 'Серпень',
        September: 'Вересень',
        October: 'Жовтень',
        November: 'Листопад',
        December: 'Грудень',
      },
    },
  },
  he: {
    translation: {
      Wind: 'רוח',
      ms: 'מ/ש',
      Humidity: 'לחות',
      Pressure: 'לחץ',
      Pa: 'פה/א',
      FeelsLike: 'מרגיש כמו',
      Add: 'הוסף',
      AddYourCity: 'הוסף את העיר שלך',
      daysOfWeek: {
        Sun: 'יום ראשון',
        Mon: 'יום שני',
        Tue: 'יום שלישי',
        Wed: 'יום רביעי',
        Thu: 'יום חמישי',
        Fri: 'יום שישי',
        Sat: 'יום שבת',
      },
      months: {
        January: 'ינואר',
        February: 'פברואר',
        March: 'מרץ',
        April: 'אפריל',
        May: 'מאי',
        June: 'יוני',
        July: 'יולי',
        August: 'אוגוסט',
        September: 'ספטמבר',
        October: 'אוקטובר',
        November: 'נובמבר',
        December: 'דצמבר',
      },
    },
  },
};

// eslint-disable-next-line no-undef
const storedLanguage = localStorage.getItem('language');
const defaultLanguage = 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: storedLanguage || defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
