const DOMICILIO = 5000;
const numeroWhatsApp = "573115666476";

let carrito = [];
let tiendaActual = "";

const zonasPorTienda = {
  "Droguería Santa Ana": {
    "Centro": 5000,
    "Sucre": 5000,
    "San Antonio": 6000,
    "20 de Julio": 6000,
    "San Luis": 7000,
    "El Porvenir": 7000,
    "Otra zona": "confirmar"
  },

  "Como En Casa": {
    "Centro": 5000,
    "Sucre": 5000,
    "San Antonio": 6000,
    "20 de Julio": 6000,
    "San Luis": 7000,
    "El Porvenir": 7000,
    "Otra zona": "confirmar"
  },

  "Daza Cacao Premium": {
    "Centro": 5000,
    "Sucre": 5000,
    "San Antonio": 6000,
    "20 de Julio": 6000,
    "San Luis": 7000,
    "El Porvenir": 7000,
    "Otra zona": "confirmar"
  },

  "La Brasa Araucana": {
    "Centro": 5000,
    "Sucre": 5000,
    "San Antonio": 6000,
    "20 de Julio": 6000,
    "San Luis": 7000,
    "El Porvenir": 7000,
    "Otra zona": "confirmar"
  },

  "APIESTEBAN": {
    "Centro": 5000,
    "Sucre": 5000,
    "San Antonio": 6000,
    "20 de Julio": 6000,
    "San Luis": 7000,
    "El Porvenir": 7000,
    "Otra zona": "confirmar"
  },

  "Multicolores la casa de las pinturas": {
    "Centro": 5000,
    "Sucre": 5000,
    "San Antonio": 6000,
    "20 de Julio": 6000,
    "San Luis": 7000,
    "El Porvenir": 7000,
    "Otra zona": "confirmar"
  },

  "Supermercado Sur": {
    "Centro": 7000,
    "Sucre": 7000,
    "San Antonio": 6000,
    "20 de Julio": 6000,
    "San Luis": 5000,
    "El Porvenir": 5000,
    "Otra zona": "confirmar"
  }
};

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
    direccion: "cl 14 #41-02",
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

if (idPantalla === "pedido") {
  cargarZonasEntrega();
}
  if (idPantalla === "tiendas") {
  mostrarCategoria("Restaurantes", false);
}
}

function mostrarCategoria(nombreCategoria, hacerScroll = true) {
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
  if (hacerScroll) {
  setTimeout(function () {
    const tituloCategoria = document.getElementById("titulo-categoria");

    if (tituloCategoria) {
      tituloCategoria.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, 100);
}
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
    domicilioElemento.textContent = "Domicilio: se calcula según zona";
    totalElemento.textContent = "Total productos: $0";
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

  subtotalElemento.textContent = "Subtotal: $" + formatearNumero(subtotal);
  domicilioElemento.textContent = "Domicilio: se calcula según zona";
  totalElemento.textContent = "Total productos: $" + formatearNumero(subtotal);
}

function enviarPedido() {
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const zona = document.getElementById("zona").value;
  const costoDomicilio = obtenerCostoDomicilio();

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

  if (!zona) {
    alert("Por favor selecciona tu barrio o zona.");
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

  let total = subtotal;

  mensaje += "\nSubtotal: $" + formatearNumero(subtotal);
  mensaje += "\nZona: " + zona;

  if (costoDomicilio === "confirmar") {
    mensaje += "\nDomicilio: por confirmar según dirección";
    mensaje += "\nTotal productos: $" + formatearNumero(subtotal);
  } else {
    total = subtotal + costoDomicilio;
    mensaje += "\nDomicilio: $" + formatearNumero(costoDomicilio);
    mensaje += "\nTotal: $" + formatearNumero(total);
  }

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

function cargarZonasEntrega() {
  const selectZona = document.getElementById("zona");
  const resumenDomicilio = document.getElementById("resumen-domicilio");

  if (!selectZona) return;

  selectZona.innerHTML = `<option value="">Selecciona tu barrio o zona</option>`;

  const zonas = zonasPorTienda[tiendaActual] || {};

  Object.keys(zonas).forEach(function (nombreZona) {
    const option = document.createElement("option");
    option.value = nombreZona;

    const valor = zonas[nombreZona];

    option.textContent = nombreZona;

    selectZona.appendChild(option);
  });

  if (resumenDomicilio) {
    resumenDomicilio.textContent = "Selecciona tu barrio o zona para ver el resumen.";
  }
}

function obtenerCostoDomicilio() {
  const selectZona = document.getElementById("zona");

  if (!selectZona || !selectZona.value) {
    return null;
  }

  const zonas = zonasPorTienda[tiendaActual] || {};
  return zonas[selectZona.value];
}

function actualizarResumenPedido() {
  const resumenDomicilio = document.getElementById("resumen-domicilio");
  const costoDomicilio = obtenerCostoDomicilio();

  if (!resumenDomicilio) return;

  if (costoDomicilio === null) {
    resumenDomicilio.innerHTML = "Selecciona tu barrio o zona para ver el resumen.";
    return;
  }

  let subtotal = 0;

  carrito.forEach(function (producto) {
    subtotal += producto.precio * producto.cantidad;
  });

  if (costoDomicilio === "confirmar") {
    resumenDomicilio.innerHTML = `
      <strong>Resumen del pedido</strong><br>
      Productos: $${formatearNumero(subtotal)}<br>
      Domicilio: por confirmar según dirección<br>
      <strong>Total: por confirmar</strong>
    `;
    return;
  }

  const total = subtotal + costoDomicilio;

  resumenDomicilio.innerHTML = `
    <strong>Resumen del pedido</strong><br>
    Productos: $${formatearNumero(subtotal)}<br>
    Domicilio: $${formatearNumero(costoDomicilio)}<br>
    <strong>Total: $${formatearNumero(total)}</strong>
  `;
}