"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let countUpArray = [];
let countDownArray = [];

for (let i = 1, j = 10; i <= 10; i++, j--) {
  countUpArray.push(i);
  countDownArray.push(j);
}
printOut(countUpArray.join(", "));
printOut(countDownArray.join(", "));


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const secretTargetNumber = 45;
let computerGuess = 0;

while (computerGuess !== secretTargetNumber) {
  computerGuess = Math.floor(Math.random() * 60) + 1;
}
printOut("Part 2 - Found the number: " + computerGuess);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const largeTargetNumber = 789123;
let largeComputerGuess = 0;
let totalGuesses = 0;
const startTime = Date.now();
while (largeComputerGuess !== largeTargetNumber) {
  largeComputerGuess = Math.floor(Math.random() * 1000000) + 1;
  totalGuesses++;
}
const endTime = Date.now();
const timeSpentMilliseconds = endTime - startTime;
printOut("Part 3 - Target found: " + largeComputerGuess);
printOut("Total guesses: " + totalGuesses);
printOut("Time taken: " + timeSpentMilliseconds + " ms");


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primeNumbers = [];

for (let currentNumber = 3; currentNumber < 200; currentNumber++) {
  let isPrime = true;
  let divisor = 2;

  while (divisor < currentNumber) {
    if (currentNumber % divisor === 0) {
      isPrime = false;
      break;
    }
    divisor++;
  }

  if (isPrime) {
    primeNumbers.push(currentNumber);
  }
}

printOut("Part 4 - Prime numbers: " + primeNumbers.join(", "));

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
  let rowString = "";

  for (let column = 1; column <= 9; column++) {
    rowString += "K" + column + "R" + row + " ";
  }

  printOut(rowString.trim());
}


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let student = 1; student <= 5; student++) {
  const randomScore = Math.floor(Math.random() * 236) + 1;
  const percentage = (randomScore / 236) * 100;
  let grade = "";

  if (percentage >= 89) {
    grade = "A";
  } else if (percentage >= 77) {
    grade = "B";
  } else if (percentage >= 65) {
    grade = "C";
  } else if (percentage >= 53) {
    grade = "D";
  } else if (percentage >= 41) {
    grade = "E";
  } else {
    grade = "F";
  }

  printOut("Student " + student + ": Score " + randomScore + " (" + Math.round(percentage) + "%) = Grade " + grade);
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function countOccurrences(searchString, numberToFind) {
  let count = 0;
  for (let i = 0; i < searchString.length; i++) {
    if (searchString[i] === numberToFind.toString()) {
      count++;
    }
  }
  return count;
}

let throwCount = 0;
let foundStraight = false;
let foundThreePairs = false;
let foundTower = false;
let foundYahtzee = false;

do {
  throwCount++;

  const d1 = Math.floor(Math.random() * 6) + 1;
  const d2 = Math.floor(Math.random() * 6) + 1;
  const d3 = Math.floor(Math.random() * 6) + 1;
  const d4 = Math.floor(Math.random() * 6) + 1;
  const d5 = Math.floor(Math.random() * 6) + 1;
  const d6 = Math.floor(Math.random() * 6) + 1;

  const diceString = "" + d1 + d2 + d3 + d4 + d5 + d6;

  const c1 = countOccurrences(diceString, 1);
  const c2 = countOccurrences(diceString, 2);
  const c3 = countOccurrences(diceString, 3);
  const c4 = countOccurrences(diceString, 4);
  const c5 = countOccurrences(diceString, 5);
  const c6 = countOccurrences(diceString, 6);

  const countString = "" + c1 + c2 + c3 + c4 + c5 + c6;

  if (!foundStraight && countOccurrences(countString, 1) === 6) {
    foundStraight = true;
    printOut("Combination Full Straight found after " + throwCount + " throws.");
  }

  if (!foundThreePairs && countOccurrences(countString, 2) === 3) {
    foundThreePairs = true;
    printOut("Combination 3 Pairs found after " + throwCount + " throws.");
  }

  if (!foundTower && countOccurrences(countString, 4) === 1 && countOccurrences(countString, 2) === 1) {
    foundTower = true;
    printOut("Combination Tower found after " + throwCount + " throws.");
  }

  if (!foundYahtzee && countOccurrences(countString, 6) === 1) {
    foundYahtzee = true;
    printOut("Combination Yahtzee found after " + throwCount + " throws.");
  }

} while (!foundStraight || !foundThreePairs || !foundTower || !foundYahtzee);


printOut(newLine);
