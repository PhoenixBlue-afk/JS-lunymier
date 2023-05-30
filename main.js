let stockProductos = [];

const obtenerProductos = async () => {
  const resp = await fetch("./stock.json");
  const data = await resp.json();

  stockProductos = data;
  mostrarProductos(stockProductos);
};

obtenerProductos();

const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("carrito-contenedor");
const selectFiltro = document.getElementById("medidas");
const selectPrecios = document.getElementById("precioTotal");

const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");

let carrito = [];

function mostrarProductos(array) {
  contenedorProductos.innerHTML = "";

  array.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `  
                      <img src=${producto.pictureUrl} alt="">
                      <h3>${producto.title}</h3>
                      <p>${producto.description}</p>
                      <p>Categoria: ${producto.category}</p>
                      <p class="precioProducto">Precio: $${producto.price}</p>
                      <button onclick=agregarAlCarrito(${producto.id}) class="boton-agregar">Agregar</button>  
        `;

    contenedorProductos.appendChild(div);
  });
}

function agregarAlCarrito(itemId) {
  let itemEnCarrito = carrito.find((el) => el.id == itemId);

  if (itemEnCarrito) {
    itemEnCarrito.cantidad += 1;
  } else {
    let { id, title, price } = stockProductos.find((el) => el.id == itemId);
    carrito.push({ id: id, nombre: title, precio: price, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));


  actualizarCarrito();
}

function eliminarCarrito () {
  carrito = [];
  actualizarCarrito();
}


function eliminarProducto(id) {
  let productoAEliminar = carrito.find((el) => el.id == id);

  productoAEliminar.cantidad--;

  if (productoAEliminar.cantidad == 0) {
    let indice = carrito.indexOf(productoAEliminar);
    carrito.splice(indice, 1);
  }

  
  actualizarCarrito();
}

function actualizarCarrito() {
  contenedorCarrito.innerHTML = "";

  carrito.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML = `
    <p>${producto.nombre}</p>
    <p>Precio: $${producto.precio * producto.cantidad}</p>
    <p>Cantidad: ${producto.cantidad}</p>
    <button onclick="eliminarProducto(${producto.id})" class="boton-eliminar">Eliminar<i class="fas fa-trash-alt"></i></button>
    `;

    contenedorCarrito.appendChild(div);
  });
  
  contadorCarrito.innerText = carrito.reduce((acc, el) => acc + el.cantidad,0);;

  
  precioTotal.innerText = carrito.reduce(
    (acc, el) => acc + el.precio * el.cantidad,
    0
  );
}
const finalizarCompra = async () => {
    const productosMP = carrito.map((prod) => {
      return {
        title: prod.nombre,
        description: "",
        picture_url: "",
        category_id: prod.id,
        quantity: prod.cantidad,
        currency_id: "ARS",
        unit_price: prod.precio,
      };
    });
  
    const resp = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer TEST-7197555087002058-092801-36a609c7987174015e46543bc1af8b52-824547538",
      },
      body: JSON.stringify({
        items: productosMP,
        back_urls: {
          success: "http://127.0.0.1:5501/index.html",
          failure: "",
        },
      }),
    });
  
    const data = await resp.json();
  
    window.location.replace(data.init_point);
  };
  