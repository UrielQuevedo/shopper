import ProductTotalPrice from '@/components/atoms/ProductTotalPrice';
import Styles from './_style.module.scss';
import ProductQuantityButton, {
  ProductQuantityButtonProps,
} from '@/components/atoms/ProductQuantityButton';
import ProductQuantityPrice from '@/components/atoms/ProductQuantityPrice';

interface SwipeableProductCardProp extends ProductQuantityButtonProps {
  price: number;
  name: string;
  quantity: number;
  note?: string;
  discount?: number;
}

const SwipeableProductCard = ({
  name,
  price,
  quantity,
  discount,
  note,
  ...props
}: SwipeableProductCardProp) => {
  const { width100, container, description } = Styles;
  return (
    <section className={width100}>
      <article className={container}>
        <h1> {name}</h1>
        <ProductTotalPrice
          discount={discount}
          price={price}
          quantity={quantity}
        />
      </article>
      <article className={container} style={{ marginTop: '8px' }}>
        <div className={description}>
          <ProductQuantityPrice discount={discount} price={price} />
          <p>{note}</p>
        </div>
        <ProductQuantityButton quantity={quantity} {...props} />
      </article>
    </section>
  );
};

export default SwipeableProductCard;
