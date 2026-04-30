const DOMICILIO = 5000;
const numeroWhatsApp = "573115666476";

let carrito = [];
let tiendaActual = "";

const tiendasInfo = {
  "Droguería Santa Ana": {
  direccion: "Esquina, Calle 14 # 13-89",
  responsable: "Leonardo Gil",
  horario: "8am a 7pm",
  pagos: "Efectivo",
  entrega: "10 a 20 min",
  mensaje: "Medicamentos y productos de droguería disponibles en Tame",
  logo: "img/logo-drogueria.png"
},

"Como En Casa": {
  direccion: "cll 14#23-04",
  responsable: "Como en casa",
  horario: "7am a 2.30 pm",
  pagos: "Efectivo,Nequi,Daviplata",
  entrega: "20-30 minutos",
  mensaje: "Desayunos, almuerzos y sabor que te hace sentir en casa",
  logo: "img/comoencasa/logocomoencasa.png"
},

"Daza Cacao Premium": {
  direccion: "calle 15 # 22-46",
  responsable: "Daza Cacao",
  horario: "9am a 12pm / 3pm a 8pm",
  pagos: "Efectivo, Nequi, Daviplata",
  entrega: "20-30 minutos",
  mensaje: "Bebidas y postres a base de cacao premium",
  logo: "img/dazacacao/logodazacacao.png"
},

"La Brasa Araucana": {
  direccion: "cra 10#13-67",
  responsable: "Bryan",
  horario: "9am a 9 pm",
  pagos: "Efectivo",
  entrega: "20-30 minutos",
  mensaje: "Pollo asado y comidas rápidas en Tame",
  logo: "img/brasaaraucana/logolabrasaaraucana.png"
},

  "Supermercado Sur": {
    direccion: "Tame",
    responsable: "Pendiente",
    horario: "Horario por definir",
    pagos: "Efectivo",
    entrega: "Según zona",
    mensaje: "Productos básicos para tu hogar"
  },

"APIESTEBAN": {
  direccion: "cra 9 #13-15",
  responsable: "Briyid López",
  horario: "8 am - 7 pm",
  pagos: "Efectivo, Nequi, Daviplata",
  entrega: "20-30 minutos",
  mensaje: "Productos naturales y derivados de la miel en Tame",
  logo: "img/apiesteban/logo-apiesteban.png",
  tema: "tema-apiesteban"
},

   "Multicolores la casa de las pinturas": {
    direccion: "Calle 13 #16-82 - Barrio Sucre",
    responsable: "Jeferson Caballero",
    horario: "7 AM a 12 PM - 2 PM a 6 PM",
    pagos: "Efectivo, Nequi, Daviplata",
    entrega: "15 minutos",
    mensaje: "Pinturas y materiales para construcción, hogar y negocio",
    logo: "img/logo-pinturas.png"
  },
};

const tiendasPorCategoria = {
  "Restaurantes": [
    "Como En Casa",
    "La Brasa Araucana",
    "Daza Cacao Premium"
  ],
  "Droguerías": [
    "Droguería Santa Ana"
  ],
  "Mercado": [
    "Supermercado Sur"
  ],
  "Naturales": [
    "APIESTEBAN"
  ],
  "Hogar": [
    "Multicolores la casa de las pinturas"
  ]
};

