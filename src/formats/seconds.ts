import { zeroToSixty } from '../json/literalDates.json'
import { addZero, verifyLanguage } from '../utils/functions'

const secondsReplacer: DateReplacer = {
  zss: (date) => addZero(date.getSeconds()),
  ss: (date) => date.getSeconds(),
  second: (date, lang) => {
    verifyLanguage(zeroToSixty, lang)
    
    return zeroToSixty[lang][date.getSeconds()]
  }
}

export default secondsReplacer
