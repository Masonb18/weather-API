var searchFormEl = document.querySelector('#form-submit');
var weatherKey = "e90364e4c331c56af9a56244cf50c6e8";
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
var resultTextEl = document.querySelector("document");
var citySearch = document.querySelector('#city');
var cardDisplay = document.getElementById('central-div');
var subBtn = document.getElementById('submit-btn');

// Function to call the weather API
function callAPI(city) {
    var requestURL = queryURL + city + "&appid=" + weatherKey;
    fetch(requestURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle the data here
        
        // Save the searched city to localStorage
        saveCityToLocalStorage(city);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

// Function to save searched city to localStorage
function saveCityToLocalStorage(city) {
    var cities = JSON.parse(localStorage.getItem('cities')) || [];
    cities.push(city);
    localStorage.setItem('cities', JSON.stringify(cities));
}

// Function to display saved cities from localStorage
function displaySavedCities() {
    var cities = JSON.parse(localStorage.getItem('cities')) || [];
    // Display cities in a list or other element on your page
    // For example:
    var savedCitiesList = document.getElementById('saved-cities-list');
    savedCitiesList.innerHTML = '';
    cities.forEach(city => {
        var cityItem = document.createElement('li');
        cityItem.textContent = city;
        savedCitiesList.appendChild(cityItem);
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
    displaySavedCities(); // Update displayed saved cities
}

searchFormEl.addEventListener("submit", handleFormSubmit);

// Initial display of saved cities when page loads
displaySavedCities();
