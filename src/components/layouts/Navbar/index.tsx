import Styles from "./_style.module.scss";
import { Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <div className={Styles.appBar}>
      <Toolbar>
        <h2 className={Styles.title}>Coto</h2>
      </Toolbar>
    </div>
  );
};

export default Navbar;
