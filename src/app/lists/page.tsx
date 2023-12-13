'use client';
import NavbarTitle from '@/components/layouts/NavbarTitle';
import styles from './page.module.css';
import { Container } from '@mui/material';
import ListShopperForm from '@/components/organisms/ListShopperForm';
import { useRouter } from 'next/navigation';
import ListShopperController from '@/services/firebase/controller/ListShopperController';
import ListShopper from '@/services/firebase/entities/ListShopper';
import { useEffect, useState } from 'react';
import UserService from '@/services/firebase/services/UserService';

export default function CreateListPage() {
  const [userId, setUserId] = useState<string>('');
  const back_link = '/';
  const router = useRouter();

  const getUserId = async () => {
    const { id } = await UserService.getUserByName('Po');
    setUserId(id!);
  };

  useEffect(() => {
    getUserId();
  }, []);

  const addNewList = async (listShopper: ListShopper) => {
    await ListShopperController.createList({ ...listShopper, userId });
    router.push(back_link);
  };

  return (
    <main>
      <NavbarTitle backLink={back_link} title="Nueva Lista" />
      <section className={styles.main}>
        <Container maxWidth="md">
          <ListShopperForm buttonName="Agregar" onSubmit={addNewList} />
        </Container>
      </section>
    </main>
  );
}
