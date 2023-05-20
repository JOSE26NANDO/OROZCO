// Ejercicio 2: Se desea calcular independientemente la suma 
// de losnumeros pares e impares comprendidos entre 1 y 50.
//entrada:suma_pares,suma_impares
//proceso:suma_pares <- suma_pares+i
//salida:suma_impares
Algoritmo ejercicio2
	Definir suma_pares,suma_impares,i Como Entero
	suma_pares <- 0
	suma_impares <- 0
	Para i<-2 Hasta 49 Hacer
		Si i MOD 2=0 Entonces
			suma_pares <- suma_pares+i
		SiNo
			suma_impares <- suma_impares+i
		FinSi
	FinPara
	Escribir 'La suma de pares es: ',suma_pares
	Escribir 'La suma es impares es: ',suma_impares
FinAlgoritmo
