function addZero(num) {
  return num < 10 ? '0' + num : num
}

function formatDate(date = new Date(), format = '{DD}/{MM}/{yyyy}') {
	if(typeof date.getMonth === 'function' && isNaN(date.getMonth())) throw new Error('(DateFormatter) The Date passed is not a valid Date')
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const hours = ['Twenty-Four', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Twenty-One', 'Twenty-Two', 'Twenty-Three']

  const replacements = {
    yy: date.getFullYear().toString().slice(2),
    yyyy: date.getFullYear(),

    zMM: addZero(date.getMonth() + 1),
    MM: date.getMonth() + 1,
    month: months[date.getMonth()],

    day: days[date.getDay()],
    zDD: addZero(date.getDate()),
    DD: date.getDate(),
    oDD: `${date.getDate()}${!/[1-3]/.test(date.getDate().toString().slice(-1)) ? 'th' : ['st','nd','rd'][date.getDate().toString().slice(-1)-1]}`,
    dds: date.getDay()+1,
    ddm: date.getDay() === 0 ? 7 : date.getDay(),
    

    hour: hours[date.getHours()],
    hh: date.getHours(),
    zhh: addZero(date.getHours()),
    hour12: hours[date.getHours()%12 === 0 ? 12 : date.getHours()%12],
    hh12: date.getHours()%12 === 0 ? 12 : date.getHours()%12,
    zhh12: addZero(date.getHours()%12 === 0 ? 12 : date.getHours()%12),
    hhp: date.getHours() >= 12 ? 'PM' : 'AM',

    zmm: addZero(date.getMinutes()),
    mm: date.getMinutes(),

    zss: addZero(date.getSeconds()),
    ss: date.getSeconds(),

    ms: date.getMilliseconds(),

    unixms: date.getTime(),
    unix: date.getTime()/1000,

    tz: date.getTimezoneOffset(),
    utc: date.getTimezoneOffset() > 0 ?
    '-'+date.getTimezoneOffset()/60 
    : '+'+date.getTimezoneOffset()/60
  }

  format = format.replace(/{(yyyy|yy|zMM|MM|month|day|oDD|zDD|DD|dds|ddm|zhh12|hour12|hour|hh12|hhp|zhh|hh|zmm|mm|zss|ss|ms|unixms|unix|tz|utc)}/g, e => replacements[e.slice(1,-1)])
  return format
}

module.exports = formatDate