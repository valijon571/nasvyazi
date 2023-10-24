import { AccordionStyle } from "./AccordionStyle";
import { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(0);

  return (
    <>
      <AccordionStyle>
        <div>
          <div className="faq_on">
            <div className="accordion_on">
              <div>
                <button
                  className={open === 1 ? " accordion" : "accordion"}
                  onClick={() => setOpen(open === 1 ? 0 : 1)}
                >
                  <div
                    className={
                      open === 1
                        ? "active accordion-btn__items"
                        : " accordion-btn__items"
                    }
                  >
                    <h4>Что такое IP телефония?</h4>
                    <img src="../img/squareAltArrowDown.png" />
                  </div>

                  {open === 1 ? (
                    <div className="panel" style={{ display: "block" }}>
                      <p>
                        Стоимость рассчитывается согласно техническому заданию
                        (ТЗ), которое Вы можете заполнить, нажав на троеточие.
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </button>
              </div>
              <br />
              <div>
                <button
                  className={open === 2 ? " accordion" : "accordion"}
                  onClick={() => setOpen(open === 2 ? 0 : 2)}
                >
                  <div
                    className={
                      open === 2
                        ? "active accordion-btn__items"
                        : " accordion-btn__items"
                    }
                  >
                    <h4>Почему колл-центр важная точка бизнеса</h4>
                    <img src="../img/squareAltArrowDown.png" />
                  </div>

                  {open === 2 ? (
                    <div className="panel" style={{ display: "block" }}>
                      <p>
                        В зависимости от объема и сложности работ, в среднем
                        около 7-10 дней с момента заключения договора.
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </button>
              </div>
              <br />
              <div>
                <button
                  className={open === 3 ? " accordion" : "accordion"}
                  onClick={() => setOpen(open === 3 ? 0 : 3)}
                >
                  <div
                    className={
                      open === 3
                        ? "active accordion-btn__items"
                        : " accordion-btn__items"
                    }
                  >
                    <h4>Переадресация звонков</h4>
                    <img src="../img/squareAltArrowDown.png" />
                  </div>

                  {open === 3 ? (
                    <div className="fifa" style={{ display: "block" }}>
                      <p>
                        Если Вы хотите удостовериться в качестве предоставляемых
                        услуг, закажите "Тест-драйв". Развеем Ваши сомнения,
                        выполнив часть работ бесплатно.
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </button>
              </div>
              <br />
              <div>
                <button
                  className={open === 4 ? " accordion" : "accordion"}
                  onClick={() => setOpen(open === 4 ? 0 : 4)}
                >
                  <div
                    className={
                      open === 4
                        ? "active accordion-btn__items"
                        : " accordion-btn__items"
                    }
                  >
                    <h4>Какая выгода?</h4>
                    <img src="../img/squareAltArrowDown.png" />
                  </div>
                  {open === 4 ? (
                    <div className="fifa" style={{ display: "block" }}>
                      <p>
                        IVR (Interactive Voice Response) - голосовой
                        автоответчик, помогающий клиенту сориентироваться при
                        контакте с Вашей организацией по телефону. Он
                        прослушивает приветствие, выбирает язык обслуживания,
                        далее соединяется с оператором простым нажатием цифр на
                        телефоне.
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </AccordionStyle>
    </>
  );
};
export default Accordion;
