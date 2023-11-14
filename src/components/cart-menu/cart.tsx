import { MessageServices } from "@/services/messages.service";
import { Product } from "@/shared/types/product";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { CartContainer, CloseButton } from "./style";
interface CartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  updateCartItems: (newItemCount: Product[]) => void;
  receivedCartItems: Product[];
}

const CartMenu: React.FC<CartMenuProps> = ({
  isOpen,
  onClose,
  receivedCartItems,
  updateCartItems,
}) => {
  const [cartItems, setCartItems] = useState(receivedCartItems);
  const messageService = new MessageServices();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * (item?.quantity || 1),
      0
    );
  };

  const handleDecreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && (item?.quantity || 1) > 1
          ? { ...item, quantity: (item?.quantity || 1) - 1 }
          : item
      )
    );
  };

  const handleIncreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const handleRemoveProduct = (itemId: number) => {
    setCartItems((prevItems) => {
      const updatedCartItems = prevItems.filter((item) => item.id !== itemId);
      updateCartItems(updatedCartItems);
      return updatedCartItems;
    });
  };

  const handleSubmitProducts = () => {
    messageService.success("Sucesso", "Compra realizada com sucesso.");
    setCartItems([]);
    updateCartItems([]);
    onClose();
  };

  useEffect(() => {
    setCartItems(receivedCartItems);
  }, [receivedCartItems]);

  return (
    <CartContainer className="p-4" isOpen={isOpen}>
      <div className="content position-relative h-100 w-100">
        <div className="d-flex p-2 ps-5 align-items-center justify-content-between">
          <h2 className="w-50">Carrinho de compras</h2>
          <CloseButton
            className="p-1"
            onClick={() => {
              updateCartItems(cartItems);
              onClose();
            }}
          >
            <CloseIcon />
          </CloseButton>
        </div>
        {cartItems.length > 0 && (
          <div className="d-flex products-list flex-column overflow-auto mt-5 px-5 align-items-center">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="product-container mt-3 px-3 d-flex position-relative justify-content-between p-2 align-items-center"
              >
                <div className="close-product position-absolute">
                  <CloseButton
                    className="p-1"
                    onClick={() => handleRemoveProduct(item.id)}
                  >
                    <CloseIcon />
                  </CloseButton>
                </div>
                <div className="d-flex align-items-center">
                  <img className="me-3" src={item.photo} alt={item.name} />
                  <span className="item-name">{item.name}</span>
                </div>
                <div className="count-product py-1 d-flex align-items-center">
                  <button
                    className="px-2"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <input type="number" value={item.quantity} readOnly />
                  <button
                    className="px-2"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <span className="price-product">R${item.price}</span>
              </div>
            ))}
          </div>
        )}
        {cartItems.length == 0 && (
          <div className="empty-cart-message w-100 h-75 d-flex justify-content-center align-items-center">
            <h2>O carrinho está vazio...</h2>
          </div>
        )}
        <div className="total-products text-light w-100 position-absolute start-0 bottom-0">
          <div className="w-100 align-items-center d-flex justify-content-between ">
            <h2>Total:</h2>
            <h2>R${calculateTotal().toFixed(2)}</h2>
          </div>
          <div
            onClick={handleSubmitProducts}
            className="submit-payment align-items-center d-flex mt-5 justify-content-center"
          >
            <h2>Finalizar Compra</h2>
          </div>
        </div>
      </div>
    </CartContainer>
  );
};

export default CartMenu;
