// To Do: Create a website that deploys the weather and next 5 days along with the date, 
//an icon representation of weather conditions, the temperature, the wind speed, and the humidity

//Step 1: Get reference to html that allows us to store variables in js
var searchBar = document.getElementById("search-bar");
var currentWeather = document.getElementById("current-weather");
var futureWeather = document.getElementById("future-weather");
var searchButton = document.getElementById("search");
var apiKey = "5f09f28b8ffdecd5f667364795fe43c6";

//Step 2: Make sure search bar has a value entered
 
    //Step 2C: make previous city entered still display on our website (local storage)
    function storeCities() {
        localStorage.setItem("cities", JSON.stringify(searchBar.value));
    }


//Step 3: Get the dat from the weather website that we need to display on our page
function getApi(_apiKey) {
    var getURL= 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={5f09f28b8ffdecd5f667364795fe43c6}';

    fetch(getURL)
    .then(function(response){
        return response.json();
    })
    
    .then(function(data) {
        //looping through the fetch url and making responses into list items
        for (var i = 0; i<5; i++) {
            //create list
            var listItem = document.createElement('li');
            //set text of list element to json response.
            listItem.textContent = data[i].
            //apend the list with the parent element
            futureWeather.appendChild(listItem);
        }
    })
    searchButton.addEventListener('click', getApi);
    console.log(getURL);
}