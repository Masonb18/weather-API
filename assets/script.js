
$(document).ready(function() {

    var searchFormEl = document.querySelector('#form-submit');
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="
    var city = $('city').value;
    var weatherKey = "e90364e4c331c56af9a56244cf50c6e8";  

    
    
    function callAPI(queryCity){
        console.log("City: ", city);
        var requestURL = queryURL  + queryCity + "&appid=" + weatherKey;
        console.log(requestURL);
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${weatherKey}`;  // using Template literals
        console.log(url);
        fetch(requestURL)
         .then(function(response){
            console.log("Response: ", response);
            return response.json()
         })
         .then(function (data) {
            console.log("Data: ", data);
            console.log("Type: ", typeof data);

            console.log("Temp: ", data.main.temp);
            var currentTemp = data.main.temp;
            $('#temp').text(currentTemp);

            var humidity = data.main.humidity;
            $('#humid').text(humidity);

            var windSpeed = data.wind.speed;
            $('#windy').text(windSpeed);
          
            
            for (var i = 0; i < data.length; i++) {
              var listItem = document.createElement('li');
              listItem.textContent = data[i].html_url;
              repoList.appendChild(listItem);
            }
          })
          
          
          .catch( function(error) {
            throw error;
          });
         var forcastURL = `api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&appid=${weatherKey}`;
          console.log(forcastURL)
          fetch(forcastURL)
            .then(function(response){
              return response.json()
            })
            .then(function(data){
              var futTemp = data.main.temp;
              $('.future-temp').text(futTemp);

              for (var i = 0; i < data.length; i++) {
                var listItem = document.createElement('li');
                listItem.textContent = data[i].html_url;
                repoList.appendChild(listItem);

            }
          })

        console.log("I am code AFTER the FECTH request is initiated...")
        console.log("Data: ", data);
    }
    
    
    function handleFormSubmit(event) {
        event.preventDefault();
    
        var searchInput = document.querySelector("#city").value;
        var searchSubmit = document.querySelector("#submit-btn").value;
    
        if (!searchInput) {
            console.error("Please enter valid city")
     
        }
        callAPI(searchInput);
       
        // var queryString = queryURL + searchSubmit + '&format=' + searchInput;
       // location.assign(queryString);
       // console.log(data);
        
    }
    
    searchFormEl.addEventListener("submit", handleFormSubmit);
    
    
    //http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=512a107d7fc5b3c49dc4b3729ee1e54


})

