const calculateBill = (bill, taxRate = 0.23, tipRate = 0.15) => {
  const total = bill + bill * taxRate + bill * tipRate;
  return total;
};
// calculateBill();
const AnnaTotal = 35;
const AnnaTaxRate = 0.23;
const AnnaTotalBill = calculateBill(AnnaTotal, AnnaTaxRate);
console.log(`Anna's bill is ${AnnaTotalBill} euros.`);

// const firstName = 'Anna';
const sayHiTo = (firstName) => `Hello ${firstName}`;

const greeting = sayHiTo('Anna');
console.log(greeting);

const myTotalBill = calculateBill(20 + 20 + 10 + 5, 0.23);
console.log(`My bill is ${myTotalBill} euros.`);

const hisTotalBill = calculateBill(100, undefined, 0.2);
console.log(`His bill is ${hisTotalBill} euros.`);
