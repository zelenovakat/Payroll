import React from "react"
import Dropdown from "../Dropdown"

const Profession = ({ profession, setProfession }) => {
  const typeOfProfession = ["Programmer", "Teacher", "Cashier"]
  const onChangeHandle = (value) => {
    setProfession(value)
  }
  return (
    <div>
      <h2> Profession</h2>
      <Dropdown
        selectedValue={profession}
        options={typeOfProfession}
        setSelectedValue={onChangeHandle}
      />
    </div>
  )
}

export default Profession
