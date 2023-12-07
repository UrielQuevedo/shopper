interface Product {
  id?: string;
  name: string;
  price: number;
  note?: string;
  quantity: number;
  weight?: string;
  listShopperId?: string;
  marked?: boolean;
}

export default Product;
