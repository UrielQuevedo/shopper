import Styles from "./_style.module.scss";

interface NavbarSubtotalProps {
  isLoading: boolean;
  price: number;
  showPrice: boolean;
}

const NavbarSubtotal = ({
  isLoading,
  price,
  showPrice,
}: NavbarSubtotalProps) => {
  if (!isLoading && showPrice) {
    return (
      <div className={Styles.container}>
        <div>Quedaria</div>
        <div>${price}</div>
      </div>
    );
  }
};

export default NavbarSubtotal;
