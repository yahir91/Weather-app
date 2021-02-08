// import convert from './Tooggle.js'
const input = document.querySelector('[data-city-search]');
const locationElement = document.querySelector('[data-location]');
const statusElement = document.querySelector('[data-status]');
const temperatureElement = document.querySelector('[data-temperature]');
const rainElement = document.querySelector('[data-precipitation]');
const windElement = document.querySelector('[data-wind]');
const convert = document.querySelector('#convert');
const body = document.querySelector('body')

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
        const weatherId = data.weather[0].id  
        locationElement.textContent = nameValue;
        statusElement.textContent = descValue;
        temperatureElement.textContent = `Temp ${tempCelcius} C`;
        windElement.textContent = `${windValue}m/s`;
        rainElement.textContent = `${rainValue}%`;
        console.log(String(weatherId)[0])
        switch (String(weatherId)[0]) {
          case '2':
            body.classList.add('thunder');
            break;
          case '3':
            body.classList.add('drizzle');
            break;
          case '5':
            body.classList.add('rain');
            break;
          case '6':
            body.classList.add('snow');
            break;
          case '7':
            body.classList.add('smoke')
            break;
          case '8':
            body.classList.add('cloud')
        }
      });
    input.value = '';
  }
});

export {
  convert,
  temperatureElement
}