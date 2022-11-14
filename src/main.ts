import { DateStringifierError } from './utils/classes'
import years from './formats/years'
import months from './formats/months'
import days from './formats/days'
import hours from './formats/hours'
import minutes from './formats/minutes'
import seconds from './formats/seconds'
import milliseconds from './formats/milliseconds'
import timezone from './formats/timezone'
import misc from './formats/misc'

const formatters = {
  ...years,
  ...months,
  ...days,
  ...hours,
  ...minutes,
  ...seconds,
  ...milliseconds,
  ...timezone,
  ...misc
}

/**
 * It takes a date, a format string, and a language, and returns a string representation of
 * the date in the specified format and language
 * @param [date] - The date to format. Defaults to the current date.
 * @param [format={zDD}/{zMM}/{yyyy}] - The format of the date string.
 * @param [language=en] - The language to use for the date.
 * @returns A function that takes a date, a format, and a language.
 */
export const dateStringifier = (date: Date, format: string = '{zDD}/{zMM}/{yyyy}', language: 'en' | 'pt' = 'en') => {
  if (date instanceof Date === false || isNaN(date.getDay())) {
    throw new DateStringifierError(`${date} is not a valid Date`)
  }

  const sortByLength = (a: string, b: string) => a.length > b.length ? -1 : 1
  const formatKeys = Object.keys(formatters).sort(sortByLength).join('|')
  const formatRegex = new RegExp(`{(${formatKeys})}`, 'g')
  
  return format.replace(formatRegex, e => {
    return `${formatters[e.slice(1, -1)](date, language.toLowerCase() as AvailableLanguages)}`
  })
}