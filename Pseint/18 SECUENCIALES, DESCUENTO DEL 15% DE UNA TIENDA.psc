// Ejercicio 5: Una tienda ofrece un descuento del 15 MOD  sobre el total de la 
// compra y un cliente desea saber cuanto deberas pagar finalmente por su compra
//entrada:Solicitar al cliente el monto total de la compra
//proceso:Calcular el descuento (precio*0.15)
//salida:Calcular el monto final a pagar
Algoritmo ejercicio5
	Definir precio,descuento,precio_final Como Real
	Escribir 'digite el precio a pagar: '
	Leer precio
	descuento <- precio*0.15
	precio_final <- precio-descuento
	Escribir 'el precio a pagar es de: ',precio_final
FinAlgoritmo
