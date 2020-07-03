//  ...~~~*** Shifumi games ***~~~... //

// Welcome message
alert("Bienvenue\nUne petite partie de Shifumi ?");

// Allow to enter and store the name
var userName = prompt("Rentrez votre nom");


// Variable for a player
value = ["pierre", "feuille", "ciseaux"];

// Allow user to enter a value and store this (pierre, feuille, ciseaux)
function user() {
    var userChoice= "";

    var userCapture = prompt("Bonjour " + userName + " \npierre , feuille  ou  ciseaux ?");

    if (userCapture==="pierre") {
        userChoice=value["0"];
        console.log("le joueur à choisi " + value["0"]);
    }
    else if (userCapture==="feuille") {
        userChoice=value["1"];
        console.log("le joueur à choisi " + value["1"]);
    }
    else if (userCapture==="ciseaux") {
        userChoice=value["2"];
        console.log("le joueur à choisi " + value["2"]);
    }
    else {
        console.log("aucun choix valide");
    }
    return userChoice;
}
var userChoice = user(value);

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
        pcChoice = value["0"];
        console.log("L'ordinateur à choisi " + value["0"]);
    }
    else if(result === 1) {
        pcChoice = value["1"];
        console.log("L'ordinateur à choisi " + value["1"]);
    }
    else{
        pcChoice = value["2"];
        console.log("L'ordinateur à choisi " + value["2"]);
    }
    return pcChoice;
}
var pcChoice = computerChoice(value);

// Display of player and computer results
var print = alert("Vous avez choisi : " + userChoice + "\n\nL'ordinateur à choisi : " + pcChoice + "\n\n" );       

// Compare and determine the winner
if (userChoice === pcChoice) {
    var equality = "equality";
    console.log(equality);
}

else if(userChoice==="ciseaux" && pcChoice==="feuille" || 
        userChoice==="feuille" && pcChoice==="pierre" ||
        userChoice==="pierre" && pcChoice==="ciseaux" ) {
        var playerWin = "win";
        console.log(playerWin);       
    }
else{
    var pcWin = "loose";
    console.log(pcWin);
    }
    
// Display the winner
if (equality) {
    alert("égalité !");
}   
else if (playerWin) {
    alert("Bravo " + userName + ", vous avez gagné!");
}

else {
    alert("Vous avez perdu !");
}









