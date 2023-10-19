/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Numeros y letras aleatorias
  function RandomCardNumber() {
    let arr = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let randomNumber = arr[Math.floor(Math.random() * arr.length)];
    return randomNumber;
  }
  let numeroRandomDeLaCarta = document.getElementById("cardNumber");
  numeroRandomDeLaCarta.innerHTML = RandomCardNumber();

  // Palos aleatorios

  function randomIconGenerator() {
    let arrIcon = ["♦", "♥", "♠", "♣"];
    let randomIcon = arrIcon[Math.floor(Math.random() * arrIcon.length)];
    return randomIcon;
  }
  let iconoRandom = randomIconGenerator();

  let paloSuperior = document.querySelectorAll("#paloSup")[0];
  paloSuperior.innerHTML = iconoRandom;

  let paloInferior = document.querySelectorAll("#paloInf")[0];
  paloInferior.innerHTML = iconoRandom;

  //Generando color en el palo de la carta

  paloSuperior.innerHTML = iconoRandom;
  paloInferior.innerHTML = iconoRandom;

  if (iconoRandom === "♦" || iconoRandom === "♥") {
    paloSuperior.setAttribute("style", "color:red");
    paloInferior.setAttribute("style", "color:red");
  } else {
    paloSuperior.setAttribute("style", "color:black");
    paloInferior.setAttribute("style", "color:black");
  }
};
