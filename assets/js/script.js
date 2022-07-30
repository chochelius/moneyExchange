let cantidad = document.getElementById('cantidad');
let divisa = '';
let resultado = document.getElementById('resultado');
let boton = document.getElementById('boton');
let canvas = document.getElementById('canvas1');
let dailyIndicators = fetch('https://miindicador.com/api/indicadores.json'[Array, Object]);
console.log(dailyIndicators);
//get uf value and date from api
let error = {}
let formulario = document.getElementById('formulario');


let miIndicador = fetch('https://mindicador.cl/api').then(function (response) {
    return response.json();
}).then((dailyIndicators) => {
    allDayliIndicators = dailyIndicators;
    console.log("conectado", miIndicador());

}).catch(function (error) {
    console.log('Requestfailed', error);
    error = error
});


let monto = 0;


// search id and values in dailyIndicators object

search = (id) => {
    for (let key in dailyIndicators) {
        if (key == id) {
            divisa = dailyIndicators[key];
        };  
    };
};


captureAmmount = () => {
    monto = cantidad.value;
    console.log(monto);
    if (monto == '') {
        alert("Ingrese una cantidad");
    } else if (monto < 0) {
        alert("Ingrese una cantidad mayor a 0");
    }
    else if (miIndicador == Error) {
        alert("Error al conectar con la API");
    } else {
    convertir();
    makeGraph();}
}

convertir = () => {
    divisa = divisa.valor;
    console.log(divisa);
    cantidad = parseInt(cantidad);
    suma = cantidad * divisa;
    resultado.innerHTML+= '<p class="fs-3 text-light> El resultado es ' + suma + 'el valor actual de la divisa es ' + divisa + '</p>';
    console.log(suma);
}


//make 400x400px line graph in canvas using fecha y valor extracted from API and draw it
var chart = new CanvasJS.Chart("#canvas1", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Simple Line Chart"
	},
	data: [{        
		type: "line",
      	indexLabelFontSize: 16,
		dataPoints: [ 
            // get datapoints "fecha" y "valor" from https://mindicador.cl/api/${divisa}/{2022
            { label: "1", y: dailyIndicators.divisa.value.valor },
            { label: "2", y: dailyIndicators.divisa.value.valor },
            { label: "3", y: dailyIndicators.divisa.value.valor },
            { label: "4", y: dailyIndicators.divisa.value.valor },
            { label: "5", y: dailyIndicators.divisa.value.valor },
            { label: "6", y: dailyIndicators.divisa.value.valor },
            { label: "7", y: dailyIndicators.divisa.value.valor },
            { label: "8", y: dailyIndicators.divisa.value.valor },
            { label: "9", y: dailyIndicators.divisa.value.valor },
            { label: "10", y: dailyIndicators.divisa.value.valor }
		]
	}]
});
chart.render();



// on change of select element, update result and graph
boton.onchange = () => {
    search(divisa.value);

    convertir();
    makeGraph();
}
