var APIkey="a43777f985f5f6fe7bee6789245c882a";
// Store user input from search bar in this variable//
let searchBtn= document.getElementById('searchBtn');
// var state;
let weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=imperial`
let weatherURLToday = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`
// This date will be next to the current city box//
var currentDate= moment().format('MM/DD/YYYY');
var formInput= document.getElementById('userInput');

currentHead.innerHTML= currentDate;
fcOne.innerHTML= moment().add(1,'days').format('MM/DD/YYYY');
fcTwo.innerHTML= moment().add(2,'days').format('MM/DD/YYYY');
fcThree.innerHTML= moment().add(3,'days').format('MM/DD/YYYY');
fcFour.innerHTML= moment().add(4,'days').format('MM/DD/YYYY');
fctFive.innerHTML= moment().add(5,'days').format('MM/DD/YYYY');


searchBtn.addEventListener('click', function () {
    let formEntry= formInput.value;
    localStorage.setItem('searchCry', JSON.stringify(formEntry));
    window.localStorage.getitem('searchCry');
})

var city= JSON.parse(localStorage.getItem('searchCry'));

function pullStorage() {
var formEntry= formInput.value;
if(city) {
    currentHead.innerHTML= city + " " + currentDate;
}
}

function weather() {
    let city= JSON.parse(localStorage.getItem('searchCry'));
    let weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=imperial`
    let weatherURLToday = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`

    fetch(weatherURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    fetch(weatherURLToday)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
}

function displayForecast(forecastData) {
    let filterForecast = forecastData.list.filter((day) => {
        if(day.dt_txt.includes("15:00:00")) {
            return true
        } else {
            return false
        }
    })
}

function weatherToday () {
    let weatherURLToday = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`
    fetch(weatherURLToday)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        currentIcon.innerHTML="src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        currentTemp.innerHTML="Temp: " + data.main.temp + "°F";
        currentWind.innerHTML="Wind: " + data.wind.speed + " MPH";
        currentHum.innerHTML= "Humidity: " + data.main.humidity+ "%";
    })
}


    
    // filterForecast.forEach(day => {
    //     currentTemp.textContent = `Temp: ${day.main.temp}°F`
    // })

// apiRequest();
pullStorage();
weather();
weatherToday();

// filterForecast();

