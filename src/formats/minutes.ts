import { zeroToSixty } from '../json/literalDates.json';
import { addZero, verifyLanguage, getRelative } from '../utils/functions';

const minutesReplacer: DateReplacer = {
  zmm: date => addZero(date.getMinutes()),
  mm: date => date.getMinutes(),
  minute: (date, lang) => {
    verifyLanguage(zeroToSixty, lang);

    return zeroToSixty[lang][date.getMinutes()];
  },
  mmrel: (date, lang) => getRelative('minute', date, lang),
};

export default minutesReplacer;
