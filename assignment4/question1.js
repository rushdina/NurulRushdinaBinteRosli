const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
// Question 1: Finding highest stock price over a period of time
// Given the following array, find the highest stock price within the provided array and print out the details

let highest = amdPrices[0];

for (const price of amdPrices) {
  if (price > highest) {
    highest = price;
  }
}

console.log("AMD 52-week high is", highest);
