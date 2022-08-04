/* eslint-disable */
const prerender = require('prerender');
const server = prerender({
  port: 7070,
  // chromeLocation: 'http://chrome:4444/wd/hub'
});
server.start();
