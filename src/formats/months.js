const { months } = require('../json/literalDates.json')
const { addZero, verifyLanguage, getRelative } = require('../utils/functions')

module.exports = {
  zMM: (date) => addZero(date.getMonth() + 1),
  MM: (date) => date.getMonth() + 1,
  month: (date, lang) => {
    verifyLanguage(months, lang)
    
    return months[lang][date.getMonth()]
  },
  MMrel: (date, lang) => getRelative('month', date, lang)
}