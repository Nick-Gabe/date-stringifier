const { getRelative } = require("../utils/functions");

module.exports = {
  yy: (date) => date.getFullYear().toString().slice(2),
  yyyy: (date) => date.getFullYear(),
  yyrel: (date, lang) => getRelative('year', date, lang)
}