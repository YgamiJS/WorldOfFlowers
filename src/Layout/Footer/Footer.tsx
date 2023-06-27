import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <ul>
            <li className="medium-text">Навигация</li>
            <li>
              <Link to="">About </Link>
            </li>
            <li>
              <Link to="">Careers</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
          </ul>
          <ul>
            <li className="medium-text">Меню</li>
            <li>
              <Link to="">Новинки</Link>
            </li>
            <li>
              <Link to="">Популярные букеты</Link>
            </li>
            <li>
              <Link to="">Privaci Policy</Link>
            </li>
          </ul>
          <ul>
            <li className="medium-text">Контакты</li>
            <li>
              <Link to="">Пролетарская набережная, 005 кв. 415</Link>
            </li>
            <li>
              <Link to="">(687) 390-71-79</Link>
            </li>
            <li>
              <Link to="">Morris.Luettgen@@mail.ru</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
