import ListShopper from "../entities/ListShopper";
import Product from "../entities/Product";
import ListShopperService from "../services/ListShopperService";
import ProductService from "../services/ProductService";

const ListShopperController = {
  createList: async (list: ListShopper): Promise<void> => {
    try {
      await ListShopperService.createList(list);
    } catch (error) {
      console.error("Error al crear al usuario:", error);
      throw error;
    }
  },

  getListShopperById: async (listShopperId: string): Promise<ListShopper> => {
    try {
      return await ListShopperService.getListShopperById(listShopperId);
    } catch (error) {
      console.error("Error al obtener el shopper list", error);
      throw error;
    }
  },

  getDataFromListShopper: async (listShopperId: string) => {
    const products: Product[] =
      await ProductService.getProductsFromListShopperId(listShopperId, "");

    const { discountAmount } = await ListShopperService.getListShopperById(listShopperId);

    const totalPrice = products.reduce(
      (prevValue, { quantity, price }) => prevValue + (quantity * price),
      0,
    );

    const totalProducts = products.reduce(
      (prevValue, { quantity }) => prevValue + quantity,
      0,
    );
    const totalProductsAdded = products.reduce(
      (prevValue, { quantity, price, marked }) => {
	if (!marked) {
	  return price > 0 ? prevValue + quantity : prevValue;
	}

	return prevValue + quantity;
      },
      0,
    );

    return { totalProducts, totalProductsAdded, totalPrice, discountAmount: discountAmount ?? 0 };
  },

  getShoppersListFromUserById: async (userId: string) => {
    return await ListShopperService.getListShoppersById(userId);
  },

  editListShopper: async (listShopper: ListShopper) => {
    return await ListShopperService.updateListShopper(listShopper);
  }
};

export default ListShopperController;
