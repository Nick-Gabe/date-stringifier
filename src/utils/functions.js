const { DateStringifierError } = require("./classes")
const { relativeTranslations } = require('../json/literalDates.json')

module.exports = {
  addZero(num) {
    return num < 10 ? '0' + num : num
  },
  plural(expression) {
    return Math.floor(expression) !== 1 ? 's' : ''
  },
  verifyLanguage(json, language) {
    if (!json[language]) {
      throw new DateStringifierError(`${language} is not a valid language`)
    }
  },
  getRelative(type, date, lang) {
    const { verifyLanguage, plural } = require('./functions.js')
    verifyLanguage(relativeTranslations, lang)
    const translations = relativeTranslations[lang]
    const { ago, fromNow } = translations

    const second = 1,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24,
      week = day * 7,
      month = week * 4,
      year = month * 12

    const timeTypes = { second, minute, hour, day, week, month, year }

    const elapsed = Math.floor((new Date().getTime() - date.getTime()) / 1000)
    const time = Math.abs(Math.round(elapsed / Math.floor(timeTypes[type])))

    // if it is irregular, use its own plural, if its regular just add an "s"
    const hasPlural = Array.isArray(translations[type])
      ? plural(time) && translations[type][1] || translations[type][0]
      : translations[type] + plural(time)

    if(elapsed <= 0) {
      return `${fromNow} ${time} ${hasPlural}`
    }
    return `${time} ${hasPlural} ${ago}`
  }
}