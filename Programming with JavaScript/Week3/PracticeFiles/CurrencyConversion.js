var currencyOne = 100;
var currencyTwo = 0;
var changingRate = 1.5;

function currencyConverting(currency,rate)
{
    return currency*rate;
}

var currencyTwo=currencyConverting(currencyOne,changingRate);
console.log(currencyTwo);