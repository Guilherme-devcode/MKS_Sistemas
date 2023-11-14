import { Product } from "@/shared/types/product";
import { fireEvent, render } from "@testing-library/react";
import CartMenu from "../cart";

jest.mock("@/services/messages.service", () => ({
  MessageServices: jest.fn(() => ({
    success: jest.fn(),
    error: jest.fn(),
  })),
}));

describe("CartMenu Component", () => {
  it("renders CartMenu correctly", () => {
    const { getByText } = render(
      <CartMenu
        isOpen={true}
        onClose={() => {}}
        receivedCartItems={[]}
        updateCartItems={() => {}}
      />
    );
    expect(getByText("Carrinho de compras")).toBeInTheDocument();
  });

  it("handles quantity change correctly", () => {
    const receivedCartItems: Product[] = [
      {
        brand: "Carrinho de compras",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
        id: 1,
        description: "Carrinho de compras",
        name: "Carrinho de compras",
        photo: "http://photos.com",
        price: "100",
        quantity: 1,
      },
    ];

    const { getByText, getByTestId } = render(
      <CartMenu
        isOpen={true}
        onClose={() => {}}
        receivedCartItems={receivedCartItems}
        updateCartItems={() => {}}
      />
    );

    fireEvent.click(getByText("+"));
    expect(getByTestId("quantity-input").value).toBe("2");

    fireEvent.click(getByText("-"));
    expect(getByTestId("quantity-input").value).toBe("1");
  });

  it("handles product removal correctly", () => {
    const receivedCartItems: Product[] = [
      {
        brand: "Carrinho de compras",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
        id: 1,
        description: "Carrinho de compras",
        name: "Carrinho de compras",
        photo: "http://photos.com",
        price: "100",
        quantity: 1,
      },
    ];
    const updateCartItemsMock = jest.fn();

    const { getByTestId } = render(
      <CartMenu
        isOpen={true}
        onClose={() => {}}
        receivedCartItems={receivedCartItems}
        updateCartItems={updateCartItemsMock}
      />
    );
    fireEvent.click(getByTestId("remove-product"));
    expect(updateCartItemsMock).toHaveBeenCalled();
  });
});
