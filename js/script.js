let numberToConverse = document.querySelector(".js-numberToConverse");
let currencyCourse = document.querySelector(".js-conversedNumber");
let result = document.querySelector(".js-result");

let formElement = document.querySelector(".js-form");

let numberToConverseVal = numberToConverse.value;
let currencyCourseVal = currencyCourse.value;

let radioElement1 = document.querySelector(".js-radio1__usd");
let radioElement2 = document.querySelector(".js-radio2__eur");
let radioElement3 = document.querySelector(".js-radio3__gbp");
let radioElement4 = document.querySelector(".js-radio4__chf");

let button = document.querySelector(".js-submit");

let currency;
let resultCalc;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let currencyCourseValNumber = +currencyCourseVal;
    let calc;
    let Q = +currencyCourse.value;
    let Curr = +numberToConverse.value;
    calc = Q * Curr;

    if (radioElement1.checked) {
        currency = "USD";
    }
    else if (radioElement2.checked) {
        currency = "EUR";
    }
    else if (radioElement3.checked) {
        currency = "GBP";
    }
    else if (radioElement4.checked) {
        currency = "CHF";
    }
    else {
        currency = "Brak";
    }
    let calc2 = calc.toFixed(2);

    resultCalc = calc2 + " " + currency;

    result.innerText = resultCalc;

});




