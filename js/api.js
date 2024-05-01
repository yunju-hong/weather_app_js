const api_key = '71038a120852dc57ff848577933c3c84';

export const urls = {
  // endpoint urls
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=matric`;
  },

  geocode(loca) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${loca}&limit=5`;
  },
};

/**
 *
 * @param {*} url
 * @param {*} callback
 */

const fetchDate = function (url, callback) {
  fetch(`${url}&appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
};

fetchDate(urls.geocode('london'), function (locations) {
  console.log(locations);
});

// 구조분해 할당