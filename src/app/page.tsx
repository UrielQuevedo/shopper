"use client";
import ProductNavbarBottom from "@/components/layouts/ProductNavbarBottom";
import ProductList from "@/components/organisms/ProductList";
import Product from "@/services/firebase/entities/Product";
import ProductService from "@/services/firebase/services/ProductService";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/layouts/Navbar";
import InputSearch from "@/components/atoms/InputSearch";
import Loading from "@/components/atoms/Loading";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const getProducts = async (search: string) => {
    const products_ = await ProductService.getAllProducts(search);
    setProducts(products_);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getProducts(search);
  }, [search]);

  const handleSearch = (newSearch: string) => {
    setSearch(() => newSearch);
  };

  const deleteProduct = async (productId: string) => {
    await ProductService.deleteProduct(productId);
    await getProducts(search);
  };

  const increaseProduct = async (productId: string) => {
    await ProductService.updateQuantityProduct(productId, "INCREASE");
    await getProducts(search);
  };
  const decreaseProduct = async (productId: string) => {
    await ProductService.updateQuantityProduct(productId, "DECREASE");
    await getProducts(search);
  };

  return (
    <main>
      <Navbar />
      <section className={styles.main}>
        <InputSearch handleSearch={handleSearch} />
        <Loading isLoading={loading} />
        <ProductList
          products={products}
          onDelete={deleteProduct}
          onDecrease={decreaseProduct}
          onIncrease={increaseProduct}
        />
      </section>
      <ProductNavbarBottom products={products} />
    </main>
  );
}
