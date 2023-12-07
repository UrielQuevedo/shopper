"use client";
import User from "@/services/firebase/entities/User";
import styles from "./page.module.css";
import NavbarTitle from "@/components/layouts/NavbarTitle";
import ListShopper from "@/services/firebase/entities/ListShopper";
import Product from "@/services/firebase/entities/Product";

const USER: User = {
  name: "Po",
  listShopperIds: [],
};

const LISTA: ListShopper = {};

const PRODUCTO: Product = {};

export default function DetailPage() {
  const crearUsuario = () => {};

  const crearLista = () => {};

  const crearProducto = () => {};

  return (
    <main>
      <NavbarTitle backLink="/" title="Detalle" />
      <section className={styles.main}>
        <button onClick={crearUsuario}>Crear Usuario</button>
        <button onClick={crearLista}>Crear Lista</button>
        <button onClick={crearProducto}>Crear Producto</button>
      </section>
    </main>
  );
}
