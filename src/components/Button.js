import React from "react"
import styled from "styled-components"

const Button = ({ children, onClick }) => {
  const handleButtonClick = (e) => {
    e.preventDefault()
    onClick()
  }

  return (
    <StyledButton type="button" onClick={handleButtonClick}>
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  background: #fff;
  border: none;
  border-radius: 3px;
  color: #961f8c;
  transition: background 0.2s ease-in-out;
  min-height: 30px;
  min-width: 150px;
  margin: 16px 0;

  &:hover {
    background: #c524b8;
    color: #fff;
  }
`
