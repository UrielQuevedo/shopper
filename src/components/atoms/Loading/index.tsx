import Styles from "./_style.module.scss";
import Image from "next/image";

interface LoadingProp {
  isLoading: boolean;
}

const Loading = ({
  isLoading
}: LoadingProp) => {

  return isLoading && (
    <section className={Styles.container}>
      <Image src="/cat-loading.gif" alt="my gif" height={150} width={190} className={Styles.image}/>
      <h2 className={Styles.text}>Cargando</h2>
    </section>
  );
};

export default Loading;

