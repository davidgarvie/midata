function validateData(data) {
  if (!data) {
    throw new Error(
      "Make sure a valid file path is provided as the first argument"
    );
  }

  if (typeof data !== "string") {
    throw new Error(
      "Expected midata to be in the form of a string, please make sure you have correctly imported your data."
    );
  }
}

module.exports = validateData;
