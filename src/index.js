const { parseData, validateData } = require("./helpers");

function midata(data) {
  validateData(data);
  return parseData(data);
}

module.exports = midata;
