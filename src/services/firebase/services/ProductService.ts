import Product from "../entities/Product";
import ProductRepository from "../repositories/ProductRepository";

const productRepository = new ProductRepository();

const ProductService = {
  getAllProducts: async (): Promise<Product[]> => {
    try {
      const products = await productRepository.getAll();
      return products;
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      throw error;
    }
  },

  // getProductById: async (productId: string): Promise<Product | null> => {
  //   try {
  //     const product = await productRepository.getById(productId);
  //     return product;
  //   } catch (error) {
  //     console.error('Error al obtener el producto:', error);
  //     throw error;
  //   }
  // },

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
    updatedProduct: Product
  ): Promise<void> => {
    try {
      await productRepository.update(productId, updatedProduct);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
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
