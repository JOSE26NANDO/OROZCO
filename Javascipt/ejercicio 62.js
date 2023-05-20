// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio8: dada las horas trabajadas de 5 personas y la tarifa de pago calcular el salario y la sumatoria de todos los salarios.
// entrada:n_trabajadores(leer), salario_cada <- horas*tarifa;(calculando)
// proceso:salario_cada <- horas*tarifa;
// salida:sumatoria_salario
function ejercicio8() {
	var i = new Number();
	var salario_cada = new Number();
	var horas = new Number();
	var tarifa = new Number();
	var sumatoria_salario = new Number();
	var numero_trabajadores = new Number();
	i = 1;
	sumatoria_salario = 0;
	document.write("digite el numero de trabajadores:",'<BR/>');
	numero_trabajadores = Number(prompt());
	document.write("digite la tarifa:",'<BR/>');
	tarifa = Number(prompt());
	while (i<=numero_trabajadores) {
		document.write(i,".digite el valor de horas trabajadas por este trabajador:",'<BR/>');
		horas = Number(prompt());
		salario_cada = horas*tarifa;
		document.write("el valor a pagar de este trabajo es:",salario_cada,'<BR/>');
		i = i+1;
		sumatoria_salario = sumatoria_salario+salario_cada;
	}
	document.write("el valor total de salarios a pagar es de : ",sumatoria_salario,'<BR/>');
}

