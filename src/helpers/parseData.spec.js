const parseData = require("./parseData");
const data = require("./__mocks__/data");

describe("parseData", () => {
  test("should throw if not provided with any data", () => {
    expect(() => parseData()).toThrow();
  });

  test("should parse data", () => {
    expect(parseData(data)).toMatchSnapshot();
  });
});
