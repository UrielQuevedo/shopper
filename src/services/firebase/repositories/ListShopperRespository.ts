import AbstractRepository from "../util/AbstractCrud";
import { firestore } from "../firebase";
import {
  collection,
  orderBy,
  getDocs,
  query,
  where,
  QueryOrderByConstraint,
  QueryFieldFilterConstraint,
} from "firebase/firestore";
import ListShopper from "../entities/ListShopper";

class ListShopperRepository extends AbstractRepository<ListShopper> {
  constructor() {
    super("listShopper");
  }

  protected mapToObject(product: ListShopper): object {
    return { ...product };
  }

  protected mapFromObject(data: ListShopper): ListShopper {
    return {
      id: data.id,
      title: data.title,
      date: data.date,
      dateCompleted: data.dateCompleted,
      userId: data.userId,
      discountAmount: Number(data.discountAmount)
    } as ListShopper;
  }

  public async getListsShopperByUserId(userId: string) {
    try {
      const listShopperCollection = collection(firestore, "listShopper");
      const q = query(listShopperCollection, where("userId", "==", userId));

      const querySnapshot = await getDocs(q);

      const listShoppers: ListShopper[] = querySnapshot.docs.map((doc) => {
        const listShopperData = doc.data() as ListShopper;
        return { id: doc.id, ...listShopperData };
      });

      return listShoppers;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async getListShopperByIds(ids: string[]) {
    try {
      const listShopperCollection = collection(firestore, "listShopper");
      const q = query(listShopperCollection, where("id", "in", ids));

      const querySnapshot = await getDocs(q);

      const listShoppers: ListShopper[] = querySnapshot.docs.map((doc) => {
        const listShopperData = doc.data() as ListShopper;
        return { id: doc.id, ...listShopperData };
      });

      return listShoppers;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async getAllBy(filterByName: string, ordersBy: string[]) {
    let collectionRef = collection(firestore, "listShopper");
    let whereContraints: QueryFieldFilterConstraint[] = [];
    let orderContraints: QueryOrderByConstraint[] = [];

    if (filterByName !== "") {
      whereContraints.push(where("title", ">=", filterByName));
      whereContraints.push(where("title", ">=", filterByName + "\uf8ff"));
    }

    if (ordersBy.length > 0) {
      ordersBy.forEach((field) => {
        orderContraints.push(orderBy(field));
      });
    }

    const snapshot = await getDocs(
      query(collectionRef, ...whereContraints, ...orderContraints),
    );
    const listShopper: ListShopper[] = [];

    snapshot.forEach((doc) => {
      const list = doc.data() as ListShopper;
      //product.quantity = Number(product.quantity);
      //product.price = Number(product.price);
      listShopper.push(list);
    });

    return listShopper;
  }
}

export default ListShopperRepository;
