import Product from '@/services/firebase/entities/Product';
import Styles from './_style.module.scss';
import {
  ActionAnimations,
  SwipeableList,
  SwipeableListItem,
} from '@sandstreamdev/react-swipeable-list';
import SwipeableCard from '@/components/atoms/SwipeableCard';
import SimpleProductCard from '@/components/molecules/SimpleProductCard';
import ProductController from '@/services/firebase/controller/ProductController';

const ProductListFast = ({
  products,
  updateProducts,
  shopperListId,
  goTo,
}: {
  products: Product[];
  updateProducts: () => Promise<void>;
  shopperListId: string;
  goTo: any;
}) => {
  const threshold = 0.35;

  const goToProduct = (id?: string) => {
    goTo(`/lists/${shopperListId}/product/${id}`);
  };

  const markProduct = async (id: string) => {
    await ProductController.markProduct(id);
    await updateProducts();
  };

  return (
    <SwipeableList threshold={threshold}>
      {products.map(({ id, ...product }) => (
        <SwipeableListItem
          key={id}
          swipeLeft={{
            content: (
              <SwipeableCard direction="right" background="#FF4D4F" action="" />
            ),
            action: () => goToProduct(id!),
            actionAnimation: ActionAnimations.NONE,
          }}
          swipeRight={{
            content: (
              <SwipeableCard direction="left" background="#00B894" action="" />
            ),
            action: () => markProduct(id!),
            actionAnimation: ActionAnimations.RETURN,
          }}
        >
          {product.marked && <div className={Styles.marked}></div>}
          <SimpleProductCard {...product} />
        </SwipeableListItem>
      ))}
    </SwipeableList>
  );
};

export default ProductListFast;
