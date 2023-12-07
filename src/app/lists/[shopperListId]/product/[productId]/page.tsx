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

export default function EditProductPage({
  params,
}: {
  params: { productId: string, shopperListId: string };
}) {
  const [defaultProduct, setDefaultProduct] = useState<Product | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const back_link = `/lists/${params.shopperListId}`

  const getProduct = async () => {
    setLoading(true);
    const product = await ProductService.getProductById(params.productId);
    setDefaultProduct(product);
    setLoading(false);
  };

  const editProduct = async (product: Product) => {
    await ProductService.updateProduct(params.productId, product);
  };

  useEffect(() => {
    getProduct();
  }, [params]);

  return (
    <main>
      <NavbarTitle backLink={back_link} title="Editar Producto" />
      <section className={styles.main}>
        <Loading isLoading={loading} />
        {!loading && (
          <Container maxWidth="md">
            <ProductForm
              defaultProduct={defaultProduct}
              backLink={back_link}
              buttonName="Guardar"
              inputs={PRODUCT_EDIT_INPUTS}
              onSubmit={editProduct}
              listShopperId={params.shopperListId}
            />
          </Container>
        )}
      </section>
    </main>
  );
}
