"use client";
import Product from "@/services/firebase/entities/Product";
import ProductService from "@/services/firebase/services/ProductService";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const products_ = await ProductService.getAllProducts();
    setProducts(products_);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className={styles.main}>
      <h1>Shopper</h1>
      {JSON.stringify(products)}
      <h2>Muy pronto...</h2>
    </main>
  );
}
