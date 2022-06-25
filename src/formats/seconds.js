const { zeroToSixty } = require('../json/literalDates.json')
const { addZero, verifyLanguage } = require('../utils/functions')

module.exports = {
  zss: (date) => addZero(date.getSeconds()),
  ss: (date) => date.getSeconds(),
  second: (date, lang) => {
    verifyLanguage(zeroToSixty, lang)
    
    return zeroToSixty[lang][date.getSeconds()]
  }
}