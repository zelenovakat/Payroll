import React from "react"
import styled from "styled-components"

const Button = ({ children, onClick, disabled }) => {
  const handleButtonClick = (e) => {
    e.preventDefault()
    onClick()
  }

  return (
    <StyledButton type="button" onClick={handleButtonClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  border: none;
  min-width: 150px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-decoration: none;
  color: black;
  background-color: #68c4af;
  border-radius: 4px;
  margin-top: 30px;
  transition: background 0.1s ease-in-out;

  &:hover {
    background-color: #5db19e;
    cursor: pointer;
  }
`
