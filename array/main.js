class Molde{
    constructor(id, nombre, precio){
        this.id=id
        this.nombre= nombre 
        this.precio = precio
    }
    get obtenerId (){
        return this.id;
    }
    set cambiarId (nuevoId){
        this.id = nuevoId
    }
    get obtenerNombre (){
        return this.nombre;
    }
    set cambiarId (nuevoNombre){
        this.nombre = nuevoNombre
    }
    get obtenerPrecio (){
        return this.precio;
    }
    set cambiarPrecio (nuevoPrecio){
        this.precio = nuevoPrecio
    }
}

let  carrito = []


let producto4 = new Molde (5, "Lapiceras", 150)
let producto2 = new Molde (3, "Libros", 500)
let producto3 = new Molde (4, "Lapiz", 50)
let producto1 = new Molde (2, "Saca puntas", 200)
carrito.push (producto1,producto2,producto3, producto4)

let carrito2 = carrito.slice().sort ((a,b)=> a.precio-b.precio)

console.log (carrito2)





let variable = [{
    "id":  10,
    "nombre" : "Cuaderno",
    "precio" : 250,

    "id":  11,
    "nombre" : "Goma de borrar",
    "precio" : 130,

    "id":  12,
    "nombre" : "Fibron",
    "precio" : 600,

    "id":  13,
    "nombre" : "Hojas",
    "precio" : 10
}]




let arrayNuevo = ["Jamon","Mermelada", "Vodka", "Fernet", "Jugo", "Agua"]
arrayNuevo.sort();
console.log(arrayNuevo);
  

for (const nombre of carrito) {
    console.log(carrito.id)
}