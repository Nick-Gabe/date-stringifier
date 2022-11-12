declare type AvailableLanguages = 'en' | 'pt'

declare type DateStringifier = (date: Date, format: string, language: AvailableLanguages) => string

interface ErrorConstructor {
  captureStackTrace(thisArg: any, func: any): void
}