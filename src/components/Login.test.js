import { render, screen } from '@testing-library/react';
import Login from "./Login"


test("usename input shoulb be rendered", () => {
  render(<Login/>)
  const userInput = screen.getByPlaceholderText(/username/i);
  expect(userInput).toBeInTheDocument();
})

test("usename input shoulb be rendered", () => {
  render(<Login/>)
  const userInput = screen.getByPlaceholderText(/password/i);
  expect(userInput).toBeInTheDocument();
});

test("usename input shoulb be rendered", () => {
  render(<Login/>)
  const userInput = screen.getByRole("button");
  expect(userInput).toBeInTheDocument();
})

test("password shoulb be empty", () => {
  render(<Login/>)
  const userInput = screen.getByPlaceholderText(/password/i);
  expect(userInput.value).toBe("");
});

test("username should be empty", () => {
  render(<Login/>)
  const userInput = screen.getByPlaceholderText(/username/i);
  expect(userInput.value).toBe("");
});




test("usename input shoulb be rendered", () => {
  render(<Login/>)
  const userInput = screen.getByRole("button");
  expect(userInput).toBeInTheDocument();
})