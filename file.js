// json assignment here
//Write NodeJS code that will read the `countries.json` file, then extract only the names
//of the countries, then write those name to a new json file. You muse use the `fs` module to read and write file.

const fs = require("fs");
fs.readFile("countries.json", (error, data) => {
  if (error) {
    console.log("error", error);
  }
  const readable = Buffer.from(data).toString();
  const toJson = JSON.parse(readable);
  const countriesName = toJson.map((country) => country.name);
  fs.writeFile("countryName.json", JSON.stringify(countriesName), (error) => {
    if (error) {
      console.log("error", error);
    }
  });
});
