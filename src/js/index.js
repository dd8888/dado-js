const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const dado1 = document.getElementById("dado1");
const dado2 = document.getElementById("dado2");
const dado3 = document.getElementById("dado3");

boton1.onclick = getRandomDado1;
boton2.onclick = getRandomDado2;
boton3.onclick = getRandomDado3;

function getRandomDado1() {
  dado1.textContent = Math.ceil(Math.random() * 6);
}

function getRandomDado2() {
  dado2.textContent = Math.ceil(Math.random() * 6);
}

function getRandomDado3() {
  dado3.textContent = Math.ceil(Math.random() * 6);
}
