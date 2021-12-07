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
