import { images } from "@/assets/images";
import "./Food.scss";

export const Found = () => {
  return (
    <div className="Found">
      <div className="Found__container container">
        <h1 className="Found__h1">Контакты</h1>
        <ul className="contacts-list">
          <li className="contacts-list__item">
            <p className="contacts-list__name">Почта</p>
            <p className="contacts-list__p">(687) 390-71-79</p>
          </li>
          <li className="contacts-list__item">
            <p className="contacts-list__name">Номер</p>
            <p className="contacts-list__p">Morris.Luettgen@@mail.ru</p>
          </li>
          <li className="contacts-list__item">
            <p className="contacts-list__name">Адрес</p>
            <p className="contacts-list__p">
              Пролетарская набережная, 005 кв. 415
            </p>
          </li>
        </ul>
        <p className="Found__p">Мы на карте</p>
        <img className="Found__map" src={images.map} alt="Карта" />
      </div>
    </div>
  );
};
