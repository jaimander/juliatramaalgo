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

// árbol genealógico

const personajes = {
  hilana: {
    nombre: "Hilana",
    imagen: "assets/personajes/Hilana_.png",
    datos: [
      { label: "Año de nacimiento", valor: "1913" },
      { label: "Edad en el juego", valor: "33 años (1946)" },
      { label: "Oficio", valor: "Hilandera. Responsable de la crianza." },
      {
        label: "Rasgo central",
        valor:
          "Práctica, eficiente, cariñosa pero sin excesos. El pilar silencioso de la familia.",
      },
      {
        label: "Relación con Julia",
        valor:
          "La primera maestra real de Julia. Le enseña a hilar y a torcer el hilo con facilidad destacable.",
      },
    ],
  },

  tramulo: {
    nombre: "Trámulo",
    imagen: "assets/personajes/Tramulo_.png",
    datos: [
      { label: "Año de nacimiento", valor: "1906" },
      { label: "Edad en el juego", valor: "40 años (1946)" },
      {
        label: "Oficio",
        valor: "Tejedor de ruanas en telar de palo. Ganadero menor.",
      },
      {
        label: "Rasgo central",
        valor:
          "Hombre de pocas palabras y manos muy hábiles. Enseña con el ejemplo, no con el discurso.",
      },
      {
        label: "Relación con Julia",
        valor:
          "Padre amoroso pero contenido, como lo permite la cultura campesina de la época. Julia lo admira sin que él lo sepa.",
      },
    ],
  },

  lucia: {
    nombre: "Lucía",
    imagen: "assets/personajes/Lucia_.png",
    datos: [
      { label: "Año de nacimiento", valor: "1943" },
      { label: "Edad en el juego", valor: "32 años (1975)" },
      {
        label: "Oficio",
        valor: "",
      },
      {
        label: "Función narrativa",
        valor:
          "Poner en contexto la vida social del caserío y la tensión entre el tejido y el cultivo de cebolla.",
      },
      {
        label: "Relación con Julia",
        valor: "Prima menor. Clienta. Red de apoyo cotidiano.",
      },
    ],
  },

  augusto: {
    nombre: "Augusto",
    imagen: "assets/personajes/Augusto_.png",
    datos: [
      { label: "Año de nacimiento", valor: "1929" },
      { label: "Edad en el juego", valor: "17 años (1946)" },
      {
        label: "Oficio",
        valor: "Jornalero. Ayudante del padre en las labores del campo.",
      },
      {
        label: "Rasgo central",
        valor:
          "El hijo que tomó el camino del campo, no del telar. Representa la bifurcación de los oficios.",
      },
      {
        label: "Relación con Julia",
        valor:
          "Hermano mayor distante por la diferencia de edad, pero figura de referencia. Julia teje la ruana que Trámulo le está haciendo.",
      },
    ],
  },

  julia: {
    nombre: "Julia",
    imagen: "assets/personajes/Julia idle.png",
    datos: [
      { label: "Año de nacimiento", valor: "1940" },
      {
        label: "Edades en el juego",
        valor: "6 años (1946) ─ 35 años (1975) ─ 85 años (2025)",
      },
      {
        label: "Oficio",
        valor:
          "Tejedora de ruanas, hilandera. Ama de casa y criadora de 12 hijos.",
      },
      {
        label: "Rasgo central",
        valor:
          "Mujer que aprendió a tejer sin que se lo propusieran, y que transmitió el oficio sin proponérselo. Su vida es la trama de la historia.",
      },
      {
        label: "Rol en el juego",
        valor:
          "Protagonista en segunda persona. El jugador asume el papel de Julia (1946-1975).",
      },
    ],
  },

  urdeliano: {
    nombre: "Urdeliano",
    imagen: "assets/personajes/Urdeliano.png",
    datos: [
      { label: "Año de nacimiento", valor: "1927" },
      { label: "Edades en el juego", valor: "48 años (1975)" },
      {
        label: "Oficio",
        valor:
          "Carpintero artesano, tallador de torteros y herramientas de tejido. Ganadero menor.",
      },
      {
        label: "Rasgo central",
        valor:
          "Hombre práctico que entiende el valor del tejido aunque no sea su oficio principal. Sostén silencioso de Julia.",
      },
      {
        label: "Relación con Julia",
        valor:
          "Esposo compañero pero no dominante. Los dos tienen su oficio propio y se respetan en ello.",
      },
    ],
  },

  marco: {
    nombre: "Marco",
    imagen: "assets/personajes/Marco.png",
    datos: [
      { label: "Año de nacimiento", valor: "1975" },
      { label: "Edades en el juego", valor: "5 meses (1975) ─ 50 años (2025)" },
      {
        label: "Oficio",
        valor:
          "Tejedor artesanal de ruanas. Propietario del taller-almacén donde transcurre el tercer acto.",
      },
      {
        label: "Rasgo central",
        valor:
          "El último tejedor de la familia. Mezcla de tradición y adaptación, ya que aprende patrones andinos por internet con profesores de Chile, busca apoyo del Estado, sabe que el mercado es hostil y teje igual.",
      },
      {
        label: "Relación con Julia",
        valor:
          "Hijo y discípulo. Julia lo mira tejer como su padre la miraba a ella.",
      },
    ],
  },

  claudia: {
    nombre: "Claudia",
    imagen: "assets/personajes/claudia vacio.png",
    datos: [
      { label: "Año de nacimiento", valor: "" },
      { label: "Edades en el juego", valor: "" },
      {
        label: "Oficio",
        valor: "",
      },
      {
        label: "Función narrativa",
        valor: "",
      },
      {
        label: "Relación con Julia",
        valor: "",
      },
    ],
  },

  pedro: {
    nombre: "Pedro",
    imagen: "assets/personajes/pedro vacio.png",
    datos: [
      { label: "Año de nacimiento", valor: "1959" },
      { label: "Edades en el juego", valor: "16 años (1975)" },
      {
        label: "Oficio",
        valor:
          "Aún indefinido a los 16. En la adultez: probable jornalero o cultivador.",
      },
      {
        label: "Rasgo central",
        valor:
          "El hijo mayor. Bromista, afectuoso, ajeno al tejido pero no al afecto familiar.",
      },
      {
        label: "Relación con Julia",
        valor: "Hijo de confianza en la casa. Julia lo regaña con cariño.",
      },
    ],
  },

  lisandro: {
    nombre: "Lisandro",
    imagen: "assets/personajes/Lisandro.png",
    datos: [
      { label: "Año de nacimiento", valor: "2015" },
      { label: "Edades en el juego", valor: "10 años (2025)" },
      {
        label: "Oficio (en formación)",
        valor:
          "Aprende a tejer bufandas. Ayuda a cardar y a ordenar el taller.",
      },
      {
        label: "Rasgo central",
        valor:
          "El niño que creció entre telares y smartphones al mismo tiempo. La pregunta abierta del juego.",
      },
      {
        label: "Relación con Julia",
        valor:
          "Nieto y alumno ocasional. Julia lo llama “papito” y “mi chinito”.",
      },
    ],
  },
};

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
  const id = cuadro.dataset.nombre;
  const personaje = personajes[id];

  actualizarFicha(personaje);

  ventanaPersonajes.style.visibility = "visible";

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

function actualizarFicha(personaje) {
  nombrePersonaje.textContent = personaje.nombre;
  imagenPersonaje.src = personaje.imagen;
  const tabla = document.getElementById("tabla-personaje");
  tabla.innerHTML = "";

  personaje.datos.forEach((item) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${item.label}</td>
      <td>${item.valor}</td>
    `;
    tabla.appendChild(fila);
  });
}
