const apiKey = '8e469b0defe9cda70f6125bf';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}latest/`;

// Função para consulta à taxa de câmbio via API
// Função Try/Catch
async function getExchangeRate(daMoeda,paraMoeda){
    try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = response.json();

        if(data.result === "success"){
            return data.conversion_rates[paraMoeda];
        }else{
            throw new Error('Erro ao buscar a taxa de câmbio');
        }
    }catch (Error){
        console.error("Erro:", error);
        return null;
    }
}