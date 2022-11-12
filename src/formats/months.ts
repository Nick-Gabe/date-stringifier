import { months } from '../json/literalDates.json'
import { addZero, verifyLanguage, getRelative } from '../utils/functions'

const monthsReplacer: DateReplacer = {
  zMM: (date) => addZero(date.getMonth() + 1),
  MM: (date) => date.getMonth() + 1,
  month: (date, lang) => {
    verifyLanguage(months, lang)
    
    return months[lang][date.getMonth()]
  },
  MMrel: (date, lang) => getRelative('month', date, lang)
}

export default monthsReplacer
