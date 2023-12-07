"use client";

import ListShopperController from "@/services/firebase/controller/ListShopperController";
import ListShopperRepository from "@/services/firebase/repositories/ListShopperRespository";
import ListShopperService from "@/services/firebase/services/ListShopperService";
import ProductService from "@/services/firebase/services/ProductService";
import UserService from "@/services/firebase/services/UserService";

export default function ListsPage() {
  const createUser = async () => {
    const user = await UserService.createUser({
      listShopperIds: [],
      name: "Po",
    });
    console.log(user);
  };

  const createProduct = async () => {
    await ProductService.createProduct({
      name: "Test Producto",
      price: 1200,
      quantity: 1,
      listShopperId: "ctZT4T5D13aWvGTbCzqZ",
    });
  };

  const createList = async () => {
    await ListShopperService.createList({
      title: "Coto Po 2",
      date: "11/11/2023",
      productsIds: [],
      totalAddedNumber: 0,
      userId: "oHLFFr4MiUyzN8BmhJPL",
    });
  };

  const getUser = async () => {
    const user = await UserService.getUserByName("Po");
    console.log(user);
  };

  const addProductToListShopper = async () => {
    const data = await ListShopperController.addProductToListShopper(
      "ctZT4T5D13aWvGTbCzqZ",
      {
        price: 1000,
        quantity: 0,
        listShopperId: "ctZT4T5D13aWvGTbCzqZ",
        name: "Oreo",
      },
    );

    console.log({ data });
  };

  return (
    <main>
      <h1>Admin</h1>
      <p>Crear usuario</p>
      <button onClick={createUser}>Crear Usuario</button>
      <p>Crear Lista</p>
      <button onClick={createList}>Crear Lista</button>
      <p>Crear Product</p>
      <button onClick={createProduct}>Crear Producto</button>
      <p>Buscar Usuario</p>
      <button onClick={getUser}>Buscar Usuario</button>
      <p>Agregar Producto</p>
      <button onClick={addProductToListShopper}>Agregar Producto</button>
    </main>
  );
}
