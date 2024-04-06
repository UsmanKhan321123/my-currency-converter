#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.3,
    PKR: 277.54,
};
let input_currency = await inquirer.prompt([
    {
        name: "fromCurency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        message: "Please select the currency form which you want to convert.",
    },
    {
        name: "toCurency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        message: "Please select the currency in which you want to convert.",
    },
    {
        name: "amount",
        type: "input",
        message: "please enter the amount you want to convert.",
    },
]);
let formcurrency = currency[input_currency.fromCurency];
let tocurrency = currency[input_currency.toCurency];
let amount = input_currency.amount;
let baseCurrency = amount / formcurrency;
let requiredAmount = baseCurrency * tocurrency;
let rounOffAmount = Math.round(requiredAmount);
console.log(rounOffAmount);
