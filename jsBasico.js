

const word = "abracadabra"
word

const numeroDeAes = (w) => {
    let contar = w.split('')
    contar
   return w
    .split('')
    .filter((x) => x ==="a")
    .length
       
}

ases = numeroDeAes(word)
ases
// const word = "amarrar"

// function caracteres(word){
//     let contador = 0
//         for (let i = 0 ; i < word.length ; i++)
//       if (word[i] === "a") {
//       contador += 1
//    }   
//     return contador
// }
// b = caracteres(word)
 
// b

// Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). 
//La función debe retornar el número de veces que aparece el caracter en el string.

// // escribe tu respuesta acá

// // código de prueba
// console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
// console.log(numeroDeCaracteres("MMMMM", "m")) // 0
// console.log(numeroDeCaracteres("eeee", e)) // 4

const str = 'amador'
const caracter = 'o'
str
const numeroDeCaracteres = (s , c) => {
    let count = s.split('')
        count
      caracter
    
    return s
    .split('')
    .filter((s) => s ===  c )
    .length
     
}

nc = numeroDeCaracteres ("aaaaaa", "a")
nc

// Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

// // escribe tu respuesta acá

// // código de prueba
// console.log(sumarArreglo([3, 1, 2])) // 6
// console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
// console.log(sumarArreglo([])) // 0

const sumaA = [3, 1, 2]

const sumarArreglo =(arr) => {
    
    return sumaA.reduce((acumulador, current) => {
        current
        acumulador
        return current + acumulador
    },0) //0 es el acumulador

}

sa = sumarArreglo ([3, 1, 2])
sa

// Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.

// // escribe tu respuesta acá

// // código de prueba
// console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
// console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
// console.log(multiplicarArreglo([])) // 1

const multiA = [4, 1, 2, 3]

const multiplicarArreglo =(arreglo) => {


    return multiA.reduce((ac, cu) => {
        
        cu
        ac
        return cu * ac

    },)
} 

 ma = multiplicarArreglo([4 , 3, 1, 2])
ma  