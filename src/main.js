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