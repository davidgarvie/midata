const { parseData, validateData } = require("./helpers");

function midata(data) {
  try {
    validateData(data);
    return parseData(data);
  } catch (e) {
    throw e;
  }
}

module.exports = midata;
