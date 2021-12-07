import React from "react"
import styled from "styled-components"

const Dropdown = ({ selectedValue, options, setSelectedValue }) => {
  const handleChange = (e) => {
    setSelectedValue(e.target.value)
  }

  return (
    <label>
      <StyledSelect value={selectedValue} onChange={handleChange}>
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
      </StyledSelect>
    </label>
  )
}

export default Dropdown

const StyledSelect = styled.select`
  background: transparent;
  padding: 15px;
  min-width: 150px;
  border-radius: 4px;
  outline: none;
`
