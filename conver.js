const apiKey = '8e469b0defe9cda70f6125bf';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// Função para consulta à taxa de câmbio via API
// Função Try/Catch
async function getExchangeRate(daMoeda,paraMoeda){
    try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();

        if(data.result === "success"){
            return data.conversion_rates[paraMoeda];
        }else{
            throw new Error('Erro ao buscar a taxa de câmbio');
        }
    }catch (Error){
        console.error("Erro:", Error);
        return null;
    }
}

document.getElementById ("currency-converter").addEventListener("submit", async function(event){
    event.preventDefault();
    // Obter valores de entrada
    const valor = parseFloat(document.getElementById("amount").value);
    const daMoeda = document.getElementById("daMoeda").value;
    const paraMoeda = document.getElementById("paraMoeda").value;
 
    const exchangeRate = await getExchangeRate(daMoeda, paraMoeda);
 
    if(exchangeRate) {
        const convertedValue= valor * exchangeRate;
        //  console.log (convertedValue);
        const conversao = document.getElementById('result');
        conversao.textContent = `Resultado: ${convertedValue.toFixed(2)} ${paraMoeda}`;
 
    } else {
        alert('Erro ao buscar a cotação. Tente novamente')
    }
});
 
