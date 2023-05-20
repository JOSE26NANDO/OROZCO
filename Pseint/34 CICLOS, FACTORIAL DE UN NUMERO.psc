// Ejercicio 5: Calcular el factorial de un numero
// mayor o igual a 0
//entrada:num(num), factorial <- factorial*i(calculando)
//proceso:factorial <- factorial*i
//salida:factorial
Algoritmo ejercicio5
	Definir num Como Entero
	Definir i,factorial Como Entero
	Repetir
		Escribir 'Digite un numero: '
		Leer num
	Hasta Que num>=0
	i <- 1
	factorial <- 1
	// N! = 1 * 2 * 3 * ... * N
	Mientras i<=num Hacer
		factorial <- factorial*i
		i <- i+1
	FinMientras
	Escribir 'El factorial es: ',factorial
FinAlgoritmo
