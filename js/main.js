$(document).ready(function() {
  console.log("Welcome to Duck Hunt!");

  // Behaviour for the play again link
  $('#play-again').click(function(e) {
    $("#game-over").toggle();
    new Game();
  });

  // Moves the crosshair with the mousepointer
  // TODO: Add a mousemove event to the #game element...

    $("#game").mousemove(function(event) {
      $("#crosshair").css({"display": "block", "left": (event.pageX-30), "top": (event.pageY-30)});
      }); 
  // Kick-off a New Game
      new Game();
  // TODO: Pass in a string to represent the difficulty level
});
