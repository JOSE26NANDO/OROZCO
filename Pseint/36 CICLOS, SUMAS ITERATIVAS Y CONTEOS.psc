//Ejercicio 7: igresar "N" enteros, visualizar la suma de los numeros pares 
// de la lista, cuantos numeros pares existen y cual es el promedio de los 
// nueros impares.
//entrada:n_elementos(leer), i <- 1(calculando)
//proceso:i <- 1
//salida:promedio_impares

Proceso ejercicio7
	definir n_elementos,i,num como enteros;
	Definir suma_pares,conteo_pares como enteros;
	Definir suma_impares,conteo_impares como enteros;
	Definir promedio_impares Como Real;
	
	Escribir "digite la cantidad de elementos a ingresar: ";
	Leer n_elementos;
	
	i <- 1;
	suma_pares <- 0;
	conteo_pares <- 0;
	
	suma_impares <- 0;
	conteo_impares <- 0;
	
	Mientras  i<= n_elementos Hacer
		Escribir i,"Digite un numero: ";
		leer num;
		
		si num mod 2 = 0 Entonces
			//El num es par 
			
			//Suma iterativa de pares 
			suma_pares <- suma_pares + num;
			
			//conteo de pares
			conteo_pares <- conteo_pares + 1;
		SiNo
			//El num es impar 
			
			//suma iterativa de impares
			suma_impares <- suma_impares + num;
			
			//conteo de impares
			conteo_impares <- conteo_impares + 1;
		FinSi
		
		i <- i + 1;
	FinMientras
	
	Si conteo_pares = 0 Entonces
		Escribir "No se han digitado numeros pares";
	SiNo
		Escribir "La suma de los numeros pares es: ",suma_pares;
		Escribir "el conteo de los numeros pares es: ",conteo_pares;
	FinSi
	
	si conteo_impares = 0 Entonces
		Escribir "No se han digitado numeros impares";
	SiNo
		promedio_impares <- suma_impares/conteo_impares;
		Escribir "El promedio de impares es: ",promedio_impares;
	FinSi
	
FinProceso
	
