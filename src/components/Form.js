import React, { useState } from "react"
import Experience from "./dropdownList/Experience"
import Profession from "./dropdownList/Profession"
import SelectYear from "./radioButtonList/IncomeYear"

const Form = () => {
  const [profession, setProfession] = useState("")
  const [yearsOfExperience, setYearsOfExperience] = useState("")
  const [year, setYear] = useState("")

  return (
    <form>
      <div>
        <Profession profession={profession} setProfession={setProfession} />
      </div>
      <div>
        <Experience
          yearsOfExperience={yearsOfExperience}
          setYearsOfExperience={setYearsOfExperience}
        />
      </div>
      <div>
        <SelectYear year={year} setYear={setYear} />
      </div>
    </form>
  )
}

export default Form
