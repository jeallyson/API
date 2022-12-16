let inputMoeda = document.getElementById("input-moeda");
let moedaCompra = document.getElementById("saida");
let variacao = document.querySelector(".variacao");

// let saida = document.getElementById("saida");

async function cotacao() {
    const respostaCotacao = await fetch('https://api.hgbrasil.com/finance?key=b33d63c0&format=json-cors')
    const json = await respostaCotacao.json()



    if (json.results.currencies.USD.variation <= 0)
{
    variacao.style.background = "#fa5c7c"; 
}
else {
    variacao.style.background = "#6cb908"; 
}

if (json.results.currencies.EUR.variation <= 0)
{
    variacao.style.background = "#fa5c7c"; 
}
else {
    variacao.style.background = "#6cb908"; 
}

if (json.results.currencies.GBP.variation <= 0)
{
    variacao.style.background = "#fa5c7c"; 
}
else {
    variacao.style.background = "#6cb908"; 
}

if (json.results.currencies.ARS .variation <= 0)
{
    variacao.style.background = "#fa5c7c"; 
}
else {
    variacao.style.background = "#6cb908"; 
}

if (json.results.currencies.CAD.variation <= 0)
{
    variacao.style.background = "#fa5c7c"; 
}
else {
    variacao.style.background = "#6cb908"; 
}

if (json.results.currencies.AUD.variation <= 0)
{
    variacao.style.background = "#fa5c7c"; 
}
else {
    variacao.style.background = "#6cb908"; 
}

if (json.results.currencies.JPY.variation <= 0)
{
    variacao.style.background = "#ffffff"; 
}
else {
    variacao.style.background = "#6cb908"; 
}

if (json.results.currencies.CNY.variation <= 0)
{
    variacao.style.background = "#fa5c7c"; 
}
else {
    variacao.style.background = "#6cb908"; 
}

document.getElementById("variacao-usd").innerHTML = json.results.currencies.USD.variation.toLocaleString("pt-BR");

    document.getElementById("usd").innerHTML = json.results.currencies.USD.buy.toLocaleString("pt-BR");

    document.getElementById("variacao-eur").innerHTML = json.results.currencies.EUR.variation.toLocaleString("pt-BR");
    document.getElementById("eur").innerHTML = json.results.currencies.EUR.buy.toLocaleString("pt-BR");

    document.getElementById("variacao-gbp").innerHTML = json.results.currencies.GBP.variation.toLocaleString("pt-BR");
    document.getElementById("gbp").innerHTML = json.results.currencies.GBP.buy.toLocaleString("pt-BR");

    document.getElementById("variacao-ars").innerHTML = json.results.currencies.ARS.variation.toLocaleString("pt-BR");
    document.getElementById("ars").innerHTML = json.results.currencies.ARS.buy.toLocaleString("pt-BR");

    document.getElementById("variacao-cad").innerHTML = json.results.currencies.CAD.variation.toLocaleString("pt-BR");
    document.getElementById("cad").innerHTML = json.results.currencies.CAD.buy.toLocaleString("pt-BR");

    document.getElementById("variacao-aud").innerHTML = json.results.currencies.AUD.variation.toLocaleString("pt-BR");
    document.getElementById("aud").innerHTML = json.results.currencies.AUD.buy.toLocaleString("pt-BR");

    document.getElementById("variacao-jpy").innerHTML = json.results.currencies.JPY.variation.toLocaleString("pt-BR");
    document.getElementById("jpy").innerHTML = json.results.currencies.JPY.buy.toLocaleString("pt-BR");

    document.getElementById("variacao-cny").innerHTML = json.results.currencies.CNY.variation.toLocaleString("pt-BR");
    document.getElementById("cny").innerHTML = json.results.currencies.CNY.buy.toLocaleString("pt-BR");

    document.getElementById("fox-bit").innerHTML = json.results.bitcoin.foxbit.last.toLocaleString("pt-BR");

    document.getElementById("mercado-bitcoin").innerHTML = json.results.bitcoin.mercadobitcoin.last.toLocaleString("pt-BR");

    document.getElementById("coinbase").innerHTML = json.results.bitcoin.coinbase.last.toLocaleString("pt-BR");

    document.getElementById("bitstamp").innerHTML = json.results.bitcoin.bitstamp.last.toLocaleString("pt-BR");

    document.getElementById("variacao-ibovespa").innerHTML = json.results.stocks.IBOVESPA.variation.toLocaleString("pt-BR");

    document.getElementById("variacao-ifix").innerHTML = json.results.stocks.IFIX.variation.toLocaleString("pt-BR");

    document.getElementById("variacao-nasdaq").innerHTML = json.results.stocks.NASDAQ.variation.toLocaleString("pt-BR");

    document.getElementById("variacao-dowjones").innerHTML = json.results.stocks.DOWJONES.variation.toLocaleString("pt-BR");

}
cotacao();

