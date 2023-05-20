// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Ejercicio 7: Elaborar un programa que muestre los dias de la semana
// cuando ingrese los siete primeros numeros.
// entrada:num(leer)
// proceso:escribir dia de la semana(1-7)
// salida:dia de la semana
function ejercicio7() {
	var num = new Number();
	document.write("Digite un numero del dia de la semana (1 -7): ",'<BR/>');
	num = Number(prompt());
	switch (num) {
	case 1:
		document.write("Lunes",'<BR/>');
		break;
	case 2:
		document.write("Martes",'<BR/>');
		break;
	case 3:
		document.write("Miercoles",'<BR/>');
		break;
	case 4:
		document.write("Jueves",'<BR/>');
		break;
	case 5:
		document.write("Viernes",'<BR/>');
		break;
	case 6:
		document.write("Sabado",'<BR/>');
		break;
	case 7:
		document.write("Domingo",'<BR/>');
		break;
	default:
		document.write("Error, no existe dia para ese numero",'<BR/>');
	}
}

