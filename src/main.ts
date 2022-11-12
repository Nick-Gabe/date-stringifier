import { DateStringifierError } from './utils/classes';
import years from './formats/years';
import months from './formats/months';
import days from './formats/days';
import hours from './formats/hours';
import minutes from './formats/minutes';
import seconds from './formats/seconds';
import milliseconds from './formats/milliseconds';
import timezone from './formats/timezone';
import misc from './formats/misc';

const formatters = {
  ...years,
  ...months,
  ...days,
  ...hours,
  ...minutes,
  ...seconds,
  ...milliseconds,
  ...timezone,
  ...misc,
};

/**
 * It takes a date, a format string, and a language, and returns a string representation of
 * the date in the specified format and language
 * @param [date] - The date to format. Defaults to the current date.
 * @param [format={zDD}/{zMM}/{yyyy}] - The format of the date string.
 * @param [language=en] - The language to use for the date.
 * @returns A function that takes a date, a format, and a language.
 */
export const dateStringifier: DateStringifier = (
  date,
  format = '{zDD}/{zMM}/{yyyy}',
  language = 'en',
) => {
  if (!(date instanceof Date) || isNaN(date.getDay())) {
    throw new DateStringifierError(
      `${date as unknown as string} is not a valid Date`,
    );
  }

  const sortByLength = (a: string, b: string): number =>
    a.length > b.length ? -1 : 1;

  const formatKeys = Object.keys(formatters).sort(sortByLength).join('|');
  const formatRegex = new RegExp(`{(${formatKeys})}`, 'g');

  return format.replace(formatRegex, e => {
    return `${formatters[e.slice(1, -1)](
      date,
      language.toLowerCase() as AvailableLanguages,
    )}`;
  });
};
