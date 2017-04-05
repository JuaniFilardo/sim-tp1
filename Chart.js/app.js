

function graficar () {

    var string = $("#inputFrecuencias").val();

    if (string) {
        try {
            var datos = JSON.parse("[" + string + "]");
        } catch(e) {
            alert("Formato incorrecto. Ingrese los números separados por comas.");
        }
		// hace el gráfico con los valores ingresados por el usuario
        // este gráfico aparece abajo del otro
        showBarChart(datos,$("#canvasBarChart"));

		// vector del mismo tamaño que el de datos, pero contendrá
		// en cada uno de sus casilleros el mismo número, resultante de:
		// sum(frecuencias)/cantidad de intervalos
		// ejemplo: si hay 1000 números en 10 intervalos, cada casillero
		// tendrá el número 10

		var datosReferencia = datos;

		// contador, almacenará la sumatoria de las frecuencias
		var cont = 0;

		// hago la sumatoria
		for (var i = 0; i < datos.length; i++) {
			cont += datos[i];
		}
		// el valor ideal sería
		var valorIdeal = cont/datos.length;
		// seteo el valor en cada casilla
		for (var j = 0; j < datos.length; j++) {
			datosReferencia[j] = valorIdeal;
		}

		// hace el gráfico que tiene los valores ideales
		showBarChart(datosReferencia,$("#canvasBarChartReferencia"));
    }
    return undefined;
}
