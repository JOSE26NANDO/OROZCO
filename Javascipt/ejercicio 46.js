// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Ejercicio4: Leer 2 numeros; si son iguales que los multiplique, si el
// primero es mayor que el segundo que los reste y si no que los sume.
// entrada:num 1,num 2(leer),num1 * num2(calculando) 
// proceso:num1 * num2(calculando) 
// salida:resultado
function ejercicio4() {
	var num1 = new Number();
	var num2 = new Number();
	var resultado = new Number();
	document.write("digite dos numeros: ",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	if (num1==num2) {
		// si son iguales multiplicamos 
		resultado = num1*num2;
	} else {
		if (num1>num2) {
			// si el primer numero es mayor lo restamos
			resultado = num1-num2;
		} else {
			resultado = num1+num2;
		}
	}
	document.write("El resultado es: ",resultado,'<BR/>');
}

