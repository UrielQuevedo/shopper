"use client";
import ProductNavbarBottom from "@/components/layouts/ProductNavbarBottom";
import ProductList from "@/components/organisms/ProductList";
import Product from "@/services/firebase/entities/Product";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/layouts/Navbar";
import InputSearch from "@/components/atoms/InputSearch";
import Loading from "@/components/atoms/Loading";
import { useParams } from "next/navigation";
import ListShopperController from "@/services/firebase/controller/ListShopperController";
import ProductController from "@/services/firebase/controller/ProductController";

interface ListShopperProps {
  title: string | undefined;
}

interface ListShopperData {
  totalProducts: number;
  totalProductsAdded: number;
  totalPrice: number;
  discountAmount: number;
}

export default function List() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [{ totalProducts, totalProductsAdded, totalPrice, discountAmount }, setData] =
    useState<ListShopperData>({
      totalProducts: 0,
      totalProductsAdded: 0,
      totalPrice: 0,
      discountAmount: 0,
    });
  const [{ title }, setListShopper] = useState<ListShopperProps>({
    title: "",
  });
  const { shopperListId } = useParams();

  const getProducts = async (search: string) => {
    const products_ = await ProductController.getProductsByName(shopperListId, search);
    setProducts(products_);
    setLoading(false);
  };

  const getListShopperData = async () => {
    const data = await ListShopperController.getDataFromListShopper(shopperListId);
    setData(data);
  };

  const getShopperList = async () => {
    const listShopperResponse = await ListShopperController.getListShopperById(
      shopperListId,
    );
    setListShopper(listShopperResponse);
  };

  useEffect(() => {
    getShopperList();
    getListShopperData();
  }, [shopperListId]);

  useEffect(() => {
    setLoading(true);
    getProducts(search);
  }, [search, shopperListId]);

  const handleSearch = (newSearch: string) => {
    setSearch(() => newSearch);
  };

  const updateProducts = async () => {
    await getProducts(search);
    await getListShopperData();
  };

  return (
    <main>
      <Navbar title={title} listShopperId={shopperListId} />
      <section className={styles.main}>
        <InputSearch handleSearch={handleSearch} />
        <Loading isLoading={loading} />
        <ProductList products={products} updateProducts={updateProducts} shopperListId={shopperListId}/>
      </section>
      <ProductNavbarBottom
        totalProducts={totalProducts}
        totalProductsAdded={totalProductsAdded}
        totalPrice={totalPrice}
        listShopperId={shopperListId}
        discountAmount={discountAmount}
      />
    </main>
  );
}
