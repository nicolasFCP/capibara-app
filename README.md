# Capibara App

Capibara App es una aplicación web de domicilios para Tame, Arauca.

Permite mostrar tiendas locales, productos, categorías, carrito de compra y enviar pedidos por WhatsApp.

## Estructura del proyecto

- `index.html`: estructura principal de la app.
- `style.css`: estilos visuales.
- `script.js`: configuración general inicial.
- `datos/`: información de tiendas, zonas, categorías y productos.
- `datos/productos/`: productos separados por cada tienda.
- `funciones/`: funciones de carrito, filtros, navegación y renderizado.
- `img/`: imágenes de productos, tiendas y logos.

## Cómo agregar una tienda nueva

1. Crear un archivo nuevo en `datos/productos/`.
2. Agregar los productos de esa tienda.
3. Registrar la tienda en `datos/tiendas.js`.
4. Agregarla a una categoría en `datos/categoriasTiendas.js`.
5. Agregar sus categorías internas en `datos/categorias.js`.
6. Agregar sus zonas de domicilio en `datos/zonas.js`.
7. Cargar el archivo nuevo en `index.html`.

## Cómo agregar un producto

Ejemplo:

```js
{
  nombre: "Coca-Cola 1.5L",
  precio: 7500,
  categoria: "bebidas",
  destacado: true,
  descripcion: "Gaseosa familiar para acompañar comidas.",
  imagen: "img/tienda/cocacola.png"
}

Reglas importantes
Usar nombres de archivos en minúscula.
No usar espacios ni tildes en nombres de archivos.
Separar productos por tienda.
No meter datos grandes dentro de script.js.
Probar la app antes de subir cambios a GitHub.