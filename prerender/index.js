/* eslint-disable */
const prerender = require('prerender');

const server = prerender({
  chromeLocation: varString(process.env.CHROME_BIN),
  chromeFlags: varArray(process.env.CHROME_FLAGS),
});
server.start();

function varArray (value) {
  return value ? value.split(',') : void 0;
}

function varString (value) {
  return /^(null|undefined)$/i.test(value) ? void 0 : value;
}

