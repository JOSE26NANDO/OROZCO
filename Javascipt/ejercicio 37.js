// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio 1:calcular la cantidad de segundo que estan incluidos en el 
// numeros de horas, minutos y segundos ingresados por el usurio.
// entrada:definir las variables (horas,minutos,seg)
// proceso:horas_seg <- horas * 3600;minutos_seg <- minutos * 60 (calculando)
// salida:total_seg
function ejercicio1() {
	var total_seg;
	var horas = new Number();
	var minutos = new Number();
	var seg = new Number();
	var horas_seg = new Number();
	var minutos_seg = new Number();
	document.write("digite las horas: ",'<BR/>');
	horas = Number(prompt());
	document.write("digite los minutos: ",'<BR/>');
	minutos = Number(prompt());
	document.write("digite los segundo: ",'<BR/>');
	seg = Number(prompt());
	// calcular el equivalente en segundo 
	horas_seg = horas*3600;
	minutos_seg = minutos*60;
	total_seg = horas_seg+minutos_seg+seg;
	document.write("los segundos equivalentes son: ",total_seg,'<BR/>');
}

