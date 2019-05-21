const readline = require("readline");
const number = readline.createInterface({

  input: process.stdin,
  output: process.stdout,

});
const ask = (callback) =>
  new Promise(resolve =>
    number.question(callback, answer => resolve(answer)));

const addNumbersToSum = async function () {
  const addFirst = await ask("what is your first number?");
  const addSecond = await ask("what is your second number?");
  const addThierd = await ask("what is your thierd number?");
  console.log(`firstNo= ${addFirst}\nsecondNo=${addSecond}\nthirdNo=${addThierd} `);
  const sum = parseFloat(addFirst) + parseFloat(addSecond) + parseFloat(addThierd);
  console.log('total sum= ' + sum);

  number.close();
};

addNumbersToSum();



//------------------------------
// const readline = require("readline");
// const rl = readline.createInterface({

//   input: process.stdin,
//   output: process.stdout

// });

// const ask = function (question) {
//   return new Promise(resolve =>
//     rl.question(question, answer => resolve(answer)));

// };
// const talkToPerson = async function () {

//   const firstname = await ask("What is your firstname?");
//   const lastname = await ask("What is your lastname?");
//   const country = await ask("Where are you from?");
//   const job = await ask("What is your job?");
//   const age = await ask("How old are you?");

//   console.log(
//     `Hello ${firstname} ${lastname} from ${country}. You are a ${job} and your old is ${age} years old.`
//   );
//   rl.close();
// };

// talkToPerson();