// escribir desde 1 a 500
// cuales son multiplos de 4 y 9
// cada 5 lineas una barra de ------

for (let indice = 1; indice <= 500; indice++) {
  document.write(indice);
  if (indice % 4 === 0) {
    document.write("------(Multiplo de 4)");
  }
  if (indice % 9 === 0) {
    document.write("------(Multiplo de 9)");
  }
  if (indice % 5 === 0) {
    document.write("<br><hr>");
  }
  document.write("<br>");
}
