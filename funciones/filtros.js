function buscarProductos() {
  const buscador = document.getElementById("buscadorProductos");
  if (!buscador) return;

  const texto = buscador.value.toLowerCase().trim();
  const productos = document.querySelectorAll(".producto-card");

  productos.forEach(function(producto) {
    const contenido = producto.innerText.toLowerCase();

    if (contenido.includes(texto)) {
      producto.style.display = "";
    } else {
      producto.style.display = "none";
    }
  });
}

function filtrarCategoria(categoria) {
  const productos = document.querySelectorAll(".producto-card");

  productos.forEach(function(producto) {
    const categoriaProducto = producto.getAttribute("data-categoria");

    if (categoria === "todos" || categoriaProducto === categoria) {
      producto.style.display = "";
    } else {
      producto.style.display = "none";
    }
  });
}
function mostrarPasillos() {
  const menu = document.getElementById("menuPasillos");
  if (menu) menu.classList.remove("oculto");
}

function cerrarPasillos() {
  const menu = document.getElementById("menuPasillos");
  if (menu) menu.classList.add("oculto");
}


function cargarCategoriasTienda() {
  const contenedorSuperior = document.getElementById("categoriasTienda");
  const contenedorMenu = document.getElementById("opcionesPasillos");
  const tituloMenu = document.getElementById("tituloMenuCategorias");

  if (!contenedorSuperior || !contenedorMenu) return;

  const categorias = categoriasPorTienda[tiendaActual] || [
    { nombre: "Todos", valor: "todos", icono: "🛒" }
  ];

  contenedorSuperior.innerHTML = "";
  contenedorMenu.innerHTML = "";

  if (tituloMenu) {
    tituloMenu.textContent = "Categorías de " + tiendaActual;
  }

  categorias.forEach(function(categoria) {
    contenedorSuperior.innerHTML += `
      <button onclick="filtrarCategoria('${categoria.valor}')">
        ${categoria.icono} ${categoria.nombre}
      </button>
    `;

    contenedorMenu.innerHTML += `
      <button onclick="filtrarCategoria('${categoria.valor}'); cerrarPasillos()">
        ${categoria.icono} ${categoria.nombre}
      </button>
    `;
  });
}