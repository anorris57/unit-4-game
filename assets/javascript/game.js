

$(document).ready(function(){

var controlRandomNumber;
var blueRandomNumber;
var diamondRandomNumber;
var lovelyRandomNumber;
var lovelyRandomNumber;
var counter = 0;
var lost = 0;
var win = 0;

var resetAndStart = function () {

  controlRandomNumber = Math.floor((Math.random() * 102) + 19);
  $("#control").html("Random number to match: " + controlRandomNumber);
 
  
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

$("#totScore").html("Total Score: " + counter);

}// closes startGame

resetAndStart();

$(".crystal-image").on("click", function() {

  var crystalValue = ($(this).attr("data-value"));
  crystalValue = parseInt(crystalValue);
 
  counter += crystalValue;

 
   $("#totScore").html("Your total score is: " + counter);

  if (counter === controlRandomNumber) {

    win++;

    $("#win").html("Wins: " + win);
    
    counter = 0;

    resetAndStart();
  }

  else if (counter >= controlRandomNumber) {

    lost++;

    $("#lost").html("Losses: " + lost);
    
    counter = 0;

    resetAndStart();
  }

});
  
 
 


  


  
 
 
  






  
 
 
 
 
});//close for ready function
