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
