const { plural, verifyLanguage } = require("../utils/functions")
const { agoTranslations } = require('../json/literalDates.json')

module.exports = {
  unixms: (date) => date.getTime(),
  unix: (date) => date.getTime() / 1000,
  ago: (date, lang) => {
    verifyLanguage(agoTranslations, lang)

    const { second, minute, day, hour, ago } = agoTranslations[lang]

    const elapsed = Math.floor((new Date().getTime() - date.getTime()) / 1000)

    const seconds = elapsed,
      minutes = Math.floor(elapsed / 60),
      hours = Math.floor(elapsed / 3600),
      days = Math.floor(elapsed / 86400)

    // Less than a minute
    if (elapsed < 60) {
      return `${seconds} ${second}${plural(elapsed)} ${ago}`
    }
    // Less than an hour
    else if (elapsed < 3600) {
      return `${minutes} ${minute}${plural(minutes)} ${ago}`
    }
    // Less than a day
    else if (elapsed < 86400) {
      return `${hours} ${hour}${plural(hours)} ${ago}`
    }
    // Less than a week
    else if (elapsed < 604800) {
      return `${days} ${day}${plural(days)} ${ago}`
    }

    // More than a week
    const { zDD, zMM, yyyy } = {
      ...require('./days')(date),
      ...require('./months')(date),
      ...require('./years')(date)
    }

    return `${zDD}/${zMM}/${yyyy}`
  }
}