import React, { useState } from "react"
import SelectExperience from "./dropdownList/SelectExperience"
import SelectProfession from "./dropdownList/SelectProfession"
import SelectYear from "./radioButtonList/SelectYear"
import SelectCity from "./radioButtonList/SelectCity"
import Button from "../components/Button"
import {
  basicSalaries,
  calculateAdditionForExperience,
  calculateTax,
} from "../helpers/calculateSalary"
const Form = () => {
  const [profession, setProfession] = useState("")
  const [yearsOfExperience, setYearsOfExperience] = useState("")
  const [year, setYear] = useState("")
  const [city, setCity] = useState("")
  const [totalSalaryWithTax, setTotalSalaryWithTax] = useState(0)
  const [tax, setTax] = useState(0)

  const calculateSalary = () => {
    const basicSalaryByProfession = basicSalaries[profession.toLowerCase()]
    const additionForExperience = calculateAdditionForExperience(
      parseInt(yearsOfExperience),
      basicSalaryByProfession
    )
    const total = basicSalaryByProfession + additionForExperience
    setTotalSalaryWithTax(total)

    const calculatedTax = calculateTax(city, year, total)
    setTax(calculatedTax)
  }

  return (
    <div>
      <div>
        <SelectProfession profession={profession} setProfession={setProfession} />
      </div>
      <div>
        <SelectExperience
          yearsOfExperience={yearsOfExperience}
          setYearsOfExperience={setYearsOfExperience}
        />
      </div>
      <div>
        <SelectYear year={year} setYear={setYear} />
      </div>
      <div>
        <SelectCity city={city} setCity={setCity} />
      </div>
      <Button onClick={calculateSalary}>Calculate</Button>
      <h2>Salary ex Tax:</h2>
      <h2>TAX: {tax} kr</h2>
      <h2>Total salary: {totalSalaryWithTax} kr</h2>
    </div>
  )
}

export default Form
