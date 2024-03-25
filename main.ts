#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber: number = Math.floor(Math.random() * 6 + 1); //this

let answer = await inquirer.prompt([
  {
    type: "number",
    name: "myNumber",
    message: "Please Guess the number between 1 to 6 ?",
  },
]);
if (answer.myNumber === randomNumber) {
  console.log("Congratulation!! You Guess Write Number");
} else if (answer.myNumber > 6) {
  console.log("Sorry!! Please select number between 1 to 6");
} else {
  console.log("Wrong Number");
}
console.log("the end")