// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function ejercicio6() {
	var precioi2;
	// entrada:precio(leer), kilos(calculando)
	// proceso:kilos (kilos>=0 Y kilos<=2)
	// salida:precio final
	var preciok = new Number();
	var kilos = new Number();
	var precioi = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("cuanto cuesta el kilo de manzana? ",'<BR/>');
	preciok = Number(prompt());
	document.write("cuantos kilos de manzana a comprado? ",'<BR/>');
	kilos = Number(prompt());
	precioi2 = preciok*kilos;
	if (kilos>=0 && kilos<=2) {
		descuento = 0;
	} else {
		if (kilos>=2.01 && kilos<=5) {
			descuento = precioi*0.1;
		} else {
			if (kilos>=5.01 && kilos<10) {
				descuento = precioi*0.15;
			} else {
				descuento = precioi*0.2;
			}
		}
	}
	precio_final = precioi-descuento;
	document.write("elprecio a pagar es: ",precio_final,'<BR/>');
}

