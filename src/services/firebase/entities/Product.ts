import Category from "./Category";

interface Product {
  id?: string;
  name: string;
  price: number;
  note: string;
  quantity: number;
  isDiscount: boolean;
  category: Category[];
  isAdded: boolean;
  weight: string;
}

export default Product;
