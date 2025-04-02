import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const parte1 = ["Mi perro", "Mi gato", "Un alien", "Mi tortuga", "Donald Trump"];
  const parte2 = ["se comió", "desintegró", "infectó", "abdujo", "sacrificó", "enterro"];
  const parte3 = ["los apuntes", "la comida", "el coche", "la casa", "la puerta", "la cama", "el codespace"];
  const parte4 = ["súbitamente.", "de forma violenta.", "temiendo por su vida.", "muy emocionado."];

  function respuestaRandom(parte1, parte2, parte3, parte4) {

    let random1 = Math.floor(Math.random() * parte1.length);
    let random2 = Math.floor(Math.random() * parte2.length);
    let random3 = Math.floor(Math.random() * parte3.length);
    let random4 = Math.floor(Math.random() * parte4.length);

    return `${parte1[random1]} ${parte2[random2]} ${parte3[random3]} ${parte4[random4]}`;

  }

  document.getElementById("excuse").innerHTML = respuestaRandom(parte1, parte2, parte3, parte4);
  console.log("Hello Rigo from the console!");
};
