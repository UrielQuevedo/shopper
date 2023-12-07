import ListShopper from "../entities/ListShopper";
import ListShopperRepository from "../repositories/ListShopperRespository";

const listShopperRepository = new ListShopperRepository();

const ListShopperService = {
  createList: async (list: ListShopper): Promise<void> => {
    try {
      await listShopperRepository.createIfNotExist(list, {
        where: "name",
        value: list.title,
      });
    } catch (error) {
      console.error("Error al crear al usuario:", error);
      throw error;
    }
  },

  getListShopperById: async (listShopperId: string): Promise<ListShopper> => {
    try {
      return await listShopperRepository.getById(listShopperId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getListShoppersById: async (userId: string): Promise<ListShopper[]> => {
    try {
      return await listShopperRepository.getListsShopperByUserId(userId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  updateListShopper: async (listShopper: ListShopper): Promise<void> => {
    try {
      return await listShopperRepository.update(listShopper.id!, listShopper);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};

export default ListShopperService;
