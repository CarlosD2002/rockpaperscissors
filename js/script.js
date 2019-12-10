// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

// DOCUMENT READY FUNCTION BELOW
let pCounter = 0;  
let cCounter = 0;
$("#userCounter").text("You won: " + pCounter + " times.");
$("#computerCounter").text("Computer won: " + cCounter + " times.");

$("document").ready(function() { 
    $("#shoot").click(function() {
        $("#input").empty();
        $("#userChoice").empty();
        $("computerChoice").empty();
        $("#result").empty();
        let userInput = $("#input").val();
        let lowercase = userInput.toLowerCase();
        $("#userChoice").text(`${userInput}`);
        let possible_outcomes = ['Rock', 'Paper', 'Scissors'];
        let computerRandom = (Math.floor(Math.random() * 3) + 1);
        if(computerRandom === 1) {
            $("#computerChoice").text(`${possible_outcomes[0]}`)
        } else if(computerRandom === 2) {
            $("#computerChoice").text(`${possible_outcomes[1]}`)
        } else{
            $("#computerChoice").text(`${possible_outcomes[2]}`)
        }
if((lowercase === "rock") && (computerRandom === 3)) {
    $("#result").text("You won!");
     pCounter = pCounter + 1;
}
else if((lowercase === "paper") && (computerRandom === 1)) {
    $("#result").text("You won!");
     pCounter = pCounter + 1;
}
else if((lowercase === "scissors") && (computerRandom === 2)) {
    $("#result").text("You won!");
     pCounter = pCounter + 1;
}
else if((lowercase === "rock") && (computerRandom === 1)) {
    $("#result").text("You draw!");
}
else if((lowercase === "paper") && (computerRandom === 2)) {
    $("#result").text("You draw!");
}
else if((lowercase === "scissors") && (computerRandom === 3)) {
    $("#result").text("You draw!");
}
else if((lowercase === "rock") && (computerRandom === 2)) {
    $("#result").text("You lost!");
     cCounter = cCounter + 1;
}
else if((lowercase === "paper") && (computerRandom === 3)) {
    $("#result").text("You lost!");
     cCounter = cCounter + 1;
}
else if((lowercase === "scissors") && (computerRandom === 1)) {
    $("#result").text("You lost!");
     cCounter = cCounter + 1;
}
else {
    $("#result").text('"' + `${userInput}` + '"' + " is not a valid input.");
}
$("#userCounter").text("You won: " + pCounter + " times.");
$("#computerCounter").text("Computer won: " + cCounter + " times.");
    });
});
