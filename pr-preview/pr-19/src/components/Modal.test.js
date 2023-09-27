import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./Modal";

const props = {
  isOpen: false,
  onClose: jest.fn(),
  isCentered: false,
  isScrollable: false,
  title: "",
};

describe("Modal", () => {
  it("default", () => {
    render(
      <Modal {...props}>
        <div>testModal</div>
      </Modal>
    );

    expect(screen.queryByText("testModal")).not.toBeInTheDocument();
  });

  it("shows a modal with given children content", () => {
    const customProps = { ...props, isOpen: true };
    render(
      <Modal {...customProps}>
        <div>testModal</div>
      </Modal>
    );

    expect(screen.getByText("testModal")).toBeInTheDocument();
  });

  it("should call onClose function when modal is closed", () => {
    const customProps = { ...props, isOpen: true };
    render(
      <Modal {...customProps}>
        <div>testModal</div>
      </Modal>
    );

    fireEvent.click(screen.getByTitle(/Close/i));

    expect(props.onClose).toHaveBeenCalledTimes(1);
  });
});
