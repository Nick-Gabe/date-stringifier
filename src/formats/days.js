const { days, ordinal } = require('../json/literalDates.json')
const { addZero, verifyLanguage, getRelative } = require('../utils/functions')

module.exports = {
  day: (date, lang) => {
    verifyLanguage(days, lang)
    return days[lang][date.getDay()]
  },
  zDD: (date) => addZero(date.getDate()),
  DD: (date) => date.getDate(),
  oDD: (date, lang) => {
    verifyLanguage(ordinal, lang)
    const ordinalList = ordinal[lang]
    const lastDigit = date.getDate().toString().slice(-1)

    if(typeof ordinalList === 'string') return `${date.getDate()}${ordinalList}`

    const ordinalChar = ordinalList[lastDigit] ?? ordinalList.default
    return `${date.getDate()}${ordinalChar}`
  },
  DDs: (date) => date.getDay() + 1,
  DDm: (date) => date.getDay() === 0 ? 7 : date.getDay(),
  DDrel: (date, lang) => getRelative('day', date, lang)
}