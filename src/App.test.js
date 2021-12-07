import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders payroll form", () => {
  render(<App />)
  const mainText = screen.getByText(/How much could you earn/i)
  const button = screen.getByText(/Start/i)
  expect(mainText).toBeInTheDocument()
  expect(button).toBeInTheDocument()
})
