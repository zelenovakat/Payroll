import React, { useState } from "react"
import Profession from "./dropdownList/Profession"

const Form = () => {
  const [profession, setProfession] = useState("")
  return (
    <div>
      <Profession profession={profession} setProfession={setProfession} />
    </div>
  )
}

export default Form
