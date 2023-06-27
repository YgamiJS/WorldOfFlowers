import { IFavoriteProduct } from "@/types/types";
import styles from "./FavoriteProduct.module.scss";
import {
  incrementCount,
  decrementCount,
  removeFavorite,
  FetchRemoveFavoriteProduct,
  FetchIncremenetFavoriteProduct,
  FetchDecremenetFavoriteProduct,
} from "@/store/FavoriteProductsSlice";
import { useAppDispatch } from "@/hooks/useRedux";

interface IProps {
  product: IFavoriteProduct;
  [x: string]: any;
}

export const FavoriteProduct = ({ product }: IProps) => {
  const dispath = useAppDispatch();

  const increment = () => {
    dispath(incrementCount(product.id));
    dispath(FetchIncremenetFavoriteProduct(product));
  };
  const decrement = () => {
    dispath(decrementCount(product.id));
    dispath(FetchDecremenetFavoriteProduct(product));
  };
  const remove = () => {
    dispath(removeFavorite(product.id));
    dispath(FetchRemoveFavoriteProduct(product));
  };

  return (
    <div className={styles.favoriteProduct} id={product.id}>
      <img src={product.img} alt={product.title} />
      <p className={styles.favoriteProduct__totalPrice}>{product.totalPrice}</p>
      <p className={styles.title}>{product.title}</p>
      <div className={styles.count}>
        <button onClick={decrement}>-</button>
        <p>{product.count}</p>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={remove}>-</button>
    </div>
  );
};
