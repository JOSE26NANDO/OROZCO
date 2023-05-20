// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Ejercicio 5: Una tienda ofrece un descuento del 15 MOD  sobre el total de la 
// compra y un cliente desea saber cuanto deberas pagar finalmente por su compra
// entrada:Solicitar al cliente el monto total de la compra
// proceso:Calcular el descuento (precio*0.15)
// salida:Calcular el monto final a pagar
function ejercicio5() {
	var precio = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("digite el precio a pagar: ",'<BR/>');
	precio = Number(prompt());
	descuento = precio*0.15;
	precio_final = precio-descuento;
	document.write("el precio a pagar es de: ",precio_final,'<BR/>');
}

