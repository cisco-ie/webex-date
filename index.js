'use strict';
const moment = require('moment');

/**
 * Converts a Date Object to a MM/DD/YYYY HH:mm:ss format for WebEx
 * @param  {Date} time A valid date format ISO-8601 or RFC 2822 or JavaScript Date
 * @return {String}      WebEx XML API Date Format
 */
module.exports = time =>
	(moment(time).isValid()) ?
		moment(time).format('MM/DD/YYYY HH:mm:ss') :
		_throw(`Expected valid time format, instead recieved ${time}`);

function _throw(err) {
	throw new Error(err);
}
