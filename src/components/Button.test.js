import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Button from "./Button"

test("renders Button component", () => {
  render(<Button>Start the test</Button>)

  const buttonElement = screen.getByText(/Start the test/i)
  expect(buttonElement).toBeInTheDocument()
})

test("triggers onClick function when clicking the button", () => {
  const mockedOnClick = jest.fn()
  render(<Button onClick={mockedOnClick}>Start the test</Button>)

  const buttonElement = screen.getByText(/Start the test/i)
  userEvent.click(buttonElement)

  expect(mockedOnClick).toBeCalledTimes(1)
})
