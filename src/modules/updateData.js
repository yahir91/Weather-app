let input = document.querySelector('.input_text');
let button= document.querySelector('.submit');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');

const apiKey = "0e2959b47fb2ec863a63504b4e25870a"

button.addEventListener('click', () => {
    console.log(4)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data =>{ 
        let tempValue = data['main']['temp'];
        let nameValue = data['name'];
        let descValue = data['weather'][0]['description'];
        console.log(tempValue)
        let tempCelcius = parseInt(tempValue -273.15, 10) 
        main.innerHTML = nameValue;
        desc.innerHTML = descValue;
        temp.innerHTML = "Temp - "+tempCelcius+"`C";
    }).catch(err => alert("Wrong city name!"));
    console.log(obj.main)
    input.value = ""
    })