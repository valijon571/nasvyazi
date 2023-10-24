import { FooterStyle } from "./FooterStyle";
const Footer = () => {
  return (
    <>
      <FooterStyle>
        <div className="foter">
          <div className="fot">
            <div className="img">
              <img
                src="https://nasvyazi.uz/static/media/brand_white.b527320a8b6e8474b5dfdc61b824ad42.svg"
                alt="foto"
              />
            </div>

            <div class="hedar_to">
              <img src="../img/Facebook.svg" alt="" />
              <img src="../img/Instagram.svg" alt="" />
              <img src="../img/Telegram.svg" alt="" />
            </div>
          </div>
          <hr />
          <div className="fot_on">
            <p>© Nasvyazi 2023</p>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
      </FooterStyle>
    </>
  );
};
export default Footer;
