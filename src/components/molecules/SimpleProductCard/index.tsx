import Styles from "./_style.module.scss";

interface SimpleProductCardProps {
  name: string;
  quantity: number;
  note?: string;
  goTo: any;
}

const SimpleProductCard = ({
  name,
  quantity,
  note,
  goTo,
}: SimpleProductCardProps) => {
  const { width100, container } = Styles;
  return (
    <section className={width100} onClick={goTo}>
      <article className={container}>
        <h1> {name}</h1>
        <span>x{quantity}</span>
      </article>
      <article className={container} style={{ marginTop: "8px" }}>
        <p>{note}</p>
      </article>
    </section>
  );
};

export default SimpleProductCard;
