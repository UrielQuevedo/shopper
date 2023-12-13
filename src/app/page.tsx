"use client";
import styles from "./page.module.css";
import NavbarTitle from "@/components/layouts/NavbarTitle";
import ListCard from "@/components/molecules/ListCard";
import DefaultNavbarButton from "@/components/atoms/DefaultNavbarButton";
import { useEffect, useState } from "react";
import UserService from "@/services/firebase/services/UserService";
import ListShopper from "@/services/firebase/entities/ListShopper";
import ListShopperController from "@/services/firebase/controller/ListShopperController";
import { useRouter } from "next/navigation";

export default function Home() {
  const [listShopper, setListShopper] = useState<ListShopper[]>([]);
  const router = useRouter();

  const getListShopper = async () => {
    const data = await UserService.getUserByName("Po");
    const listShoppersResponse =
      await ListShopperController.getShoppersListFromUserById(data.id!);

    setListShopper(listShoppersResponse);
  };

  const goToCreateList = () => {
    router.push("/lists");
  };

  useEffect(() => {
    getListShopper();
  }, []);

  return (
    <main>
      <NavbarTitle backLink="/" title="Listas" />
      <section className={styles.main}>
        <div className={styles.listContainer}>
          {listShopper.map((listProps) => (
            <ListCard {...listProps} key={listProps.id} />
          ))}
        </div>
      </section>
      <div className={styles.navbar}>
        <div className={styles.buttonContainer}>
          <DefaultNavbarButton
            name="Nueva Lista"
            isLoading={false}
            onClick={goToCreateList}
          />
        </div>
      </div>
    </main>
  );
}
