import { useState } from "react";
import { HedrStyle } from "./HedrStyle";
import Header from "./glabal/Header";
const Hedr = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <HedrStyle>
        <Header />

        <div className="image">
          <img className="img1" src="../img/ubtract .png" alt="foto" />
          <div className="contenir">
            {/* ----------body----------- */}
            <div className="body">
              <div className="body_on">
                <h2>
                  Nasvyazi современный <br /> контактный центр
                </h2>
                <p>
                  Наши операторы работают в многофункциональный CRM - системе,
                  <br />
                  позволяющая фиксировать каждый ваш звонок
                </p>
                <div className="button">
                  <a href="https://t.me/nasvyazi_uz">Задать вопрос</a>
                </div>
              </div>
              <div>
                <img className="img" src="../img/subtract.png" alt="" />
              </div>
            </div>
            <div class="friQwB">
              <div class="rightMenu">
                <div class="sub">
                  {show === true ? (
                    <div class="menuss">
                      <a class="menuss_sub" href="/#formm">
                        Оставить заявку
                      </a>
                      <a
                        href="https://t.me/nasvyazi_uz"
                        target="_blank"
                        class="menuss_sub"
                      >
                        Обратный звонок
                      </a>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc_Gm3U1Lb3XQcZWRbAgrlS4JhvTYmhO3wk5p3wLgGhjnHG1Q/viewform?usp=sf_link"
                        target="_blank"
                        class="menuss_sub"
                      >
                        Составить ТЗ
                      </a>
                    </div>
                  ) : null}
                  <div
                    class="block"
                    style={
                      show === true
                        ? {
                            background: "rgb(2, 50, 74)",
                          }
                        : {
                            background: "rgb(1, 147, 222)",
                          }
                    }
                    onClick={() => setShow(!show)}
                  >
                    {show === true ? (
                      <img
                        src="https://nasvyazi.uz/static/media/closemenu.5a700f60deeafba484a5b943ae56932d.svg"
                        class="threedots"
                        alt=""
                      />
                    ) : (
                      <img src="../img/menuDots.png" class="threedots" alt="" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HedrStyle>
    </>
  );
};
export default Hedr;
