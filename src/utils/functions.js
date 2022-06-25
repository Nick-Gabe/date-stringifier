const { DateStringifierError } = require("./classes")

module.exports = {
  addZero(num) {
    return num < 10 ? '0' + num : num
  },
  plural(expression) {
    return Math.floor(expression) > 1 ? 's' : ''
  },
  verifyLanguage(json, language) {
    if(!json[language]) {
      throw new DateStringifierError(`${language} is not a valid language`)
    }
  }
}