async function basico() {
    const respostaCotacao = await fetch('https://api.hgbrasil.com/finance?key=b33d63c0&format=json-cors')
    const json = await respostaCotacao.json();
    let moeda = inputMoeda.value;
    let variacaoUSD = document.getElementById("variacao-eur").innerHTML = json.results.currencies.EUR.variation.toLocaleString("pt-BR");

    
    
    switch (moeda) 
    {
        case 'dólar americano':
            if(variacaoUSD > 0)
            {
                
            };
            
            moedaCompra.innerHTML = `${moeda} 
Variação: ${json.results.currencies.USD.variation.toLocaleString("pt-BR")}
Compra: ${json.results.currencies.USD.buy.toLocaleString("pt-BR")}`;
            break;

        case 'euro':
            moedaCompra.innerHTML = `${moeda} 
Variação: ${json.results.currencies.EUR.variation.toLocaleString("pt-BR")}
Compra: ${json.results.currencies.EUR.buy.toLocaleString("pt-BR")}`;
            break;

        case 'libra':
            moedaCompra.innerHTML = `${moeda} 
Variação: ${json.results.currencies.GBP.variation.toLocaleString("pt-BR")}
Compra: ${json.results.currencies.GBP.buy.toLocaleString("pt-BR")}`;
            break;

        case 'peso':
            moedaCompra.innerHTML = `${moeda} 
Variação: ${json.results.currencies.ARS.variation.toLocaleString("pt-BR")}
Compra: ${json.results.currencies.ARS.buy.toLocaleString("pt-BR")}`;
            break;

        case 'dólar canadense':
            moedaCompra.innerHTML = `${moeda} 
Variação: ${json.results.currencies.CAD.variation.toLocaleString("pt-BR")}
Compra: ${json.results.currencies.CAD.buy.toLocaleString("pt-BR")}`;

            break;

        case 'dólar australiano':
            moedaCompra.innerHTML = `${moeda} 
Variação: ${json.results.currencies.AUD.variation.toLocaleString("pt-BR")}
Compra: ${json.results.currencies.AUD.buy.toLocaleString("pt-BR")}`;
            break;

            case 'iene':
                moedaCompra.innerHTML = `${moeda} 
Variação: ${json.results.currencies.JPY.variation.toLocaleString("pt-BR")}
Compra: ${json.results.currencies.JPY.buy.toLocaleString("pt-BR")}`;
                break;

                case 'renminbi':
                  moedaCompra.innerHTML = `${moeda} 
Variação: ${json.results.currencies.CNY.variation.toLocaleString("pt-BR")}
Compra: ${json.results.currencies.CNY.buy.toLocaleString("pt-BR")}`;
                    break;

        default:
            alert("Moeda não encontrada. Sugestões: dólar americano, euro, libra, peso, dólar canadense, dólar australiano, iene ou renminbi")

    }
}