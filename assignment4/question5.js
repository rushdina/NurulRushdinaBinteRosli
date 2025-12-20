const disneyData = [
  {
    open: "120.54",
    high: "122.56",
    low: "120.54",
    close: "121.09",
  },
  {
    open: "123.15",
    high: "127.76",
    low: "123.02",
    close: "124.92",
  },
];

// Write your code below
// Question 5: Finding the average closing price ll
// Given the following object, you are to calculate the average closing price (rounded to 2 decimal places)

let sum = 0;
for (const pricesObj of disneyData) {
  sum += parseFloat(pricesObj.close);
}

const avgClose = sum / disneyData.length;

console.log(
  "Average closing price of Disney is",
  Math.round(avgClose * 100) / 100
);
