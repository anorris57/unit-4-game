

$(document).ready(function(){

var controlRandomNumber;
var blueRandomNumber;
var diamondRandomNumber;
var lovelyRandomNumber;
var lovelyRandomNumber;
//var totalScore = 0;
//var count = 0;
//var blueCount;

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
  
 
  $("#blue").on("click", function(){
    count++;
  })
  


  


  
 
  /*when clicking image add number to totalScore
  $("#blue").on("click", function(){
       count++;
       var blueCount = count;
       alert(blueCount);
       totalScore = totalScore + blueRandomNumber;
  })*/
  






  
 
 
 
 
});//close for ready function
