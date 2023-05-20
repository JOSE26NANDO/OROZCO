// Ejercicio 6:Calcular la siguiente sumatoria de los "N" elementos:
// S = 1 + 4 + 9 + ...
//entrada:n_elementos(leer), i <- i + 1(calculando)
//proceso:i <- i + 1
//salida:suma
Algoritmo ejercicio6
	definir n_elementos como entero
	definir i, suma como enteros
	Escribir "digite la catidad de elementos a sumarse: " 
	Leer n_elementos
	i <- 1
	suma <- 0
	Mientras i<=n_elementos Hacer
		suma <- suma + i^2
		i <- i + 1
	FinMientras
	Escribir "la suma es: ",suma
FinAlgoritmo
