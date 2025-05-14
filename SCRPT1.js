let varGlobal1="texto de variable global";


function FCambioColor(){
let vartemporal="texto temporal";
let vtexto1=document.getElementById("ejmDOM1");
vtexto1.textContent= "texto cambiado por funcion FCambioColor";
vtexto1.style.color= "RED";
vtexto1.insertAdjacentHTML("beforeend",
    " <br>este texto es adicional");
vtexto1.style.backgroundColor="green";

vtexto1.insertAdjacentHTML("beforeend",varGlobal1 ) ;
//la variable global se puede utlizar dentro de cualquier funcion 
}
vtexto1= "texto fuera de funcion";//vtexto1  no se la variable de la funcion
console.log(vtexto1);
//console.log(vartemporal);// vartemporal no esta definido afuera de funcion

function FCambioclase1() {
   let vtexto2=document.getElementsByClassName("classDOM1");
    vtexto2[1].innerHTML="elemento [1]del arreglo de la clase classDOM1";
   console.log("tamaño de array =", vtexto2.length);
 //se coloca el indice 1 por ser el 2do eleememnto de la clase classOM1 de la pag web
}

function FCambiotag1(){
let vtexto3=document.getElementsByClassName("h2");
vtexto3[21].innerHTML="elemento h2 cambio por tagDOM1"
//se le coloca el indice 6 por ser 7mo eleememnto h2 de la pag web index.html

}
function FUsoFor1()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  var vTextoTotal="";
  // como length=4 --> ira desde 0 hasta 3
  for(let i=0 ; i< vTextoClass.length ; i++ )
  {
    vTextoClass[i].style.border ="2px solid red" ;
    vTextoTotal=vTextoTotal + vTextoClass[i].innerText+'-';

  } // fin de for
  var nuevoH1 =document.createElement("h1");
  var texto = document.createTextNode(vTextoTotal);
  nuevoH1.appendChild(texto);
  vTextoClass[3].appendChild(nuevoH1);
  
}  // fin de function

function FEliminarConcat()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  let rpta =prompt("Estas seguro de eliminar el texto concatenado?(S/N)",'');
  if (rpta=="S" || rpta=="s")  //  doble || significa o
    { vTextoClass[3].remove();  // eliminar la class de posicion [3]
      alert("CONCATENCION ELMINADA");
    }  
  else
    { if(rpta=="N" || rpta=="n")
      { alert("NO SE elimnará");
      }
      else
      { alert("OPCION INCORRECTA-INgresa nuevamente");
      }
    }
  //removeChild funciona cuando un nodo(class, id, etx) esta dentro de otro
}

function FCapturarNombre(){

    const vTexto1 = document.getElementById("nombre");
    const vTexto2 = document.querySelectorAll("input.datospersonales");
    const vTexto3 = document.getElementById("clave");
  
   // usar input para clases relacioandas a cajas de texto, etc
    vTexto1.style.color="red";
    
    var valor1 =vTexto1.value; // value obtiene el contenido de la caja de texto nombre
    var valor2 =""; //tipo string 
    vTexto3.value=valor1; //asigna el nombre a la clave
   
  
    //foreach recorre todo el contenido del array de la clase datosPersonales
    vTexto2.forEach(input => {
        valor2 =valor2 +  ${input.name}: ${input.value}: ${input.id}      \n;  // alt+96 
      input.style.border="2px solid orange";
      //para comillas tipotexto permiten colocar variables del form y convertirlas a texto mediante $
      });
    vTexto2[1].style.backgroundColor="green";
  document.getElementById('observacion').value = valor2;
  console.log('El valor del nombre es:', valor1);

}
function FValidarCiclo(){
  //var varciclo =document.getElementById("Segundo");
  const varciclo =document.getElementsByName("ciclo");

  for (let i = 0; i < varciclo.length; i++) {
      if (varciclo[i].checked==true) {
          //alert("Seleccionaste: " varciclo[i].value);
          document.getElementById('observacion').value = varciclo[i].value;
          return; // Detener el bucle una vez que se encuentre el seleccionado
      }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const radio = document.querySelectorAll('input[name="ciclo"]');

  radio.forEach(function(radio){
      radio.addEventListener('change', function(event){
          console.log("ciclo seleccionado:", event.target.value);
          const cantidad = event.target.value;
          //event es el evento, target es el elemento radio, value es su valor del radio 
          // radio es el elemento radio
          //
          document.getElementById('Observacion').value = cantidad;
      });
  }
);
  
  });

  function FVerificacion(){
    let nombre1= prompt("Ingresa tu primer nombre",'');
    let nombre2= prompt("Ingresa tu segundo nombre",'');
    let apellido1= prompt("Ingresa tu primer apellido",'');
    let apellido2= prompt("Ingresa tu segundo apelido",'');
    
    
    let longitud1= nombre1.length;
    let longitud2= nombre2.length;
    let longitudapelido1= apellido11.length;
    let longituapellido2= apellido2.length;
    
    
    let textoconcat="";

    if (longitud1<longitud2)
    {
        alert("El primer nombre:"+ apellido1 +"es menor al segundo nombre:"+ apellido2);
    }

    else
    { if(longitud1 > longitud2)
    {
        alert("El primer nombre:"+ apellido1 +"es mayor al segundo nombre:"+ apellido2);

    }
    else {
        alert("El primer nombre:"+ apellido1 +"es igual al segundo nombre:"+ apellido2);

    }

    }
}




/// condicionales para apellido


if (longitud1<longitud2)
    {
        alert("El primer apellido:"+ apellido1 +"es menor al segundo nombre:"+ nombre2);
    }

    else
    { if(longitud1 > longitud2)
    {
        alert("El primer nombre:"+ nombre1 +"es mayor al segundo nombre:"+ nombre2);

    }
    else {
        alert("El primer nombre:"+ nombre1 +"es igual al segundo nombre:"+ nombre2);

    }

    }

