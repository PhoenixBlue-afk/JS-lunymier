let arroz = {
    id : 1,
    nombre: "arroz",
    precio: 100
}


class Super{
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




let producto1 = new Super (2, "Pan", 200)
let producto2 = new Super (3, "Atun", 500)
let producto3 = new Super (4, "Sopa", 50)
let producto4 = new Super (5, "Agua", 150)
console.log(arroz);
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);