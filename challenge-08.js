// Challenge done!

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateTax(salary) {
  if (salary >= 0 && salary <= 1100) {
    return 0.05 * salary;
  } else if (salary > 1100 && salary <= 2500) {
    return 0.1 * salary;
  } else {
    return 0.15 * salary;
  }
}

rl.question("Enter your salary: ", (valueSalary) => {
  rl.question("Enter your benefits: ", (valueBenefit) => {
    const salary = parseFloat(valueSalary);
    const benefit = parseFloat(valueBenefit);

    const tax = calculateTax(salary);
    const output = salary - tax + benefit;

    console.log(output.toFixed(2));
    rl.close();
  });
});
