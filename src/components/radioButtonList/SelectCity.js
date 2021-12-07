import React from "react"
import RadioButton from "../RadioButton"
import { WrapperItem } from "../../helpers/style"

const SelectCity = ({ city, setCity }) => {
  const cities = ["Stockholm", "Gothenburg"]
  return (
    <WrapperItem>
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
    </WrapperItem>
  )
}

export default SelectCity
