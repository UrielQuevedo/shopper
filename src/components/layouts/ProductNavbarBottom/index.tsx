import Styles from './_style.module.scss';
import Link from 'next/link';
import { calculateDiscount } from '@/utils/functions';
import { Button } from '@mui/material';

interface ProductNavbarBottomProps {
  totalProductsAdded: number;
  totalProducts: number;
  totalPrice: number;
  listShopperId: string;
  discountAmount: number;
  goTo: any;
}

const ProductNavbarBottom = ({
  totalProducts,
  totalProductsAdded,
  totalPrice,
  listShopperId,
  discountAmount,
  goTo,
}: ProductNavbarBottomProps) => {
  return (
    <div className={Styles.navbar}>
      <Button
        className={Styles.addButton}
        onClick={() => goTo(`/lists/${listShopperId}/product`)}
      >
        <span className={Styles.icon}>
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="11" width="27" height="5" rx="2" fill="#078080" />
            <rect
              x="11"
              y="27"
              width="27"
              height="5"
              rx="2"
              transform="rotate(-90 11 27)"
              fill="#078080"
            />
          </svg>
        </span>
      </Button>
      <div>
        <h2>
          {totalProductsAdded} {totalProducts > 0 ? `/ ${totalProducts}` : ''}{' '}
          productos
        </h2>
        {calculateDiscount(totalPrice, discountAmount) !== 0 && (
          <h1>${calculateDiscount(totalPrice, discountAmount)}</h1>
        )}
      </div>
      <button className={Styles.continueButton}>Continuar</button>
    </div>
  );
};

export default ProductNavbarBottom;
