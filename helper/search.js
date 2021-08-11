const weather = require("weather-js");

async function search(query) {
  const weatherfind = new Promise((resolve, reject) => {
    weather.find({ search: query, degreeType: "C" }, function (err, result) {
      if (err) {
        resolve({
          error: err.toString(),
          result: null,
        });
      } else {
        resolve({
          error: null,
          result: result,
        });
      }
    });
  });
  return weatherfind;
}

module.exports = search;
