// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio 2: hacer un programa para ingresar el radio de un circulo y se
// reporte su area y la longitud de la circunferencia.
// area = pi * radio Y 2
// longitud = 2 * pi * radio
// entrada:radio(leer),area,long(calculando)
// proceso:area <- pi*radio*radio , lon <- 2*pi*radio
// salida:area,long
function ejercicio2() {
	var pi;
	var radio = new Number();
	var area = new Number();
	var lon = new Number();
	document.write("degite el valor de radio:",'<BR/>');
	radio = Number(prompt());
	area = Math.PI*radio*radio;
	lon = 2*Math.PI*radio;
	document.write("el area de la circunferencia es: ",area,'<BR/>');
	document.write("la longitud es: ",lon,'<BR/>');
}

