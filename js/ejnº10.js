// Pedir numero de filas y columnas   X
// dibujar una tabla    

// Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la 
// tabla es de 7×5 los números irán del 35 al 1.

let filas = parseInt(prompt("Ingrese un numero de filas"))
// let columnas = parseInt(prompt("Ingrese un numero de columnas"))

// console.log(filas)
// console.log(columnas)

document.write(`<table>
<thead>`)

for(let indicefila = 1; indicefila <= filas; indicefila++){

    document.write(`<tr>
<td>Hola</td>
<td>mundo</td>
</tr>`)
    

}


document.write(`</thead>
</table>`)