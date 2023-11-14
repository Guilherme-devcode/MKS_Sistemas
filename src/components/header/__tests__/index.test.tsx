import { fireEvent, render } from "@testing-library/react";
import Header from "../header";

describe("Header Component", () => {
  it("renders Header correctly", () => {
    const { getByText } = render(
      <Header onToggleCart={() => {}} cartItemCount={0} />
    );
    expect(getByText("MKS")).toBeInTheDocument();
    expect(getByText("Sistemas")).toBeInTheDocument();
  });

  it("triggers onToggleCart correctly", () => {
    const onToggleCartMock = jest.fn();
    const { getByTestId } = render(
      <Header onToggleCart={onToggleCartMock} cartItemCount={0} />
    );
    fireEvent.click(getByTestId("shopping-button"));
    expect(onToggleCartMock).toHaveBeenCalled();
  });

  it("displays the correct cart item count", () => {
    const { getByTestId } = render(
      <Header onToggleCart={() => {}} cartItemCount={5} />
    );
    expect(getByTestId("cart-item-count").textContent).toBe("5");
  });
});
