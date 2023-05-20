// Ejercicio 9: Hacer un programa que tenga un menu con las siguientes opciones:
// opcion 1: Elevar un numero a la pontencia x 
// opcion 2: sacar la raiz cuadrada de un numero 
// opcion 3: salir 
//entrada:opcion(leer), num,pot(calculando)
//proceso:num,pot(calculando)
//salida:resultado
Algoritmo ejercicio9
	Definir opcion Como Entero
	Escribir 'MENU'
	Escribir '1. Elevar um numero a una potencia X'
	Escribir '2. sacar la raiz cuadrada de un numero'
	Escribir '3. Salir'
	Escribir 'Digite una opcion: '
	Leer opcion
	Segun opcion  Hacer
		1:
			Definir num,pot,resultado Como Real
			Escribir 'digite un numero: '
			Leer num
			Escribir 'digite la potencia'
			Leer pot
			resultado <- num^pot
			Escribir 'El resultado es: ',resultado
		2:
			Definir num,resultado Como Real
			Escribir 'digite un numero: '
			Leer num
			resultado <- rc(num)
			Escribir 'el resultado es: ',resultado
		De Otro Modo:
			Escribir 'Se equivoco de opcion de menu'
	FinSegun
FinAlgoritmo
