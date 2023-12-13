import Link from "next/link";
import Styles from "./_style.module.scss";
import { Toolbar } from "@mui/material";

interface NavbarTitleProps {
  title: string;
  backLink: string;
  loading?: boolean;
}

const NavbarTitle = ({ title, backLink, loading = false }: NavbarTitleProps) => {
  return (
    <Link href={backLink} className={Styles.appBar}>
      <Toolbar>
        <h2 className={Styles.title}> {(loading ? '...' : title) }</h2>
      </Toolbar>
    </Link>
  );
};

export default NavbarTitle;
