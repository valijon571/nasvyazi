import { MainStyle } from "./MainStyle";
import Hedr from "./Hedr";
import Footer from "./glabal/Footer";
import Card from "./glabal/Card";
import Row from "./glabal/Row";
import Forms from "./glabal/Forms";
import Accordion from "./glabal/Accordion";
import Rectangle from "./glabal/Rectangle";

import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const { reviews, profile } = useSelector((s) => s);

  useEffect(() => {
    getReviews();
  }, []);
  const getReviews = () => {
    axios
      .get("https://api.onlinedu.uz/api/v1/reviews")
      .then((r) => {
        dispatch({
          type: "SET_REVIEWS",
          payload: r?.data ?? [],
        });
      })
      .catch((e) => {})
      .finally(() => {});
  };
  return (
    <>
      <MainStyle>
        <Hedr />
        <div>
          {reviews?.map((item, index) => (
            <div key={index}>
              <h3>{item?.name}</h3>
            </div>
          ))}
        </div>
        <div className="contaner">
          <div id="comp" className="fott_on"></div>
          <div className="fott">
            <h4>О компании</h4>
            <p>
              Вот вам яркий пример современных тенденций — существующая теория
              предполагает
              <br /> независимые способы реализации экономической
              целесообразности принимаемых
              <br /> решений. С учётом сложившейся международной обстановки,
              понимание сути
              <br /> ресурсосберегающих технологий прекрасно подходит для
              реализации глубокомысленных
              <br /> рассуждений. Внезапно, акционеры крупнейших компаний
              преданы социально-
              <br />
              демократической анафеме.
              <br /> Но элементы политического процесса, превозмогая сложившуюся
              непростую экономическую
              <br /> ситуацию, разоблачены. Есть над чем задуматься: тщательные
              исследования конкурентов
              <br /> объявлены нарушающими общечеловеческие нормы этики и
              морали. Картельные сговоры не
              <br /> допускают ситуации, при которой акционеры крупнейших
              компаний.
            </p>
          </div>
          <Rectangle />

          <div className="but">
            <a href="/about">Подробнее</a>
          </div>
          <Card />

          <div className="serviceBtns">
            <div id="servicess" className="serviceBtns_on"></div>

            <h4>Наши услуги</h4>
            <div className="btns">
              <button>Все услуги</button>
              <button>Решения для бизнеса</button>
              <button>Входящие услуги</button>
              <button>Исходящие услуги</button>
              <button>NEO услуги</button>
            </div>
            <div class="columnBok">
              <div class="columnBokSub">
                <div class="cardService">
                  <p class="t1">Корпоративное приветствие</p>
                  <div class="aLink">
                    Подробнее <img src="../img/squareTopDown.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="columnBokSub">
                <div class="cardService">
                  <p class="t1">Система IVR и Виртуальный секретарь</p>
                  <div class="aLink">
                    Подробнее <img src="../img/squareTopDown.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="columnBokSub">
                <div class="cardService">
                  <p class="t1">Автокоммутатор </p>
                  <div class="aLink">
                    Подробнее <img src="../img/squareTopDown.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="columnBokSub">
                <div class="cardService">
                  <p class="t1">&nbsp;Горячая линия </p>
                  <div class="aLink">
                    Подробнее <img src="../img/squareTopDown.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="columnBokSub">
                <div class="cardService">
                  <p class="t1">Техническая поддержка</p>
                  <div class="aLink">
                    Подробнее <img src="../img/squareTopDown.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="columnBokSub">
                <div class="cardService">
                  <p class="t1">Работа с жалобами</p>
                  <div class="aLink">
                    Подробнее <img src="../img/squareTopDown.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="columnBokSub">
                <div class="cardService">
                  <p class="t1">Анкетирование и опросы</p>
                  <div class="aLink">
                    Подробнее <img src="../img/squareTopDown.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="columnBokSub">
                <div class="cardService">
                  <p class="t1">Поддержка рекламных акций </p>
                  <div class="aLink">
                    Подробнее <img src="../img/squareTopDown.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="columnBokSub">
                <div class="cardService">
                  <p class="t1">Тайный покупатель</p>
                  <div class="aLink">
                    Подробнее <img src="../img/squareTopDown.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="columnBokSub">
                <div class="cardService">
                  <p class="t1">Карманный HR</p>
                  <div class="aLink">
                    Подробнее <img src="../img/squareTopDown.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="columnBokSub">
                <div class="cardService">
                  <p class="t1">Поддержка SMM</p>
                  <div class="aLink">
                    Подробнее <img src="../img/squareTopDown.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="columnBokSub">
                <div class="cardService">
                  <p class="t1">Feedback</p>
                  <div class="aLink">
                    Подробнее <img src="../img/squareTopDown.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="clients" className="brand_on"></div>

          <h4 className="brand">Нам доверились</h4>
        </div>
        <Row />

        <div className="contaner">
          <div id="formm" className="formm_on"></div>

          <Forms />

          <div id="question" className="question_on"></div>
          <h5>Часто задаваемые вопросы</h5>
          <Accordion />
        </div>
        <Footer />
      </MainStyle>
    </>
  );
};
export default Main;
