function parseData(data) {
  if (!data) {
    throw new Error(
      "Did not find any data. Make sure it is provided as an argument"
    );
  }
  const rows = data.split(/\n/);
  const keys = rows[0].split(";").filter(x => x.length > 1);
  rows.shift();
  const result = rows
    .map(x => x.split(";"))
    .filter(x => x.length > 1)
    .map(x => {
      const obj = {};
      x.forEach((value, index) => {
        if (value.length > 1) {
          obj[keys[index]] = value;
        }
      });
      return obj;
    });
  return result;
}

module.exports = parseData;
