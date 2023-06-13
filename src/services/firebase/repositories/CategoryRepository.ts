import Category from "../entities/Category";
import AbstractRepository from "../util/AbstractCrud";

class CategoryRepository extends AbstractRepository<Category> {
  constructor() {
    super("categories");
  }

  protected mapToObject(category: Category): object {
    return { ...category };
  }

  protected mapFromObject(data: Category): Category {
    return {
      id: data.id,
      name: data.name,
    };
  }
}

export default CategoryRepository;
