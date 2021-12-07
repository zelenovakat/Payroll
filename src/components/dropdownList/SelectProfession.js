import React from "react"
import Dropdown from "../Dropdown"
import { WrapperItem } from "../../helpers/style"

const SelectProfession = ({ profession, setProfession }) => {
  const typeOfProfession = ["Programmer", "Teacher", "Cashier"]
  const onChangeHandle = (value) => {
    setProfession(value)
  }
  return (
    <WrapperItem>
      <h2> Profession</h2>
      <Dropdown
        selectedValue={profession}
        options={typeOfProfession}
        setSelectedValue={onChangeHandle}
      />
    </WrapperItem>
  )
}

export default SelectProfession
