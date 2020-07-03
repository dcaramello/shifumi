//  ...~~~*** Shifumi games ***~~~... //

// Welcome message
alert("Bienvenue\nUne petite partie de Shifumi ?");

// Allow to enter and store the name
var userName = prompt("Rentrez votre nom");


// Variable for a player
userValue = ["pierre", "feuille", "ciseaux"];

// Allow user to enter a value and store this (pierre, feuille, ciseaux)
function user() {
    var userChoice= "";

    var userCapture = prompt("Bonjour " + userName + " \npierre , feuille  ou  ciseaux ?");

    if (userCapture==="pierre") {
        userChoice=userValue["0"];
        console.log("le joueur à choisi " + userValue["0"]);
    }
    else if (userCapture==="feuille") {
        userChoice=userValue["1"];
        console.log("le joueur à choisi " + userValue["1"]);
    }
    else if (userCapture==="ciseaux") {
        userChoice=userValue["2"];
        console.log("le joueur à choisi " + userValue["2"]);
    }
    else {
        console.log("aucun choix valide");
    }
    return userChoice;
}

var userChoice = user(userValue);

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

// Display of player and computer results

var print = alert("Vous avez choisi : " + userChoice + "\n\nL'ordinateur à choisi : " + pcChoice + "\n\n" );       

// Compare and determine the winner
if (userChoice === pcChoice) {
    var equality = "Egalité";
    console.log(equality);
}

else if(userChoice==="ciseaux" && pcChoice==="feuille" || 
        userChoice==="feuille" && pcChoice==="pierre" ||
        userChoice==="pierre" && pcChoice==="ciseaux" ) {
        var playerWin = "Gagné";
        console.log(playerWin);       
    }
else{
    var pcWin = "Perdu";
    console.log(pcWin);
    }
    
// Display the winner
if (equality) {
    alert("égalité !");
}   
else if (playerWin) {
    alert("Vous gagné !");
}

else {
    alert("Vous avez perdu !");
}









