let texto = prompt("Ingresar un texto");

for (let i = 0; i < texto.length; i++) {
    let caracter = texto.charAt(i);
    if (i == texto.length - 1) {
        document.write(caracter);
    } else {
        document.write(caracter + "-");
    }
}