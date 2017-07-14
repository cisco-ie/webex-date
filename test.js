import test from 'ava';
import webExTime from '.';

test('WebEx Time', t => {
	t.is(webExTime(new Date(2000, 1, 20, 12)), '02/20/2000 12:00:00');
	t.is(webExTime('6 Mar 17 21:22 UT'), '03/06/2017 13:22:00');
});

test('Errors for invalid date', t => {
	const error = t.throws(() => webExTime('zzzazzsaz'));
	t.is(error.message, 'Expected valid time format, instead recieved zzzazzsaz');
});
