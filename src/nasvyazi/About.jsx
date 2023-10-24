import { AboutStyle } from "./AboutStyle";
import axios from "axios";
import React from "react";
import Header from "./glabal/Header";
import Footer from "./glabal/Footer";
import Card from "./glabal/Card";
import Row from "./glabal/Row";
import Rectangle from "./glabal/Rectangle"
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <AboutStyle>
        <Header />

        <div className="contaner">
          <div className="link">
            <Link to="/">Главная/О компании</Link>
          </div>

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
          <Card />
          <h4 className="brand">Нам доверились</h4>
        </div>
        <Row />
        <Footer />
      </AboutStyle>
    </>
  );
};
export default About;
