//  ...~~~*** Jeux du Shifumi ***~~~... //

// Welcome message
alert("Bienvenue\nUne petite partie de Shifumi ?");

// Allow to enter and store the name
var userName = prompt("Rentrez votre nom");


// Allow user to enter a value and store this (pierre, feuille, ciseaux)
var userChoice = prompt("Bonjour " + userName + " \n\npierre , feuille  ou  ciseaux ?");
console.log(userChoice);


// Variable for a computer
var pcValue = ["pierre", "feuille", "ciseaux"];

// Créate function for a computer choice
function computerChoice(){

    // Generate a random number 0,1 or 2
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      
    var result = getRandomInt(3);
        console.log(result);

    var pcChoice = "";

    if(result === 0) {
        pcChoice = pcValue["0"];
        console.log("L'ordinateur à choisi " + pcValue["0"]);
    }
    else if(result === 1) {
        pcChoice = pcValue["1"];
        console.log("L'ordinateur à choisi " + pcValue["1"]);
    }
    else{
        pcChoice = pcValue["2"];
        console.log("L'ordinateur à choisi " + pcValue["2"]);
    }
    return pcChoice;
}

var pcChoice = computerChoice(pcValue);

// Print result of player en computer

var print = alert("Vous avez choisi : " + userChoice + "\n\nL'ordinateur à choisi : " + pcChoice + "\n\n" );       










