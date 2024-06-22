// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueIndollars to yen
    let valueInYen = valueInDollar * 146.2616822429907;
    // return the dollar value
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.0055591054313099;
    // return the dollar value
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))
console.log(fromEuroToDollar(3.5))
console.log(fromDollarToYen(3.5))
console.log(fromYenToPound(1))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }