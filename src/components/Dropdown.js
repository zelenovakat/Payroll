import React from "react"

const Dropdown = ({ selectedValue, options, setSelectedValue }) => {
  const handleChange = (e) => {
    setSelectedValue(e.target.value)
  }

  return (
    <label>
      <select value={selectedValue} onChange={handleChange}>
        <option value="" disabled>
          choose your option
        </option>
        {options.map((optionItem) => {
          return (
            <option key={optionItem} value={optionItem}>
              {optionItem}
            </option>
          )
        })}
      </select>
    </label>
  )
}

export default Dropdown
