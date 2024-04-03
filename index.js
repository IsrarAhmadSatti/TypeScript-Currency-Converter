#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright("\tWelcome to Currency Converter"));
async function converter() {
    let { amount, from, to } = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount you want to convert: ",
        },
        {
            name: "from",
            type: "list",
            message: "From which currency you want to convert: ",
            choices: ["PKR", "GBP", "EUR", "USD", "SAR"],
        },
        {
            name: "to",
            type: "list",
            message: "To which currency you want to convert: ",
            choices: ["PKR", "GBP", "EUR", "USD", "SAR"],
        },
    ]);
    if (isNaN(amount) || amount <= 0) {
        console.log(chalk.red("Invalid amount. Please enter a valid number."));
        return;
    }
    if (from === to) {
        console.log(chalk.redBright("You can't convert the same currency to the same currency"));
    }
    else {
        if (from === "PKR") {
            if (to === "GBP") {
                let value = parseInt(amount) / 350;
                console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
            }
            else if (to === "EUR") {
                let value = parseInt(amount) / 300;
                console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
            }
            else if (to === "USD") {
                let value = parseInt(amount) / 278;
                console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
            }
            else if (to === "SAR") {
                let value = parseInt(amount) / 74;
                console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
            }
        }
    }
    if (from === "GBP") {
        if (to === "PKR") {
            let value = parseInt(amount) * 350;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
        else if (to === "EUR") {
            let value = parseInt(amount) * 0.86;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
        else if (to === "USD") {
            let value = parseInt(amount) * 1.26;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
        else if (to === "SAR") {
            let value = parseInt(amount) * 4.74;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
    }
    if (from === "EUR") {
        if (to === "PKR") {
            let value = parseInt(amount) * 300;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
        else if (to === "GBP") {
            let value = parseInt(amount) * 0.86;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
        else if (to === "USD") {
            let value = parseInt(amount) * 1.08;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
        else if (to === "SAR") {
            let value = parseInt(amount) * 4.06;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
    }
    if (from === "USD") {
        if (to === "PKR") {
            let value = parseInt(amount) * 278;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
        else if (to === "GBP") {
            let value = parseInt(amount) * 0.79;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
        else if (to === "EUR") {
            let value = parseInt(amount) * 0.92;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
        else if (to === "SAR") {
            let value = parseInt(amount) * 3.75;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
    }
    if (from === "SAR") {
        if (to === "PKR") {
            let value = parseInt(amount) * 74;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
        else if (to === "GBP") {
            let value = parseInt(amount) * 0.21;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
        else if (to === "EUR") {
            let value = parseInt(amount) * 0.25;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
        else if (to === "USD") {
            let value = parseInt(amount) * 0.27;
            console.log(chalk.blueBright(amount, from, "is =", value.toFixed(3), to));
        }
    }
    let go = await inquirer.prompt([
        {
            name: "restart",
            type: "list",
            message: "Do you want to convert more: ",
            choices: ["Yes", "No"],
        }
    ]);
    if (go.restart === "Yes") {
        await converter();
    }
    else {
        console.log(chalk.greenBright("Thank you for using our currency converter."));
    }
}
await converter();
