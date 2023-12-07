import Styles from "./_style.module.scss";

interface NavbarSubtotalProps {
  isLoading: boolean;
  price: number;
  showPrice: boolean;
  priceAdded: number;
}

const NavbarSubtotal = ({
  isLoading,
  price,
  showPrice,
  priceAdded,
}: NavbarSubtotalProps) => {
  if (!isLoading && showPrice) {
    return (
      <div>
        <div className={Styles.container}>
          <div>Se agregaria</div>
          <div>${priceAdded}</div>
        </div>
        <div className={Styles.container}>
          <div>En total quedaria</div>
          <div>${price}</div>
        </div>
      </div>
    );
  }
};

export default NavbarSubtotal;
