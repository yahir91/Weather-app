// import convert from './Tooggle.js'
const input = document.querySelector('[data-city-search]');
const locationElement = document.querySelector('[data-location]');
const statusElement = document.querySelector('[data-status]');
const temperatureElement = document.querySelector('[data-temperature]');
const rainElement = document.querySelector('[data-precipitation]');
const windElement = document.querySelector('[data-wind]');
const convert = document.querySelector('#convert');

const apiKey = '0e2959b47fb2ec863a63504b4e25870a';

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const tempValue = data.main.temp;
        const nameValue = data.name;
        const descValue = data.weather[0].description;
        var tempCelcius = parseInt(tempValue - 273.15, 10);
        const windValue = data.wind.speed;
        const rainValue = data.clouds.all;
        locationElement.textContent = nameValue;
        statusElement.textContent = descValue;
        temperatureElement.textContent = `Temp ${tempCelcius} C`;
        windElement.textContent = `${windValue}m/s`;
        rainElement.textContent = `${rainValue}%`;
      });
    input.value = '';
  }
});

export {
  convert,
  temperatureElement
}