import { useState } from "react";
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
  const [loading, setLoading] = useState<boolean>(false);

  const onDecrease = async (event: any) => {
    event.stopPropagation();
    if (loading) return;
    setLoading(true);
    if (quantity === 1) {
      await onDelete();
    } else {
      await handleDecrease();
    }
    setLoading(false);
  };

  const onIncrease = async (event: any) => {
    event.stopPropagation();
    if (loading) return;
    setLoading(true);
    await handleIncrease();
    setLoading(false);
  };

  // TODO: Add icons and loading styles
  return (
    <div className={Styles.productCardButtonContainer}>
      <button onClick={onDecrease} className={Styles.productCardButtonLeft}>
        {quantity === 1 ? "D" : "-"}
      </button>
      <div className={Styles.quantity}>{loading ? "C" : quantity}</div>
      <button onClick={onIncrease} className={Styles.productCardButtonRight}>
        +
      </button>
    </div>
  );
};

export default ProductQuantityButton;
