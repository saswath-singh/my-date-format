# getDateInFormat

A small utility function to get a formatted date string from a Date object or a string.

## Installation

npm install getDateInFormat

## Usage

```javascript
const getDateInFormat = require('getDateInFormat');

const date = new Date();
const formattedDate = getDateInFormat(date, 'yyyy-mm-dd');

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
getDateInFormat(new Date(), 'yyyy-mm-dd'); // 2023-09-01
getDateInFormat('2023-09-01', 'dd/mm/yyyy'); // 01/09/2023
getDateInFormat("01/01/2025", "yyyy-mmm-dd hh:mm"); // 2025-Jan-01 00:00