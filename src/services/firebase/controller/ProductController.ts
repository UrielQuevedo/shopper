import Product from "../entities/Product";
import ProductService from "../services/ProductService";

const ProductController = {
  getProductsByName: async (listShopperId: string, name: string): Promise<Product[]> => {
    try {
      return await ProductService.getProductsFromListShopperId(listShopperId, name);
    } catch (error) {
      console.error("Error al obtener el shopper list", error);
      throw error;
    }
  },

  createProduct: async (product: Product, listShopperId: string): Promise<string> => {
    try {
      return await ProductService.createProduct({ ...product, listShopperId });
    } catch (error) {
      console.error("Error al crear el product", error);
      throw error;
    }
  },
};

export default ProductController;