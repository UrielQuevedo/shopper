import Product from "../entities/Product";

const searchByName = (name: string, products: Product[]) => {
  if (name.trim() === "") {
    return products;
  }

  return products.filter(( product ) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );
};

const orderProductsBy = (products: Product[], ordersBy: ((a: Product, b: Product) => number)[]) => {
  return products.sort((a, b) => {
    for (const orderBy of ordersBy) {
      const resultado = orderBy(a, b);
      if (resultado !== 0) {
        return resultado;
      }
    }
    return 0;
  });
};

const orderByDescendingPrice = (a: Product, b: Product) => {
  if (!a.price && b.price) return -1;
  if (a.price && !b.price) return 1;
  if (!a.price && !b.price) return a.quantity - b.quantity;
  return b.price - a.price;
};

const orderByQuantity = (a: Product, b: Product) => a.quantity - b.quantity;

const orderByName = (a: Product, b: Product) => a.name.localeCompare(b.name);

const ordersBy = {
  'name': orderByName,
  'quantity': orderByQuantity,
  'price': orderByDescendingPrice
}

export const searchBy = (name: string, products: Product[]) => {
  const productsSearched = searchByName(name, products);
  return orderProductsBy(productsSearched, [
    orderByDescendingPrice,
    orderByName,
    orderByQuantity,
  ]);
};
