const temperature = document.getElementById("temperature");// gets the main temperature
const feelsLike = document.getElementById("feelsTemp");//gets the feels like temperature
const humidity = document.getElementById("humidity-perc");//gets the humidity 
const visibility = document.getElementById("visbilityRange");//gets visibility range
const maxTemp = document.getElementById("maxTemperature");//gets the wind speed
const minTemp = document.getElementById("minTemp");//gets the wind gust
const cityName = document.getElementById("cityName");//gets the city
const countryName = document.getElementById("country");//gets the country
const submitBtn = document.getElementById("btn");



window.addEventListener("load", (event) => {
  onStartUp();
});

function onStartUp(){
    let firstTime = true;
    let city = "toronto";
    let country = "ca";
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=30e2b8ff99e48f23531044cfa5040973&units=metric`)
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        temperature.innerText = Math.round(data.main.temp);
        feelsLike.innerText = Math.round(data.main.feels_like);
        humidity.innerText = Math.round(data.main.humidity);
        visibility.innerText = Math.round(data.wind.speed);
        maxTemp.innerText = Math.round(data.main.temp_max);
        minTemp.innerText = Math.round(data.main.temp_min);
    })
    .catch(error => console.error('Error:', error)); // Handle any error
    firstTime = false;
}

function getInfo() {

    city = cityName.value;
    country = countryName.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=30e2b8ff99e48f23531044cfa5040973&units=metric`)
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        temperature.innerText = Math.round(data.main.temp);
        feelsLike.innerText = Math.round(data.main.feels_like);
        humidity.innerText = Math.round(data.main.humidity);
        visibility.innerText = Math.round((data.visibility/1000));
        maxTemp.innerText = Math.round(data.main.temp_max);
        minTemp.innerText = Math.round(data.main.temp_min);
    })
    .catch(error => console.error('Error:', error)); // Handle any error
    firstTime = false;

}
