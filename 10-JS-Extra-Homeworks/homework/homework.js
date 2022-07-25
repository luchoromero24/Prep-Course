// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var nuevoArr = [];
  for (const key in objeto) {
    nuevoArr.push([key, objeto[key]]);
  }
  return nuevoArr;
}

deObjetoAmatriz({ x: 1, y: 2 }); //==> ([["x" , 1],["y" , 2]]);

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí

  var nuevoObjeto = {};
  for (let i = 0; i < string.length; i++) {
    if (!nuevoObjeto[string[i]]) {
      nuevoObjeto[string[i]] = 0;
    }
    nuevoObjeto[string[i]]++;
  }
  return nuevoObjeto;
}

numberOfCharacters("sktpwrroqstkrpwwsqtqopwktsd"); /*==> debe retornar ({
   s: 4,
   k: 3,
   t: 4,
   p: 3,
   w: 4,
   r: 3,
   o: 2,
   q: 3,
   d: 1,
 });
 */

function capToFront(str) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var mayusculas = "";
  var minusculas = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      mayusculas = mayusculas + str[i];
    } else {
      minusculas = minusculas + str[i];
    }
  }
  return mayusculas + minusculas;
}
capToFront("soyHENRY"); //==> "HENRYsoy"
capToFront("DESArrollaDOR"); //==> "DESADORrrolla"

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
 var palabraSeparada = str.split(" ").map(element => {
  return element.split("").reverse().join(""); 
 });
 return palabraSeparada.join(" "); 

}

asAmirror("I love you so much!"); //==> "I evol uoy os !hcum"
asAmirror("The Henry Challenge is close!"); //==> "ehT yrneH egnellahC si !esolc";

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

    let numeroString = numero.toString();
    let result = numeroString.split("").reverse().join("");

    if (numeroString === result) {
      return "Es capicua";
    } else {
      return "No es capicua";
    }
  }

  capicua(12321) // "Es capicua";

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
 
  let modificada = ""; 
  for (let i = 0; i < cadena.length; i++) {
    if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c"){
      modificada += cadena[i]
  }
}
return modificada;
}

deleteAbc("abcefgh") //==> "efgh";

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  let newArr = arr.sort((a,b) => (a.length - b.length))
  return newArr; 
}
sortArray(["You", "are", "beautiful", "looking"]) //==> (["You","are","looking","beautiful"]);
sortArray(["pera", "manzana", "alcaucil", "papa"]) //==> (["pera", "papa", "manzana", "alcaucil"]);

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí

  var newArr = []; 
  for (var i = 0; i < arreglo2.length; i++) {
    if(arreglo2.includes(arreglo1[i])){
      newArr.push(arreglo1[i]);
    }
  }
  return newArr;
}
buscoInterseccion([1, 2, 3], [1, 5, 8, 3]) //==> [1, 3];
buscoInterseccion([7, 23, 4], [23, 70]) //==>  [23];
buscoInterseccion([1, 20, 3], [22, 5, 7]) //==> [];

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
