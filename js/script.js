// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

// DOCUMENT READY FUNCTION BELOW

$("document").ready(function() { 
    $("#shoot").click(function() {
        $("#input").empty();
        $("#userChoice").empty();
        $("computerChoice").empty();
        $("#result").empty();
        let userInput = $("#input").val();
        $("#userChoice").text(`${userInput}`);
        let possible_outcomes = ['rock', 'paper', 'scissors'];
        let computerRandom = (Math.floor(Math.random() * 3) + 1);
        if(computerRandom === 1) {
            $("#computerChoice").text(`${possible_outcomes[0]}`)
        } else if(computerRandom === 2) {
            $("#computerChoice").text(`${possible_outcomes[1]}`)
        } else{
            $("#computerChoice").text(`${possible_outcomes[2]}`)
        }
if((userInput === "rock") && (computerRandom === 3)) {
    $("#result").text("You are the winner!");
}
else if((userInput === "paper") && (computerRandom === 1)) {
    $("#result").text("You are the winner!");
}
else if((userInput === "scissors") && (computerRandom === 2)) {
    $("#result").text("You are the winner!");
}
else if((userInput === "rock") && (computerRandom === 1)) {
    $("#result").text("You draw!");
}
else if((userInput === "paper") && (computerRandom === 2)) {
    $("#result").text("You draw!");
}
else if((userInput === "scissors") && (computerRandom === 3)) {
    $("#result").text("You draw!");
}
else if((userInput === "rock") && (computerRandom === 2)) {
    $("#result").text("You lost!");
}
else if((userInput === "paper") && (computerRandom === 3)) {
    $("#result").text("You lost!");
}
else if((userInput === "scissors") && (computerRandom === 1)) {
    $("#result").text("You lost!");
}
    });
});