const productosPorTienda = {
 "Droguería Santa Ana": [
  { nombre: "Acetaminofén tabletas", precio: 2000, destacado: true },
  { nombre: "Ibuprofeno", precio: 3000, destacado: false },
  { nombre: "Vitamina C", precio: 5000, destacado: false },
  { nombre: "Suero oral", precio: 3500, destacado: false },
  { nombre: "Alcohol antiséptico 350ml", precio: 5500, destacado: false },
  { nombre: "Tapabocas unidad", precio: 1000, destacado: false },
  { nombre: "Loratadina", precio: 2500, destacado: false },
  { nombre: "Alka-Seltzer sobre", precio: 2000, destacado: false }
  ],

"Como En Casa": [
  {
    nombre: "Caldo de costilla de res",
    precio: 7000,
    destacado: true,
    horario: "desayuno",
    descripcion: "Disponible en horario de desayunos"
  },
  {
    nombre: "Caldo con huevo",
    precio: 6000,
    horario: "desayuno",
    descripcion: "Disponible en horario de desayunos"
  },
  {
    nombre: "Changua",
    precio: 10000,
    horario: "desayuno",
    descripcion: "Disponible en horario de desayunos"
  },
  {
    nombre: "Almuerzo proteína $13.000",
    precio: 13000,
    destacado: true,
    horario: "almuerzo",
    descripcion: "Proteínas: estofado, carne molida, carne desmechada o albóndigas. Incluye sopa, principio y acompañamientos."
  },
  {
    nombre: "Almuerzo proteína $17.000",
    precio: 17000,
    horario: "almuerzo",
    descripcion: "Proteínas: pollo al horno, milanesa, alitas apanadas, pollo salteado, cerdo salteado o arroz oriental."
  },
  {
    nombre: "Cerdo agridulce",
    precio: 18000,
    horario: "almuerzo",
    descripcion: "Incluye sopa, principio y acompañamientos disponibles."
  },
  {
    nombre: "Mojarra frita",
    precio: 25000,
    horario: "almuerzo",
    descripcion: "Plato especial."
  },
  {
    nombre: "Trucha al ajillo",
    precio: 25000,
    horario: "almuerzo",
    descripcion: "Plato especial."
  }
],

"Daza Cacao Premium": [
  {
    nombre: "Chocomigao",
    precio: 13500,
    destacado: true,
    descripcion: "Chocolate premium caliente con queso, pan integral, galletas dulces y palitoque"
  },
  {
    nombre: "Chocolate con arepa",
    precio: 11000,
    descripcion: "Taza de chocolate premium caliente con arepa llena de mucho queso"
  },
  {
    nombre: "Chocolate con pan y queso",
    precio: 11000,
    descripcion: "Taza de chocolate premium caliente con porción de queso doble crema y pan integral"
  },
  {
    nombre: "Chocolate frío",
    precio: 12500,
    descripcion: "Granizado de chocolate premium con leche, refrescante y cremoso"
  },
  {
    nombre: "Helado con galleta",
    precio: 10000,
    descripcion: "Helado de chocolate premium con galleta de chocolate"
  },
  {
    nombre: "Brownie con helado",
    precio: 13500,
    destacado: true,
    descripcion: "Porción de brownie con helado y salsa de chocolate premium"
  },
  {
    nombre: "Vino tinto y chocolate",
    precio: 17000,
    descripcion: "Copa de vino tinto y barra de chocolate con panela 80% cacao premium"
  },
  {
    nombre: "Chocolate 100% puro 60g",
    precio: 21000,
    descripcion: "Barra de chocolate 100% puro cacao premium"
  },
  {
    nombre: "Chocolate con panela 80% 30g",
    precio: 9000,
    descripcion: "Barra de chocolate con panela 80% cacao premium"
  }
],

"La Brasa Araucana": [
  {
    nombre: "Pollo asado entero",
    precio: 40000,
    destacado: true,
    imagen: "img/brasaaraucana/asadoentero.png"
  },
  {
    nombre: "Medio pollo asado",
    precio: 22000,
    imagen: "img/brasaaraucana/medioasado.png"
  },
  {
    nombre: "1/4 de pollo asado",
    precio: 12000,
    imagen: "img/brasaaraucana/cuartoasado.png"
  },
  {
    nombre: "Papas fritas",
    precio: 6000,
    imagen: "img/brasaaraucana/papasfritas.png"
  },
  {
    nombre: "Gaseosa Coca Cola 1.5L",
    precio: 7000,
    imagen: "img/brasaaraucana/coca.png"
  }
],

  "Supermercado Sur": [
    { nombre: "Arroz 1 kg", precio: 4000, destacado: false },
    { nombre: "Aceite 1 L", precio: 12000, destacado: false },
    { nombre: "Huevos x12", precio: 9000, destacado: false }
  ],

"APIESTEBAN": [
  { nombre: "Miel Multifloral Apiesteban 1000gr", precio: 35000, destacado: true, imagen: "img/apiesteban/Miel-Multifloral-Apiesteban-1000gr.png" },
  { nombre: "Miel Multifloral Apiesteban 500gr", precio: 20000, destacado: false, imagen: "img/apiesteban/Miel-Multifloral-Apiesteban-500gr.png" },
  { nombre: "Jarabe", precio: 22000, destacado: false, imagen: "img/apiesteban/Jarabe.png" },
  { nombre: "Propoleo", precio: 20000, destacado: false, imagen: "img/apiesteban/Propoleo.png" },
  { nombre: "Polen Natural", precio: 20000, destacado: false, imagen: "img/apiesteban/Polen-Natural.png" },
  { nombre: "Miel Angelita 100% Natural", precio: 15000, destacado: false, imagen: "img/apiesteban/Miel-Natural-Apiesteban.png"},
  { nombre: "Miel Natural Apiesteban", precio: 15000, destacado: false, imagen: "img/apiesteban/Miel-Natural-Apiesteban.png"},
],

  "Multicolores la casa de las pinturas": [
    { nombre: "Pintura blanca 1 galón", precio: 45000, destacado: true },
    { nombre: "Pintura azul 1 galón", precio: 48000, destacado: false },
    { nombre: "Rodillo profesional", precio: 12000, destacado: false },
    { nombre: "Brocha 2 pulgadas", precio: 6000, destacado: false },
    { nombre: "Thinner 1 litro", precio: 10000, destacado: false },
    { nombre: "Lija para pared", precio: 2000, destacado: false },
    { nombre: "Esmalte negro brillante", precio: 30000, destacado: false }
  ],
};

