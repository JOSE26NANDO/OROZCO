// un alumno desea saber cual sera su calificacion final en la materia de 
// Algoritmos. dicha calificacion se compone de los siguientes porcentajes:
// 55 MOD   del promedio de sus tres calificaciones parciales. 
// 30 MOD   de la calificacion del examen final.
// 15	 MOD   de la calificacion de un trabajo final.
//entrada:parcial 1,2,3 (leer),promedioP <- (parcial1+parcial2+parcial3)/3(calculando)
//proceso:notaFinaltrabajo <- notaTrabajo*0.15(calculando)
//salida:nota final
Algoritmo ejercicio6
	Definir parcial1,parcial2,parcial3,promedioP,notasParcial Como Real
	Definir examen_final,notaExamen Como Real
	Definir notaTrabajo,notaFinaltrabajo Como Real
	Definir notafinal Como Real
	Escribir 'Digite las 3 notas de los pariales'
	Leer parcial1,parcial2,parcial3
	promedioP <- (parcial1+parcial2+parcial3)/3
	notasParcial <- promedioP*0.55
	Escribir 'digite la nota del examen final: '
	Leer examen_final
	notaExamen <- examen_final*0.3
	Escribir 'Digite la nota del trabajo final: '
	Leer notaTrabajo
	notaFinaltrabajo <- notaTrabajo*0.15
	notafinal <- notasParcial+notaExamen+notaFinaltrabajo
	Escribir 'La calificacion final es: ',notafinal
FinAlgoritmo
