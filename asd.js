const igv = 1.18;
const tipoCambio = 3.80;

function convertirTarifa(){
    const input = document.getElementById("hab1")
    const tarifaAyenda = input.value;
    const tarifaFinal = Math.round(tarifaAyenda * igv * tipoCambio);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio en soles y con igv es de: " + tarifaFinal;
};


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TarifaFinal</title>
</head>
<body>
    <header></header>
        <h1>
        Tarifa final en SOLES y con IGV
        </h1>
    </header>
    <section>
        <h2>Ingresa las tarifas del PMS(AYENDA)</h2>
        <form>
            <label for="hab1">Habitacion 1</label>
            <input id="hab1" type="number" />
            <button type="button" onclick=convertirTarifa> 
                Precio Final
            </button>
            
            <p id= "ResultP"></p>
                    
        </form>
    </section>
    <script src ="tarifa.js"></script>
</body>
</html>