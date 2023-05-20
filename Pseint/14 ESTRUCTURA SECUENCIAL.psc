//ejercicio 1:calcular la cantidad de segundo que estan incluidos en el 
//numeros de horas, minutos y segundos ingresados por el usurio.
//entrada:definir las variables (horas,minutos,seg)
//proceso:horas_seg <- horas * 3600;minutos_seg <- minutos * 60 (calculando)
//salida:total_seg
proceso ejercicio1
	definir horas,minutos,seg como entero;
	definir horas_seg, minutos_seg como entero;
	
	escribir "digite las horas: ";
	leer horas;
	escribir "digite los minutos: ";
	leer minutos;
	escribir "digite los segundo: ";
	leer seg;
	
	//calcular el equivalente en segundo 
	horas_seg <- horas * 3600;
	minutos_seg <- minutos * 60;
	
	total_seg <- horas_seg + minutos_seg + seg;
	
	escribir "los segundos equivalentes son: ",total_seg;
FinProceso
	