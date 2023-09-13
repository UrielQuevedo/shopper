import Product from "../entities/Product";
import AbstractRepository from "../util/AbstractCrud";
import { firestore } from "../firebase";
import { Firestore, collection, orderBy, collectionGroup, getDocs, query, where, Query, getDoc, QueryFilterConstraint, QueryOrderByConstraint, QueryFieldFilterConstraint } from "firebase/firestore";

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
    };
  }

  public async getAllBy(filterByName: string, ordersBy: string[]) {
    let collectionRef = collection(firestore, "products");
    let whereContraints: QueryFieldFilterConstraint[] = [];
    let orderContraints: QueryOrderByConstraint[] = [];

    if (filterByName !== '') {
      whereContraints.push(where('name', '>=', filterByName));
      whereContraints.push(where('name', '>=', filterByName + '\uf8ff'));
    }

    if (ordersBy.length > 0) {
      ordersBy.forEach((field) => {
	orderContraints.push(orderBy(field))
      });
    }

    const snapshot = await getDocs(query(collectionRef, ...whereContraints, ...orderContraints));
    const products: Product[] = [];

    snapshot.forEach((doc) => {
      const product = doc.data() as Product;
      product.quantity = Number(product.quantity)
      product.price = Number(product.price)
      products.push(product);
    });

    return products;
  }
}

export default ProductRepository;
