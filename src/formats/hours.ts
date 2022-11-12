import { hours } from '../json/literalDates.json';
import { addZero, verifyLanguage, getRelative } from '../utils/functions';

const hoursReplacer: DateReplacer = {
  hour: (date, lang) => {
    verifyLanguage(hours, lang);

    return hours[lang][date.getHours()];
  },
  hh: date => date.getHours(),
  zhh: date => addZero(date.getHours()),
  hour12: (date, lang) => {
    verifyLanguage(hours, lang);

    return hours[lang][date.getHours() % 12 === 0 ? 12 : date.getHours() % 12];
  },
  hh12: date => (date.getHours() % 12 === 0 ? 12 : date.getHours() % 12),
  zhh12: date =>
    addZero(date.getHours() % 12 === 0 ? 12 : date.getHours() % 12),
  hhp: date => (date.getHours() >= 12 ? 'PM' : 'AM'),
  hhrel: (date, lang) => getRelative('hour', date, lang),
};

export default hoursReplacer;
