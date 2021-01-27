fetch('').then(function(response){
    return response.json();
}).then(function(data){
    console.log(data); 
})

//store search into localstorage 
$(document).ready(function () {
    $("button").on("click", function () {
    let citySearch = $('#search').val()
    console.log(citySearch); 
    localStorage.setItem("search", (citySearch))
  })
  $("#search").append(localStorage.getItem("search"))

//


