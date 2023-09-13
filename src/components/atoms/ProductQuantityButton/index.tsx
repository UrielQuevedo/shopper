import Styles from "./_style.module.scss";

interface ProductQuantityButtonProps {
  quantity: number;
  handleDecrease?: () => {};
  handleIncrease?: () => {};
  onDelete: any;
}

const ProductQuantityButton = ({
  quantity,
  handleIncrease,
  handleDecrease,
  onDelete,
}: ProductQuantityButtonProps) => {

  const onDecrease = () => {
    if (quantity === 1) {
      onDelete();
    } else {
      // handleDecrease();
    }
  };

  return (
    <div className={Styles.productCardButtonContainer}>
      <button onClick={onDecrease} className={Styles.productCardButtonLeft}>
        -
      </button>
      <div className={Styles.quantity}>{quantity}</div>
      <button
        onClick={handleIncrease}
        className={Styles.productCardButtonRight}
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantityButton;
