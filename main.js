async function cotacao()
{
    const respostaCotacao = await fetch ('https://api.hgbrasil.com/finance?key=b33d63c0&format=json-cors')
    const json = await respostaCotacao.json()

    document.getElementById("usd").innerHTML = json.results.currencies.USD.buy;

    document.getElementById("eur").innerHTML = json.results.currencies.EUR.buy; 

    document.getElementById("gbp").innerHTML = json.results.currencies.GBP.buy;

    document.getElementById("ars").innerHTML = json.results.currencies.ARS.buy;

    document.getElementById("cad").innerHTML = json.results.currencies.CAD.buy;

    document.getElementById("aud").innerHTML = json.results.currencies.AUD.buy;

    document.getElementById("jpy").innerHTML = json.results.currencies.JPY.buy;

    document.getElementById("cny").innerHTML = json.results.currencies.CNY.buy;
    
    document.getElementById("fox-bit").innerHTML = json.results.bitcoin.foxbit.last;

    document.getElementById("mercado-bitcoin").innerHTML = json.results.bitcoin.mercadobitcoin.last;

    document.getElementById("coinbase").innerHTML = json.results.bitcoin.coinbase.last;

    document.getElementById("bitstamp").innerHTML = json.results.bitcoin.bitstamp.last;

}



cotacao();