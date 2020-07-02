//  ...~~~*** Jeux du Shifumi ***~~~... //

// Welcome message
alert("Bienvenue\nUne petite partie de Shifumi ?");

// Allow to enter and store the name
var name = prompt("Rentrez votre nom");


// Allow user to enter a value (pierre, feuille, ciseaux)
var userValue = prompt("Bonjour " + name + " \n\npierre , feuille  ou  ciseaux ?");

// L'ordinateur




// la fonction getRandom permet de générer un entier aléatoire dans une intervalle entre 0(inclus) et 3(exclus)
// la fonction Math.floor renvoi un entier
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
pcValue = ["pierre", "feuille", "ciseaux"];

var result = getRandomInt(3);
  console.log(result);

if(result === 0) {
    console.log("L'ordinateur à choisi " + pcValue["0"]);
}

else if(result === 1) {
    console.log("L'ordinateur à choisi " + pcValue["1"]);
}

else{
    console.log("L'ordinateur à choisi " + pcValue["2"]);
}











