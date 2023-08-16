import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import Calculator from "./components/Calculator";
import Home from "./routes-component/Home";
import Quote from "./routes-component/Quotes";
import operate from "./logic/operate";
import calculate from "./logic/calculate";

afterEach(() => {
  cleanup();
});

describe("All components", () => {
  it("should render Home component", () => {
    render(<Home />);
    const userElement = screen.getByTestId("user-id");
    expect(userElement).toBeInTheDocument();
    expect(userElement).toHaveTextContent("History");
  });

  it("should render Calculator component", () => {
    render(<Calculator />);
    screen.getAllByRole("button");
  });
});

describe("Conduct simple operations", () => {
  const number1 = 9;
  const number2 = 3;

  it("Click number to display", () => {
    render(<Calculator />);
    const number = screen.getByTestId("cal-answer");
    userEvent.click(screen.getByText("2"));
    expect(number.innerHTML).toMatch("2");
  });

  const addition = operate(number1, number2, "+");
  it("should perform an addition", () => {
    expect(addition).toBe("12");
  });

  const subtraction = operate(number2, number1, "-");
  it("should perform a subtraction", () => {
    expect(subtraction).toBe("-6");
  });

  const multiplication = operate(number1, number2, "x");
  it("should perform a multiplication", () => {
    expect(multiplication).toBe("27");
  });

  const division = operate(number1, number2, "÷");
  it("should perform a division", () => {
    expect(division).toBe("3");
  });

  const cantDivide = operate(number2, 0, "÷");
  it("should check for no divisible by 0", () => {
    expect(cantDivide).toBe("Can't divide by 0.");
  });

  const modulusOperator = operate(number1, number2, "%");
  it("should check for modulus of a number", () => {
    expect(modulusOperator).toBe("0");
  });
});

describe("Testing for calculate functions", () => {
  it("should clear and reset all functions", () => {
    const object = {
      total: "3",
      next: "9",
      operation: "x",
    };
    const answer = {
      total: null,
      next: null,
      operation: null,
    };
    const total = calculate(object, "AC");
    expect(total).toEqual(answer);
  });
  it("should perform modulo operation", () => {
    const object = {
      total: "4",
      next: "2",
      operation: "%",
    };
    const answer = {
      total: "0",
      next: null,
      operation: "%",
    };
    const total = calculate(object, "%");
    expect(total).toEqual(answer);
  });
  it("should toggle between plus and minus", () => {
    const object = {
      total: "1",
      next: "2",
      operation: "x",
    };
    const answer = {
      total: "1",
      next: "-2",
      operation: "x",
    };
    const total = calculate(object, "+/-");
    expect(total).toEqual(answer);
  });
  it("should perform addition", () => {
    const object = {
      total: "7",
      next: "2",
      operation: "+",
    };
    const answer = {
      total: "9",
      next: null,
      operation: "+",
    };
    const total = calculate(object, "+");
    expect(total).toEqual(answer);
  });
  it("should perform subtraction", () => {
    const object = {
      total: "3",
      next: "1",
      operation: "-",
    };
    const answer = {
      total: "2",
      next: null,
      operation: "-",
    };
    const total = calculate(object, "-");
    expect(total).toEqual(answer);
  });
  it("should perform division", () => {
    const object = {
      total: "6",
      next: "2",
      operation: "÷",
    };
    const answer = {
      total: "3",
      next: null,
      operation: "÷",
    };
    const total = calculate(object, "÷");
    expect(total).toEqual(answer);
  });
  it("should perform multiplication", () => {
    const object = {
      total: "5",
      next: "7",
      operation: "x",
    };
    const answer = {
      total: "35",
      next: null,
      operation: "x",
    };
    const total = calculate(object, "x");
    expect(total).toEqual(answer);
  });
});
