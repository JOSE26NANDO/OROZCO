//ejercicio 3 :intercambiar el valor de 2 variables
//entrada:a,b(leer), a,b,aux(calculando)
//proceso:a,b,aux
//salida:NV

proceso ejercicio3 
	definir a,b como entero;
	
	escribir "digite el valor de a: ";
	leer a;
	escribir "digite el valor de b: ";
	leer b;
	
	aux <- a;
	a <- b;
	b<- aux;
	
	escribir "el nuevo valor de a es: ",a;
	escribir "el nuevo valor de b es: ",b;
	
FinProceso
	