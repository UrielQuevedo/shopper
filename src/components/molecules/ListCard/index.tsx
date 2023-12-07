"use client";
import { Container } from "@mui/material";
import Styles from "./_style.module.scss";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ListShopperController from "@/services/firebase/controller/ListShopperController";

interface ListCardProps {
  id?: string;
  title: string;
  date: string;
  dateCompleted?: string;
}

export default function ListCard({
  id,
  title,
  date,
  dateCompleted,
}: ListCardProps) {
  const router = useRouter();
  const [{ totalProducts, totalProductsAdded, totalPrice }, setData] = useState({
    totalProducts: 0,
    totalProductsAdded: 0,
    totalPrice: 0
  });

  const goToListPage = () => {
    router.push(`/lists/${id}`);
  };

  const getData = async () => {
    const response = await ListShopperController.getDataFromListShopper(id!);
    setData(response);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <Container maxWidth="md" className={Styles.card} onClick={goToListPage}>
      <h1 className={Styles.titleCard}>{title}</h1>
      <h3> {date} </h3>
      {dateCompleted && <h3 style={{ color: "green" }}> {dateCompleted} </h3>}
      {totalProducts === totalProductsAdded && totalProducts !== 0 && (
        <h2 className={Styles.completed}>
          Completado{" "}
          <span className={Styles.totalProducts}>({totalProducts})</span>
        </h2>
      )}
      {totalProducts === 0 && <h2 className={Styles.empty}>VACIO</h2>}
      {totalProducts > totalProductsAdded && (
        <h2 className={Styles.pending}>
          {totalProductsAdded}/{totalProducts}
        </h2>
      )}
    </Container>
  );
}
