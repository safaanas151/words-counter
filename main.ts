#! /usr/bin/env node

import inquirer from "inquirer"

const answers:  {
    Sentence: string
  }  =await inquirer.prompt([
    {
        name:"Sentence",
        type:"inquirer",
        message:"Enter your sentence to count the word:"
    }
] )
// trim ka kam h words ko count kry fuzool jaga ko khtm kary slit letters bh count krta
const words = answers.Sentence.trim().split(" ")
console.log(words)

console.log(`Your sentence word count is ${words.length}`);


