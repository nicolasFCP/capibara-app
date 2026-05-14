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
function actualizarContadorCarrito() {
  const contador = document.getElementById("contador-carrito");

  if (!contador) return;

  const totalUnidades = carrito.reduce(function (acumulado, producto) {
    return acumulado + producto.cantidad;
  }, 0);

  contador.textContent = totalUnidades;
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