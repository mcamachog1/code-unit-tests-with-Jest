
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromDollarToYen(dollar){
    let yen =  dollar/1.2 * oneEuroIs['JPY']
    return parseFloat(yen.toFixed(2))
}
function fromEuroToDollar(euro){
    return euro*oneEuroIs['USD']
}

function fromYenToPound(yan){
    let pound =  yan/oneEuroIs['JPY'] * oneEuroIs['GBP']
    return parseFloat(pound.toFixed(2))
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
