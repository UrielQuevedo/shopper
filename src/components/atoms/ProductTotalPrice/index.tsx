import { calculateDiscount } from '@/utils/functions';
import Styles from './_style.module.scss';

interface ProductTotalPriceProps {
  price: number;
  quantity: number;
  discount?: number;
}

const ProductTotalPrice = ({
  discount,
  price,
  quantity,
}: ProductTotalPriceProps) => {
  if (discount && discount > 0) {
    return (
      <div className={Styles.main}>
        <h3 className={Styles.discount}>${price * quantity}</h3>
        <h2 className={Styles.price}>
          ${calculateDiscount(price * quantity, discount)}
        </h2>
      </div>
    );
  }

  return <h2>${price * quantity}</h2>;
};

export default ProductTotalPrice;
