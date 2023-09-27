import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

const props = {
  name: "testInput",
  placeholder: "Input here",
  onChange: jest.fn(),
  className: "",
  value: "test",
  handleIconClick: jest.fn(),
  hasEmoji: false,
};

describe("Input default", () => {
  it("should contain the initially passed value", () => {
    render(<Input {...props} />);
    const input = screen.getByRole("textbox", { name: /testInput/i });
    expect(input.value).toBe("test");
  });

  it("should display the value inserted", () => {
    render(<Input {...props} />);
    const input = screen.getByRole("textbox", { name: /testInput/i });
    fireEvent.change(input, { target: { value: "testValue" } });
    expect(props.onChange).toBeCalledTimes(1);
  });

  it("should contain an icon when hasEmoji is true", () => {
    const customProps = { ...props, hasEmoji: true };
    render(<Input {...customProps} />);
    const icon = screen.getByRole("button", { name: /emojis/i });
    expect(icon).toBeInTheDocument();
  });
});
