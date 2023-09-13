import Styles from "./_style.module.scss";
import ProductQuantityButton from "@/components/atoms/ProductQuantityButton";

interface SwipeableProductCardProp {
  price: number;
  name: string;
  quantity: number;
  note?: string;
  onDelete: () => void;
}

const SwipeableProductCard = ({
  name,
  price,
  quantity,
  note,
  onDelete,
}: SwipeableProductCardProp) => {
  const { width100, container, description } = Styles;
  return (
    <section className={width100}>
      <article className={container}
      >
        <h1> {name}</h1>
        <h2>
          ${price * quantity}
        </h2>
      </article>
      <article
        className={container}
	style={{ marginTop: '8px' }}
      >
        <div className={description}>
          <div>c/u ${price}</div>
          <p>{note}</p>
        </div>
        <ProductQuantityButton quantity={quantity} onDelete={onDelete} />
      </article>
    </section>
  );
};

export default SwipeableProductCard;
