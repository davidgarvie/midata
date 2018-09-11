const midata = require("..");
const { readFile } = require("fs");
const { resolve } = require("path");

describe("midata", () => {
  let mockData;

  beforeAll(done => {
    const filePath = resolve(__dirname, "../__mocks__/data.csv");
    readFile(filePath, "utf-8", (err, data) => {
      if (!err) {
        mockData = data;
        done();
      }
    });
  });

  test("Should read some midata data", () => {
    expect(midata(mockData)).toMatchSnapshot();
  });
});
