"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const orgMathExp = "2 + 3 * 2 - 4 * 6";
const newMathExp = "(2 + 3) * 2 - 4 * 6";
const part1answer = 2 + 3 * (2 - 4) * 6;

printOut(orgMathExp); 
printOut(newMathExp);
printOut(part1answer);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const millimeters = (25 * 1000) + (34 * 10);
const millPrInch = 25.4;
const sumPart2 = millimeters / millPrInch;
printOut("25 meters and 34 centimeters is " + sumPart2.toFixed(2) + " inches.");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Days = 3;
const part3Hours = 12;
const part3Minutes = 14;
const part3Seconds = 45;
const part3Answer = (part3Days * 24 * 60) + (part3Hours * 60) + part3Minutes + (part3Seconds / 60);
printOut("Total time in minutes: " + part3Answer.toFixed(2));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalMinutes = 6322.52;
const days = Math.floor(totalMinutes / (24 * 60));
let remainder = (totalMinutes / (24 * 60)) - days;
const hours = Math.floor(remainder * 24);
remainder = (remainder * 24) - hours;
const minutes = Math.floor(remainder * 60);
remainder = (remainder * 60) - minutes;
const seconds = Math.floor(remainder * 60);
printOut("Result Part 4: " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dollarsToConvert = 54;
const usdToNokRate = 76 / 8.6;
const nokToUsdRate = 8.6 / 76;
const dollarsInNok = Math.round(dollarsToConvert * usdToNokRate);
const nokInUsd = Math.round(dollarsInNok * nokToUsdRate);
printOut(dollarsToConvert + " USD is " + dollarsInNok + " NOK.");
printOut(dollarsInNok + " NOK is " + nokInUsd + " USD.");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const spyText = "Det er mye mellom himmel og jord som vi ikke forstår.";
printOut("Length of text: " + spyText.length);
printOut("Character at position 19: " + spyText.charAt(19));
printOut("8 characters from position 35: " + spyText.substring(35, 35 + 8));
printOut("Index where 'jord' starts: " + spyText.indexOf("jord"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Is 5 greater than 3? " + (5 > 3));
printOut("Is 7 greater than or equal to 7? " + (7 >= 7));
printOut("Is 'a' greater than 'b'? " + ("a" > "b"));
printOut("Is '1' less than 'a'? " + ("1" < "a"));
printOut("Is '2500' less than 'abcd'? " + ("2500" < "abcd"));
printOut("'arne' is not equal to 'thomas': " + ("arne" !== "thomas"));
printOut("(2 equals 5) is this statement true? " + (2 === 5));
printOut("('abcd' is greater than 'bcd') is this statement false? " + ("abcd" > "bcd"));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// 1. Testing "254"
printOut("Number('254'): " + Number("254"));
printOut("parseInt('254'): " + parseInt("254"));
printOut("parseFloat('254'): " + parseFloat("254"));

// 2. Testing "57.23"
printOut("Number('57.23'): " + Number("57.23"));
printOut("parseInt('57.23'): " + parseInt("57.23"));
printOut("parseFloat('57.23'): " + parseFloat("57.23"));

// 3. Testing "25 kroner"
printOut("Number('25 kroner'): " + Number("25 kroner"));
printOut("parseInt('25 kroner'): " + parseInt("25 kroner"));
printOut("parseFloat('25 kroner'): " + parseFloat("25 kroner"));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.ceil(Math.random() * 360);
printOut("Random number between 1 and 360: " + r); 
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalDays = 131;
const weeks = Math.floor(totalDays / 7);
const daysLeft = totalDays % 7;
printOut("131 days is " + weeks + " weeks and " + daysLeft + " days.");
printOut(newLine);