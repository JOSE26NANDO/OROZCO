// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Ejercicio 9: Hacer un programa que tenga un menu con las siguientes opciones:
// opcion 1: Elevar un numero a la pontencia x 
// opcion 2: sacar la raiz cuadrada de un numero 
// opcion 3: salir 
// entrada:opcion(leer), num,pot(calculando)
// proceso:num,pot(calculando)
// salida:resultado
function ejercicio9() {
	var opcion = new Number();
	document.write("MENU",'<BR/>');
	document.write("1. Elevar um numero a una potencia X",'<BR/>');
	document.write("2. sacar la raiz cuadrada de un numero",'<BR/>');
	document.write("3. Salir",'<BR/>');
	document.write("Digite una opcion: ",'<BR/>');
	opcion = Number(prompt());
	switch (opcion) {
	case 1:
		var num = new Number();
		var pot = new Number();
		var resultado = new Number();
		document.write("digite un numero: ",'<BR/>');
		num = Number(prompt());
		document.write("digite la potencia",'<BR/>');
		pot = Number(prompt());
		resultado = Math.pow(num,pot);
		document.write("El resultado es: ",resultado,'<BR/>');
		break;
	case 2:
		var num = new Number();
		var resultado = new Number();
		document.write("digite un numero: ",'<BR/>');
		num = Number(prompt());
		resultado = Math.sqrt(num);
		document.write("el resultado es: ",resultado,'<BR/>');
		break;
	default:
		document.write("Se equivoco de opcion de menu",'<BR/>');
	}
}

