let listo = $(document).ready(function () {
    console.log("Este es el ready");
})


let texto1 = $('#texto1').append('Este titulo esta manipulado con DOM y jQuery</br>')
let texto2 = $('#texto2').append('<strong>Deberias revisar nuestras Politicas sobre DOM  y jQuery</strog>')
let imagen = $('#imagen').append('<img src="data:image/png;base64,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" alt="coder logo">')
 

let enlace = $('.ubicar');
let longitud = $('.longitud');
let latitud = $('.latitud');
let mensaje = $('.mensaje');


if (navigator.geolocation) {
    //Si entra aquí, es que el navegador lo soporta
  } else {
    alert('Lo sentimos, tu navegador no soporta geolocation');
  }


  if (navigator.geolocation) {
    enlace.click(function(e) {
      e.preventDefault();
      mensaje.html("Cargando...");
      navigator.geolocation.getCurrentPosition(insertarUbicacion, errorUbicacion);
    });
  } else {
    alert('Lo sentimos, tu navegador no soporta geolocation');
  }




  function insertarUbicacion(posicion) {
    // Obtenemos las propiedades de geolocation y las guardamos en las variables
    let glatitud = posicion.coords.latitude;
    let glongitud  = posicion.coords.longitude;
   
    // Insertar el mapa de google en un iframe
    $('#mapa').html('<iframe width="400" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.co.uk/?ie=UTF8&amp;ll='+glatitud+','+glongitud+'&amp;spn=0.332359,0.617294&amp;t=m&amp;z=11&amp;output=embed"></iframe>');
   
    longitud.html('Longitud: '+glongitud);
    latitud.html('Latitud: '+glatitud);
   
    //Hacemos una llamada ajax a la API de Google Maps para obtener el mapa de la ubicación
    jQuery.ajax({
        url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+glatitud+','+glongitud+'&sensor=true',
        type: 'POST',
        dataType: 'json',
        error: function(xhr, textStatus, errorThrown) {
            errorUbicacion();
         }
     });
           
  }
   
  function errorUbicacion() {
     alert('No pudimos encontrar tu ubicación exacta');
  }