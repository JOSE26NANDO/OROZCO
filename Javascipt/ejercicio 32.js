// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Ejercicio2
function principal() {
	var a = new Number();
	var b = new Number();
	var resultado = new Boolean();
	document.write("degite el valor de a: ",'<BR/>');
	a = Number(prompt());
	document.write("degite elvalor de b: ",'<BR/>');
	b = Number(prompt());
	resultado = ((3+5*8)<3 && ((-6/3*4)+2<2)) || (a>b);
	document.write("el resultadoes: ",resultado,'<BR/>');
}

