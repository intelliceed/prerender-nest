/* eslint-disable */
const prerender = require('prerender');

const server = prerender({
  port: varNumber(process.env.PRERENDER_PORT),
  browserDebuggingPort: varNumber(process.env.CHROME_DEBUGGING_PORT),
  forwardHeaders: varBoolean(process.env.CHROME_FORWARD_HEADERS),
  chromeLocation: varString(process.env.CHROME_BIN),
  chromeFlags: varArray(process.env.CHROME_FLAGS),
  pageLoadTimeout: varNumber(process.env.CHROME_PAGE_LOAD_TIMEOUT) || 2e4, // Maximum time to page rendering
  pageReadyDelay: varNumber(process.env.CHROME_PAGE_READY_DELAY) || 3e2, // Give a bit time after last request to render data in html or trigger more requests
  pageDoneCheckInterval: varNumber(process.env.CHROME_PAGE_DONE_CHECK_INTERVAL) || 3e2, // How often page should be checked about ready state
  followRedirects: varBoolean(process.env.CHROME_FOLLOW_REDIREC) || false, // Weather to follow redirect
});

server.start();

/******************************************************
 *            variables parsers
 *****************************************************/
function varBoolean (value) {
  return /^(true|1)$/i.test(value);
}

function varNumber (value) {
  return parseFloat(value) || void 0;
}

function varArray (value) {
  return value ? value.split(',') : void 0;
}

function varString (value) {
  return /^(null|undefined)$/i.test(value) ? void 0 : value;
}

