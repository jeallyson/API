async function pesquisa() {
    const respostaPesquisa = await fetch('https://api.hgbrasil.com/finance?key=b33d63c0&format=json-cors')
    const json = await respostaPesquisa.json()

    let f = [
        dollar = new Moeda(json.results.currencies.USD.buy, json.results.currencies.USD.variation),
        euro = new Moeda(json.results.currencies.EUR.buy, json.results.currencies.EUR.variation),
        pound = new Moeda(json.results.currencies.GBP.buy, json.results.currencies.GBP.variation),
        argentine = new Moeda(json.results.currencies.ARS.buy, json.results.currencies.ARS.variation),
        canadian = new Moeda(json.results.currencies.CAD.buy, json.results.currencies.CAD.variation),
        australian = new Moeda(json.results.currencies.AUD.buy, json.results.currencies.AUD.variation),
        japanese = new Moeda(json.results.currencies.JPY.buy, json.results.currencies.JPY.variation),
        renminbi = new Moeda(json.results.currencies.CNY.buy, json.results.currencies.CNY.variation)
    ]

    // f.push(dollar, euro, pound, argentine, canadian, australian, japanese)
    console.log(f)
}

pesquisa()