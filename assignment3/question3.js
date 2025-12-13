const disneyData = {
  open: "120.54",
  high: "122.56",
  low: "120.54",
  close: "121.09",
};

// Write your code below
// Question 3: Objects l
// You are to print out the result of the calculation based on the formula below: open - high + low - close

const result =
  parseFloat(disneyData.open) -
  parseFloat(disneyData.high) +
  parseFloat(disneyData.low) -
  parseFloat(disneyData.close);

console.log(result.toFixed(2));
