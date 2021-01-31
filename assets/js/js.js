//store search into localstorage 
$(document).ready(function () {
    $("button").on("click", function () {
        let zipCode = $('#searchZip').val()
        console.log(zipCode);
        localStorage.setItem("search", (zipCode))
        citySearch(zipCode);
    })
    //$("#searchZip").append(localStorage.getItem("search"))
})

//let citySearch = function(searchId){
    function citySearch(searchId){
//    let searchId = document.getElementById('#searchZip').val()
    let searchUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' + searchId + ',us&appid=fe4afaa3b86128f2033985b903a190ff&units=imperial'
    $.ajax({
        url: searchUrl,
          method: "GET"
      }).then(function(response){
        console.log(response);
        console.log(response.weather[0].description); 
        console.log(response.main.feels_like); 
        console.log(response.main.humidity);
        console.log(response.main.temp); 
        console.log(response.main.temp_max);
        console.log(response.main.temp_min);   
   // fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + searchId + '&appid=fe4afaa3b86128f2033985b903a190ff')

       // return response.json(); 
    })
}