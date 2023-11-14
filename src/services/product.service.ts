import axios from "axios";

export async function fetchProducts(
  page: number,
  rows: number,
  sortBy: string,
  orderBy: string
): Promise<ProductsResponse> {
  const response = await axios.get(
    `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products`,
    {
      params: { page, rows, sortBy, orderBy },
    }
  );

  return response.data;
}
