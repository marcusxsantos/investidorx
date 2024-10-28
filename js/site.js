const API_URL = "https://brasilapi.com.br/api";

async function getStockQuote(symbol) {
    const response = await fetch(`${API_URL}/cvm/corretoras/${symbol}`);
    const data = await response.json();
    return data;
}

$(async function () {
    await getStockQuote('PETR4');
});