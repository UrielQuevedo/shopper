import { calculateDiscount } from '@/utils/functions';
import Styles from './_style.module.scss';

interface ProductQuantityPriceProps {
  price: number;
  discount?: number;
}

const ProductQuantityPrice = ({
  discount,
  price,
}: ProductQuantityPriceProps) => {
  if (discount && discount > 0) {
    return (
      <div>
        <div className={Styles.discount}>c/u ${price}</div>
        <div className={Styles.price}>
          c/u ${calculateDiscount(price, discount)}
        </div>
      </div>
    );
  }

  return <div>c/u ${price}</div>;
};

export default ProductQuantityPrice;
