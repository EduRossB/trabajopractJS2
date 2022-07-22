// pedir un numero (nu mayor a 50)  X
// hacer una piramide inversa desde numero dado hasta 1

let num1 = parseInt(prompt("Ingrese un numero menor a 50"))

if(num1<=50 && num1>=1){
 for(num1; num1 >= 1; num1--){
    for(let num2= 0 ; num2 < num1; num2++){
        document.write(num1)
    }
    document.write("<br>")
 }
}

else{
    alert("Numero ingresado no es valido")
}