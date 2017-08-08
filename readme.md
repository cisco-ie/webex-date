# webex-date [![Build Status](https://travis-ci.org/cisco-ie/webex-date.svg?branch=master)](https://travis-ci.org/cisco-ie/webex-date) [![Coverage Status](https://coveralls.io/repos/github/cisco-ie/webex-date/badge.svg?branch=master)](https://coveralls.io/github/cisco-ie/webex-date?branch=master)

> 🕰 Convert a JavaScript date type, RFC 2822, ISO-8601 to the WebEx XML API supported format

This is a tiny, simple module that uses `moment.js` to parse the input and return the format the WebEx API's support `(MM/DD/YYYY HH:mm:ss)`.

## Install

```
$ npm install --save webex-date
```

## Usage
```js
const webExDate = require('webex-date');

webExDate(new Date(2000, 1, 20, 12)) //=> 02/20/2000 12:00:00
webExDate('6 Mar 17 21:22 UT') //=> 03/06/2017 13:22:00
```

## API

### webExDate(input)

*Returns the webex date*

#### input

Type: `ISO-8601` || `RFC 2822` || `JavaScript Date`

Date to be converted

## License
MIT © [Cisco Innovation Edge](https://github.com/cisco-ie/webex-time)
