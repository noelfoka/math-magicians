import { render, screen } from "@testing-library/react";
import Home from "./Home";
import React from "react";

describe("Home component", () => {
  it("should match HOME snapshot", () => {
    render(<Home />);
    const home = screen.getByTestId("user-id");
    expect(home).toBeInTheDocument();
    expect(home).toHaveTextContent("History");
  });
});