function mostrarPantalla(idPantalla) {
  const pantallas = document.querySelectorAll(".pantalla");

  pantallas.forEach(function (pantalla) {
    pantalla.classList.remove("activa");
  });

  const pantallaDestino = document.getElementById(idPantalla);

  if (pantallaDestino) {
    pantallaDestino.classList.add("activa");
    window.scrollTo(0, 0);
  }
  if (idPantalla === "tiendas") {
  mostrarCategoria("Restaurantes");
}
}

function mostrarCategoria(nombreCategoria) {
  const tituloCategoria = document.getElementById("titulo-categoria");
  const listaTiendas = document.getElementById("lista-tiendas");

  tituloCategoria.textContent = nombreCategoria;
  listaTiendas.innerHTML = "";

  const tiendas = tiendasPorCategoria[nombreCategoria] || [];

  tiendas.forEach(function (nombreTienda) {
    const datos = tiendasInfo[nombreTienda];

    const card = document.createElement("div");
    card.className = "card tienda";
    card.onclick = function () {
      abrirTienda(nombreTienda);
    };

    card.innerHTML = `
      ${datos && datos.logo ? `<img src="${datos.logo}" class="logo-lista-tienda">` : ""}
      <div>
        <h3>${nombreTienda}</h3>
        <p>${datos ? datos.mensaje : "Tienda disponible"}</p>
      </div>
    `;

    listaTiendas.appendChild(card);
  });
}

