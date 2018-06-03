

$(document).ready(function(){

var controlRandomNumber;
var blueRandomNumber;
var diamondRandomNumber;
var lovelyRandomNumber;
var lovelyRandomNumber;
var counter = 0;

  controlRandomNumber = Math.floor((Math.random() * 121) + 18);
  $("#control").text(controlRandomNumber);
 /* function generate() {
  controlRandomNumber = Math.floor((Math.random() * 121) + 18);
  $("#control").text(controlRandomNumber);
  }
  generate();*/
  
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  blueRandomNumber = getRndInteger(1,12);
  console.log(blueRandomNumber);
  diamondRandomNumber = getRndInteger(1,12);
  console.log(diamondRandomNumber);
  lovelyRandomNumber = getRndInteger(1,12);
  console.log(lovelyRandomNumber);
  purpleRandomNumber = getRndInteger(1,12);
  console.log(purpleRandomNumber);

//1
$("#img1").attr("data-value", blueRandomNumber);

$(".one").text($("#img1").attr("data-value"));

//2
$("#img2").attr("data-value", diamondRandomNumber);

$(".two").text($("#img2").attr("data-value"));

//3
$("#img3").attr("data-value", lovelyRandomNumber);
 
$(".three").text($("#img3").attr("data-value"));

//4
$("#img4").attr("data-value", purpleRandomNumber);

$(".four").text($("#img4").attr("data-value"));


//html.12
$(".crystal-image").on("click", function() {

  var crystalValue = ($(this).attr("data-value"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.

  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter);

  if (counter === controlRandomNumber) {
    alert("You win!");
  }

  else if (counter >= controlRandomNumber) {
    alert("You lose!!");
  }

});
  
 
 


  


  
 
 
  






  
 
 
 
 
});//close for ready function
