// Ejercicio 1:Ingrese un numero entero y reportar si es par o impar.
//entrada:Solicitar al usuario que ingrese un número entero
//proceso:Verificar si el número es par o impar
//salida:num par,impar

Algoritmo ejercicio1
	Definir num Como Entero
	
	Escribir 'digite un numero: '
	Leer num
	
	Si num MOD 2=0 Entonces
		Escribir 'El numero ',num,' es par'
	SiNo
		Escribir 'El numero ',num,' es impar'
	FinSi
FinAlgoritmo
