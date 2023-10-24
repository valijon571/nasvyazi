import { CardStyle } from "./CardStyle";
const Card = () => {
  return (
    <>
      <CardStyle>
        <div className="cardd">
          <h5>Почему выбирают нас?</h5>

          <div className="card_on">
            <div className="on">
              <div class="card">
                <img
                  class="card-img-top"
                  src="../img/usersGroupRounded.png"
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">Наш персонал</h4>
                  <p class="card-text">
                    Наши операторы работают в многофункциональный CRM - системе,
                    позволяющая фиксировать каждый ваш звонок
                  </p>
                </div>
              </div>
              <div class="card">
                <img
                  class="card-img-top"
                  src="../img/clockCircle.png"
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">Круглосуточное обслуживание</h4>
                  <p class="card-text">
                    Мы работаем без выходных, праздников и технических работ.
                    Ваш клиент всегда на связи
                  </p>
                </div>
              </div>
            </div>

            <div className="on">
              <div class="card">
                <img
                  class="card-img-top"
                  src="../img/headphonesRound.png"
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">5 секунд на ответ оператора</h4>
                  <p class="card-text">
                    Наша система позволяет принимать от ста и более звонков
                    одновременно
                  </p>
                </div>
              </div>
              <div class="card">
                <img
                  class="card-img-top"
                  src="../img/pieChart.png"
                  alt="Card image"
                />
                <div class="card-body">
                  <h4 class="card-title">Детальная отчетность</h4>
                  <p class="card-text">
                    Детальная отчетность, запись и контроль всех сообщений. Вы
                    всегда будете в курсе
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardStyle>
    </>
  );
};
export default Card;
