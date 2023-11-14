import { fetchProducts } from "@/services/product.service";
import { Product } from "@/shared/types/product";
import { render, waitFor } from "@testing-library/react";
import ProductList from "../productList";

jest.mock("@/services/product.service", () => ({
  fetchProducts: jest.fn(),
}));

describe("ProductList Component", () => {
  const mockProducts: Product[] = [
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

  beforeEach(() => {
    (fetchProducts as jest.Mock).mockResolvedValueOnce({
      products: mockProducts,
    });
  });

  it("renders ProductList correctly", async () => {
    const { getByText, getByAltText } = render(
      <ProductList updateCartItems={() => {}} receivedCartItems={[]} />
    );

    await waitFor(() => {
      expect(getByText(mockProducts[0].name)).toBeInTheDocument();
      expect(getByAltText(mockProducts[0].name)).toBeInTheDocument();
      expect(getByText(`R$${mockProducts[0].price}`)).toBeInTheDocument();
      expect(getByText(mockProducts[0].description)).toBeInTheDocument();
    });
  });

  it("handles adding a product to the cart", async () => {
    const updateCartItemsMock = jest.fn();

    const { getByText } = render(
      <ProductList
        updateCartItems={updateCartItemsMock}
        receivedCartItems={[]}
      />
    );

    await waitFor(() => {
      const addButton = getByText("Comprar");
      addButton.click();

      expect(updateCartItemsMock).toHaveBeenCalledWith([
        { ...mockProducts[0], quantity: 1 },
      ]);
    });
  });
});
