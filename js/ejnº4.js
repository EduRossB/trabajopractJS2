// Pedir numeros hasta cancelar X

// Si no es un num indicar con un alert y seguir pidiendo numeros

// Al salir con cancelar mostrar la suma de los numeros

let sumatotal = 0

while(confirm("¿Desea sumar?")){
    let numero = prompt("Ingrese el numero")
    if(Number(numero) == numero){
        numero = parseInt(numero)
        sumatotal = sumatotal + numero
    }
    else{
        alert("Ese no es un numero")
    }
}

document.write(sumatotal)


