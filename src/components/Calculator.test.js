import React from "react";
import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator"; // Adjust the import path

describe("Calculator component", () => {
  it("should render Calculator component", () => {
    render(<Calculator />);
    screen.getAllByRole("button");
  });
});
