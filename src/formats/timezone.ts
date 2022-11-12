const timezoneReplacer: DateReplacer = {
  tz: date => date.getTimezoneOffset(),
  utc: date => {
    const offset = date.getTimezoneOffset();
    const utcHours = offset / 60;

    return `${offset > 0 ? '-' : '+'}${utcHours}`;
  },
};

export default timezoneReplacer;
