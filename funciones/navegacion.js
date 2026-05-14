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