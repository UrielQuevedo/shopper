import Category from "../entities/Category";
import CategoryRepository from "../repositories/CategoryRepository";

const categoryRepository = new CategoryRepository();

const CategoryService = {
  getAllCategories: async (): Promise<Category[]> => {
    try {
      const categories = await categoryRepository.getAll();
      return categories;
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      throw error;
    }
  },
  createCategory: async (category: Category): Promise<void> => {
    try {
      await categoryRepository.create(category);
    } catch (error) {
      console.error("Error al crear el producto:", error);
      throw error;
    }
  },

  updateCategory: async (
    categoryId: string,
    updatedCategory: Category
  ): Promise<void> => {
    try {
      await categoryRepository.update(categoryId, updatedCategory);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      throw error;
    }
  },

  deleteCategory: async (categoryId: string): Promise<void> => {
    try {
      await categoryRepository.delete(categoryId);
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      throw error;
    }
  },
};

export default CategoryService;
