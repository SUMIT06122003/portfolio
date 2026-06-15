import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio hero content", () => {
  render(<App />);
  expect(screen.getAllByText(/Sumit Singh/i).length).toBeGreaterThan(0);
  expect(
    screen.getByText(/Open to freelance and remote opportunities/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/Data \+ Full Stack \+ Apps/i)).toBeInTheDocument();
  expect(screen.getByText(/Download Resume/i)).toBeInTheDocument();
});
