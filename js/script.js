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
    historia:
      "Hilana nació en 1913 en una vereda a dos horas a pie del caserío donde viviría de casada. Su madre también hilaba; su abuela también. No se sabe quien fue el primer familiar en comenzar con la labor. Desde pequeña aprendió que el hilo tiene que torcerse para ser resistente, pues dos hebras débiles juntas hacen una hebra fuerte. Esa es la primera lección que le transmite a Julia, y es también una metáfora de su propia vida. \n\n Se casó con Trámulo en 1929, con dieciséis años. No fue un matrimonio de amor romántico sino de afinidad de oficio y de clase. Dos familias artesanas que se reconocen. El cariño llegó después, como llega en esos mundos, despacio y sin anunciarse. \n\n Tuvo a Augusto en 1930, y luego otros hijos que no murieron pequeños, la mortalidad infantil de la época era alta en el campo boyacense. Julia nació en 1940, 11 años después de Augusto. Esa distancia con Augusto sugiere años difíciles en el medio, años de duelo y de trabajo sin pausa. Además, el hecho de que solo dos hijos sobrevivieran en una etapa tan incipiente de la consolidación de la familia en el campo boyacense sugiere situaciones adversas y dificultad económica.",
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
    historia: "Trámulo nació en 1906, el segundo de siete hijos de un tejedor de veredas altas del municipio. Su padre le enseñó el oficio en un telar de palo que todavía huele a lana mojada y a madera de cedro. Aprendió a tejer antes de aprender a leer. Los números le llegaron por la cuenta de las pasadas, no por la escuela. \n\n En su juventud trabajó temporadas en una hacienda cercana como jornalero, pero siempre regresó al telar. Hacia 1929 se casó con Hilana, una muchacha del mismo caserío que hilaba con huso mejor que nadie en tres veredas a la redonda. Juntos armaron una casa de tapia con tres cuartos: uno para dormir, uno para tejer, uno para lo demás. \n\n Su vida adulta transcurre entre el telar y las vacas. Tiene tres reses, un par de ovejas y una parcela para la siembra de papa y cebada. Los ingresos del tejido son escasos pero estables: los vecinos le encargan ruanas para bautizos, comuniones y matrimonios, y él las teje con la misma seriedad con que otros van a misa. \n\n La ruana que aparece en el guion (la de color miel, que Hilana le hace a Trámulo porque la anterior le fue robada) es uno de los objetos narrativos más importantes del juego. Esa ruana recorre cincuenta años: la lleva Trámulo, luego pasa a Marco, luego a Lisandro."
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
    historia: "Lucía es tres años menor que Julia. Creció en una casa aledaña, criada por su abuela y su madre, tía de Julia.  Se casó con un cultivador de cebolla y sus hijos trabajan en eso. No aprendió a tejer formalmente, aunque sabe los rudimentos, pues su madre también era tejedora. \n\n La visita de Lucía a Julia en 1975 es una escena de familiaridad femenina campesina donde se comparte información, lana prestada, complicidad. Lucía menciona que la cebolla da para vivir mejor que el tejido, y Julia lo escucha sin comprometerse. Esa tensión de la cebolla como alternativa económica que muchos vecinos eligieron es el trasfondo económico del segundo acto. \n\n Lucía también representa el encargo de Julia más inminente en 1975: la ruana para la nieta recién nacida de la hija de Lucía, Claudia. El tejido es un ritual de bienvenida en esta familia y en este mundo, nacer merece una ruana."
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
    historia: "Augusto tiene 17 años cuando empieza el juego. Es alto, callado como su padre, y tiene ya la espalda ancha de quien trabaja desde los diez años. Ordeña vacas, siembra papa, ayuda en el cocido. No aprendió a tejer, pues le faltó la paciencia lenta del telar, y para cuando hubiera podido aprenderlo, la cebolla larga ya empezaba a ser negocio y el jornal de campo pagaba más que una ruana. \n\n Cuando Julia tiene 6 años, Augusto ya está en la edad de pensar en casarse y en independizarse. Esa ruana que Trámulo lleva meses tejiendo para él es, en cierto modo, la última prenda que lo vincula al oficio familiar: cuando la reciba, ya habrá elegido otro camino. \n\n En los años siguientes, Augusto trabaja en los cultivos de la zona, se casa con una mujer de vereda vecina y tiene sus propios hijos. Su relación con Julia es cordial pero distante. Se ven en fiestas y velorios, se ayudan cuando hace falta. Él no aprendió el tejido, pero sabe valorar una buena ruana cuando la ve."
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
    historia: "<strong>Infancia (1940–1958)</strong> \n\n Julia nació en 1940, en plena Segunda Guerra Mundial que nadie en su vereda nombraba. Nació en la misma casa de tapia donde vivía su familia, asistida por la partera del caserío. Su nombre lo eligió su madre mirando el almanaque: Julia, sencillo y rotundo, ¿O será por el enjuliar? La verdad es que no lo recuerda. Creció entre el ruido del telar y el olor a lana mojada. Mientras Augusto trabajaba con el padre en el campo, Julia viraba hacia el interior de la casa, hacia el telar donde Trámulo tejía de madrugada. A los seis años ya distinguía los tipos de pasada con solo mirar. No lo sabía aún, pero estaba aprendiendo. Su madre Hilana le enseñó a hilar antes de que pudiera leer. El huso entre los dedos, el giro, la tensión justa para que el hilo no se rompa ni quede gordo, esa constituía su aritmética y geometría. No obstante, fue a la escuela del pueblo hasta tercero de primaria, lo que era usual en esa época y ese lugar, y luego el trabajo de la casa y el taller se la fueron llevando. De adolescente aprendió a tejer en el telar de palo de su padre. Trámulo la dejaba sentarse a su lado, le corregía el tensado con un gesto. Julia aprendió así, por ósmosis y por obstinación silenciosa. \n\n <strong>La mujer joven (1958–1975)</strong> \n\n Julia se casó con Urdeliano a sus dieciocho años, en 1958. Él tenía treinta y un años. La diferencia de edad era común en el campo de la época; lo que importaba era que Urdeliano tenía tierra, sabía tallar torteros y cepillos, y (quizás lo más importante) no le pedía a Julia que dejara de tejer. Al contrario: construyó un taller anexo a la casa donde ella pudiera tener su propio telar. Entre 1959 y 1975 Julia tuvo doce hijos. Varios murieron de pequeños (enfermedades, accidentes, la dureza del campo). De los que llegaron a adultos, la historia del juego muestra claramente que el oficio del tejido no continuó en ninguno salvo en Marco, el último nacido. Julia crió a esos hijos con los ingresos del tejido y de la ganadería menor, con las manos siempre ocupadas. Con una madeja en el regazo mientras mecía la cuna o una ruana en el telar mientras esperaba que el agua hirviera. Durante estos años Julia construyó una red de encargos: ruanas para bautizos, comuniones, matrimonios de todo el caserío. Lucía, su prima, le traía ovillos cuando le faltaba lana. Roberta, su amiga, fue de sus primeras clientas. El tejido era negocio y era vínculo social al mismo tiempo. \n\n <strong>La mujer madura (1975–2010)</strong> \n\n Los años de 1975 a 2010 son los años de mayor productividad de Julia como tejedora. Sus hijos van creciendo y marchándose: a trabajar en los cultivos de cebolla, a las ciudades, a la “vida moderna”. Uno a uno van dejando el pueblo. Solo Marco, nacido en 1975 el se queda. Julia le enseña a Marco a tejer cuando tiene diez u once años, sin haberlo planeado, exactamente como Trámulo le enseñó a ella. Dejándolo sentarse al lado, corrigiéndolo con gestos, señalando el error sin decirle por un nombre. La cadena se cierra sin que nadie lo hubiera decidido. Urdeliano muere en algún momento de los años noventa *los detalles exactos pueden definirse en el guion*, pero el juego lo menciona solo como ausencia, como objeto heredado (la ruana o las herramientas que él tallaba)*. Julia sigue tejiendo sola. \n\n <strong>La anciana (2025)</strong> \n\n A sus 85 años, Julia ya no puede tejer. Tiene problemas respiratorios (probablemente relacionados con años de inhalar fibras de lana) y las manos le duelen. Ha dejado de hilar por orden de la médica, aunque la obedece a regañadientes. Viene al taller de Marco pero no a trabajar sino a estar. Le gusta ver tejerse las ruanas que ella ya no puede hacer, a enseñarle a Lisandro a cardar, a tener los ojos sobre todo. Su vejez es, de hecho, lucida, no nostálgica. No idealiza el pasado ni le teme el futuro, pues sabe que el oficio puede desaparecer y lo dice sin drama. Ha visto desaparecer muchas cosas. Lo que le importa es que el conocimiento no se pierda del todo, aunque sea en las manos de su nieto.",
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
    historia: "Urdeliano nació en 1927 y quedó viudo joven, antes de casarse con Julia. Su primer matrimonio no tuvo hijos o los hijos murieron; el guion no lo especifica, pero su vida hasta los treinta y uno habla de un hombre que ya conoce la pérdida. \n\n Se casó con Julia en 1958. Lo que los unió no fue solo el amor sino la complementariedad, pues ella teje, él talla las herramientas del tejido (husos, peines del telar, cardas). Son dos artesanías que se necesitan. Construyó para Julia un taller con telar propio, que es el espacio doméstico central del juego en 1975. Urdeliano esquila las ovejas, cuida el ganado, hace los trabajos pesados del campo. No es un hombre expresivo pero sí confiable. Cada acción en el guion lo muestra yendo y viniendo con propósito. Cuando sale con Pedro a esquilar a Luna en 1975, el gesto es ordinario y aún así carga de significado al juego: mantener la cadena de la lana. \n\n Muere en los años noventa, *no especificaré si es producto de la violencia o de alguna enfermedad o accidente de trabajo*. Su ausencia en 2025 está implícita en que Julia habla de “los tiempos de antes” sin mencionar a su esposo, y en que Marco tiene el taller como propio, no compartido.",
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
    historia: "Marco nació en 1975, el último de los doce hijos de Julia y Urdeliano. Que haya nacido el mismo día en que Pedro y Urdeliano fueron a esquilar a la oveja Luna es un detalle importante, pues Marco llega al mundo con el ciclo de la lana. \n\n Creció en el taller de su madre. Mientras sus hermanos se iban o a la ciudad, a la cebolla, al jornal, Marco se quedaba. Fue una decisión gradual y no algo premeditado, no necesariamente tenía esa intención. A los diez u once años Julia lo puso a sentarse al lado del telar. A los quince ya sabía tejer. A los veinte tenía su propio telar.*No es la historia de Marco, el entrevistado, es una historia modificada a conveniencia para representar precisamente esa “universalidad” del tejido de ruanas boyacense que queremos representar.* \n\n En su juventud, en los años noventa, la ruana artesanal comenzó a perder mercado frente a las importadas de Ecuador y China, y luego frente a las sintéticas. Marco lo vio venir y no se fue, prefirió montar el almacén en el centro del pueblo, aprendió a hablar con turistas, aprendió a explicar la diferencia entre lana natural y acrílico. \n\n En la adultez, Marco descubrió internet como herramienta de aprendizaje textil. Tiene un soporte casero para el celular sobre el telar y aprende patrones con profesores de Chile y de Perú. Ha intentado organizarse con otros artesanos para buscar apoyo del gobierno, sin resultado hasta 2025. Ese fracaso institucional lo ha hecho más escéptico pero no menos persistente. Tiene una esposa *cuyo nombre e historia pueden desarrollarse en futuras versiones del guion* que trabaja con él en el taller. Su hijo Lisandro ya muestra interés en el oficio.",
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
    historia: "Pedro tiene 16 años en 1975. Es el primogénito que llegó a adulto (o el mayor de los que sobrevivieron). Ayuda a su padre con el campo y las ovejas. Tiene sentido del humor, un ejemplo es su comentario sobre la ruana del abuelo que no se quita ni para dormir es el primer momento de levedad del segundo acto. \n\n La ruana que le dio el abuelo Trámulo es su objeto de identidad: tiene “casi un año” usándola sin quitársela. Eso lo vincula, sin saberlo, a la cadena textil de la familia. Pero Pedro no aprenderá a tejer. En los años siguientes probablemente se irá al cultivo de cebolla como los hijos de Lucía, o encontrará trabajo en algún pueblo mayor. \n\n Su función narrativa en el juego es mostrar el contraste con Marco, ya que ambos son hijos de Julia, pero solo uno continúa el oficio. Pedro representa a los once hijos que no lo hicieron, o no sobrevivieron. ",
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
    historia: "Lisandro nació en 2015. Creció viendo a su padre tejer, a su madre ayudarlo, y a su abuela Julia venir al taller los sábados. A los ocho años empezó a hacer bufandas en un telar pequeño que Marco le armó. A los diez ya las teje bien. \n\n Es un niño de su época. Ya tiene celular, le gustan los videojuegos, va al colegio del pueblo donde lo llaman a hacer tareas en computador. Pero también sabe cardar lana y distinguir la calidad de una fibra con los dedos. No hay contradicción en él porque todavía es demasiado joven para sentirla. \n\n La ruana de color miel de Trámulo (que Marco le va a dar) es el objeto que lo conecta con cuatro generaciones. Cuando la reciba, tendrá en los hombros casi un siglo de tejido familiar. No lo sabrá todavía."
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
let historiaPersonaje = document.getElementById("historia-personaje");

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

  this.body.style.overflowY = "hidden";

  ventanaPersonajes.style.visibility = "visible";
});

let botonCerrar = document.getElementById("boton-cerrar");

botonCerrar.onclick = function () {
  ventanaPersonajes.style.visibility = "hidden";
  document.body.style.overflowY = "visible";
};

function actualizarFicha(personaje) {
  nombrePersonaje.textContent = personaje.nombre;
  imagenPersonaje.src = personaje.imagen;
  historiaPersonaje.innerHTML = personaje.historia;
  const tabla = document.getElementById("tabla-personaje");
  tabla.innerHTML = "";

  personaje.datos.forEach((item) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td class="atributo">${item.label}</td>
      <td>${item.valor}</td>
    `;
    tabla.appendChild(fila);
  });
}
