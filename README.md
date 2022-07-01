# *Date Stringifier*
![](https://img.shields.io/github/license/Nick-gabe/date-stringifier)
![](https://img.shields.io/github/issues/Nick-Gabe/date-stringifier)
![](https://img.shields.io/github/package-json/v/Nick-Gabe/date-stringifier)

Date Stringifier is a package created exclusively for Date Formatting. Trying to be simple and direct as possible.

## 🚀 How To install:
```
npm install date-stringifier
```

## 📚 How to use:
First you will need to import the package.

Then you can use it as a function, passing a Date created using the [Date Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), and how you want the formatted output to be. You can use [Date variables](#dateVariables) in your string, as shown in the example below:
```javascript
const dateStringifier = require('date-stringifier')
const date = new Date(1995, 11, 17)

console.log(dateStringifier(date, '{DD}/{MM}/{yyyy}'))
// It will print 17/12/1995
// *Months are zero indexed, so it adds one
```
You can also specify the language you want the result to be, if you don't specify, it will be set to English by default. The available languages are:
- `en` - English
- `pt` - Portuguese
```javascript
const date = new Date()
const english = dateStringifier(date, 'Today is the {oDD} day of {month}', 'en')
// Today is the 25th day of June
const portuguese = dateStringifier(date, 'Hoje é o {oDD} dia de {month}', 'pt')
// Hoje é o 25º dia de Junho
```

<h2 id="dateVariables"> 📅 Date Variables </h2>

Date variables are the ones you use to insert something based on the date you passed to the function. For example, every `{yyyy}` in your string will be replaced by the Date's year (1995).

Any text that is not between brackets "`{}`" will not be considered as a variable, therefore it won't change in the final result.

These are the Date variables you can use in your string:

**They are case-sensitive.*
### Menu:
* <a href="#Years">Years</a> •
 <a href="#Months">Months</a> •
 <a href="#Days">Days</a>
* <a href="#Hours">Hours</a> •
 <a href="#Minutes">Minutes</a> •
 <a href="#Seconds">Seconds</a> •
 <a href="#Milliseconds">Milliseconds</a>
* <a href="#Timezone">Timezone</a> •
 <a href="#Others">Others</a>

| Syntax | Description | Result |
| :------: | ----------- | ------ |
|<h3 id="Years">**Years**</h3>|
| `yyyy` | Full Year. | 1995, 2022...
| `yy` | Just the last 2 digits of the Year. | 95, 22...
| `yyrel` | The relative time in years compared to now. | 1 year ago, in 10 years...
|<h3 id="Months">**Months**</h3>|
| `month` | Month's name.| January, February...|
| `MM` | Month's number. | 1, 2... 10, 11, 12.
| `zMM` | Month's number, with a zero if it is below 10. | 01, 02... 10, 11, 12.
| `MMrel` | The relative time in months compared to now. | 1 month ago, in 10 months...
|<h3 id="Days">**Days**</h3>|
| `day` | Name of the day of the week.|Sunday, Monday...
| `DDs` | Corresponding day of the week, starting on Sunday. | 1, 2, 3, 4, 5, 6 or 7.
| `DDm` | Corresponding day of the week, starting on Monday. | 1, 2, 3, 4, 5, 6 or 7.
| `DD` | Day of the month. | 1, 2... 28, 29, 30...
| `zDD` | Day of the month, with a zero if it is below 10. | 01, 02... 28, 29, 30...
| `oDD` | Ordinal day of the month. | 1st, 2nd, 3rd... 29th, 30th...
| `DDrel` | The relative time in days compared to now. | 1 day ago, in 10 days...
|<h3 id="Hours">**Hours**</h3>|
| `hour` | Hour in 24:00 format through text. | One, Two... Twenty-three, Twenty-four.
| `hh` | Hour in 24:00 format. | 1, 2... 22, 23, 0.
| `zhh` | Hour in 24:00 format, with a zero if it is below 10. | 01, 02... 22, 23, 00.
| `hour12` | Hour in 12:00 format through text. | One, Two... Eleven, Twelve.
| `hh12` | Hour in 12:00 format. | 1, 2... 11, 12, 1.
| `zhh12` | Hour in 12:00 format, with a zero if it is below 10. | 01, 02... 11, 12, 01.
| `hhp` | The hour period, returns AM if it is between 00:00-11:59 and PM if it is between 12:00-23:59. | AM or PM.
| `hhrel` | The relative time in hours compared to now. | 1 hour ago, in 10 hours...
|<h3 id="Minutes">**Minutes**</h3>|
| `minute` | Minute through text. | One, Two... Fifty-eight, Fifty-nine.
| `mm` | Minutes. | 1, 2... 58, 59.
| `zmm` | Minutes, with a zero if it is below 10. | 01, 02... 58, 59.
| `mmrel` | The relative time in minutes compared to now. | 7 minutes ago, in 150 minutes...
|<h3 id="Seconds">**Seconds**</h3>|
| `second` | Second throught text. | One, Two... Fifty-eight, Fifty-nine.
| `ss` | Seconds. | 1, 2... 58, 59.
| `zss` | Seconds, with a zero if it is below 10. | 01, 02... 58, 59.
| `ssrel` | The relative time in seconds compared to now. | 7 seconds ago, in 15000 seconds...
|<h3 id="Milliseconds">**Milliseconds**</h3>|
| `ms` | Milliseconds. | 0, 1... 998, 999.
|<h3 id="Timezone">**Timezone**</h3>|
| `tz` | The difference in minutes between UTC+0. | ...-120, -60, 0, 60, 120...
| `utc` | The difference in hours between UTC+0. | ...-2, -1, +0, +1, +2...
|<h3 id="Others">**Others**</h3>|
| `unixms` | How many seconds have passed since January 1st of 1970, including milliseconds. | 1610309753427, 1646932270794...
| `unix` | How many seconds have passed since January 1st of 1970. | 1610309753, 1646932270...
| `rel` | The relative date time compared to now. | 7 seconds ago, in 2 hours, 10 days ago...
| `century` | The dates century. | 19, 20, 21...

## 🐉 Info
This package is open source, feel free to contribute through GitHub.

Created by [Nick Gabe](https://github.com/Nick-Gabe).