import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
	test("renders title text", () => {
	  render(<App />);
	  const title = screen.getByText(/React Template/i);
	  expect(title).toBeInTheDocument();
	});
  });
