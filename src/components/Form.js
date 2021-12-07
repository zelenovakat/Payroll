import React, { useState } from "react"
import styled from "styled-components"
import SelectExperience from "./dropdownList/SelectExperience"
import SelectProfession from "./dropdownList/SelectProfession"
import SelectYear from "./radioButtonList/SelectYear"
import SelectCity from "./radioButtonList/SelectCity"
import Button from "../components/Button"
import {
  basicSalaries,
  calculateAdditionForExperience,
  calculateTax,
} from "../helpers/calculateSalaryAndTax"
const Form = () => {
  const [profession, setProfession] = useState("")
  const [yearsOfExperience, setYearsOfExperience] = useState("")
  const [year, setYear] = useState("")
  const [city, setCity] = useState("")
  const [totalSalaryWithTax, setTotalSalaryWithTax] = useState(0)
  const [tax, setTax] = useState(0)
  const [activeSlide, setActiveSlide] = useState(1)

  const nextSlide = () => {
    setActiveSlide(activeSlide + 1)
  }

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

    nextSlide()
  }

  return (
    <div>
      {activeSlide === 1 && (
        <Slide>
          <h1>How much could you earn?</h1>
          <Button onClick={nextSlide}>Start</Button>
        </Slide>
      )}
      {activeSlide === 2 && (
        <Slide>
          <SelectProfession profession={profession} setProfession={setProfession} />
          <Button onClick={nextSlide}>Next</Button>
        </Slide>
      )}
      {activeSlide === 3 && (
        <Slide>
          <SelectExperience
            yearsOfExperience={yearsOfExperience}
            setYearsOfExperience={setYearsOfExperience}
          />
          <Button onClick={nextSlide}>Next</Button>
        </Slide>
      )}
      {activeSlide === 4 && (
        <Slide>
          <SelectYear year={year} setYear={setYear} />
          <Button onClick={nextSlide}>Next</Button>
        </Slide>
      )}
      {activeSlide === 5 && (
        <Slide>
          <SelectCity city={city} setCity={setCity} />
          <Button onClick={calculateSalary}>Calculate</Button>
        </Slide>
      )}
      {activeSlide === 6 && (
        <Slide>
          <h2>Salary ex Tax: {totalSalaryWithTax - tax} kr</h2>
          <h2>TAX: {tax} kr</h2>
          <h2>Total salary: {totalSalaryWithTax} kr</h2>

          <Button onClick={() => setActiveSlide(1)}>Start over</Button>
        </Slide>
      )}
    </div>
  )
}

export default Form

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #262626;
  color: #fff;
`
