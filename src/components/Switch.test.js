import { fireEvent, render, screen } from "@testing-library/react";
import Switch from "./Switch";

const props = {
  checked: false,
  handleToggleChange: jest.fn(),
  id: "testSwitch",
  name: "testSwitch",
};

describe("Switch", () => {
  it("should contain appropriate checked value passed", () => {
    render(<Switch {...props} />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("should contain appropriate checked value on change", () => {
    render(<Switch {...props} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.change(checkbox, { target: { checked: true } });
    expect(checkbox).toBeChecked();
  });
});
