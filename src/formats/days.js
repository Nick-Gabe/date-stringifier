const { days, ordinal } = require('../json/literalDates.json')
const { addZero, verifyLanguage } = require('../utils/functions')

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
  dds: (date) => date.getDay() + 1,
  ddm: (date) => date.getDay() === 0 ? 7 : date.getDay()
}