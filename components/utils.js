import moment from 'moment';
require('moment/locale/tr');

export const dateFormater = (date) => {
  const turkishDateFormat = 'DD/MM/YYYY';
  moment.locale('tr'); 
  return moment(date).format(turkishDateFormat);
}
export function formatReadCount(count) {
  if (count >= 1e9) {
    return (count / 1e9).toFixed(1) + "b";
  } else if (count >= 1e6) {
    return (count / 1e6).toFixed(1) + "m";
  } else {
    return count?.toString();
  }
}