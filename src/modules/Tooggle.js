import { temperatureElement, convert } from './updateData';

convert.addEventListener('click', () => {
  const temp = temperatureElement.textContent.match(/-?\d+/g).map(Number);
  if (temperatureElement.textContent.match('C')) {
    const tempFarenheit = parseInt(temp * (9 / 5) + 32, 10);

    temperatureElement.textContent = `Temp ${tempFarenheit} F`;
  } else {
    const tempCelcius = parseInt((temp - 32) * (5 / 9), 10);
    temperatureElement.textContent = `Temp ${tempCelcius} C`;
  }
});