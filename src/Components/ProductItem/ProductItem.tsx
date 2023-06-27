import { IProduct } from "@/types/types";
import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";

interface IProps {
  product: IProduct;
  [x: string]: any;
}

export const ProductItem = ({ product, ...props }: IProps) => {
  return (
    <Link
      to={`/WordOfFlowers/shop/${product.id}`}
      className={styles.productItem}
      {...props}
    >
      <img src={product.img} alt={product.title} />
      <div className={styles.info}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price + " small-text"}>
          {product.old && <span className={styles.line}>{product.old}</span>}
          &nbsp;
          {product.price}
        </p>
      </div>
    </Link>
  );
};
