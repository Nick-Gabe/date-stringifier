import { plural, verifyLanguage } from '../utils/functions';
import { relativeTranslations } from '../json/literalDates.json';
import days from './days';
import months from './months';
import years from './years';

const miscReplacer: DateReplacer = {
  unixms: date => date.getTime(),
  unix: date => date.getTime() / 1000,
  century: date => Math.ceil(date.getFullYear() / 100),
  rel: (date, lang) => {
    verifyLanguage(relativeTranslations, lang);

    const { second, minute, day, hour, ago, fromNow } =
      relativeTranslations[lang];

    const elapsed = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    const elapsedSeconds = Math.abs(elapsed);
    const elapsedMinutes = Math.abs(Math.floor(elapsed / 60));
    const elapsedHours = Math.abs(Math.floor(elapsed / 3600));
    const elapsedDays = Math.abs(Math.floor(elapsed / 86400));

    if (elapsed <= 0) {
      // Less than a minute
      if (elapsed > -60) {
        return `${fromNow} ${elapsedSeconds} ${second + plural(elapsed)}`;
      }
      // Less than an hour
      else if (elapsed > -3600) {
        return `${fromNow} ${elapsedMinutes} ${
          minute + plural(elapsedMinutes)
        }`;
      }
      // Less than a day
      else if (elapsed > -86400) {
        return `${fromNow} ${elapsedHours} ${hour + plural(elapsedHours)}`;
      }
      // Less than a week
      else if (elapsed > -604800) {
        return `${fromNow} ${elapsedDays} ${day + plural(elapsedDays)}`;
      }
    } else {
      // Less than a minute
      if (elapsed < 60) {
        return `${elapsedSeconds} ${second + plural(elapsed)} ${ago}`;
      }
      // Less than an hour
      else if (elapsed < 3600) {
        return `${elapsedMinutes} ${minute + plural(elapsedMinutes)} ${ago}`;
      }
      // Less than a day
      else if (elapsed < 86400) {
        return `${elapsedHours} ${hour + plural(elapsedHours)} ${ago}`;
      }
      // Less than a week
      else if (elapsed < 604800) {
        return `${elapsedDays} ${day + plural(elapsedDays)} ${ago}`;
      }
    }

    // More than a week
    const { zDD } = days;
    const { zMM } = months;
    const { yyyy } = years;

    return `${zDD(date, 'en')}/${zMM(date, 'en')}/${yyyy(date, 'en')}`;
  },
};

export default miscReplacer;
