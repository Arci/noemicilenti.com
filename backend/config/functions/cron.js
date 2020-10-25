'use strict';
const fetch = require("node-fetch");

const wakeUpDyno = async (url) => {
  try {
    await fetch(url);
    strapi.log.info(`Fetched ${url} to keep Heroku Dyno awake.`);
  } catch (err) {
    strapi.log.error(`Error fetching ${url}: ${err.message}`);
  }
}

module.exports = {
  '* * * * *': () => {
    wakeUpDyno("https://noemicilenti.herokuapp.com")
  }
}
