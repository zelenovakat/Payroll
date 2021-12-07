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

import { device } from "../helpers/mediaQueries"

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

  const resetSlideAndForm = () => {
    setActiveSlide(1)
    setProfession("")
    setYearsOfExperience("")
    setYear("")
    setCity("")
    setTotalSalaryWithTax(0)
    setTax(0)
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
          <SlideBox>
            <h1>How much could you earn?</h1>
            <Button onClick={nextSlide}>Start</Button>
          </SlideBox>
        </Slide>
      )}
      {activeSlide === 2 && (
        <Slide>
          <SlideBox>
            <SelectProfession profession={profession} setProfession={setProfession} />
            <Button disabled={!profession} onClick={nextSlide}>
              Next
            </Button>
          </SlideBox>
        </Slide>
      )}
      {activeSlide === 3 && (
        <Slide>
          <SlideBox>
            <SelectExperience
              yearsOfExperience={yearsOfExperience}
              setYearsOfExperience={setYearsOfExperience}
            />
            <Button disabled={!yearsOfExperience} onClick={nextSlide}>
              Next
            </Button>
          </SlideBox>
        </Slide>
      )}
      {activeSlide === 4 && (
        <Slide>
          <SlideBox>
            <SelectYear year={year} setYear={setYear} />
            <Button disabled={!year} onClick={nextSlide}>
              Next
            </Button>
          </SlideBox>
        </Slide>
      )}
      {activeSlide === 5 && (
        <Slide>
          <SlideBox>
            <SelectCity city={city} setCity={setCity} />
            <Button disabled={!city} onClick={calculateSalary}>
              Calculate
            </Button>
          </SlideBox>
        </Slide>
      )}
      {activeSlide === 6 && (
        <Slide>
          <SlideBox>
            <SlideTitle>Your result:</SlideTitle>
            <LastSlideResult>
              <SlideP>
                Salary: <SlideSpan>{totalSalaryWithTax - tax} kr</SlideSpan>
              </SlideP>
              <SlideP>
                Tax: <SlideSpan>{tax} kr</SlideSpan>
              </SlideP>
              <LastSlideTotal>
                Total: <SlideSpan>{totalSalaryWithTax} kr</SlideSpan>
              </LastSlideTotal>

              <Button onClick={resetSlideAndForm}>Start over</Button>
            </LastSlideResult>
          </SlideBox>
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
  background-color: #f7e7b4;

  @media ${device.laptopL} {
    background: transparent;
  }
`

const SlideBox = styled.div`
  width: 100%;
  background-color: #f7e7b4;
  padding: 80px 0;
  border-radius: 17px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${device.laptopL} {
    width: 650px;
    padding: 20px 0;
    min-height: 390px;
    align-items: center;
    justify-content: center;
  }
`

const SlideTitle = styled.h2`
  margin-bottom: 30px;
`

const LastSlideResult = styled.div`
  width: 250px;
  justify-content: flex-end;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const SlideP = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
`

const LastSlideTotal = styled.p`
  border-top: 1px solid #928e8e;
  margin-top: 15px;
  padding-top: 10px;
`

const SlideSpan = styled.span`
  font-size: 16px;
  font-weight: normal;
`
