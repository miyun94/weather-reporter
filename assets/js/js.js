//store search into localstorage 
$(document).ready(function () {
    $("button").on("click", function () {
        let zipCode = $('#searchZip').val()
        console.log(zipCode);
        localStorage.setItem("search", (zipCode))
        citySearch(zipCode);
        fiveDay(zipCode);
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
        console.log(response.name);
        console.log(response.main.temp)
        $(".temp").html(response.main.temp);
        $(".city-name").html(response.name);
        $(".weather").html(response.weather.main)
    })
}

//create another response for 5-day forecast 
function fiveDay(searchId) {
        let fiveSearch = 'http://api.openweathermap.org/data/2.5/forecast?zip=' + searchId + ',us&appid=fe4afaa3b86128f2033985b903a190ff&units=imperial'
        $.ajax({
            url: fiveSearch,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            //create a loop for the 5 - day forecast to go through
            for (let i = 0; i < response.list.length; i += 8) {
                console.log(response.list[i]); 
            }
        })
    }



