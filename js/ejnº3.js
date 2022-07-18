// pedir texto hasta que presione cancelar

let frasecompleta=""

while(confirm("¿Desea ingresar una palabra?")){
    let textoingresado = prompt("Ingrese una palabra");
    frasecompleta= frasecompleta + textoingresado + " - ";
    console.log(textoingresado);
    console.log(frasecompleta);

}

document.write(frasecompleta)