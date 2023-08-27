//Son los que se describen en las matematicas:
//mayor que (>), menor que (<), mayor o igual (>=), menor o igual (<=),
//igual == (se representa con doble igual)  y distinto de (!=).

// LOS OPERADORES DE COMPARACION DEVUELVEN UN VALOR BOOLEANO
// PARA INDICAR SI LA OPERACION ES VERDADERA(TRUE O FALSE)

// console.log(4<7); //true
// console.log(4>7);  //false
// console.log(4==7);  //false

// DENTRO DE LOS OPERADORES DE COMPARACION EXISTENN AQUELLOS QUE NOS PERMITEN 
// EVALUAR SI SON IGUAL O EQUIVALENTES 
//  -----> = ,  == Y ===
//  IGUAL(=) ES UN OPERADOR DE ASIGNACION
//  IGUALDAD SON(== Y ===)

// 3 == 3; // tipo de dato numero
// 3 === 3;
// 3 == "3";// ENTRE COMILLAS ES TIPO DE DATO string

// La igualdad estricta(===) verifica que coencida el tipo de dato 
// como asi tambien el valor del mismo

// Ejemplos:
// 3 === "3"; //false
// 3 == "3"; //true ya que se usa Abstract Equality Comparison

// El de solo igual(=) verifica que el valor sea el MediaStreamAudioSourceNode

//"ASOCIATIVIDAD"

var a = 1;
var b =  2;
var c = (a = b);

console.log(a); //2
console.log(b); //2
console.log(c); 