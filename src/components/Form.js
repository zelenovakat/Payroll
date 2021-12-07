import React, { useState } from "react"
import Experience from "./dropdownList/Experience"
import Profession from "./dropdownList/Profession"

const Form = () => {
  const [profession, setProfession] = useState("")
  const [yearsOfExperience, setYearsOfExperience] = useState("")
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
    </form>
  )
}

export default Form
