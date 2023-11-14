import { fireEvent, render } from "@testing-library/react";
import Home from "../page";

jest.mock("@/components/cart-menu", () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

jest.mock("@/components/header", () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

jest.mock("@/components/product-list", () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

describe("Home Page", () => {
  it("renders Home page correctly", () => {
    render(<Home />);
  });

  it("handles cart toggle correctly", () => {
    const { getByText } = render(<Home />);
    fireEvent.click(getByText("Toggle Cart"));
  });
});
