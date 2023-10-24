import { HeaderStyle } from "./HeaderStyle";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <HeaderStyle>
        <div className="hedar">
          <div className="img">
            <img src="../img/logo.png" alt="foto" />
          </div>
          <div className="hedar_on">
            <ul class="links">
              <li>
                <a href="/#comp">О компании</a>
              </li>
              <li>
                <a href="/#servicess">Услуги</a>
              </li>
              <li>
                <a href="/#clients">Клиенты</a>
              </li>
              <li>
                <a href="/#formm" >Контакты</a>
              </li>
              <li>
                <a href="/#question">FAQ</a>
              </li>
              <li>
                <a className="careerlink" href="/career">Карьера</a>
              </li>
            </ul>
          </div>
          <div class="hedar_to">
            <a  href="tel:+781298888">
              <span>(78) 129-88-88</span>
              <img src="../img/phone_calling.png" alt="" />
            </a>
          </div>
          {show === true ? (
          <div className="hedar_to1">☰</div>
          ) : null}
        </div>
      </HeaderStyle>
    </>
  );
};
export default Header;
