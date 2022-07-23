let texto = prompt("Ingrese un texto");
texto = texto.toUpperCase;

for (let i = 0; i < texto.length; i++) {
    if (
        texto.charAt(i) == "A" ||
        texto.charAt(i) == "E" ||
        texto.charAt(i) == "I" ||
        texto.charAt(i) == "O" ||
        texto.charAt(i) == "U"
        ) {
    document.write("La primera vocal esta en la posición: " + i);
    i = texto.length
  }
}
