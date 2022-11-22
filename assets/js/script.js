var APIkey="a43777f985f5f6fe7bee6789245c882a";
// Store user input from search bar in this variable//
// var city;
let searchBtn= document.getElementById('searchBtn');
// var state;
// var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=imperial`
// var queryTodayURL= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a43777f985f5f6fe7bee6789245c882a`
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
    pullStorage();
    let formEntry= formInput.value;
    localStorage.setItem('searchCry', JSON.stringify(formEntry));
})

function pullStorage() {
var city= JSON.parse(localStorage.getItem('searchCry'));
var formEntry= formInput.value;
if(city) {
    currentHead.innerHTML= city + " " + currentDate;
    var queryTodayURL= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a43777f985f5f6fe7bee6789245c882a`
    fetch(queryTodayURL)
};
}
pullStorage()