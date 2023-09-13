import Styles from "./_style.module.scss";

interface SimpleProductCardProps {
  name: string;
  quantity: number;
  note?: string;
}

const SimpleProductCard = ({
  name,
  quantity,
  note,
}: SimpleProductCardProps) => {
  const { width100, container } = Styles;
  return (
    <section className={width100}>
      <article className={container}
      >
        <h1> {name}</h1>
        <span>
          x{quantity}
        </span>
      </article>
      <article
        className={container}
	style={{ marginTop: '8px' }}
      >
          <p>{note}</p>
      </article>
    </section>
  );
};

export default SimpleProductCard;

