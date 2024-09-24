const input = document.getElementById('input');
const btun = document.getElementById('btn');
const result = document.getElementById('result');

const APIkey = '365284ecbddcc7ff27859fb27c0b9cd9';

async function getWeatherData(city){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`);

        if(!response.ok){
            throw new Error('something is wrong: ${response.status');
        }

        const data = await response.json();

        result.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    }
    catch (error){
        console.error('Something is wrong: ',error);
        result.innerHTML = `<p>Something is wrong : ${error.message}</p>`;
    }
}

btun.addEventListener("click",function(){
    const city = input.value.trim();
    if(city){
        getWeatherData(city);
    }
    else{
        result.innerHTML = '<p>Please Eneter City Name</p>';
    }
})