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
