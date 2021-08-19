//let nombre = prompt("Por favor ingrese su nombre completo");
//nombre = nombre.toUpperCase();
//let edad =prompt("Ingrese su edad por favor");
//
//edad = parseInt(edad);
//console.log(nombre);
//
//console.log(edad);
//
//
let todosLosProductos= [];


class Molde {
    constructor(id, producto, precio){
        this.id=id
        this.producto= producto 
        this.precio = precio
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
}

let producto0 = new Molde(0,"Lapicera", 12);
let producto1 = new Molde(1,"Liquid Papper", 25);
let producto2 = new Molde(2,"Lapiz", 8);
let producto3 = new Molde(3,"Goma de borrar", 2);
let producto4 = new Molde(4,"Cuaderno A4", 50);

todosLosProductos.push(producto0,producto1,producto2,producto3,producto4)
console.log(todosLosProductos);


//if (edad>=18) {
    //alert ("muchas gracias por verificar su edad "+ nombre)
    //alert("Puede continuar en nuestro sitio web");
    //alert ("Nuestros productos son: 0 = Lapiceras, 1 = Liquid Papper, 2 = Lapiz")
    //alert ("3 = Goma de borrar, 4 = Cuaderno A4")
    let eleccion= prompt("seleccione que producto le gustaria comprar")
    parseInt(eleccion);
    console.log(eleccion);
    if (eleccion < 0 || eleccion > 4) {
        alert ("Seleccione un articulo valido")
        let deNuevo = prompt("seleccione que producto le gustaria comprar")
        parseInt(deNuevo)
        if (deNuevo == 0) {
            alert("Su valor es " + (Math.round(producto0.precio*=1.21)))
        }else if (deNuevo == 1) {
            alert("Su valor es " + (Math.round(producto1.precio*=1.21)))
        }else if (deNuevo == 2) {
            alert("Su valor es " + (Math.round(producto2.precio*=1.21)))
        }else if (deNuevo == 3) {
            alert("Su valor es " + (Math.round(producto3.precio*=1.21)))
        }else if (deNuevo == 4) {
            alert("Su valor es " + (Math.round(producto4.precio*=1.21)))
        }else{
            alert("Disculpe no le entendi")
        }
    }else if (eleccion == 0) {
        alert("Su valor es " + (Math.round(producto0.precio*=1.21)))
    }else if (eleccion == 1) {
        alert("Su valor es " + (Math.round(producto1.precio*=1.21)))
    }else if (eleccion == 2) {
        alert("Su valor es " + (Math.round(producto2.precio*=1.21)))
    }else if (eleccion == 3) {
        alert("Su valor es " + (Math.round(producto3.precio*=1.21)))
    }else if (eleccion == 4) {
        alert("Su valor es " + (Math.round(producto4.precio*=1.21)))
    }else{
        alert("Disculpe no le entendi")
//    }
//
//}else {
//    alert("Es necesario que sea mayor de edad para ingresar en nuestro sitio web")
//
//    
}
