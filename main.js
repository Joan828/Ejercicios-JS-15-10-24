// 1. Funciones

// Crea una función resta que espere dos parámetros a y b, y que devuelva la resta de los mismos.
function resta(a, b){
  return a - b
}

// Crea una función la cual te pregunte por una nota del 0 al 10 y, dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.
function nota(){
  let n = prompt("Escribe aquí tu nota: ")
  n = +n
  let notaEscrita = ""

  switch (n) {
    case 0: 
    case 1:      
    case 2:       
    case 3:       
    case 4: 
    notaEscrita = "Insuficiente"
      break;

    case 5:      
    case 6: 
    notaEscrita = "suficiente"
      break;

    case 7: 
    case 8: 
        notaEscrita = "Notable"
        
    break;

    case 9: 
    case 10: 
        notaEscrita = "Sobresaliente"
    break;
  
    default:
      break;
  }
  return notaEscrita
}
// console.log(nota());
  

// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’.
let resu
function duplicaNumero(n){
  if(typeof n == "number"){
    resu = n*2
  } else{
    resu = "Debo ser ejecutada con un número"
  }
  return resu
}
console.log(duplicaNumero(2))
// Crea la función caracterInicial. Debe recibir un tipo string y devolver un string con el primer carácter. 
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
function caracterInicial(palabra){
  if (palabra.length == 0){
    return "Debo ser ejecutada con un string no vacío"
  }else if(typeof palabra == "string"){
    return "La primera letra de tu palabra es " + palabra.charAt(0)
  } else{
    return "Debo ser ejecutada con un string"
  }
  
}
console.log(caracterInicial("Albaricoque"));

// Crea la función ultimoCaracter. Debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
function ultimoCaracter(palabra){
  if (palabra.length == 0){
    return "Debo ser ejecutada con un string no vacío"
  }else if(typeof palabra == "string"){
    return "La última letra de tu palabra es " + palabra.charAt(palabra.length-1)
  } else{
    return "Debo ser ejecutada con un string"
  }
}
console.log(ultimoCaracter("Albaricoque"));

// Crea la función cuentaCaracteres. Debe recibir un tipo string y devolver un number con el número de carácteres.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
function cuentaCaracteres(cadena){
  if(typeof cadena === "string"){
    return cadena.length
  }else{
    return "Debo ser ejecutada con un string"
  }

}
console.log(cuentaCaracteres("tapa"));

// Un palíndromo es una palabra que se escribe igual del derecho que del revés, por ejemplo: orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'.
function esPalindromo(pali){
  if(typeof pali === "string"){
    const separarCadena = pali.split("");
    const invertirCadena = separarCadena.reverse();
    const unirCadena = invertirCadena.join("");

    if(pali === unirCadena){
      console.log("Es un palíndromo")
    }else{
      console.log("No es un palíndromo")
    }
  }else{
    return "No es un formato correcto"
  }
}
esPalindromo("rallar")

// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.
function getPrecioMostrar(precio){
  if(typeof precio === "number"){
    return precio.toFixed(2)
  }else{
    return "No es un formato correcto"
  }
}
console.log(getPrecioMostrar(2));


// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división.
function division(a, b){
  return a/b
}
console.log(division(10, 5));

// Crea una función que, dada una array de números, devuelva una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8].
let numeros = [3, 1, 8, 79, 7, 2, 45] 
function numMayores(nums) {
  let arrayM = []
  for (let x of nums ){
    if(x >= 5){
      arrayM.push(x)
    }
  }
  return arrayM
}
console.log(numMayores(numeros))
// Crea una función que nos pida un número por prompt y que nos indique si es o no un número primo. Debe devolver true si es primo, sino false. 
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

//Para un número ser primo tiene que no ser divisble desde 2 hasta la mitad del número(según internet), por ejemplo para el número 8 tendriamos que comprobar que no fuera divisible entre 2,3 y 4, no hace falta seguir.
function pideNum(){
  const nPrimo = prompt("Introduce un número")
  let primo = true
//Aquí creo un bucle para recorrer todos los números entre el 2 y su mitad y si es divisible por alguno es que no es un un número primo, por lo tanto le cambio la propiedad primo a false
  for (let i = 2; i <= nPrimo/2; i++){
    if(nPrimo%i == 0){
      primo = false
    }
  }
  if(primo == true){
    return "Es un número primo"
  }else{
    return "No es un número primo"
  }
}
console.log(pideNum());
