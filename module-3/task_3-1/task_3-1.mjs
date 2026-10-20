"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);
// --- Part 1 ---
const timeBuss = 7;
const timeTrain = 8;
let wakeUpTime = 7; 
if (wakeUpTime === timeBuss) {
    printOut("Part 1: Take the bus!");
}
printOut(newLine);
// --- Part 2 ---
wakeUpTime = 6;
if (wakeUpTime === timeBuss) {
    printOut("Part 2: I can take the bus to school.");
} else {
    printOut("Part 2: I have to take the car to school.");
}
printOut(newLine);
// --- Part 3 ---
wakeUpTime = 8;
if (wakeUpTime === timeBuss) {
    printOut("Part 3: I can take the bus to school.");
} else if (wakeUpTime === timeTrain) {
    printOut("Part 3: I can take the train to school.");
} else {
    printOut("Part 3: I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// --- Part 4 ---
let testNumber = 0;
if (testNumber >= 0) {
    printOut("Part 4: Positive");
} else {printOut("Part 4: Negative");
}
printOut(newLine);
// --- Part 5 ---
testNumber = 0
if (testNumber > 0) {
    printOut("Part 5: Positive");
} else if (testNumber === 0) {
    printOut("Part 5: Zero");
} else {
    printOut("Part 5: Negative");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageSizeMP = Math.floor(Math.random() * 8) + 1; 
printOut("Uploaded image size: " + imageSizeMP + "MP");
if (imageSizeMP >= 4) {
    printOut("Part 6: Thank you");
} else {
    printOut("Part 6: The image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (imageSizeMP >= 6) {
    printOut("Part 7: Image is too large");
} else if (imageSizeMP>= 4) {
    printOut("Part 7: Thank you");
} else {
    printOut("Part 7: The image is too small");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "Mars", "April", "Mai", "Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut("Current month: " + monthName);
if (monthName.includes("r")) {
    printOut("Part 8: You must take vitamin D");
} else {
    printOut("Part 8: You do not need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "January" || monthName === "Mars" || monthName === "Mai" || 
    monthName === "Juli" || monthName === "August" || monthName === "October" || 
    monthName === "December") {
    printOut("Part 9: There are 31 days in this month.");
} else if (monthName === "February") {
    printOut("Part 9: There are 28 days in this month.");
} else {
    printOut("Part 9: There are 30 days in this month.");
}

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "April") {
    printOut("Part 10: The gallery is open in temporary premises next door.");
} else if (monthName === "Mars" || monthName === "Mai") {
    printOut("Part 10: The gallery is closed for refurbishment.");
} else {
    printOut("Part 10: The gallery is open normally.");
}

printOut(newLine);
