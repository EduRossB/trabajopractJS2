// pedir un numero al usuario
// hacer piramide creciente con todos los numeros

let num1 = parseInt(prompt("Ingrese un numero menor a 50"))

for(let indice = 0; indice <= num1; indice++){
    for(let num2 = 1; num2 <= indice; num2++){
        document.write(num2)
    }
    document.write("<br>")
}