//Los operadores se usan para calcular un valor de dos o mas elementos
// suma(+), resta(-), multiplicacion(*), Divicion(/)

//console.log --> No permite imprimir en la consola el resultado de lo que queresmos visualizar.

//OPERADOR SUMA: 
console.log(3+5);
//OPERADOR RESTA
console.log(14 - 7);

//OPERADOR MULTIPLICACION
console.log(8 * 6);

//OPERADOR DIVISION
console.log(30 / 9);

//OPERADOR RESTO: 
console.log(95 % 4); //94 sera el DIVIDENDO, 4 el DIVISOR. El resultado sera 23 como COCIENTE
// Y 3 COMO RESTO, EL RESTO ES LO QUE SOBRA DE LA DIVICION SE REPRESENRA CON PORCENTAJE

PRECEDENCIA DE LOS OPERADORES

//ES COMO LOS OPERADORES: suma(+), resta(-), multiplicacion(*), Divicion(/) SON EVALUADOS UNO DEL OTRO


//Prueba de precedencia
console.log(3 + 5 * 2 - 8); //SU RESULTADO SERA 5(JavaScript respeta las ordendes de precedencia)
                            //Donde la multiplicacion es mas importante que la suma

        // La precedencia de operadores determina el orden en el cual los operadores son evaluados 
        // uno respecto del otro. Los operadores con mayor precedencia se convierten en los operandos 
        // de los operadores con menor precedencia. 
    
// Aquí tienes una tabla con la precedencia de los operadores en JavaScript, 
//ordenados de mayor a menor precedencia. 
//Los operadores en la misma fila tienen la misma precedencia y se evalúan de izquierda a derecha.

// | Precedencia | Operadores                  | Descripción                                   |
// |-------------|-----------------------------|-----------------------------------------------|
// | 20          | ()                          | Agrupación                                    |
// | 19          | . []                        | Acceso a propiedades y elementos de un array  |
// | 18          | new (with arguments)        | Creación de instancias                        |
// | 17          | new (without arguments)     | Creación de instancias sin argumentos         |
// | 16          | ++ -- (postfix)             | Incremento y decremento (postfijo)            |
// |             | **                          | Potenciación                                  |
// | 15          | ++ -- (prefix)              | Incremento y decremento (prefijo)             |
// |             | + - (unary)                 | Operadores unarios positivo y negativo        |
// |             | ! ~ typeof                  | Operadores lógicos y de tipo                  |
// |             | await                       | Operador await (para promesas)                |
// | 14          | * / %                       | Multiplicación, división, módulo              |
// | 13          | + -                         | Suma y resta                                  |
// | 12          | << >> >>>                   | Desplazamiento de bits                        |
// | 11          | < <= > >= instanceof in     | Operadores de comparación                     |
// | 10          | == != === !==               | Igualdad y desigualdad                        |
// | 9           | &                           | AND a nivel de bits                           |
// | 8           | ^                           | OR exclusivo a nivel de bits                  |
// | 7           | \|                          | OR a nivel de bits                            |
// | 6           | &&                          | AND lógico                                    |
// | 5           | \|\|                        | OR lógico                                     |
// | 4           | ? :                         | Operador condicional (ternario)               |
// | 3           | = += -= *= /= %=            | Asignación                                    |
// |             | <<= >>= >>>=                | Asignación de desplazamiento de bits          |
// |             | &= ^= \|=                   | Asignación de bits                            |
// | 2           | yield                       | Yield (para funciones generadoras)            |
// | 1           | ,                           | Coma (para separar expresiones)               |

// comprender la precedencia de los operadores es esencial para escribir código JavaScript correcto y evitar resultados inesperados.

ADICION Y STRINGS

//Los operadores no solo van a aplicarse a numeros. Por ejemplo el operador 
//adicion nos va permitir 
//concatenar(unir dos o más cadenas de caracteres para formar una cadena más larga) strings

console.log("HOLA" + "MUNDO");
//TAMBIEN SE PUEDE HACER CON VARIABLES
var nombre = "hola";
var saludo= "Mundo" + nombre";
console.log("saludo");

var cadena1 = "Hola, ";
var cadena2 = "mundo!";
var resultado = cadena1 + cadena2; // Concatenación
console.log(resultado); // Esto imprimirá "Hola, mundo!"

var parte1 = "¡Hola, ";
var parte2 = "cómo ";
var parte3 = "estás?";
var mensaje = parte1 + parte2 + parte3; // Concatenación de múltiples cadenas
console.log(mensaje); // Esto imprimirá "¡Hola, cómo estás?"


//Concatenar 2 o mas strings con el operador suma nos dara siempre un nuevo string