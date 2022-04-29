const igv = 1.18;
const tipoCambio = 3.80;

function convertirTarifa(){
    const input = document.getElementById("hab1")
    const tarifaAyenda = input.value;
    const tarifaFinal = Math.round(tarifaAyenda * igv * tipoCambio);
    const resultP = document.getElementById("ResultP");
    const resultP2= document.getElementById("ResultP2");
    resultP.innerText = "El precio en soles y con igv es de: " + tarifaFinal;
    resultP2.innerText = "El igv es: " + igvHab + "," + "Tipo de cambio: " + tipoCambio; 
};