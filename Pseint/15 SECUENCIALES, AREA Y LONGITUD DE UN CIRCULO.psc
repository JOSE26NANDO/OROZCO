// ejercicio 2: hacer un programa para ingresar el radio de un circulo y se
// reporte su area y la longitud de la circunferencia.
// area = pi * radio Y 2
// longitud = 2 * pi * radio
//entrada:radio(leer),area,long(calculando)
//proceso:area <- pi*radio*radio , lon <- 2*pi*radio
//salida:area,long
Algoritmo ejercicio2
	Definir radio,area,lon Como Real
	Escribir 'degite el valor de radio:'
	Leer radio
	area <- pi*radio*radio
	lon <- 2*pi*radio
	Escribir 'el area de la circunferencia es: ',area
	Escribir 'la longitud es: ',lon
FinAlgoritmo
