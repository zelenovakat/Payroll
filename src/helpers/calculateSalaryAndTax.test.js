import {
  calculateAdditionForExperience,
  calculateBasicTax,
  calculateTax,
} from "./calculateSalaryAndTax"

const mockedBasicSalary = 10000

describe("calculateAdditionForExperience", () => {
  test("returns 0 when years of experience less then 4", () => {
    const result = calculateAdditionForExperience(1, mockedBasicSalary)
    expect(result).toBe(0)
  })

  test("returns 20% of basic salary when years of experience is more then 3 but less then 8", () => {
    const result = calculateAdditionForExperience(5, mockedBasicSalary)
    expect(result).toBe(2000)
    expect(result / mockedBasicSalary).toBe(0.2)
  })

  test("returns 40% of basic salary when years of experience is more then 7 but less then 11", () => {
    const result = calculateAdditionForExperience(10, mockedBasicSalary)
    expect(result).toBe(4000)
    expect(result / mockedBasicSalary).toBe(0.4)
  })

  test("returns 60% of basic salary when years of experience is more then 11", () => {
    const result = calculateAdditionForExperience(12, mockedBasicSalary)
    expect(result).toBe(6000)
    expect(result / mockedBasicSalary).toBe(0.6)
  })
})

describe("calculateBasicTax", () => {
  test("returns 29% when city is Stockholm and incom year is 2020", () => {
    const result = calculateBasicTax("Stockholm", 2020)
    expect(result).toBe(0.29)
  })

  test("returns 30% when city is Stockholm and incom year is 2019", () => {
    const result = calculateBasicTax("Stockholm", 2019)
    expect(result).toBe(0.3)
  })
  test("returns 22% when city is Gothenburg and incom year is 2020", () => {
    const result = calculateBasicTax("Gothenburg", 2020)
    expect(result).toBe(0.22)
  })
  test("returns 25% when city is Gothenburg and incom year is 2019", () => {
    const result = calculateBasicTax("Gothenburg", 2019)
    expect(result).toBe(0.25)
  })
})

describe("calculateTax", () => {
  const mockedCity = "Stockholm"
  const mockedIncomeYear = 2020
  test("returns salary * basicTax when salary is less or equal to 36000", () => {
    const basicTax = calculateBasicTax(mockedCity, mockedIncomeYear)
    const result = calculateTax(mockedCity, mockedIncomeYear, 36000)

    expect(result).toBe(36000 * basicTax)
  })
  test("returns basicTax with extra 50% tax when salary is more then 36000 and less or equal to 45000", () => {
    const mockedSalary = 40000
    const basicTax = calculateBasicTax(mockedCity, mockedIncomeYear)
    const result = calculateTax(mockedCity, mockedIncomeYear, mockedSalary)
    const extra50Tax = mockedSalary - 36000
    expect(result).toBe(36000 * basicTax + extra50Tax * 0.5)
  })
  test("returns basicTax with extra 70% tax when salary is more then 45000", () => {
    const mockedSalary = 50000
    const basicTax = calculateBasicTax(mockedCity, mockedIncomeYear)
    const result = calculateTax(mockedCity, mockedIncomeYear, mockedSalary)
    const extra70Tax = mockedSalary - 45000
    expect(result).toBe(36000 * basicTax + 9000 * 0.5 + extra70Tax * 0.7)
  })
})
