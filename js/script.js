// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

//let random = Math.floor(Math.random() * 3) + 1);


// DOCUMENT READY FUNCTION BELOW
$( "document" ).ready(function() { 
    $("#shoot").click(function() {
        let userChoice = $("#input").val();
        $("#result").append(`<p>${userChoice}</p>`);
    });
});