import Product from "../entities/Product";
import ProductRepository from "../repositories/ProductRepository";
import { searchBy } from "../util/product-filter";

const productRepository = new ProductRepository();

const ProductService = {
  getAllProducts: async (name: string): Promise<Product[]> => {
    try {
      const products = (await productRepository.getAll()).map(
        ({ quantity, price, ...rest }) => ({
          ...rest,
          quantity: Number(quantity),
          price: Number(price),
        }),
      );

      return searchBy(name, products);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      throw error;
    }
  },

  getTotalPrice: async (): Promise<number> => {
    try {
      const products = await ProductService.getAllProducts("");
      return products.reduce(
        (totalPrice, { price, quantity }) => totalPrice + quantity * price,
        0,
      );
    } catch (error) {
      console.error(
        "Error al calcular el precio total de los productos:",
        error,
      );
      throw error;
    }
  },

  getProductById: async (productId: string): Promise<Product | null> => {
    try {
      const product = await productRepository.getById(productId);
      return product as Product;
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      throw error;
    }
  },

  createProduct: async (product: Product): Promise<void> => {
    try {
      await productRepository.createIfNotExist(product, {
        where: "name",
        value: product.name,
      });
    } catch (error) {
      console.error("Error al crear el producto:", error);
      throw error;
    }
  },

  updateProduct: async (
    productId: string,
    updatedProduct: Product,
  ): Promise<void> => {
    try {
      await productRepository.update(productId, updatedProduct);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      throw error;
    }
  },

  updateQuantityProduct: async (
    productId: string,
    actions: "DECREASE" | "INCREASE",
  ): Promise<void> => {
    try {
      const product = (await productRepository.getById(productId)) as Product;

      if (actions === "DECREASE") {
        product.quantity = Number(product.quantity) - 1;
      } else {
        product.quantity = Number(product.quantity) + 1;
      }
      await productRepository.update(productId, product);
    } catch (error) {
      console.error("Error al incrementar o decrementar el producto:", error);
      throw error;
    }
  },

  deleteProduct: async (productId: string): Promise<void> => {
    try {
      await productRepository.delete(productId);
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      throw error;
    }
  },
};

export default ProductService;
