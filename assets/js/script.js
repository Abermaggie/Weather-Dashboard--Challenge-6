var APIKey="b5b6d46bc2a008c2b2f805f1629fc911";
// Store user input from search bar in this variable//
var city;
var state;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
// This date will be next to the current city box//
var currentDate= moment().format('MM' + "/" + 'DD'+ "/" + 'YYYY');
// var formInput = $('.userInput');

const inpKey= document.getElementById("userInput");
const btnInsert= document.getElementById("searchBtn");
const lsOutput= document.getElementsByClassName("currentHead");

btnInsert.onclick = function() {
    
    const key = inpKey.value;
    var currentDate= moment().format('MM' + "/" + 'DD'+ "/" + 'YYYY');
    if(key) {
        localStorage.setItem(key, currentDate);
        location.reload();
    }
};

for (let i=0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value =localStorage.getItem(key);
    currentHead.innerHTML += `${key}: ${currentDate}`;
}
function clearKey() {
    localStorage.removeItem(key);
}

clearKey();


