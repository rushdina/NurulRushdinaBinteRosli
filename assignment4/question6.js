// Question 6: Fix the code
// Modify the code below:

// These are the average prices over a period of 7 days:
const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Your colleague has prepared the following code to find the 3 lowest average prices for AMD stocks:
// let data = ()
// for price in data:
// 	if price < 3:
//     data.push(price)

amdPrices.sort((a, b) => a - b); // sort original array ascendingly
// console.log(amdPrices);

let data = [];
// data.push(amdPrices[0], amdPrices[1], amdPrices[2]);
data = amdPrices.slice(0, 3);
// console.log(data);

// console.log("The three lowest prices are", data.join(", "));

const lastPrice = data.pop(); // return the removed last item in the array
console.log(
  "The three lowest prices are " + data.join(", ") + ", and " + lastPrice
);
