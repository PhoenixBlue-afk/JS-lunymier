let producto = prompt('Introduzca el nombre del producto');
let precio = parseInt(prompt('Introduzca el valor del producto ingresado anteriormente'));
let stock = parseInt(prompt('Introduzca la cantidad de stock que le quede'))




if (stock >= 1 ) {
    stock -=1;
    alert (stock)
    function iva(precio) {
    let valor = precio * 1.21;
    alert ('El valor final de su producto es :$'+ valor);    
}
iva(precio);
}else if (stock <= 0) {
    alert('No podemos venderle dicho articulo, nuestro stock es de: '+ stock);

}else{
    alert('Faltan ingresar datos, por favor completelos')
}

