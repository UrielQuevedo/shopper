import Styles from "./_style.module.scss";

export interface ProductQuantityButtonProps {
  quantity: number;
  handleDecrease: () => Promise<void>;
  handleIncrease: () => Promise<void>;
  onDelete: () => Promise<void>;
}

const ProductQuantityButton = ({
  quantity,
  handleIncrease,
  handleDecrease,
  onDelete,
}: ProductQuantityButtonProps) => {
  const onDecrease = async () => {
    if (quantity === 1) {
      await onDelete();
    } else {
      await handleDecrease();
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
