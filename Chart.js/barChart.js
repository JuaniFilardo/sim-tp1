
var dataBar = {
    labels: ["a"],
    datasets: [
        {
            label: "Frecuencia",
            backgroundColor: "#ff0000",
            borderColor:"#ff00ff",
            borderWidth: 1,
            data: [28, 16, 34, 24, 10, 30, 31, 28, 16, 34, 24, 10]
        }
    ]
};

var optionsBarChart = {
    responsive: false,
    reverse: false,
    scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
};

var datosChart = {
    type: 'bar',
    data: dataBar,
    options: optionsBarChart
};

/**
* Muestra el gráfico de barras
*/
var showBarChart = function (datos,canvas) {

    if(chart!=null){
        chart.destroy();
    }
    dataBar.datasets[0].data = datos;
    setLimites(datos);
    dataBar.datasets[0].backgroundColor  = getBackgroundColors(datos.length);
    dataBar.datasets[0].borderColor  = getBorderColors(dataBar.datasets[0].backgroundColor);
    var chart = new Chart(canvas, datosChart);
};


// recibe el vector, calcula el largo y en base a eso setea los limites
// por alguna razón no anda si le paso el largo directamente
var setLimites = function (datos) {
    var n = datos.length;
    var limiteFijo = 1/n;
    //limiteFijo = limiteFijo.toFixed(4);
    var foo = 1;

    for (var i = 0; i < n; i++) {
        dataBar.labels[i] = (foo * limiteFijo);
        foo++;
    }
};


/**
* Función que recibe un array de colores y crea otro array
* con el mismo formato y colores, pero los hace opacos (alpha 1)
*/
function getBorderColors(backgroundColors) {

    var colors = [];

    for (var i = 0; i < backgroundColors.length; i++) {
        color = backgroundColors[i];
        color = color.substring(0,color.length - 4);
        color += '1)';
        colors.push(color);
    }
    return colors;
};

/*
* Devuelve un array de n colores aleatorios con el siguiente formato:
* "rgba(255,99,132,0.5)"
* Notar que el alpha es siempre 0.5
*/
function  getBackgroundColors(n) {
    var colors = [];

    for (var j = 0; j < n; j++) {

        var color = 'rgba(';

        for (var i = 0; i < 3; i++ ) {
            color += Math.floor(Math.random() * 255) + ',';
        }
        color += '0.5)';
        colors.push(color);
    }
    return colors;
};
