"use client";
import CartMenu from "@/components/cart-menu/cart";
import Header from "@/components/header/header";
import ProductList from "@/components/product-list/productList";
import { Product } from "@/shared/types/product";
import { useState } from "react";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const updateCartItems = (newItemCount: Product[]) => {
    setCartItems(newItemCount);
  };

  return (
    <div className="w-100 h-100">
      <Header
        onToggleCart={handleToggleCart}
        cartItemCount={cartItems.length}
      />
      <ProductList
        receivedCartItems={cartItems}
        updateCartItems={updateCartItems}
      />
      {isCartOpen && (
        <CartMenu
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          receivedCartItems={cartItems}
          updateCartItems={updateCartItems}
        />
      )}
    </div>
  );
}
