import React from "react";
import { render, screen } from "@testing-library/react";
import PageControl from "./PageControl";

//test count, page Change, error

const pageSize = Math.ceil(50 / 10);

describe("PageControl component", () => {
  test("renders start of page range", () => {
    render(
      <PageControl
        count={pageSize}
        pageChange={() => {
          console.log("hello");
        }}
        error={""}
      />
    );
    const startingRange = screen.getByText(/1/i);
    expect(startingRange).toBeInTheDocument();
  });

  test("renders end of page range", () => {
    render(
      <PageControl
        count={pageSize}
        pageChange={() => {
          console.log("hello");
        }}
        error={""}
      />
    );
    const startingRange = screen.getByText(/5/i);
    expect(startingRange).toBeInTheDocument();
  });
});
