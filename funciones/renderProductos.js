function abrirTienda(nombreTienda) {
  tiendaActual = nombreTienda;
  cargarCategoriasTienda();
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
    card.className = "card producto producto-card";
    card.setAttribute("data-categoria", producto.categoria || "mercado");

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