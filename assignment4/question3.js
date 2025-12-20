const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
// Question 3: Find number of days price is above current 7-day Simple Moving Average
// Given the following array, find the average price over a period of 7 days and count the number of days in which the price was above the 7 day simple moving average

let sum = 0;
let daysAboveAvg = 0;

for (const price of amdPrices) {
  sum += price;
}
const avg = sum / amdPrices.length;

for (const price of amdPrices) {
  if (price > avg) {
    daysAboveAvg++;
  }
}
console.log("Number of days AMD was above the 7-day SMA is:", daysAboveAvg);
