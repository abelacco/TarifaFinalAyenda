const igv = 1.18;
const tipoCambio = 3.80;
const igvXtc = igv * tipoCambio;

function tarifaTotal(h1,h2,h3,h4) {
    return h1 + h2 + h3 + h4;
}

function convertirTarifa(){
    const input = document.getElementById("hab1").value;
    const input2 = document.getElementById("hab2").value;
    const input3 = document.getElementById("hab3").value;
    const input4 = document.getElementById("hab4").value;
    const noche = document.getElementById("noche").value;
    const tarifaFinal1 = Math.round(input * igvXtc);
    const tarifaFinal2 = Math.round(input2 * igvXtc);
    const tarifaFinal3 = Math.round(input3 * igvXtc);
    const tarifaFinal4 = Math.round(input4 * igvXtc);
    const porNoche1 = tarifaFinal1 / noche;
    const porNoche2 = tarifaFinal2 / noche;
    const porNoche3 = tarifaFinal3 / noche;
    const porNoche4 = tarifaFinal4 / noche;
    const ultimaTarifa = tarifaTotal(tarifaFinal1,tarifaFinal2,tarifaFinal3,tarifaFinal4); 
    const porNocheTotal = ultimaTarifa / noche;
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio en soles y con igv es de: " + 
    "\nHabitacion 1: " + tarifaFinal1 + "    Precio por noche:  " + porNoche1 + " soles" +
    "\nHabitacion2: " + tarifaFinal2 + "    Precio por noche:  " + porNoche2 + " soles" +
    "\nHabitacion3: " + tarifaFinal3 + "    Precio por noche:  " + porNoche3 + " soles" +
    "\nHabitacion4: " + tarifaFinal4 + "    Precio por noche:  " + porNoche4 + " soles" +
    "\nEl total es : " + ultimaTarifa + " soles" + "    Precio por noche:  " + porNocheTotal + " soles" 

};



