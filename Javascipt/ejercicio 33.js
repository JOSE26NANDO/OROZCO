// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio 3 :intercambiar el valor de 2 variables
// entrada:Asignar valores iniciales a las variables a y b
// proceso:Imprimir los valores iniciales de a y b(calculando)
// salida:2 Imprimir los valores intercambiados de a y b
function ejercicio3() {
	var aux;
	var a = new Number();
	var b = new Number();
	document.write("digite el valor de a: ",'<BR/>');
	a = Number(prompt());
	document.write("digite el valor de b: ",'<BR/>');
	b = Number(prompt());
	aux = a;
	a = b;
	b = aux;
	document.write("el nuevo valor de a es: ",a,'<BR/>');
	document.write("el nuevo valor de b es: ",b,'<BR/>');
}

