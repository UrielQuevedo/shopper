import Product from "../entities/Product";
import AbstractRepository from "../util/AbstractCrud";

class ProductRepository extends AbstractRepository<Product> {
  constructor() {
    super("products");
  }

  protected mapToObject(product: Product): object {
    return { ...product };
  }

  protected mapFromObject(data: Product): Product {
    return {
      id: data.id,
      name: data.name,
      price: data.price,
      note: data.note,
      quantity: data.quantity,
      isDiscount: data.isDiscount,
      category: data.category,
      isAdded: data.isAdded,
      weight: data.weight,
    };
  }
}

export default ProductRepository;
