"use client";
import styles from "./page.module.css";
import { Container } from "@mui/material";
import NavbarTitle from "@/components/layouts/NavbarTitle";
import ProductForm from "@/components/organisms/ProductForm";
import { useEffect, useState } from "react";
import ProductService from "@/services/firebase/services/ProductService";
import Product from "@/services/firebase/entities/Product";
import Loading from "@/components/atoms/Loading";
import { PRODUCT_EDIT_INPUTS } from "@/utils/inputs";

const BACK_LINK = "/";

export default function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const [defaultProduct, setDefaultProduct] = useState<Product | null>();
  const [loading, setLoading] = useState<boolean>(true);

  const getProduct = async () => {
    setLoading(true);
    const product = await ProductService.getProductById(params.id);
    setDefaultProduct(product);
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, [params.id]);

  return (
    <main>
      <NavbarTitle backLink={BACK_LINK} title="Editar Producto" />
      <section className={styles.main}>
        <Loading isLoading={loading} />
        {!loading && (
          <Container maxWidth="md">
            <ProductForm
              defaultProduct={defaultProduct}
              backLink={BACK_LINK}
              buttonName="Guardar"
              inputs={PRODUCT_EDIT_INPUTS}
              onSubmit={() => {}}
            />
          </Container>
        )}
      </section>
    </main>
  );
}
