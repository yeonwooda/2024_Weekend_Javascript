// const getData = fetch(
//   "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}"
// );
// getData
//   .then((v) => v.json())
//   .then((v) => v.data)
//   .then((v) => v.forEach(({ weather }) => bindData(weather)));

// const bindData = (weather) => {
//     c
// }

const lat = 37.51;
const lon = 126.72;
const APIkey = "701420b7ae63f7a20ca28fcbf59a43cf";
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
const weatherAPI = fetch(URL);

weatherAPI
  .then((v) => v.json())
  .then((v) => v.weather[0].main)
  .then((v) => {
    const weather = document.querySelector(".weather");
    weather.innerText = `부평역  현재 날씨:${v}`;
  });

// const jlat = 130.4;
// const jlat2 = 33.59;
// const fukAPI = fetch(URL);

// fuk.addEventListener("click", () => {
//   fukAPI
//     .then((v) => v.json())
//     .then((v) => v.weather[0].main)
//     .then((v) => {
//       const weather = document.querySelector(".fuk");
//       weather;
//     });
// });
