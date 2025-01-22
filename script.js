let boton = document.getElementById('Btn-conversion');
    
boton.addEventListener('click', function() {
    let celcius =parseFloat(document.getElementById("celsius").value);
    let kelvin = 0;
    let Fahrenheit ;
    if ( isNaN(celcius)){
        console.log("Verifica el dato ingresado ");
        alert ("Verifica el dato ingresado");
      }
     kelvin = celcius + 273.15;
     Fahrenheit = (1.8*celcius) + 32;
    
    document.getElementById("kelvin").value = kelvin;
    document.getElementById("Fahrenheit").value = Fahrenheit;
  
});