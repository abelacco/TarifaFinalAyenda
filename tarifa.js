const igv = 1.18;
const tipoCambio = 3.80;

function convertirTarifa(){
    const input = document.getElementById("hab1");
    const noches = document.getElementById("noche");
    const nochesValue = noches.value;
    const value = input.value;
    const tarifaAyenda = value;
    const tarifaFinal = Math.round(tarifaAyenda * igv * tipoCambio);
    const porNoche = tarifaFinal / noches.value ;
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio en soles y con igv es de: " + tarifaFinal + "\nEl precio por noche es: " + porNoche;

};

function convertirTarifa2(){
    const input2 = document.getElementById("hab2");
    const noches = document.getElementById("noche2");
    const nochesValue = noches.value;
    const value2 = input2.value;
    const tarifaAyenda = value2;
    const tarifaFinal = Math.round(tarifaAyenda * igv * tipoCambio);
    const porNoche = tarifaFinal / noches.value ;
    const resultP2 = document.getElementById("ResultP2");
    resultP2.innerText = "El precio en soles y con igv es de: " + tarifaFinal + "\nEl precio por noche es: " + porNoche;
    
};

