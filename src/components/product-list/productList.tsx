"use client";
import { MessageServices } from "@/services/messages.service";
import { fetchProducts } from "@/services/product.service";
import { Product } from "@/shared/types/product";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { GridContainer, ProductCard } from "./style";

interface ListProductsProps {
  updateCartItems: (newItem: Product[]) => void;
  receivedCartItems: Product[];
}

const ProductList: React.FC<ListProductsProps> = ({
  updateCartItems,
  receivedCartItems,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const messageService = new MessageServices();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts(1, 10, "id", "DESC");
        setProducts(data.products || []);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product: Product) => {
    if (!receivedCartItems.some((item) => item.id === product.id)) {
      const newCartItems = [...receivedCartItems, { ...product, quantity: 1 }];
      messageService.success("Sucesso", "Produto adicionado ao carrinho.");
      updateCartItems(newCartItems);
    }
  };

  return (
    <GridContainer className="p-5 h-100">
      {loading
        ? Array.from({ length: 8 }).map((_, index) => (
            <ProductCard className="p-2" key={index}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="60%" />
              <Skeleton width="80%" />
              <Skeleton width="50%" />
            </ProductCard>
          ))
        : products.map((product) => (
            <ProductCard className="p-2" key={product.id}>
              <div className="d-flex justify-content-center">
                <img src={product.photo} alt={product.name} />
              </div>
              <div className="d-flex align-items-center justify-content-between mt-4">
                <div className="product-name">
                  <p>{product.name}</p>
                </div>
                <div className="product-price p-1 ms-3">
                  <p>R${product.price}</p>
                </div>
              </div>
              <div className="product-description mt-2">
                <p>{product.description}</p>
              </div>
              <div
                onClick={() => handleAddToCart(product)}
                className="add-cart text-light d-flex w-100 justify-content-center p-2"
              >
                <ShoppingBagIcon />
                <span className="ms-2">Comprar</span>
              </div>
            </ProductCard>
          ))}
    </GridContainer>
  );
};

export default ProductList;
