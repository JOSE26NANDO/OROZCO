//Ejercicio4: Leer 2 numeros; si son iguales que los multiplique, si el
// primero es mayor que el segundo que los reste y si no que los sume.
//entrada:num 1,num 2(leer),num1 * num2(calculando) 
//proceso:num1 * num2(calculando) 
//salida:resultado

Proceso ejercicio4
	Definir num1,num2,resultado como reales;
	
	Escribir "digite dos numeros: ";
	Leer num1,num2;
	
	si num1=num2 Entonces
		//si son iguales multiplicamos 
		resultado <- num1 * num2;
	SiNo
		si num1>num2 Entonces
			//si el primer numero es mayor lo restamos
			resultado <- num1 - num2;
		SiNo
			resultado <- num1 + num2;
		FinSi
	FinSi
	
	Escribir "El resultado es: ",resultado;
FinProceso
	