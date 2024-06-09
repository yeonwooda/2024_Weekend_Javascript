const APIkey = "701420b7ae63f7a20ca28fcbf59a43cf";
const data = [
  { cityName: "korea", lat: 33.75, lon: 126.72 },
  { cityName: "japan", lat: 33.59, lon: 130.4 },
  { cityName: "china", lat: 36.06, lon: 120.3 },
];

const weatherPhoto = {
  Clear: "day08/weather/photo/happy.jpg",
  Clouds: "day08/weather/photo/Clouds.jpg",
};

data.forEach(({ cityName, lat, lon }) => {
  const btn = document.querySelector(`.${cityName}`);
  btn.addEventListener("click", () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
    const weatherAPI = fetch(URL);
    weatherAPI
      .then((value) => value.json())
      .then(({ main, weather }) => ({ main, weather }))
      .then((value) => {
        const mainTag = document.querySelector("main");
        mainTag.style.backgroundImage = `url('${
          weatherPhoto[value.weather[0].main]
        }')`;

        const weatehrTag = document.querySelector(".weather__info");
        weatehrTag.innerText = `${cityName} is ${weather[0].main}`;
        const tempTag = document.querySelector(".temp__info");
        tempTag.innerText = `${cityName}'s temp is ${value.main.temp}`;
      });
  });
});
