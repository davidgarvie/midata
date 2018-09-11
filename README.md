# midata

A simple tool which takes a midata data set and returns the data in a useful format. Pull requests and contributions are welcome.

## Getting started

If you'd like to use midata in your application, it's pretty easy to get started. In your project, run:

`npm install midata`

## Example usage

```js
const { readFile } = require("fs");
const midata = require("midata");

const data = readFile("/some/dir/midata.csv", "utf-8", (err, data) => {
  if (err) throw err;
  midata(data); // returns your data
});
```
