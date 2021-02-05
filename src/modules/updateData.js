const input = document.querySelector('.input_text');
const button = document.querySelector('.submit');
const main = document.querySelector('#name');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');

const apiKey = '0e2959b47fb2ec863a63504b4e25870a';

button.addEventListener('click', () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const tempValue = data.main.temp;
      const nameValue = data.name;
      const descValue = data.weather[0].description;
      const tempCelcius = parseInt(tempValue - 273.15, 10);
      main.innerHTML = nameValue;
      desc.innerHTML = descValue;
      temp.innerHTML = `Temp - ${tempCelcius}\`C`;
    });
  input.value = '';
});