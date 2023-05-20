// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio1
// Entrada:definir las variables a,b,c
// Proceso:(escrbir)a,b,c y (leer)a,b,c
// salida:resultado
function principal() {
	var a = new Number();
	var b = new Number();
	var c = new Number();
	var resultado = new Number();
	document.write("Digite el valor de A: ",'<BR/>');
	a = Number(prompt());
	document.write("Digite el valor de B: ",'<BR/>');
	b = Number(prompt());
	document.write("Digite el valor de C: ",'<BR/>');
	c = Number(prompt());
	resultado = (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
	document.write("El resultado es: ",resultado,'<BR/>');
}

