# getDateFromFormat

A small utility function to get a formatted date string from a Date object or a string.

## Installation

npm install getDateFromFormat

## Usage

```javascript
const getDateFromFormat = require('getDateFromFormat');

const date = new Date();
const formattedDate = getDateFromFormat(date, 'yyyy-mm-dd');

console.log(formattedDate); // 2023-09-01

Parameters
date: The date to format. Can be a Date object or a string.
format: The format string. The following tokens are supported:
yyyy: The year, four digits.
mmmm: The month, full name.
mmm: The month, abbreviated name.
mm: The month, zero-padded number.
dd: The day, zero-padded number.
hh: The hour, zero-padded number.
ii: The minute, zero-padded number.
ss: The second, zero-padded number.
day: The day of the week, abbreviated name.
Returns
The formatted date string.

Examples
JavaScript
getDateFromFormat(new Date(), 'yyyy-mm-dd'); // 2023-09-01
getDateFromFormat('2023-09-01', 'dd/mm/yyyy'); // 01/09/2023