function abrirTienda(nombreTienda) {
  tiendaActual = nombreTienda;
  carrito = [];
  actualizarContadorCarrito();

  document.getElementById("titulo-tienda").textContent = nombreTienda;

  const infoTienda = document.getElementById("info-tienda");
  const listaProductos = document.getElementById("lista-productos");

  infoTienda.innerHTML = "";
  listaProductos.innerHTML = "";

  const datos = tiendasInfo[nombreTienda];

  if (datos) {
  infoTienda.innerHTML = `
    <div class="card tienda-destacada ${datos.tema || ''}">

      ${datos.logo ? `<img src="${datos.logo}" class="logo-tienda">` : ""}

      <h3>${nombreTienda}</h3>
      <p>📍 ${datos.direccion}</p>
      <p>👤 Atención: ${datos.responsable}</p>
      <p>⏰ Horario: ${datos.horario}</p>
      <p>💳 Pagos: ${datos.pagos}</p>
      <p>🛵 Entrega estimada: ${datos.entrega}</p>
      <p>⭐ ${datos.mensaje}</p>
    </div>
  `;
}

  const productos = productosPorTienda[nombreTienda] || [];

  if (nombreTienda === "Como En Casa") {
  const avisoHorario = document.createElement("div");
  avisoHorario.className = "card aviso-menu";
  avisoHorario.innerHTML = `
    <h3>Menú por horarios</h3>
    <p><strong>Desayunos:</strong> 7:00 a.m. a 10:30 a.m.</p>
    <p><strong>Almuerzos:</strong> 11:00 a.m. a 2:30 p.m.</p>
    <p>Los productos se muestran como muestra inicial. Para pedidos reales se confirma disponibilidad por WhatsApp.</p>
  `;
  listaProductos.appendChild(avisoHorario);
}

  productos.forEach(function (producto) {
    const card = document.createElement("div");
    card.className = "card producto";

    let etiquetaExtra = "";
    if (producto.destacado) {
      etiquetaExtra = `<p class="destacado">🔥 Más vendido</p>`;
    }

    card.innerHTML = `
  <div>
    ${producto.imagen ? `<img src="${producto.imagen}" class="img-producto">` : ""}
    <h3>${producto.nombre}</h3>
    <p>$${formatearNumero(producto.precio)}</p>
    ${producto.descripcion ? `<p class="descripcion-producto">${producto.descripcion}</p>` : ""}
    ${etiquetaExtra}
    <small>Disponible</small>
  </div>
  <button type="button" class="btn" onclick="agregar('${producto.nombre.replace(/'/g, "\\'")}', ${producto.precio})">Agregar</button>
`;

    listaProductos.appendChild(card);
  });

  mostrarPantalla("productos");
}

function agregar(nombre, precio) {
  const productoExistente = carrito.find(function (producto) {
    return producto.nombre === nombre;
  });

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({
      nombre: nombre,
      precio: precio,
      cantidad: 1
    });
  }

  actualizarContadorCarrito();
  mostrarConfirmacion(nombre);
}
function sumarProducto(nombre) {
  const producto = carrito.find(function (item) {
    return item.nombre === nombre;
  });

  if (producto) {
    producto.cantidad += 1;
    actualizarCarrito();
    actualizarContadorCarrito();
  }
}

function restarProducto(nombre) {
  const producto = carrito.find(function (item) {
    return item.nombre === nombre;
  });

  if (!producto) return;

  producto.cantidad -= 1;

  if (producto.cantidad <= 0) {
    carrito = carrito.filter(function (item) {
      return item.nombre !== nombre;
    });
  }

  actualizarCarrito();
  actualizarContadorCarrito();
}


function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
  actualizarContadorCarrito();
}

function irAlCarrito() {
  actualizarCarrito();
  mostrarPantalla("carrito");
}

