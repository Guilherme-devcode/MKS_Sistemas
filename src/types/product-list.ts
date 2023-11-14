import { Product } from "./product";

export interface ListProductsProps {
  updateCartItems: (newItem: Product[]) => void;
  receivedCartItems: Product[];
}
