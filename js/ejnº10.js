// Pedir numero de filas y columnas   X
// dibujar una tabla        X

// Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la 
// tabla es de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt("Ingrese un numero de filas"))
const columnas = parseInt(prompt("Ingrese un numero de columnas"))
let resultado = filas * columnas

console.log(filas)
console.log(columnas)
console.log(resultado)

document.write(`<table>
<thead>`)

for(let indicefila = 1; indicefila <= filas; indicefila++){

    document.write(`<tr>`)
    for(let indicecolumna = 1; indicecolumna <= columnas; indicecolumna++){
    document.write(`<td>${resultado}</td>`)
    resultado--
    }

    document.write(`</tr>`)
}


document.write(`</thead>
</table>`)