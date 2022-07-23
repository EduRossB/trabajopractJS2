let texto = prompt("Ingrese un texto")
let caracter 
let contador = 0
texto = texto.toUpperCase()

for(let i= 0; i < texto.length; i++){
    caracter = texto.charAt(i);
    if(caracter == "A" || caracter == "E" || caracter == "I" || caracter == "O" || caracter == "U"){
        contador++
    }
}

document.write("Numero de vocales: " + contador)