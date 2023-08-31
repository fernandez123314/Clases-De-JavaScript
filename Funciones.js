// // Las funciones nos permiten ejecutar una serie de instrusciones
// // en el orden que especifiquemos

// //  f(x) = x + 3
// //  x = 5 + 3 ---> 8


// Para declarar una función en JavaScript, puedes seguir la siguiente sintaxis:

function nombreDeLaFuncion(parametro1, parametro2) {
  // Código a ejecutar dentro de la función
  // Puedes utilizar los parámetros dentro de la función
  // Puedes realizar operaciones y retornar un resultado si es necesario
}

// Los parámetros son variables declaradas en la definición 
// de una función. 
// Estas variables actúan como marcadores de posición 
// para los valores que se pasan a la función 
// cuando se la llama. 
// Los parámetros se definen dentro de los paréntesis 
// en la declaración de la función. 
//Por ejemplo:

function sumar(a, b) {
  return a + b;
}
// En este ejemplo,  a  y  b  son los parámetros 
// de la función  sumar . 
// Cuando llamamos a esta función, se espera que proporcionemos 
// dos valores para  a  y  b . 

// Los argumentos, por otro lado, son los valores reales 
// que se pasan a una función cuando se la llama. 
// Estos valores se asignan a los parámetros correspondientes. 
// Por ejemplo:

sumar(2, 3);
// En este caso,  2  y  3  son los argumentos 
// que se pasan a la función  sumar . 
// Estos valores se asignarán a los parámetros  a  y  b  
// respectivamente dentro de la función. 
 

// Aquí tienes un ejemplo de cómo declarar una 
// función llamada  saludar  
// que toma un parámetro  nombre  
// y muestra un mensaje de saludo en la consola:

function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}
También puedes declarar una función utilizando una expresión de función:

const nombreDeLaFuncion = function(parametro1, parametro2) {
  // Código a ejecutar dentro de la función
}
Recuerda que puedes llamar a una función utilizando su nombre seguido de paréntesis y, si es necesario, proporcionar los argumentos correspondientes:


nombreDeLaFuncion(argumento1, argumento2);

//Otro ejemplo
 
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