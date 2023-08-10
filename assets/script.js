$(document).ready(function() {
  var searchFormEl = document.querySelector('#form-submit');
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  var weatherKey = "e90364e4c331c56af9a56244cf50c6e8";  

  function callAPI(queryCity){
      var requestURL = queryURL + queryCity + "&appid=" + weatherKey;

      fetch(requestURL)
       .then(function(response){
          return response.json();
       })
       .then(function (data) {
          var currentTemp = data.main.temp;
          $('#temp').text(currentTemp);

          var humidity = data.main.humidity;
          $('#humid').text(humidity);

          var windSpeed = data.wind.speed;
          $('#windy').text(windSpeed);

          // Extract latitude and longitude
          var cityLat = data.coord.lat;
          var cityLon = data.coord.lon;

          var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&appid=${weatherKey}`;
          fetch(forecastURL)
              .then(function(response){
                  return response.json();
              })
              .then(function(data){
                  // Loop through forecast data
                  for (var i = 0; i < data.list.length; i++) {
                      var futTemp = data.list[i].main.temp;
                      // Do something with futTemp
                  }
              })
              .catch(function(error) {
                  console.error('Error fetching forecast data:', error);
              });
        })
        .catch(function(error) {
          console.error('Error fetching current weather data:', error);
        });
  }

  function handleFormSubmit(event) {
      event.preventDefault();
  
      var searchInput = $("#city").val();
  
      if (!searchInput) {
          console.error("Please enter a valid city");
      }
      
      callAPI(searchInput);
  }
  
  searchFormEl.addEventListener("submit", handleFormSubmit);
});
