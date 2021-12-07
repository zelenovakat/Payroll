import React from "react"
import Dropdown from "../Dropdown"

const SelectExperience = ({ yearsOfExperience, setYearsOfExperience }) => {
  const years = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11+"]
  const onChangeHandle = (value) => {
    setYearsOfExperience(value)
  }
  return (
    <div>
      <h2> Experience</h2>
      <Dropdown
        selectedValue={yearsOfExperience}
        options={years}
        setSelectedValue={onChangeHandle}
      />
    </div>
  )
}

export default SelectExperience
