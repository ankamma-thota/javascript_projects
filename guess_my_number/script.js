"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("no number!⛔");
  } else if (guess === randomNumber) {
    displayMessage("Correct Answer 🎉");
    document.querySelector(".number").textContent = randomNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = " 30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    } else if (guess !== randomNumber) {
      if (score > 1) {
        displayMessage(
          guess < randomNumber
            ? "Number is  too low 😒"
            : "Number is too high😒"
        );
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("lost the game!");
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "start guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
