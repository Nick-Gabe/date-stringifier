const { plural, verifyLanguage } = require("../utils/functions")
const { relativeTranslations } = require('../json/literalDates.json')

module.exports = {
  unixms: (date) => date.getTime(),
  unix: (date) => date.getTime() / 1000,
  century: (date) => Math.ceil(date.getFullYear()/100),
  rel: (date, lang) => {
    verifyLanguage(relativeTranslations, lang)

    const { second, minute, day, hour, ago, fromnow } = relativeTranslations[lang]

    const elapsed = Math.floor((new Date().getTime() - date.getTime()) / 1000)

    const seconds = Math.abs(elapsed),
      minutes = Math.abs(Math.floor(elapsed / 60)),
      hours = Math.abs(Math.floor(elapsed / 3600)),
      days = Math.abs(Math.floor(elapsed / 86400))

    if(elapsed <= 0) {
      // Less than a minute
      if (elapsed > -60) {
        return `${fromnow} ${seconds} ${second+plural(elapsed)}`
      }
      // Less than an hour
      else if (elapsed > -3600) {
        return `${fromnow} ${minutes} ${minute+plural(minutes)}`
      }
      // Less than a day
      else if (elapsed > -86400) {
        return `${fromnow} ${hours} ${hour+plural(hours)}`
      }
      // Less than a week
      else if (elapsed > -604800) {
        return `${fromnow} ${days} ${day+plural(days)}`
      }
    }
    else {
      // Less than a minute
      if (elapsed < 60) {
        return `${seconds} ${second+plural(elapsed)} ${ago}`
      }
      // Less than an hour
      else if (elapsed < 3600) {
        return `${minutes} ${minute+plural(minutes)} ${ago}`
      }
      // Less than a day
      else if (elapsed < 86400) {
        return `${hours} ${hour+plural(hours)} ${ago}`
      }
      // Less than a week
      else if (elapsed < 604800) {
        return `${days} ${day+plural(days)} ${ago}`
      }
    }

    // More than a week
    const { zDD, zMM, yyyy } = {
      ...require('./days'),
      ...require('./months'),
      ...require('./years')
    }

    return `${zDD(date)}/${zMM(date)}/${yyyy(date)}`
  }
}