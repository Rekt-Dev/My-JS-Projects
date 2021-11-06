// assuming you have a <div id='current-btc-price' style='font-weight: bold; font-size: 18px;'></div>
window
    .fetch("https://data.messari.io/api/v1/assets/btc/metrics/market-data")
    .then(res => res.json())
    .then(messariRes => messariRes.data)
    .then(
        payload =>
        (document.getElementById("current-btc-price").innerHTML =
            '$' + payload.market_data.price_usd.toLocaleString())
    );
//Write current reported marketcap to a HTML div
// assuming you have a <div id='current-btc-marketcap' style='font-weight: bold; font-size: 18px;'></div>
window
    .fetch("https://data.messari.io/api/v1/assets/btc/metrics")
    .then(res => res.json())
    .then(messariRes => messariRes.data)
    .then(
        payload =>
        (document.getElementById("current-btc-marketcap").innerHTML =
            '$' + payload.marketcap.current_marketcap_usd.toLocaleString() + 'wen mewn sire ?' )
    );