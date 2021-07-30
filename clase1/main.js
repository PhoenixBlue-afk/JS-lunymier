let numero = prompt("Ingrese un numero mayor a 0 y menor a 1000");

if(numero === ""){
    alert("Por favor ingrese un numero")
}else if ((numero <= -1) || (numero >= 1001)) {
    alert ("Numero incorrecto/ Numero fuera de rango");
}else if ((numero >= 0) && (numero <= 1000)){
    alert("Es un numero correcto");
}else {
    alert ("Caracter no reconocido, por favor ingrese un numero")
}