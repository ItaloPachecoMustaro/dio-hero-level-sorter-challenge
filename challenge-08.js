// Challenge done!

// Import the readline module for interaction with the user in the terminal
const readline = require("readline");

// Create a read-write interface using readline
const rl = readline.createInterface({
  input: process.stdin,   // Set the input to the terminal
  output: process.stdout, // Set the output to the terminal
});

// Defines a function to calculate tax based on salary
function calculateTax(salary) {
  // Determine the tax rate based on salary ranges
  if (salary >= 0 && salary <= 1100) {
    return 0.05 * salary; // 5% tax
  } else if (salary > 1100 && salary <= 2500) {
    return 0.1 * salary;  // 10% tax
  } else {
    return 0.15 * salary; // 15% tax
  }
}

// Ask the user to enter their salary
rl.question("Enter your salary: ", (valueSalary) => {
  // Ask the user to enter their benefits
  rl.question("Enter your benefits: ", (valueBenefit) => {
    // Convert input values to floating-point numbers
    const salary = parseFloat(valueSalary);
    const benefit = parseFloat(valueBenefit);

    // Calculate tax, subtract it from salary, and add benefits
    const tax = calculateTax(salary);
    const output = salary - tax + benefit;

    // Display the final result in the console with two decimal places
    console.log(output.toFixed(2));
    
    // Close the read-write interface, ending the program
    rl.close();
  });
});
