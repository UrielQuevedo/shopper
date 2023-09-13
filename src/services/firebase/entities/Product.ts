import Category from "./Category";

interface Product {
  id?: string;
  name: string;
  price: number;
  note?: string;
  quantity: number;
}

export default Product;
