const API_KEY = "05fb53ddaab38a01e78274d0c0b38763";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
console.log("You live in", lat, lon);
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
fetch(url).then(response => response.json())
.then(data => {
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");
  city.innerText = data.name;
  weather.innerText = data.weather[0].main;
});
};
function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);