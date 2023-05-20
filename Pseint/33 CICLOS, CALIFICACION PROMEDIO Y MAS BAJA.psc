//Ejercicio 4: Suponga que se tiene un conjunto de calificaciones de un grupo 
// de 10 alumnos.realizar un algoritmo para calcula la calificacion promedio y 
//la calificacion mas baja de todo el grupo
//entrada:calificacion(leer), cp+cb(calculando)
//proceso:calificacion_promedio <- suma/10
//salida:calificaciones 

Proceso ejercicio4
	Definir calificacion_promedio,calificacion_baja Como Real;
	definir calificacion,suma Como Real;
	Definir i Como Entero;
	
	suma <- 0;
	calificacion_baja <- 99999;
	
	para i<-1 hasta 10 Con Paso 1 Hacer
		Escribir i,".digite una calificacion: ";
		leer calificacion;
		
		//Suma iterativa de las calificaciones 
		suma <- suma + calificacion; 
		
		//calculamos la menor calificacion 
		si calificacion < calificacion_baja Entonces
			calificacion_baja <- calificacion;
		FinSi
	FinPara
	
	calificacion_promedio <- suma/10;
	
	Escribir "La calificacion promedio es: ",calificacion_promedio;
	Escribir "la calificacion mas baja es: ",calificacion_baja;
FinProceso
	