let texto = prompt("Ingrtese un exto")
let caracter = texto.length

for(caracter; caracter >= 0; caracter--){
    document.write(texto.charAt(caracter))
}