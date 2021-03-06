let todosLosProductos= [];
let galeria = document.getElementById('galeria')
let carrito = {};



const addCarrito = e =>{
    if (e.target.classList.contains('btn-success')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto =>{
    const producto = {
        id: objeto.querySelector('.btn-success').dataset.id,
        producto: objeto.querySelector('h3').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = {...producto}
}


class Molde {
    constructor(id, producto, precio, cantidad, src, alt){
        this.id=id
        this.producto= producto 
        this.precio = precio
        this.cantidad = cantidad
        this.src = src
        this.alt = alt
    }
    get obtenerId (){
        return this.id;
    }
    set cambiarId (nuevoId){
        this.id = nuevoId
    }
    get obtenerproducto (){
        return this.producto;
    }
    set cambiarProducto(nuevoProducto){
        this.producto = nuevoProducto
    }
    get obtenerPrecio (){
        return this.precio;
    }
    set cambiarPrecio (nuevoPrecio){
        this.precio = nuevoPrecio
    }
    get obtenerCantidad (){
        return this.cantidad
    }
    set cambiarCantidad (nuevoCantidad){
        this.precio = nuevoCantidad
    }
    get obtenerSrc (){
        return this.src
    }
    set cambiarSrc (nuevoSrc){
        this.src = nuevoSrc
    }
    get obtenerAlt (){
        return this.alt
    }
    set cambiarAlt (nuevoAlt){
        this.alt = nuevoAlt
    }
}

let producto0 = new Molde(0,"Lapicera", 12, 50,"https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg",'Gatitos, no se puede decir más',);
let producto1 = new Molde(1,"Liquid Papper", 25, 50,'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg','Gatitos, no se puede decir más',);
let producto2 = new Molde(2,"Lapiz", 8, 50,'https://www.zooplus.es/magazine/wp-content/uploads/2018/04/fotolia_169457098.jpg','Gatitos, no se puede decir más',);
let producto3 = new Molde(3,"Goma de borrar", 2, 50,'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg','Gatitos, no se puede decir más',);
let producto4 = new Molde(4,"Cuaderno A4", 50, 50,'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg','Gatitos, no se puede decir más',);
    todosLosProductos.push(producto0,producto1,producto2,producto3,producto4)


function renderizarGaleria() {
  let html = '';
  
  
  todosLosProductos.forEach(function(prod){
    html += `
      <div class="galeria-item">
      <img src="${prod.src}" alt="${prod.alt}" width="200px"/>
        <h3>${prod.producto}</h3>
        <span>El valor es de: $<p>${prod.precio}</p></span>
        <button type="button" class="btn-success" data-id="${prod.id}" >Agregar al Carrito!!!</button>
      </div>
    `;
    

  });
  
  $('#galeria').html(html);
}





$(function() {
  renderizarGaleria();
});


galeria.addEventListener('click', e => {
    addCarrito(e)
    console.log(carrito);
    
})

let booleano = false;

let boton1 = document.getElementById('botonFinal')

let modal = document.querySelector('#modal')

function clickeable() {
    
    if (booleano === false) {
        let jsonCarrito = JSON.stringify(carrito)
        boton1.innerHTML= 'Su carrito es:'
        boton2.innerHTML = `<button type="button" class="btn btn-danger" id="boton-oculto">Cerrar Carrito</button>`
        boton3.innerHTML = `<button type="button" class="btn btn-warning" id="vaciar">Vaciar Carrito</button>`
        if (carrito == {}) {
            modal.innerHTML =(`Todavia no tienes productos en el carrito`)            
        }
        booleano = true;
    }else if (booleano === true) {
    boton3.innerHTML= ''
    boton2.innerHTML = ''
    boton1.innerHTML = '<button type="button" class="btn btn-primary" id="boton">Ver carrito!!!</button>';
    modal.innerHTML =(``)
    booleano = false;
    }
}


let boton3 = document.getElementById('vaciar')

let boton2 = document.getElementById('div-boton-oculto')




boton1.addEventListener('click', clickeable);
boton2.addEventListener('click', clickeable);
boton3.addEventListener('click', (carrito)=> {
    carrito = {}
    return carrito
});

