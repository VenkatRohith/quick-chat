import { render } from "@testing-library/react";
import Input from "./Input";

const props = {
  name: "testInput",
  placeholder: "Input here",
  onChange: jest.fn,
  className: "",
  value: "test",
  handleIconClick: jest.fn,
  hasEmoji: false,
};

describe("Input", () => {
  render(<Input {...props} />);
  it("should render Input", () => {});
});
