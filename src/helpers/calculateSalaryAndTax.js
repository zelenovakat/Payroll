export const basicSalaries = {
  programmer: 30000,
  teacher: 27000,
  cashier: 25000,
}

export const calculateAdditionForExperience = (yearsOfExperience, basicSalary) => {
  if (yearsOfExperience < 4) {
    return 0
  }
  if (yearsOfExperience < 8) {
    return basicSalary * 0.2
  }
  if (yearsOfExperience < 11) {
    return basicSalary * 0.4
  }

  return basicSalary * 0.6
}

export const calculateBasicTax = (city, incomeYear) => {
  let basicTaxPrecentage
  if (city === "Stockholm") {
    basicTaxPrecentage = incomeYear === 2020 ? 0.29 : 0.3
  }
  if (city === "Gothenburg") {
    basicTaxPrecentage = incomeYear === 2020 ? 0.22 : 0.25
  }
  return basicTaxPrecentage
}

export const calculateTax = (city, incomeYear, salary) => {
  const basicTaxPercentage = calculateBasicTax(city, incomeYear)
  if (salary <= 36000) {
    return salary * basicTaxPercentage
  }
  if (salary <= 45000) {
    const extra50Tax = salary - 36000
    return 36000 * basicTaxPercentage + extra50Tax * 0.5
  }
  const extra70Tax = salary - 45000
  return 36000 * basicTaxPercentage + 9000 * 0.5 + extra70Tax * 0.7
}
