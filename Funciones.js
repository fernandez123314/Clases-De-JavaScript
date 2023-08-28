// // Las funciones nos permiten ejecutar una serie de instrusciones
// // en el orden que especifiquemos

// //  f(x) = x + 3
// //  x = 5 + 3 ---> 8

// // En Javascript se escriben de la siguiente manera
 
function sumaTres(x){
    console.log(x + 3);
}
// sumaTres(5);

// Sintaxis de una funcion: 

// 1. Lo primero que encontramos es la palabra reservada function
//     lo encontramos al inicio de la declaracion lo que nos indica
//     que lo siguiente es una funcion

// 2. Luego le damos nombre a la funcion en este caso (sumaTres)

// 3. Dentro del parentesis () escribimos es argumento o parametro
//     esto nos sirve para darle informacion a nuestra funcion
//     podemos escribir todos los parametos que queramos

// 4. Las llaves ({}) se les cononce como cuerpo de la funcion
//     ahi indicaremos las instruciones que ejecutara la funcion
//     en este caso le decimos que cuando la funcion se ejecute
//     debe imprimir en la consola el valor de x sumado 3 --> console.log(x + 3);

//Existen 3 tipos de funciones  de declarar una funcion

//PRIMERO:

function sumaTres(x){
    return x + 3; // AHORA SE RETORNA LA FUNCION
}

//SEGUNDO

var sumaTres = function(x){ //LO QUE SE HACE AQUI ES GUARDAR NUESTRA 
    return x + 3;           // FUNCION DENTRO DE UNA VARIABLE
};

//TERCERO
var sumaTres = (x) => {  //SE LLAMA FUNCION RE FLECHAS
    return x + 3;
  }

//UN ERROR COMUN ES CONFUNDIR RETURN CON CONSOLE.LOG

//console.log cumple la funcion de imprimir una variable
Ejemplo: 

var perro = "Casper";
console.log(perro); // se imprime (casper)

// importante: NINGUNA APLICACION O PROGRAMA REAL DEBERIA TENER 
// UN console.log() dentro de su codigo

// RETURN
// Es fundamental para toda la funcion ya que es la instruccion
// que va a indicar que valor nos debe devolver.
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
  }

// LAS FUNCIONES SON VALORES QUE PODEMOS EJECUTAR Y NOS RETORNARAN 
// ALGUN VALOR COMO RESULTADO

// SI NO DEFINIMOS EL VALOR A RETORNAR JS POR DEFECTO NOS RETORNARA 
// UNDEFINED 

//LOS PARAMETROS SON PALABRAS CLAVE QUE NOS PERMITE INTRODUCIR
//INFORMACION EXTERNA DENTRO DE UNA FUNCION