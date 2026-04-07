const DOMICILIO = 5000;
let carrito = [];
let tiendaActual = "";

const tiendas = {
  "Droguería San Juan": [
    { nombre: "Acetaminofén", precio: 2000 },
    { nombre: "Vitamina C", precio: 5000 },
    { nombre: "Suero oral", precio: 3000 }
  ],
  "Supermercado Sur": [
    { nombre: "Arroz 1 kg", precio: 4000 },
    { nombre: "Aceite 1 L", precio: 12000 },
    { nombre: "Huevos x12", precio: 9000 }
  ]
};

function mostrarPantalla(idPantalla) {
  const pantallas = document.querySelectorAll(".pantalla");

  pantallas.forEach(function (pantalla) {
    pantalla.classList.remove("activa");
  });

  const pantallaDestino = document.getElementById(idPantalla);

  if (pantallaDestino) {
    pantallaDestino.classList.add("activa");
  }
}

function abrirTienda(nombreTienda) {
  tiendaActual = nombreTienda;
  carrito = [];

  document.getElementById("titulo-tienda").textContent = nombreTienda;

  const infoTienda = document.getElementById("info-tienda");
  const listaProductos = document.getElementById("lista-productos");

  infoTienda.innerHTML = "";
  listaProductos.innerHTML = "";

  if (nombreTienda === "Droguería San Juan") {
    infoTienda.innerHTML = `
      <div class="card tienda-destacada">
        <h3>Droguería San Juan</h3>
        <p>📍 Calle 14 N 15 76 - Centro</p>
        <p>⏰ Horario: 8 AM a 8 PM</p>
        <p>💳 Pagos: Efectivo, Nequi, Daviplata</p>
        <p>🛵 Entrega estimada: 20 a 30 min</p>
        <p>⭐ Medicamentos disponibles con entrega rápida</p>
      </div>
    `;
  }

  if (nombreTienda === "Supermercado Sur") {
    infoTienda.innerHTML = `
      <div class="card tienda-destacada">
        <h3>Supermercado Sur</h3>
        <p>🛒 Productos básicos para tu hogar</p>
        <p>📍 Atención local en Tame</p>
      </div>
    `;
  }

  tiendas[nombreTienda].forEach(function (producto) {
    const card = document.createElement("div");
    card.className = "card producto";

    card.innerHTML = `
      <div>
        <h3>${producto.nombre}</h3>
        <p>$${formatearNumero(producto.precio)}</p>
        <small>Disponible</small>
      </div>
      <button class="btn" onclick="agregar('${producto.nombre}', ${producto.precio})">Agregar</button>
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

  alert(nombre + " agregado al carrito");
}

function sumarProducto(nombre) {
  const producto = carrito.find(function (item) {
    return item.nombre === nombre;
  });

  if (producto) {
    producto.cantidad += 1;
    actualizarCarrito();
  }
}

function restarProducto(nombre) {
  const producto = carrito.find(function (item) {
    return item.nombre === nombre;
  });

  if (!producto) {
    return;
  }

  producto.cantidad -= 1;

  if (producto.cantidad <= 0) {
    carrito = carrito.filter(function (item) {
      return item.nombre !== nombre;
    });
  }

  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
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
        <button class="btn btn-mini" onclick="restarProducto('${producto.nombre}')">-</button>
        <button class="btn btn-mini" onclick="sumarProducto('${producto.nombre}')">+</button>
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

  if (tiendaActual === "Droguería San Juan") {
    mensaje += "Responsable: Fernando Caballero\n";
    mensaje += "Dirección tienda: Calle 14 N 15 760 - Centro\n";
    mensaje += "Tiempo estimado: 10 a 20 min\n\n";
  } else {
    mensaje += "\n";
  }

  carrito.forEach(function (producto) {
    const totalProducto = producto.precio * producto.cantidad;
    subtotal += totalProducto;

    mensaje += "- " + producto.nombre +
      " x" + producto.cantidad +
      " - $" + formatearNumero(totalProducto) + "\n";
  });

  const total = subtotal + DOMICILIO;

  mensaje += "\nSubtotal: $" + formatearNumero(subtotal);
  mensaje += "\nDomicilio: $" + formatearNumero(DOMICILIO);
  mensaje += "\nTotal: $" + formatearNumero(total);
  mensaje += "\n\nNombre cliente: " + nombre;
  mensaje += "\nTeléfono cliente: " + telefono;
  mensaje += "\nDirección cliente: " + direccion;

  const numeroWhatsApp = "573115666476";
  const url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensaje);

  window.open(url, "_blank");
}

function formatearNumero(numero) {
  return numero.toLocaleString("es-CO");
}