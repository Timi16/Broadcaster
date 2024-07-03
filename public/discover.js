document.addEventListener("DOMContentLoaded", function() {
    var homePage = document.querySelector("#homePage")
    homePage.addEventListener("click", function(event){
      event.preventDefault();
      window.location.href = "home.html"; 
    })
    var discoverPage = document.querySelector("#discoverPage")
    discoverPage.addEventListener("click", function(event){
      event.preventDefault();
      window.location.href = "discover.html"; 
    })
    var profilePage = document.querySelector("#profilePage")
    profilePage.addEventListener("click", function(event){
      event.preventDefault();
      window.location.href = "profile.html"; 
    })
    var turtleNeck = document.querySelector("#turtleNeck")
    turtleNeck.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = "turtleNeck.html"; 
    })
})