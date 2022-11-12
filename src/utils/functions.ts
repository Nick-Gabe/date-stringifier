import { DateStringifierError } from './classes';
import { relativeTranslations } from '../json/literalDates.json';

export const addZero = (num: number): string => {
  return `${num < 10 ? `0${num}` : num}`;
};

export const plural = (num: number): string => {
  return Math.floor(num) !== 1 ? 's' : '';
};

export const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && !Array.isArray(value) && value !== null;

export const verifyLanguage = (
  json: unknown,
  language: AvailableLanguages,
): void => {
  if (isObject(json) && json[language] === undefined) {
    throw new DateStringifierError(`${language} is not a valid language`);
  }
};

export const getRelative = (
  type: TimeTypes,
  date: Date,
  lang: AvailableLanguages,
): string => {
  verifyLanguage(relativeTranslations, lang);
  const translations = relativeTranslations[lang];
  const { ago, fromNow } = translations;

  const second = 1;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = week * 4;
  const year = month * 12;

  const timeTypes = { second, minute, hour, day, week, month, year };

  const elapsed = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  const time = Math.abs(Math.round(elapsed / Math.floor(timeTypes[type])));

  const transType = translations[type];

  let word: string;

  // if it is irregular, use its own plural, if its regular just add an "s"
  if (plural(time).length > 0) {
    if (Array.isArray(transType)) word = transType[1] ?? transType[0];
    else word = transType + 's';
  } else {
    word = transType as string;
  }

  if (elapsed <= 0) return `${fromNow} ${time} ${word}`;
  return `${time} ${word} ${ago}`;
};
