import { getRelative } from "../utils/functions";

const yearsReplacer: DateReplacer = {
  yy: (date) => date.getFullYear().toString().slice(2),
  yyyy: (date) => date.getFullYear(),
  yyrel: (date, lang) => getRelative('year', date, lang)
}

export default yearsReplacer