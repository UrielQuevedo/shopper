import Product from "../entities/Product";
import ProductService from "../services/ProductService";

const ProductController = {
  getProductsByName: async (
    listShopperId: string,
    name: string,
  ): Promise<Product[]> => {
    try {
      return await ProductService.getProductsFromListShopperId(
        listShopperId,
        name,
      );
    } catch (error) {
      console.error("Error al obtener el shopper list", error);
      throw error;
    }
  },

  createProduct: async (
    product: Product,
    listShopperId: string,
  ): Promise<string> => {
    try {
      return await ProductService.createProduct({ ...product, listShopperId });
    } catch (error) {
      console.error("Error al crear el product", error);
      throw error;
    }
  },

  markProduct: async (productId: string): Promise<void> => {
    try {
      const product = await ProductService.getProductById(productId);
      if (product === null) throw new Error("No se encontro el product");

      await ProductService.updateProduct(productId, {
        ...product,
        marked: !product.marked,
      });
    } catch (error) {
      console.error("Error al cambiar el product", error);
      throw error;
    }
  },
};

export default ProductController;
