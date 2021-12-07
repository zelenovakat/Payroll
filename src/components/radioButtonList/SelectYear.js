import RadioButton from "../RadioButton"
import { WrapperItem } from "../../helpers/style"
const SelectYear = ({ year, setYear }) => {
  const years = ["2019", "2020"]

  return (
    <WrapperItem>
      <h2>Income year</h2>
      {years.map((yearItem) => (
        <RadioButton
          selected={year}
          onChange={setYear}
          key={yearItem}
          value={yearItem}
          label={yearItem}
        />
      ))}
    </WrapperItem>
  )
}

export default SelectYear
