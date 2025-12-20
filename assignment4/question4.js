const msftData = [
  [190.15, 196.21, 191.07, 194.44],
  [193.61, 195.89, 190.12, 193.4],
];

// Write your code below
// Question 4: Finding the average closing price l
/* Given the following array, you are to calculate the average closing price. Structure of the array is as follows:
- index 0 - Open
- index 1 - High
- index 2 - Low
- index 3 - Close
*/

let sum = 0;
for (const prices of msftData) {
  sum += prices[3];
}

const avgClose = sum / msftData.length;

console.log("Average closing price of MSFT is", avgClose.toFixed(2));
