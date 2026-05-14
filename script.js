const DOMICILIO = 5000;
const numeroWhatsApp = "573115666476";

let carrito = [];
let tiendaActual = "";



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




