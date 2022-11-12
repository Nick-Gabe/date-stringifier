declare type AvailableLanguages = 'en' | 'pt';

declare type DateStringifier = (
  date: Date,
  format?: string,
  language?: AvailableLanguages,
) => string;

declare interface DateReplacer {
  [key: string]: (date: Date, lang: AvailableLanguages) => string | number;
}
declare interface ErrorConstructor {
  captureStackTrace: (thisArg: unknown, func: unknown) => void;
}

declare type TimeTypes =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'year';
