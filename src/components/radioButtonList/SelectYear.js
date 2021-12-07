import RadioButton from "../RadioButton"

const SelectYear = ({ year, setYear }) => {
  const years = ["2019", "2020"]

  return (
    <div>
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
    </div>
  )
}

export default SelectYear
