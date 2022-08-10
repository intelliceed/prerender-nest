/* eslint-disable */
const prerender = require('prerender');
const server = prerender({
  port: 7070,
  chromeLocation: process.env.CHROME_BIN
});
server.start();
