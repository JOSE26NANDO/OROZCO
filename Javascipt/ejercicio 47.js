// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Ejercicio 5: Leer tres numeros diferentes e Imprimir 
// el numero mayor de los tres.
// entrada: num 1,2,3 (leer), num1(calculando)
// proceso:num1(calculando)
// salida:num
function ejercicio5() {
	var num1 = new Number();
	var num2 = new Number();
	var num3 = new Number();
	document.write("Digite tres numeros diferentes: ",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	num3 = Number(prompt());
	if (num2>num2 && num1>num3) {
		document.write("El mayor es: ",num1,'<BR/>');
	} else {
		if (num2>num1 && num2>num3) {
			document.write("El mayor es: ",num2,'<BR/>');
		} else {
			document.write("El mayor es: ",num3,'<BR/>');
		}
	}
}

