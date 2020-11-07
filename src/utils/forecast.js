const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/forecast?access_key=cc75702c6bfb0e4bb9a2f71e07a70260&query=${latitude},${longitude}&units=f`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const { current } = body;
      console.log(current);
      callback(
        undefined,
        `${current.weather_descriptions[0]}.It is currently ${current.temperature} degress out. It feels like ${current.feelslike} out. This is observed at ${current.observation_time}`
      );
    }
  });
};

module.exports = forecast;
