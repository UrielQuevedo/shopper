"use client";
import styles from "./page.module.css";
import { Container } from "@mui/material";
import NavbarTitle from "@/components/layouts/NavbarTitle";
import ProductForm from "@/components/organisms/ProductForm";
import { PRODUCT_INPUTS } from "@/utils/inputs";

export default function NewProductPage() {
  return (
    <main>
      <NavbarTitle backLink="/" title="Nuevo Producto" />
      <section className={styles.main}>
        <Container maxWidth="md">
          <ProductForm
            inputs={PRODUCT_INPUTS}
            backLink="/"
            buttonName="Agregar"
            onSubmit={() => {}}
          />
        </Container>
      </section>
    </main>
  );
}
