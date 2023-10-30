import { FormsStyle } from "./FormsStyle";
const Forms = () => {
  return (
    <>
      <FormsStyle>
        <div className="columnBox">
          <div className="columnBox_on">
            <div className="t1">
              <h5>Как насчет собеседование?</h5>
              <p>
                А ещё активно развивающиеся страны третьего мира
                <br /> и по сей день остаются уделом либералов, которые
                <br /> жаждут быть рассмотрены исключительно в разрезе
                <br /> маркетинговых и финансовых предпосылок
              </p>
            </div>
            <div className="t2">
              <span>
                <a href="tel:+781298888">
                  <img src="../img/phone_calling.png" alt="" /> (78) 129-88-88
                </a>
              </span>
              <span>
                <a href="mailto:info@nasvyazi.uz">
                  <img src="../img/letter.png" alt="" /> info@nasvyazi.uz
                </a>
              </span>
              <span>
                <a href="https://maps.app.goo.gl/H9o9ZhXPW3Wtt1wg7">
                  <img src="../img/streetsMapPoint.png" alt="" /> г. Ташкент,
                  Юнусабадский районул. Осиё 6/73
                </a>
              </span>
            </div>
          </div>
          <div className="columnBox_to">
            <p class="a1">Заполните форму</p>
            <form>
              <div className="a2">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value=""
                />
                <div class=" react-tel-input ">
                  <input
                    class="form-control "
                    placeholder="+998 (__) ___-__-__"
                    type="tel"
                    value="+998"
                  />
                  <div class="flag-dropdown ">
                    <div
                      class="selected-flag"
                      title="Uzbekistan: + 998"
                      tabindex="0"
                      role="button"
                      aria-haspopup="listbox"
                    >
                      <div class="flag uz">
                        <div class="arrow"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <textarea name="comment" placeholder="Комментарий"></textarea>
              </div>
              <div class="btnmain"></div>

              <div class="btnmain">
                <div class="sc">
                  <label class="container_checkbox">
                    <input type="checkbox" checked="" />
                    Согласен(а) с политикой конфиденциальности
                    <span class="checkmark"></span>
                  </label>
                </div>
                <button type="submit">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      </FormsStyle>
    </>
  );
};
export default Forms;
