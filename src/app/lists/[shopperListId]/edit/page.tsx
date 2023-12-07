"use client";
import NavbarTitle from "@/components/layouts/NavbarTitle";
import styles from "./page.module.css";
import { Container } from "@mui/material";
import ListShopperForm from "@/components/organisms/ListShopperForm";
import { useRouter } from "next/navigation";
import ListShopperController from "@/services/firebase/controller/ListShopperController";
import ListShopper from "@/services/firebase/entities/ListShopper";
import { useEffect, useState } from "react";
import UserService from "@/services/firebase/services/UserService";

export default function EditListPage({ params: { shopperListId } }: { params: { shopperListId: string }; }) {
  const [listShopper, setListShopper] = useState<ListShopper>();
  const back_link = `/lists/${shopperListId}`;
  const router = useRouter();

  const getListShopper = async () => {
    const listShopperResponse = await ListShopperController.getListShopperById(shopperListId);
    setListShopper(listShopperResponse);
  }

  useEffect(() => {
    getListShopper();
  // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [shopperListId]);

  const editList = async (listShopper: ListShopper) => {
    await ListShopperController.editListShopper(listShopper)
    router.push(back_link)
  }

  return (
    <main>
      <NavbarTitle backLink={back_link} title="Editar Lista" />
      <section className={styles.main}>
        <Container maxWidth="md">
          <ListShopperForm
            buttonName="Editar"
            onSubmit={editList}
            defaultListShopper={listShopper}
          />
        </Container>
      </section>
    </main>
  );
}
