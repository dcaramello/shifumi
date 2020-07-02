//  ...~~~*** Jeux du Shifumi ***~~~... //

// Welcome message
alert("Bienvenue\nUne petite partie de Shifumi ?");

// Allow to enter and store the name
var name = prompt("Rentrez votre nom");


// Allow user to enter a value (pierre, feuille, ciseaux)
var userValue = prompt("Bonjour " + name + " \n\npierre , feuille  ou  ciseaux ?");



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
        console.log("L'ordinateur à choisi " + pcValue["0"]);
    }
    else if(result === 1) {
        console.log("L'ordinateur à choisi " + pcValue["1"]);
    }
    else{
        console.log("L'ordinateur à choisi " + pcValue["2"]);
    }
    return pcChoice;
}

pcChoice = computerChoice(pcValue);
computerChoice;







