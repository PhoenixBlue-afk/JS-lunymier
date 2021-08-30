
/*let lona = {
    tipo: "Lona",
    peso : 550,
    valor : 1100,
    tramaje: "Cerrado"
}
let microPerforado = {
    tipo: "Micro Perforado",
    peso : 350,
    valor : 1500,
    tramaje: "Entre Abierto"
}
let rafia = {
    tipo: "Rafia",
    peso : 200,
    valor : 700,
    tramaje: "Cerrado"
}
let mediaSombra = {
    tipo: "Media Sombra",
    peso : 250,
    valor : 800,
    tramaje: "Entre Abierto"
}
let pvc = {
    tipo: "PVC Cristal",
    peso : 400,
    valor : 1200,
    tramaje: "Cerrado"
}*/



function Telas() {
    let telas = document.getElementById("telas");
    let tela = telas.options[telas.selectedIndex].text;
    document.getElementById('x').innerText = `Ud. ha seleccionado : ${tela}.`
}
let valor;
let ancho = document.getElementById ('ancho');
let Re = document.getElementById ('Re');
ancho.addEventListener ('change', Medida1);


function Medida1(e, ancho) {
     R.textContent = e.target.value + " metros de ancho"
    ancho =R.target.value;
    return ancho;
}
let largo = document.getElementById ('largo');
let elementoCaptado = document.getElementById ('Re');
largo.addEventListener ('change', Medida2);


function Medida2(f,largo) { 
    j.textContent = f.target.value + " metros de largo"
    largo = j.target.value;
    return largo;
}
console.log (Medida2());

console.log (Medida1());

//Hasta aca va todo bien//

let metrosCuadrados;
let total;

let boton = document.getElementById("submit", calcu());

function calcu(ancho, largo, metrosCuadrados,total) {
    metrosCuadrados = ancho * largo;
    total = valor*metrosCuadrados;
    console.log(total)// total;
}



let ult = "El valor por su lona es de: " + total;
document.getElementById("respuesta").innerText = ult;


switch (telas) {
    case "Lona":
        document.querySelector("#resp").innerHTML = ult;
        break;
    case "Rafia":
        
        break;
    case "PVC Cristal":
        
        break;
    case "Media Sombra":
        
        break;
    default:
        document.querySelector("#resp").innerHTML = "Por favor seleccione un tipo de tela";
        break;
}
 let btn1 = document.getElementById("btn1")