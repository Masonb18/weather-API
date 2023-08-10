var searchFormEl = document.querySelector('#form-submit');
var weatherKey = "e90364e4c331c56af9a56244cf50c6e8";
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
var resultTextEl = document.querySelector("document");
var citySearch = document.querySelector('#city');
var cardDisplay = document.getElementById('central-div');
var subBtn = document.getElementById('submit-btn');

function callAPI(city) {
    var requestURL = queryURL + city + "&appid=" + weatherKey;
    fetch(requestURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle the data here
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    var searchInput = citySearch.value;

    if (!searchInput) {
        console.error("Please enter a valid city");
        return;
    }

    callAPI(searchInput);
}

searchFormEl.addEventListener("submit", handleFormSubmit);
