import { useAppSelector } from "@/hooks/useRedux";
import { Slider } from "@/Components";
import "./AboutUs.scss";

export const AboutUs = () => {
  const products = useAppSelector((state) => state.products.merchandises);
  return (
    <div className="Aboutus">
      <div className="Aboutus__container container">
        <section className="Aboutus-text">
          <h1 className="Aboutus-text__h1">LOVER FLOWER</h1>
          <p className="Aboutus-text__p">
            Создаем для тех, кто ценит свежест и изящество цветка
          </p>
        </section>
        <section className="Aboutus-about">
          <h1 className="Aboutus-about__h1">О нас</h1>
          <div className="team">
            <h1 className="team__h1">
              молодая команда разных людей с одинаковыми ценностями.
            </h1>
            <p className="team__p">
              Мы считаем, что удовольствие от качества длится дольше, чем
              удовольствие от низкой цены. И поэтому в создание нашей букетерии
              мы вложили все, чем располагаем: душу, сердце, время и мечты! Мы
              готовы обещать вам только то, что можем сделать. А делаем мы
              только самое качественное, самое интересное и обязательно
              уникальное. Мы всегда честны со своими клиентами во всем – в нашем
              каталоге только те букеты, которые вы действительно сможете
              купить.
            </p>
          </div>
          <p className="Aboutus-about__p">
            Природная гармония цвета, неповторимость бутонов и Ваши чувства в
            нежных лепестках не оставят никого равнодушным.
          </p>
          <h1 className="Aboutus-about__new">Новинки</h1>
          <div className="Aboutus-about__products">
            {products.length > 0 ? (
              <Slider products={products} />
            ) : (
              <div className="empty">
                <h1 className="meduim-text">No products yet</h1>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
