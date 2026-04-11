"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [-b / (2 * a)];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a) , (-b - Math.sqrt(d)) / (2 * a)];
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseFloat(contribution)
  amount = parseFloat(amount);
  countMonths = parseFloat(countMonths);

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  let creditBody  = amount - contribution;
  if (creditBody <= 0)
    return 0;

  let monthRate = (percent/ 100) / 12;
  let coeffic = (1 + monthRate) ** countMonths;
  let monthPayment = creditBody * (monthRate + (monthRate / (coeffic - 1)));
  let total = monthPayment * countMonths;

  total = Math.round(total * 100) / 100;

  return total;

}