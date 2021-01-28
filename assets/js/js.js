//store search into localstorage 
$(document).ready(function () {
    $("button").on("click", function () {
        let citySearch = $('#search').val()
        console.log(citySearch);
        localStorage.setItem("search", (citySearch))
    })
    $("#search").append(localStorage.getItem("search"))
})

let citySearch = function(){
    let searchId = document.getElementById('#search').Value

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + searchId + '&appid={API key}')
    .then(function(response){
        return response.json(); 
    })
    .then(function(response){
        console.log(reponse.data[0]); 

    })
}

