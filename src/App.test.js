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

  it("should match HOME snapshot", () => {
    const home = renderer.create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
  });

  it("should match QUOTE snapshot", () => {
    const quote = renderer.create(<Quote />).toJSON();
    expect(quote).toMatchSnapshot();
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
