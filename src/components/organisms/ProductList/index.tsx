import SwipeableProductCard from '@/components/molecules/ProductCard';
import Product from '@/services/firebase/entities/Product';
import {
  ActionAnimations,
  SwipeableList,
  SwipeableListItem,
} from '@sandstreamdev/react-swipeable-list';
import SwipeableCard from '@/components/atoms/SwipeableCard';
import SimpleProductCard from '@/components/molecules/SimpleProductCard';
import ProductService from '@/services/firebase/services/ProductService';

const ProductList = ({
  products,
  updateProducts,
  shopperListId,
  goTo,
  discount,
}: {
  products: Product[];
  updateProducts: () => Promise<void>;
  shopperListId: string;
  goTo: any;
  discount?: number;
}) => {
  const threshold = 0.35;

  const onDecrease = (productId: string) => async () => {
    await ProductService.updateQuantityProduct(productId, 'DECREASE');
    await updateProducts();
  };

  const onIncrease = (productId: string) => async () => {
    await ProductService.updateQuantityProduct(productId, 'INCREASE');
    await updateProducts();
  };

  const onDelete = (productId: string) => async () => {
    await ProductService.deleteProduct(productId);
    await updateProducts();
  };

  const goToProduct = (id?: string) => {
    goTo(`/lists/${shopperListId}/product/${id}`);
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
            action: onDelete(id!),
            actionAnimation: ActionAnimations.REMOVE,
          }}
          swipeRight={{
            content: (
              <SwipeableCard direction="left" background="#00B894" action="" />
            ),
            action: () => goToProduct(id),
            actionAnimation: ActionAnimations.REMOVE,
          }}
        >
          {!product.price && product.quantity > 0 && (
            <SimpleProductCard {...product} goTo={() => goToProduct(id)} />
          )}
          {product.price > 0 && (
            <SwipeableProductCard
              {...product}
              onDelete={onDelete(id!)}
              handleDecrease={onDecrease(id!)}
              handleIncrease={onIncrease(id!)}
              discount={discount}
            />
          )}
        </SwipeableListItem>
      ))}
    </SwipeableList>
  );
};

export default ProductList;
