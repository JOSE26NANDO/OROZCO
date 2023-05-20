//ejercicio 4:Un profesor prepara tres cuestionrios para una evaluacion Final:
//A,BYC. Se sabe que se tarda 5 minutos en revisar el cuestionario A,
//8 en revisar el cuestonario B y 6 en el C.La cantida de examenes de cada 
//tipo se entran por teclado. ¿cuantashoras y cuantos minutos se tardara en 
//revisar todas las evaluaciones?
//entrada:cantidad(leer),tiempo, cantida 5,8,6(calculando)
//proceso:horas <- trunc(tiempo_total / 60);minutos <- tiempo_total mod 60
//salida:minutos

proceso ejercicio4
	definir cantidadA,cantidadB,cantidadC como enteros;
	Definir tiempoA,tiempoB,tiempoC como enteros;
	Definir tiempo_total Como Entero;
	Definir horas, minutos Como Enteros;
	
	Escribir "Digite la cantidad de cuestionarios A: ";
	leer cantidadA;
	Escribir "Digite la cantidad de cuestionarios B: ";
	Leer cantidadB;
	Escribir "Digite la cantidad de cuestionarios c: ";
	Leer cantidadC;
	
	//calcular los minutos que se tardara por cada cuestionario 
	tiempoA <- cantidadA * 5;
	tiempoB <- cantidadB * 8;
	tiempoC <- cantidadC * 6;
	
	//calculamos el tiempo total que le toma revisar todos los cuestionario
	tiempo_total <- tiempoA + tiempoB + tiempoC;
	
	//calculamos las horas y minutos
	horas <- trunc(tiempo_total / 60);
	minutos <- tiempo_total mod 60;
	
	Escribir "se tardara ",horas," horas y ",minutos,"minutos"
FinProceso
	