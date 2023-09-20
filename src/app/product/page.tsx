"use client";
import styles from "./page.module.css";
import { Container } from "@mui/material";
import NavbarTitle from "@/components/layouts/NavbarTitle";
import ProductForm from "@/components/organisms/ProductForm";
import { PRODUCT_INPUTS } from "@/utils/inputs";
import ProductService from "@/services/firebase/services/ProductService";
import Product from "@/services/firebase/entities/Product";

export default function NewProductPage() {
  const addNewProduct = async (product: Product) => {
    await ProductService.createProduct(product);
  };

  return (
    <main>
      <NavbarTitle backLink="/" title="Nuevo Producto" />
      <section className={styles.main}>
        <Container maxWidth="md">
          <ProductForm
            inputs={PRODUCT_INPUTS}
            backLink="/"
            buttonName="Agregar"
            onSubmit={addNewProduct}
          />
        </Container>
      </section>
    </main>
  );
}
