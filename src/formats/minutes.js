const { zeroToSixty } = require('../json/literalDates.json')
const { addZero, verifyLanguage } = require('../utils/functions')

module.exports = {
  zmm: (date) => addZero(date.getMinutes()),
  mm: (date) => date.getMinutes(),
  minute: (date, lang) => {
    verifyLanguage(zeroToSixty, lang)
    
    return zeroToSixty[lang][date.getMinutes()]
  }
}