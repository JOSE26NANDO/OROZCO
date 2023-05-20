// Ejercicio 2: Determinar si un alumno aprueba o reprueba un curso, sabiendo que 
// aprobara si su promedio de tres calificaciones es mayor o igual a 70
// reprueba caso contrario. (Diagrama de flujo) 
//entrada:nota1,2,3(leer),promedio(calculando)
//proceso:promedio(nota1+nota2+nota3)/3
//salida:promedio
Algoritmo ejercicio2
	Definir nota1,nota2,nota3 Como Real
	Definir promedio Como Real
	Escribir 'digite las 3 calificaciones: '
	Leer nota1,nota2,nota3
	promedio <- (nota1+nota2+nota3)/3
	Si promedio>=70 Entonces
		Escribir 'el alumno esta aprobado con: ',promedio
	SiNo
		Escribir 'El alumno esta desaprobado con: ',promedio
	FinSi
FinAlgoritmo
