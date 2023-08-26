// Las variables son contenedores o recipientes que nos permite almacenar
// cierto valor.
// Existen 3 tipos de Variables: var, let y const. Toda variable viene declarada ej:

var nombre 

// Ya sea var, let y const seguido de la declaracion

TIPOS DE DATOS

// Todos los valores que almacenemos en una variable tendran un tipo de dato asociado
// los mas comunes son:

// String o cadenas de texto: Son los que cotidanamente llamamos palabras y se identifican al
// estar en comillas dobles o simples, ej:

var nombre = "Adhemar"

//NUMEROS(number): pueden ser positivos, negativos o decimales

var numeroEntero = 10;
var numeroNegativo = -7;
var numeroDecimal = 11.75;

//BOOLEANOS: Se conoce como verdadero(true) y falso(false), son palabras reservadas 
// y no van en comillas ej:

var estoyEntendiendo = true; // verdadero
var noEntendiendo = false; // falso

//UNDEFINED: Aparecec cuando no le asignamos un valor a la variable ej:

var cajon1;

//NULL: Es el programador quien la define en null ej:
var sinNada = null;

//MÉTODO LENGTH: Este es un método que solo se puede aplicar al tipo de dato string 
//(más adelante veremos que también lo podemos utilizar en arreglos). 
//En este ejemplo podemos ver que si lo intentamos aplicar en un número o en un booleano, 
//nos devuelve error

"String".length // 6
6549.length // error
false.length // error