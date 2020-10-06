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
  const number = Math.ceil(Math.random() * 6);

  dado1.style.backgroundImage = "url('" + getImage(number) + "')";
}

function getRandomDado2() {
  const number = Math.ceil(Math.random() * 6);

  dado2.style.backgroundImage = "url('" + getImage(number) + "')";
}

function getRandomDado3() {
  const number = Math.ceil(Math.random() * 6);

  dado3.style.backgroundImage = "url('" + getImage(number) + "')";
}

function getImage(number) {
  switch (number) {
    case 1:
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/768px-Dice-1-b.svg.png";
    case 2:
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/600px-Dice-2-b.svg.png";
    case 3:
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/1024px-Dice-3-b.svg.png";
    case 4:
      return "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg";
    case 5:
      return "https://tr.rbxcdn.com/514984bf832371b30a63768669743683/420/420/Decal/Png";
    case 6:
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/768px-Dice-6-b.svg.png";
    default:
  }
}
