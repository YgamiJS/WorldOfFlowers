import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { Control, Select, Slider } from "@/Components";
import input from "@/assets/images/input.png";
import { fetchProducts, sortProducts } from "@/store/ProductsSlice";
import { IOption } from "@/types/types";
import "./Shop.scss";
import { useEffect } from "react";

export const Shop = () => {
  const products = useAppSelector((state) => state.products.merchandises);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchProducts({
        limit: 0,
        page: 0,
        url: "http://localhost:5000/api/products",
      })
    );
  }, []);

  const sort = (selected: IOption["value"]) => {
    dispatch(sortProducts(selected));
  };

  return (
    <div className="shop">
      {products.length > 0 ? (
        <>
          <div className="container">
            <Control
              placeholder="Search plant"
              text={<img src={input} alt="" />}
            />
            <Select
              options={[
                { value: "title", name: "По заголовку" },
                { value: "description", name: "По описанию" },
                { value: "price", name: "По цене" },
                { value: "color", name: "По цвету" },
                { value: "country", name: "По стране" },
              ]}
              onChange={sort}
            />
          </div>
          <Slider products={products} />
          <Slider products={products} />
          <Slider products={products} />
        </>
      ) : (
        <div className="empty">
          <h1 className="meduim-text">No products yet</h1>
        </div>
      )}
    </div>
  );
};
