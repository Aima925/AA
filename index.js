#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowtitle = chalkAnimation.rainbow('lets start calculation...');
    await sleep();
    rainbowtitle.stop();
}
await welcome();
async function askquestion() {
    await inquirer
        .prompt([
        {
            type: "number",
            name: "num1",
            message: "enter number 1:"
        },
        {
            type: "list",
            name: "operations",
            message: "select operator:\n",
            choices: ["addition'+'", "multiplication'*'", "subtraction'-'", "division'/'"]
        },
        {
            type: "number",
            name: "num2",
            message: "enter number 2:"
        }
    ])
        .then((answers) => {
        console.log(answers);
        let num1 = answers.num1;
        let num2 = answers.num2;
        if (answers.operations == "addition'+'") {
            let a = num1 + num2;
            console.log("the sum is= " + a);
        }
        else if (answers.operations == "multiplication'*'") {
            let m = num1 * num2;
            console.log("the sum is " + m);
        }
        else if (answers.operations == "subraction'-'") {
            let s = num1 - num2;
            console.log("the sum is" + s);
        }
        else if (answers.operations == "division'/'") {
            let d = num1 / num2;
            console.log("the sum is " + d);
        }
    });
}
;
//askquestion();
async function startAgain() {
    do {
        await askquestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Want to continue? Yes or No?"
        });
    } while (again.restart == 'Yes' || again.restart == 'yes' || again.restart == 'YES');
}
startAgain();
