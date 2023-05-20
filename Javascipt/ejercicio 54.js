// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// entrada:i <- 1(leer), i <- i + 1(calculando)
// proceso:i <- i + 1
// salida:resultado
function ciclos() {
	var i = new Number();
	i = 1;
	while (i<=10) {
		document.write(i,'<BR/>');
		i = i+1;
	}
}

