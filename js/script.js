let numberToConverse = document.querySelector(".js-numberToConverse"); //wartość wpisana przez użytkownika

let currencyElement = document.querySelector ("select.form__field"); //wybor waluty

let counterElement = document.querySelector(".js-counter"); //oblicz

let formElement = document.querySelector(".js-form"); //cały formularz

// let numberToConverseVal = numberToConverse.value;
// let currencyCourseVal = currencyCourse.value;


let button = document.querySelector(".js-submit");



const rateUSD = 4.4018;
const rateEUR = 4.6899;
const rateGBP = 5.2957;
const rateCHF = 4.7679;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +numberToConverse.value;
let currency = currencyElement.value;
let result;

    switch (currency) {
        case "USD":
            result = amount / rateUSD;
            break;
        
        case "EUR": 
            result = amount / rateEUR;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "CHF": 
            result = amount / rateCHF;
            break;
    }
counterElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
//result;
//`${result} ${currency}`;
//`${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;

});




