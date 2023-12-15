'use client';
import { Container } from '@mui/material';
import Styles from './_style.module.scss';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ListShopperController from '@/services/firebase/controller/ListShopperController';
import { NestedMiddlewareError } from 'next/dist/build/utils';

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
  const [loading, setLoading] = useState<boolean>(true);
  const [{ totalProducts, totalProductsAdded }, setData] = useState({
    totalProducts: 0,
    totalProductsAdded: 0,
    totalPrice: 0,
  });

  const goToListPage = () => {
    router.push(`/lists/${id}`);
  };

  const getData = async () => {
    setLoading(true);
    const response = await ListShopperController.getDataFromListShopper(id!);
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const showIfCompleted = (totalProducts: number, totalProductsAdded: number) =>
    totalProducts === totalProductsAdded && totalProducts !== 0;

  const showIfEmpty = (totalProducts: number) =>
    totalProducts === 0 && !loading;

  const showIfExistProduct = (
    totalProducts: number,
    totalProductsAdded: number
  ) => totalProducts > totalProductsAdded;

  return (
    <Container maxWidth="md" className={Styles.card} onClick={goToListPage}>
      <h1 className={Styles.titleCard}>{title}</h1>
      <h3> {date} </h3>
      {dateCompleted && <h3 style={{ color: 'green' }}> {dateCompleted} </h3>}
      {showIfCompleted(totalProducts, totalProductsAdded) && (
        <h2 className={Styles.completed}>
          {'Completado '}
          <span className={Styles.totalProducts}>({totalProducts})</span>
        </h2>
      )}
      {showIfEmpty(totalProducts) && <h2 className={Styles.empty}>VACIO</h2>}
      {showIfExistProduct(totalProducts, totalProductsAdded) && (
        <h2 className={Styles.pending}>
          {totalProductsAdded}/{totalProducts}
        </h2>
      )}
      {loading && <h2 className={Styles.pending}>...</h2>}
    </Container>
  );
}
