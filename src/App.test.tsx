import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./utils/test-utils"
import { App } from "./App"
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/Hello World!/i)
  expect(linkElement).toBeInTheDocument()
})
