declare type AvailableLanguages = 'en' | 'pt'

declare type DateStringifier = (date: Date, format?: string, language?: AvailableLanguages) => string

declare type DateReplacer = {
  [key: string]: (date: Date, lang: AvailableLanguages) => string | number
}
declare interface ErrorConstructor {
  captureStackTrace(thisArg: any, func: any): void
}

declare type TimeTypes =  'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year' 