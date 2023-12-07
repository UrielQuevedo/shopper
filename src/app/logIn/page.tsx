"use client";
import DefaultNavbarButton from "@/components/atoms/DefaultNavbarButton";
import styles from "./page.module.css";
import NavbarTitle from "@/components/layouts/NavbarTitle";

export default function LogInPage() {
  const logInUser = () => {};

  return (
    <main>
      <NavbarTitle backLink="/logIn" title="Iniciar Sesión" />
      <section className={styles.main}>Ingresar nombre</section>
      <div className={styles.navbar}>
        <div className={styles.buttonContainer}>
          <DefaultNavbarButton name="Entrar" isLoading={false} />
        </div>
      </div>
    </main>
  );
}
