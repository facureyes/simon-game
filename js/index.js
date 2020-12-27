var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randomChosenColour = "";
var userAnswer = [];

function startGame(){
    if(gamePattern.length == 0){
        nextSequence();
    }
}

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4) 
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    console.log(randomChosenColour);
    $("#level-title").text("Level " + gamePattern.length)
}

function checkUserAnswer(colour){
    // Check user answer
    if(userAnswer[userAnswer.length - 1] != gamePattern[userAnswer.length - 1]){
        colour = "wrong";
    }
   
    // Play corresponding sound
    if(gamePattern.length != 0){
        playSound(colour);
    }

    // Clean user's answer and show next sequence if answer where right
    if (colour != "wrong"){
        if(userAnswer.length == gamePattern.length){
            userAnswer = []
            setTimeout(function(){ nextSequence(); }, 1000);   
        }
    }
    else{
        $("#level-title").text("Press A Key to Start")
        gamePattern = [];
        userAnswer = [];
        randomChosenColour = "";
    }

}

function playSound(colour){
    switch (colour) {
        case "red":
            $(".red").addClass("pressed");
            setTimeout(function(){ $(".red").removeClass("pressed"); }, 100);   
            new Audio('sounds/red.mp3').play();
            break;
        case "green":
            $(".green").addClass("pressed");
            setTimeout(function(){ $(".green").removeClass("pressed"); }, 100);   
            new Audio('sounds/green.mp3').play();
            break;
        case "yellow":
            $(".yellow").addClass("pressed");
            setTimeout(function(){ $(".yellow").removeClass("pressed"); }, 100);   
            new Audio('sounds/yellow.mp3').play();
            break;
        case "blue":
            $(".blue").addClass("pressed");
            setTimeout(function(){ $(".blue").removeClass("pressed"); }, 100);   
            new Audio('sounds/blue.mp3').play();
            break;
        case "wrong":
            new Audio('sounds/wrong.mp3').play();
            break;
        default:
            new Audio('sounds/wrong.mp3').play();
            break;
    }
}


$(document).ready(function() { 
    $(document).keypress(function(){
        startGame();
    });
    $("div[type=button]").click(function(event){
        userAnswer.push(event.currentTarget.id);
        checkUserAnswer(event.currentTarget.id);
    })
})



 