import { days, ordinal } from '../json/literalDates.json'
import { addZero, verifyLanguage, getRelative } from '../utils/functions'

const daysReplacer: DateReplacer = {
  day: (date, lang) => {
    verifyLanguage(days, lang)
    return days[lang][date.getDay()]
  },
  zDD: (date) => addZero(date.getDate()),
  DD: (date) => date.getDate(),
  oDD: (date, lang) => {
    verifyLanguage(ordinal, lang)
    const ordinalList = ordinal[lang]
    const lastDigit = date.getDate().toString().slice(-1) as keyof typeof ordinalList

    if(typeof ordinalList === 'string') return `${date.getDate()}${ordinalList}`

    const ordinalChar = ordinalList[lastDigit] ?? ordinalList.default
    return `${date.getDate()}${ordinalChar}`
  },
  DDs: (date) => date.getDay() + 1,
  DDm: (date) => date.getDay() === 0 ? 7 : date.getDay(),
  DDrel: (date, lang) => getRelative('day', date, lang)
}

export default daysReplacer
