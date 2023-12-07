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
import ProductListFast from "@/components/organisms/ProductListFast";

const COMPONENTS_CONFIG = {
  Fast: {
    ProductListComponent: ProductListFast,
    ProductNavbarBottomComponent: ProductNavbarBottom,
  },
  Normal: {
    ProductListComponent: ProductList,
    ProductNavbarBottomComponent: ProductNavbarBottom,
  },
};

interface ListShopperProps {
  title: string | undefined;
  marked?: boolean;
  type: "Fast" | "Normal";
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
  const [
    { totalProducts, totalProductsAdded, totalPrice, discountAmount },
    setData,
  ] = useState<ListShopperData>({
    totalProducts: 0,
    totalProductsAdded: 0,
    totalPrice: 0,
    discountAmount: 0,
  });
  const [{ title, marked, type }, setListShopper] = useState<ListShopperProps>({
    title: "...",
    type: "Fast",
  });
  const { shopperListId } = useParams();
  const { ProductListComponent, ProductNavbarBottomComponent } =
    COMPONENTS_CONFIG[type] || {};

  const getProducts = async (search: string) => {
    const products_ = await ProductController.getProductsByName(
      shopperListId,
      search,
    );
    setProducts(products_);
    setLoading(false);
  };

  const getListShopperData = async () => {
    const data = await ListShopperController.getDataFromListShopper(
      shopperListId,
    );
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shopperListId]);

  useEffect(() => {
    setLoading(true);
    getProducts(search);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {ProductListComponent && (
          <ProductListComponent
            products={products}
            updateProducts={updateProducts}
            shopperListId={shopperListId}
          />
        )}
      </section>
      {ProductNavbarBottomComponent && (
        <ProductNavbarBottomComponent
          totalProducts={totalProducts}
          totalProductsAdded={totalProductsAdded}
          totalPrice={totalPrice}
          listShopperId={shopperListId}
          discountAmount={discountAmount}
        />
      )}
    </main>
  );
}
