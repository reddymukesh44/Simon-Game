var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var started = false;

var level = 0;

function startOver(){

  level = 0;

  gamePattern = [];

  started = false;

}


function nextSequence() {

  userClickedPattern = [];

  var randomNumber = (Math.floor(Math.random() * 4));

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  animatePress(randomChosenColour);

  playSound(randomChosenColour);

  level++;

    $("h1").text("level " + level);

}

function checkAnswer(currentLevel){

  if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){

    console.log("success");

    if(userClickedPattern.length == gamePattern.length){

      setTimeout(function(){

        nextSequence();

      },1000);
    }
  }
  else{

    console.log("wrong");

    playSound("wrong");

    $("body").addClass("game-over");

    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();

  }

}

function animatePress(currentColour){

  $("#" + currentColour).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
 }, 100);

}



function playSound(key) {
  switch (key) {
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;
    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;
    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;
    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;
    case "wrong":
      var wrong = new Audio("sounds/wrong.mp3");
      wrong.play;
    default:
      console.log(key);

  }

}

$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  console.log(userClickedPattern);

  console.log(gamePattern);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);

});

$(document).keypress(function(){


if (!started){

  nextSequence();

  $("h1").text("Level " + level);


  started = true;

}
});
