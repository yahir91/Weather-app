const input = document.querySelector('[data-city-search]');
// const button = document.querySelector('.submit');
// const main = document.querySelector('#name');
// const temp = document.querySelector('[data-temperature]');
// const desc = document.querySelector('.desc');
const locationElement = document.querySelector('[data-location]')
const statusElement = document.querySelector('[data-status]')
const temperatureElement = document.querySelector('[data-temperature]')
// const precipitationElement = document.querySelector('[data-precipitation]')
const windElement = document.querySelector('[data-wind]')

const apiKey = '0e2959b47fb2ec863a63504b4e25870a';

input.addEventListener('click', () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const tempValue = data.main.temp;
      const nameValue = data.name;
      const descValue = data.weather[0].description;
      const tempCelcius = parseInt(tempValue - 273.15, 10);
      const windValue = data.wind.windspeed;
      locationElement.textContent = nameValue;
      statusElement.textContent = descValue;
      temperatureElement.textContent = `Temp - ${tempCelcius} C`;
      windElement.textContent = windValue;
    });
  input.value = '';
});