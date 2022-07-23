// pedir 3 edades   X
// pedir 3 nombres    X
// indicar el mayor

let edad1 = parseInt(prompt("Indicar la primera edad"))
let edad2 = parseInt(prompt("Indicar la segunda edad"))
let edad3 = parseInt(prompt("Indicar la tercera edad"))
let nombre1 = prompt("Indicar el primer nombre")
let nombre2 = prompt("Indicar el segundo nombre")
let nombre3 = prompt("Indicar el tercer nombre")

if((Math.max(edad1, edad2, edad3)) === edad1){
    document.write(nombre1)
}
if((Math.max(edad1, edad2, edad3)) === edad2){
    document.write(nombre2)
}
if((Math.max(edad1, edad2, edad3)) === edad3){
    document.write(nombre3)
}