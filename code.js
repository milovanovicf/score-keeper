"use strict";

const playerOne = document.querySelector(".playerOne");
const playerTwo = document.querySelector(".playerTwo");
const score = document.querySelector("#score");
const addplayerOne = document.querySelector(".addplayerOne");
const addplayerTwo = document.querySelector(".addplayerTwo");
const resetBtn = document.querySelector(".reset");

let count = 0;
playerOne.innerText = count;
playerTwo.innerText = count;

const addOne = function () {
  const cnt = Number(playerOne.innerText) + 1;
  playerOne.innerText = cnt;
  if (Number(playerOne.innerText) >= Number(score.value)) {
    addplayerOne.disabled = true;
    playerOne.style.color = "green";
    addplayerTwo.disabled = true;
    playerTwo.style.color = "red";
  }
};
const addTwo = function () {
  const cnt = Number(playerTwo.innerText) + 1;
  playerTwo.innerText = cnt;
  if (Number(playerTwo.innerText) >= Number(score.value)) {
    addplayerTwo.disabled = true;
    playerTwo.style.color = "green";
    addplayerOne.disabled = true;
    playerOne.style.color = "red";
  }
};

const reset = () => {
  addplayerOne.disabled = false;
  playerOne.innerText = 0;
  addplayerTwo.disabled = false;
  playerTwo.innerText = 0;
  playerOne.style.color = "black";
  playerTwo.style.color = "black";
};

addplayerOne.addEventListener("click", addOne);
addplayerTwo.addEventListener("click", addTwo);
resetBtn.addEventListener("click", reset);
score.addEventListener("change", reset);
