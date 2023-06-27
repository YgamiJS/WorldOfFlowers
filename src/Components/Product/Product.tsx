import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useNavigate, useParams } from "react-router";
import {
  FetchAddFavoriteProduct,
  addFavorite,
} from "@/store/FavoriteProductsSlice";
import { IProduct } from "@/types/types";
import { Link } from "react-router-dom";
import styles from "./Product.module.scss";
import { SliderImagesProduct } from "@/Components/SliderImagesProduct/SliderImagesProduct";
import { useAuth } from "@/hooks/useAuth";

export const Product = () => {
  const products = useAppSelector((state) => state.products.merchandises);
  const favorite = useAppSelector(
    (state) => state.favoritesProducts.merchandises
  );
  const dispath = useAppDispatch();

  const { id } = useParams();

  const navigate = useNavigate();

  const [bought, setBought] = useState<boolean>(
    favorite.some((favoriteProd) => favoriteProd.id === id)
  );

  const auth = useAuth();

  const addFavoriteProduct = (product: IProduct) => {
    if (auth.isAuth) {
      dispath(
        addFavorite({
          ...product,
          count: 1,
          totalPrice: product.price,
        })
      );
      dispath(
        FetchAddFavoriteProduct({
          ...product,
          count: 1,
          totalPrice: product.price,
        })
      );
      setBought(true);
    } else {
      navigate("/WordOfFlowers/login");
    }
  };

  const product = products.find((product) => product.id === id)!;

  return (
    <div className={styles.product}>
      <div className={styles.product__container + " container"}>
        <SliderImagesProduct product={product} />
        <div className={styles.info}>
          <h1 className={styles.info__title}>{product.title}</h1>
          <p className={styles.info__price}>
            {product.old && <span className={styles.line}>{product.old}</span>}
            &nbsp;
            {product.price}
          </p>
          <p className={styles.info__description}>
            Описание: {product.description}
          </p>
          <p className={styles.info__country}>Страна: {product.country}</p>
          <p className={styles.info__type}>Вид товара: {product.type}</p>
          <p className={styles.info__color}>Цвет: {product.color}</p>
          {!bought ? (
            <button
              className={styles.info__button}
              onClick={() => addFavoriteProduct(product)}
            >
              Купить
            </button>
          ) : (
            <Link className={styles.info__button} to="/WordOfFlowers/Basket/">
              В корзину
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
