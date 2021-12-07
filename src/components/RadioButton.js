import React from "react"
import styled from "styled-components"

const RadioButton = ({ label, value, selected, onChange }) => {
  const handleChange = (e) => {
    const value = e.target.value
    onChange(value)
  }

  const isChecked = selected === value

  return (
    <label>
      <input type="radio" value={value} onChange={handleChange} checked={isChecked} />
      <RadioButtonLabel>{label}</RadioButtonLabel>
    </label>
  )
}

export default RadioButton

const RadioButtonLabel = styled.span`
  margin-left: 10px;
  margin-bottom: 10px;
`
