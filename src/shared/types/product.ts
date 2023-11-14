export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  quantity?: number;
}

export interface ProductsResponse {
  products: Product[];
  count: number;
}
