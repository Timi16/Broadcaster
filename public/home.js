/*document.addEventListener("DOMContentLoaded", function() {
    var myLink = document.getElementById("home");
    myLink.addEventListener("click", function(event) {

      event.preventDefault();
      window.location.href = "home.html";
    });
    var Discover = document.getElementById("discover");
    Discover.addEventListener("click", function(event) {

      event.preventDefault();
      window.location.href = "discover.html";
    });
    var Profile = document.getElementById("profile");
    Profile.addEventListener("click", function(event) {

      event.preventDefault();
      window.location.href = "profile.html";
    });
});
*/


document.addEventListener("DOMContentLoaded", function() {
  var signUpPopUP = document.querySelector('.signup-popup')
  var getStarted = document.querySelector("#get-started-button")
  var Later = document.querySelector('.Later')
  getStarted.addEventListener("click", function(){
    if(signUpPopUP.style.display === "none"){
     signUpPopUP.style.display = "block"
    }else{
     signUpPopUP.style.display = "block"
    }
  })

  Later.addEventListener('click', function(){
    if(signUpPopUP.style.display === "block"){
      signUpPopUP.style.display = "none"
    }else{
      signUpPopUP.style.display = "none"
    }
  })

  var registerButton = document.querySelector(".register-button")
  registerButton.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "signup.html"; 
  })
  
  var loginButton = document.querySelector(".login")
  loginButton.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "login.html"; 
  })

});











/*document.addEventListener("DOMContentLoaded", function() {
  var toteBag = document.querySelector(".live-poster")
  toteBag.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "about.html"; 
  })
  var umbrella = document.querySelector("#umbrella")
  umbrella.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "totebag.html"; 
  })
  var turtleNeck = document.querySelector("#turtleNeck")
  turtleNeck.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "turtleNeck.html"; 
  })
  var lipGloss = document.querySelector("#lipGloss")
  lipGloss.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "lipgloss.html"; 
  })
  var faceMask = document.querySelector("#faceMask")
  faceMask.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "facemask.html"; 
  })
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
});*/
