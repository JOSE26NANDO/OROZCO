//Ejercicio 1: Calcular la suma de los "N" primeros numeros.
//entrada:N(leer), suma <- 0(calculando)
//proceso:suma <- 0
//salida:suma

Proceso ejercicio1
	Definir N,suma,i como entero;
	
	Escribir "Digite la cantidad de numeros a sumarse: ";
	Leer N;
	
	suma <- 0;
	
	Para i <- 1 Hasta N Con paso 1 hacer 
		suma <- suma + i;
	FinPara
	
	Escribir "la suma es : ",suma;
FinProceso
	