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



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TarifaFinal</title>
    <link rel="stylesheet" href="./style.css" />
</head>
<body>
    <header>
        <h1 id="h11">
        Bienvenido a precios finales(SOLES y con IGV)
        </h1>
    </header>
    <section>
        <h2 id="header2">Ingresa la tarifa del PMS(AYENDA)</h2>
        <form>
            <label for="hab1">Habitacion 1</label>
            <input id="hab1" type="number" />
            <label for="noche">Noches</label>
            <input id="noche" type="number" />
            <button type="button" onclick="convertirTarifa()"> 
                Precio Final
            </button>
            <p id= "ResultP"></p>                          
        </form>
        <form>
            <label for="hab2">Habitacion 2</label>
            <input id="hab2" type="number" />
            <label for="noche2">Noches</label>
            <input id="noche2" type="number" />
            <button  type="button" onclick="convertirTarifa2()"> 
                Precio Final
            </button>
            
            <p id= "ResultP2"></p>
        </form>
        
    </section>
    <h1 id="firma"> Elaborado por abelacco</h1>
    <script src ="tarifa.js"></script>
</body>