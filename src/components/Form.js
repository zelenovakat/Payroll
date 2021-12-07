import React, { useState } from "react"
import SelectExperience from "./dropdownList/SelectExperience"
import SelectProfession from "./dropdownList/SelectProfession"
import SelectYear from "./radioButtonList/SelectYear"
import SelectCity from "./radioButtonList/SelectCity"

const Form = () => {
  const [profession, setProfession] = useState("")
  const [yearsOfExperience, setYearsOfExperience] = useState("")
  const [year, setYear] = useState("")
  const [city, setCity] = useState("")

  return (
    <form>
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
    </form>
  )
}

export default Form
