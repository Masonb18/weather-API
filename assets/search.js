var weatherKey = "e90364e4c331c56af9a56244cf50c6e8";
var city = "{city name}";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" 
var resultTextEl = document.querySelector("document")

var cardDisplay = document.getElementById('central-div');
var subBtn = document.getElementById('submit-btn');



function callAPI(queryURL){
    var requestURL = queryURL  + city + "&appid=" + weatherKey;

    fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })

}

function getWeather(){
    var weatherParams =document.location.input.split('&')

    var query = weatherParams[0].split('=').pop();
    var format = weatherParams[0].split('=').pop();

    searchApi(query, format);

}

function showResults(resultWeath) {
    console.log(resultWeath)

    var todayCard = document.createElement('div');
    todayCard.classList.add('card', 'bg-light', 'text-dark', 'm-3', 'p-3');

}









var searchFormEl = document.querySelector('#form-submit')
var weatherKey = "e90364e4c331c56af9a56244cf50c6e8";
var city 
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q='
var forcastURL = ''
var resultTextEl = document.querySelector("document")
var citySearch = document.querySelector('#city')
var cardDisplay = document.getElementById('central-div');
var subBtn = document.getElementById('submit-btn');





function callAPI(){
    var requestURL = queryURL  + city + "&appid=" + weatherKey;
    fetch(requestURL)
    .then(data => data.json(data))
        console.log(jsonData);
    }

  
    // fetch(requestURL)
    // .then(function (response){
    //     setData(response.data)
    // })
    // .then(function (data) {
    //     console.log(data);
    // })



function handleFormSubmit(event) {
    event.preventDefault();

    var searchInput = document.querySelector("#city").value;
    var searchSubmit = document.querySelector("#submit-btn").value;

    if (!searchInput) {
        console.error("Please enter valid city")
 
    }

    var queryString = queryURL + searchSubmit + '&format=' + searchInput;
    location.assign(queryString);
    console.log(data);

}


// function getWeather(){
//     var weatherParams =document.location.input.split('&')

//     var query = weatherParams[0].split('=').pop();
//     var format = weatherParams[0].split('=').pop();

//     searchApi(query, format);

// }

// function showResults(resultWeath) {
//     console.log(resultWeath)

//     var todayCard = document.createElement('div');
//     todayCard.classList.add('card', 'bg-light', 'text-dark', 'm-3', 'p-3');

// }

searchFormEl.addEventListener("submit", handleFormSubmit);