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
}, 1000);

const img = document.querySelector(".contenedor-arbol-genealogico img");
const cuadroHilana = document.querySelector("#cuadro-hilana");
const cuadroTramulo = document.querySelector("#cuadro-tramulo");
const cuadroLucia = document.querySelector("#cuadro-lucia");
const cuadroAugusto = document.querySelector("#cuadro-augusto");
const cuadroJulia = document.querySelector("#cuadro-julia");
const cuadroUrdeliano = document.querySelector("#cuadro-urdeliano");
const cuadroMarco = document.querySelector("#cuadro-marco");
const cuadroClaudia = document.querySelector("#cuadro-claudia");
const cuadroPedro = document.querySelector("#cuadro-pedro");
const cuadroLisandro = document.querySelector("#cuadro-lisandro");

function actualizarCuadro(width) {
  // hilana
  if (width == 1000) {
    cuadroHilana.style.top = "20px";
    cuadroHilana.style.left = "227px";
    cuadroHilana.style.width = "132px";
    cuadroHilana.style.height = "78px";
  } else if (width > 1000) {
    cuadroHilana.style.top = "4%";
    cuadroHilana.style.left = "23%";
    cuadroHilana.style.width = "13%";
    cuadroHilana.style.height = "15%";
  }

  // tramulo
  if (width == 1000) {
    cuadroTramulo.style.top = "20px";
    cuadroTramulo.style.left = "430px";
    cuadroTramulo.style.width = "132px";
    cuadroTramulo.style.height = "78px";
  } else if (width > 1000) {
    cuadroTramulo.style.top = "4%";
    cuadroTramulo.style.left = "43%";
    cuadroTramulo.style.width = "13%";
    cuadroTramulo.style.height = "15%";
  }

  // lucia
  if (width == 1000) {
    cuadroLucia.style.top = "156px";
    cuadroLucia.style.left = "27px";
    cuadroLucia.style.width = "132px";
    cuadroLucia.style.height = "78px";
  } else if (width > 1000) {
    cuadroLucia.style.top = "29%";
    cuadroLucia.style.left = "2.5%";
    cuadroLucia.style.width = "13%";
    cuadroLucia.style.height = "15%";
  }

  // augusto
  if (width == 1000) {
    cuadroAugusto.style.top = "156px";
    cuadroAugusto.style.left = "227px";
    cuadroAugusto.style.width = "132px";
    cuadroAugusto.style.height = "78px";
  } else if (width > 1000) {
    cuadroAugusto.style.top = "29%";
    cuadroAugusto.style.left = "23%";
    cuadroAugusto.style.width = "13%";
    cuadroAugusto.style.height = "15%";
  }

  // julia
  if (width == 1000) {
    cuadroJulia.style.top = "156px";
    cuadroJulia.style.left = "429px";
    cuadroJulia.style.width = "132px";
    cuadroJulia.style.height = "78px";
  } else if (width > 1000) {
    cuadroJulia.style.top = "29%";
    cuadroJulia.style.left = "43%";
    cuadroJulia.style.width = "13%";
    cuadroJulia.style.height = "15%";
  }

  // urdeliano
  if (width == 1000) {
    cuadroUrdeliano.style.top = "156px";
    cuadroUrdeliano.style.left = "633px";
    cuadroUrdeliano.style.width = "132px";
    cuadroUrdeliano.style.height = "78px";
  } else if (width > 1000) {
    cuadroUrdeliano.style.top = "29%";
    cuadroUrdeliano.style.left = "63.5%";
    cuadroUrdeliano.style.width = "13%";
    cuadroUrdeliano.style.height = "15%";
  }

  // marco
  if (width == 1000) {
    cuadroMarco.style.top = "290px";
    cuadroMarco.style.left = "433px";
    cuadroMarco.style.width = "132px";
    cuadroMarco.style.height = "78px";
  } else if (width > 1000) {
    cuadroMarco.style.top = "55%";
    cuadroMarco.style.left = "43.2%";
    cuadroMarco.style.width = "13%";
    cuadroMarco.style.height = "14.5%";
  }

  // claudia
  if (width == 1000) {
    cuadroClaudia.style.top = "290px";
    cuadroClaudia.style.left = "633px";
    cuadroClaudia.style.width = "132px";
    cuadroClaudia.style.height = "78px";
  } else if (width > 1000) {
    cuadroClaudia.style.top = "55%";
    cuadroClaudia.style.left = "63.5%";
    cuadroClaudia.style.width = "13%";
    cuadroClaudia.style.height = "14.5%";
  }

  // pedro
  if (width == 1000) {
    cuadroPedro.style.top = "290px";
    cuadroPedro.style.left = "834px";
    cuadroPedro.style.width = "132px";
    cuadroPedro.style.height = "78px";
  } else if (width > 1000) {
    cuadroPedro.style.top = "55%";
    cuadroPedro.style.left = "83.6%";
    cuadroPedro.style.width = "13%";
    cuadroPedro.style.height = "14.5%";
  }

  // lisandro
  if (width == 1000) {
    cuadroLisandro.style.top = "425px";
    cuadroLisandro.style.left = "534px";
    cuadroLisandro.style.width = "132px";
    cuadroLisandro.style.height = "78px";
  } else if (width > 1000) {
    cuadroLisandro.style.top = "80%";
    cuadroLisandro.style.left = "53.6%";
    cuadroLisandro.style.width = "13%";
    cuadroLisandro.style.height = "14.5%";
  }

  /*
      cuadroLucia.style.top = "29%";
    cuadroLucia.style.left = "43%";
    cuadroLucia.style.width = "13%";
    cuadroLucia.style.height = "15%";
  */
}

