

function graficar () {

    var string = $("#inputFrecuencias").val();

    if (string) {
        try {
            var datos = JSON.parse("[" + string + "]");
        } catch(e) {
            alert("Formato incorrecto. Ingrese los números separados por comas.");
        }
        showBarChart(datos);
    }
    return undefined;
}
