const validateData = require("./validateData");

describe("validateData", () => {
  it("should throw if no data specified", () => {
    expect(() => validateData()).toThrow();
  });

  it("should throw if data is not a string", () => {
    expect(() => validateData([])).toThrow();
    expect(() => validateData("a string")).not.toThrow();
  });
});
