{


    const counter = (amount, currency) => {

        const rateUSD = 4.4018;
        const rateEUR = 4.6899;
        const rateGBP = 5.2957;
        const rateCHF = 4.7679;

        switch (currency) {
            case "USD":
                return amount / rateUSD;

            case "EUR":
                return amount / rateEUR;

            case "GBP":
                return amount / rateGBP;

            case "CHF":
                return amount / rateCHF;
        }
    };


    const makeResult = (amount, result, currency) => {
        const counterElement = document.querySelector(".js-counter"); //oblicz
        counterElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    }

   const onChangeSubmit = (event) => {
    event.preventDefault();

    const numberToConverse = document.querySelector(".js-numberToConverse"); //wartość wpisana przez użytkownika
    const currencyElement = document.querySelector("select.form__field"); //wybor waluty
    

    const amount = +numberToConverse.value;
    const currency = currencyElement.value;
    const result = counter (amount, currency);
    makeResult(amount, result, currency);

};

//amount, currency, result
    const init = () => {

        const formElement = document.querySelector(".js-form"); //cały formularz

        formElement.addEventListener("submit", onChangeSubmit);

        };

        init();

}


