"use strict";

document.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector("#car").addEventListener("click", startTheAnimation);
}

function startTheAnimation() {
  console.log("the car has been clicked");

  document
    .querySelector("#car")
    .removeEventListener("click", startTheAnimation);
  document.querySelector("#car").classList.add("drive");

  document
    .querySelector("#car")
    .addEventListener("animationend", stopTheAnimation);
}

function stopTheAnimation() {
  document.querySelector("#car").classList.remove("drive");
  start();
}
