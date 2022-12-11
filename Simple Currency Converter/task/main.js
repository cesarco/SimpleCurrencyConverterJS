//let input = require('sync-input');
const input = require('sync-input');
//let userInput = input("prompt");
let USD = 1;
let convert = "";
console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);
let currencies = ['JPY', 'EUR', 'RUB', 'USD', 'GBP'];
const currencies_ = {USD: 1.0, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75};
console.log("What do you want to do?");
console.log("1-Convert currencies 2-Exit program");
let options = [1, 2];
let option = Number(input());

    while(!options.includes(option)) {
        console.log("Unknown input");
        console.log("What do you want to do?");
        console.log("1-Convert currencies 2-Exit program");
        option = Number(input());

    }


//if(option == 1){
while(option == 1){
//let currency = input("Type the currency you wish to convert: ").toUpperCase();
    console.log("What do you want to convert?");
    let from = input("From: ").toUpperCase();
    if(currencies.includes(from)  ){
        let to = input("To: ").toUpperCase();

        if(currencies.includes(to)){
            let amount = input("Amount: ");

            if(!isNaN(Number(amount)) ){
                amount = Number(amount);

                if(amount >= 1) {

                    convert = amount / currencies_[from] * currencies_[to];

                    convert = convert.toFixed(4);
                    console.log(`Result: ${amount} ${from} equals ${convert} ${to}`);
                    console.log("What do you want to do?");
                    console.log("1-Convert currencies 2-Exit program");
                    option = Number(input());

                }else{
                    console.log("The amount cannot be less than 1");
                }
            }else {
                console.log("The amount has to be a number");
            }
        }else{
            console.log("Unknown currency");
        }
    }else{
        console.log("Unknown currency");
        console.log("What do you want to converet?");
        console.log("1-Convert currencies 2-Exit program");
        option = Number(input());
    }


    while(!options.includes(option)) {
        console.log("Unknown input");
        console.log("What do you want to convert?");
        console.log("1-Convert currencies 2-Exit program");
        option = Number(input());

    }
}

    console.log("Have a nice day!");
