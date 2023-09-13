import SwipeableProductCard from "@/components/molecules/ProductCard";
import Product from "@/services/firebase/entities/Product";
import {
  ActionAnimations,
  SwipeableList,
  SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
import SwipeableCard from "@/components/atoms/SwipeableCard";
import SimpleProductCard from "@/components/molecules/SimpleProductCard";
import { useRouter } from "next/navigation";

const ProductList = ({
  products,
  onDelete,
}: {
  products: Product[];
  onDelete: (productId: string) => void;
}) => {
  const threshold = 0.35;
  const router = useRouter();

  return (
    <SwipeableList threshold={threshold}>
      {products.map(({ id, ...product }) => (
        <SwipeableListItem
          key={id}
          swipeLeft={{
            content: (
              <SwipeableCard direction="right" background="#FF4D4F" action="" />
            ),
            action: () => onDelete(id!),
            actionAnimation: ActionAnimations.REMOVE,
          }}
          swipeRight={{
            content: (
              <SwipeableCard direction="left" background="#00B894" action="" />
            ),
            action: () => router.push(`/product/${id}`),
            actionAnimation: ActionAnimations.REMOVE,
          }}
        >
          {!product.price && product.quantity > 0 && (
            <SimpleProductCard {...product} />
          )}
          {product.price > 0 && (
            <SwipeableProductCard {...product} onDelete={() => onDelete(id!)} />
          )}
        </SwipeableListItem>
      ))}
    </SwipeableList>
  );
};

export default ProductList;
