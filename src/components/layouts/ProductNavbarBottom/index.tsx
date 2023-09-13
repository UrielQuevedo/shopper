import Product from "@/services/firebase/entities/Product";
import { useEffect, useState } from "react";
import Styles from "./_style.module.scss";
import Link from 'next/link';

const ProductNavbarBottom = ({ products }: { products: Product[] }) => {
  const [{ totalProducts, totalPrice, totalProductsAdded }, setData] = useState({ totalProducts: 0, totalPrice: 0, totalProductsAdded: 0 });
  useEffect(() => {
    const totalPrice = products.reduce((prevValue, { price , quantity }) => prevValue + price * quantity, 0);
    const totalProductsAdded = products.reduce((prevValue, { quantity, price }) => price > 0 ? (prevValue + quantity) : prevValue, 0);
    const totalProducts = products.reduce((prevValue, { quantity }) => prevValue + quantity, 0);

    setData({ totalProducts, totalPrice, totalProductsAdded })
  }, [products]);

  return (
    <div className={Styles.navbar}>
      <Link className={Styles.addButton} href="/product">
      <span className={Styles.icon}>
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="11" width="27" height="5" rx="2" fill="#078080"/>
          <rect x="11" y="27" width="27" height="5" rx="2" transform="rotate(-90 11 27)" fill="#078080"/>
        </svg>
      </span>
      </Link>
      <div>
	<h2>{totalProductsAdded} {totalProducts > 0 ? `/ ${totalProducts}` : ""} productos</h2>
	<h1>${totalPrice - (totalPrice * 0.15)}</h1>
      </div>
      <button className={Styles.continueButton}>Continuar</button>
    </div>
  );
};

export default ProductNavbarBottom;
