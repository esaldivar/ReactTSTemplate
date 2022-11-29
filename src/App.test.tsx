import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders title text", () => {
    render(<App />);
    const title = screen.getByText(/Get Album Details/i);
    expect(title).toBeInTheDocument();
  });

  test("renders loading skeleton", async () => {
    render(<App />);
    const skeleton = screen.queryAllByRole("listitem");
    expect(skeleton).toHaveLength(6);
  });

  test("renders text field on initial load", async () => {
    render(<App />);
    const albumLabel = screen.getByLabelText(/Album ID/i);
    expect(albumLabel).toBeInTheDocument();
  });
});
