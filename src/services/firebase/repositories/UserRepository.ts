import User from "../entities/User";
import AbstractRepository from "../util/AbstractCrud";

class UserRepository extends AbstractRepository<User> {
  constructor() {
    super("users");
  }

  protected mapToObject(user: User): object {
    return { ...user };
  }

  protected mapFromObject(data: User): User {
    return {
      id: data.id,
      name: data.name,
      listShopperIds: data.listShopperIds,
    } as User;
  }
}

export default UserRepository;
