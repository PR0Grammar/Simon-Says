//Your application here should use jQuery to wire up the interface to play a
//Simon Says type game. A SimonGame object has been provided that has the guts
//of the game logic. You should not _need_ to edit simongame.js however if you
//want to add extra features like more colors, etc edit the file to your hearts
//content.

var game;

function newGame () {
    game= new SimonGame(5);
    $('.display').text(game.answer())
    //Display for only 2 seconds
    setTimeout(function(){
    $('.display').text("");
    }, 3000);
    
}


//Listen to button click

function checker (colorToCheck) {
    var guess= game.guess(colorToCheck)
    if(guess=="lost") {
        alert("you lost")
        newGame()
    }
    
   else if (guess=="won"){
       alert("you won")
   }
    
}

$('#red').click(function() {
    checker("red");
    
});

$('#blue').click(function() {
    checker("blue");
});

$('#green').click(function() {
    checker("green");
   
});

$('#yellow').click(function() {
    checker("yellow");
});

//When you click reset game it should start the newGame() again.

$('.start-over').click(function(){
    newGame(); 
});


