import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { Link } from "react-router-dom";
import { Control, Slider } from "@/Components";
import { images } from "@/assets/images";
import "./Home.scss";
import { useEffect } from "react";
import { fetchProducts } from "@/store/ProductsSlice";

export const Home = () => {
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

  return (
    <>
      <div className="Interior">
        <div className="Interior__container container">
          <div className="Interior__text">
            <h1>LOVER FLOWER</h1>
            <p className="small-text">
              Создаем для тех, кто ценит свежест и изящество цветка
            </p>
          </div>
          <Control
            placeholder="Search plant"
            text={<img src={images.input} alt="" />}
          />
        </div>
      </div>
      <div className="Advantages">
        <div className="Advantages__container container">
          <div className="Advantages__item">
            <img src={images.box} alt="" />
            <div>
              <p className="Advantage__name">Free Shapping</p>
              <p className="Advantage__page small-text">
                No charge for each delivery
              </p>
            </div>
          </div>
          <div className="Advantages__item">
            <img src={images.money} alt="" />
            <div>
              <p className="Advantage__name">Quick Payment</p>
              <p className="Advantage__page small-text">100% secure payment</p>
            </div>
          </div>
          <div className="Advantages__item">
            <img src={images.support} alt="" />
            <div>
              <p className="Advantage__name">24/7 Support</p>
              <p className="Advantage__page small-text">Quick support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Products">
        <div className="Products__container container">
          <div className="Products__text">
            <h1>Новинки</h1>
            <Link to="">See all colection</Link>
          </div>
          <div className="Products__merchandises">
            {products.length > 0 ? (
              <Slider products={products} />
            ) : (
              <div className="empty">
                <h1 className="meduim-text">No products yet</h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="Reference">
        <div className="Reference__container container">
          <div className="Reference__text">
            <h1>Популярные букеты</h1>
            <p className="small-text">
              Самые любимые композиции наших клиентов
            </p>
          </div>
          <div className="Reference__refs">
            <Link to="">
              <img className="big" src={images.bed1} alt="" />
              <p className="medium-text">Гвоздики с эвкалиптом</p>
            </Link>
            <Link to="">
              <img className="medium" src={images.ladder1} alt="" />
            </Link>
            <Link to="">
              <img className="medium" src={images.ladder2} alt="" />
            </Link>
            <Link to="">
              <img className="big" src={images.bed2} alt="" />
              <p className="medium-text">Дельфиниум</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
