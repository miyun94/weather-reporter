//store search into localstorage 
$(document).ready(function () {
    $("button").on("click", function () {
        let zipCode = $('#searchZip').val()
        console.log(zipCode);
        localStorage.setItem("search", (zipCode))
        citySearch(zipCode);
        fiveDay(zipCode);
        getUV(zipCode);
    })
})

//fetches information for the current day 
function citySearch(searchId) {
    let searchUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' + searchId + ',us&appid=fe4afaa3b86128f2033985b903a190ff&units=imperial'
    $.ajax({
        url: searchUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
//appends to corresponding html tags to show up on screen when search is clicked 
        let date = new Date(response.dt * 1000).toLocaleDateString()
        $(".date").text(date); 
        $(".temp").html('Temperature: ' + (response.main.temp) + '&#x2109;');
        $(".city-name").html(response.name);
        let iconElement = document.querySelector(".weather-icon")
        iconId = (response.weather[0].icon)
        iconElement.innerHTML = `<img src="./assets/icons/${iconId}.png"/>`
        $(".windspeed").html('Wind Speed: ' + (response.wind.speed) + 'MPH');
        $(".humidity").html('Humdity : ' + (response.main.humidity) + '&#x25;');
    })
}


//create another response for 5-day forecast 
function fiveDay(searchId) {
        let fiveSearch = 'http://api.openweathermap.org/data/2.5/forecast?zip=' + searchId + ',us&appid=fe4afaa3b86128f2033985b903a190ff&units=imperial'
        
        $.ajax({
            url: fiveSearch,
            method: "GET"
        }).then(function (response) {
            console.log(response.list.length);
            //create a loop for the 5 - day forecast to go through 
            for (let i = 0; i < response.list.length; i += 8) {
                let date = new Date(response.list[i].dt * 1000).toLocaleDateString()
                console.log(response.list[i], i,);
            //appends to corresponding html tags in card deck 
                $(".card-title-" + i).text(date)
                $(".card-text-" + i).html('Temperature: ' + (response.list[i].main.temp) + '&#x2109;') 
                $(".card-humidity-" + i).html('Humidity : ' + (response.list[i].main.humidity) + '&#x25;')
                let iconElement = document.querySelector(".card-icon-" + i)
                iconIdfive = (response.list[i].weather[0].icon)
                iconElement.innerHTML = `<img src="./assets/icons/${iconIdfive}.png"/>`
            }
        })
    }



