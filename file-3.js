const readline = require('readline');

function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  // Calculate PAYE Tax
  let tax = calculatePAYE(grossSalary);

  // Calculate NHIF Deductions
  let nhifDeduction = calculateNHIF(grossSalary);

  // Calculate NSSF Deductions
  let nssfDeduction = calculateNSSF(grossSalary);

  // Calculate Net Salary
  let netSalary = grossSalary - (tax + nhifDeduction + nssfDeduction);

  // Output results
  console.log(`\nGross Salary: ${grossSalary}`);
  console.log(`PAYE Tax: ${tax}`);
  console.log(`NHIF Deduction: ${nhifDeduction}`);
  console.log(`NSSF Deduction: ${nssfDeduction}`);
  console.log(`Net Salary: ${netSalary}`);
}

function calculatePAYE(salary) {
  // PAYE Tax Bands (Kenya)
  let tax = 0;
  if (salary <= 24000) {
    tax = salary * 0.1; // 10%
  } else if (salary <= 32333) {
    tax = 2400 + (salary - 24000) * 0.25; // 25% on the next portion
  } else {
    tax = 2400 + 2083.25 + (salary - 32333) * 0.3; // 30% on the rest
  }
  return tax;
}

function calculateNHIF(salary) {
  // NHIF Rates based on salary ranges
  if (salary <= 5999) return 150;
  else if (salary <= 7999) return 300;
  else if (salary <= 11999) return 400;
  else if (salary <= 14999) return 500;
  else if (salary <= 19999) return 600;
  else if (salary <= 24999) return 750;
  else if (salary <= 29999) return 850;
  else if (salary <= 34999) return 900;
  else if (salary <= 39999) return 950;
  else if (salary <= 44999) return 1000;
  else if (salary <= 49999) return 1100;
  else if (salary <= 59999) return 1200;
  else if (salary <= 69999) return 1300;
  else if (salary <= 79999) return 1400;
  else if (salary <= 89999) return 1500;
  else if (salary <= 99999) return 1600;
  else return 1700;
}

function calculateNSSF(salary) {
  // NSSF Tiered Deductions
  const nssfRate = 0.06; // 6% of gross salary
  return Math.min(salary * nssfRate, 2160); // Maximum deduction is capped
}

// Setup readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt user for inputs
rl.question('Enter basic salary: ', (basicSalaryInput) => {
  const basicSalary = parseFloat(basicSalaryInput);

  rl.question('Enter benefits: ', (benefitsInput) => {
    const benefits = parseFloat(benefitsInput);

    // Validate input
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
      console.log('Invalid input. Please enter valid numbers for salary and benefits.');
    } else {
      calculateNetSalary(basicSalary, benefits);
    }

    // Close the readline interface
    rl.close();
  });
});