const observer = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const width = entry.contentRect.width;
    const height = entry.contentRect.height;

    console.log("Tamaño actual:", width, height);
    actualizarCuadro(width);
  }
});

observer.observe(img);

let ventanaPersonajes = document.getElementById("ventana-personajes");
let nombrePersonaje = document.getElementById("nombre-personaje");
let imagenPersonaje = document.getElementById("imagen-personaje");

document.addEventListener("click", function (e) {
  const cuadro = e.target.closest(".cuadro-personaje");

  if (!cuadro) return;

  // equivalente al console.log del primer código
  console.log("Click en:", cuadro);

  // equivalente al segundo código
  console.log("Nombre:", cuadro.dataset.nombre);

  // Hilana
  if (cuadro.dataset.nombre == "Hilana") {
    ventanaPersonajes.style.visibility = "visible";
    imagenPersonaje.src = "assets/personajes/Hilana_.png";
    nombrePersonaje.textContent = "Hilana";
  }

  // Tramulo
  if (cuadro.dataset.nombre == "Tramulo") {
    ventanaPersonajes.style.visibility = "visible";
    imagenPersonaje.src = "assets/personajes/Tramulo_.png";
    nombrePersonaje.textContent = "Tramulo";
  }

  // Tramulo
  if (cuadro.dataset.nombre == "Lucia") {
    ventanaPersonajes.style.visibility = "visible";
    imagenPersonaje.src = "assets/personajes/Lucia_.png";
    nombrePersonaje.textContent = "Lucia";
  }

  // Augusto
  if (cuadro.dataset.nombre == "Augusto") {
    ventanaPersonajes.style.visibility = "visible";
    imagenPersonaje.src = "assets/personajes/Augusto_.png";
    nombrePersonaje.textContent = "Augusto";
  }

  // Julia
  if (cuadro.dataset.nombre == "Julia") {
    ventanaPersonajes.style.visibility = "visible";
    imagenPersonaje.src = "assets/personajes/Julia idle.png";
    nombrePersonaje.textContent = "Julia";
  }

  // Urdeliano
  if (cuadro.dataset.nombre == "Urdeliano") {
    ventanaPersonajes.style.visibility = "visible";
    imagenPersonaje.src = "assets/personajes/Urdeliano.png";
    nombrePersonaje.textContent = "Urdeliano";
  }

  // Urdeliano
  if (cuadro.dataset.nombre == "Marco") {
    ventanaPersonajes.style.visibility = "visible";
    imagenPersonaje.src = "assets/personajes/Marco.png";
    nombrePersonaje.textContent = "Marco";
  }

  // Claudia
  if (cuadro.dataset.nombre == "Claudia") {
    ventanaPersonajes.style.visibility = "visible";
    imagenPersonaje.src = "assets/personajes/claudia vacio.png";
    nombrePersonaje.textContent = "Claudia";
  }

  // Pedro
  if (cuadro.dataset.nombre == "Pedro") {
    ventanaPersonajes.style.visibility = "visible";
    imagenPersonaje.src = "assets/personajes/pedro vacio.png";
    nombrePersonaje.textContent = "Pedro";
  }

  // Lisandro
  if (cuadro.dataset.nombre == "Lisandro") {
    ventanaPersonajes.style.visibility = "visible";
    imagenPersonaje.src = "assets/personajes/Lisandro.png";
    nombrePersonaje.textContent = "Lisandro";
  }
});

let botonCerrar = document.getElementById("boton-cerrar");

botonCerrar.onclick = function () {
  ventanaPersonajes.style.visibility = "hidden";
};
