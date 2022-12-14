let inputMoeda = document.getElementById("input-moeda");
let moedaCompra = document.getElementById("saida");

// let saida = document.getElementById("saida");

async function cotacao() {
    const respostaCotacao = await fetch('https://api.hgbrasil.com/finance?key=b33d63c0&format=json-cors')
    const json = await respostaCotacao.json()

    document.getElementById("usd").innerHTML = json.results.currencies.USD.buy.toLocaleString("pt-BR");

    document.getElementById("eur").innerHTML = json.results.currencies.EUR.buy.toLocaleString("pt-BR");

    document.getElementById("gbp").innerHTML = json.results.currencies.GBP.buy.toLocaleString("pt-BR");

    document.getElementById("ars").innerHTML = json.results.currencies.ARS.buy.toLocaleString("pt-BR");

    document.getElementById("cad").innerHTML = json.results.currencies.CAD.buy.toLocaleString("pt-BR");

    document.getElementById("aud").innerHTML = json.results.currencies.AUD.buy.toLocaleString("pt-BR");

    document.getElementById("jpy").innerHTML = json.results.currencies.JPY.buy.toLocaleString("pt-BR");

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


    switch (moeda) 
    {
        case 'dólar americano':
            moedaCompra.innerHTML = `${moeda} 
Variation: ${json.results.currencies.USD.variation.toLocaleString("pt-BR")}
Buy: ${json.results.currencies.USD.buy.toLocaleString("pt-BR")}`;
            break;

        case 'euro':
            moedaCompra.innerHTML = `${moeda} 
Variation: ${json.results.currencies.EUR.variation.toLocaleString("pt-BR")}
Buy: ${json.results.currencies.EUR.buy.toLocaleString("pt-BR")}`;
            break;

        case 'libra':
            moedaCompra.innerHTML = `${moeda} 
Variation: ${json.results.currencies.GBP.variation.toLocaleString("pt-BR")}
Buy: ${json.results.currencies.GBP.buy.toLocaleString("pt-BR")}`;
            break;

        case 'peso':
            moedaCompra.innerHTML = `${moeda} 
Variation: ${json.results.currencies.ARS.variation.toLocaleString("pt-BR")}
Buy: ${json.results.currencies.ARS.buy.toLocaleString("pt-BR")}`;
            break;

        case 'dólar canadense':
            moedaCompra.innerHTML = `${moeda} 
Variation: ${json.results.currencies.CAD.variation.toLocaleString("pt-BR")}
Buy: ${json.results.currencies.CAD.buy.toLocaleString("pt-BR")}`;

            break;

        case 'dólar australiano':
            moedaCompra.innerHTML = `${moeda} 
Variation: ${json.results.currencies.AUD.variation.toLocaleString("pt-BR")}
Buy: ${json.results.currencies.AUD.buy.toLocaleString("pt-BR")}`;
            break;

            case 'iene':
                moedaCompra.innerHTML = `${moeda} 
Variation: ${json.results.currencies.JPY.variation.toLocaleString("pt-BR")}
Buy: ${json.results.currencies.JPY.buy.toLocaleString("pt-BR")}`;
                break;

                case 'renminbi':
                  moedaCompra.innerHTML = `${moeda} 
Variation: ${json.results.currencies.CNY.variation.toLocaleString("pt-BR")}
Buy: ${json.results.currencies.CNY.buy.toLocaleString("pt-BR")}`;
                    break;

        default:
            alert("Moeda não encontrada. Segestões: dólar americano, euro, libra, peso, dólar canadense, dólar australiano, iene ou renminbi")

    }
}