let randomvaribale1 = Math.floor(Math.random() * 6) + 1; //generates a random number btw 1-6

let randomDiceImage1 = "dice" + randomvaribale1 + ".png"; // generates a random image of dice

let randomImageSource1 = "images/" + randomDiceImage1; // generates a image source for the random image

let image1 = document.querySelectorAll("img")[0]; // selects the first image

image1.setAttribute("src", randomImageSource1); // changes its src attribute to random image source

let randomvariable2 = Math.floor(Math.random() * 6) + 1;

let randomDiceimage2 = "dice" + randomvariable2 + ".png";

let randomImagesource2 = "images/" + randomDiceimage2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImagesource2);

//if player 1 wins
if (randomvaribale1 > randomvariable2) {
  document.querySelector("h1").textContent = "🚩 player 1 wins";
} else if (randomvaribale1 < randomvariable2) {
  document.querySelector("h1").textContent = "🚩 player 2 wins";
} else {
  document.querySelector("h1").textContent = "Draw!!";
}
