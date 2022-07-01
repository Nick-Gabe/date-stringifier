const { hours } = require('../json/literalDates.json')
const { addZero, verifyLanguage, getRelative } = require('../utils/functions')

module.exports = {
  hour: (date, lang) => {
    verifyLanguage(hours, lang)

    return hours[lang][date.getHours()]
  },
  hh: (date) => date.getHours(),
  zhh: (date) => addZero(date.getHours()),
  hour12: (date, lang) => {
    verifyLanguage(hours, lang)

    return hours[lang][date.getHours() % 12 === 0 ? 12 : date.getHours() % 12]
  },
  hh12: (date) => date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
  zhh12: (date) => addZero(date.getHours() % 12 === 0 ? 12 : date.getHours() % 12),
  hhp: (date) => date.getHours() >= 12 ? 'PM' : 'AM',
  hhrel: (date, lang) => getRelative('hour', date, lang)
}