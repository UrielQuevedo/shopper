'use client';
import styles from './page.module.css';
import NavbarTitle from '@/components/layouts/NavbarTitle';
import ListCard from '@/components/molecules/ListCard';
import DefaultNavbarButton from '@/components/atoms/DefaultNavbarButton';
import { useEffect, useState } from 'react';
import UserService from '@/services/firebase/services/UserService';
import ListShopper from '@/services/firebase/entities/ListShopper';
import ListShopperController from '@/services/firebase/controller/ListShopperController';
import { useRouter } from 'next/navigation';
import Loading from '@/components/atoms/Loading';

export default function Home() {
  const [listShopper, setListShopper] = useState<ListShopper[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingRouter, setLoadingRouter] = useState<boolean>(false);
  const router = useRouter();

  const getListShopper = async () => {
    setLoading(true);
    const data = await UserService.getUserByName('Po');
    const listShoppersResponse =
      await ListShopperController.getShoppersListFromUserById(data.id!);

    setListShopper(listShoppersResponse);
    setLoading(false);
  };

  const goToCreateList = () => {
    setLoadingRouter(true);
    router.push('/lists');
  };

  useEffect(() => {
    getListShopper();
  }, []);

  return (
    <main>
      <NavbarTitle
        loading={loading}
        backLink="/"
        title={`Listas (${listShopper.length})`}
      />
      <section className={styles.main}>
        <Loading isLoading={loading} />
        {!loading && (
          <>
            <div className={styles.listContainer}>
              {listShopper.map((listProps) => (
                <ListCard {...listProps} key={listProps.id} />
              ))}
            </div>
            <div className={styles.navbar}>
              <div className={styles.buttonContainer}>
                <DefaultNavbarButton
                  name="Nueva Lista"
                  isLoading={loadingRouter}
                  onClick={goToCreateList}
                />
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
