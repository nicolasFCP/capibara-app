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
  "Supermercado Sur": {
    direccion: "Tame",
    responsable: "Pendiente",
    horario: "Horario por definir",
    pagos: "Efectivo",
    entrega: "Según zona",
    mensaje: "Productos básicos para tu hogar"
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

  "Supermercado Sur": [
    { nombre: "Arroz 1 kg", precio: 4000, destacado: false },
    { nombre: "Aceite 1 L", precio: 12000, destacado: false },
    { nombre: "Huevos x12", precio: 9000, destacado: false }
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
    <div class="card tienda-destacada">

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

  productos.forEach(function (producto) {
    const card = document.createElement("div");
    card.className = "card producto";

    let etiquetaExtra = "";
    if (producto.destacado) {
      etiquetaExtra = `<p style="color: green; font-weight: bold;">🔥 Producto destacado</p>`;
    }

    card.innerHTML = `
      <div>
        <h3>${producto.nombre}</h3>
        <p>$${formatearNumero(producto.precio)}</p>
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