function actualizarCarrito() {
  const tiendaCarrito = document.getElementById("tienda-carrito");
  const listaCarrito = document.getElementById("lista-carrito");
  const subtotalElemento = document.getElementById("subtotal");
  const totalElemento = document.getElementById("total");
  const domicilioElemento = document.getElementById("domicilio");

  tiendaCarrito.innerHTML = "";
  listaCarrito.innerHTML = "";

  if (tiendaActual) {
    tiendaCarrito.innerHTML = `<p><strong>Tienda:</strong> ${tiendaActual}</p>`;
  }

  if (carrito.length === 0) {
    listaCarrito.innerHTML = "<p>No has agregado productos todavía.</p>";
    subtotalElemento.textContent = "Subtotal: $0";
    domicilioElemento.textContent = "Domicilio: $" + formatearNumero(DOMICILIO);
    totalElemento.textContent = "Total: $" + formatearNumero(DOMICILIO);
    return;
  }

  let subtotal = 0;

  carrito.forEach(function (producto) {
    const totalProducto = producto.precio * producto.cantidad;
    subtotal += totalProducto;

    const item = document.createElement("div");
    item.className = "card item-carrito";

    item.innerHTML = `
      <div>
        <h3>${producto.nombre}</h3>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>Precio unidad: $${formatearNumero(producto.precio)}</p>
        <p>Total producto: $${formatearNumero(totalProducto)}</p>
      </div>
      <div class="acciones-carrito">
        <button type="button" class="btn btn-mini" onclick="restarProducto('${producto.nombre.replace(/'/g, "\\'")}')">-</button>
        <button type="button" class="btn btn-mini" onclick="sumarProducto('${producto.nombre.replace(/'/g, "\\'")}')">+</button>
      </div>
    `;

    listaCarrito.appendChild(item);
  });

  const total = subtotal + DOMICILIO;

  subtotalElemento.textContent = "Subtotal: $" + formatearNumero(subtotal);
  domicilioElemento.textContent = "Domicilio: $" + formatearNumero(DOMICILIO);
  totalElemento.textContent = "Total: $" + formatearNumero(total);
}

function enviarPedido() {
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const direccion = document.getElementById("direccion").value.trim();

  if (!tiendaActual) {
    alert("Debes seleccionar una tienda.");
    return;
  }

  if (carrito.length === 0) {
    alert("Debes agregar al menos un producto.");
    return;
  }

  if (!nombre || !telefono || !direccion) {
    alert("Por favor completa nombre, teléfono y dirección.");
    return;
  }

  let subtotal = 0;
  let mensaje = "Hola, quiero hacer este pedido en Capibara:\n\n";

  mensaje += "Tienda: " + tiendaActual + "\n";

  const datos = tiendasInfo[tiendaActual];

  if (datos) {
    mensaje += "Responsable: " + datos.responsable + "\n";
    mensaje += "Dirección tienda: " + datos.direccion + "\n";
    mensaje += "Tiempo estimado: " + datos.entrega + "\n\n";
  } else {
    mensaje += "\n";
  }

  carrito.forEach(function (producto) {
    const totalProducto = producto.precio * producto.cantidad;
    subtotal += totalProducto;

    mensaje += "- " + producto.nombre + " x" + producto.cantidad + " - $" + formatearNumero(totalProducto) + "\n";
  });

  const total = subtotal + DOMICILIO;

  mensaje += "\nSubtotal: $" + formatearNumero(subtotal);
  mensaje += "\nDomicilio: $" + formatearNumero(DOMICILIO);
  mensaje += "\nTotal: $" + formatearNumero(total);
  mensaje += "\n\nNombre cliente: " + nombre;
  mensaje += "\nTeléfono cliente: " + telefono;
  mensaje += "\nDirección cliente: " + direccion;

  const url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensaje);

  window.open(url, "_blank");
}

function formatearNumero(numero) {
  return numero.toLocaleString("es-CO");
}

function mostrarConfirmacion(nombre) {
  const mensaje = document.createElement("div");
  mensaje.textContent = nombre + " agregado ✔";
  mensaje.className = "toast";

  document.body.appendChild(mensaje);

  setTimeout(() => {
    mensaje.remove();
  }, 2000);
}

function actualizarContadorCarrito() {
  const contador = document.getElementById("contador-carrito");

  if (!contador) return;

  const totalUnidades = carrito.reduce(function (acumulado, producto) {
    return acumulado + producto.cantidad;
  }, 0);

  contador.textContent = totalUnidades;
}
actualizarContadorCarrito();