import {tempCelcius, convert} from './updateData.js'

// export const convert = document.querySelector('#convert');
console.log(convert)
convert.addEventListener("click", ()=> {
    console.log(3)
    tempFarenheit = parseInt(tempCelcius*(9/5) + 32,10)
    console.log(3)
    temperatureElement.textContent = `Temp - ${tempFarenheit} C`;
})

