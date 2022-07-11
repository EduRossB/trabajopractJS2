let edad = parseInt(prompt("Ingrese edad"))

if(edad >= 1 && edad <=17){
    document.write("Usted no posee edad suficiente para manejar")
}
else if(edad <=120 && edad >=18){
    document.write("Usted si posee edad para manejar")

}
else{
    document.write("Ingrese una edad valida")
}