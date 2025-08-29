let archivoOveja = [];

archivoOveja[0] = "assets/oveja01.png";
archivoOveja[1] = "assets/oveja02.png";

let imagenOveja = document.getElementById("imagen-oveja");

// Empezamos en la primera
let indice = 0;
imagenOveja.src = archivoOveja[indice];

// Cada segundo cambiamos a la siguiente
setInterval(() => {
  indice = (indice + 1) % archivoOveja.length; // vuelve a 0 al llegar al final
  imagenOveja.src = archivoOveja[indice];
}, 1000)
