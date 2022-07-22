// No cambies los nombres de las funciones.

function devolverPrimerElemento(arr) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return arr.shift();
}

function devolverUltimoElemento(arr) {
  // Devuelve el último elemento de un array
  // Tu código:
  return arr.pop();
}
devolverUltimoElemento([10, 10, 16, 12]); //=> (12);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let newArr = array.map(function (e) {
    return e + 1;
  });
  return newArr;
}

incrementarPorUno([10, 10, 16, 12]); //=> [11, 11, 17, 13]

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
agregarItemAlFinalDelArray([10, 10, 16, 12], 10); //=> ([10, 10, 16, 12, 10]);

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], "Hola"); //=> (['Hola', 97, 100, 80, 55, 72, 94]);

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  return palabras.join(" ");
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;
}
arrayContiene([10, 10, 16, 12], 10); //=> true;

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}
agregarNumeros([10, 10, 16]); //=> 36;

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  let promedio = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
    promedio = suma / resultadosTest.length;
  }
  return promedio;
}
promedioResultadosTest([10, 10, 16, 12]); //=> (12);

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = Math.max(...numeros);
  return mayor;
}
numeroMasGrande([10, 10, 16, 12]); //=> 16;

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let result = 1;
  if (arguments.length < 1) {
    return 0;
  }
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0;
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      contador++;
    }
  }
  return contador;
}
cuentoElementos([10, 10, 18, 21]); //=> 1;

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if (numeroDeDia === 7 || numeroDeDia === 1) {
    return "Es fin de semana";
  }
  if (numeroDeDia > 1 && numeroDeDia < 6) {
    return "Es dia Laboral";
  }
}
diaDeLaSemana(3); // ==> "Es dia Laboral";
diaDeLaSemana(1); // ==> "Es fin de semana";

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  let aString = n.toString();
  let aArray = aString.split("");
  for (let i = 0; i < aArray.length; i++) {
    if (aArray[i].includes(9)) {
      return true;
    }
  }
  return false;
}

empiezaConNueve(98); // (true);
empiezaConNueve(7); // (false);

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === arreglo[i + 1]) {
      return true;
    }
  }
  return false;
}
todosIguales([20, 20, 20, 20]); //==> (true);
todosIguales([97, 100, 190, 9]); //==> (false);

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  let meses = array.filter(
    (e) => e === "Enero" || e === "Marzo" || e === "Noviembre"
  );
  if (meses.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  return meses;
}

mesesDelAño([
  "Marzo",
  "Diciembre",
  "Abril",
  "Junio",
  "Julio",
  "Noviembre",
  "Enero",
  "Mayo",
  "Febrero",
]); //==> (["Marzo", "Noviembre", "Enero"]);
mesesDelAño(["Marzo", "Diciembre", "Julio", "Noviembre"]); //==> "No se encontraron los meses pedidos"

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  let newArr = array.filter((item) => {
    return item > 100;
  });
  return newArr;
}
mayorACien([100, 4, 56, 78, 200, 120, 7, 160, 148, 22]); //==> ([200, 120, 160, 148]);

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let newArr = [];
  for (var i = 0; i < 10; i++) {
    numero = numero + 2;
    newArr.push(numero);
    if (newArr[i] === i) {
      break;
    }
  }
  if (i === newArr[i]) return "Se interrumpió la ejecución";
  return newArr;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let newArr = [];
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    numero = numero + 2;
    newArr.push(numero);
  }
  return newArr;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
