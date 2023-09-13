/* eslint-disable no-unused-vars */
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDoc,
  DocumentData,
} from "firebase/firestore";

import { firestore } from "../firebase";

interface WhereType {
  where: string;
  value: string;
}

abstract class AbstractRepository<T> {
  protected collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  protected abstract mapToObject(entity: T): object;

  protected abstract mapFromObject(data: object): T;

  public getById = async (id: string): Promise<DocumentData | undefined> => {
    try {
      const docRef = doc(firestore, this.collectionName, id);
      const docSnap = await getDoc(docRef);

      return docSnap.data();
    } catch (error) {
      console.log(error);
    }
  };

  public getAll = async (): Promise<T[]> => {
    try {
      const querySnapshot = await getDocs(
        collection(firestore, this.collectionName),
      );
      const entities: T[] = [];
      querySnapshot.forEach((doc) => {
        const entity = this.mapFromObject(doc.data());
        entities.push(entity);
      });
      return entities;
    } catch (error) {
      console.log(error);
      console.error(
        `Error al obtener los elementos de ${this.collectionName}:`,
        error,
      );
      throw error;
    }
  };

  public createIfNotExist = async (
    entity: T,
    whereCondition: WhereType,
  ): Promise<void> => {
    try {
      if (whereCondition && whereCondition.where && whereCondition.value) {
        const { where: where_, value } = whereCondition;
        const existsQuery = query(
          collection(firestore, this.collectionName),
          where(where_, "==", value),
        );
        const existsSnapshot = await getDocs(existsQuery);

        if (!existsSnapshot.empty) {
          throw new Error(`El ${where_} de la entidad ya existe.`);
        }

        await this.create(entity);
      }
    } catch (error) {
      console.error(
        `Error al crear un elemento si no existe ya el campo: ${error}`,
      );
      throw error;
    }
  };

  public create = async (entity: T): Promise<void> => {
    try {
      const data = this.mapToObject(entity);

      const docRef = await addDoc(
        collection(firestore, this.collectionName),
        data,
      );
      const newEntity = { ...entity, id: docRef.id };
      await this.update(docRef.id, newEntity);
    } catch (error) {
      console.error(
        `Error al crear un elemento en ${this.collectionName}:`,
        error,
      );
      throw error;
    }
  };

  public update = async (id: string, updatedEntity: T): Promise<void> => {
    try {
      const data = this.mapToObject(updatedEntity);
      const docRef = doc(firestore, this.collectionName, id);
      await updateDoc(docRef, data);
    } catch (error) {
      console.error(
        `Error al actualizar el elemento de ${this.collectionName} con ID ${id}:`,
        error,
      );
      throw error;
    }
  };

  public delete = async (id: string): Promise<void> => {
    try {
      const docRef = doc(firestore, this.collectionName, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error(
        `Error al eliminar el elemento de ${this.collectionName} con ID ${id}:`,
        error,
      );
      throw error;
    }
  };
}

export default AbstractRepository;
