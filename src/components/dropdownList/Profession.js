import React from "react"
import Dropdown from "../Dropdown"

const Profession = ({ profession, setProfession }) => {
  const typeOfProfession = ["Programmer", "Teacher", "Cashier"]

  return (
    <div>
      <h2> Profession</h2>
      <Dropdown
        selectedValue={profession}
        options={typeOfProfession}
        setSelectedValue={setProfession}
      />
    </div>
  )
}

export default Profession
