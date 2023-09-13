import Link from "next/link";
import Styles from "./_style.module.scss";
import { Toolbar } from "@mui/material";

interface NavbarTitleProps {
  title: string;
  backLink: string;
}

const NavbarTitle = ({ title, backLink }: NavbarTitleProps) => {
  return (
    <Link href={backLink} className={Styles.appBar}>
      <Toolbar>
        <h2 className={Styles.title}>{title}</h2>
      </Toolbar>
    </Link>
  );
};

export default NavbarTitle;
