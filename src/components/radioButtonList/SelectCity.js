import React from "react"
import RadioButton from "../RadioButton"

const SelectCity = ({ city, setCity }) => {
  const cities = ["Stockholm", "Gothenburg"]
  return (
    <div>
      <h2>City</h2>
      {cities.map((cityItem) => (
        <RadioButton
          selected={city}
          onChange={setCity}
          key={cityItem}
          value={cityItem}
          label={cityItem}
        />
      ))}
    </div>
  )
}

export default SelectCity
