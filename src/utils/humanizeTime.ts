import i18n from '../i18n';

export const humanizeTime = (timestamp: number, i18nInstance = i18n) => {
  const date = new Date(timestamp * 1000);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayOfWeek = i18nInstance.t(`daysOfWeek.${daysOfWeek[date.getUTCDay()]}`);
  const dayOfMonth = date.getUTCDate();
  const month = i18nInstance.t(`months.${months[date.getUTCMonth()]}`);

  return {
    dayOfWeek,
    dayOfMonth,
    month,
  };
};
