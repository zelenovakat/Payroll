import React from "react"

const RadioButton = ({ label, value, selected, onChange }) => {
  const handleChange = (e) => {
    const value = e.target.value
    onChange(value)
  }

  const isChecked = selected === value

  return (
    <label>
      <input type="radio" value={value} onChange={handleChange} checked={isChecked} />
      <p>{label}</p>
    </label>
  )
}

export default RadioButton
