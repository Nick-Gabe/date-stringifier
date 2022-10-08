const { DateStringifierError } = require('./utils/classes')

const formatters = {
  ...require('./formats/years'),
  ...require('./formats/months'),
  ...require('./formats/days'),
  ...require('./formats/hours'),
  ...require('./formats/minutes'),
  ...require('./formats/seconds'),
  ...require('./formats/milliseconds'),
  ...require('./formats/timezone'),
  ...require('./formats/misc')
}

/**
 * It takes a date, a format string, and a language, and returns a string representation of
 * the date in the specified format and language
 * @param [date] - The date to format. Defaults to the current date.
 * @param [format={zDD}/{zMM}/{yyyy}] - The format of the date string.
 * @param [language=en] - The language to use for the date.
 * @returns A function that takes a date, a format, and a language.
 */
function dateStringifier(date = new Date(), format = '{zDD}/{zMM}/{yyyy}', language = 'en') {
  if (date instanceof Date === false || isNaN(date.getDay())) {
    throw new DateStringifierError(`${date} is not a valid Date`)
  }

  const sortByLength = (a, b) => a.length > b.length ? -1 : 1
  const formatKeys = Object.keys(formatters).sort(sortByLength).join('|')
  const formatRegex = new RegExp(`{(${formatKeys})}`, 'g')

  return format.replace(formatRegex, e => {
    return formatters[e.slice(1, -1)](date, language.toLowerCase())
  })
}

module.exports = { dateStringifier }