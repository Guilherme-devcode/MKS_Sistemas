import { Product } from "./product";

export interface CartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  updateCartItems: (newItemCount: Product[]) => void;
  receivedCartItems: Product[];
}
