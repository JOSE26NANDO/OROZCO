// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// ejercicio 4:Un profesor prepara tres cuestionrios para una evaluacion Final:
// A,BYC. Se sabe que se tarda 5 minutos en revisar el cuestionario A,
// 8 en revisar el cuestonario B y 6 en el C.La cantida de examenes de cada 
// tipo se entran por teclado. ¿cuantashoras y cuantos minutos se tardara en 
// revisar todas las evaluaciones?
// entrada:cantidad(leer),tiempo, cantida 5,8,6(calculando)
// proceso:horas <- trunc(tiempo_total / 60);minutos <- tiempo_total mod 60
// salida:minutos
function ejercicio4() {
	var cantidada = new Number();
	var cantidadb = new Number();
	var cantidadc = new Number();
	var tiempoa = new Number();
	var tiempob = new Number();
	var tiempoc = new Number();
	var tiempo_total = new Number();
	var horas = new Number();
	var minutos = new Number();
	document.write("Digite la cantidad de cuestionarios A: ",'<BR/>');
	cantidada = Number(prompt());
	document.write("Digite la cantidad de cuestionarios B: ",'<BR/>');
	cantidadb = Number(prompt());
	document.write("Digite la cantidad de cuestionarios c: ",'<BR/>');
	cantidadc = Number(prompt());
	// calcular los minutos que se tardara por cada cuestionario 
	tiempoa = cantidada*5;
	tiempob = cantidadb*8;
	tiempoc = cantidadc*6;
	// calculamos el tiempo total que le toma revisar todos los cuestionario
	tiempo_total = tiempoa+tiempob+tiempoc;
	// calculamos las horas y minutos
	horas = Math.trunc(tiempo_total/60);
	minutos = tiempo_total%60;
	document.write("se tardara ",horas," horas y ",minutos,"minutos",'<BR/>');
}

