import React from "react"

const Button = ({ children, onClick }) => {
  const handleButtonClick = (e) => {
    e.preventDefault()
    onClick()
  }

  return (
    <button type="button" onClick={handleButtonClick}>
      {children}
    </button>
  )
}

export default Button
