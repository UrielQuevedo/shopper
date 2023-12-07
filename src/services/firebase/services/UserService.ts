import ListShopper from "../entities/ListShopper";
import User from "../entities/User";
import ListShopperRepository from "../repositories/ListShopperRespository";
import UserRepository from "../repositories/UserRepository";

const userRespository = new UserRepository();

const UserService = {
  getUserByName: async (name: string): Promise<User> => {
    try {
      const users = await userRespository.getAll();

      if (name.trim() === "") {
        throw new Error("Not name");
      }

      const user = users.find(({ name: userName }) => userName === name);
      if (!user) throw new Error("User not exist");

      return user;
    } catch (error) {
      console.error("Error al obtener al usuario por el nombre:", error);
      throw error;
    }
  },

  createUser: async (user: User): Promise<void> => {
    try {
      await userRespository.createIfNotExist(user, {
        where: "name",
        value: user.name,
      });
    } catch (error) {
      console.error("Error al crear al usuario:", error);
      throw error;
    }
  },

  updateUser: async (userId: string, updatedUser: User): Promise<void> => {
    try {
      await userRespository.update(userId, updatedUser);
    } catch (error) {
      console.error("Error al actualizar al usuario:", error);
      throw error;
    }
  },

  deleteUser: async (userId: string): Promise<void> => {
    try {
      await userRespository.delete(userId);
    } catch (error) {
      console.error("Error al eliminar al usuario:", error);
      throw error;
    }
  },
};

export default UserService;
