"use client";
import styles from "./page.module.css";
import { Container } from "@mui/material";
import NavbarTitle from "@/components/layouts/NavbarTitle";
import ProductForm from "@/components/organisms/ProductForm";
import { PRODUCT_INPUTS } from "@/utils/inputs";
import Product from "@/services/firebase/entities/Product";
import ProductController from "@/services/firebase/controller/ProductController";

export default function NewProductPage({ params: { shopperListId } }: { params: { shopperListId: string }; }) {
  const back_link = `/lists/${shopperListId}`
  const addNewProduct = async (product: Product) => {
    console.log({ product })
    await ProductController.createProduct(product, shopperListId);
  };

  return (
    <main>
      <NavbarTitle backLink={back_link} title="Nuevo Producto" />
      <section className={styles.main}>
        <Container maxWidth="md">
          <ProductForm
            inputs={PRODUCT_INPUTS}
            backLink={back_link}
            buttonName="Agregar"
            onSubmit={addNewProduct}
            listShopperId={shopperListId}
          />
        </Container>
      </section>
    </main>
  );
}
