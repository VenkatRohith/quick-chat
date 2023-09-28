import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header render & beahviour", () => {
  const handleShowAccountInfo = jest.fn();
  const props = { handleShowAccountInfo };

  it("should contain necessary text when rendered", () => {
    render(<Header {...props} />);
    expect(screen.getByText("QuickChat")).toBeInTheDocument();
  });

  it("should call the handleShowAccountInfo function on person icon click", () => {
    render(<Header {...props} />);
    const profileIcon = screen.getByRole("button", {
      name: /account info/i,
    });
    fireEvent.click(profileIcon);
    expect(handleShowAccountInfo).toBeCalledTimes(1);
  });
});
